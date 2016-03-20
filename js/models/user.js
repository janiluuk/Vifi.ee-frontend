App.User = {};
App.User.Ticket = Backbone.Model.extend({
    filmsession: false,
    content: false,
    defaults: {
        id: false,
        vod_id: false,
        validto: '',
        validfrom: '',
        validtotext: '' ,
        title: '',
        type: '',
        auth_code: '',
        user_id: false,
        status: 'invalid',
    },    

    /**
     * Do initial processing of the ticket
     * @return boolean
     */
    
    parse: function(data) {         

         var data = _.pick(data, _.keys(this.defaults));
         
         if (data.vod_id) {
            data.id = data.vod_id
         } else {
            data.vod_id = data.id;
         }
         
         this.set("content", new App.Player.FilmContent({id: this.get("id"), ticket: this}));
         if (this.get("session")) { 
            this.set("filmsession", new App.Models.FilmSession(this.get("session")));
         }
 

         if (!this.isExpired(data.validto)) this.set("status", "active");
         if (data.validto) data.validtotext = this.getValidityText(data.validto);
         return data;
    },

    /**
     *
     * Gets a humanized version of dates
     * 
     * @param {string} date String expression (YYYY-MM-DD HH:II:SS)
     *
     * @return {string} Date string
     */
    
    getValidityText: function(date) {

        if (typeof(this.get("validto")) != "undefined")         
        if (!date) date = App.Utils.stringToDate(this.get("validto"));

        return App.Utils.dateToHumanreadable(date);
         
    },
    /**
     * Check if ticket is valid
     * @return boolean
     *
     */
    isValid: function() {
        return true;
    },
    
    /**
     * Check if ticket has expired
     * @return boolean
     *
     */
    isExpired: function(validto) {
        if (!validto) valid_to = this.get("validto");
        
        if (!App.Utils.dateExpired(validto)) {
            return false;
        }
        return true;
    }
});

