App.User = {};

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


App.User.Profile = App.Models.ApiModel.extend({
    path: 'profile',
    params: "",
    defaults: function() {
        return {
            "id": '',
            "user_id": false,
            "name": '',
            "lastname": '',
            "firstname": '',
            "notificationText": '',
            "email": 'anonymous@vifi.ee',
            "city": '',
            'newsletter': '0',
            "balance": "",
            "language": "Estonian",
            "tickets": [],
            "paired_user": false,
            "purchase_history": [],
            "favorites": '',
            "profile_picture": false,
            "messages": 0,
            "role": 'Guest',
            "subscription": "0",
            "active_sessions": []
        };

    },

    initialize: function(options) {

        _.bindAll(this, 'connectFB', 'login', 'logout');
        this.session = options.session;
        this.session.on("change:auth_id", this.authorize,this);
        this.on("change:tickets", this.updateUserCollection);
        this.on("user:facebook-connect", this.connectFB, this);
        this.on("user:pair", this.pair, this);
    },

    connectFB: function(data) {
        var id = data.get("id");

        if (id != "") {
            this.set("profile_picture", 'https://graph.facebook.com/' + id + '/picture')
            this.set("lastname", data.get("last_name"));
            this.set("firstname", data.get("first_name"));
            this.set("email", data.get("email"));
            this.set("name", data.get("name"));
            this.set("access_token", FB.getAccessToken());
            this.session.getToken(data.get("email"), this.get("password"));

        }
    },
    login: function(email, password) {
        if (!password || !email) return false;
        this.logout();

        var url = App.Settings.api_url + 'user/login/' + email + '/' + password + '?callback=?';
        var options = this.getParams();

        $.getJSON(url, options.data, "jsonp").done(function(data) {

            if (data.status == 2) {
                this.set("user_id", data.user_id);
                this.set("session_id", data.cookie);
                this.set("auth_id", data.activationKey);
                this.set("activationCode", data.activationCode);
             //   this.enable();
            } else {

                this.trigger("user:login:fail", data);
            }


        }.bind(this), "jsonp");

    },
    logout: function() {
        this.trigger("user:logout");
        this.set(this.defaults());

    },
    changePassword: function(oldpass, password) {
        if (!password) return false;
        
        var url = App.Settings.api_url + 'user/changepassword/'+this.get("email")+'?callback=?';
        var options = this.getParams({password: password, oldpassword: oldpass});
        $.getJSON(url, options.data, "jsonp").done(function(data) {

            if (data.status == "ok") {

                this.trigger("user:changepassword:success", data.message);
            } else {
                this.trigger("user:changepassword:fail", data.message);
            }

        }.bind(this), "jsonp").error(function(data) { 

                this.trigger("user:changepassword:fail", "Error making query");
        }.bind(this));

    },
    register: function(email, password) {
        if (!password || !email) return false;

        var url = App.Settings.api_url + 'user/register/' + email + '/' + password + '?callback=?';
        var options = this.getParams();

        $.getJSON(url, options.data, "jsonp").done(function(data) {

            if (data.status == "ok") {
                this.set("user_id", data.user_id);
                this.set("session_id", data.cookie);
                this.set("auth_id", data.activationKey);
                this.trigger("user:register:success", data);
            } else {
                this.trigger("user:register:fail", data);
            }

        }.bind(this), "jsonp");

    },
    pair: function(code) {

        var email = this.get("email");
        if (email == "" || code == "") return false;

        var url = App.Settings.api_url + 'user/' + email + '/pair/' + code + '?callback=?';
        var options = this.getParams();

        $.getJSON(url, options.data, "jsonp").done(function(data) {
            this.trigger("user:paired", data);
            alert("Paired!");
        }.bind(this), "jsonp");
    },
    updateUserCollection: function() {
        if (!app || !app.usercollection) return false;
        var tickets = this.get("tickets");
        app.usercollection.reset(tickets);

        _.each(app.usercollection.models, function(model) {
            var id = model.get("id");
            var film = app.collection.get(id);
            var validto = model.get("validto");

            if (film && validto) {
                if (undefined != validto && validto.length > 1) {
                    var date = App.Utils.stringToDate(validto);
                    var validtotext = App.Utils.dateToHumanreadable(date);
                    model.set("validtotext", validtotext);
                }
                film.set("ticket", model.toJSON());
            }
        });

    },

    syncData: function() {

        var url = App.Settings.api_url + 'user/sync/?callback=?';
        var options = this.getParams();
        var profileData = this.getSyncParams();
        options.data.profileData = JSON.stringify(profileData);
        $.getJSON(url, options.data, "jsonp").done(function(data) {
            this.trigger("user:profile_updated",data);
        }.bind(this), "jsonp");
    },


    getSyncParams: function() {
        var params = {};
        var values = [
            "name", "lastname", "firstname", "newsletter", "city", "profile_picture"
        ]
        _.each(values, function(item) {
            var val = this.get(item);
            eval("params." + item + " = val");
        }.bind(this));

        return params;

    },
    purchase: function(movie) {
        this.fetch().done(function() {
            if (this.hasMovie(movie))
            this.trigger("purchase:successful", movie);

        }.bind(this));
    },
    hasMovie: function(movie) {
        var id = movie.get("id");
        var movies = app.usercollection.where({
            id: id
        });
        if (movies.length > 0) return true;
        return false;
    },
    hasSubscription: function() { 

        return false;

    },
    isRegisteredUser: function() {

        if (this.get("user_id") != "" && this.get("paired_user") === true && this.get("email") != "anonymous@vifi.ee") {
            return true;
        }
        return false;
    },
    isAnonymous: function() {
        if (this.get("role") == "Anonymous customer") return true;

        return false;
    },
    isRegistered: function() {
        if (this.get("role") == "Registered customer") return true;

        return false;
    },
    getRole: function() {

    },
    hasNewsletter: function() {

        return this.get("newsletter") == "1";

    },
    getLanguage: function() {
        if (this.get("language") == "es") return "Estonian";
        else return "English";

    },

    authorize: function() {

        this.fetch({
            success: function(data) {
                if (this.get("user_id") != "") {
                    this.trigger("user:login", this);
                    $log("Logging in with user " + this.get("email"));
                    return true;
                }
            }.bind(this)
        });
        return false;

    }

});

