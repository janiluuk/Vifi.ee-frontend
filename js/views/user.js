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

    },
    activatesubscription: function() {

        this.dialog = new App.Views.ActivateSubscription();

    },
    render: function() { 

      this.$el.html(ich.subscriptionPlansTemplate({}));
     
      return this;
      
    },
});
App.Views.ProfileView = Backbone.View.extend({ 
    model: App.User.Profile,
    el: '#contentpage',
    events: {
        'click #edit-profile-button, #edit-profile-cancel-button': 'editProfile',
        'click #change-password-button, #change-password-cancel-button': 'changePassword',
        'click #profile-tabbar-swiper-container .swiper-slide' : 'changeTab'

    },
    initialize: function(options) {
      this.options = options;
      this.collection = app.usercollection;

      this.listenTo(this.model, "change", this.render, this);
      this.listenTo(this.collection, "change", this.render, this);

      this.collectionview = new App.Views.UserCollectionView({collection: this.collection});

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
    changeTab: function(e) {
        e.preventDefault();

        var attr = $(e.currentTarget).attr("data-rel");
        var el = $("#"+attr);

        $(el).siblings().removeClass("active").fadeOut();
        $(el).fadeIn().addClass("active");
    },
    startCarousel: function() {

      window.profileSwiper = new Swiper('#profile-tabbar-swiper-container',{
        slidesPerView:'auto',
        mode:'horizontal',
        loop: false,
        centeredSlides: true,
        cssWidthAndHeight: true,

         onTouchEnd : function(e) {
                var idx = e.activeIndex;
                $("#profile-tabbar-swiper-container .swiper-wrapper .swiper-slide:nth-child("+(idx+1)+")").click();
        } 
      }); 

      $("#profile-tabbar-swiper-container .swiper-slide").each(function(item) { 
            $(this).click(function(e) {
                e.preventDefault();

                profileSwiper.swipeTo(item);
            })  
      });


    },
    render: function() { 

      this.$el.html(ich.profileTemplate(this.model.toJSON()));
      this.collectionview.render().$el.appendTo("#profilepage-mymovies-container");
        setTimeout(function() { 
                this.startCarousel(); 
  
            }.bind(this), 100);
     
      return this;
      
    },

});
App.Views.UserPairView = Backbone.View.extend({ 
      model: App.User.Profile,
      el: '#contentpage',

    initialize: function(options) {
      this.options = options;
      this.listenTo(this.model, "change", this.render, this);


    },

    render: function() { 

      this.$el.html(ich.pairDeviceTemplate(this.model.toJSON()));
      return this;
      
    },
});

App.Views.UserCollectionView = Backbone.View.extend({
    page: 1,
    totalPages: 1,
    events: {
        'click .next_page' : 'nextPage',
        'click .previous_page' : 'previousPage'
    },
    paginationTemplate: '                                                          \
        <div class="pagination">                                                        \
            <div class="collection-page-info"></div>                                    \
            <div class="page-arrows">                                                   \
                <a class="previous_page">Previous</a>    \
                <a class="next_page">Next</a>       \
            </div>                                                                      \
        </div>',
    initialize: function(options) {
        this.$el.html(ich.userCollectionTemplate({}));
        this.listenTo(this.collection, 'change', this.render, this);
        this.options = options;
    },
    render: function() {
        this.$el.empty();

        if (this.options.carousel) {
            this.$el.addClass('film-collection-carousel');
            this.$el.append(this.paginationTemplate);
        
        }
        this.$el.append('<ul class="user-filmcollection-list"></ul>');
        this.$filmCollectionHolder = this.$('.user-filmcollection-list');
        this.renderFilmViews();
        return this;
    },
    getTotalPages: function() {
        return Math.ceil(this.collection.length / this.options.carouselShowFilms) || 1;
    },
    renderFilmViews: function() {

        if (this.options.carousel) {

            if (this.page > this.getTotalPages()) this.page = this.getTotalPages();
            var start = (this.page - 1) * this.options.carouselShowFilms;
            var stop = this.page * this.options.carouselShowFilms;
            if (stop > this.collection.length) stop = this.collection.length;

            if (this.page < this.getTotalPages()) {
                this.$('.next_page').addClass('active');
            } else {
                this.$('.next_page').removeClass('active');
            }

            if (this.page > 1) {
                this.$('.previous_page').addClass('active');
            } else {
                this.$('.previous_page').removeClass('active');
            }

            if (this.getTotalPages() > 1) {
                if ((1 + start) == stop) {
                    var showString = '#' + stop;
                } else {
                    var showString = (1 + start) + ' to ' + stop;
                }
                this.$('.collection-page-info').html('Showing ' + showString + ' of ' + this.collection.length + ' Films');
                this.$('.page-arrows').show();
            } else {
                this.$('.collection-page-info').html('');
                this.$('.page-arrows').hide();
            }

        } else {
            var start = 0;
            var stop = 300;
        }
        var count = 0;

        this.$filmCollectionHolder.html('');

        this.collection.each(function(model) {

            if ((count >= start && count < stop)) {
                this.addChildView(model);

            }

            count++;
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
