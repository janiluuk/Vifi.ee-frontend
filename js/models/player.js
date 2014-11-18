App.Player = {};
App.Player.Platforms = {};

App.Player.MediaPlayer = Backbone.Model.extend({
    session: false,
    content: false,
    player: false,
    subtitles: {},
    playlist: {},
    ready: false,
    ratio: 9/16,
    initialize: function(options) {
        if (this.ready) return false;
        this.content = new App.Models.FilmContent({ session: options.session});
        this.subtitles = new App.Player.Subtitles();
        this.playlist = new App.Player.Playlist;

        if (options && undefined != options.session) {
            this.set("session", options.session);

        }
        if (options && undefined != options.movie) {
            this.set("movie", options.movie);
            this.load(options.movie);

        }
        this.player = App.MediaPlayer;
        _.bindAll( this, 'load', 'onSubtitlesLoad');

        this.content.on('subtitles:ready', this.onSubtitlesReady, this);
        this.content.on("content:ready", this.onContentReady, this);
        this.subtitles.on("subtitles:loadfile", this.onSubtitlesLoad, this);
        this.player.on("mediaplayer:pause", this.disableSubtitles, this);
        this.player.on("mediaplayer:resume", this.enableSubtitles, this);
        this.on("mediaplayer:stop", this.stop, this);
        this.on("mediaplayer:resume", this.play, this);
        this.player.on("mediaplayer:wchange", this.onChangeRatio, this);
        this.on("change:movie", this.load, this);
        this.ready = true;

    },
    onChangeRatio: function(video) {
        if (undefined !== video) { 
            var ratio = video.height/video.width;
            this.ratio = ratio;
            $log("setting ratio to"+ratio);
            this.trigger("player:resize", ratio);
        } 
    },
    onSubtitlesReady: function(subtitles) {
        this.subtitles.load(subtitles);
    },
    onSubtitlesLoad: function(filename) {
        this.once("player:ready", function() { 
            this.player.loadSubtitles(filename);
        }.bind(this), this);
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
        if (!movie) return false;
        var id = movie.get("id");
        this.content.load(id);
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
        if (this.player.init(this.playlist)) { 
            this.trigger("player:ready", this.content);
        }
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
 *  Vifi Media Player
 *
 *  author: Jani Luukkanen
 *  janiluuk@gmail.com
 *
 */

App.Player.Platforms.Core = {
    _active: false,
    _eventsToTrack: ['loadstart', 'ended', 'timeupdate', 'play', 'pause', 'loadstart', 'timeupdate', 'error', 'loadeddata', 'volumechange', 'duration'],
    _videoElement: null,
    wasMuted: false,
    playerId: "player-container",
    name: "MediaPlayer",
    userBitrate: 1000,
    _testSize: 200000,
    speedtest: function(callback) {

        callback = callback || $noop;
        
        if (!App.Settings.speedtest_url) return;
        $log(" ___ PERFORMING SPEEDTEST ___ ");

        var _this = this;
        var imageAddr = App.Settings.speedtest_url +"?n=" + Math.random();
        var startTime, endTime;
        startTime = (new Date()).getTime();

        function getResults() {
            $log(" ___ SPEEDTEST SUCCESS ___ ");

            var duration = Math.round((endTime - startTime) / 1000);
            var bitsLoaded = _this._testSize * 8;
            var speedBps = Math.round(bitsLoaded / duration);
            var bitrate = (speedBps / 1024).toFixed(2);
            if (parseInt(bitrate) > 100)
                _this.userBitrate = bitrate;

            $log( "___ USER BITRATE DETECTED: " + bitrate + " ____");


        }
        var download = new Image();
        download.onload = function () {
            endTime = (new Date()).getTime();
            getResults();
        }
        download.src = imageAddr;

        
    },

    setVideoElement: function(element) {
        this._videoElement = $(element);
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

    setPlaylist: function(playlist) {
        $log(" Setting new Playlist ");
        this.trigger("mediaplayer:onnewplaylist", playlist);
        this.stop(true);
        this.playlist = playlist;
        this.currentIndex = playlist.currentIndex;
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
    nextVideo: function() {
        this.currentStream = this.playlist.nextFile();
        if (this.currentStream) {
            this.trigger('mediaplayer:onnextvideo', this.playlist.currentItemIndex());
            this._playVideo();
        } else {
            this.trigger("mediaplayer:onplaylistend");
        }
    },
    play: function() {
            
        if (!this.currentStream) {
            $log(" Can't press play on a mediaplayer without a content")
            return;
        }
        if (!this.plugin) {
            alert("no player found");

            return false;
        }
        this._trackEvents();

        if (this.plugin && !this.plugin.paused && (typeof(this._videoElement.playbackRate) != 'undefined' && this._videoElement.playbackRate != 1)) {
            $log(" Restting Playback Rate");
            this._videoElement.playbackRate = 1;
        } else if (this._videoElement && this.currentStream == null) {

            $log(" Playing Next File ")
            this._playVideo();
        } else if (this._videoElement) {
            if (!this.plugin.playing) {

                $log(" Calling Video Element Play")
                this.resume();
            } else {
                $log(" Calling Video Element Pause ")
                this.pause();
            }
        }
    },
    

    resume: function() {
        try {
            this.plugin.play();
            this.trigger("mediaplayer:onplay");
        } catch (e) {
            $log(" FAILED TO PLAY VIDEO: " + e);
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
    },
    _trackEvents: function() {
        $log("___ TRACK EVENTS CALLED ___ ");
        if (this.eventsBound) return;
        $log(" ___ BINDING EVENTS ___ ");
        $(this.plugin).bind(this._eventsToTrack.join(" "), $.proxy(this._eventHandler, this));
        this.eventsBound = true;
    },
    _eventHandler: function(e) {
        if (e.type != 'progress') $log(e.type);
        switch (e.type) {
            case 'progress':
                this.trigger("mediaplayer:timeupdate", Math.round(e.currentTarget.currentTime * 1000));
                break;
            case 'fullscreen':
                this.trigger("mediaplayer:fullscreen");
                break;
            case 'fullscreen-exit':
                this.trigger("mediaplayer:fullscreen-exit");
                break;
            case 'finish':
                this.trigger("mediaplayer:mediaend", this.playlist.currentItemIndex());
                this.nextVideo();
                break;
            case 'resume':
                this.trigger("mediaplayer:play", this._playVideo());
                break;
            case 'pause':
                this.trigger("mediaplayer:pause");
                break;
            case 'seek':
                this.trigger("mediaplayer:seek");
                break;
            case 'error':
                $(this._videoElement).remove();
                var jee = JSON.stringify(e);
                alert(jee);
                this._createPlayer();
                this.trigger("mediaplayer:videoerror");
                break;
            case 'volume':
                $log(" VOLUME CHANGE EVENT ");
                if (player.wasMuted != this.muted) {
                    this.trigger("mediaplayer:muted");
                }
                this.trigger("mediaplayer:volumechange", e.currentTarget.volume);
                break;
        }
    },
    _stopTrackingEvents: function() {
        $log(" UNBINDING MEDIA EVENTS TO FLASH VIDEO PLAYER ");
        this.plugin.unbind();
        this.eventsBound = false;
    }

}






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
        if (this.currentIndex == this.files.length) {
            $log(" REACHED THE END OF PLAYLIST");
            this.resetIndex();
            if (!this.looping) return null;
        }
         // Should be the largest bitrate

        var file = this.getPlaylistItem(this.files[this.currentIndex]);

        this.currentIndex+=1;

        return file;
    }
    this.getPlaylistItem = function(content) { 
        if (!content) return false;
        var profiles = content.get("videos");
        var bitrate = App.MediaPlayer.userBitrate || 10000;
        var file = profiles[0];
        _.each(profiles, function(profile) {
            $log(" TESTING file.bitrate: " + file.bitrate + " file.bitrate: " + file.bitrate + " my bitrate: " + App.Player.MediaPlayer.userBitrate)
            if (profile.bitrate > file.bitrate && profile.bitrate < App.Player.MediaPlayer.userBitrate) {
                file = profile;
            }
        });
        return file;
    },

    this.getPlaylistFiles = function() { 

        var content = this.nextFile();
        var files = this.generatePlaylistItem(content.mp4);
        return files;
    }
    this.getBitrates = function() { 

        var profiles = this.files[this.currentIndex].get("videos");
        var bitrates = _.pluck(profiles, "bitrate");
        return bitrates;
    }
    this.generatePlaylistItem = function(file) {
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
            this.trigger("subtitles:loadfile", this.subtitleFile);

            return true;
        }
        return false;
    }
});
_.extend(App.Player.Subtitles, Backbone.Events);
