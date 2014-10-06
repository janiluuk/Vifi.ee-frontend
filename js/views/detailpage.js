
App.Views.MovieDetailView = Backbone.View.extend({
    el: $("#moviepage"),
    events: { 
        'click a#watchTrailer' : 'playTrailer',
        'click a#playMovie' : 'playMovie',
        'click #close-player' : 'closePlayer',
        'click #close-trailer' : 'closeTrailer',
        'click #film-tabbar-swiper-container .swiper-slide' : 'changeTab'
    },

    render: function() {

        var tmpl = $("#moviePageTemplate").html();
        var template = _.template(tmpl);
        this.$el.html(template(this.model.toJSON()));
            setTimeout(function() { 
                this.startCarousel(); 
            }.bind(this), 400);

    },
    playTrailer: function(e) {

        e.preventDefault();
        $("#gallery-swiper-container").fadeOut();

        this.trailerView = new App.Views.TrailerView({model: this.model});
        e.stopPropagation();

    },

    playMovie: function(e) {

        e.preventDefault();
        $("#gallery-swiper-container").fadeOut();
        if (!this.playerView) { 
            this.playerView = new App.Views.PlayerView({model: this.model});
        } else {
            this.playerView.model.set(this.model.toJSON()); 
        }

        this.playerView.render();

        e.stopPropagation();

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
        var el = $("#"+attr);

        $(el).siblings().removeClass("active").fadeOut();
        $(el).fadeIn().addClass("active");
    },
    
    startCarousel: function() {


      window.myMovieSwiper = $('#gallery-swiper-container').swiper({
        //Your options here:
        mode:'horizontal',
        pagination: '.pagination-1',
        paginationClickable: true,
        createPagination: true,
        //etc..
      });
      $('.arrow-left').on('click', function(e){
        e.preventDefault()
        myMovieSwiper.swipePrev()
      });
      $('.arrow-right').on('click', function(e){
        e.preventDefault()
        myMovieSwiper.swipeNext()
      });

      window.filmnavSwiper = new Swiper('#film-tabbar-swiper-container',{
        slidesPerView:'auto',
        mode:'horizontal',
        loop: false,
        centeredSlides: true,
        cssWidthAndHeight: true,

         onTouchEnd : function(e) {
                var idx = e.activeIndex;
                $("#film-tabbar-swiper-container .swiper-wrapper .swiper-slide:nth-child("+(idx+1)+")").click();
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
        var width =  $("#trailer-container-body").parent().width();
        var height = width / 16 * 9;

        $("#trailer-container-body iframe").height(height); 
   },


   close: function() {
        this.$el.fadeOut();
        this.$el.empty();

   },
   render: function() {
        this.height = this.$el.parent().height();
        this.width = this.$el.parent().width();
        this.$el.empty();
        this.$el.append(ich.trailerTemplate(this.model.toJSON()));
        this.equalizeHeight();
    },

});
