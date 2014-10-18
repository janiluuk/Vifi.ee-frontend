
App.Views.PlayerView = Backbone.View.extend({
    el: "#movie-player-container",
    model: App.Player.MediaPlayer,
    
    initialize: function() { 
        _.bindAll(this, 'render', 'close', 'resize', 'renderControls');

        this.render();
        $(window).resize(this.resize);
        this.resize();
        this.listenTo(this.model, "player:content:ready", this.renderControls);
    },
    resize: function() {
            var window_height = $(window).height();
            var window_width = $(window).width();
            var nav_height = $('#top-main-toolbar').outerHeight();
            var footer_height = $('#video-container-footer').outerHeight() + $('#video-container-heading').outerHeight();
            var player_height = window_height - (footer_height+nav_height);
            this.$el.height(player_height);
         
            this.$("#player-container").height(player_height );
            this.$("#player-container video").height(player_height);
    },


    close: function() {
            this.$el.empty();
            this.$el.hide();
            this.model.trigger("mediaplayer:stop");
            this.unbind();
    },

    render: function() {

        this.$el.empty();
        this.$el.append(ich.playerTemplate(this.model.toJSON()));
        this.$el.fadeIn();

        return this;
    },

    renderControls: function(content) {

        $("#video-container-footer").append(ich.playerControlsTemplate(content.toJSON()));
        $('.select-box').fancySelect();

        return this;
    },
});

