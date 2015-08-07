App.Models.MobilePurchase = Backbone.Model.extend({
    defaults: { pending: false, authToken: false, phoneNumber : false, timeout: 60, status: false},
    url: "payment/emtpayment",
    interval: false,
    model: App.Models.Film,

    initialize: function(options) {
        this.options = options || {};

        if (options && undefined != options.model) {
            this.model = options.model;
        }
        _.bindAll(this, 'initPayment', 'onAuth','startTimer', 'stopTimer', 'checkStatus', 'onStatusReceive', 'resetPayment');
    },

    initPayment: function(callback) { 
        app.api.call([this.url, this.model.get("id")], {}, callback);
    },

    onAuth: function(res) {

        if (res.status == "PENDING") {
            this.startTimer();
            this.set("authToken", res.authToken);
            this.set("phoneNumber", res.phoneNumber);
            this.set("status", res.status);
            this.trigger("payment:mobile:start",res);
            this.requestPaymentStatus(this.onStatusReceive);
        }
    },

    resetPayment: function() {
        this.set(this.defaults);
    },

    startTimer: function() {
        
        if (this.interval) {
            clearInterval(this.ival);
        }
        
        this.set("pending",true);

        this.interval = setInterval(function() {
            var timeout = this.get("timeout");
            if (this.checkStatus() === true) {
                this.stopTimer();
                this.handleStatus();

            } else {         
                if (timeout > 0) {
                    timeout = timeout-1;
                    this.set("timeout",timeout);

                } else {
                    this.stopTimer();
                } 
            }
        }.bind(this),1000);

    },

    stopTimer: function() {

        this.set("pending",false);
        if (this.interval) {
            clearInterval(this.ival);
        }
        this.resetPayment();
    },

    checkStatus: function() {

        if (this.get("status") == "PAYMENT" || this.get("status") == "DONE" || this.get("status") == "FAILED") {
            return true;
        }
        return false;
    },

    onStatusReceive: function(res) { 
        this.trigger("payment:mobile:resolved");
        console.log(res);

    },

    requestPaymentStatus: function(callback) { 
        var authToken = this.get("authToken");
        if (!authToken || authToken == "") {
            throw ("No auth token available to use for status check");
        }        
        app.api.call(["payment/emtpayment", this.model.get("id")], {authToken: authToken}, callback);
    },

});

