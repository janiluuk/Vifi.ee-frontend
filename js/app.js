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
    MediaPlayer: {},
    User: {},
    Event: {},   
    Settings: {
        // properties   
        version: "061014",
        debug: true,
        language: 'est',
        api_key: '298fh23hhdff11',
        rt_api_key: 'ckggf2er2ur93h6kjmxkem5m',
        api_url: "http://gonzales.vifi.ee/api/",
        rtmp_url: "rtmp://media.vifi.ee/tv",
        hls_url: "http://media.vifi.ee:1935/vod",
        subtitles_url: "http://beta.vifi.ee/subs/",
        mp4_url: "http://gonzales.vifi.ee/zsf/",
        speedtest_url: 'http://backend.vifi.ee/files/bwtest.jpg'
    },
    Translations: {
        'est' : { 
            'eesti' : 'Eesti',
            'english' : 'Inglise',
            'Clear' : 'Tühista',
            'Change password': 'Vaheta parool',
            'Create password': 'Loo parool'

        },
        'en' : { 
            'eesti' : 'Estonian',
            'english' : 'English'
        }
    },
    ContentPages: {
        'termsandconditions' : 'Kasutustingimused'


    }
}


App.Router = Backbone.Router.extend({
    views: {},
    models: {},
    routes: {
        '': 'homePage',
        'search': 'search',
        'search/:searchStateHash': 'search',
        'film/:id': 'showFilm',
        'films/:id': 'showFilm',
        'me': 'me',
        'contact' : 'showContactPage',
        'me/my-films': 'filmcollection',
        'me/pair-device': 'pairdevice',
        'subscription-plans': 'subscription',
        'revoke': 'revoke',
        'page/:id': 'showContentPage'
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
    
        if (!this.views.subscriptionview) 
        this.views.subscriptionview = new App.Views.SubscriptionView({subscriptions: app.options.subscriptions});

        this.views.subscriptionview.render();
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

        if (!this.views.pairview)
        this.views.pairview = new App.Views.UserPairView({
            model: profile
        });

        $('#contentpage').empty().append(this.views.pairview.render().$el.html());
        this.trigger("change:title", "Pair Device");

        app.showContentPage("pairtv");

    },
   
    showErrorPage: function() {
        $('#contentpage').append(new App.Views.FB.Error().el);
    },
    showContactPage: function() {
        if (typeof(google) == "undefined")
       $("<script />", {
            src: 'http://maps.google.com/maps/api/js?sensor=false',
            type: 'text/javascript'
        }).appendTo("head");
        if (!this.views.contactview) { 
            this.views.contactview = new App.Views.ContactView();
            this.views.contactview.render();
            this.init_map();
        }
        this.views.contactview.$el.fadeIn();
        this.trigger("change:title", "Contact Us!");

        app.showContentPage("contact");

    },
    init_map: function() {
        if (typeof(google) == "undefined") { 
            setTimeout(function() { this.init_map(); }.bind(this),400);
            return false;
        }

        var myOptions = {zoom:15,center:new google.maps.LatLng(59.43795770000001,24.75549920000003),mapTypeId: google.maps.MapTypeId.ROADMAP};
        var map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
        var marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(59.43795770000001, 24.75549920000003)});
        var infowindow = new google.maps.InfoWindow({content:"<b>Vificom</b><br/>Roseni 5<br/> Tallinn" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
        infowindow.open(map,marker);
    },
    showContentPage: function(template) {

        var name = template.split("-").join("");
        var title = _.find(App.ContentPages, function(title, idx) { return idx == name });


        this.views.contentview = new App.Views.ContentView({title: title, template: name+"Template"});
        this.views.contentview.render().$el.fadeIn();
        app.showContentPage(name);

    }
});