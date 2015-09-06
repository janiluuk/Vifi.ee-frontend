App.Player.FilmContent = App.Models.ApiModel.extend({
    url : function() { return App.Settings.api_url + this.path + "/" + this.get("id") + "?"; },
    path: 'content',
    defaults: function() {
        return {
        'id': false,
        'videos': [{
                'mp4': '',
                'profile': '',
                'code': ''
            }
        ],
        'ticket' : false,
        'images': {
            'thumb': '',
            'poster': ''
        },
        'subtitles': [{
            'file': '',
            'code': '',
            'language': ''
        }],
        'filmsession' : false,
        'session': { },
        }
    },
    
    /**
     *  Parameters:
     *  film - Instance of a film.
     *  filmsession - active film session 
     *  ticket - ticket for watching the content
     *  session - User session
     * 
     */
    initialize: function(options) {

        if (options && undefined !== options.film) {
            this.set("film", options.film);
            this.set("id", options.film.get("id"));
            if (options.film.get("ticket")) {
              this.set("ticket", options.film.get("ticket"));
              this.set("filmsession", options.film.get("ticket").get("filmsession"));
            }
        }
        
        if (options && undefined !== options.session) {
            this.set("filmsession", options.session);
        }
        if (options && undefined !== options.ticket) {
            this.set("ticket", options.ticket);
        }
        if (app.session) {
          this.set("session", app.session);
        }
        this.on("content:loaded", this.onContentLoaded);
    },

    fetchContent: function() {
      var ticket = this.get("ticket");
      var auth_code = ticket ? ticket.get("auth_code") : "";
      var session_id = this.get("filmsession").get("session_id");

      this.sync("GET",this,this.getParams({session_id: session_id, auth_code: auth_code})).done(
        function(data) {
         this.trigger("content:loaded", data);
        }.bind(this)).error(
        function(data) {
         this.trigger("content:error", data); 
       }.bind(this));

    },
    onContentLoaded: function(data) { 
        this.parse(data);
        alert("content loaded");
      
    },
    parse: function(results) { 
      
        this.addSession(results.sessiondata);
        this.addVideos(results.videos);
        this.addSubtitles(results.subtitles);
        return results;
    }, 
    addSession: function(session) {
        var sess = new App.User.FilmSession(session);
        this.set("filmsession", sess);
        this.trigger("content:session:loaded", this.get("session"));

    },
    addVideos: function(videos) {  
      var videofiles = [];
        _.each(videos, function(video) {  

          var videofile = new App.Player.VideoFile();
            videofile.set("bitrate", video.bitrate);
            videofile.set("src", video.mp4);
            videofile.set("profile", video.profile);
            videofiles.push(videofile);            
        });
        var collection = new App.Player.VideoFileCollection(videofiles);
        this.set("videos", collection);
        this.trigger("content:videos:loaded", this.get("videos"));

    },
    addSubtitles: function(subtitles) {  
      var subs = [];
        _.each(subtitles, function(video) {  

          var subtitle = new App.Player.SubtitleFile();
            subtitle.set("language", video.language);
            subtitle.set("file", video.file);
            subtitle.set("code", video.code);
            subs.push(subtitle);            
        });
        var collection = new App.Player.SubtitleFileCollection(subs);
        this.set("subtitles", collection);        
        this.trigger("content:subtitles:loaded", this.get("subtitles"));
    }
});


