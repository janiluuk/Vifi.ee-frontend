/**
 *
 *  App Engine
 *
 *  author: Jani Luukkanen
 *  janiluuk@gmail.com
 *
 */
var App = {};

App = {
    Utils: {},
    Views: {
        FB: {}
    },
    Films: {},
    Player: {},
    User: {},
    Event: {},   
    Router: {},
    Settings: {
        // properties   
        version: "061014",
        debug: true,
        api_key: '12345',
        api_url: "http://gonzales.vifi.ee/api/",
        rtmp_url: "rtmp://media.vifi.ee/tv",
        hls_url: "http://media.vifi.ee:1935/vod",
        subtitles_url: "http://beta.vifi.ee/subs/",
        mp4_url: "http://gonzales.vifi.ee/zsf/"
    }
}


App.Router = Backbone.Router.extend({
    views: {},
    models: {},
    routes: {
        '': 'homePage', //
        'search': 'search',
        'search/:searchStateHash': 'search',
        'film/:id': 'showFilm',
        'films/:id': 'showFilm',
        "me": "me",
        "me/my-films": "filmcollection",
        "me/pair-device": "pairdevice",
        "subscription-plans": "subscription",
        "revoke": "revoke",
    },
    initialize: function(options) {
        options = options || {};
        this.options = options;
        this.on('route', this.onRoute, this);
        this.on('change:title', this.onChangeTitle, this);
    },
    onRoute: function(route) {
        this.trigger("page:change", route);
        app.sidemenu.closeSideBar();

        this.currentPage = route;

    },
    onChangeTitle: function (title) 
    {
        $(document).attr('title', title + ' - Vifi.ee');

    },
    search: function(searchStateHash) {
        app.homepage.browserview.trigger("minimize");

        app.homepage.browserview.onSearchFieldChange();
        var currentPage = this.currentPage;
        if (currentPage != "homePage" && currentPage != "search") {
            app.showBrowserPage();
        }
        this.trigger("change:title", "Search results");


    },
    showFilm: function(id) {
        var film = new App.Models.Film({
            id: id
        });
        var _this = this;

        film.fetch().done(function() {
            var playButtonText = "Vaata filmi (" + film.get("price") + ")";
            if (app.user.hasMovie(film)) {
                playButtonText = "Vaata edasi";
            }
            film.set("playButton", playButtonText);

            if (!app.movieview) {
                app.movieview = new App.Views.MovieDetailView({
                    model: film
                });
                app.movieview.render();

            } else {
                if (app.movieview.model.get("id") != film.id) {
                    app.movieview.model.set(film.toJSON());
                }
            }
            app.showMoviePage();
            _this.trigger("change:title", film.get("title"));

        });

    },

    homePage: function() {
        app.homepage.browserview.trigger("maximize");
        app.showBrowserPage();
        this.trigger("change:title", "Home");
    },
  
    me: function() {

        if (!this.views.profile)
            this.views.profile = new App.Views.ProfileView({
                swiperEl: '#profile-tabbar-swiper-container',
                model: app.session.get("profile"),
                swipeTo: 0
            });
        else {
            this.views.profile.model.set(app.session.get("profile").toJSON());
            this.views.profile.options.swipeTo = 0;
            this.views.profile.render();
        }
            
        app.showContentPage("me");
        this.trigger("change:title", "My profile");

    },
    subscription: function() {

        var view = new App.Views.SubscriptionView();
        view.render();
        app.showContentPage("subscription");
        this.trigger("change:title", "Subscription");


    },
    filmcollection: function() {
        
        if (!this.views.profile)
            this.views.profile = new App.Views.ProfileView({
                swiperEl: '#profile-tabbar-swiper-container',
                model: app.session.get("profile"),
                swipeTo: 1
            });
        else {
            this.views.profile.options.swipeTo = 1;
            this.views.profile.model.set(app.session.get("profile").toJSON());
            this.views.profile.render();
        }
        this.trigger("change:title", "My films");
           
        app.showContentPage("myfilms");

    },
    pairdevice: function() {

        var profile = app.session.get("profile");

        var view = new App.Views.UserPairView({
            model: profile
        });
        $('#contentpage').html(view.render().$el.html());
        this.trigger("change:title", "Pair Device");

        app.showContentPage("pairtv");

    },
   
    showErrorPage: function() {
        $('#contentpage').append(new App.Views.FB.Error().el);
    }
});