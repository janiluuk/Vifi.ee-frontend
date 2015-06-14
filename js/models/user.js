App.User = {};

App.User.FilmSession = Backbone.Model.extend({ 
    defaults: {  
         contentId : 0,
         sessionId: '',
         validFrom : '',
         validTo : '',
         lastAction : '',
         timestamp : 0,
         status : 'invalid'
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

        _.bindAll(this, 'connectFB', 'login', 'logout', 'FBcallback');
        this.session = options.session;
        this.session.on("change:auth_id", this.authorize,this);
        this.on("change:tickets", this.updateUserCollection);
        this.on("user:facebook-connect", this.connectFB, this);
        this.on("user:pair", this.pair, this);
        this.on("user:unpair", this.unpair, this);

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
            this.session.getToken(data.get("email"), this.get("password"), this.get("access_token"), this.FBcallback);

        }
    },

    FBcallback: function(data) {


        var authId = this.get("auth_id");
        var email = this.get("email");
        var token = FB.getAccessToken();

        if (email == "" || authId == "")  { 
            $log("missing params, not doing fb callback");
            return false;

        }
        app.api.call(["user","connectFB", email], { token: token, authId: authId}, function(data) {

            $log("Authenticating with FBToken");
            

        });
    },

    login: function(email, password) {
        if (!password || !email) return false;

        app.api.call(["user","login", email, password], {}, function(data) {

            if (data.status == "ok") {
                this.set("user_id", data.user_id);
                this.session.set("session_id", data.cookie);
                this.session.set("auth_id", data.activationKey);
                this.session.set("activationCode", data.activationCode);

              //  this.session.enable();
            } else {
                this.trigger("user:login:fail", data);
            }
        }.bind(this));

    },
    logout: function() {
        this.trigger("user:logout");
        this.set(this.defaults());

    },
    changePassword: function(oldpass, password) {
        if (!password) return false;
        
        app.api.call(["user","changepassword", this.get("email")], { password: password, oldpassword: oldpass}, function(data) {

            if (data.status == "ok") {
                this.trigger("user:changepassword:success", data.message);
            } else {
                this.trigger("user:changepassword:fail", data.message);
            }

        }.bind(this));

    },
    resetPassword: function(email) {  
        if (!email) return false;
        app.api.call(["user","recovery"], {email: email}, function(data) {
             if (data.status == "ok") {
                this.trigger("user:resetpassword:success", data);
            } else {
                this.trigger("user:resetpassword:fail", data);
            }
        }.bind(this));

    },
    recoverPassword: function(email, key, password) {  
        if (!password || !email || !key) return false;

        app.api.call(["user","recovery"], {email: email, key:key, password:password}, function(data) {
             if (data.status == "ok") {
                this.trigger("user:recoverpassword:success", data);
            } else {
                this.trigger("user:recoverpassword:fail", data);
            }
        }.bind(this));

    },
    register: function(email, password) {
        if (!password || !email) return false;

        app.api.call(["user", "register", email, password], {}, function(data) {

            if (data.status == "ok") {
                this.session.set("user_id", data.user_id);
                this.session.set("session_id", data.cookie);
                this.session.set("auth_id", data.activationKey);
                this.trigger("user:register:success", data);
            } else {
                this.trigger("user:register:fail", data);
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
        app.api.call(["user", email, "unpair", id], {}, function(res) { if (res.status && res.status == "ok") this.trigger("user:unpair:success")}.bind(this));

    },

    updateUserCollection: function() {

        if (!app || !app.usercollection) return false;
        var tickets = this.get("tickets");
        app.usercollection.reset(tickets);

        _.each(app.usercollection.models, function(model) {
            var id = model.get("id");
            var film = app.collection.originalCollection.get(id);
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
        return app.usercollection;
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
        return this.get("subscriber") === true ? true : false;
    },

    isAnonymous: function() {
        if (this.get("role") == "Anonymous customer" || this.get("role") == "" || this.get("role") == "Guest") return true;

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

    authorize: function() {

        this.fetch({
            success: function(data) {
                if (this.get("user_id") != "") {
                    this.trigger("user:login", this);
                    if (app.fbuser) 
                    this.trigger("user:facebook-connect", app.fbuser);

                    $log("Logging in with user " + this.get("email"));
                    return true;
                }
            }.bind(this)
        });
        return false;

    },

    deauthorize: function() {

        this.reset();
        this.fetch().done(function() { 
            return false;
        }.bind(this));
    },

    updatePurchases: function(cb) {
        var deferred = new $.Deferred();

        var profile = app.session.get("profile");
        profile.fetch().done(function() {
            if (collection = this.updateUserCollection()) { 
                collection.once("reset", function(collection) { deferred.resolve(collection); });
                setTimeout(function() { collection.trigger("reset")}.bind(this), 3000);                
            }
        }.bind(this));

        return deferred.promise();
    },

    checkPurchases: function() {
        var films = App.User.Cookie.getFilms();

        if (typeof(films) == "undefined" || _.isEmpty(films)) {
            return false;
        }

        return films;
    },
    cleanPurchases: function() {

        var films = this.checkPurchases();

        if (typeof(films) == "undefined" || _.isEmpty(films)) {
                return false;
        }          
        var new_list = _.reject(films, function(item) {   
            
            if (typeof(item.valid_to) == "undefined") return false;
            var validTo = item.valid_to;

            if (App.Utils.dateExpired(validTo)) { 
                return false;
            }
            return true;
        });

        if (!_.isEmpty(new_list)) {   
            _.each(new_list, function(item) {   
                App.User.Cookie.removeFilm(item.vod_id);

            });

        }
        return new_list;
    },

    savePurchase: function(purchase) { 
        console.log(purchase);
        var filmsession = new App.User.FilmSession(purchase);
        filmsession.localSave();
        return filmsession;

    }

});

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
            $log("Setting cookie authentication data");
            
        }
        _.bindAll(this, 'send', 'fetch', 'logout', 'onUserAuthenticate');
 
    },
 

    getToken: function(email, password, access_token, callback) {
        if (!password) password = "";
        if (access_token && password == "") password = access_token;

        if (!this.isLoggedIn()) {
            this.cookie.clear();

            app.api.call(["get_token", email, password], {}, function(data) {

                if (data.token) {
                    this.set("auth_id", data.token);

                    this.trigger("user:token:authenticated", data.token);
                    if (callback) callback(data);

                    if (email == "anonymous@vifi.ee") this.disable();
                }
            }.bind(this), true);
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

    settings: { path: '/', domain: '.vifi.ee'},

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

    removeFilm: function(id) { 
        var filmlist = this.getFilms();
        if (!id || _.isEmpty(filmlist)) return false;
        
        var filteredlist = _.reject(filmlist, function(item) { 
            if (typeof item.vod_id != "undefined") 
                return item.vod_id == id.toString(); 
        });
        this.setFilms(filteredlist);

        return filteredlist;
    },
    setFilms: function(films) {

        if (!films || _.isEmpty(films)) {
            return false;
        }
        var encoded = btoa(JSON.stringify(films));
        this.set(encoded, "film");

        return true;
    },

    getFilms: function() {
        var cookie = $.cookie("film");

        if (cookie && cookie.length > 0) {
            try {  

              var vars = atob(cookie);
              var film_array = JSON.parse(vars);
              return film_array;

            } catch (exception) {  
                App.Settings.debug = true;
                $log("No films");
                $log(vars);
                $.cookie("film", "");
            }
        } 
        return {};
    },


    write: function(user_id, auth_id, session_id) {

        if (user_id != "" && auth_id != "") {
            this.set(user_id + "|" + auth_id + "|"+ session_id);
            return true;
        }
        return false;
    },
    clear: function(cookie_name) {
        
        $.removeCookie(cookie_name, App.User.Cookie.settings);
        this.set("", cookie_name);

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