App.Models.Purchase = Backbone.Model.extend({
    model: App.Models.Product,
    film: false,
    session: false,

    defaults: { method: 'code',  price: "", code: '', email: '', purchaseInfo: {}},
    productKey: '52e802db-553c-4ed2-95bc-44c10a38c199',
    validation: {
        email: {
          required:false,
          pattern: 'email',
          msg: 'Please enter a valid email!'
        },
        method: { 
            required:true,
            fn: 'validateMethod'
        },
        method_id: { 
            required:true,
        },        
        price: {
          required: true,
          min: 0.01,
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
        _.bindAll(this, 'sendPurchase', 'onMobileAuth','onMobileStatusReceive', 'initMobilePayment', 'purchase', 'onCodeAuth', 'sendCodeAuth', 'paymentCallback')
    },

    validateMethod: function(value, attr, computedState) {

        if(value === 'code' && this.get("code").length == 0) {
            return 'Vale kood, proovi uuesti!';
        }
        if(value !== 'code' && this.get("email").length == 0) {
            return 'Vale E-mail, proovi uuesti!';
        }
    },

    paymentCallback: function(response) {
        
        if (undefined != response && response.status && response.status == "Success") {
            
            var profile = app.session.get("profile");
                profile.once("purchase:successful", function() { 
                    this.trigger("purchase:successful"); 
                    $log("Billing process successfully ended");
                }.bind(this));            
                profile.purchase(app.collection.fullCollection.get(this.model.get("id")));
        } else {
            $log(response);

        }
        return false;
    },

    // Purchase info for backend

    generatePurchaseInfo: function() {
        var film_id = this.model.get("id");

        var user_id = this.session.profile.get("id");
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
            'email': this.get("email"),
            'method_id': this.get("method_id"),
            'method' : this.get("method"), 
            'film_id': film_id
        }
        this.set("purchaseInfo", info);

        return JSON.stringify(info);

    },

    getAnonymousToken: function(callback) { 

        var email = this.get("email");
        if (!email || email == "") 
            email = this.session.get("profile").get("email");
        
        this.session.once("user:login", callback, this);

        return this.session.getToken(email);

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
            this.session.set("session_id", session_id);
            var id = this.model.get("id");

            app.usercollection.add(app.collection.originalCollection.get(id));
            this.trigger("purchase:successful"); 
        }
    },

    purchase: function() {

        var method = this.get("method");

        if (!this.session.get("auth_id") || this.session.get("auth_id").length ==0) { 
            
            this.getAnonymousToken(this.purchase);
            return false;
        } 

        if (method == "code") { 
            var id = this.model.get("id");
            var code = this.get("code");
            this.sendCodeAuth(this.onCodeAuth, id, code);
            return false;
        }

        if (method == "mobile") { 
            this.initMobilePayment(this.onMobileAuth);
            return false;
        }        

        if (this.get("method_id") != "") { 
            var form = this.getPurchaseForm();
            document.body.appendChild(form);
            form.submit();
            return false;
        } else { 
            $log("Error while making purchase: invalid method selected");
            return false;
        }

       
    },

    onMobileAuth: function(res) {

        if (res.status == "PENDING") { 
            this.set("authToken", res.authToken);
            this.set("phoneNumber", res.phoneNumber);
            this.trigger("payment:mobile:start",res);
            this.getMobilePaymentStatus(this.onMobileStatusReceive);
        }

    },

    onMobileStatusReceive: function(res) { 
        this.trigger("payment:mobile:stop");
        console.log(res);

    },

    initMobilePayment: function(callback) { 
        app.api.call(["payment/emtpayment", this.model.get("id")], {}, callback);
    },

    getMobilePaymentStatus: function(callback) { 
        var authToken = this.get("authToken");
        if (!authToken || authToken == "") {
            throw ("No auth token available to use for status check");
        }        
        app.api.call(["payment/emtpayment", this.model.get("id")], {authToken: authToken}, callback);
    },

    sendPurchase: function(callback, info, price) {
        var url = App.Settings.api_url +"smartpay/?format=json&api_key="+App.Settings.api_key+"&";
        $.get(url, { price: price, transactionId: 001, customVar: info }, callback, "jsonp");

    },  

    getPurchaseForm: function() { 

        this.generatePurchaseInfo();

        var info = this.get("purchaseInfo");
        var url = App.Settings.api_url + "payment/payment/" + info.film_id + "?";

        var data = { 
            'api_key' : App.Settings.api_key,
            'token' : info.auth_id,
            'user_id' : info.user_id,
            'method_id' : info.method_id,
            'sum' : this.model.get("price"),
        }
 
        var form =  App.Utils.post(url, data);

        return form;


    },

    sendCodeAuth: function(callback, film_id,code) {  
        app.api.call(["authorize_film", film_id, code], {}, callback);
    },

    remove: function() {
        // Remove the validation binding
        Backbone.Validation.unbind(this);
        return Backbone.View.prototype.remove.apply(this, arguments);
    }     
});
App.Models.PurchaseSubscription = App.Models.Purchase.extend({ 


    purchase: function() {

        var method = this.get("method");

        if (!this.session.get("auth_id") || this.session.get("auth_id").length ==0) { 
            this.getAnonymousToken(this.purchase);
            return false;
        }

        if (method == "code") { 
            var id = this.model.get("id");
            var code = this.get("code");
            this.sendCodeAuth(this.onCodeAuth, id, code);
            return false;
        }
   
        try {

           var info = this.generatePurchaseInfo();
           var price = this.model.get("price");
           this.sendPurchase(this.paymentCallback, info);

        } catch (e) {
            $log("Error while making purchase: " + e);
            return false;
        }
    },

    paymentCallback: function(response) {
        
        if (undefined != response && response.status && response.status == "ok") {
            
            var profile = app.session.get("profile");
            this.trigger("purchase:successful"); 
            $log("Billing process successfully ended");
        }
        return false;
    },

    sendCodeAuth: function(callback, product_id,code) {  
        app.api.call(["authorize_subscription_code", product_id, code], {}, callback);

    },
    
    sendPurchase: function(callback, info) {
        var id = this.model.get("id");
        app.api.call(["purchaseSubscription", id, info.auth_id], info, callback);
    },
    // Purchase info for backend

    generatePurchaseInfo: function() {
        var product_id = this.model.get("id");
        var user_id = this.session.get("user_id");
        var method = this.get("method");
        var method_id = this.get("method_id");

        if (!product_id || product_id < 1) {
            throw ("Invalid film given for purchase");
        }
        if (!user_id || user_id < 1) {
            throw ("Invalid or missing user for purchase");
            return false;
        }

        var info = {
            'auth_id': this.session.get("auth_id"),
            'user_id': user_id,
            'method_id' : method_id,
            'price' : this.get("price"),
            'product_id': product_id
        }

        this.set("purchaseInfo", info);

        return info;

    },
})
