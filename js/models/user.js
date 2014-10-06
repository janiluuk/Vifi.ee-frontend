App.User = {};
App.User.Profile = App.Models.ApiModel.extend({
    path: 'profile',
    params: "",
    defaults: {
        "id": '',
        "user_id": '',
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
        "messages": 0,
        "subscription": "0",
        "active_sessions": []
    },

    initialize: function() {
        this.on("change:tickets", this.updateUserCollection);

        this.on("user:logout", this.signout, this);
       
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


    purchase: function(movie) {
        this.fetch();

        return true;
    },
    hasMovie: function(movie) {
        var id = movie.get("film").id;
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

    initialize: function() {
 
   
        var profile = new App.User.Profile();
        this.set("profile", profile);

        this.on('poll:enable', this.enable, this);
        this.on('poll:disable', this.disable, this);

        this.on('user:login', this.onUserAuthenticate, this);
        this.on('user:logout', this.onUserSignout, this);
        this.on('change:sessionId', this.setCookie, this);
        _.bindAll(this, 'send', 'authorize', 'fetch', "setCookie");
        if (!this.isLoggedIn()) {
            this.enable();
        }
    },  
    url: function() {
        return App.Settings.api_url + 'session/' + this.path + '?jsoncallback=?';
    },
    defaults: function() {
        return {
            logged_in: false,
            enabled: false,
            user_id: '7439',
            sessionId : 'f41e8bac8138870e1dd1bf87d953e93d',
            hash: '1644830c62df8904ca41755a55510d23',
            activationCode: '15443'
        }

    },
    getParams: function() {
        var options = {}
        var params = {
            dataType: 'jsonp',
            data: {
                api_key: App.Settings.api_key,
                authId: this.get("hash"),
                sessionId: this.get("sessionId")
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
        this.set('logged_in', false);
        this.disable();

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
        }.bind(this), "jsonp");
    },
    setCookie: function(cookie) {
        if (cookie != "" && cookie) {
            $.cookie("vifi_session", cookie, {});
        }
        return this;
    },

    getCookie: function() {
        var sessionId = $.cookie("vifi_session");
        return sessionId;
    },
    authorize: function() {
        if (!this.isEnabled()) return false;
        var sessionId = this.get("sessionId");
        var hash = this.get("hash");
        var user_id = this.get("user_id");
        if (!this.isLoggedIn() && sessionId !== "" && hash !== "" && user_id != "" && hash != null) {
            var profile = this.get("profile");
            profile.set("user_id", user_id);
            profile.set("session", this);
            profile.fetch();
            if (profile.get("user_id") != "") {
                this.set("profile", profile);
                this.trigger("user:login", profile);
                $log("Logging in with user " + profile.get("email"));
            }
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
            if (profile.purchase(app.payment.film) == true) {
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
