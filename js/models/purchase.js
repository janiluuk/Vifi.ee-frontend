
App.Models.Purchase = Backbone.Model.extend({
    film: false,
    session: false,
    productKey: '52e802db-553c-4ed2-95bc-44c10a38c199',

    initialize: function(options) {
        if (options && undefined != options.session) {
            this.session = options.session;
        }
        if (options && undefined != options.film) {
            this.film = options.film;
        }
        _.bindAll(this, 'sendPurchase', 'purchase', 'paymentCallback')
    },

    paymentCallback: function(response) {
        
        if (undefined != response && response.status && response.status == "Success") {
            
            var profile = app.session.get("profile");
                profile.once("profile:updated", function() { this.trigger("purchase:successful"); $log("Billing process successfully ended");
}.bind(this));            
                profile.purchase(this.film);
        } else {
            $log(response);

        }
        return false;
    },

    // Purchase with smartpay

    generatePurchaseInfo: function(film) {
        var film_id = film.get("id");
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

        var price = film.get("price");

        this.sendPurchase(this.paymentCallback, info, price);

    },
    sendPurchase: function(callback, info, price) {

        var url = App.Settings.api_url +"smartpay/?format=json&api_key="+App.Settings.api_key+"&";
        $.get(url, { price: price, transactionId: 001, customVar: info }, callback, "jsonp");

    }
});