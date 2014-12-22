App.Views.PlayerView = Backbone.View.extend({
    el: "#movie-player-container",
    model: App.Player.MediaPlayer,
    
    initialize: function() { 
        _.bindAll(this, 'render', 'close', 'resize', 'renderControls');
        this.render().resize();
        $(window).resize(this.resize);
        this.listenTo(this.model, "player:ready", this.renderControls);
        this.listenTo(this.model, "change", this.render, this);
        this.listenTo(this.model, "player:resize", this.resize, this);
        this.listenTo(app.router, "page:change", this.close, this);

    },
    resize: function() {
        var nav_height = $('#video-container-heading').outerHeight();
        var footer_height = $('#video-container-footer').outerHeight();

        var orientation = App.Platforms.platform.getDeviceOrientation();
        if (orientation == "portrait") { 
            var player_width = this.$el.width();
        } else { 
            var player_width = $(window).width();
            this.$el.parent().width(player_width);
        }

        var player_height = player_width*this.model.ratio;
       // $log("setting height "+ player_height);
        this.$el.height(player_height+footer_height);
        $("#player-container").css({ height: player_height, width: player_width});
    },
    close: function() {
        this.$el.empty();
        this.stopListening();
        this.$el.hide();
        $(window).unbind("resize");
        this.model.trigger("mediaplayer:stop");
        this.unbind();
    },
    render: function() {
        this.$el.empty().append(ich.playerTemplate(this.model.toJSON()));
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

