App.Player = {};
App.Player.Platforms = {};

App.Player.MediaPlayer = Backbone.Model.extend({
    movie: false,
    session: false,
    content: false,
    player: false,
    subtitles: {},
    ready: false,
    endingTime: "",

    initialize: function(options) {
        this.content = new App.Models.FilmContent({ session: options.session});
        this.subtitles = new App.Player.Subtitles();
        this.playlist = new App.Player.Playlist;

        if (options && undefined != options.session) {
            this.set("session", options.session);

        }
        if (options && undefined != options.movie) {
            this.load(options.movie);

        }

        this.player = App.Player.Platforms.FlowPlayer;
        _.bindAll( this, 'load');

        this.content.on('subtitles:ready', this.onSubtitlesReady, this);
        this.content.on("content:ready", this.onContentReady, this);
        this.player.on("mediaplayer:pause", this.disableSubtitles, this);
        this.player.on("mediaplayer:resume", this.enableSubtitles, this);
        this.on("mediaplayer:stop", this.stop, this);
        this.on("mediaplayer:resume", this.play, this);

    },

    onSubtitlesReady: function(subtitles) {
        this.subtitles.load(subtitles);
    },
    disableSubtitles: function() { 
        if (this.subtitles) {
            this.subtitles.disable();
        }
    },
    enableSubtitles: function() { 
        if (this.subtitles) {
            this.subtitles.enable();
        }
    },
    load: function(movie) {
        var id = movie.get("id");
        this.content.set("id", id);

    },

    play: function() {
        this.player.play();
    },
    stop: function() {
        this.player.stop();
    },
    onContentReady: function(content) {

        this.content.set("endingtime", this.getEndingTime(this.content.get("running_time")));
        this.playlist.addFiles(this.content);
        this.player.init(this.playlist);
        this.trigger("player:content:ready", this.content);

    },

    /*
     * Calculate ending time for the film.
     * @params duration - total length of film in minutes
     * @params offset - current position of the film which will be reducted
     */
    getEndingTime: function(duration, offset) {
        if (!offset) offset = 0;
        if (!duration || duration == "") return false;
        duration = duration - offset;
        return App.Utils.minutesToTime(duration);
    },

    getCurrentTime: function() {
        return this.player.getCurrentTime();

    },
    updateCurrentTime: function() {

        var currentTime = App.Player.getCurrentTime();

    },

    verifyContent: function() {

        return true;

    },
    verifySession: function(movie) {

        // Check if user is paired at all
        if (!this.session.get("profile").hasMovie(movie)) {
            return false;
        }
        return true;
    },


});




_.extend(App.Player.MediaPlayer, Backbone.Events);

/**
 *
 *  Vifi Media Player for HTML5
 *
 *  author: Jani Luukkanen
 *  janiluuk@gmail.com
 *
 */

