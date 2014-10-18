
App.Views.FilmView = Backbone.View.extend({
    model: App.Models.Film,
    tagName: 'li',
    className: 'item',
    events: { 'click a' : 'showMoviePage'},
    initialize: function() {
        this.model.bind('change', this.render, this);
        this.model.bind('remove', this.remove, this);
    },
    showMoviePage: function(e) {
        var url = this.model.get("film").seo_friendly_url;

        app.router.navigate(url, {trigger: true });
        e.preventDefault();
        return false;
    },

    render: function() {   
        var tmpl = $("#filmItemTemplate").html();
        var template = _.template(tmpl);

        this.$el.html(template(this.model.get("film")));

        return this;  
    }

});
App.Views.UserFilmView = Backbone.View.extend({
    model: App.Models.Film,
    tagName: 'li',
    className: 'item',
    events: { 'click a' : 'showMoviePage'},
    initialize: function() {
        this.model.bind('change', this.render, this);
        this.model.bind('remove', this.remove, this);

    },
    showMoviePage: function(e) {

        var url = app.collection.fullCollection.get(this.model.get("id")).get("film").seo_friendly_url;

        app.router.navigate(url, {trigger: true });
        e.preventDefault();
        return false;
    },

    render: function() {   
        var tmpl = $("#userFilmItemTemplate").html();
        var template = _.template(tmpl);
        var film = app.collection.fullCollection.get(this.model.get("id")).get("film");
        this.model.set("seo_friendly_url", film.seo_friendly_url);
        this.model.set("poster_url", film.poster_url);
        var date = App.Utils.stringToDate(this.model.get("validto"));

        var validtotext = App.Utils.dateToHumanreadable(date);
        this.model.set("validtotext", validtotext);
       
        this.$el.html(template(this.model.toJSON()));

        return this;  
    }

});


App.Views.FeaturedView = Backbone.View.extend({
    el: '#featured-slides',
    browsercollection: App.Collections.PaginatedCollection,
    template: $("#featuredItemTemplate").html(),
    initialize: function() {
        this.fragment = document.createDocumentFragment();
    },
   
    render: function() {
        var _this = this;
        var html = "";
        _.each(this.collection, function(item) {
            var shortOverview = item.get('film').overview.substr(0, 210)+"...";
            item.get('film').shortOverview = shortOverview;
            var template = _.template(_this.template);
            $(_this.fragment).append(template(item.toJSON()));

        } );
        this.$el.append(this.fragment);
        this.startCarousel();
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


