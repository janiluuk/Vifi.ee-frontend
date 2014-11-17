
App.Models.Purchase = Backbone.Model.extend({

    film: false,
    session: false,
    defaults: { method: 'code',  price: "", code: '', email: '', purchaseInfo: {}},
    productKey: '52e802db-553c-4ed2-95bc-44c10a38c199',
    validation: {
    email: {
      required:false,
      pattern: 'email',
      msg: 'Please enter a valid email'
    },
    method: { 
        required:true,
        fn: 'validateMethod'
    },
    price: {
      required: true,
      min: 1,
      msg: 'Invalid price for the product'
    },
    code: {
      minLength: 1,
      required: false,
      msg: 'Please enter valid code!'
    },
    },
    /* Options: session & product objects */
    initialize: function(options) {
        this.options = options || {};

        if (options && undefined != options.session) {
            this.session = options.session;
        }
        if (options && undefined != options.model) {
            this.model = options.model;
        }
        this.listenTo(this.model, "change", function() {  
            this.set("price", this.model.get("price"));

        }, this);
        this.set("price", this.model.get("price"));
        _.bindAll(this, 'sendPurchase', 'purchase', 'onCodeAuth', 'sendCodeAuth', 'paymentCallback')
    },
     validateMethod: function(value, attr, computedState) {
        if(value === 'code' && this.get("code").length == 0) {
            return 'Code is invalid!';
        }
        if(value !== 'code' && this.get("email").length == 0) {
            return 'Email is invalid!';
        }
    },
    paymentCallback: function(response) {
        
        if (undefined != response && response.status && response.status == "Success") {
            
            var profile = app.session.get("profile");
                profile.once("profile:updated", function() { 
                    this.trigger("purchase:successful"); 
                    $log("Billing process successfully ended");
                }.bind(this));            
                profile.purchase(this.model);
        } else {
            $log(response);

        }
        return false;
    },

    // Purchase info for backend

    generatePurchaseInfo: function() {
        var film_id = this.model.get("id");
        var user_id = this.session.get("user_id");

        if (!film_id || film_id < 1) {
            throw ("Invalid film given for purchase");
        }
        if (!user_id || user_id < 1) {
            throw ("Invalid or missing user for purchase");
            return false;
        }

        var info = {
            'auth_id': this.session.get("auth_id"),
            'user_id': user_id,
            'film_id': film_id
        }
        this.set("purchaseInfo", info);

        return JSON.stringify(info);

    },
    getAnonymousToken: function() { 

        var email = this.get("email");
        if (!email || email == "") 
            email = this.session.get("profile").get("email");
        
        
        this.session.once("user:token:authenticated", this.purchase, this);
        this.session.getToken(email);

    },

    authorizeCode: function() { 
        var code = this.get("code");
        var film_id = this.model.get("id");
        if (undefined !== code && code != "") {
            this.sendCodeAuth(film_id, code, this.onCodeAuth);
        }
    },
    onCodeAuth: function(data) { 
        if (data.status !== "ok") {
            var message = data.message;
            this.trigger("purchase:error", message);
            return false;
        }
        var session_id = data.session_id;

        if (session_id != "") { 
            this.session.set("sessionId", session_id);
            app.usercollection.add(this.model);

            this.trigger("purchase:successful"); 
        }
    },
    purchase: function() {

        var method = this.get("method");
        if (!this.session.get("auth_id") || this.session.get("auth_id").length ==0) { 
            this.getAnonymousToken();
            return false;
        }
        if (method == "code") { 
            var id = this.model.get("id");
            var code = this.get("code");
            this.sendCodeAuth(id, code,this.onCodeAuth);
            return false;
        }
   

        try {
           var info = this.generatePurchaseInfo();
        } catch (e) {
            $log("Error while making purchase: " + e);
            return false;

        }

        var price = this.model.get("price");

        this.sendPurchase(this.paymentCallback, info, price);

    },
    sendPurchase: function(callback, info, price) {

        var url = App.Settings.api_url +"smartpay/?format=json&api_key="+App.Settings.api_key+"&";
        $.get(url, { price: price, transactionId: 001, customVar: info }, callback, "jsonp");

    },
    sendCodeAuth: function(film_id,code,callback) {  
        var url = App.Settings.api_url +"authorize_film/"+film_id+"/"+code+"/?format=json&callback=?&api_key="+App.Settings.api_key+"&";
        $.getJSON(url, {}, callback, "jsonp");
    },
    remove: function() {
        // Remove the validation binding
        // See: http://thedersen.com/projects/backbone-validation/#using-form-model-validation/unbinding
        Backbone.Validation.unbind(this);
        return Backbone.View.prototype.remove.apply(this, arguments);
    }     
});