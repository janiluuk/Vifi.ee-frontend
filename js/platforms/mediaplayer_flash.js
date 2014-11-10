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
    loadFile: function(file) {

        if (this.plugin)
            this.plugin.setClip({
                url: "mp4:" + file
            });

    },
    formatUrl: function(url) {
        if (!url) return false;
        return url.substring(url.length - 3, url.length) == 'mp4' ? url.substring(url.length - 3, url.length) + ':' + url : url;
    },
    _createPlayer: function() {

        if (!this.playlist) return false;
        if (!this.currentStream) this.currentStream = this.playlist.nextFile();

        var url = this.formatUrl(this.currentStream.mp4);

        if (this.plugin) this.plugin = false;

        var _this = this;

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
            },
            onKeypress: function(key) {
                alert(key);
            },
            onMouseOver: function() {
                _this.trigger("mediaplayer:mouseover");
            },
            onMouseOut: function() {
                _this.trigger("mediaplayer:mouseout");


            },
            onFullscreen: function() {
                _this.trigger("mediaplayer:fullscreen");

            },
            onFullscreenExit: function() {
                _this.trigger("mediaplayer:fullscreen-exit");


            },
            onError: function() {
                _this.trigger("mediaplayer:error");


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
                onSeek: function() {

                    _this.trigger("mediaplayer:seek");
                },

                onFinish: function() {

                    _this.trigger("mediaplayer:finish");
                },
                // if screen is hidden, show it upon startup
                onStart: function() {
                    this.getScreen().css({
                        opacity: 1
                    });

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


    _playVideo: function() {
        $log(" SETTING CURRENT STREAM TO: " + this.currentStream.mp4);

        this.plugin.play();
        this.wasMuted = $f().getStatus().muted;

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
    resume: function(forced) {
        if (this.plugin) {
            try {
                this.plugin.play();
                this.trigger("mediaplayer:onplay");
                
            } catch (e) { $log(e); } // If this doesn't succeed, it doesn't matter, just die gracefully

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
    getCurrentTime: function() {
        if (typeof($f) == "undefined") return 0;
        return $f().getTime() * 1000;
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



    playing: function() {
        return (this.plugin.isPlaying() === true) ? true : false;
    },

    duration: function() {
        if (_.isNaN(this.plugin.getClip().duration)) {
            return null;
        } else {
            return Math.floor(this.plugin.getClip().duration * 1000);
        }
    },




    
}
_.extend(App.MediaPlayer, Backbone.Events);
_.extend(App.MediaPlayer, App.Player.Platforms.Core);
