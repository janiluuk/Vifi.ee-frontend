
/**
 *
 *  Vifi Media Player for HTML5
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
    default_playlist: [{"mp4":"ollin_kurjuus.mp4"}],
    allowFastFoward: true,
    init: function(playlist) {

        if (playlist) this.setPlaylist(playlist);
        var _this = this;
        this._videoElement = $("#" + this.playerId);
        if (this._videoElement.length == 0) {
          this._videoElement = $("<div>").attr("id", this.playerId).appendTo("#movie-player-container");
        } 
         var path = "js/vendor/flowplayer.min.js?" + new Date().getTime();
        // $log("Adding flowplayer path: " + path);
        $("<script />", {
            src: path,
            type: 'text/javascript'
        }).appendTo("head");


        this._createPlayer();


    },

    getCurrentTime: function() {
        if (this.plugin) 
        return this.plugin.video.time * 1000;
    },

    _createPlayer: function() {
        if (this._active) return false;
        if (!this.playlist) return false;
        var playlist = this.getPlaylist();

        var _this = this;

        this._videoElement.flowplayer({
            rtmp: App.Settings.rtmp_url,
            adaptiveRatio: false,
            playlist: [ playlist ],
            }).one('ready', function(ev, api) {
                _this.plugin = api;
                _this.active();
            api.resume();
            api.bind("pause", function(e, api) {
                _this.trigger("mediaplayer:pause");         
                 
            });
            api.bind("resume", function(e, api) {
                _this.trigger("mediaplayer:resume");         
                 
            });
        });


    },
    getPlaylist: function() {
        var items = this.generatePlaylistItem(this.currentStream.mp4);
        return items;

    },
    generatePlaylistItem: function(file) {
        if (!file) return false;

        if (file[0] == '/') file = file.substring(1);
        var mp4_url = App.Settings.mp4_url +file;

        var mpegurl = App.Settings.hls_url+'/_definst_/'+file+'/playlist.m3u8'
        var playlist_item = [ 

                {    mpegurl: mpegurl },
                {    mp4: mp4_url },
                {    flash: 'mp4:'+ file.replace('.mp4','') },
        ];
        return playlist_item;

    },
    setPlaylist: function(playlist) {
        this.deactive();

        $log(" Setting new Playlist ");
        this.trigger("mediaplayer:onnewplaylist", playlist);
        this.stop(true);
        this.playlist = playlist;        
        this.nextVideo();

    },
    setCurrentIndex: function(index) {
        $log(" Setting current Index ");
        if (this.playlist) {
            this.currentIndex = index;
            this.playlist.setCurrentIndex(index);
        }
    },

    play: function() {
        $log("Playing Media");
            
        if (!this.currentStream) {
            $log(" Can't press play on a mediaplayer without a content")
            return;
        }

        if (!this.plugin) {
            alert("no player found");

            return false;
        }
        if (this.plugin && !this.plugin.paused && (typeof(this._videoElement.playbackRate) != 'undefined' && this._videoElement.playbackRate != 1)) {
            $log(" Restting Playback Rate");
            this._videoElement.playbackRate = 1;
        } else if (this._videoElement && this.currentStream == null) {

            this._trackEvents();
            $log(" Playing NExt File ")
            //this._playVideo();
        } else if (this._videoElement) {
            if (!this.plugin.playing) {

                $log(" Calling Video Element Play")
                this.plugin.play();
            } else {
                $log(" Calling Video Element Pause ")
                this.plugin.stop();
            }
        }
    },

    _playVideo: function() {
        $log(" SETTING CURRENT STREAM TO: " + this.currentStream.mp4);

        // this._videoElement.play();
        //this.wasMuted = this.plugin.muted;

    },

    nextVideo: function() {
        this.currentStream = this.playlist.nextFile();
        if (this.currentStream) {
            this.trigger('mediaplayer:onnextvideo', this.playlist.currentItemIndex());
            this._playVideo();
        } else {
            this.trigger("mediaplayer:onplaylistend");
        }
    },

    stop: function(forced) {
        if (this.plugin) {
            try {
                this.plugin.pause();
                this.deactive();

                if (!forced) this.trigger("mediaplayer:onstop");
                else this.plugin.unload();

            } catch (e) {} // If this doesn't succeed, it doesn't matter, just die gracefully

        }
    },

    pause: function() {
        // May get called without the correct initialization, so wrapping in block.
        // This should always fail gracefully.

        try {
            this.plugin.pause();
            this.trigger("mediaplayer:onpause");
        } catch (e) {
            $log(" FAILED TO PAUSE VIDEO: " + e);
        }
    },

    fastforward: function() {
        var currentTime = this.plugin.video.time;
        this.plugin.seek(currentTime + 10);
        this.trigger("mediaplayer:onfastforward");
    },
    rewind: function() {
        var currentTime = this.plugin.getTime();
        this.plugin.seek(currentTime - 10);
        this.trigger("mediaplayer:onrewind", 1);
    },

    mute: function(muted) {
        if (this.plugin) {
            // need to hold on to this so we know when we've switched state in our onvolumechange handler.
            this.wasMuted = this.plugin.getStatus().muted;
            if (!this.wasMuted) {
                this.plugin.mute();
                this.trigger("mediaplayer:onmute");

            } else {
                this.trigger("mediaplayer:onunmute");
                this.plugin.unmute();
            }
        }
    },

    setCoordinates: function(x, y, width, height) {
        $(this._videoElement).css({
            left: x,
            top: y,
            width: width,
            height: height
        })
    },

    playing: function() {
        var playing = (this.plugin.playing ? true : false);
        return playing;
    },

    duration: function() {
        if (_.isNaN(this.plugin.video.duration)) {
            return null;
        } else {
            return Math.floor(this.plugin.video.duration * 1000);
        }
    },

    setVideoElement: function(element) {
        this._videoElement = $(element);
    },

    _eventHandler: function(e) {
        if (e.type != 'timeupdate') $log(e.type);
        switch (e.type) {
            case 'timeupdate':
                this.trigger("mediaplayer:timeupdate", Math.round(e.currentTarget.currentTime * 1000));
                break;
            case 'loadstart':
                this.trigger("mediaplayer:bufferingstart");
                break;
            case 'loadeddata':
                this.trigger("mediaplayer:bufferingend");
                break;
            case 'ended':
                this.trigger("mediaplayer:mediaend", this.playlist.currentItemIndex());
                this.nextVideo();
                break;
            case 'play':
                this.trigger("mediaplayer:play", this.playlist.currentItemIndex());
                break;
            case 'pause':
                this.trigger("mediaplayer:pause");
                break;
            case 'error':
                $(this._videoElement).remove();
                this._createPlayer();
                this.trigger("mediaplayer:videoerror");
                break;
            case 'volumechange':
                $log(" VOLUME CHANGE EVENT ");
                if (player.wasMuted != this.muted) {
                    this.trigger("mediaplayer:muted");
                }
                this.trigger("mediaplayer:volumechange", e.currentTarget.volume);
                break;
        }
    },

 
}

_.extend(App.MediaPlayer, Backbone.Events);
_.extend(App.MediaPlayer, App.Player.Platforms.Core);