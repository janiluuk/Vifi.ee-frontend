/**

 *
 *  Vifi Media Player for Flash
 *
 *  author: Jani Luukkanen
 *  janiluuk@gmail.com
 *
 */

App.MediaPlayer = {
    _active: false,
    content: null,
    currentStream: null,
    plugin: false,
    getCurrentTime: function() {
        if (typeof($f) == "undefined") return 0;
        return $f().getTime() * 1000;
    },
    _videoElement: null,
    allowFastFoward: true,
    init: function(playlist) {

        if (playlist) { 
            this.setPlaylist(playlist);
            this.currentStream = playlist.nextFile();
        }
        if (typeof($f) == "undefined") { 
        var path = "js/vendor/flowplayer.flash.js?" + new Date().getTime();
        // $log("Adding flowplayer path: " + path);
        $("<script />", {
            src: path,
            type: 'text/javascript'
        }).appendTo("head");
        }



        this._videoElement = $("#" + this.playerId);
        if (!this._videoElement) {
            $("<div>").attr("id", this.playerId).appendTo("body");
        } else {
            //  this._trackEvents();
        }
        this.speedtest();
       
        
        this._createPlayer();

    },
    setContent: function(content) {
        this.content = content;
        if (content) {
            this.currentStream = content[0];

            if (this.plugin) this.plugin.setClip(this.currentStream.mp4)
        }
    },
    formatUrl: function(url) {
        if (!url) return false;
        return url.substring(url.length - 3, url.length) == 'mp4' ? url.substring(url.length - 3, url.length) + ':' + url : url;
    },
    _createPlayer: function() {

        if (!this.playlist) return false;
        if (!this.currentStream) this.currentStream = this.playlist.nextFile();

        var url = this.formatUrl(this.currentStream.mp4);

        if (this.plugin) unset(this.plugin);

        this.plugin = flowplayer(this.playerId, {
            src: 'http://app.vifi.ee/app/swf/flowplayer.commercial.swf',
            wmode: 'opaque'
        }, {
            key: '#$05466e2f492e2ca07a3',
            log: {
                level: 'none'
            },
            // change the default controlbar to modern
            onStart: function(clip) {
                var f = this;

            },
            onResume: function() {
                if (!this.isFullscreen()) {}
            },

            // canvas background
            canvas: {
                backgroundGradient: 'none'
            },
            clip: {
                baseUrl: 'rtmpe://media.vifi.ee/vod/',
                autoBuffering: true,
                autoplay: false,
                scaling: 'fit',
                provider: 'rtmp',
                connectionProvider: 'secure',
                url: url,
                accelerated: true,
                fadeInSpeed: 7000,
                // on last second, fade out screen
                onLastSecond: function() {
                    this.getScreen().animate({
                        opacity: 0
                    }, 3000);
                },
                // if screen is hidden, show it upon startup
                onStart: function() {
                    this.getScreen().css({
                        opacity: 1
                    });

                },
                onKeypress: function(key) {

                    alert(key);


                }
            },
            plugins: {
                rtmp: {
                    url: 'http://app.vifi.ee/app/swf/flowplayer.rtmp-3.2.3.swf',
                },
                // the captions plugin
                captions: {
                    url: 'http://app.vifi.ee/app/swf/flowplayer.captions-3.2.3.swf',
                    captionTarget: 'content',
                    button: null
                },
                secure: {
                    url: 'http://app.vifi.ee/app/swf/flowplayer.securestreaming.swf',
                },
                controls: {
                    url: 'http://app.vifi.ee/app/swf/flowplayer.controls.swf'
                },
                content: {
                    url: 'http://app.vifi.ee/app/swf/flowplayer.content-3.2.0.swf',
                    bottom: 15,
                    height: 70,
                    backgroundColor: 'transparent',
                    backgroundGradient: 'none',
                    border: 0,
                    textDecoration: 'outline',
                    style: {
                        body: {
                            fontSize: '18%',
                            fontFamily: 'Arial',
                            textAlign: 'center',
                            color: '#ffffff'
                        }
                    }
                }
            }
        }); // .controls("player-controls");

        this.play();
    },
  
    setPlaylist: function(playlist) {
        $log(" Setting new Playlist ");
        this.trigger("mediaplayer:onnewplaylist", playlist);
        this.stop(true);
        this.playlist = playlist;
        this.currentIndex = 0;
        this.currentStream = null;
        $(this._videoElement).show();
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

 
        if (typeof($f) !== "undefined" && !$f().paused && (typeof(this._videoElement.playbackRate) != 'undefined' && this._videoElement.playbackRate != 1)) {
            $log(" Restting Playback Rate")
            this._videoElement.playbackRate = 1;
        } else if (this._videoElement && this.currentStream == null) {
            this._trackEvents();
            $log(" Playing Next File ")
            //this.currentStream = this.playlist.nextFile();
            //this._playVideo();
        } else if (this._videoElement) {
            if ($f().isPlaying() === true) {
                $log(" Calling Video Element Pause")
                this.plugin.pause();
            } else {
                $log(" Calling Video Element Play ")
                this.plugin.play();
            }
        }
    },

    _playVideo: function() {
        $log(" SETTING CURRENT STREAM TO: " + this.currentStream.mp4);
        this.plugin.setClip({
            url: "mp4:" + this.currentStream.mp4
        });
        // this._videoElement.play();
        this.wasMuted = $f().getStatus().muted;

    },

    nextVideo: function() {
        this.currentStream = this.playlist.nextFile()
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
                else $f().unload();

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

        var currentTime = this.plugin.getTime();
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
        var test = (this.plugin.isPlaying()) ? true : false;
        return test
    },

    duration: function() {
        if (_.isNaN(this.plugin.getClip().duration)) {
            return null;
        } else {
            return Math.floor(this.plugin.getClip().duration * 1000);
        }
    },

    setVideoElement: function(element) {
        this._videoElement = $(element);
    },
    _eventsToTrack: ['loadstart', 'ended', 'timeupdate', 'play', 'pause', 'loadstart', 'timeupdate', 'error', 'loadeddata', 'volumechange', 'duration'],
    wasMuted: false,

    _trackEvents: function() {
        $log("___ TRACK EVENTS CALLED ___ ");
        if (this.eventsBound) return;
        var player = this;
        $log(" ___ BINDING EVENTS ___ ");
        $(this._videoElement).bind(this._eventsToTrack.join(" "), $.proxy(this._eventHandler, this));
        this.eventsBound = true;
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

    _stopTrackingEvents: function() {
        $log(" UNBINDING MEDIA EVENTS TO FLASH VIDEO PLAYER ")
        this.eventsBound = false;
    },
}
_.extend(App.MediaPlayer, Backbone.Events);
_.extend(App.MediaPlayer, App.Player.Platforms.Core);
App.MediaPlayer.bind("mediaplayer:stop", function() {
    App.MediaPlayer.stop(true);
});

