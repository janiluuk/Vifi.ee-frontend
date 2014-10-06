App.Views.SearchView = Backbone.View.extend({ 
    el: '#searchpage',
    state: false,
      model: App.Films.FilmCollection,

    initialize: function(options) {
      this.options = options;
      this.collection = options.collection;
      this.state = options.collection.state;
      this.render();

    },

    render: function() { 

          this.$el.append(ich.searchPageTemplate(this.collection.toJSON()));
      return this;
      
    },





})