App.User = {};

App.User.FBPerson = Backbone.Model.extend({
    defaults: {
        "id":  "",
        "name":     "",
        "first_name":    "",
        "last_name":    "",
        "gender":    "",
        "username":    "",
        "link":    "",
        "locale":    "",
        "timezone":    ""
    }
});


App.User.Profile = App.Models.ApiModel.extend({
    path: 'profile',
    params: "",
    defaults: {
        "id": '',
        "user_id": false,
        "name" : '',
        "lastname": '',
        "firstname": '',
        "notificationText": '',
        "email": 'Visitor',
        "city": '',
        "balance": "",
        "tickets": [],
        "paired_user": false,
        "purchase_history": [],
        "favorites": '',
        "profile_picture" : '/style/img/anonymous_avatar.jpg',
        "messages": 0,
        "subscription": "0",
        "active_sessions": []
    },

    initialize: function() {
        _.bindAll(this, 'connectFB');
        this.on("change:tickets", this.updateUserCollection);
        this.on("user:facebook-connect", this.connectFB, this);
        this.on("user:logout", this.signout, this);
       
    },
    connectFB: function(data) {
  
        var id = data.get("id");

        if (id !="") { 

            this.set("profile_picture", 'https://graph.facebook.com/'+id+'/picture')
            this.set("lastname", data.get("last_name"));   
            this.set("firstname", data.get("first_name"));
            this.set("email", data.get("email"));
            this.set("name", data.get("name"));

        }
    },
    updateUserCollection: function() {
        var tickets = this.get("tickets");
        app.usercollection.reset(tickets);

        _.each(app.usercollection.models, function(model) {
            var id = model.get("id");
            var film = app.collection.get(id);
            var validto = model.get("validto");

            if (film && validto) {
                var date = App.Utils.stringToDate(validto);
                var validtotext = App.Utils.dateToHumanreadable(date);
                model.set("validtotext", validtotext);
                film.set("ticket", model.toJSON());
            }
        });

    },
    signout: function() {
        this.set("id", "");
        this.set("notificationText", "");
        this.set("user_id", "");
        this.set("balance", 0);
        this.set("paired_user", false);
        this.set("sessionId", "");
        this.set("email", "Visitor");
        this.set("tickets", "");
    },

    getSyncParams: function() {
        var params = {};
        var values = [ 
        "name", "lastname","firstname","newsletter","city","profile_picture"]
        _.each(values, function(item) { 
            var val = this.get(item);
            eval("params."+item+" = val");
        }.bind(this));
        console.log(params);

        return params;

    },
    purchase: function(movie) {
        this.fetch().done(function() {  
            this.trigger("profile:updated");            
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
    isRegisteredUser: function() {

        if (this.get("user_id") != "" && this.get("paired_user") === true) {
            return true;
        }
        return false;
    },

});

App.User.Session = Backbone.Model.extend({
    
    url: '',
    path: '',
    token: '',
    initialize: function() {
 
   
        var profile = new App.User.Profile();
        this.set("profile", profile);
        this.parseCookie();
        this.on('change:hash', this.writeCookie, this);
        this.on('change:sessionId', this.writeCookie, this);

        this.on('poll:enable', this.enable, this);
        this.on('poll:disable', this.disable, this);
        this.on('user:login', this.onUserAuthenticate, this);
        this.on('user:logout', this.onUserSignout, this);
        this.on('user:facebook-connect', this.connectFB, this);
        _.bindAll(this, 'send', 'authorize', 'fetch', "setCookie");
        if (!this.isLoggedIn()) {
            this.enable();
        }
    },
    parseCookie: function() {

        var cookie = this.getCookie();
        if (cookie && cookie.length > 0) {
            var vars = cookie.split("|");
            var user_id = vars[0];
            var hash = vars[1];
            var sessionId = vars[2];

            if (user_id != "" && hash !="" && sessionId != "") {
                console.log("Authenticating with cookie");
                this.set({user_id: user_id, hash: hash, sessionId: sessionId});
                this.authorize();
            }
            return true;
        }
        return false;
    },
    writeCookie: function() {

        
            var user_id = this.get("user_id");
            var hash = this.get("hash");
            var sessionId = this.get("sessionId");

            if (user_id != "" && hash !="" && sessionId != "") {

                this.setCookie(user_id+"|"+hash+"|"+sessionId);
              return true;

            }
        
        return false;
    },
    clearCookie: function() {

        this.setCookie("");

    },
    getToken: function(email, password) {
        if (!password) password = "";
        if (!this.isLoggedIn()) {
        this.clearCookie();

        var url = App.Settings.api_url + 'get_token/'+email+'/'+password+'?callback=?';
        var options = this.getParams();
        $.getJSON(url, options.data, "jsonp").done(function(data) {
            if (data.token) {
                this.set("sessionId", data.token);
                this.set("hash", data.token);

                this.syncData(this.get("profile").toJSON());
                this.writeCookie();
            }
        }.bind(this), "jsonp");
        }
    },
    syncData: function() {
     
        var url = App.Settings.api_url + 'user/sync/?callback=?';
        var options = this.getParams();
        var profileData = this.get("profile").getSyncParams();
        options.data.profileData = JSON.stringify(profileData);
        $.getJSON(url, options.data, "jsonp").done(function(data) {
            
            console.log(data);

        }.bind(this), "jsonp");
    },
    register: function(email,password) {
        if (!password || !email ) return false;
        this.reset();

        var url = App.Settings.api_url + 'user/register/'+email+'/'+password+'?callback=?';
        var options = this.getParams();
        $.getJSON(url, options.data, "jsonp").done(function(data) {

            if (data.status == 2) {
                this.set("user_id", data.user_id);
                this.set("sessionId", data.cookie);
                this.set("hash", data.activationKey);
                this.set("activationCode", data.activationCode);
            }

        }.bind(this), "jsonp");

    },
    url: function() {
        return App.Settings.api_url + 'session/' + this.path + '?jsoncallback=?';
    },
    defaults: function() {
        return {
            logged_in: false,
            enabled: false,
            user_id: '',
            sessionId : '',
            hash: '',
            activationCode: '',
            password: 'jazmani',
        }

    },
    connectFB: function(data) {
        var profile = this.get("profile");
        var email = data.get("email");
        this.getToken(email, this.get("password"),data.toJSON());
        
        profile.trigger("user:facebook-connect", data);


    },
    reset: function() {
        this.set(this.defaults())
    },
    getParams: function() {
        var options = {}
        var params = {
            dataType: 'jsonp',
            data: {
                api_key: App.Settings.api_key,
                authId: this.get("hash"),
                sessionId: this.get("sessionId"),
                format: 'json',
            }
        };

        options.data = JSON.parse(JSON.stringify(params.data));
        options.dataType = params.dataType;
        return options;
    },
   
    enable: function() {
        if (!this.isLoggedIn() && !this.isEnabled()) {

            this.set("enabled", true);
            this.send();

        }
    },
    disable: function() {
        this.set("enabled", false);
    },
    onUserSignout: function() {
        this.logout();

        return false;
    },
    fetch: function() {
        if (!this.isEnabled()) return;

        if (!this.isLoggedIn()) this.path = this.get("activationCode");
        else this.path = '';

        var options = this.getParams();

        $.getJSON(this.url(), options.data).done(function(data) {
            if (this.isLoggedIn() === false) {

                if (undefined !== data.cookie) {
                    this.set("status", "pending");
                    this.set("sessionId", data.cookie);
                    this.set("user_id", data.user_id);
                    this.set("hash", data.activationKey);
                    this.authorize();
                }
            } else {
                this.disable();
            }
        }.bind(this), "jsonp").error(function(data) { this.clearCookie(); this.reset(); console.log("ERROR");}.bind(this) );
    },
    setCookie: function(cookie) {
        $.cookie("vifi_session", cookie, {});
        return this;
    },

    getCookie: function() {
        var sessionId = $.cookie("vifi_session");
        return sessionId;
    },
    authorize: function(force) {
        if (!this.isEnabled() && !force) return false;
        var sessionId = this.get("sessionId");
        var hash = this.get("hash");
        var user_id = this.get("user_id");
        if (!this.isLoggedIn() && sessionId !== "" && hash !== "" && user_id != "" && hash != null) {
            var profile = this.get("profile");
            profile.set("user_id", user_id);
            profile.set("session", this);
            profile.fetch({ success: function(data) {
            if (profile.get("user_id") != "") {
                this.set("profile", profile);
                this.trigger("user:login", profile);
                this.writeCookie();

                $log("Logging in with user " + profile.get("email"));
                return true;
            }
        }.bind(this)});
        }
        return false;
    },
    updateProfile: function() {
        if (!this.isLoggedIn()) return false;
        var profile = this.get("profile");
        profile.fetch();
        this.trigger();
    },

    send: function() {
        if (!this.isLoggedIn() && this.isEnabled()) {
            this.fetch();
            setTimeout(function() {
                this.send();
            }.bind(this), 5000);
        } else {
            $log("Disabling polling, logged in or disabled");
            this.disable();
        }
    },
    isEnabled: function() {
        return this.get("enabled");
    },
    isLoggedIn: function() {
        var logged = this.get("logged_in");
        return logged;
    },
    isRegisteredUser: function() {
        var profile = this.get("profile");

        if (profile.get("user_id") != "" && profile.get("paired_user")) {
            return true;
        }
        return false;
    },
    onUserAuthenticate: function() {
        this.set("logged_in", true);
        this.disable();
    },
    logout: function() { 
        this.get("profile").set(this.get("profile").defaults);

        this.reset();
        this.set('logged_in', false);
        this.path = '';
        this.disable();

    },
    login: function(email, password) {
        this.logout();

      if (!password || !email ) return false;
        this.reset();

        var url = App.Settings.api_url + 'user/login/'+email+'/'+password+'?callback=?';
        var options = this.getParams();
        $.getJSON(url, options.data, "jsonp").done(function(data) {

            if (data.status == 2) {
                this.set("user_id", data.user_id);
                this.set("sessionId", data.cookie);
                this.set("hash", data.activationKey);
                this.set("activationCode", data.activationCode);
                this.enable();
            }

        }.bind(this), "jsonp");

    },

});

App.Payment = Backbone.Model.extend({
    film: false,
    session: false,
    productKey: '52e802db-553c-4ed2-95bc-44c10a38c199',

    initialize: function(options) {
        if (options && undefined != options.session) {
            this.session = options.session;
        }

    },

    paymentCallback: function(response) {

        if (undefined != response && response.success) {
            
            var profile = app.session.get("profile");
            if (profile.purchase(this.film) == true) {
                $log("Billing process successfully ended");

            }
        } else {
            $log(response);

        }


    },

    exitPurchase: function() {

        app.purchasePage.hide();

    },

    // Purchase with smartpay

    generatePurchaseInfo: function(film) {
        var film_id = film.get("film").id;
        var user_id = app.session.get("user_id");

        if (!film_id || film_id < 1) {
            throw ("Invalid film given for purchase");
        }
        if (!user_id || user_id < 1) {
            throw ("Invalid or missing user for purchase");
            return false;
        }

        var info = {
            'auth_id': app.session.get("hash"),
            'user_id': user_id,
            'film_id': film_id
        }
        return JSON.stringify(info);

    },
    purchase: function(film) {

        this.film = film;
        try {
            info = this.generatePurchaseInfo(film);
        } catch (e) {
            $log("Error while making purchase: " + e);
            return false;

        }

        var price = film.get("film").price;

        this.sendPurchase(this.paymentCallback, info, price);

    },
    sendPurchase: function(callback, info, price) {

        var url = App.Settings.api_url +"smartpay/?api_key="+App.Settings.api_key+"&";
        $.get(url, { price: price, transactionId: 001, customVar: info }, callback, "jsonp");



    }
});
