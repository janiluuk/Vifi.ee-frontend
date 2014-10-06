    function initApp(data) {
        // check for hash and set state accordingly

        if (window.location.hash.indexOf('#search') != -1) {
            // start with empty state because Router will configure it later.
            var state = new App.Utils.State();
            var hash = window.location.hash.replace('#search', '');
            state.setFromHash(decodeURIComponent(hash));
       
        } else {
            var state = new App.Utils.State(data.search);
        }

		window.app = {};
        window.$log = function(log) { console.log(log); };


        var genres = new App.Films.GenreCollection(data.genres);
        var usercollection = new App.Collections.UserCollection();

        var browsercollection = new App.Collections.PaginatedCollection(
            data.results, {
            mode: "client",
            querystate: state,
            genres: genres,
            pagination: data.pagination,
            search: data.search
        });
        var session = new App.User.Session();

	    var periods = new App.Collections.FilterCollection([{'id': '2014-2014', 'name': '2014'}, {'id': '2013-2013', 'name': '2013'}, {'id': '2000-2012', 'name': '00-ndad'},{'id': '1990-2000', 'name': '90-ndad'}, {'id': '1980-1990', 'name': '80-ndad'},{'id': '1900-1980', 'name': '60-70 ndad'} ]);
	    var durations = new App.Collections.FilterCollection([{'id': '0-30', 'name': '0-30min'}, {'id': '30-60', 'name': '30-60min'}, {'id': '60', 'name': '60+min'}]);
        var sort = new App.Collections.SortCollection([{'id': 'date',  'name': 'Most recent', 'default' : true}, {'id': 'name', 'name': 'A-Z'}, {'id': 'popularity', 'name': 'Most watched'}]);
        var router = new App.Router();
        var eventhandler = _.extend({}, Backbone.Events);

		window.app = new App.Views.BaseAppView({session: session, usercollection: usercollection, router: router, eventhandler: eventhandler, browsercollection: browsercollection, sort: sort, filters: { genres: genres, durations: durations, periods: periods}});		
		window.history = Backbone.history.start();
}


$(document).ready(function() {

	$.getJSON("http://backend.vifi.ee/api/search?api_key=12345&jsoncallback=?", initApp, "jsonp")

});