App.Player.VideoFile = Backbone.Model.extend({ 
  defaults: { 
    bitrate: false,
    src: false,
    active: false,
    type: false,
    resolution: false,
    selected: false
  },
  getPlaylist: function() { 
      
      var file = this.get("src");
      if (!file) return false;

      if (file[0] == '/') file = file.substring(1);
        var mp4_url = App.Settings.mp4_url + file;
        var mpegurl = App.Settings.hls_url + '/' + file + '/playlist.m3u8';
        var playlist_item = [
            {
                type: 'video/mp4',
                src: mp4_url,
                mp4: mp4_url
            }, 
            {
                type: 'application/x-mpegurl',
                mpegurl: mpegurl,
                src: mpegurl

            }, 
            {
                type: 'video/flash',
                flash: 'mp4:' + file.replace('.mp4', ''),
                src: 'mp4:' + file.replace('.mp4', '')

            }
        ];
      return playlist_item;
  }
});
App.Player.VideoFileCollection = Backbone.Collection.extend({
    model: App.Player.VideoFile,

    findMinBitrate : function(min_bitrate) { 
      var items = this.filter(function(item) { if (item.get("bitrate") < min_bitrate) return item; });
      if (_.size(items) == 0) { 
          
          items.push(this.getLowest());
      }
      return items;
    },
    findClosestBitrate: function(bitrate) { 
        var collection = this.findMinBitrate(bitrate);
        var curr = collection[0];
        if (collection.size == 1) return curr;
        var item = _.map(coll.findMinBitrate(bitrate), function(item) {  if (Math.abs(bitrate - item.get("bitrate")) < Math.abs(bitrate - curr.get("bitrate"))) curr=item; } );
        return curr;
    },
    getBitrates : function() {
      return this.pluck("bitrate");
    },
    setActive: function(file) { 
      return this.map(function(item) { if (item == file) item.set("active",true); else item.set("active", false); });
    },
    getActive: function() { 
      return this.map(function(item) { if (item.get("active") == true) return item; });
    },

    getLowest: function() {
      return this.min(this.pluck("bitrate"));
    },
    getHighest: function() {
      return this.max(this.pluck("bitrate"));
    }
});


App.Player.SubtitleFile = Backbone.Model.extend({
    defaults: { 
      'filename' : '',
      'code' : '',
      'language': '',
      'active' : false      
    }
});
App.Player.SubtitleFileCollection = Backbone.Collection.extend({
    model: App.Player.SubtitleFile

});

/*
App.Player.Playlist = Backbone.Collection.extend({
    model: App.Player.Content,
    defaults : { 
      looping: false,
      currentIndex : 0
    },
    setCurrentIndex : function(index) {
      if (undefined == typeof(this.models[index])) return false; 
      $log("Playlist index set to: " + index);
      this.set("currentIndex", index);
      this.set("activeItem", this.models[index]);
      return true;
    },
    isLast: function() { 
      return this.get("currentIndex")+1 == this.size();
    },
    isLooping: function() {
        return this.get("looping");
    },
    loop: function(toLoop) {
        this.looping = !!toLoop; // force a boolean
    },    
    currentItem: function() { 
        var currentIndex = this.get("currentIndex");
        var item = this.models[currentIndex];
        return item;
    },
    currentIndex: function() { 
      return this.get("currentIndex");
    },
    hasNext: function() { 
      var next = this.get("currentIndex")+1;
      return (undefined == typeof(this.models[next])) ? false : true;
    },
    resetIndex : function() {
      this.set("currentIndex",0);
    },
    nextItem : function() {
      if (this.isLast()) {
        $log(" REACHED THE END OF PLAYLIST");
        this.resetIndex();
        if (!this.isLooping()) return null;
      }
      this.setCurrentIndex(this.currentIndex() + 1);
      var item = this.currentItem(); 
      return file;
    }
});
_.extend(App.Player.Playlist, Backbone.Events);
*/
var videos = [
new App.Player.VideoFile({"bitrate":1500, "src":'fff.mp4', 'type':'video/mp4'}),
new App.Player.VideoFile({"bitrate":6500, "src":'asdjaisdj.mp4', 'type':'video/mp4'}),
new App.Player.VideoFile({"bitrate":500, "src":'add.mp4', 'type':'video/mp4'}),
new App.Player.VideoFile({"bitrate":200, "src":'asdjaisdj.mp4', 'type':'video/mp4'}),
new App.Player.VideoFile({"bitrate":2500, "src":'asdjaisdj.mp4', 'type':'video/flv'})
];
var coll = new App.Player.VideoFileCollection(videos);



