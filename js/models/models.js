App.Models = {};


App.Models.ApiModel = Backbone.Model.extend({
    defaults: {
        "id": '',
        'session': false
    },
    path: "",
    params: false,
    url: function() {
        return App.Settings.api_url + this.path + '?' + this.params;
    },

    // override backbone synch to force a jsonp call
    sync: function(method, model, options) {
        // Default JSON-request options.

        this.params = "api_key=" + App.Settings.api_key;
        var session = this.get("session");
        if (session) {
            this.params += "&sessionId=" + session.get("sessionId");
            if (session.get("hash") != null && session.get("hash") != "") this.params += "&authId=" + session.get("hash");
        }
        var params = _.extend({
            type: 'GET',
            dataType: 'jsonp',
            url: model.url(),
            jsonp: "jsoncallback", // the api requires the jsonp callback name to be this exact name
            processData: true
        }, options);
        // Make the request.
        return $.ajax(params);
    },
});


App.Models.Film = App.Models.ApiModel.extend({
    path: 'details/',
    initialize: function(options) {
        this.refresh();
    },

    refresh: function() {
            this.path = "details/" + this.get("id");
    }
 });

App.Models.FilmContent = App.Models.ApiModel.extend({
    'path': 'content',
    defaults: {
        'id': false,
        'videos': [{
                'mp4': '',
                'profile': '',
                'code': ''
            }

        ],
        'images': {
            'thumb': '',
            'poster': ''
        },
        'subtitles': [{
            'filename': '',
            'code': '',
            'language': ''
        }]
    },

    initialize: function(options) {
        if (options && undefined !== options.session) {
            this.set("session", options.session);
        }
        this.on("change:id", this.refresh, this);
        this.on("change:videos", this.onLoadContent, this);
        this.on("change:subtitles", this.onLoadSubtitles, this);


    },


    /*
     * Load defined film content to the player
     */

    load: function(id) {

        this.set("id", id);
        this.refresh(true);
        return this;    
        
    },
    onLoadContent: function(event) {
        if (this.get("videos").length > 0)
            this.trigger("content:ready", this.get("videos"));

    },

    onLoadSubtitles: function(event) {
        if (this.get("subtitles") != null && this.get("subtitles").length > 0)
            this.trigger("subtitles:ready", this.get("subtitles"));
    },



    refresh: function(fetch) {
        if (this.get("id") > 0) {
            this.path = "content/" + this.get("id");
       
        if (fetch) this.fetch();
        }
    }
});
App.Models.User = Backbone.Model.extend({});

