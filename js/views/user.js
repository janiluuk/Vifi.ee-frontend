App.Views.SubscriptionView = Backbone.View.extend({ 
    el: '#contentpage',
    events: { 
        'click .buysubscription' : 'buysubscription',
        'click .activatesubscription' : 'activatesubscription'
    },
    initialize: function(options) {
          this.options = options;
    },
    buysubscription: function() {
        this.dialog = new App.Views.PurchaseSubscription();
        this.dialog.render();
    },
    activatesubscription: function() {

        this.dialog = new App.Views.ActivateSubscription();
        this.dialog.render();

    },
    render: function() { 

      this.$el.html(ich.subscriptionPlansTemplate({}));
     
      return this;
      
    },
});
App.Views.ProfileView =  App.Views.CarouselView.extend({ 
    model: App.User.Profile,
    el: '#contentpage',
    events: {
        'click #edit-profile-button, #edit-profile-cancel-button': 'editProfile',
        'click #change-password-button, #change-password-cancel-button': 'changePassword',

        "click .revoke": "revoke"
    },
    initialize: function(options) {
      this.options = options;
      this.collection = app.usercollection;
      _.bindAll(this, 'render', 'renderCollection');

      this.listenTo(this.model, "change:id", this.render, this);
      this.listenTo(this.collection, "add", this.renderCollection, this);
      this.listenTo(this.collection, "reset", this.renderCollection, this);

      this.collectionview = new App.Views.UserCollectionView({collection: this.collection});
      this.render();
      

    },
    editProfile: function(e) {
        e.preventDefault();
        $("#user-profile-edit, #user-profile-view").toggle();
        e.stopPropagation();

        return false;
    },
    changePassword: function(e) {
        e.preventDefault();
        $("#change-password-view, #change-password-edit").toggle();
        e.stopPropagation();

        return false;
    },

    revoke: function () {
        FB.api("/me/permissions", "delete", function () {
            alert('Permissions revoked');
            FB.getLoginStatus();
        });
        return false;
    },
    renderCollection: function() { 
      $("#profilepage-mymovies-container").empty();

      this.collectionview.render().$el.appendTo("#profilepage-mymovies-container");

    },

    render: function() { 
      this.$el.html(ich.profileTemplate(this.model.toJSON()));
      this.renderCollection();
      setTimeout(function() { 
            var swiper = this.startCarousel(this.options.swipeTo);
        }.bind(this),100);
      
      return this;
      
    }

});
App.Views.UserPairView = Backbone.View.extend({ 
      model: App.User.Profile,
      el: '#contentpage',
      events:  { 'submit #pair-form' : 'pair'},
    initialize: function(options) {
      this.options = options;
      this.listenTo(this.model, "change", this.render, this);


    },
    pair: function(e) {
        e.preventDefault();
        var code = $("#pairing-code").val();
        if (code == "") { 
            alert("Empty code :/");
        }
        this.model.trigger("user:pair", code);

        return false;

    },
    render: function() { 

      this.$el.html(ich.pairDeviceTemplate(this.model.toJSON()));
      return this;
      
    },
});

App.Views.UserCollectionView = Backbone.View.extend({

    events: {
        'click .next_page' : 'nextPage',
        'click .previous_page' : 'previousPage'
    },
 
    initialize: function(options) {
        this.$el.html(ich.userCollectionTemplate({}));
        this.options = options;
    },
    render: function() {
        this.$el.empty();       
        this.$el.append('<ul class="user-filmcollection-list"></ul>');
        this.$filmCollectionHolder = this.$('.user-filmcollection-list');
        this.renderFilmViews();
        return this;
    },
    getTotalPages: function() {
        return Math.ceil(this.collection.length / this.options.carouselShowFilms) || 1;
    },
    renderFilmViews: function() {

        this.$filmCollectionHolder.html('');
        this.collection.each(function(model) {
                this.addChildView(model);
    
        }, this);
    },
    addChildView: function(model) {
        var filmView = new App.Views.UserFilmView({
            model: model,
            user_is_authenticated: true,
            queue: this.options.queue
        });
        this.$filmCollectionHolder.append(filmView.render().el);
    },
    previousPage: function() {
        if (this.page > 1) {
            this.page--;
            this.renderFilmViews();
        }
    },
    nextPage: function() {
        if (this.page < this.getTotalPages()) {
            this.page++;
            this.renderFilmViews();
        }
    },
    addAndShowFirstPage: function() {
        this.page = 1;
        this.renderFilmViews();

    },
    addAndShowLastPage: function() {
        if (this.page < this.getTotalPages()) {
            this.page = this.getTotalPages();
        }
        this.renderFilmViews();
    }
});
