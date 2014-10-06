App.Views.PlayerView = Backbone.View.extend({
    el: "#movie-player-container",
    model: App.Models.Film,
    
    initialize: function() { 
        _.bindAll(this, "render");
    },

   equalizeHeight: function() {
        var width = this.width;
        var height = width / 16 * 9;
        // - $("#video-container-footer").height() - $("#video-container-heading").height();

        this.$el.height(height); 
   },

    close: function() {
            this.$el.fadeOut();
            this.$el.empty();

    },
    renderPlayer: function() { 
    },
    render: function() {

        this.height = this.$el.parent().height();
        this.width = this.$el.parent().width();
        this.$el.empty();
        this.$el.append(ich.playerTemplate(this.model.toJSON()));


        $("#player-container").flowplayer({
            rtmp: 'rtmp://media.vifi.ee/tv',
            playlist: [
            [ 
                {     mp4: 'http://gonzales.vifi.ee/zsf/test2.mp4'  },
                { mpegurl: 'http://media.vifi.ee:1935/tv/_definst_/test2.mp4/playlist.m3u8' },
                {    flash: 'mp4:test2.mp4' },

            ]
            ]

            
            }).one('ready', function(ev, api) {
              api.resume();
            });


        $('.select-box').fancySelect();
        this.$el.fadeIn();


    },
});