App.User.Session = Backbone.Model.extend({

    path: 'session',
    counter: 0,

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

    initialize: function() {
        this.profile = new App.User.Profile({session: this});
        this.cookie = App.User.Cookie;

        this.set("profile", this.profile);
        
        this.on('poll:enable', this.enable, this);
        this.on('poll:disable', this.disable, this);
        this.profile.on('user:login', this.onUserAuthenticate, this);

        if (auth_data = this.cookie.parse()) {
            this.set(auth_data);
        }
        _.bindAll(this, 'send', 'fetch', 'logout', 'onUserAuthenticate');
 
    },
 

    getToken: function(email, password) {
        if (!password) password = "";
        if (!this.isLoggedIn()) {
            this.cookie.clear();

            var url = App.Settings.api_url + 'get_token/' + email + '/' + password + '?callback=?';
            var options = this.getParams();
            $.getJSON(url, options.data, "jsonp").done(function(data) {
                if (data.token) {

                    this.set("auth_id", data.token);
                    this.trigger("user:token:authenticated", data.token);

                    if (email == "anonymous@vifi.ee") this.disable();
                }
            }.bind(this), "jsonp");

        }
    },
 

    url: function() {
        return App.Settings.api_url + 'session/' + '?jsoncallback=?';
    },

    getParams: function() {

        var options = {}
        var params = {
            dataType: 'jsonp',
            data: {
                api_key: App.Settings.api_key,
                authId: this.get("auth_id"),
                sessionId: this.get("session_id"),
                format: 'json',
            }
        };

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
    disable: function() {
        this.set("enabled", false);
    },
    onUserAuthenticate: function(data) {
        this.set("logged_in", true);
        this.set("user_id", this.profile.get("user_id"));
        
        this.cookie.write(this.get("user_id"),this.get("auth_id"), this.get("session_id") );
        this.disable();
    },
    logout: function() {
        this.get("profile").logout();        
        this.reset();
        app.router.navigate("/", {trigger: true});        
        return false;
    },
    reset: function() {
        this.set(this.defaults());
        this.cookie.clear();

    },

    fetch: function() {
        if (!this.isEnabled()) return;

        if (!this.isLoggedIn()) this.path = this.get("activationCode");
        else this.path = '';

        var options = this.getParams();

        $.getJSON(this.url(), options.data).done(function(data) {
            if (this.isLoggedIn() === false) {
                if (undefined !== data.status && data.status == "error") {  
                    $log("Retrieving new token "+data.message);
                    
                    this.reset();
                    this.once("user:token:authenticated", this.fetch, this);
                    this.getToken(this.profile.get("email"));
                    return false;

                }
                if (undefined !== data.cookie) {
                    this.set("session_id", data.cookie);
                }
                if (data.user_id != null)
                    this.set("user_id", data.user_id);
            } else {
                this.disable();
            }
        }.bind(this), "jsonp").error(function(data) {
            this.reset();
            $log(data);
        }.bind(this));
    },
 
  
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

    }

});
App.User.Cookie = {
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
            this.set(user_id + "|" + auth_id + "|"+ session_id);
            return true;

        }

        return false;
    },
    clear: function() {

        this.set("");

    },
    set: function(cookie) {
        $.cookie("vifi_session", cookie, {});
        return this;
    },

    get: function() {
        var cookie = $.cookie("vifi_session");
        return cookie;
    },


};

App.User.ChangePassword = Backbone.Model.extend({

    defaults: {
        password: ''
    },
    // Define a model with some validation rules

    validation: {

        newPassword: {
            minLength: 8
        },
        repeatPassword: {
            equalTo: 'newPassword',
            msg: 'The passwords does not match'
        }
    }
});