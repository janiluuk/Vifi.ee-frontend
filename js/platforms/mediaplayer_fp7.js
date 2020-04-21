/**
 *
 *  Vifi Media Player for Flowplayer 7
 *
 *  author: Jani Luukkanen
 *  janiluuk@gmail.com
 *
 */
App.MediaPlayer = {
    currentStream: null,
    plugin: false,
    wasMuted: false,
    bitrate: false,
    allowFastFoward: true,
    player: false,
    _eventsToTrack: ['error', 'finish', 'fullscreen', 'fullscreen-exit', 'progress', 'seek', 'pause', 'unload', 'resume', 'ready', 'volume'],
    init: function(playlist) {
        $log("Calling init on HLS player");
        if (playlist) this.setPlaylist(playlist);
        this._videoElement = $("#" + this.playerId);
        if (this._videoElement.length == 0) {
            this._videoElement = $("<div>").attr("id", this.playerId).appendTo("#movie-player-container");
        }
        this._createPlayer();
        return true;
    },
    getCurrentTime: function() {
        if (this.plugin) return this.plugin.currentTime * 1000;
    },
    _createPlayer: function() {
        if (!this.playlist) return false;
        try {

            var playlistFiles = this.playlist.getPlaylistFiles();
            var _this = this;
            $log("Initializing flowplayer to "+ this.playerId + " element with playlist " + JSON.stringify(playlistFiles));
            this.plugin = flowplayer('#' + this.playerId, {
                token: App.Settings.Player.flowplayer_fp7_token,
                auto_orient: true,
                autoplay: true,
                muted: false,
                embed: false,
                hls :  { native: true },
                src: playlistFiles[0].src,
                plugins: [
                    'subtitles',
                    'qsel',
                    'keyboard',
                    'chromecast',
                    'hls',
                    'airplay'
                ]                
            });
            this.plugin.on('loadeddata', function(e) {

                var video = e.target;
                _this.active();
                _this.plugin.togglePlay(true);
                if (App.Settings.debug === true) _this._trackEvents();

                _this.trigger("mediaplayer:ratio:change", { width: video.videoWidth, height: video.videoHeight});
                _this.plugin.on("pause", function(e) {
                    _this.trigger("mediaplayer:pause");
                });
                _this.plugin.on("playing", function(e) {
                    _this.trigger("mediaplayer:resume");
                });
                _this.plugin.on("ended", function(e) {
                    _this.trigger("mediaplayer:onstop");
                });
                _this.plugin.on("seeked", function(e) {
        
                    $log("Seeking to " + App.Utils.convertMstoHumanReadable(e.target.currentTime * 1000).toString());
                    $log("seeking:" + _this.plugin.seeking + " " + App.Utils.convertMstoHumanReadable(e.target.currentTime * 1000).toString() + " / " + App.Utils.convertMstoHumanReadable(e.target.duration * 1000).toString());
                    _this.trigger("mediaplayer:onseek", e.target.currentTime);
                });
                _this.plugin.on("seeking", function(e) {
                    $log("seeking from:" + App.Utils.convertMstoHumanReadable(e.target.currentTime * 1000).toString());
                    _this.trigger("mediaplayer:onbeforeseek");
                });
                $(".flowplayer a.fp-brand").remove();
                $(".flowplayer a[href*='flowplayer.org']").remove();
            });
        } catch (err) {
            alert(err.message);
        }
        return true;
    },
    _playVideo: function() {
        this.currentStream = this.playlist.nextFile();
        $log(" SETTING CURRENT STREAM TO: " + this.currentStream.mp4);
        this.play();
    },
    _initSubtitles: function(content) { 
        $log("Initializing subtitles");

        if (this.subtitles) {
            this.subtitles.unload();
            this.subtitles.unbind();
            this.subtitles.destroy();
        }   
        this.subtitles = new App.Player.Subtitles();

        if (this.subtitlesView) { 
            this.subtitlesView.close();
            this.subtitlesView.unbind();
        }
        this.subtitlesView = new App.Views.Subtitles({
            model: this.subtitles
        });
        this.subtitles.load(content);
    },
    loadSubtitles: function(subtitles) {
        var code = subtitles.code;
        this.subtitles.handleSubtitleSelection(code);
    },
    disableSubtitles: function() {
        if (this.subtitles) { 
            this.subtitles.disable();
            this.trigger("mediaplayer:subtitles:disabled");
        }
    },
    enableSubtitles: function() {
        if (this.subtitles) {
            this.subtitles.enable();
            this.trigger("mediaplayer:subtitles:enabled");
        }
    },
    stop: function(forced) {
        if (this.plugin) {
            try {
                this.plugin.pause();
                this.deactive();
                this._stopTrackingEvents();
                if (!forced) this.trigger("mediaplayer:onstop");
            } catch (e) {} // If this doesn't succeed, it doesn't matter, just die gracefully
        }
    },
    fastforward: function() {
        var currentTime = this.plugin.video.time;
        this.plugin.seek(currentTime + 10);
        this.trigger("mediaplayer:onfastforward");
    },
    rewind: function() {
        var currentTime = this.plugin.video.time;
        this.plugin.seek(currentTime - 10);
        this.trigger("mediaplayer:onrewind", 1);
    },
    mute: function(muted) {
        if (this.plugin) {
            // need to hold on to this so we know when we've switched state in our onvolumechange handler.
            this.wasMuted = this.plugin.muted;
            if (!this.wasMuted) {
                this.plugin.mute();
                this.trigger("mediaplayer:onmute");
            } else {
                this.trigger("mediaplayer:onunmute");
                this.plugin.unmute();
            }
        }
    },
    isReady: function() {
        return false !== this.plugin && this.plugin.hasState('is-loaded');
    },
    playing: function() {
        var playing = (this.plugin && this.plugin.hasState('is-playing') ? true : false);
        return playing;
    },
    duration: function() {
        if (_.isNaN(this.plugin.duration)) {
            return null;
        } else {
            return Math.floor(this.plugin.duration * 1000);
        }
    },
}
_.extend(App.MediaPlayer, Backbone.Events);
_.extend(App.MediaPlayer, App.Player.Platforms.Core);