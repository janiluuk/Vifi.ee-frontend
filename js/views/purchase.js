App.Views.DialogView = Backbone.View.extend({ 
    template: ich.dialogTemplate,
    el: "#dialog",

    initialize: function(options) {

      this.template = ich.dialogTemplate;
    },
    onClose: function() {
       $.magnificPopup.close(); 

    },
    render: function() {
      return ich.dialogTemplate(this.model.toJSON());

    },
    openDialog: function(e) {
        if (e) e.preventDefault();

        var _this = this;
        $.magnificPopup.open({
          items: {
              src: this.render(),
              type: 'inline',
          },
          prependTo: document.getElementById("dialog"),
          removalDelay: 500, //delay removal by X to allow out-animation
          callbacks: {
            beforeOpen: function() {
            },
            afterOpen: this.afterOpen
          },
          
          closeBtnInside: true

        });
        return false;
    },
    afterOpen: function(e) {},

    
    onClose: function() {
       this.stopListening();
       $.magnificPopup.close(); 

    },

});
App.Views.PurchaseView = App.Views.DialogView.extend({ 
    model: App.Models.Film,
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
        this.listenTo(this.model, "change", this.openDialog, this);
        this.listenTo(this.payment, "purchase:successful", this.onPaymentSuccess, this);
    },

    initPayment: function() {
      this.payment.purchase(this.model);
      return false;
      
    },
    onPaymentSuccess: function() { 
       this.close();
       app.movieview.playMovie();

    },
 
    afterOpen: function(e) {
      $(".mfp-container button").unbind().click(this.initPayment);

    },
    

});

App.Views.PurchaseSubscription = App.Views.PurchaseView.extend({

  openDialog: function(e) {
        if (e) e.preventDefault();

        var html = ich.loginDialogTemplate({});
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