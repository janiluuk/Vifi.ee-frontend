App.Views = {};

App.Views.BaseAppView = Backbone.View.extend({
    el: $("#vifi-page-container"),
    events: { 
        'change #search-form select': 'onSearchFieldChange',
        'change #search-form input[type="text"]': 'onSearchFieldChange',
        'change #search-form input[type="hidden"]': 'onSearchFieldChange',
        'click .goTop' : 'scrollToTop',
        'submit form#main-search-form' : 'onSearchSubmit'
    },
    scrollTop: 0,
    state: false,
    initialize: function(options) {
        this.options = options || {};
        var _this = this;
        this.router = options.router;
        this.session = options.session;
        this.collection = options.browsercollection;
        this.usercollection = options.usercollection;
        this.eventhandler = options.eventhandler;

        this.browserview = new App.Views.BrowserView({
            browsercollection: options.browsercollection,
            filters: options.filters,
            sort: options.sort
        });


        this.sidemenu = new App.Views.SideMenu();
        this.topmenu = new App.Views.TopMenu();
        
        this.featuredview = new App.Views.FeaturedView({
            collection: options.browsercollection.featured()
        });


        this.render();

    },
    render: function() {
        this.topmenu.render().$el.appendTo(this.$el);
        this.sidemenu.render().$el.appendTo(this.$el);

    },
    scrollToTop: function() { 
         this.$("#content-container").stop().animate({scrollTop : 0},800);
    },
   

    showMoviePage: function() {
        
        this.scrollTop = this.$("#content-container").scrollTop();
        $(".main-wrapper:not(#moviepage)").hide();

        $("#moviepage").css( { width: $("#homepage").width() } ).fadeIn();
        this.$("#content-container").scrollTop(0);

    },
    showBrowserPage: function() {
        $(".main-wrapper:not(#homepage)").hide();

        $("#homepage").fadeIn();
        app.browserview.trigger("maximise");

        this.$("#content-container").scrollTop(this.scrollTop);
    },
    
    showSearchPage: function() {
        app.browserview.collection.onSearchFieldChange();
    }
});



App.Views.TopMenu = Backbone.View.extend({
    events: { 
        'submit form#main-search-form' : 'onSearchSubmit',
        'click #menu-dragger' : 'toggleSideBar',
        'click #search-button' : 'toggleSearchBox'
    },

    model: App.Models.User,
    el: $("#top-main-toolbar"),
    render: function() {   
        this.$el.append(ich.topmenuTemplate({}));

        return this;  
    },
    toggleSearchBox: function(e) {
        e.preventDefault();
        $('#toolbar-search-group').toggle({ "display": "block"}, {"display":"none"});
        return false;
    },
    toggleSideBar: function() {
       if( window.snapper.state().state=="left" ){
                    snapper.close();
        } else {
                    snapper.open('left');
        }
    },
     onSearchSubmit: function(e) {
        e.preventDefault();
        var q = $("#main-search-box").val();
        app.browserview.onSearchFieldChange(e);
        app.browserview.trigger("minimize");
        app.browserview.renderResults();

        return false;

    },   


});

App.Views.SideMenu = Backbone.View.extend({ 
    el: $("#side-menu-container"),
    events: {
        'click a ' : 'openDialog'

    },
    model: App.Models.User,

    initialize: function() { 
        this.enableSideMenu();
    },
    enableSideMenu: function() {
        window.snapper = new Snap({
            element: document.getElementById("content-container"),
            disable: 'right',
            maxPosition: 260
        });

       $("#menu-dragger").on('click', this.toggleSideBar);

    },
    openDialog: function() {

        $.magnificPopup.open({
          items: {
              src: ich.dialogTemplate({}),
              type: 'inline'
          },
          closeBtnInside: true
        });
    },
    
    render: function() {   
        this.$el.append(ich.sidemenuTemplate({}));
        return this;  
    }

});