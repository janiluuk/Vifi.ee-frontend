
App.Views.FilmView = Backbone.View.extend({
    model: App.Models.Film,
    tagName: 'li',
    className: 'item',
    events: { 'click ' : 'showMoviePage'},
    initialize: function() {
        this.listenTo(this.model,'change', this.render, this);
        this.listenTo(this.model, 'remove', this.remove, this);
        this.listenTo(this.model, 'destroy', this.remove, this);
        
    }, 
    showMoviePage: function(e) {
        var url = this.model.get("film").seo_friendly_url;

        app.router.navigate(url, {trigger: true});
        e.preventDefault();
        return false;
    },
    render: function() {   
        this.$el.html(ich.filmitemTemplate(this.model.get("film")));
        return this;  
    }

});
App.Views.UserFilmView = Backbone.View.extend({
    model: App.Models.Film,
    tagName: 'li',
    className: 'item',
    events: { 'click a' : 'showMoviePage'},
    initialize: function() {
        this.listenTo(this.model,'change', this.render, this);
        this.listenTo(this.model,'remove', this.remove, this);

    },
    showMoviePage: function(e) {

        var url = app.collection.originalCollection.get(this.model.get("id")).get("film").seo_friendly_url;
        app.router.navigate(url, {trigger: true });
        e.preventDefault();
        return false;
    },

    render: function() {   
        var film = app.collection.originalCollection.get(this.model.get("id")).get("film");
        this.model.set("seo_friendly_url", film.seo_friendly_url);
        this.model.set("poster_url", film.poster_url);
        if (this.model.get("validto"))
        var date = App.Utils.stringToDate(this.model.get("validto"));
        if (date) { 
            var validtotext = App.Utils.dateToHumanreadable(date);
            this.model.set("validtotext", validtotext);
        }
        this.$el.html(ich.userfilmitemTemplate(this.model.toJSON()));

        return this;  
    }

});


App.Views.FeaturedView = Backbone.View.extend({
    swiperel: '#featured-slides',
    el: '#front-page-slider',
    collection: App.Collections.PaginatedCollection,
    initialize: function() {

        this.fragment = document.createDocumentFragment();
    },
   
    render: function() {
        var _this = this;
        this.$el.append(ich.featuredTemplate());

        _.each(this.collection, function(item) {
            var shortOverview = item.get('film').overview.substr(0, 210)+"...";
            item.get('film').shortOverview = shortOverview;
            $(_this.fragment).append(ich.featuredItemTemplate(item.toJSON()));

        } );
        $(this.swiperel).append(this.fragment);
        setTimeout(function() { _this.startCarousel(); }, 150);

        return this;
    },
    startCarousel: function() {
        window.mySwiper = $('#featured-swiper-container').swiper({
        //Your options here:
        mode:'horizontal',
        loop: true,
        pagination: '.pagination',
        paginationClickable: true,
        createPagination: true,
        //etc..
      });
      $('#featured-swiper-container .arrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev()
      });
      $('#featured-swiper-container .arrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext()
      });

      window.searchnavSwiper = new Swiper('#search-tabbar-swiper-container',{
        slidesPerView:'auto',
        mode:'horizontal',
        loop: false,
        centeredSlides: true,
        cssWidthAndHeight: true,

      });  

    }

});


