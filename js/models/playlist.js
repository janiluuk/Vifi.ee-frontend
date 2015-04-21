App.Playlist = Backbone.Model.extend({

    defaults:  {
        items : [],
        currentIndex : 0,
        looping : true,
        userBitrate: 1000
    },

    resetIndex : function() {
      this.set("currentIndex",0);
    },
    currentItemIndex : function() {
      return this.get("currentIndex") - 1;
    },
    currentIndex: function() { 
        return this.get("currentIndex");
    },
    isLooping: function() {
        return this.get("looping");
    },
    isLast: function() { 
      return this.currentIndex() == this.get("items").length;
    },
    currentItem: function() { 
        var currentIndex = this.currentIndex();
        var item = this.get("items")[currentIndex];
        return item;
    },

    nextItem : function() {
      if (this.isLast()) {
        $log(" REACHED THE END OF PLAYLIST");
        this.resetIndex();
        if (!this.isLooping()) return null;
      }
      this.setCurrentIndex(this.currentItemIndex() + 1);

      // Should be the largest bitrate
      var item = this.currentItem(); 

      var file = this.autoSelectFile(item);

      return file;
    },

    autoSelectFile : function(content) {
      
      if (!content) return false;

      var profiles = content.get("videos");

      
      var user_bitrate = parseInt(this.get("userBitrate"));
      var file = profiles[0];
      var file_bitrate = parseInt(file.bitrate);
      var min_bitrate = file_bitrate;
        _.each(profiles, function(profile) {
            var profile_bitrate = parseInt(profile.bitrate);

            $log(" TESTING file.bitrate: " + profile.bitrate + ", my bitrate: " + user_bitrate);
            if (profile_bitrate > file_bitrate && profile_bitrate < user_bitrate) {
                file = profile;
            }

            if (min_bitrate > profile_bitrate)
            min_bitrate = profile.bitrate;
        });

        $log("Minimum bitrate: " + min_bitrate);
        $log("Choosing " + file.mp4 + " as the default video");

        return file;
    },

    getPlaylistFiles : function() {
      var content = this.nextFile();
      var files = this.generatePlaylistItem(content.mp4);
      return files;
    },
    
    getBitrates : function() {
      var profiles = this.currentItem().get("videos");
      var bitrates = _.pluck(profiles, "bitrate");
      return bitrates;
    },

    generatePlaylistItem : function(file) {
      if (!file) return false;
      if (file[0] == '/')
        file = file.substring(1);
        var mp4_url = App.Settings.mp4_url + file;
        var mpegurl = App.Settings.hls_url + '/' + file + '/playlist.m3u8'
        var playlist_item = [
            {
                mp4: mp4_url
            }, 
            {
                mpegurl: mpegurl
            }, 
            {
                flash: 'mp4:' + file.replace('.mp4', '')
            }
        ];
      return playlist_item;
    },
    add : function(item) {
      this.get("items").push(item);
    },

    addPreroll : function(renditions, isAd) {
      var isAd = _.isNull(isAd) ? true : isAd; // We default to it being an ad.
      if (!_.isArray(videos))
        videos = [videos];
      this.files.unshift({
        isAd: isAd,
        videos: videos
      });
    },
    addItem: function(videos, isAd) {
      var isAd = _.isNull(isAd) ? false : isAd;
      if (!_.isArray(videos))
        videos = [videos];
      this.files.push({
        isAd: isAd,
        videos: videos
      });
    },

    setUserBitrate : function(bitrate) {
      this.set("userBitrate") = bitrate;
      this.trigger("playlist:bitrate:changed", bitrate);
    },
    
    setCurrentIndex : function(index) {
      $log("Playlist index set to: " + index);
      this.set("currentIndex", index);
    },
    
    addUrl : function(url) {
      this.get("items").push([{
        profile: null,
        mp4: url,
        bitrate: 0,
        code: 0,
      }]);
    },
    
    loop: function(toLoop) {
        this.looping = !!toLoop; // force a boolean
    }
});
_.extend(App.Playlist, Backbone.Events);
