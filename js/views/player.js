
App.Views.PlayerView = Backbone.View.extend({
    el: "#movie-player-container",
    model: App.Player.MediaPlayer,
    
    initialize: function() { 
        _.bindAll(this, 'render', 'close', 'resize', 'renderControls');

        this.render();
        $(window).resize(this.resize);
        this.resize();
        this.listenTo(this.model, "player:ready", this.renderControls);
        this.listenTo(this.model, "change", this.render, this);

    },
    resize: function() {
            var window_height = $(window).height();
            var window_width = $(window).width();
            var nav_height =$('#video-container-heading').outerHeight();
            var footer_height = $('#video-container-footer').outerHeight();
            var player_height = Math.max((($("#movie-page-header").width()/16)*9), window_height - (footer_height+nav_height));


            $log("setting height "+ player_height);
            this.$el.height(player_height+footer_height);
            $("#player-container").height(player_height);
            $("#player-container video").height(player_height);
            $("#player-container object").height(player_height);

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
        this.resize();

        return this;
    },
});

