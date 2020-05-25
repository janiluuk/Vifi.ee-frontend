App.Views.FilmView = Backbone.View.extend({
    model: App.Models.Film,
    tagName: "div",
    className: "item",
    events: {
        "click ": "showMoviePage"
    },
    initialize: function() {
        this.listenTo(this.model, "change", this.render, this);
        this.listenTo(this.model, "remove", this.remove, this);
        this.listenTo(this.model, "destroy", this.remove, this);
    },
    render: function() {
        this.$el.html(ich.filmitemTemplate(this.model.toJSON()));
        return this;
    }
});
_.extend(App.Views.FilmView.prototype, {
    showMoviePage: function(e) {
        e.preventDefault();
        var url = this.model.get("seo_friendly_url");
        app.router.navigate(url, {
            trigger: true
        });
        return false;
    }
});
App.Views.UserFilmView = Backbone.View.extend({
    model: App.User.Ticket,
    tagName: "div",
    className: "item",
    events: {
        "click a": "showMoviePage"
    },
    initialize: function() {
        this.listenTo(this.model, "change", this.render, this);
        this.listenTo(this.model, "remove", this.remove, this);
    },
    showMoviePage: function(e) {
        var film = app.collection.originalCollection.get(this.model.get("id"));
        if (typeof film == "undefined") return false;
        var url = film.get("seo_friendly_url");

        app.router.navigate(url, {
            trigger: true
        });
        e.preventDefault();
        return false;
    },
    render: function() {
        if (this.model.isExpired()) {return this;}
        var filmitem = app.collection.originalCollection.get(this.model.get("vod_id"));
        if (filmitem) {
        this.model.set("poster_url", filmitem.get("poster_url"));
        this.model.set("seo_friendly_url", filmitem.get("seo_friendly_url"));
        this.$el.html(ich.userfilmitemTemplate(this.model.toJSON()));
        }
        return this;
    }
});
App.Views.QuickbarView = Backbone.View.extend({
    model: App.User.Ticket,
    tagName: "div",
    className: "item",
    events: {
        "click a": "showMoviePage"
    },
    initialize: function() {
        this.listenTo(this.model, "change", this.render, this);
        this.listenTo(this.model, "remove", this.remove, this);
    },
    showMoviePage: function(e) {
        var film = app.collection.originalCollection.get(this.model.get("id"));
        if (typeof film == "undefined") return false;
        var url = film.get("seo_friendly_url");

        app.router.navigate(url, {
            trigger: true
        });
        e.preventDefault();
        return false;
    },
    render: function() {
        var filmitem = this.model.getFilm();
        if (typeof filmitem == "undefined") return false;
        this.$el.html(ich.userfilmitemTemplate(filmitem.toJSON()));
        return this;
    }
});
