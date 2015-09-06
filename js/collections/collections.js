App.Collections = {};
    // Create a new collection using one of Backbone.Paginator's
    // pagers. We're going to begin using the requestPager first.
App.Collections.FilmCollection = Backbone.Collection.extend({
    model: App.Models.Film,
parse: function (resp, options) {
    var self = this;
    return _.map(resp, function (obj) {
        return new self.model(obj.film, options);
    });
    }
});


App.Collections.BannerCollection = Backbone.Collection.extend({
    model: App.Models.Banner
});
/* User collection for playlist items */

App.Collections.FilmSessionCollection = Backbone.Collection.extend({
        localStorage: new Backbone.LocalStorage("FilmSession"),
        model: App.User.FilmSession
});

/* User collection for playlist items */

App.Collections.PaginatedCollection = Backbone.PageableCollection.extend({
        baseUrl: App.Settings.api_url + 'search/',
        url: App.Settings.api_url + "search?api_key=" +App.Settings.api_key+ "&",

        // Enable infinite paging
        mode: "infinite",
        
        // As usual, let's specify the model to be used
        // with this collection
        initialize: function(models, options) {
            this.querystate = options.querystate;
            this.initial_search = options.search;
            this.options = options;
            this.originalCollection = options.collection;
            
            // Whenever the state is changed, 
            // update the collection records
            // to match the state
            this.querystate.bind('change', this.update, this);
            if (options.pagination) {
                this.pagination = options.pagination;
            }
        },
        state: App.Settings.Search.state,
        queryParams: App.Settings.Search.default_query_params,

        update: function() {

           _.extend(this.queryParams,this.querystate.attributes);   
            if (this.querystate.isEmpty() && this.originalCollection) { 
                this.fullCollection.reset(this.originalCollection.toJSON()); 
            } else   
            this.fetch({ reset: true, url: this.url, dataType: 'jsonp'});
        },
        parse: function(data) {
            return data.results;
        },
        featured: function() {
            var items = this.fullCollection.filter(function(data) {
                return data.get("featured") == 1
            });

            return items;
        },
        purchased: function() {
            var items = this.filter(function(data) {
                return data.get("ticket");
            });
            return new App.Films.UserCollection(items);
        },
        sortByAttribute: function(attribute, desc) {
            
            var asc_comparator = function (model) { 

                model.get(attribute);
            }
            this.querystate.set("sort", attribute);
            
            this.fullCollection.comparator = desc ? this.reverseSortBy(asc_comparator) : asc_comparator;
            this.fullCollection.sort();
            return true;
        },
        reverseSortBy: function(sortByFunction) {
          return function(left, right) {
            var l = sortByFunction(left);
            var r = sortByFunction(right);
         
            if (l === void 0) return -1;
            if (r === void 0) return 1;
         
            return l < r ? 1 : l > r ? -1 : 0;
          };
        }
         
    });

App.Films.GenreCollection = Backbone.Collection.extend({
    url: '',
    baseUrl: '',
    initialize: function(models, options) {},
    update: function() {
        this.url = this.baseUrl + '&api_key=' + App.Settings.api_key + '&jsoncallback=?';
    },
    parse: function(response) {
        return response.objects;
    }
});
App.Collections.SortCollection = Backbone.Collection.extend({});
App.Collections.FilterCollection = Backbone.Collection.extend({});
App.Collections.UserCollection = Backbone.Collection.extend({
    localStorage: new Backbone.LocalStorage("Ticket"),
    model: App.User.Ticket,
    initialize: function(options) { 
        
        _.bindAll(this, 'updateUserCollection', 'parseModel');
        this.on("reset", this.updateUserCollection);
        this.on("add", this.updateUserCollection);
        
    },
    hasTicket: function(id) {
        return _.find(this.models,function(item){ return item.get("id") == id });
    },
    parseModel: function(model) {
        if (!model.isValid()) {
                $log("Invalid model, deleting "+model.get("id"));
                model.destroy();
                return false;
        }

        var original_film = app.collection.originalCollection.get(model.get("id"));
        if (original_film) {    
                original_film.set("ticket", model);
        }
        model.save();
        return true;    
    },
  
    updateUserCollection: function() {

        if (this.models.length == 0) {
            return false;
        }
        _.each(this.models, function(model) {
            this.parseModel(model);
        }.bind(this));
        
        return this;
    }
});
App.Collections.SubscriptionCollection = Backbone.Collection.extend({});
App.Collections.PaymentmethodCollection = Backbone.Collection.extend({});

