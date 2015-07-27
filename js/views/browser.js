App.Views.BrowserPage = Backbone.View.extend({
    model: App.Models.Film,
    el: '#browser-content',
    events: {
        'change #search-form select': 'onSearchFieldChange',
        'change #search-form input[type="text"]': 'onSearchFieldChange',
        'change #search-form input[type="hidden"]': 'onSearchFieldChange',
        'click #loadMore': 'onLoadMore'
    },
    initialize: function(options) {
        this.options = options;

        this.collection = options.collection;
        this.collection.options.genres.bind('all', this.setGenreDropDown, this);
        this.collection.fullCollection.bind('reset', this.renderResults, this);
        this.collection.querystate.bind('change', this.onChangeCollectionState, this);
        this.collection.querystate.bind('change:genres', this.onChangeGenre, this);
        this.collection.querystate.bind('change:durations', this.onChangeDuration, this);
        this.collection.querystate.bind('change:years', this.onChangeYear, this);
        this.filterview = new App.Views.FilterView({
            filters: this.options.filters,
            sort: this.options.sort,
            state: this.collection.querystate,
            initialState: options.initialState
        });
        this.filterview.bind('filter-bar:sort', this.onSort, this);
        this.filterview.bind('filter-bar:clear', this.onClear, this);
        this.searchview = new App.Views.SearchView({
            model: this.collection.querystate
        });
        this.searchview.render();
        _.bindAll(this, 'render', 'renderResults', 'initEvents', 'applyIsotope');
        this.initEvents();
    },
    initEvents: function() {
        this.on("maximize", function() {
            var height = this.originalHeight;
            var altHeight = $("#featured-swiper-container").height();
            height = Math.max(height, altHeight);            
            $("#front-page-slider").css({
                    "min-height": height,
                    "height": height,
                    "opacity": 0
                });            
            $("#search").animate({
                "opacity": 0,
                "height": height,
                "min-height": height
            }, 200, false, function() {
                $(this).hide();

                $("#front-page-slider").show().animate({
                    "opacity": 1
                }, 400,false, function() {
                    setTimeout(function() {   
                        if (window.mySwiper) window.mySwiper.resizeFix();
                    },250);
                }.bind(this));
            });
        });
        this.on("minimize", function() {

            this.originalHeight = $("#front-page-slider").height();
            var height = $(".feature-wrapper#search").css("min-height");

            $("#search").css({
                    "height": height,
                    "min-height": height,
                    "opacity" : 0
            });
            $("#front-page-slider").animate({
                "min-height": height,
                "height": height,
                "opacity": 0
            }, 325, false, function() {

                $("#search").show().animate({
                    "opacity": 1
                }, 200);
                $(this).hide();
            });
        });
    },
    render: function() {
        this.$el.html(ich.browserPageTemplate());
        this.filterview.render();
        this.applyIsotope();
        
        return this;
    },
    applyIsotope: function() {
        /* Enable isotope on the results */
        this.$isotope = $("#content-body-list").isotope({
            layoutMode: 'fitRows',
            resizable: true,
            itemSelector: '#content-body-list .item',
            transitionDuration: '0.7s',
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
                duration: 600,
                queue: false,
            }
        });
        this.$isotope.isotope('on', 'layoutComplete', function() { 
            setTimeout(function() {
                App.Utils.lazyload();
            }, 500);
        });
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
        setTimeout(function() {
            $("#content-body-list").parent().addClass("loading");
        }, 200);
        return false;
    },
    onLoadingEnd: function() { 
        $("#content-body-list").removeClass("fadeDownList");
        setTimeout(function() {
            $("#content-body-list").parent().removeClass("loading");
        }, 350);
        return false;
    },
    onClear: function(e) {
        this.collection.querystate.set(this.collection.querystate.defaults);
        this.onChangeCollectionState(this.collection.querystate, true);

        return false;
    },
    onChangeGenre: function(model, genre) {
        // this function is a model state change, not the dom event: change
        // because of this we don't need the "event" arg.
        var parts = app.homepage.collection.querystate.get('genres');
        if (undefined == parts || parts.length == 0) return false;
        _.each(parts.split(";"), function(i) {
            $(".selection-wrapper [data-val=" + i + "]")
        });
        if (this.options.redirect_on_genre_change && genre != this.collection.initial_search.genre) {
            this.redirectToBaseURL();
        }
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

        $("#search-form select option[selected=selected]").each(function() {
            var fieldid = $(this).parent().attr("id");
            var fieldname = fieldid.replace("id_", "");
            var val = $(this).val();

            search_dict[fieldname] = search_dict[fieldname] == undefined ? val : search_dict[fieldname] += ";" + val;
        });

        if (JSON.stringify(search_dict) != JSON.stringify(this.collection.querystate.attributes)) {
            this.collection.querystate.set(search_dict);

        } else {
            this.onLoadingEnd();
        }
    },
    addOne: function(item) {
        var view = new App.Views.FilmView({
            model: item
        });
        return view.render().el;
    },
    addSet: function(collection) {
        var container = document.createDocumentFragment();
        var _this = this;
        var items = [];
        collection.each(function(film, id) {
            var el = _this.addOne(film);
            items.push(el);
            container.appendChild(el);
        });
        this.$isotope.append(container).isotope('insert', items);
        delete(items);
        delete(container);

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
        }.bind(this), 300);
        return false;
    },
    renderResults: function(force) {

        if (typeof(force) == "undefined" && ((typeof(this.lastattributes) != "undefined") || this.lastattributes == JSON.stringify(this.collection.querystate.changedAttributes()))) {
            return false;
        }
        if (!this.rendering) {
            this.rendering = true;
            $("#content-body-list").addClass("fadeDownList").empty().parent().addClass("loading");
            this.$isotope.isotope("reloadItems");
            this.collection.getFirstPage();
            /* Empty result set */
            if (this.collection.length == 0) {
                $("#content-body-list").append(ich.emptyListTemplate({
                    text: tr("No results")
                })).parent().removeClass("loading");
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
        this.onLoadingEnd();
        return false;
    },
    onChangeCollectionState: function(state, silent) {
        var trigger = silent === true ? false : true;
        _.extend(this.collection.queryParams, this.collection.querystate.attributes);
        //Update the url of the browser using the router navigate method
            app.router.navigate('search' + '?' + app.homepage.collection.querystate.getHash(), {
                trigger: trigger
            });
    }
});