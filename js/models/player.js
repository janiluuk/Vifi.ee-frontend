App.Player = {};


App.Player.MediaPlayer = Backbone.Model.extend({
    movie: false,
    session: false,
    content: false,
    playerPage: false,
    subtitles: {},
    debug: true,
    ready: false,
    endingTime: "",

    initialize: function(options) {
        this.content = new App.Models.FilmContent({ session: options.session});
        this.subtitles = new App.Player.Subtitles();
        
        if (options && undefined != options.session) {
            this.set("session", options.session);

        }
        if (options && undefined != options.movie) {
            this.setMovie(options.movie);

        }

 
        this.on('player:load', this.onLoadFilm, this);
        this.on('subtitles:ready', this.onSubtitlesReady, this);
    },
    setMovie: function(movie) {
        var id = movie.get("id");
        this.movie = movie;
        this.content.set("id", id);
        this.content.fetch();
    },
    onSubtitlesReady: function(subtitles) {

        this.subtitles.load(subtitles);
    },
    load: function(movie) {
        var id = movie.get("id");
        this.content.set("id", id);
        this.content.fetch();


    },
    onContentReady: function(content) {

        this.content.set("endingtime", this.getEndingTime(this.content.get("running_time")));

        var content = this.content.get("videos");
        this.player.setContent(content);        
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
    generatePlaylistItem: function(file) {
        var rtmp_url = App.Settings.rtmp_url;
        var playlist_item = [ 
                { mpegurl: App.Settings.hls_url+'/_definst_/'+file+'/playlist.m3u8' },
                {     mp4: 'http://gonzales.vifi.ee/zsf/'+file  },
                {    flash: 'mp4:'+ file.replace('.mp4','') }
        ];
        return playlist_item;

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
            app.purchasePage.model = movie;
            app.purchasePage.render();

            App.Event.trigger("purchase:show");
            return false;
        }

        return true;
    },


});




_.extend(App.Player.MediaPlayer, Backbone.Events);



App.Player.Playlist = function() {
    this.files = [];
    this.currentIndex = 0;
    this.looping = false;

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
        var bitrate = Vifi.MediaPlayer.userBitrate || 10000; // Should be the largest bitrate
        if (this.currentIndex == this.files.length) {
            $log(" REACHED THE END OF PLAYLIST");
            this.resetIndex();
            if (!this.looping) return null;
        }
        var profiles = this.files[this.currentIndex++].videos;
        var file = profiles.shift();
        _.each(profiles, function(profile) {
            $log(" TESTING file.bitrate: " + file.bitrate + " file.bitrate: " + file.bitrate + " my bitrate: " + Vifi.MediaPlayer.userBitrate)
            if (profile.bitrate > file.bitrate && profile.bitrate < Vifi.MediaPlayer.userBitrate) {
                file = profile;
            }
        });
        return file;
    }


    this.addFiles = function(files) {
        this.files = files;
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
    videoElement: 'player',
    subtitleElement: 'subtitles',
    subtitledata: null,
    currentSubtitle: null,
    defaultCode: 'ee',
    srtUrl: 'http://app.vifi.ee/subs/',
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
        this.subtitleFile = "";
        this.subtitledata = {};
        this.language = '';
        $("#" + this.subtitleElement).html('');
        this.enabled = false;
        this.trigger("subtitles:disable");
        $log("Disabling subtitles");

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
            var currentTime = Vifi.MediaPlayer.getCurrentTime();
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