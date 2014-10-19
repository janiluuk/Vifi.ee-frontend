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
        debug: false,
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
        'welcome': 'welcome',
        'film/:id': 'showFilm',
        'films/:id': 'showFilm',
        "me": "me",
        "me/friends": "myfriends",
        "me/my-films": "filmcollection",
        "me/pair-device": "pairdevice",
        "subscription-plans": "subscription",
        "person/:id": "person",
        "account": "account",

        "person/:id/friends": "friends",
        "person/:id/mutualfriends": "mutualfriends",
        "person/:id/feed": "feed",
        "revoke": "revoke",
        "post": "post",
        "postui": "postui"
    },
    initialize: function(options) {
        options = options || {};
        this.options = options;

        // Caching the Welcome View
        this.on('route', this.onRoute, this);

        // this.welcomeView = new App.Views.FB.Welcome({model: fb.user});
    },
    onRoute: function(route) {
        this.trigger("page:change", route);        
        this.currentPage = route;

    },
    search: function(searchStateHash) {
        app.browserview.trigger("minimize");

        app.browserview.onSearchFieldChange();
        var currentPage = this.currentPage;
        if (currentPage != "homePage" && currentPage != "search") {
            app.showBrowserPage();
        }


    },
    showFilm: function(id) {
        var film = new App.Models.Film({
            id: id
        });

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
                    app.movieview.model = film;
                    app.movieview.render();
                }
            }

            app.showMoviePage();
        });
    },

    homePage: function() {
        app.browserview.trigger("maximize");
        app.showBrowserPage();
    },
  

    welcome: function() {
        // $('#contentpage').html(app.welcomeview.el);
    },

    person: function(id) {

        var self = this;

        try {
            FB.api("/" + id, function(response) {
                if (response.error) {
                    self.showErrorPage();
                } else {
                    $('#contentpage').html(new App.Views.FB.Person({
                        model: new App.User.FBPerson(response)
                    }).el);
                }
            });
        } catch (e) {
            this.showErrorPage();
        }
        app.showContentPage();

    },
    me: function() {

        var profile = app.session.get("profile");
        if (!this.views.profile)
            this.views.profile = new App.Views.ProfileView({
                model: profile
            });
        else
            this.views.profile.model = profile;
        this.views.profile.render();
        app.showContentPage("me");

    },
    subscription: function() {

        var view = new App.Views.SubscriptionView();
        view.render();
        app.showContentPage("subscription");

    },
    filmcollection: function() {

        var collection = app.usercollection;

        this.views.usercollection = new App.Views.UserCollectionView({
            carousel: true,
            carouselShowFilms: 5,
            collection: collection,
            el: $('#contentpage')
        });
        $('#contentpage').html(this.views.usercollection.render().$el.html());


        app.showContentPage("myfilms");

    },
    pairdevice: function() {

        var profile = app.session.get("profile");

        var view = new App.Views.UserPairView({
            model: profile
        });
        $('#contentpage').html(view.render().$el.html());

        app.showContentPage("pairtv");

    },
    friends: function(id) {
        var self = this;

        try {
            FB.api("/" + id + "/friends?limit=20", function(response) {
                if (response.error) {
                    self.showErrorPage();
                } else {
                    $('#contentpage').html(new App.Views.FB.Friends({
                        model: new Backbone.Model(response)
                    }).el);
                }
            });
        } catch (e) {
            this.showErrorPage();
        }

        app.showContentPage();

    },

    mutualfriends: function(id) {
        var self = this;
        $('#contentpage').html('<div class="breadcrumb api">FB.api("/' + id + '/mutualfriends");</div>');
        try {
            FB.api("/" + id + "/mutualfriends?limit=20", function(response) {
                if (response.error) {
                    self.showErrorPage();
                } else {
                    $('#contentpage').append(new App.Views.FB.Friends({
                        model: new Backbone.Model(response)
                    }).el);
                }
            });
        } catch (e) {
            this.showErrorPage();
        }
        app.showContentPage();

    },

    feed: function(id) {
        var self = this;
        $('#contentpage').html('<div class="breadcrumb api">FB.api("/' + id + '/feed");</div>');
        try {
            FB.api("/" + id + "/feed?limit=20", function(response) {
                if (response.error) {
                    self.showErrorPage();
                } else {
                    $('#contentpage').append(new App.Views.FB.Feed({
                        model: new Backbone.Model(response)
                    }).el);
                }
            });
        } catch (e) {
            this.showErrorPage();
        }
        app.showContentPage();

    },

    post: function() {
        $('#contentpage').html('<div class="breadcrumb api">FB.api("/me/feed", "post", data);</div>');
        $('#contentpage').append(new App.Views.FB.Post().el);
        app.showContentPage();

    },

    postui: function() {
        $('#contentpage').html('<div class="breadcrumb api">FB.ui();</div>');
        $('#contentpage').append(new App.Views.FB.PostUI().el);
        app.showContentPage();

    },

    revoke: function() {
        $('#contentpage').html('<div class="breadcrumb api">FB.api("/me/permissions", "delete");</div>');
        $('#contentpage').append(new App.Views.FB.Revoke().el);
        app.showContentPage();

    },

    showErrorPage: function() {
        $('#contentpage').append(new App.Views.FB.Error().el);
    }
});