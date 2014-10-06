App.Views.BrowserView = Backbone.View.extend({
    model: App.Models.Film,

    el: $('#browser-content'),
    events: {
        'submit #search-form': 'handleSearchFormSubmit',
        'change #search-form select': 'onSearchFieldChange',
        'change #search-form input[type="text"]': 'onSearchFieldChange',
        'change #search-form input[type="hidden"]': 'onSearchFieldChange',
        'click #loadMore' : 'onLoadMore'
    },
    initialize: function(options) {
        this.options = options;
        this.browsercollection = options.browsercollection;
        this.browsercollection.options.genres.bind('all', this.setGenreDropDown, this);
        this.browsercollection.bind('sync', this.renderResults, this);
        
        this.browsercollection.querystate.bind('change', this.onChangeCollectionState, this);
        this.browsercollection.querystate.bind('change:genres', this.onChangeGenre, this);
        this.browsercollection.querystate.bind('change:durations', this.onChangeDuration, this);
        this.browsercollection.querystate.bind('change:years', this.onChangeYear, this);
        this.browsercollection.querystate.bind('change:search', this.onChangeText, this);

        this.render();
        this.applyIsotope();

        this.renderResults();


    },
     initEvents: function() { 

        this.on("maximise", function() { $("#featured-swiper-container").stop().slideDown() } );
        this.on("minimize", function() { $("#featured-swiper-container").stop().slideUp() } );

    },
    render: function() {
        var template = _.template($("#browserPageTemplate").html());
        this.$el.html(template);
        this.filterview = new App.Views.FilterView({filters: this.options.filters, sort: this.options.sort});
        return this;  
    },
    applyIsotope: function() {
        /* Enable isotope on the results */
        
       this.$isotope = $("#content-body-list").isotope({
            layoutMode: 'fitRows',
            resizable: true,
            itemSelector: '.item',
            transitionDuration: '.3s',
            animationOptins: {
                duration: 250,
                easing: 'linear',
                queue: false,
            },
            masonry: {


            }
        });

    },

    setGenreDropDown: function(action) {
        $('#id_genres').empty();
        if (this.browsercollection.options.genres.length > 0) {
            if (this.browsercollection.options.genres.length > 1) {
                $('#id_genres').append(new Option('All Genres', ''));
            }
            _.each(this.browsercollection.options.genres.models, function(genre, key, list) {  
                $('#id_genres').append(new Option(genre.get("name"), genre.get("id")));
            });
            this.$('#id_genres option[value="' + this.browsercollection.querystate.get('genres') + '"]').attr('selected', 'selected');
        }
    },
    redirectToBaseURL: function() {
        window.location = 'http://' + window.location.host + '/#search/' + this.browsercollection.querystate.getHash();
    },
    onChangeDuration: function(model, duration) {
        //This is a state change event, not a dom event
        if (this.options.redirect_on_duration_change && duration != this.browsercollection.initial_search.duration) {
            this.redirectToBaseURL();
        }
    },
    onChangePeriod: function(model, period) {
        //This is a state change event, not a dom event
        if (this.options.redirect_on_period_change && period != this.browsercollection.initial_search.period) {
            this.redirectToBaseURL();
        }
    },
   
    onChangeGenre: function(model, genre) {
        // this function is a model state change, not the dom event: change
        // because of this we don't need the "event" arg.
        var parts = app.browserview.browsercollection.querystate.get('genres');
                if (undefined == parts || parts.length == 0) return false;
        _.each(parts.split(";"), function(i) { $(".selection-wrapper [data-val="+i+"]")});
        if (this.options.redirect_on_genre_change && genre != this.browsercollection.initial_search.genre) {
            this.redirectToBaseURL();
        }
    },
    handleSearchFormSubmit: function(event) {
        event.preventDefault();
    },
    loadBrowserImages: function() {
        $("#search-results div.lazy").lazyload({
            threshold: 4000,
            effect: 'fadeIn',
            effectspeed: 900
        });
    },
    
    // Handle preloading imags on browser
    onBrowserPaginationEvent: function(e) {
        var images = $("#search-results div.lazy.loading:in-viewport");
        if (images.length > 0) app.browser.loadBrowserImages();
    },
    onSearchFieldChange: function(event) {
        
        var value = $("#main-search-box").val();
        var search_array = {
            genres: undefined,
            duration: undefined,
            periods: undefined,
            q: value
        };
        var search_dict = _.extend({}, search_array);

        $("#search-form select :selected").each(function() {
            var fieldid = $(this).parent().attr("id");
            var fieldname = fieldid.replace("id_", "");
            var val = $(this).val();
            search_dict[fieldname] = search_dict[fieldname] == undefined ? val : search_dict[fieldname] += ";" + val;
        });

        this.browsercollection.querystate.set(search_dict);
    },

    addOne : function ( item ) {

        var view = new App.Views.FilmView({model:item});
        $('#content-body-list').append(view.render().el);
    },
    addSet : function ( collection ) {
        var _this = this;

        collection.each(function(film, id) { 
            var view = new App.Views.FilmView({model:film});
            var el = view.render().el;
            $('#content-body-list').append(el).isotope('appended', el);

        });
            $("#content-body-list").isotope("layout");

    },
    onLoadMore: function() {

        this.addSet(this.browsercollection.getNextPage());
        if (!app.browserview.browsercollection.hasNextPage()) {

            $("#loadMore").hide();

        }

    },

    renderResults: function(el) {
        this.fragment = document.createDocumentFragment();

        if (this.rendering) return false;
        this.rendering = true;
      

        //$("#search-results > div.movie").addClass("loading");
        $("#content-body-list").empty();

        var _this = this;
        this.browsercollection.getFirstPage()
        this.addSet(this.browsercollection);
        this.updateUIToState();

        this.rendering = false;
    },
    updateUIToState: function() {
        var state = this.browsercollection.querystate;
        var $this = this;
        // main search text box
        var query = state.get('q');
        $('#main-search-box').val(query);

        var options = ['genres', 'periods', 'durations'];
        $.each(options, function(idx, option) {
            var val = decodeURIComponent(state.get(option));

            if (val != "") {
                var parts = val.split(';');

                if (parts.length > 0 && parts != "undefined") {
                    $.each(parts, function(idx, item) {
                        $this.$('#id_' + option + ' option[value="' + item + '"]').attr('selected', 'selected');

                        $(".selection-wrapper[data-field='" + option + "'] div[data-val=" + item + "]").addClass("toggle-on");

                    });
                    $(".selection-wrapper[data-field='" + option + "'] div[data-val=reset]").removeClass("toggle-on");
                }
            }
        });

        // Load more button
        if (this.browsercollection.state.pageSize > this.browsercollection.models.length) {
            $("#loadMore").hide();
        } else {
            $("#loadMore").show();

        }
    },

    onChangeCollectionState: function(state) {
        
        var changed_keys = _.keys(state.changedAttributes());
        var genre_is_changed = _.contains(changed_keys, 'genres');
        if (this.options.redirect_on_genre_change && (genre_is_changed)) {
            return this.redirectToBaseURL();
        }
        _.extend(this.browsercollection.queryParams, this.browsercollection.querystate.attributes);        
        //Update the url of the browser using the router navigate method
        app.router.navigate('search' + '?' + app.browserview.browsercollection.querystate.getHash());
    },

    //Set the search state from the url
    setSearchStateFromHash: function(searchStateHash) {
        //setFromHash will trigger a change event, which then
        //loads the records and reloads the table
        this.browsercollection.querystate.setFromHash(searchStateHash);
    },
    clearSearch: function() {
        this.browsercollection.querystate.set(this.browsercollection.initial_search);
        this.trigger("search:clear", this);
    }
});

