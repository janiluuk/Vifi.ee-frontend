App.Views.MovieDetailView = Backbone.View.extend({
    model: App.Models.Film,

    el: $("#moviepage"),
    events: {
        'click a#watchTrailer': 'playTrailer',
        'click a#playMovie': 'playMovie',
        'click #close-player': 'closePlayer',
        'click #close-trailer': 'closeTrailer',
        'click #film-tabbar-swiper-container .swiper-slide': 'changeTab'
    },
    initialize: function(options) {

        this.listenTo(this.model, 'change', this.render);
        _.bindAll(this, 'playMovie');
        this.enableComments();

    },

    enableComments: function() {

        window.disqus_shortname = 'vifi'; // Required - Replace example with your forum shortname
        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script');
            dsq.type = 'text/javascript';
            dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();

    },
    resetComments: function() {
        window.disqus_identifier = this.model.get("id");
        window.disqus_title = this.model.get("title");
        window.disqus_url = window.location.href;
        if (typeof(DISQUS) != "undefined")
            DISQUS.reset({
                reload: true,
                config: function() {
                    this.page.identifier = disqus_identifier;
                    this.page.url = window.location.href;

                }
            });
    },
    render: function() {

        var template = _.template(app.template.get("film"));

        this.$el.html(template(this.model.toJSON()));
        setTimeout(function() {
            this.startCarousel();
            this.resetComments();

        }.bind(this), 100);
    },
    playTrailer: function(e) {

        e.preventDefault();
        $("#gallery-swiper-container").fadeOut();

        this.trailerView = new App.Views.TrailerView({
            model: this.model
        });
        e.stopPropagation();

    },

    playMovie: function(e) {
        if (e) e.preventDefault();

        if (!app.session.get("profile").hasMovie(this.model)) {
            this.purchaseView = new App.Views.PurchaseView({
                model: this.model,
                session: app.session
            })
            return false;
        }
        $("#gallery-swiper-container").hide();

        if (app.player) app.player.destroy();

        app.player = new App.Player.MediaPlayer({
            session: app.session,
            movie: this.model
        });

        if (!this.playerView) {
            this.playerView = new App.Views.PlayerView({
                model: app.player
            });
        } else {
            this.playerView.model = app.player.model;
        }


        this.playerView.render();

        if (e) e.stopPropagation();
        return false;

    },
    closeTrailer: function(e) {
        e.preventDefault();
        this.trailerView.close();
        $("#gallery-swiper-container").fadeIn();

        e.stopPropagation();

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
            cssWidthAndHeight: true,

            onTouchEnd: function(e) {
                var idx = e.activeIndex;
                $("#film-tabbar-swiper-container .swiper-wrapper .swiper-slide:nth-child(" + (idx + 1) + ")").click();
                //Do something when you touch the slide
            }
            //etc..
        });

        $("#film-tabbar-swiper-container .swiper-slide").each(function(item) {
            $(this).click(function() {
                filmnavSwiper.swipeTo(item)
            })
        });


    }
});

App.Views.TrailerView = Backbone.View.extend({
    el: "#movie-trailer-container",
    model: App.Models.Film,

    initialize: function() {
        _.bindAll(this, "render");
        this.render();
    },

    equalizeHeight: function() {
        var width = $("#trailer-container-body").parent().width();
        var height = width / 16 * 9;

        $("#trailer-container-body iframe").height(height);
    },


    close: function() {
        this.$el.fadeOut();
        this.$el.empty();

    },
    render: function() {
        this.$el.fadeIn();
        this.height = this.$el.parent().height();
        this.width = this.$el.parent().width();
        this.$el.empty();

        this.$el.append(ich.trailerTemplate(this.model.toJSON()));
        this.equalizeHeight();
    },

});