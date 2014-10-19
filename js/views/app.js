App.Views = {};

App.Views.BaseAppView = Backbone.View.extend({
    el: $("#vifi-page-container"),
    events: { 
        'change #search-form select': 'onSearchFieldChange',
        'change #search-form input[type="text"]': 'onSearchFieldChange',
        'change #main-search-box input[type="text"]': 'onSearchFieldChange',

        'change #search-form input[type="hidden"]': 'onSearchFieldChange',
        'click .goTop' : 'scrollToTop',
        'submit form#main-search-form' : 'onSearchSubmit'
    },
    scrollTop: 0,
    state: false,
    initialize: function(options) {
        this.options = options || {};
        var _this = this;
        this.session = options.session;
        this.user = options.session.get("profile");
        
        this.collection = options.collection;
        this.usercollection = options.usercollection;
        this.evt = options.eventhandler;
        this.template = options.template;
        this.fbuser = new App.User.FBPerson(); // Holds the authenticated Facebook user
        options.model = this.user;

        this.browserview = new App.Views.BrowserView({
                collection: options.collection,
                filters: options.filters,
                sort: options.sort
        });
        this.featuredview = new App.Views.FeaturedView({
            collection: options.collection.featured()
        });
        _.bindAll(this, 'render', 'showBrowserPage');
            
        this.sidemenu = new App.Views.SideMenu({model: this.user});

        this.topmenu = new App.Views.TopMenu({model: this.user});
        this.homepage = new App.Views.Homepage(options);
        this.render();
        this.router = new App.Router();
    },
    render: function() {
       
            this.topmenu.render();
            this.sidemenu.render(); 
            this.featuredview.render();
            this.browserview.render();
            return this;
    },
    scrollToTop: function() { 
         this.$("#content-container").stop().animate({scrollTop : 0},800);
    },
    showMoviePage: function() {
        
        this.scrollTop = this.$("#content-container").scrollTop();
        $(".main-wrapper:not(#moviepage)").hide();

        $("#moviepage").css( { width: $("#content-container").width() } ).fadeIn();
        this.$("#content-container").scrollTop(0);

    },
    showBrowserPage: function() {
        $(".main-wrapper:not(#homepage)").hide();
        app.sidemenu.closeSideBar();

        $("#homepage").show();
        app.browserview.filterview.filterbarview.enableCarosel();
        this.$("#content-container").scrollTop(this.scrollTop);
        app.browserview.$isotope.isotope('layout');
    },
    
    showSearchPage: function() {
        app.browserview.collection.onSearchFieldChange();
    },
    showContentPage: function(id) {
        $(".main-wrapper:not(#contentpage)").hide();
        if (id) {
            $(".side-menu-list a.active").removeClass("active");
            $(".side-menu-list a#menu-"+id).addClass("active");

        }
        app.sidemenu.closeSideBar();
        this.$("#content-container").scrollTop(0);

        $("#contentpage").show();
    }
});

App.Views.Homepage = Backbone.View.extend({
    el: $("#homepage"),
    initialize: function(options) {


    },
    render: function() {




        return this;  
    },

});

App.Views.TopMenu = Backbone.View.extend({
    events: { 
        'submit form#main-search-form' : 'onSearchSubmit',
        'click #search-button' : 'toggleSearchBox',
        'click #menu-dragger' : 'toggleSideBar',
        'click .login' : 'login',
        'click .logout' : 'logout'
    },
    model: App.User.FBPerson,
    el: $("#top-main-toolbar"),

    initialize: function(options) {
        if (options.model) this.model = options.model;
        this.model.on('change', this.render, this);
        this.template = _.template(app.template.get('topmenu'));

    },
    render: function() {
        var search = this.$("#main-search-box");
        
        if (search) {
            var q = $(search).val();

        }
        this.$el.html(this.template(this.model.toJSON()));
        
        if (q) { 
            this.$("#main-search-box").val(q);
        }

        return this;  
    },
    login: function(e) {

        $(document).trigger("login");
        return false;
    },
    logout: function (e) {
        app.router.navigate("/", {trigger:true});
        $(document).trigger('logout');

        return false;
    },
    toggleSearchBox: function(e) {
        e.preventDefault();
        $('#toolbar-search-group').toggle({ "display": "block"}, {"display":"none"});
        return false;
    },
    toggleSideBar: function(e) {
        if (e) e.preventDefault();
        app.sidemenu.toggleSideBar();

        return false;

    },
   
    onSearchSubmit: function(e) {
        e.preventDefault();

        app.browserview.onSearchFieldChange(e);
        app.browserview.trigger("minimize");
        
        return false;
    },   


});

App.Views.SideMenu = Backbone.View.extend({ 
    el: $("#side-menu-container"),
    state: 'closed',
    events: { 
        'click a.register-button' : 'toggleRegisterForm',
        'click .logout' : 'logout',
        'click .btn.facebook' : 'login'
    },
    initialize: function(options) { 
        if (options.model) this.model = options.model;
        _.bindAll(this, 'enableSideMenu', 'toggleSideBar', 'render');
        this.listenTo(this.model, "change", this.render, this);
        this.enableSideMenu();
    },

    logout: function(e) { 
        e.preventDefault();
        $(document).trigger("logout");
    },
    login: function(e) { 
        e.preventDefault();
        $(document).trigger("login");
    },
    toggleRegisterForm: function(e) {
        e.preventDefault();
        $("form#user-register, form#user-login").toggle(); 
        return false;
    },
    enableSideMenu: function() {

        window.snapper = new Snap({
            element: document.getElementById("content-container"),
            disable: 'right',
            maxPosition: 260
        });
    },
   
    toggleSideBar: function() {

        if (!window.snapper) return false;
        if ($("body").hasClass("snapjs-left")) this.state = "left"; else this.state="closed";
        if( this.state=="left" ){
                    window.snapper.close();
                    this.state = "closed";
        } else {
                    window.snapper.open('left');
                    this.state = "left";
        }

    },
    closeSideBar: function() {
        if (!window.snapper) return false;
        window.snapper.close();
        this.state = "closed";

    },
 
    render: function() {   
        this.$el.html(ich.sidemenuTemplate(this.model.toJSON()));
        return this;  
    }

});