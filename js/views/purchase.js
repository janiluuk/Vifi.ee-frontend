App.Views.PurchaseView = Backbone.View.extend({ 
    model: App.Models.Film,
    el: "#dialog",
    events: { 
      'click button' : 'initPayment'

    },
    initialize: function(options) {

        options = options || {};
        this.session = options.session;
        this.model = options.model;
        _.bindAll(this, 'initPayment', 'openDialog');
        if (!this.payment)
        this.payment = new App.Models.Purchase({session: options.session});
        else this.payment.set("session", options.session);

        this.openDialog();
        this.model.on("change", this.openDialog, this);
        this.payment.on("purchase:successful", this.onPaymentSuccess, this);
    },

    initPayment: function() {
      this.payment.purchase(this.model);
      
      return false;
      
    },
    onPaymentSuccess: function() { 
       $.magnificPopup.close(); 
       app.movieview.playMovie();

    },
    close: function() {
       $.magnificPopup.close(); 

    },
    openDialog: function(e) {
        if (e) e.preventDefault();

        var html = ich.dialogTemplate(this.model.toJSON());
        var _this = this;
        $.magnificPopup.open({
          items: {
              src: html,
              type: 'inline',
          },
          prependTo: document.getElementById("dialog"),
          removalDelay: 500, //delay removal by X to allow out-animation
          callbacks: {
            beforeOpen: function() {
            },
            afterOpen: function() { 
                $(".mfp-container button").unbind().click(_this.initPayment);

            }
          },
          
          closeBtnInside: true

        });
        return false;
    },

});

App.Views.PurchaseSubscription = App.Views.PurchaseView.extend({

  openDialog: function(e) {
        if (e) e.preventDefault();

        var html = ich.subscriptionPurchaseDialogTemplate({});
        var _this = this;
        $.magnificPopup.open({
          items: {
              src: html,
              type: 'inline',
          },
          prependTo: document.getElementById("dialog"),
          removalDelay: 500, //delay removal by X to allow out-animation
          callbacks: {
            beforeOpen: function() {
            },
            afterOpen: function() { 
                $(".mfp-container button").unbind().click(_this.initPayment);

            }
          },
          
          closeBtnInside: true

        });
        return false;
    }


});
App.Views.ActivateSubscription = App.Views.PurchaseView.extend({

  openDialog: function(e) {
        if (e) e.preventDefault();

        var html = ich.subscriptionActivateDialogTemplate({});
        var _this = this;
        $.magnificPopup.open({
          items: {
              src: html,
              type: 'inline',
          },
          prependTo: document.getElementById("dialog"),
          removalDelay: 500, //delay removal by X to allow out-animation
          callbacks: {
            beforeOpen: function() {
            },
            afterOpen: function() { 
                $(".mfp-container button").unbind().click(_this.initPayment);

            }
          },
          
          closeBtnInside: true

        });
        return false;
    }


});