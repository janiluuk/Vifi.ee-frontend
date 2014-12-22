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
    
App.Views.TrailerView = Backbone.View.extend({
    model: App.Models.Film,
    hideVideoNavigationTimeout: false,
    player: false,
    el: '#movie-trailer-container',
    optionsEl: '#trailer-options',
    infoEl: '#player-info',
    tagName: 'div',
    events: {
        'click #closeTrailer': 'close',
        'click #watchFilm': 'playFilm'
    },
    _keyMap: {
        'onPlay': "resume",
        'onPause': "pause",
        'onStop': "stop",
        'onReturn' : "close",
        'onMute' : "mute",
        'onFF' : "forward",
        'onRew' : "rewind"

    },
    initialize: function() {
        _.bindAll(this, "render", "_bindKeys", "_unbindKeys", "touchVideoNavigationTimeout", "close", "onPlayerReady",  "showNavigation", "pause","resume","mute", "stop", "onPlayerStateChange");
        this.listenTo(app.router, "page:change", this.onClose, this);
        this.render();

    },
    equalizeHeight: function() {
        var width = $("#trailer-container-body").parent().width();
        var height = width / 16 * 9;
        $("#trailer-container-body iframe").height(height);
    },

    _bindKeys: function() {
      //  Vifi.KeyHandler.bind("all", this.touchVideoNavigationTimeout,this);
        _.each(this._keyMap, function(key,item) {
          //  Vifi.KeyHandler.unbind("keyhandler:"+item);
          //  Vifi.KeyHandler.bind("keyhandler:"+item, eval("this."+key), this);
        }.bind(this));
    },
    _unbindKeys: function() { 
        _.each(this._keyMap, function(key,item) { 
          //  Vifi.KeyHandler.unbind("keyhandler:"+item, eval("this."+key));
        }.bind(this));
    },
    playFilm: function(event) {
        this.close();
        this.trigger("play:movie", event, this);
    },
    fadeOut: function() {
        this.$el.fadeOut();
        return this;
    },
    fadeIn: function() {
        this.$el.fadeIn();
        return this;
    },
    playTrailer: function() {
        this.setElement("#movie-trailer-container");
        
        if (this.model.get("youtube_id")) {
            this.render();
            this._bindKeys();
            this.initPlayer();
           // this.showNavigation();
        }
    },

    initPlayer: function() {
        var _this = this;
        if (typeof(YT) == "undefined") {
            setTimeout(function() {
                this.initPlayer();
            }.bind(this), 600);
            return false;
        }
        var youtubeid = this.model.get("youtube_id");
        if (youtubeid) {

            this.done = false;
            
            this.player = new YT.Player('ytplayer', {
                playerVars: {
                    'autoplay': 1,
                    'controls': 0
                },
                height: $(window).height(),
                width: $(window).width(),
                videoId: youtubeid,
                events: {
                    'onReady': _this.onPlayerReady,
                    'onStateChange': _this.onPlayerStateChange
                }
            });
        }
    },
    onPlayerReady: function(event) {
        event.target.playVideo();
    },

    onPlayerStateChange: function(event) {
        if (event.data == YT.PlayerState.ENDED) {
            this.onClose();
        }
    },
    stop: function() {
        if (this.player) { 
          this.player.stopVideo();
          this.done = true;
          this.close();
        }
    },
    pause: function() {
        this.player.pauseVideo();
    },
    forward: function(amt) {
        amt = amt || 10;
        var time = this.player.getCurrentTime()+amt;
        this.player.seekTo(time);
    },
    rewind: function(amt) {
        amt = amt || 10;
        var time = Math.max(this.player.getCurrentTime()-amt,0);
        this.player.seekTo(time);

    },
    onClose: function() { 
        this.trigger("trailer:close");
    },

    mute: function(e) {
        if (e) e.preventDefault();

        if (!this.player) return false;
        var currentMute = this.player.isMuted();
        $log("Current mute: "+currentMute);

        if (currentMute !== true) { 
            $log("Muting audio");
            this.player.mute(); 

        } else {
            $log("UnMuting audio");

            this.player.unMute();
        }
    },
    resume: function() {
        this.player.playVideo();
    },
    close: function() {

        this.player.destroy();
        this.$el.fadeOut().empty();    
        this.clearAllTimeouts();
        this._unbindKeys();

    },
    showNavigation: function() {
        this.clearAllTimeouts();
        $(this.optionsEl).fadeIn();
        $(this.infoEl).fadeIn();
        this.touchVideoNavigationTimeout();
    },
    clearAllTimeouts: function() {
        clearTimeout(this.hideVideoNavigationTimeout);
    },
    touchVideoNavigationTimeout: function() {
        if (!$(this.optionsEl).is(":visible")) {
            $(this.optionsEl).fadeIn();
            $(this.infoEl).fadeIn();
        }

        clearTimeout(this.hideVideoNavigationTimeout);
        this.hideVideoNavigationTimeout = setTimeout(function() {
            $(this.optionsEl).fadeOut();
        }.bind(this), 2000);
        return false;
    },
    render: function() {
        this.$el.empty().append(ich.trailerTemplate(this.model.toJSON()));
        this.$el.fadeIn();
        this.equalizeHeight();
        return this;
    },
});


