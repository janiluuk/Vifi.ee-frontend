App.Views.MovieDetailView = Backbone.View.extend({
    model: App.Models.Film,
    el: "#moviepage",
    events: {
        'click a#watchTrailer': 'playTrailer',
        'click a#playMovie': 'playMovie',
        'click #close-player': 'closePlayer',
        'click #close-trailer': 'closeTrailer',
        'click #film-tabbar-swiper-container .swiper-slide': 'changeTab'
    },
    initialize: function(options) {

        this.listenTo(this.model, 'change:id', this.render);
        this.listenTo(this.model, 'change:rt_ratings', this.renderRatings);
        _.bindAll(this, 'playMovie', 'render');
        if (typeof(DISQUS) == "undefined") { 
            this.enableComments();
        }
        this.template = _.template(app.template.get("film"));

    },
    enableRatings: function() {

        $('[id^="imdb-rating-api"]').remove();
        (function(d,s,id){                                    
            var js,stags=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}js=d.createElement(s);js.id=id;js.src="http://g-ec2.images-amazon.com/images/G/01/imdb/plugins/rating/js/rating.min.js";stags.parentNode.insertBefore(js,stags);
        })(document,'script','imdb-rating-api');

    },
    enableComments: function() {
        window.disqus_title = this.model.get("title");
        window.disqus_shortname = 'vifi'; // Required - Replace example with your forum shortname
        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
        this.resetComments();
    },
    enableAddThis: function() {
        if (window.addthis) {
              window.addthis = null;
              window._adr = null;
              window._atc = null;
              window._atd = null;
              window._ate = null;
              window._atr = null;
              window._atw = null;
        }
        (function() {
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-540b49a3467ae07c";
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
        
    },
    enableYoutubePlayer: function() {
        if (typeof(YT) != "undefined") return false;
        $("#youtubeplayer").remove();
        var tag = document.createElement('script');
        tag.id = "youtubeplayer";
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        return true;

    },
    resetComments: function() {

        window.disqus_identifier = "aaaaa"+this.model.get("seo_friendly_url");
        window.disqus_title = this.model.get("title");
        window.disqus_url = window.location.href;
        if (typeof(DISQUS) != "undefined") { 

            reset("aaaaa"+this.model.get("seo_friendly_url"), window.location.href+'#!', window.location.href+'#!');

        }
    },
    renderRatings: function() {
        if (undefined != this.model.get("rt_ratings") && this.model.get("rt_ratings") != "") {
            var link = this.model.get("rt_links").alternate;
            this.$("#rtratings").html('<a href="'+link+'"><span class="icon rottentomato"></span><span>'+ this.model.get("rt_ratings").critics_score+'%</span></a>');
        }
        return this;
    },
    render: function() {
    
        this.model.fetchRT();
        this.$el.empty().append(this.template(this.model.toJSON()));
        setTimeout(function() {
            this.startCarousel();
            this.resetComments();
            this.enableRatings();
            this.enableAddThis(); 
            this.enableYoutubePlayer();
        }.bind(this), 100);
    
        return this;
    
    },
    playTrailer: function(e) {

        if (e) e.preventDefault();
        $("#gallery-swiper-container").fadeOut();
        if (!this.trailerView) {         
            this.trailerView = new App.Views.TrailerView({
                model: this.model
            });
            this.listenTo(this.trailerView, "play:movie", this.playMovie, this);
            this.listenTo(this.trailerView, "trailer:close", this.closeTrailer, this);

        } else {
            this.trailerView.model.set(this.model.toJSON());
        }
        this.trailerView.playTrailer();
        e.stopPropagation();

    },
    closeTrailer: function(e) {
        if (e) e.preventDefault();
        $("#gallery-swiper-container").fadeIn();
        this.trailerView.close();

        if (e) e.stopPropagation();
    },

    playMovie: function(e) {
        if (e) e.preventDefault();
        $("#gallery-swiper-container").fadeIn();

        if (!app.session.get("profile").hasMovie(this.model)) {
            this.purchaseView = new App.Views.PurchaseView({
                model: this.model,
                session: app.session
            })
            return false;
        }
        $("#gallery-swiper-container").hide();
        if (!this.playerView) {
            this.playerView = new App.Views.PlayerView({
                model: app.player
            });
        } else { 
            this.playerView.initialize();
        }
        app.player.load(this.model);
        this.playerView.render();
        if (e) e.stopPropagation();
        return false;

    },
    closePlayer: function(e) {
        e.preventDefault();
        this.playerView.close();
        $("#gallery-swiper-container").fadeIn();
        e.stopPropagation();
    },
    changeTab: function(e) {
        e.preventDefault();
        var attr = $(e.currentTarget).attr("data-rel");
        var el = $("#" + attr);

        $(el).siblings().removeClass("active").fadeOut();
        $(el).fadeIn().addClass("active");
    },

    startCarousel: function() {

        window.myMovieSwiper = $('#gallery-swiper-container').swiper({
            //Your options here:
            mode: 'horizontal',
            cssWidthAndHeight: false,
            pagination: '.pagination-1',
            paginationClickable: true,
            createPagination: true,
            //etc..
        });

        $('.arrow-left').on('click', function(e) {
            e.preventDefault()
            myMovieSwiper.swipePrev()
        });
        $('.arrow-right').on('click', function(e) {
            e.preventDefault()
            myMovieSwiper.swipeNext()
        });

        window.filmnavSwiper = new Swiper('#film-tabbar-swiper-container', {
            slidesPerView: 'auto',
            mode: 'horizontal',
            loop: false,
            centeredSlides: true,
            cssWidthAndHeight: false,
            onTouchEnd: function(e) {
                var idx = e.activeIndex;
                $("#film-tabbar-swiper-container .swiper-wrapper .swiper-slide:nth-child(" + (idx + 1) + ")").click();
            }
        });
        $("#film-tabbar-swiper-container .swiper-slide").each(function(item) {
            $(this).click(function() {
                filmnavSwiper.swipeTo(item);
            })
        });

    }
});
