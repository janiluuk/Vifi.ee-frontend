App.Models = {};
App.Utils = {};

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
//A utility model to track state using the hash and also generate a url
App.Utils.State = Backbone.Model.extend({
    defaults: {},
    getQueryString: function(addParams) {
        var hashables = [];
        var dict = this.toJSON();
        for (key in dict) {
            if ((!_.indexOf(_.keys(this.defaults), key) || (this.defaults[key] != dict[key])) && dict[key] != undefined) {
                hashables.push(key + '=' + escape(dict[key]));
            }
        }
        if (addParams) {
            for (key in addParams) {
                hashables.push(key + '=' + addParams[key])
            }
        }
        return '?' + hashables.join('&');
    },
    //A hash to use in the url to create a bookmark or link
    //Makes somehting like prop1:value1|prop2:value2
    getHash: function() {
        return this.getQueryString().substring(1).replace(/&/g, '|').replace(/=/g, ':');
    },
    //Take a hash from the url and set the model attributes
    //Parses from the formate of prop1:value1|prop2:value2
    setFromHash: function(hash) {
        var hashables = hash.replace("?", "").split('|');
        var dict = _.clone(this.defaults);
        var i = false;
        _.each(hashables, function(hashable) {
            var parts = hashable.split(':');
            var prop = parts[0];
            var value = parts[1];

            dict[prop] = value.length > 0 ? value : undefined;

            if (dict[prop] == undefined && !i) {
                i = true;
            } 

        });
        
        this.set(dict);
        return i;
        
    }
});

App.Models.Film = App.Models.ApiModel.extend({
    path: 'details/',
    initialize: function(options) {

        this.refresh();
    },
    url: function() {
        return App.Settings.api_url + this.path + '?' + this.params;
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

   
});
App.Models.User = Backbone.Model.extend({});

