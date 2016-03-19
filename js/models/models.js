App.Models = {};

App.Models.ApiModel = Backbone.Model.extend({
    defaults: {
        'id': '',
        'session': false
    },
    params: {}

});

_.extend(App.Models.ApiModel.prototype, { 
    path: function() { return this.get("id"); },
    url: function() {
        return App.Settings.api_url + this.path() + '?' + $.param(this.params);
    },
    // override backbone synch to force a jsonp call
    sync: function(method, model, options) {

        // Default JSON-request options.
        // passing options.url will override 
        // the default construction of the url in Backbone.sync
        var data = ("undefined" == typeof(options)) ? {} : options.data;
        
        var session = this.get("session");
        if (!session) session = app.session;
        var sessionParams= session.getParams(data);
        
        var type="GET";
        var dataType = "jsonp";
        var jsonp = "jsoncallback";
        switch (method) {
            case "update":
            type="POST";
            jsonp = false;
            options=sessionParams;
            options.dataType=false;
            break;
        }

        if (undefined == model || model == false) model = this;

        _.extend(this.params, sessionParams.data);
        
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
    path: function() { return 'details/'; },

});
_.extend(App.Models.Film.prototype,  { 
    path: function() { return "details/" + this.get("id"); },

    /**
     *  Retrieve Rotten tomatoe review's for the mobie
     *  @param int id 
     *  
     */
    fetchRT: function(id) {

        if (id) imdb_id = id; 
        else imdb_id = this.get("imdb_id");

        if (undefined == imdb_id || imdb_id == "") return false;
        this.set("rt_ratings","");
        this.set("rt_links","");

        var url = '/proxy.php?url=http://api.rottentomatoes.com/api/public/v1.0/movie_alias.json?apikey='+App.Settings.rt_api_key+'&type=imdb&id='+imdb_id.replace("tt","");
        
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
 
App.Models.FilmSession = Backbone.Model.extend({
    path: 'update_session',
    urlRoot: App.Settings.api_url,
    idAttribute: 'session_id',
    url: function() { return this.urlRoot+this.path+"/"+this.get("session_id")+"/"+this.get("timestamp")+"?format=json&api_key="+App.Settings.api_key; },

    defaults: function() {
        return {  
            'session_id' : '',
            'timestamp' : 0,
            'watched' : false,
            'film_id' : ''
        };   
    },
    initialize: function(options) {
        this.on("change:session_id", this.onSessionLoad, this);
        
    },
    onSessionLoad: function() {
        
        console.log(this.get("session_id"));
        
    }


});


