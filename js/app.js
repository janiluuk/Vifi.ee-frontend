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
    Router: {},
    Views: {},
    Films: {},
    Player: {},
    User: {},
    Event: {},
    Router: {},
    Settings: {
        // properties   
        version: "0.2",
        debug: false,
        api_key: '12345',
        api_url: "http://gonzales.vifi.ee/api/",
        rtmp_url: "rtmp://media.vifi.ee/vod",
        hls_url: "http://media.vifi.ee:1935/vod"
    
    }
}


App.Router = Backbone.Router.extend({
        routes: {
            '': 'homePage', //
            'search': 'search',
            'search/:searchStateHash': 'search',

            'film/:id': 'showFilm',
            'films/:id': 'showFilm',

        },
        search: function(searchStateHash) {

            app.browserview.onSearchFieldChange();


        },
        showFilm: function(id) {
            var film = new App.Models.Film({id: id});

            
            film.fetch().done(function() {  
                app.movieview = new App.Views.MovieDetailView({model: film});
                app.movieview.render();
                app.showMoviePage();
                   
            });
        },

        homePage: function() {
            app.showBrowserPage();

        }

    });




