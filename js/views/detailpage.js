App.Views.MovieDetailView = Backbone.View.extend({
    model: App.Models.Film,
    el: "#moviepage",
    events: {
        'click a#watchTrailer': 'playTrailer',
        'click a#playMovie': 'playMovie',
        'click button.play': 'playMovie',
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
        if (this.model.get("imdbrating") == false) { 
            $('[id^="imdb-rating-api"]').remove();
            (function(d,s,id){                                    
                var js,stags=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return;}js=d.createElement(s);js.id=id;js.src="http://g-ec2.images-amazon.com/images/G/01/imdb/plugins/rating/js/rating.min.js";stags.parentNode.insertBefore(js,stags);
            })(document,'script','imdb-rating-api');
        }

    },
    enableComments: function() {

        if (!App.Settings.commentsEnabled) return false;

        window.disqus_title = this.model.get("title");
        window.disqus_shortname = App.Settings.disqus_shortname; // Required - Replace example with your forum shortname
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
    applyIsotope: function() {
        if (!this.isotope)
        this.isotope = $("#film-cast-container ul").isotope({
            layoutMode: 'fitRows',
            resizable: true,
            itemSelector: '#film-cast-container .item',
            transitionDuration: '0.5s',
            // disable scale transform transition when hiding
            hiddenStyle: {
            opacity: 0,
            'transform': 'translateY(100%)',
            },
            visibleStyle: {
            opacity: 1,
            'transform': 'translateY(0%)',
            },
            animationOptions: {
                duration: 250,
                easing: 'linear',
                queue: true,
            }
        });
        this.isotope.isotope( 'on', 'layoutComplete', function() { setTimeout(function() { App.Utils.lazyload() }, 200); } );

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

        if (!App.Settings.commentsEnabled) return false;
        window.disqus_identifier = this.model.get("seo_friendly_url");
        window.disqus_title = this.model.get("title");
        window.disqus_url = window.location.href.replace("#", "#!");
        if (typeof(DISQUS) != "undefined") { 
            reset(this.model.get("seo_friendly_url"),  window.disqus_url,  window.disqus_url);
        }
    },
    renderRatings: function() {
        if (undefined != this.model.get("rt_ratings") && this.model.get("rt_ratings") != "") {
            var link = this.model.get("rt_links").alternate;
            var rating = this.model.get("rt_ratings").critics_score;
            if (rating == -1 ) rating = this.model.get("rt_ratings").audience_score;

            this.$("#rtratings").empty().append('<a target="_blank" href="'+link+'"><span class="icon rottentomato"></span><span>'+ rating +'%</span></a>');
        }
        return this;
    },
    render: function() {
    
        this.$el.empty().append(this.template(this.model.toJSON()));
        this.isotope = false;
        setTimeout(function() {
            App.Utils.lazyload();
            this.model.fetchRT();
            this.startCarousel();
            this.resetComments();
            this.enableRatings();

          //  this.enableAddThis(); 

        }.bind(this), 150);

        setTimeout(function() {
            this.enableYoutubePlayer();
        }.bind(this),5000);
        return this;
    
    },
    playTrailer: function(e) {

        if (e) e.preventDefault();
        $("#gallery-swiper-container").fadeOut(function() { 
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
    }.bind(this));
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
            app.player.load(this.model);

        } else { 
            this.playerView.model.content.resetContent();
            this.playerView.render();
            app.player.load(this.model);
            app.movieview.playerView.$el.show();
        }
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

        $(el).siblings().removeClass("active").hide();
        $(el).fadeIn().addClass("active");

        setTimeout(function() { this.applyIsotope(); App.Utils.lazyload(); }.bind(this),2500);

    },

    startCarousel: function() {

        if (_.size(this.model.get("images").backdrops) < 2) {
            $("#moviepage .arrow-left, #moviepage .arrow-right").css("visibility", "hidden");
        } else { 

            window.myMovieSwiper = $('#gallery-swiper-container').swiper({
                //Your options here:
                mode: 'horizontal',
                cssWidthAndHeight: false,
                pagination: '.pagination-1',
                paginationClickable: true,
                createPagination: true,
                onSlideChangeStart: function(e) { 
                    App.Utils.lazyload();
                }
            });

            $('#moviepage .arrow-left').show().on('click', function(e) {
                e.preventDefault()
                myMovieSwiper.swipePrev();

            });
            $('#moviepage .arrow-right').show().on('click', function(e) {
                e.preventDefault()
                myMovieSwiper.swipeNext();
                
            });
        }

        window.filmnavSwiper = new Swiper('#film-tabbar-swiper-container', {
            slidesPerView: 'auto',
            mode: 'horizontal',
            loop: false,
            centeredSlides: true,
            cssWidthAndHeight: false,
            onTouchEnd: function(e) {
                var idx = e.activeIndex;
                $("#film-tabbar-swiper-container .swiper-wrapper .swiper-slide:nth-child(" + (idx + 1) + ")").click();
            },

        });
        $("#film-tabbar-swiper-container .swiper-slide").each(function(item) {
            $(this).click(function() {
                filmnavSwiper.swipeTo(item);
            })
        });

    }
});
