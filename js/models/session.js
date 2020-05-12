App.User.FilmSession = App.Models.ApiModel.extend({
    path: 'update_session',
    urlRoot: App.Settings.Api.url,
    idAttribute: 'session_id',
    url: function() {
        return this.urlRoot + this.path + "/" + this.get("session_id") + "/" + this.get("timestamp") + "?format=json&api_key=" + App.Settings.Api.key;
    },
    defaults: function() {
        return {
            'session_id': '',
            'timestamp': 0,
            'watched': false,
            'vod_id': ''
        };
    },
    initialize: function(options) {
        this.on("change:session_id", this.onSessionLoad, this);
        this.on("player:timeupdate", this.onSetDuration, this);

    },
    onSetDuration: function(duration) {
        var seconds = parseInt(duration);
        if (seconds > 0)
        this.set("timestamp", seconds);
    },

    onSessionLoad: function() {
        this.trigger('playsession:ready', this);
        $log("[FilmSession] Loaded session: " + this.get('session_id'));
    },
    checkStatus: function(status) {

        if (status === "Active") {
            this.trigger("playsession:session:active", this);
        }
        if (status === "error") {
            app.usercollection.remove(this.get('vod_id'));
            app.user.session.set('session_id', false);
            app.user.session.set('auth_id', false);

            this.stopFetching();
            this.trigger("playsession:overridden", this);
            alert("This content is being streamed from another device, please play only from one device at the time.");
        }
    },
      /**
     * Do initial processing of the ticket
     * @return boolean
     */
    parse: function(data) {

        $log("Received Session: " +JSON.stringify(data));
        if (data.status) this.checkStatus(data.status);
        return data;
    }
});
_.extend(App.User.FilmSession.prototype, BackbonePolling);


