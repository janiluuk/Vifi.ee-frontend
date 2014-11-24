App.Views.SubscriptionView = Backbone.View.extend({ 
    el: '#contentpage',
    events: { 
        'click .buysubscription' : 'buysubscription',
        'click .activatesubscription' : 'activatesubscription'
    },
    initialize: function(options) {
          this.options = options;
    },

    buysubscription: function(e) {

        var itemId = $(e.currentTarget).data("id");
        var item = app.subscriptions.findWhere({id: itemId});
        if (!item) return false;

        if (!app.session.get("profile").hasSubscription()) {
            this.purchaseView = new App.Views.PurchaseSubscriptionView({
                model: item,
                session: app.session
            });
            return false;
        }

    },
    activatesubscription: function() {
        var subscription = app.collection.get(59444);

            this.purchaseView = new App.Views.PurchaseSubscriptionView({
                model: subscription,
                session: app.session
            })
            return false;

    },
    render: function() { 

      this.$el.html(ich.subscriptionPlansTemplate({}));
     
      return this;
      
    },
});

App.Views.LoginForm = Backbone.View.extend({ 
    events: { 
        'click a.register-button' : 'toggleRegisterForm',        
        'click .btn.facebook' : 'loginFacebook',
        'submit form#user-register' : 'register',
        'submit form#user-login': 'login'
    },

    initialize: function(options) { 
        var options = options || {};

        _.bindAll(this, 'render');
        
        if (options.model) this.model = options.model;
        
        if (options.session) {
            this.session = options.session;

            this.listenTo(this.session.profile, "user:register:fail", this.onFail, this);
            this.listenTo(this.session.profile, "user:login:fail", this.onFail, this);

            this.listenTo(this.session.profile, "user:register:success", function(data) {
                this.session.trigger("success", "You have registered successfully!");
                return false;
            }.bind(this), this);
            this.listenTo(this.session.profile, "user:login", this.onSuccess, this);
        }    
    },
    onFail: function(data) {
        if (!data) return false;
        this.$("form .error").remove();
        var div = $("<div>").addClass("row-fluid error").html(data.message);
        this.$("form:visible:first h3").append(div);
        return false;

    },
    logout: function (e) {
        app.router.navigate("/", {trigger:true});
        $(document).trigger('logout');
        return false;
    },
    onSuccess: function(data) {
        
        return false;

    },
    login: function(e) {

        e.preventDefault();
        var email = this.$("#login-email").val();
        var pass = this.$("#login-password").val();
        this.session.get("profile").login(email, pass);
        return false;

    },
    logout: function(e) { 
        e.preventDefault();
        $(document).trigger("logout");
    },
    loginFacebook: function(e) { 

        e.preventDefault();
        $(document).trigger("login");
    },
    register: function(e) {
        e.preventDefault();
        var email = this.$("#register-email").val();
        var pass = this.$("#register-password").val();
        var passverify = this.$("#register-password-verify").val();
        if (pass != passverify) {
                this.onFail({message: "Passwords do not match!"});

        }        
        if (email =="" || pass == "" || passverify == "") {  
            this.onFail({message: "Fill all the fields!"});
        } else { 
            this.session.get("profile").register(email, pass);
        }
        return false;
    },
    toggleRegisterForm: function(e) {
        e.preventDefault();
        this.$("form#user-register, form#user-login").toggle(); 
        return false;
    },
});


App.Views.ProfileView =  App.Views.CarouselView.extend({ 
    model: App.User.Profile,
    el: '#contentpage',
    events: {
        'click #edit-profile-button, #edit-profile-cancel-button': 'editProfile',
        'submit #profile-update-form' : 'updateProfile',
        "click .revoke": "revoke"
    },
    initialize: function(options) {
      this.options = options;
      this.collection = app.usercollection;
      _.bindAll(this, 'render', 'renderCollection');

      this.listenTo(this.model, "change:id", this.render, this);
      this.listenTo(this.collection, "add", this.renderCollection, this);
      this.listenTo(this.collection, "reset", this.renderCollection, this);
      this.resetpasswordview = new App.Views.ResetPasswordView({model: this.model});

      this.collectionview = new App.Views.UserCollectionView({collection: this.collection});
      this.render();
      

    },
    updateProfile: function(e) {
        e.preventDefault();
        var formData = _.extend({newsletter: "0"}, $("#profile-update-form").serializeObject());

        this.model.set(formData);
        this.model.save(null, {
            type: 'POST',
            data: formData
        });
        this.render();
        return false;


    },
    editProfile: function(e) {
        e.preventDefault();
        $("#user-profile-edit, #user-profile-view").toggle();
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
      this.resetpasswordview.setElement($("#reset-password")).render();

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



App.Views.ResetPasswordForm = Backbone.View.extend({ 

    bindings: {
        '[name=currentPassword]': {
            observe: 'password',
            setOptions: {
                validate: false
            }
        },
        '[name=newPassword]': {
            observe: 'newPassword'   ,
            setOptions: {
                validate: false
            }
        },
      '[name=repeatPassword]': {
            observe: 'repeatPassword'   ,
            setOptions: {
                validate: false
            }
        },
         
    },
    events: {  
        'click #change-password-save-button': 'changePassword'
    },
    initialize: function (options) {
        if (options && options.profile) this.profile = options.profile;

        // This hooks up the validation
        Backbone.Validation.bind(this);
    },
    changePassword: function (e) {
        e.preventDefault();

        // Check if the model is valid before saving

        if(this.model.isValid(true)) { 
            var email = app.session.profile.get("email");
            var pass = this.model.get("newPassword");
            if (app.session.profile.isRegistered()) {
                var oldpass = this.model.get("password");

                app.session.profile.changePassword(oldpass, pass);

            } else { 
                app.session.profile.register(email, pass);

            }
            // this.model.save();
        }
        return false;

    },
    render: function() {
        this.stickit();
        return this;
    },
    remove: function() {
        // Remove the validation binding
        Backbone.Validation.unbind(this);
        return Backbone.View.prototype.remove.apply(this, arguments);
    }
})
App.Views.ResetPasswordView = Backbone.View.extend({
    el: "#reset-password",
    
    events: {
        'click #change-password-button, #change-password-cancel-button': 'toggleForm',
    },
    
    initialize: function() {
        this.changePasswordForm = new App.Views.ResetPasswordForm({ el: '#password-form', profile: this.model, model: new App.User.ChangePassword()});
    },
    render: function() {
       this.$el.html(ich.resetPasswordTemplate(this.model.toJSON()));
       this.changePasswordForm.setElement("#reset-password").render();
       return this;

    },
    toggleForm: function(e) {
        e.preventDefault();
        $("#change-password-view, #change-password-edit").toggle();
        e.stopPropagation();

        return false;
    },

});