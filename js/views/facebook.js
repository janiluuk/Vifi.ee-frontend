App.Views.FB = {};

App.Views.FB.Login = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(app.template.get('login'));
        this.model.on("change", this.render, this);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    events: {
        'click .login': 'login',
        'click .logout': 'logout'
    },

    login: function (e) {
        $(document).trigger('login');
        return false;
    },

    logout: function (e) {
        $(document).trigger('logout');
        return false;
    }

});

App.Views.FB.Person = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(app.template.get('person'));
        this.model.on("change", this.render, this);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }

});

App.Views.FB.Friends = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(app.template.get('friends'));
        this.model.on("change", this.render, this);
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    },

    events: {
        'click .next': 'next',
        'click .previous': 'previous'
    },

    next: function () {
        this.fetch(this.model.get('paging').next);
        return false;
    },

    previous: function () {
        this.fetch(this.model.get('paging').previous);
        return false;
    },

    fetch: function (url) {
        var self = this;
        $.ajax({url:url, dataType:"json"}).done(function (response) {
            self.model.set(response);
        }).fail(function (e) {
                alert('Error fetching data');
            });
    }

});


App.Views.FB.Post = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(app.template.get('post'));
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    events: {
        "click .post": "postMessage"
    },

    postMessage: function () {
        var status = {
                name:$('.itemName').val(),
                link:$('.link').val(),
                picture:$('.picture').val(),
                caption:$('.caption').val(),
                description:$('.description').val()
            };
        FB.api('/me/feed', 'post', status, function(response) {
            if (response && response.id) {
                alert('Your post was published.');
            } else {
                alert('Your post was not published.');
            }
        });
        return false;
    }

});

App.Views.FB.PostUI = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(app.template.get('postui'));
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

    events: {
        "click .post": "postMessage"
    },

    postMessage: function () {
        FB.ui(
            {
                method:'feed',
                name:'Sociogram Application',
                link:'https://coenraets.org/blog/sociogram',
                picture:'https://coenraets.org/sociogram/img/sociogram.jpg',
                caption:'by Christophe Coenraets',
                description:'Sociogram is a simple application that shows how to use the Facebook JavaScript SDK and the Graph API.'
            },
            function (response) {
                if (response && response.id) {
                    alert('Your post was published.');
                } else {
                    alert('Your post was not published.');
                }
            }
        );
        return false;
    }

});

App.Views.FB.Revoke = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(app.template.get('revoke'));
        this.render();
    },

    render: function () {
        this.$el.html(this.template());
        return this;
    },

});
