App.Views.FilmView = Backbone.View.extend({
    model: App.Models.Film,
    tagName: 'li',
    className: 'item',
    events: {
        'click ': 'showMoviePage'
    },
    initialize: function() {
        this.listenTo(this.model, 'change', this.render, this);
        this.listenTo(this.model, 'remove', this.remove, this);
        this.listenTo(this.model, 'destroy', this.remove, this);
    },
    showMoviePage: function(e) {
        e.preventDefault();
        var url = this.model.get("film").seo_friendly_url;
        app.router.navigate(url, {
            trigger: true
        });
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
    events: {
        'click a': 'showMoviePage'
    },
    initialize: function() {
        this.listenTo(this.model, 'change', this.render, this);
        this.listenTo(this.model, 'remove', this.remove, this);
    },
    showMoviePage: function(e) {
        var film = app.collection.originalCollection.get(this.model.get("id"));
        if (typeof(film) == "undefined") return false;
        var url = app.collection.originalCollection.get(this.model.get("id")).get("film").seo_friendly_url;
        app.router.navigate(url, {
            trigger: true
        });
        e.preventDefault();
        return false;
    },
    render: function() {
        var filmitem = app.collection.originalCollection.get(this.model.get("id"));
        if (typeof(filmitem) == "undefined") return false;
        var film = filmitem.get("film")
        this.model.set("seo_friendly_url", film.seo_friendly_url);
        this.model.set("poster_url", film.poster_url);
        if (this.model.get("validto")) var date = App.Utils.stringToDate(this.model.get("validto"));
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
    initialized: false,
    initialize: function(options) {
        this.querystate = options.querystate;
        this.fragment = document.createDocumentFragment();            
        this.banners = options.banners;

        this.listenTo(this.querystate, "change:q", this.onQueryChange, this);
        if (this.querystate.get("q").length > 0) {
            this.$el.hide();
        } 

    },
    onQueryChange: function() {
        if (this.querystate.get("q").length > 0) { 
            this.trigger("search:open");
        } else { 
            this.trigger("search:close");
        }
    },
    resetView: function() { 
          setTimeout(function() {
            this.$el.empty();
            this.render();
        }.bind(this),85);
    },
    render: function() {
        this.$el.empty().append(ich.featuredTemplate());
        var counter = 0;

            this.banners.forEach(function(item) {               
                $(this.fragment).append(ich.bannerItemTemplate(item.toJSON()));
                counter++;
            }.bind(this));
            _.each(this.collection, function(item) {
                if (counter < App.Settings.featured_slides_limit) {
                    counter++;
                    var shortOverview = item.get('film').overview.substr(0, 210) + "...";
                    item.get('film').shortOverview = shortOverview;
                    $(this.fragment).append(ich.featuredItemTemplate(item.toJSON()));
                }
            }.bind(this));
     
        $(this.swiperel).empty().append(this.fragment);
       
        if (counter < 2) { 
            this.$(".arrow-left, .arrow-right").hide();

        } else {
            setTimeout(function() {
                    this.startCarousel();
            }.bind(this), 1600);
        }

        setTimeout(function() {
           App.Utils.lazyload();
        },250);
        return this;
    },
    startCarousel: function() {

        window.mySwiper = new Swiper('#featured-swiper-container', {
            //Your options here:
            mode: 'horizontal',
            loop: true,
            pagination: '.pagination',
            paginationClickable: true,
            createPagination: true,
            onSlideChangeStart: function(e) {
                App.Utils.lazyload();
            }
        });
        $('#featured-swiper-container .arrow-left').on('click', function(e) {
            e.preventDefault();
            mySwiper.swipePrev();
        });
        $('#featured-swiper-container .arrow-right').on('click', function(e) {
            e.preventDefault();
            mySwiper.swipeNext();
        });
    }
});