App.User.Profile = App.Models.ApiModel.extend({
    path: function() { return "profile" },
    params: {},
    defaults: function() {
        return {
            "id": '',
            "user_id": false,
            "name": '',
            "lastname": '',
            "firstname": '',
            "notificationText": '',
            "email": 'anonymous@vifi.ee',
            'newsletter': '0',
            "language": "Estonian",
            "tickets": [],
            "paired_user": false,
            "purchase_history": [],
            "favorites": '',
            "profile_picture": false,
            "messages": 0,
            "role": 'Guest',
            "subscriber": 0,
            "active_sessions": []
        };
    },
    initialize: function(options) {
        _.bindAll(this, 'connectFB', 'FBcallback');
        this.session = options.session;
        this.purchases = options.purchases;        
        this.session.on("change:auth_id", this.authorize, this);
        this.on("change:tickets", this.updatePurchases,this);
        this.on("user:facebook-connect", this.connectFB, this);
        this.on("user:pair", this.pair, this);
        this.on("user:unpair", this.unpair, this);
    },
    /**
     * Set profile information gotten from FB connect.
     * @param {App.FBUser} fbuser Parameters gotten from FB Connect
     *
     * @return void
     */
    
    connectFB: function(fbuser) {
        var id = fbuser.get("id");
        if (id != "") {
            this.set("profile_picture", 'https://graph.facebook.com/' + id + '/picture')
            this.set("lastname", fbuser.get("last_name"));
            this.set("firstname", fbuser.get("first_name"));
            this.set("email", fbuser.get("email"));
            this.set("name", fbuser.get("name"));
            this.set("access_token", FB.getAccessToken());
            this.session.getToken(fbuser.get("email"), this.get("password"), this.get("access_token"), this.FBcallback);
        }
    },

    /**
     * Connect user to the backend. ##FIXME - Needs extra validation
     *
     * @return void
     */
    
    FBcallback: function() {
        var authId = this.session.get("auth_id");
        var email = this.get("email");
        if (email == "" || authId == "") {
            $log("missing params, not doing fb callback");
            return false;
        }

        var token = FB.getAccessToken();

        app.api.call(["user", "connectFB", email], {
            token: token,
            authId: authId
        }, function(data) {
            $log("Authenticating with FBToken");
        });
    },
    changePassword: function(oldpass, password) {
        if (!password) return false;
        app.api.call(["user", "changepassword", this.get("email")], {
            password: password,
            oldpassword: oldpass
        }, function(data) {
            if (data.status == "ok") {
                this.trigger("user:changepassword:success", data.message);
            } else {
                this.trigger("user:changepassword:fail", data.message);
            }
        }.bind(this));
    },
    resetPassword: function(email) {
        if (!email) return false;
        app.api.call(["user", "recovery"], {
            email: email
        }, function(data) {
            if (data.status == "ok") {
                this.trigger("user:resetpassword:success", data);
            } else {
                this.trigger("user:resetpassword:fail", data);
            }
        }.bind(this));
    },
    recoverPassword: function(email, key, password) {
        if (!password || !email || !key) return false;
        app.api.call(["user", "recovery"], {
            email: email,
            key: key,
            password: password
        }, function(data) {
            if (data.status == "ok") {
                this.trigger("user:recoverpassword:success", data);
            } else {
                this.trigger("user:recoverpassword:fail", data);
            }
        }.bind(this));
    },

    pair: function(code) {
        var email = this.get("email");
        if (email == "" || code == "") return false;
        app.api.call(["user", email, "pair", code], {}, function(res) {
            if (res.status && res.status == "ok") {
                setTimeout(function() {
                    this.trigger("user:pair:successful");
                    this.fetch();
                }.bind(this), 1500);
            }
        }.bind(this));
    },
    unpair: function(id) {
        var email = this.get("email");
        if (email == "" || id == "") return false;
        app.api.call(["user", email, "unpair", id], {}, function(res) {
            if (res.status && res.status == "ok") this.trigger("user:unpair:success")
        }.bind(this));
    },
    authorize: function() {
        if (this.session.get("auth_id") == "") {
            return false;
        }
        this.fetch({
            success: function(data) {
                if (this.get("user_id") != "") {
                    this.session.set("user_id", this.get("user_id"));
                    this.trigger("user:profile:login", this);
                    if (app.fbuser) this.trigger("user:facebook-connect", app.fbuser);
                    $log("Logging in with user " + this.get("email"));
                    return true;
                }
            }.bind(this)
        });
        return false;
    },
    deauthorize: function() {
        this.clear();
        this.fetch().done(function() {
            return false;
        }.bind(this));
    },

    /**
     * Restore default settings
     * @return {void} 
     */
    
    clear: function() {
        this.set(this.defaults());
    },

    /**
     * Check if user has access to a item.
     * 
     * @param {App.Models.Film} movie Movie 
     *
     * @return boolean true if found from the user collection
     * 
     */
    
    hasMovie: function(movie) {
        var id = movie.get("id");
        var movies = app.usercollection.where({
            id: id
        });
        if (movies.length > 0) return true;
        return false;
    },

    /**
     * If user has a movie in the purchased collection, return the session for it.
     * 
     * @param id int - ID of the movie
     * @return mixed, string or false
     */
     
    getMovieSession: function(id) {
        var movie =  app.usercollection.findWhere({id:id});
        if (movie &&  movie.get("filmsession")) {
            var session = movie.get("filmsession").get("session_id");
            return session;
        }
        return false;
    },
    /**
     * If user has a movie in the purchased collection, return authorization code for it.
     * 
     * @param id int - ID of the movie
     * @return mixed, string or false
     */
     
    getMovieAuthCode: function(id) {
        var movie =  app.usercollection.findWhere({id:id});
        if (movie) {
            var session = movie.get("auth_code");
            return session;
        }
        return false;
    },

    hasSubscription: function() { 
        return this.get("subscriber") === true ? true : false;
    },
    isAnonymous: function() {
        if (this.get("email") == "anonymous@vifi.ee") return true;
        if (this.get("role") == "" || this.get("role") == "Guest") return true;
        return false;
    },
    isRegistered: function() {
        if (this.get("role") == "Registered customer") return true;
        return false;
    },
    getRole: function() {
        return this.get("role");
    },
    hasNewsletter: function() {
        return this.get("newsletter") == "1";
    },
    getLanguage: function() {
        if (this.get("language") == "es") return "Estonian";
        else return "English";
    },
     
    checkPurchases: function() {
        var films = this.purchases.getPurchases();
        if (_.isEmpty(films)) return false;
        return films;
    },
    updateUserCollection: function() {
        if (!app || !app.usercollection) return false;
        var tickets = this.get("tickets");
        _.each(tickets, function(item) {  
            var ticket = new App.User.Ticket(item);
            app.usercollection.add(ticket);
        });
        return app.usercollection;
    },
    updatePurchases: function(cb) {
        var deferred = new $.Deferred();
        this.fetch().done(function() {
            this.updateUserCollection();
            var tickets = this.get("tickets");
            deferred.resolve(tickets);
        }.bind(this));
        return deferred.promise();
    },
    purchase: function(movie) {
        this.updatePurchases().done(function() {
            if (this.hasMovie(movie)) this.trigger("purchase:successful", movie);
        }.bind(this));
    },


});

/**
 * Purchases stored on the cookies 
 * @param Session
 * 
 */
 
