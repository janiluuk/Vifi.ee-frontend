var oldSaveFunction = Backbone.Model.prototype.save;
Backbone.Model.prototype.save = function(){
    var returnedValue = oldSaveFunction.apply(this, arguments),
        deferred = new $.Deferred();

    if(_.isBoolean(returnedValue)){
        deferred.reject();
        return deferred.promise();
    }

    return returnedValue;
}

App.Models = {};

App.Models.ApiModel = Backbone.Model.extend({
    defaults: {
        "id": '',
        'session': false
    },
    path: "",
    params: false

});

_.extend(App.Models.ApiModel.prototype, { 
    url: function() {
        return App.Settings.api_url + this.path + '?' + this.params;
    },
    getParams: function(data) {
        var session = this.get("session");
        var options = {}
        var params = {
            dataType: 'jsonp',
            data: {
                api_key: App.Settings.api_key,
                authId: session.get("auth_id"),
                sessionId: session.get("session_id"),
                format: 'json',
            }
        };

        if (data) params.data = _.extend(params.data, data);
        
        options.data = JSON.parse(JSON.stringify(params.data));
        options.dataType = params.dataType;
        return options;
    },
    // override backbone synch to force a jsonp call
    sync: function(method, model, options) {

        // Default JSON-request options.
        // passing options.url will override 
        // the default construction of the url in Backbone.sync
        var type="GET";
        var dataType = "jsonp";
        var jsonp = "jsoncallback";

        switch (method) {
            case "update":
            type="POST";
            jsonp = false;
            dataType=false;
            break;
        }

        if (undefined == model) model = this;

        this.params = "api_key=" + App.Settings.api_key;
        var session = this.get("session");
        if (session) {
            this.params += "&sessionId=" + session.get("session_id");
            if (session.get("auth_id") != null && session.get("auth_id") != "") this.params += "&authId=" + session.get("auth_id");
        }
        var params = _.extend({
            type: type,
            dataType: dataType,
            url: model.url(),
            jsonp: jsonp, // the api requires the jsonp callback name to be this exact name
            processData: true
        }, options);

        // Make the request.
        return $.ajax(params);
    },

});

App.Models.Product = App.Models.ApiModel.extend({ 

});
App.Models.Subscription = App.Models.Product.extend({ 
    type: 'subscription'
});

App.Models.Banner = Backbone.Model.extend({

});

App.Models.Film = App.Models.Product.extend({
    type: 'film',
    path: 'details/'
});
_.extend(App.Models.Film.prototype,  { 
    initialize: function(options) {
        this.refresh();
    },
    refresh: function() {
            this.path = "details/" + this.get("id");
    },
    fetchRT: function(id) {

        if (id) imdb_id = id; 
        else imdb_id = this.get("imdb_id");

        if (undefined == imdb_id || imdb_id == "") return false;
        this.set("rt_ratings","");
        this.set("rt_links","");

        var url = 'http://api.rottentomatoes.com/api/public/v1.0/movie_alias.json?apikey='+App.Settings.rt_api_key+'&type=imdb&id='+imdb_id.replace("tt","");
        
        var _this = this;

        $.ajax({
            url: url,
            async: true,
            dataType: "jsonp",
            success: function(res) { 
                _this.set("rt_links", res.links);
                if (typeof(res.ratings) != "undefined" && (res.ratings.critics_score > 0 || res.ratings.audience_score > 0) )
                _this.set("rt_ratings", res.ratings);

            }
        });
        return true;

    },
 });
App.Models.FilmSession = App.Models.ApiModel.extend({ 
    path: 'filmsession',
    defaults: {  
        'session_id' : '',
        'timestamp' : '',
        'watched' : false,
        'film_id' : ''
    },
    initialize: function(options) {
        if (options && undefined !== options.session) {
            this.set("session", options.session);
        }
        this.on("change:videos", this.onLoadContent, this);
        this.on("change:subtitles", this.onLoadSubtitles, this);
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
        }],
        session: { },
    },

    initialize: function(options) {
        if (options && undefined !== options.session) {
            this.set("session", options.session);
        }
        this.on("change:videos", this.onLoadContent, this);
        this.on("change:subtitles", this.onLoadSubtitles, this);
    },
    
    /*
     * Load defined film content to the player
     */

    load: function (id) {
        this.set("videos", false);
        this.set("subtitles", false);        
        this.set("id", id);
        this.refresh(true);

        return this;    
    },
    onLoadContent: function(event) {

        $log(this.get("videos"));
        
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