App.Player.Platforms.FlowPlayer = {
    currentStream: null,
    playerId: "player-container",
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

        $("#"+this.playerId).flowplayer({
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



/**
 *
 *  Vifi Media Player
 *
 *  author: Jani Luukkanen
 *  janiluuk@gmail.com
 *
 */

App.Player.Platforms.Core = {
    _testUrl: null, // "http://assets.adifferentengine.com/SizedDownloads/512KB.json",
    _testSize: 512000,
    _active: false,
    _eventsToTrack: ['loadstart', 'ended', 'timeupdate', 'play', 'pause', 'loadstart', 'timeupdate', 'error', 'loadeddata', 'volumechange', 'duration'],
    _active: false,
    _videoElement: null,

    name: "MediaPlayer",
    userBitrate: 10000,
    speedtest: function(callback) {
        // $log(" ___ PERFORMING SPEEDTEST ___ ");
        callback = callback || $noop;
        this.startTestTime = new Date().getTime();
        var _this = this;
        if (!App.Settings.speedTestUrl) return;
        $.get(App.Settings.speedTestUrl, function() {
            // $log(" ___ SPEEDTEST SUCCESS ___ ");''
            var bitrate = Math.round(_this._testSize / (new Date().getTime() - _this.startTestTime) * 1000 / 1024 * 8);
            // $log( "___ USER BITRATE DETECTED: " + bitrate + " ____");
            _this.userBitrate = bitrate;
        });
    },
    _trackEvents: function() {
        $log("___ TRACK EVENTS CALLED ___ ");
        if (this.eventsBound) return;
        var player = this;
        $log(" ___ BINDING EVENTS ___ ");
        $(this._videoElement).bind(this._eventsToTrack.join(" "), $.proxy(this._eventHandler, this));
        this.eventsBound = true;
    },
    _stopTrackingEvents: function() {
        $log(" UNBINDING MEDIA EVENTS TO FLASH VIDEO PLAYER ")
        this.eventsBound = false;
    },   
    active: function() {
        this._active = true;
//        App.KeyHandler.bind("all", this._keyhandler, this);
    },

    deactive: function() {
        this._active = false;
  //      App.KeyHandler.unbind("all", this._keyhandler);
    },

    _keyMap: {
        'onPlay': this.play,
        'onPause': this.pause,
        'onRew': this.rewind,
        'onFF': this.fastforward,
        'onStop': this.stop,
    },

    _keyhandler: function(event) {
        $log("MediaPlayer Event Handler Got: " + event);
        var event = event.replace("keyhandler:", "");
        switch (event) {
            case 'onPause':
                this.pause();
                break;
            case 'onPlay':
                this.play();
                break;
            case 'onStop':
                this.stop();
                break;
            case 'onRew':
                this.rewind();
                break;
            case 'onMute':
                this.mute();
                break;

            case 'onFF':
                this.fastforward();
                break;
        }
    }

}

_.extend(App.Player.Platforms.FlowPlayer, Backbone.Events);
_.extend(App.Player.Platforms.FlowPlayer, App.Player.Platforms.Core);




App.Player.Playlist = function() {
    this.files = [];
    this.currentIndex = 0;
    this.looping = true;

    /*
    A Playlist Format, an Array of Arrays of Hashes
    
    [
        {
            // First Video
            renditions: [
                {
                    url: "http://testvids.adifferentengine.com/MyTest-400.mp4",
                    bitrate: 400,
                },
                {
                    url: "http://testvids.adifferentengine.com/MyTest-1500.mp4",
                    bitrate: 1500
                },
                {
                    url: "http://testvids.adifferentengine.com/MyTest-3000.mp4",
                    bitrate: 3000
                }
            ]
        }
    ]
    
    */
    this.resetIndex = function() {
        this.currentIndex = 0;
    },
    this.currentItemIndex = function() {
        return this.currentIndex - 1;
    }

    this.nextFile = function() {
        var bitrate = App.Player.MediaPlayer.userBitrate || 10000; // Should be the largest bitrate
        if (this.currentIndex == this.files.length) {
            $log(" REACHED THE END OF PLAYLIST");
            this.resetIndex();
            if (!this.looping) return null;
        }
        var profiles = this.files[this.currentIndex].get("videos");
        var file = profiles[0];
        _.each(profiles, function(profile) {
            $log(" TESTING file.bitrate: " + file.bitrate + " file.bitrate: " + file.bitrate + " my bitrate: " + App.Player.MediaPlayer.userBitrate)
            if (profile.bitrate > file.bitrate && profile.bitrate < App.Player.MediaPlayer.userBitrate) {
                file = profile;
            }
        });
        return file;
    }


    this.addFiles = function(files) {
        this.files.push(files);
    }
    this.addPreroll = function(renditions, isAd) {
        var isAd = _.isNull(isAd) ? true : isAd; // We default to it being an ad.
        if (!_.isArray(videos)) videos = [videos];
        this.files.unshift({
            isAd: isAd,
            videos: videos
        });
    }

    this.addItem = function(videos, isAd) {
        var isAd = _.isNull(isAd) ? false : isAd;
        if (!_.isArray(videos)) videos = [videos];
        this.files.push({
            isAd: isAd,
            videos: videos
        });
    }

    this.setUserBitrate = function(bitrate) {
        this.userBitrate = bitrate;
    }
    this.setCurrentIndex = function(index) {
        $log("Playlist index set to: " + index)
        this.currentIndex = index;
    }
    this.addUrl = function(url) {
        this.files.push([{
            profile: null,
            mp4: url,
            bitrate: 0,
            code: 0,
        }]);
    }
    this.loop = function(toLoop) {
        this.looping = !!toLoop; // force a boolean
    };
    return this;
};


App.Player.Subtitles = Backbone.Model.extend({
    videoElement: 'player-container',
    subtitleElement: 'subtitles',
    subtitledata: null,
    currentSubtitle: null,
    defaultCode: 'ee',
    srtUrl: App.Settings.subtitles_url,
    subtitleFile: '',
    language: 'ee',
    ival: false,
    enabled: true,
    initialize: function() {
        _.bindAll(this, 'load', 'start', 'playSubtitles', 'strip', 'disable', 'toSeconds', 'loadLanguage');
        this.on("button:player-subtitles", this.handleSubtitleSelection, this);
    },
    toSeconds: function(t) {
        var s = 0.0;
        if (t) {
            var p = t.split(':');
            for (i = 0; i < p.length; i++) s = s * 60 + parseFloat(p[i].replace(',', '.'))
        }
        return parseInt(s * 1000);
    },
    strip: function(s) {
        return s.replace(/^\s+|\s+$/g, "");
    },
    handleSubtitleSelection: function(sel) {
        if (sel == "none") this.disable();
        if (this.subtitles) {
            this.loadLanguage(sel);
        }
    },
    disable: function() {

        $("#" + this.subtitleElement).html('');
        this.enabled = false;
        this.trigger("subtitles:disable");
        $log("Disabling subtitles");

    },
    enable: function() {

        $("#" + this.subtitleElement).html('');
        this.enabled = true;
        this.trigger("subtitles:enable");
        $log("Enabling subtitles");
        this.start();

    },
    playSubtitles: function(subtitleElement) {
        var videoId = this.videoElement;
        var el = $(subtitleElement);
        var srt = el.text();
        $(subtitleElement).text('');
        srt = srt.replace(/\r\n|\r|\n/g, '\n')
        this.subtitledata = {};
        srt = this.strip(srt);
        var srt_ = srt.split('\n\n');
        for (s in srt_) {
            st = srt_[s].split('\n');
            if (st.length >= 2) {
                n = st[0];
                i = this.strip(st[1].split(' --> ')[0]);
                o = this.strip(st[1].split(' --> ')[1]);
                t = st[2];
                if (st.length > 2) {
                    for (j = 3; j < st.length; j++) t += '\n' + st[j];
                }
                is = this.toSeconds(i);
                os = this.toSeconds(o);
                this.subtitledata[is] = {
                    i: i,
                    is: is,
                    os: os,
                    o: o,
                    t: t
                };
            }
        }
        $("#" + this.subtitleElement).html('');
        this.currentSubtitle = -1;
        var _this = this;
        var ival = setInterval(function() {
            if (!this.enabled) clearInterval(this.ival);
            var currentTime = app.player.getCurrentTime();
            var subtitle = -1;
            for (s in this.subtitledata) {
                if (s > currentTime) break;
                subtitle = s;
            }
            if (subtitle > 0) {
                if (subtitle != this.currentSubtitle) {
                    if (currentTime > 0) $("#" + this.subtitleElement).html(this.subtitledata[subtitle].t);
                    this.currentSubtitle = subtitle;
                    //$log("Setting subtitle at " + currentTime + " - " + app.player.subtitles.subtitledata[subtitle].t);
                    //$log(app.player.subtitles.subtitledata[subtitle]);
                } else if (this.subtitledata[subtitle].os < currentTime) {
                    $("#" + this.subtitleElement).text('');
                }
            }
        }.bind(this), 100);
        this.ival = ival;
    },
    start: function() {
        $("<div>").attr("id", this.subtitleElement).appendTo("#"+this.videoElement);
        
        this.enabled = true;
        var subtitleElement = document.getElementById(this.subtitleElement);
        var videoId = this.videoElement;
        if (!videoId || !subtitleElement) {
            $log("Aborting subtitle loading");
            return;

        }
        var srtUrl = this.subtitleFile;
        var that = this;
        if (srtUrl) {
            $(subtitleElement).load(srtUrl, function(responseText, textStatus, req) {
                that.playSubtitles(subtitleElement);
            });
        } else {
            this.playSubtitles(subtitleElement);
        }
    },
    load: function(subtitles, nodefault) {
        if (!subtitles) return false;
        this.subtitles = {}
        var that = this;
        var i = 0;
        $(subtitles).each(function() {
            var code = this.code;
            that.subtitles[code] = this;
            i++;
        });

        $log("Downloaded " + i + " subtitles");
        if (!nodefault) this.loadLanguage(this.defaultCode);
    },
    loadLanguage: function(code) {
        if (this.subtitles && this.subtitles[code]) {
            this.subtitleFile = this.srtUrl + this.subtitles[code].file;
            $log("Loaded " + code + " language from " + this.subtitleFile);
            if (this.ival) clearInterval(this.ival);
            this.start();
            this.language = code;
            this.trigger("subtitles:load", code);

            return true;
        }
        return false;
    }
});
_.extend(App.Player.Subtitles, Backbone.Events);