App.Collections = {};
    // Create a new collection using one of Backbone.Paginator's
    // pagers. We're going to begin using the requestPager first.

App.Collections.PaginatedCollection = Backbone.PageableCollection.extend({
        baseUrl: App.Settings.api_url + 'search/',

        // As usual, let's specify the model to be used
        // with this collection
        model: App.Models.Film,
        initialize: function(models, options) {
            this.querystate = options.querystate;
            this.initial_search = options.search;
            this.options = options;
            // Whenever the state is changed, 
            // update the collection records
            // to match the state
            this.querystate.bind('change', this.update, this);
            if (options.pagination) {
                this.pagination = options.pagination;
            }
        },
 
        url: App.Settings.api_url + "search?api_key=" +App.Settings.api_key+ "&",
        // Enable infinite paging
        mode: "infinite",

        // Initial pagination states
        state: {
          pageSize: 15,
          sortKey: "id",
          order: 1
        },

        // You can remap the query parameters from `state` keys from
        // the default to those your server supports
        queryParams: {
          totalPages: null,
          totalRecords: null,
          sortKey: "sort"
        },

        update: function() {
           _.extend(this.queryParams,this.querystate.attributes);
            this.fetch({ reset: true, url: this.url, dataType: 'jsonp'});


        },

        parse: function(data) {
            return data.results;

        },
        featured: function() {
            var items = this.fullCollection.filter(function(data) {
            return data.get("film").featured == 1
        });

        return items;
        },
        purchased: function() {
            var items = this.filter(function(data) {
                return data.get("ticket");
            });
            return new App.Films.UserCollection(items);

        },
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
 
});
