App.Models.MobilePurchase = App.Models.ApiModel.extend({
    defaults: { pending: false, authToken: false, phoneNumber : false, timeout: 60, status: false},
    url: function() { return App.Settings.api_url+"payment/emtpayment/"+this.model.get("id")     },
    interval: false,
    model: App.Models.Film,

    initialize: function(options) {
        this.options = options || {};

        if (options && undefined != options.model) {
            this.model = options.model;
        }
        if (options && undefined != options.parent) {
            this.parent = options.parent;
        }
        
        _.bindAll(this, 'initPayment','onStatusReceive','handleStatus','startTimer', 'stopTimer', 'initPayment');
        
        this.on("change:status", this.handleStatus, this);
        this.on("purchase:mobile:done", this.stopTimer, this);
        this.on("purchase:mobile:error", this.stopTimer, this);
        this.on("purchase:mobile:success", this.stopTimer, this);
        
    },

    initPayment: function() {
        $log("initialisation");
        if (this.get("pending") == true) throw ("Payment already ongoing!");
        this.sync("update").done(function(res) { this.onStatusReceive(res); }.bind(this));
    },
    
     onStatusReceive: function(res) {

        $log(res);
        
        if (res.status == "PENDING" && this.get("status") != "PENDING") {
            this.trigger("purchase:mobile:start",res);
            this.startTimer();            
            this.set("authToken", res.authToken);
            this.set("phoneNumber", res.phoneNumber);
            this.set("status", res.status);
            this.requestPaymentStatus(this.onStatusReceive);
            
        }

        if (res.status == "PAYMENT") {
            this.set("status", res.status);
            
            setTimeout(function() { 
                this.handleStatus();
            }.bind(this),1000);
        }
        
        if (res.status == "DONE") {
            this.set(res);
            this.set("tickets", res.tickets);
            this.set("authToken", res.authToken);
        }
    },

    resetPayment: function() {
        this.stopTimer();
        this.set(this.defaults);
    },

    startTimer: function() {
        this.resetPayment();

        if (this.interval) {
            clearInterval(this.ival);
        }
        
        this.set("pending",true);

        this.interval = setInterval(function() {
            this.handleStatus();
            var timeout = this.get("timeout");
            $log(timeout);

            if (this.get("pending") === false) {
                this.stopTimer();
                return false;
            }
            if (timeout > 0) {
                this.set("timeout",--timeout);
            } else {
                this.trigger("purchase:mobile:error", "Timeout exceeded");
            } 
        }.bind(this),1000);
    },

    stopTimer: function() { 
        this.set("pending",false);
        if (this.interval) {
            clearInterval(this.interval);
        }
    },
    handleStatus: function() { 
        var status = this.get("status");
        $log(status);
        if (status == "PAYMENT") {
            this.trigger("purchase:mobile:success");
            this.requestPaymentStatus(this.onStatusReceive());
        }
        if (status == "PENDING") { 
            this.trigger("purchase:mobile:pending");
            return false;
        }
        if (status == "FAILED") {
            this.trigger("purchase:mobile:error", "Payment failed");
        }
        if (status == "DONE") {
            
            if (this.get("tickets")) {
                
                _.forEach(this.get("tickets"), function(item) {
                    var ticket = new App.User.Ticket(item);
                    this.trigger("purchase:ticket:received", ticket);
                }.bind(this));
            }
            
            this.trigger("purchase:mobile:done", "Success!");
        }

        this.stopTimer();       
        return true;
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

    defaults: { method: 'code',  price: "", code: '', email: '', purchaseInfo: {}, verified: false},
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
        if (options && undefined != options.mobilepayment) {
            this.mobilepayment = options.mobilepayment;
        }
        
        this.listenTo(this.model, "change", function() {  
            this.set("price", this.model.get("price"));
        }, this);
        _.bindAll(this, 'purchase', 'onCodeAuth', 'verify', 'onVerifyResponse', 'sendCodeAuth', 'paymentCallback')

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

    getAnonymousToken: function(callback) { 
        var email = this.get("email");
        if (!email || email == "") email = this.session.get("profile").get("email");
        this.session.once("user:login", callback, this);

        return this.session.getToken(email);

    },

    authorizeCode: function(code) {
        if (!code) code = this.get("code");
        var film_id = this.model.get("id");
        if (undefined !== code && code != "") {
            this.sendCodeAuth(film_id, code, this.onCodeAuth);
        }
    },
    
    sendCodeAuth: function(callback, film_id,code) {  
        app.api.call(["authorize_film", film_id, code], {}, callback);
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
    
    verify: function(callback) {
        var info = this.generatePurchaseInfo();
        app.api.call(["payment", "verify", info.film_id], info, callback,true);
    },

    onVerifyResponse: function(data) {
        
        if (data.status !== "ok") {
            var message = data.message;
            this.trigger("purchase:verify:error", message);
            this.set("verified",false);
            return false;
        } else {
            this.set("verified",true);
            this.trigger("purchase:verify:successful"); 
            return true;
        }
    },
    
    purchase: function() {
        
        if (!this.session.get("auth_id") || this.session.get("auth_id").length == 0 ) { 
            this.getAnonymousToken(this.purchase);
            return false;
        } 

        var verified = this.get("verified");
        
        if (verified === false) {
            this.once("purchase:verify:successful", this.purchase, this);
            this.verify(this.onVerifyResponse);
            return false;
            
        }

        var method = this.get("method");

        if (method == "code") { 
            var id = this.model.get("id");
            var code = this.get("code");
            this.sendCodeAuth(this.onCodeAuth, id, code);
            return false;
        }
      
        if (this.get("method_id") != "") { 
            var form = this.generatePurchaseForm();
            document.body.appendChild(form);
            form.submit();
            return false;
        } else { 
            $log("Error while making purchase: invalid method selected");
            return false;
        }

       
    },

    generatePurchaseForm: function() { 

        var info =  this.generatePurchaseInfo();

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

        return info;
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
