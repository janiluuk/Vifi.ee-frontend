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
    ContentPages: {
        'termsandconditions' : 'Kasutustingimused',
        'watchfilmsfromtv' : 'Filmi vaatamine läbi teleri',
        'faq' : 'Korduma kippuvad küsimused'
    }
}
App.Router = Backbone.Router.extend({
    views: {},
    models: {},
    routes: {
        '': 'homePage',
        'search': 'homePage',
        'search/:searchStateHash': 'search',
        'film/:id': 'showFilm',
        'films/:id': 'showFilm',
        'me': 'me',
        'return': 'purchaseReturn',
        'return/:id': 'purchaseReturn',
        'purchaseSuccess/:id' : 'purchaseSuccess',
        'error/:type' : 'showErrorPage',
        'recovery/:key/:email' : 'showRecoveryPage',
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
        $(document).attr('title', title + ' - ' + App.Settings.sitename);
        if (App.Settings.google_analytics_enabled) { 
            ga('send', 'pageview', {
              'page': this.currentPage,
              'title': title, 
            });        
        }
    },
    purchaseReturn: function() 
    {
        var films = app.user.checkPurchases();
        if (films) {
                
            app.user.updatePurchases().then(function(collection) { 
                
                _.each(films, function(item) { 

                    var id = parseInt(item.vod_id);
                    var title = app.usercollection.get(id);                                                          
                    
                    if (title) {
                        if (!this.returnview)
                            this.returnview = new App.Views.PostPurchaseDialogView({model: title, session:app.user.session});
                        else
                            this.returnview.model.set(title.toJSON());
                        $.removeCookie('film', { path: '/', domain: '.'+App.Settings.domain });

                        this.returnview.render();
                        return false;
                    }   
                }.bind(this));
            }.bind(this));
        }
       return false; 
    },
    search: function(searchStateHash) {

        app.collection.querystate.setQueryString();
        var currentPage = this.currentPage;
        if (currentPage != "homePage" && currentPage != "search") {
            app.showBrowserPage();
        }
        this.trigger("change:title", "Search results");
    },
    showFilm: function(id, autoplay) {
        var film = app.collection.fullCollection.get(id);
            if (!film) {
                film = new App.Models.Film({
                id: id
            });
        }
        
        var _this = this;

        var films = app.user.checkPurchases();

        /*
         *  Check if user has purchases, navigate to confirmation page if so.
         */
        
        if (films) {
            this.navigate("/purchaseReturn", {
                trigger: true
            });  
        }        
        
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
            var url = film.get("seo_friendly_url");
            _this.navigate(url, {
                trigger: false
            });            
            app.showMoviePage();
            if (autoplay === true) app.movieview.playMovie();
            _this.trigger("change:title", film.get("title"));

        });

    },
    purchaseSuccess: function(id) {
        var title = app.usercollection.get(id);                                                          
                
        if (!title) return false;
        
        if (!this.returnview)
                this.returnview = new App.Views.PostPurchaseDialogView({model: title, session:app.user.session});
        else
        this.returnview.model.set(title.toJSON());
        this.returnview.render();
        return false;

    },
    homePage: function() {
        var currentPage = this.currentPage;

        if (currentPage != "homePage" && currentPage != "search") {
            app.showBrowserPage();  
        }
        if (currentPage == "showFilm") {
            app.collection.querystate.setQueryString();
        }

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
            model: profile,
            el: "#contentpage"
        });

        $('#contentpage').empty();
        this.views.pairview.render();
        this.trigger("change:title", "Pair Device");

        app.showContentPage("pairtv");

    },
   
    showErrorPage: function(type) {
        this.views.errorview = new App.Views.Error({type: type});
        this.views.errorview.render();
        this.trigger("change:title", "Error!");
        app.showContentPage("error");
            
    },
    showRecoveryPage: function(key, email) {
            this.views.recoveryview = new App.Views.RecoveryView({key: key, email: email});
            this.views.recoveryview.render();
            this.trigger("change:title", "Recovery form");
            app.showContentPage("recovery");
            
    },
    showContactPage: function() {
        this.views.contactview = new App.Views.ContactView();
        this.views.contactview.render();
        if (typeof(google) == "undefined") { 
            $("<script />", {
                src: 'http://maps.google.com/maps/api/js?sensor=false&callback=gMapsCallback',
                type: 'text/javascript'
            }).appendTo("head");

            $(window).bind('gMapsLoaded',app.router.init_map);

        } else { 
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
        var infowindow = new google.maps.InfoWindow({content:"<b>Vifi OÜ</b><br/>Roseni 5<br/> Tallinn" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});
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
window.gMapsCallback = function(){
    $(window).trigger('gMapsLoaded');
}