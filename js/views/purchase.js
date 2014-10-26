
App.Views.PurchaseView = App.Views.DialogView.extend({ 
    model: App.Models.Film,
    template: '<div id="modalcontent"><div id="loginmodal"/><div id="purchasemodal"/></div>',
    events: { 
      'click .mfp-close' : 'close'

    },
    initialize: function(options) {

        options = options || {};
        this.session = options.session;
        this.paymentView = new App.Views.PaymentDialog({model: options.model, session: options.session, parent: this});
        this.loginView = new App.Views.LoginDialog({model: options.session, parent: this});
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


      if (this.session.isLoggedIn()) this.showPayment();
      else this.showLogin();
      return this;
    },    

});

App.Views.LoginDialog = Backbone.View.extend({ 
    model: App.Models.Film,

    events: { 
      'click .mfp-close' : 'close',
      'click button#continue-unregistered' : 'showPayment' 

    },
    initialize: function(options) {

        options = options || {};
        this.parent = options.parent;

    },

  
    showPayment: function() {
      this.parent.showPayment();

    },
    render: function() {
        this.$el.html(ich.loginDialogTemplate(this.model.toJSON()));
        return this;
    }

    
});


App.Views.PaymentDialog = Backbone.View.extend({
  events: { 'click .mfp-close' : 'exit',
            'click button' : 'initPayment',
            'click #payment-list li' : 'selectMethod',
          },
    initialize: function(options) {
      options = options || {};
      this.parent = options.parent;
      this.session = options.session;

      this.payment = new App.Models.Purchase({model: this.model, session: options.session });
      this.listenTo(this.payment, "purchase:successful", this.onPaymentSuccess, this);
    },


    selectMethod: function(e) {
      e.preventDefault();
      var el = $(e.currentTarget);
      el.addClass("selected").siblings().removeClass("selected");
      var value = el.attr("id");
      $("#selectedMethod").val(value);
      this.payment.set("paymentMethod", value);
      this.updateUI();

    },
    getSelectedMethod: function() {
      var paymentMethod = this.payment.get("paymentMethod");
      if (undefined !== $.cookie("vifi_payment_method") ) {
        paymentMethod = $.cookie("vifi_payment_method");
      } 
   
      return paymentMethod;
    },
    setSelectedMethod: function(method) {

      $.cookie("vifi_payment_method", method);

    },
    getEmail: function() {
      var email = this.session.get("profile").get("email");
      if (email != "Visitor") {
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

      var method = this.getSelectedMethod();
      $("#selectedMethod").val(method);
      $(".payment-method-data").hide();
      $("#"+method).addClass("selected");

      if (method == "code") {
          $("#payment-code").show();
          return false;
      } else { 
        $("#payment-email").show();
      }

    },

    initPayment: function() {
      var code = $("#payment-method-code").val();
      var email = $("#payment-method-email").val();
      this.payment.set("paymentCode", code);
      this.payment.set("email", email);
      this.payment.purchase(this.model);

      return false;
      
    },
    onPaymentSuccess: function() { 
       this.exit();
       app.movieview.playMovie();

    },
    exit: function() {

      this.parent.close();

    },
    render: function() {
        this.$el.html(ich.purchaseDialogTemplate(this.model.toJSON()));
        this.updateUI();

        return this;
    },

});

App.Views.PurchaseSubscription = App.Views.DialogView.extend({

   render: function() {
        this.$el.html(ich.subscriptionActivateDialogTemplate(this.model.toJSON()));
        return this;
    },

});
App.Views.ActivateSubscription = App.Views.PurchaseView.extend({

   render: function() {
        this.$el.html(ich.subscriptionActivateDialogTemplate(this.model.toJSON()));
        return this;
    }


});