App.User.Session = Backbone.Model.extend({
    path: 'session',
    cookie_name: App.Settings.cookie_name,
    purchase_cookie_name: App.Settings.purchase_cookie_name,
    counter: 0,
    // Initialize with negative/empty defaults
    // These will be overriden after the initial checkAuth
    defaults: function() {
        return {
            logged_in: false,
            enabled: false,
            user_id: '',
            session_id: '',
            auth_id: '',
            activationCode: '',
        }
    },
    url: function() {
        return App.Settings.Api.url + 'session/' + '?jsoncallback=?';
    },
    initialize: function() {
        this.cookies = new App.Collections.CookieCollection;
        this.purchases = new App.User.CookiePurchases({
            session: this
        });
        this.profile = new App.User.Profile({
            session: this,
            purchases: this.purchases,
        });
        this.set("profile", this.profile);
        this.on('poll:enable', this.enable, this);
        this.on('poll:disable', this.disable, this);
        this.profile.on('user:profile:login', this.onUserAuthenticate, this);
        this.on('ticket:purchase', this.onTicketReceived, this);
        this.parseAuthCookie();
        _.bindAll(this, 'send', 'fetch', 'logout', 'login', 'register', 'parseAuthCookie', 'onUserAuthenticate', 'writeAuthCookie', 'getNewPurchases', 'clearNewPurchases');
    },
    /** Reset session, clear cookies. **/
    reset: function() {
        this.clearAuthCookie();
        this.set(this.defaults());
    },
    clearAuthCookie: function() {
        var cookieName = App.Settings.cookie_name;
        this.cookies.deleteByName(cookieName);
    },
    parseAuthCookie: function() {
        var cookie = this.cookies.findWhere({
            name: this.cookie_name
        });
        if (undefined !== cookie) {
            $log("Found cookie " + this.cookie_name + " with value " + cookie.get("value"));

            try {
                var value = JSON.parse(cookie.get("value"));
            } catch (err) {
                $error("Error while parsing session cookie:" + err.message);
                cookie.destroy();
                return;
            }

            if (undefined !== value.user_id && undefined !== value.auth_id) {
                var cookieData = {
                    user_id: value.user_id,
                    auth_id: value.auth_id
                };

                $log("Authenticating with Session cookie: auth_id:" + cookieData.auth_id + " user_id:" + cookieData.user_id);
                this.set(cookieData);
                return true;
            } else {
                cookie.destroy();
            }
        }
        return false;
    },
    writeAuthCookie: function(user_id, auth_id) {
        var data = {
            user_id: user_id,
            auth_id: auth_id
        };
        $log("Writing cookie " + this.cookie_name + " - auth_id:" + auth_id + " user_id:" + user_id);
        this.cookies.add({
            id: this.cookie_name,
            name: this.cookie_name,
            value: JSON.stringify(data)
        });
    },
    getNewPurchases: function() {
        var cookie = this.cookies.findWhere({
            name: "film"
        });
        if (undefined !== cookie) {
            return cookie.get("value");
        }
        return false;
    },
    clearNewPurchases: function() {
        var cookie = this.cookies.findWhere({
            name: "film"
        });
        cookie.destroy();

        if (undefined !== cookie) {
            return cookie.get("value");
        }
        return false;
    },
    /*
     * Get a token for user.
     * For unregistered users, email is sufficient
     * For Registered users, use password or access token to authenticate
     *
     *
     */
    getToken: function(email, password, access_token, callback, errcb) {
        if (!password) password = "";
        if (access_token && password == "") password = access_token;
        if (!this.isLoggedIn()) {
            this.reset();
            var params = ["get_token", email, password];
            if (password == "") var params = ["get_token", email];
            app.api.call(params, {}, function(data) {
                if (data.status == "ok") {
                    if (data.token) {
                        this.set("auth_id", data.token);
                        this.trigger("user:token:authenticated", data.token);
                        if (callback) callback(data);
                        if (email == "anonymous@vifi.ee") this.disable();
                    }
                } else {
                    this.trigger("user:token:error", data.message);
                    if (callback) callback(data);
                    if (errcb) errcb(data);
                }
            }.bind(this), true);
        }
    },
    /*
     * Get authentication parameters for doing API call.
     * @param array - Optional parameters to add to the call
     * @return object for the $.ajax call.
     *
     */
    getParams: function(data) {
        var options = {}
        var params = {
            dataType: 'jsonp',
            data: {
                api_key: App.Settings.Api.key,
                authId: this.get("auth_id"),
                sessionId: this.get("session_id"),
                format: 'json',
            }
        };
        if (data) params.data = _.extend(params.data, data);
        options.data = JSON.parse(JSON.stringify(params.data));
        options.dataType = params.dataType;
        return options;
    },
    /* Start poller */
    enable: function() {
        if (!this.isLoggedIn() && !this.isEnabled()) {
            this.set("enabled", true);
            this.counter = 0;
            this.send();
        }
    },
    /* Stop poller */
    disable: function() {
        this.set("enabled", false);
    },
    /* Start polling for a session */
    send: function() {
        if (!this.isLoggedIn() && this.isEnabled()) {
            if (this.counter > 10) {
                $log("Disabling due to 10 failed attempts.");
                this.disable();
                return false;
            }
            this.fetch();
            setTimeout(function() {
                this.send();
                this.counter++;
            }.bind(this), 3000);
        } else {
            $log("Disabling polling, logged in or disabled");
            this.disable();
        }
    },
    isEnabled: function() {
        return this.get("enabled");
    },
    isLoggedIn: function() {
        return this.get("logged_in");
    },
    /* Fetch info about the session */
    fetch: function() {
        if (!this.isEnabled()) return;
        if (!this.isLoggedIn()) this.path = this.get("activationCode");
        else this.path = '';
        var options = this.getParams();
        $.getJSON(this.url(), options.data).done(function(data) {
            if (this.isLoggedIn() === false) {
                if (undefined !== data.status && data.status == "error") {
                    $log("Retrieving new token " + data.message);
                    this.reset();
                    this.once("user:token:authenticated", this.fetch, this);
                    this.getToken(this.profile.get("email"));
                    return false;
                }
                if (undefined !== data.cookie) {
                    this.set("session_id", data.cookie);
                }
                if (data.user_id != null) this.set("user_id", data.user_id);
            } else {
                this.disable();
            }
        }.bind(this), "jsonp").error(function(data) {
            this.reset();
            this.trigger("error", "Failed login. Something's up with service.")
            $log(data);
        }.bind(this));
    },
    onUserAuthenticate: function() {
        if (this.profile.isAnonymous() !== true) {
            this.set("logged_in", true);
            this.writeAuthCookie(this.get("user_id"), this.get("auth_id"));
        }
        this.trigger("user:login:success", this.get("user_id"));
        this.disable();
    },
    onTicketReceived: function(ticket) {
        if (ticket) {
            ticket.set("user_id", this.get("user_id"));
            app.usercollection.add(ticket);
            this.trigger("ticket:purchase:done", ticket);
        }
        return false;
    },
    login: function(email, password) {
        if (!password || !email) return false;
        app.api.call(["user", "login", email, password], {}, function(data) {
            if (data.status == "ok") {
                this.set("user_id", data.user_id);
                this.set("session_id", data.cookie);
                this.set("auth_id", data.activationKey);
                this.set("activationCode", data.activationCode);
                this.trigger("user:login", data.message);
                //  this.session.enable();
            } else {
                this.trigger("user:login:fail", data);
            }
        }.bind(this));
    },
    logout: function() {
        this.reset();
        this.profile.clear();
        this.trigger("user:logout");
        app.usercollection.reset();
        app.router.navigate("/", {
            trigger: true
        });
        return false;
    },
    register: function(email, password) {
        if (!password || !email) return false;
        app.api.call(["user", "register", email, password], {}, function(data) {
            if (data.status == "ok") {
                this.set("user_id", data.user_id);
                this.set("session_id", data.cookie);
                this.set("auth_id", data.activationKey);
                this.trigger("user:register:success", data);
            } else {
                this.trigger("user:register:fail", data);
            }
        }.bind(this), true);
    },
});