App.Views.PostPurchaseDialogView = App.Views.DialogView.extend({
    model: App.Models.Film,
    template: '<div id="modalcontent"><div id="post-purchase-modal"/></div>',
    events: {
        'click .mfp-close': 'close',
    },
    initialize: function(options) {
        _.bindAll(this, 'afterClose', 'render');
        options = options || {};
        this.session = options.session;
        this.model = options.model;
        this.listenTo(this.model, 'change', this.render, this);
        var id = options.model.get("id");
        if (this.view) this.view.remove();
        this.view = new App.Views.PurchaseSuccessDialog({
            model: this.model,
            session: this.session,
            parent: this
        });
    },

    render: function() {
        this.$el.empty().html(this.template).appendTo("body");
        this.openDialog();
        this.setElement(".mfp-content");
        this.assign(this.view, "#post-purchase-modal");
        return this;
    },
    afterClose: function(e) {
        this.view.close();
        return false;
    }
    
});
App.Views.PurchaseSuccessDialog = Backbone.View.extend({
    model: App.Models.Film,
    events: {
        'click .mfp-close': 'close',
        'click .continue-button': 'onContinue'
    },
    initialize: function(options) {
        this.listenTo(this.model, "change", this.render, this);
        options = options || {};
        this.parent = options.parent;
        this.session = options.session;
        this.model = options.model;
    },
    onContinue: function(e) {
        e.preventDefault();
        $.removeCookie('film');
        $.removeCookie('film', {domain: App.Settings.domain, path: '/' });
       
        var id = this.model.get("id");
        App.User.Cookie.removeFilm(id);

        this.close();
        this.parent.close();

        app.router.showFilm(id);
        app.movieview.playMovie();

        return false;
    },
    render: function() {
        this.$el.html(ich.purchaseSuccessTemplate({
            email: this.session.get("profile").get("email"),
            purchase: this.model.toJSON()
        }));
        return this;
    }
});
App.Views.PurchaseView = App.Views.DialogView.extend({
    model: App.Models.Film,
    template: '<div id="modalcontent"><div id="loginmodal"/><div id="purchasemodal"/></div>',
    events: {
        'click .mfp-close': 'close'
    },
    initialize: function(options) {
        _.bindAll(this, 'afterClose', 'render');
        options = options || {};
        this.session = options.session;
        this.paymentView = new App.Views.PaymentDialog({
            model: options.model,
            session: options.session,
            payment: new App.Models.Purchase({
                model: options.model,
                session: options.session
            }),
            parent: this
        });
        this.loginView = new App.Views.LoginDialog({
            session: options.session,
            parent: this
        });
        this.render();
    },
    showLogin: function() {
        $(".vifi-popup").hide();
        $("#login-popup").show();
    },
    showPayment: function() {
        $(".vifi-popup").hide();
        $("#film-popup").show();
    },
    render: function() {
        this.$el.html(this.template).appendTo("body");
        this.openDialog();
        this.setElement(".mfp-content");
        this.assign(this.paymentView, "#purchasemodal");
        this.assign(this.loginView, "#loginmodal");
        if (this.session.isLoggedIn() || !App.Settings.loginEnabled) this.showPayment();
        else this.showLogin();
        return this;
    },
    afterClose: function(e) {
        this.loginView.close();
        this.paymentView.close();
        return false;
    }
});
App.Views.LoginDialog = Backbone.View.extend({
    model: App.Models.Film,
    events: {
        'click .mfp-close': 'close',
        'click button#continue-unregistered': 'showPayment'
    },
    initialize: function(options) {
        options = options || {};
        this.parent = options.parent;
        this.session = options.session;
        this.loginForm = new App.Views.LoginForm({
            session: options.session
        });
        this.listenTo(this.session.profile, "user:login", this.showPayment, this);
    },
    showPayment: function() {
        this.parent.showPayment();
    },
    close: function() {},
    render: function() {
        this.$el.html(ich.loginDialogTemplate(this.session.toJSON()));
        this.assign(this.loginForm, "#popup-login-register-form");
        return this;
    }
});
App.Views.PaymentDialog = Backbone.View.extend({
    events: {
        'click .mfp-close': 'close',
        'click button#confirm-purchase-button': 'initPayment',
        'click #payment-list li': 'selectMethod',
        'submit #single-purchase': 'initPayment'        
    },
    initialize: function(options) {
        options = options || {};
        this.parent = options.parent;
        this.session = options.session;
        this.model = options.model;
        this.payment = options.payment;
        this.listenTo(this.payment, "purchase:successful", this.onPaymentSuccess, this);
        this.listenTo(this.payment, "purchase:error", this.onPaymentError, this);

        Backbone.Validation.configure({
            forceUpdate: true
        });
        Backbone.Validation.bind(this, {
            model: this.payment
        });
    },
    selectMethod: function(e) {
        e.preventDefault();
        var el = $(e.currentTarget);
        el.addClass("selected").siblings().removeClass("selected");
        this.payment.set("method", el.attr("id"));
        var method = _.first(app.paymentmethods.filter(function(item) {
            return item.get("identifier") == el.attr("id");
        }));
 
        if (method && typeof(method.get) != "undefined") { 
            this.setSelectedMethod(method.get("identifier"));
            method_id = method.get("id");
            this.payment.set("method_id", method_id);
            this.updateUI();
        }
    },
    getSelectedMethod: function() {
        var paymentMethod = this.payment.get("method");
        if (undefined !== $.cookie("vifi_payment_method")) {
            paymentMethod = $.cookie("vifi_payment_method");
        }
        return paymentMethod;
    },
    setSelectedMethod: function(method) {
        $.cookie("vifi_payment_method", method);
    },
    getEmail: function() {
        var email = this.session.get("profile").get("email");
        if (email != "anonymous@vifi.ee") {
            return email;
        }
        return false;
    },
    updateUI: function() {

        var email = this.getEmail();
        if (email) {
            $("#payment-method-email").val(email);
        }
        // Payment method
        var method = this.payment.get("method");
        $(".payment-method-data").hide();
        $("#" + method).addClass("selected");
        $("#method").val(method);
        if (method == "code") {
            $("#payment-code").show();
        } else if (method == "mobile") { 
            $("#payment-mobile").show();
        } else {
            $("#payment-email").show();
        }
    },
    initPayment: function(e) {
        if (e) e.preventDefault();

        var data = this.$("form").serializeObject();
        this.payment.set(data);
        
        if (this.payment.isValid(true)) { 
            this.payment.purchase(this.model);
            this.$("#confirm-purchase-button").addClass("loading");
        }

        return false;
    },
    onPaymentSuccess: function() {
        this.$("#confirm-purchase-button").removeClass("loading");
        this.remove();
        app.movieview.playMovie();
    },
    onPaymentError: function(message) {

        message = tr(message);
        this.$("#confirm-purchase-button").removeClass("loading");
        Backbone.Validation.callbacks.invalid(this, 'code', message);
        app.trigger("error", message);

    },
    
    remove: function() {
        // Remove the validation binding
        Backbone.Validation.unbind(this);
        this.parent.close();
        return Backbone.View.prototype.remove.apply(this, arguments);
    },
    render: function() {
        this.model.set('payments', app.paymentmethods.toJSON());
        this.$el.html(ich.purchaseDialogTemplate(this.model.toJSON()));
        var method = this.getSelectedMethod();
        $("#"+method).click();
        this.updateUI();
        return this;
    },
});
App.Views.SubscriptionPaymentDialog = App.Views.PaymentDialog.extend({
    render: function() {
        this.model.set('payments', app.paymentmethods.toJSON());
        
        this.$el.html(ich.subscriptionPurchaseDialogTemplate(this.model.toJSON()));
        this.updateUI();
        return this;
    },
    onPaymentSuccess: function() {
        this.remove();
    },
});
App.Views.PurchaseSubscriptionView = App.Views.PurchaseView.extend({
    initialize: function(options) {
        options = options || {};
        this.session = options.session;
        this.paymentView = new App.Views.SubscriptionPaymentDialog({
            model: options.model,
            payment: new App.Models.PurchaseSubscription({
                model: options.model,
                session: options.session
            }),
            session: options.session,
            parent: this
        });
        this.loginView = new App.Views.LoginDialog({
            model: options.session,
            session: options.session,
            parent: this
        });
        this.render();
    }
});
App.Views.ActivateSubscription = App.Views.DialogView.extend({
    render: function() {
        this.$el.html(ich.subscriptionActivateDialogTemplate());
        this.openDialog(false, ich.subscriptionPurchaseDialogTemplate());
        return this;
    }
});