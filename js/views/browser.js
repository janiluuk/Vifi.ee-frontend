App.Views.BrowserPage = Backbone.View.extend({
    model: App.Models.Film,
    el: '#browser-content',
    events: {
        'submit #search-form': 'handleSearchFormSubmit',
        'change #search-form select': 'onSearchFieldChange',
        'change #search-form input[type="text"]': 'onSearchFieldChange',
        'change #search-form input[type="hidden"]': 'onSearchFieldChange',
        'click #loadMore' : 'onLoadMore'
    },
    initialize: function(options) {
        this.options = options;
        var querystring = this.collection.querystate.getQueryString();
        if (querystring != "") this.collection.update();
        this.collection = options.collection;
        this.collection.options.genres.bind('all', this.setGenreDropDown, this);
        this.collection.fullCollection.bind('reset', this.renderResults, this);

        this.collection.querystate.bind('change', this.onChangeCollectionState, this);
        this.collection.querystate.bind('change:genres', this.onChangeGenre, this);
        this.collection.querystate.bind('change:durations', this.onChangeDuration, this);
        this.collection.querystate.bind('change:years', this.onChangeYear, this);
        this.collection.querystate.bind('change:q', this.onChangeText, this);
        _.bindAll(this,'render', 'renderResults', 'applyIsotope');
        this.filterview = new App.Views.FilterView({filters: this.options.filters, sort: this.options.sort, state: this.collection.querystate});
        this.filterview.bind('filter-bar:sort', this.onSort, this);
        this.filterview.bind('filter-bar:clear', this.onClear, this);
        this.searchview = new App.Views.SearchView({model: this.collection.querystate});
        this.searchview.render();

 
      //  this.initEvents();

    },
     initEvents: function() { 

        this.on("maximize", function() {  
            $("#front-page-search-header").css("display", "none").empty();
            $("#front-page-slider").css("display", "block"); 

        });
        this.on("minimize", function() {  
            $("#front-page-slider").css("display", "none");
            $("#front-page-search-header").css("display", "block").html("you searched for sum shitz");
        });
    },
    render: function() {
        this.$el.html(ich.browserPageTemplate());
        this.filterview.render();
        this.applyIsotope();
        this.updateUIToState();

        return this;  
    },


    applyIsotope: function() {
        /* Enable isotope on the results */

        this.$isotope = $("#content-body-list").isotope({
            layoutMode: 'fitRows',
            resizable: true,
            itemSelector: '.item',
            transitionDuration: '0.4s',
            // disable scale transform transition when hiding
            hiddenStyle: {
            opacity: 0,
            'transform': 'translateY(100%)',
            },
            visibleStyle: {
            opacity: 1,
            'transform': 'translateY(0%)',
            },
            animationOptions: {
                duration: 250,
                easing: 'linear',
                queue: true,
            }
        });

        this.$isotope.isotope( 'on', 'layoutComplete', function() { setTimeout(function() { App.Utils.lazyload() }, 120); } );

        return true;
    },

    setGenreDropDown: function(action) {
        $('#id_genres').empty();
        if (this.collection.options.genres.length > 0) {
            if (this.collection.options.genres.length > 1) {
                $('#id_genres').append(new Option('All Genres', ''));
            }
            _.each(this.collection.options.genres.models, function(genre, key, list) {  
                $('#id_genres').append(new Option(genre.get("name"), genre.get("id")));
            });
            this.$('#id_genres option[value="' + this.collection.querystate.get('genres') + '"]').attr('selected', 'selected');
        }
    },
    redirectToBaseURL: function() {
        window.location = 'http://' + window.location.host + '/#search/' + this.collection.querystate.getHash();
    },
    onChangeDuration: function(model, duration) {
        //This is a state change event, not a dom event
        
        if (this.options.redirect_on_duration_change && duration != this.collection.initial_search.duration) {
            this.redirectToBaseURL();
        }
    },
    onChangePeriod: function(model, period) {
        //This is a state change event, not a dom event
        if (this.options.redirect_on_period_change && period != this.collection.initial_search.period) {
            this.redirectToBaseURL();
        }
    },
    onSort: function(field, desc) {
        this.onLoadingStart();


        this.collection.sortByAttribute(field, desc);

        return false;
    },
    
    onLoadingStart: function() { 

        $("#content-body-list").addClass("fadeDownList");
        setTimeout(function() { $("#content-body-list").parent().addClass("loading"); });
        return false;

    },
    onLoadingEnd: function() { 


    },
    onClear: function(e) {

        this.collection.querystate.set(this.collection.querystate.defaults);
        this.onChangeCollectionState(this.collection.querystate,true);
        return false;
    },   
    onChangeGenre: function(model, genre) {
        // this function is a model state change, not the dom event: change
        // because of this we don't need the "event" arg.
        var parts = app.homepage.collection.querystate.get('genres');
                if (undefined == parts || parts.length == 0) return false;
        _.each(parts.split(";"), function(i) { $(".selection-wrapper [data-val="+i+"]")});
        if (this.options.redirect_on_genre_change && genre != this.collection.initial_search.genre) {
            this.redirectToBaseURL();
        }
    },
    onChangeText:function(item) {
        return false;
    },
    handleSearchFormSubmit: function(event) {

        event.preventDefault();
    },

    onSearchFieldChange: function(event) {

        this.onLoadingStart();
        var value = $("#main-search-box").val();
        var search_array = {            
            q: value,
            genres: undefined,
            periods: undefined,
            durations: undefined
        };

        var search_dict = _.extend({}, search_array);

        if (value != "") {
            $("#clear-search-text-button").show();
        } else {
            $("#clear-search-text-button").hide();
        }

        $("#search-form select option[selected=selected]").each(function() {

            var fieldid = $(this).parent().attr("id");
            var fieldname = fieldid.replace("id_", "");
            var val = $(this).val();
            search_dict[fieldname] = search_dict[fieldname] == undefined ? val : search_dict[fieldname] += ";" + val;
        });
        if (JSON.stringify(search_dict) != JSON.stringify(this.collection.querystate.attributes))
        {

            this.collection.querystate.set(search_dict);
        } else { 

            $("#content-body-list").removeClass("fadeDownList").parent().removeClass("loading");

        }

    },

    addOne : function ( item ) {
        var view = new App.Views.FilmView({model:item});
        var el = view.render().el;
        return el;
    },
    addSet : function ( collection ) {
        var container = document.createDocumentFragment();
        var _this = this;
        var items = [];
        collection.each(function(film, id) { 
            var el = _this.addOne(film);
            items.push(el);
            container.appendChild(el);
        });

        this.$isotope.append(container).isotope('insert', items);        
        return true;

    },
    onLoadMore: function(e) {
        e.preventDefault();

        $("#loadMore").addClass("loading");

        setTimeout(function() { 
            if (this.addSet(this.collection.getNextPage())) {
                $("#loadMore").removeClass("loading"); 
            }
            if (!this.collection.hasNextPage()) {
                $("#loadMore").hide();
            }

        }.bind(this),200);
    
        return false;
    },

    renderResults: function(force) {
        

        if (typeof(force) == "undefined" && (typeof(this.lastattributes) != "undefined") || this.lastattributes == JSON.stringify(this.collection.querystate.changedAttributes())) {
            
            return false;
        }

        if (!this.rendering) {

            this.rendering = true;
            $("#content-body-list").addClass("fadeDownList").empty().parent().addClass("loading");
            this.$isotope.isotope("reloadItems");

            this.collection.getFirstPage();

            /* Empty result set */
            if (this.collection.length == 0) {

                $("#content-body-list").append(ich.emptyListTemplate({text: tr("No results")})).parent().removeClass("loading");
                
            }   
            
            this.addSet(this.collection);

            if (!this.collection.hasNextPage()) {
                $("#loadMore").hide();
            } else { 
                $("#loadMore").show();
            }
            this.lastattributes = JSON.stringify(this.collection.querystate.changedAttributes());
            this.rendering = false;
        }

        $("#content-body-list").removeClass("fadeDownList").parent().removeClass("loading");

        return false;        
    },
    updateUIToState: function() {
        var state = this.collection.querystate;
        // main search text box
        var query = state.get('q');

        $('#main-search-box').val(query);

        this.filterview.updateUI();

        if (query != "") {
            $("#clear-search-text-button").show();
        } else {

            $("#clear-search-text-button").hide();
        }
    },

    onChangeCollectionState: function(state,silent) {

        var trigger = silent === true ? false : true;
        this.updateUIToState();

        _.extend(this.collection.queryParams, this.collection.querystate.attributes);        
        //Update the url of the browser using the router navigate method
        app.router.navigate('search' + '?' + app.homepage.collection.querystate.getHash(), {trigger: trigger});
    },

    //Set the search state from the url
    setSearchStateFromHash: function(searchStateHash) {
        //setFromHash will trigger a change event, which then
        //loads the records and reloads the table
        this.collection.querystate.setFromHash(searchStateHash);

    },
    clearSearch: function() {
        app.collection.querystate.set("q","");
        this.onChangeCollectionState(app.collection.querystate);
        return false;
    }
});