App.User.CookiePurchases = Backbone.Model.extend({ 
    
    initialize: function(options) {
        _.bindAll(this, 'getPurchases', 'setPurchases', 'removeFilm', 'cleanPurchases');
        this.session = options.session;
    },

    /**
     * Check for any purchases in the cookies.
     *
     * @return Array List of films
     */ 
       
    getPurchases: function() {
        
        var films = this.session.cookie.get("film");
        
        if (typeof(films) == "undefined" || _.isEmpty(films) ||  films.length < 1) {
            return {};
        }
        try { 
            var vars = atob(films);
            var film_array = JSON.parse(vars);
            return film_array;
        } catch (exception) {
            App.Settings.debug = true;
            $log("No films");
            $log(vars);
            this.session.cookie.clear("film");
        }
        return {};
    },

    /**
     * Set initial collection of films from 
     * JSON array.
     *
     * @param Object of all purchases
     * @return boolean
     * 
     */
    
    setPurchases: function(films) {
        if (!films ||  _.isEmpty(films)) {
            return false;
        }
        var encoded = btoa(JSON.stringify(films));
        this.session.cookie.set(encoded, "film");
        return true;
    },

    /**
     *
     * Remove an item from purchases
     * @param id of the film
     *
     * @return array or false if not found
     */
    
    removeFilm: function(id) {
        var filmlist = this.getPurchases();
        if (!id || _.isEmpty(filmlist)) return false;
        var filteredlist = _.reject(filmlist, function(item) {
            if (typeof item.vod_id != "undefined") return item.vod_id == id.toString();
        });
        if (_.isEmpty(filteredlist)) {
            this.session.cookie.clear("film");
        } else { 
            this.setPurchases(filteredlist);
        }
        return filteredlist;
    },

    /**
     *
     * Clear all expired purchases from cookies
     *
     * @return array or false if not found
     * 
     */
    
    cleanPurchases: function() {

        var films = this.getPurchases();
        if (typeof(films) == "undefined" || _.isEmpty(films)) {
            return false;
        }
        var new_list = _.reject(films, function(item) {
            if (typeof(item.valid_to) == "undefined") return false;
            if (App.Utils.dateExpired(item.valid_to)) {
                return false;
            }
            return true;
        });
        if (!_.isEmpty(new_list)) {
            _.each(new_list, function(item) { 
               this.removeFilm(item.vod_id);
               $log("Removed #"+item.vod_id+ " from cookies");
            });
        }
        return new_list;
    }
});

App.User.Session = Backbone.Model.extend({
    path: 'session',
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
        this.cookie = App.User.Cookie;
        this.purchases = new App.User.CookiePurchases({session: this});
        this.profile = new App.User.Profile({
            session: this,
            purchases: this.purchases,
        });
        this.set("profile", this.profile);
        this.on('poll:enable', this.enable, this);
        this.on('poll:disable', this.disable, this);
        this.profile.on('user:profile:login', this.onUserAuthenticate, this);
        this.once('ticket:purchase', this.onTicketReceived, this);
        
        if (auth_data = this.cookie.parse()) {
            this.set(auth_data);
            $log("Setting cookie authentication data");
        }

        _.bindAll(this, 'send', 'fetch', 'logout', 'login', 'register', 'onUserAuthenticate');
    },

    /** Reset session, clear cookies. **/

    reset: function() {
        this.set(this.defaults());
        this.cookie.clear();
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

            app.api.call(["get_token", email, password], {}, function(data) {
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
            this.cookie.write(this.get("user_id"), this.get("auth_id"), this.get("session_id"));       
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
        }.bind(this));
    },    
 

});
App.User.Cookie = {
    settings: {
        path: '/',
        domain: App.Settings.domain
    },
    parse: function() {
        var cookie = this.get();
        if (cookie && cookie.length > 0) {
            var vars = cookie.split("|");
            var user_id = vars[0];
            var auth_id = vars[1];
            if (user_id != "" && auth_id != "") {
                $log("Authenticating with cookie");
                var cookieData = {
                    user_id: user_id,
                    auth_id: auth_id,
                };
                return cookieData;
            }
            return true;
        }
        return false;
    },

    write: function(user_id, auth_id, session_id) {
        
        if (user_id != "" && auth_id != "") {
                
            this.set(user_id + "|" + auth_id + "|" + session_id);
            return true;
        }
        return false;
    },
    clear: function(cookie_name) {
        if (!cookie_name) cookie_name = "vifi_session"; 
        
        this.set("", cookie_name);        
        $.removeCookie(cookie_name, App.User.Cookie.settings);
    },
    set: function(cookie, cookie_name) {
        if (!cookie_name) cookie_name = "vifi_session"; 
        $.cookie(cookie_name, cookie, App.User.Cookie.settings);
        return this;
    },
    get: function(cookie_name) {
        if (!cookie_name) cookie_name = "vifi_session"; 
        var cookie = $.cookie(cookie_name);
        return cookie;
    },
};
App.User.FBPerson = Backbone.Model.extend({
    defaults: {
        "id": "",
        "name": "",
        "first_name": "",
        "last_name": "",
        "gender": "",
        "username": "",
        "link": "",
        "locale": "",
        "timezone": ""
    }
});