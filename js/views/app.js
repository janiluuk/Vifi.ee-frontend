
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
        this.session = options.session;
        this.user = options.session.get("profile");
        this.collection = options.collection;
        this.usercollection = options.usercollection;
        this.subscriptions = options.subscriptions;

        this.evt = options.eventhandler;
        this.template = options.template;
        this.player = options.player;
        this.fbuser = new App.User.FBPerson(); // Holds the authenticated Facebook user
        options.model = this.user;

        _.bindAll(this, 'render', 'showBrowserPage');
        this.api = new App.Utils.Api({model: this.session});
        this.notification = new App.Utils.Notification({model: this});
        this.notification.attach(this.session);
        
        this.sidemenu = new App.Views.SideMenu({model: this.user, session: this.session});
        this.topmenu = new App.Views.TopMenu({model: this.user});
        this.homepage = new App.Views.HomePage(options);
        this.render();
        this.router = new App.Router();
    },
    render: function() {
       
            this.topmenu.render();
            this.sidemenu.render(); 
            this.homepage.render();
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

        $("#homepage").css("visibility", "visible").show();
        app.homepage.browserview.filterview.filterbarview.enableCarosel();
        
        if (this.scrollTop == 0) { app.homepage.browserview.renderResults(); }
        else 
        $("#content-container").scrollTop(this.scrollTop);

        app.homepage.browserview.$isotope.isotope('layout');

    },
    showSearchPage: function() {
        app.homepage.browserview.collection.onSearchFieldChange();
    },
    showContentPage: function(id) {
        $(".main-wrapper:not(#contentpage)").hide();

        if (id) {
            $(".side-menu-list a.active").removeClass("active");
            $(".side-menu-list a#menu-"+id).addClass("active");

        }   
        this.$("#content-container").scrollTop(0);

        $("#contentpage").show();
    }
});

App.Views.HomePage = Backbone.View.extend({
    el: $("#homepage"),
    initialize: function(options) {   
        this.browserview = new App.Views.BrowserPage({
                collection: options.collection,
                filters: options.filters,
                sort: options.sort
        });
        this.featuredview = new App.Views.FeaturedView({
            collection: options.collection.featured()
        });

    },
    render: function() {
            this.featuredview.render();
            this.browserview.render();

        return this;  
    },

});

App.Views.TopMenu = Backbone.View.extend({
    events: { 
        'submit form#main-search-form' : 'onSearchSubmit',
        'click #search-button' : 'toggleSearchBox',
        'click #menu-dragger' : 'toggleSideBar',
        'click .login' : 'login',
        'click .logout' : 'logout',
        'click #clear-search-text-button' : 'clearSearch'
    },
    model: App.User.FBPerson,
    el: $("#top-main-toolbar"),

    initialize: function(options) {
        if (options.model) this.model = options.model;
        this.model.on('change', this.render, this);

    },
    render: function() {
        var search = this.$("#main-search-box").val();
        
        this.$el.html(ich.topmenuTemplate(this.model.toJSON()));
        
            this.$("#main-search-box").val(search);
        if (search != "") {
            $("#clear-search-text-button").show();
        } else {
            $("#clear-search-text-button").hide();
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

        $('#toolbar-search-group').toggleClass("pullDownRight");
        $('#toolbar-search-group').toggleClass("pullUpRight",!$('#toolbar-search-group').hasClass("pullDownRight") );
        return false;
    },
    toggleSideBar: function(e) {
        app.sidemenu.toggleSideBar();
        return false;
    },
    clearSearch: function(e) {
        e.stopPropagation();
        e.preventDefault();
        this.$("#main-search-box").val("");
        app.homepage.browserview.onSearchFieldChange(e);
        return false;
    },
    onSearchSubmit: function(e) {
        e.preventDefault();
        app.homepage.browserview.onSearchFieldChange(e);
        app.homepage.browserview.trigger("minimize");
        
        return false;
    },   


});

App.Views.SideMenu = Backbone.View.extend({ 
    el: $("#side-menu-container"),
    state: 'closed',
    events: { 
        'click .logout' : 'logout'

    },

    initialize: function(options) { 
        var options = options || {};

        if (options.model) this.model = options.model;
        if (options.session) this.session = options.session;

        _.bindAll(this, 'enableSideMenu', 'toggleSideBar', 'render');
        this.listenTo(this.session.profile, "user:login", this.render, this);
        this.listenTo(this.session.profile, "user:logout", this.render, this);

        this.loginForm = new App.Views.LoginForm({session: this.session});

        this.enableSideMenu();
    },

    enableSideMenu: function() {

        window.snapper = new Snap({
            element: document.getElementById("content-container"),
            disable: 'right',
            maxPosition: 260
        });
    },
    logout: function(e) { 
        e.preventDefault();
        $(document).trigger("logout");
        this.render();
        
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
        var activeEl = this.$el.find("a.active:first");

        this.$el.html(ich.sidemenuTemplate(this.model.toJSON()));
        var activeId = false;

        if (activeEl) var activeId = $(activeEl).attr("id");

        $("#side-menu-content-pages li:nth(1)").click(function(e) {  e.preventDefault();app.trigger("notice", "Use <strong> < strong > tag</strong> to highlight something and <a>a link like this</a> to give links.");return false;  } );
        $("#side-menu-content-pages li:nth(2)").click(function(e) { e.preventDefault(); app.trigger("success", "Use <strong> < strong > tag</strong> to highlight something and <a>a link like this</a> to give links. Remember that the textbox wont get over 3 lines.");return false; } );
        this.assign(this.loginForm, "#login-register-form");
        if (activeId) $("#"+activeId).addClass("active");
        
        return this;  
    }

});

App.Views.CarouselView = Backbone.View.extend({
    swiperState: false,
    changeTab: function(e) {
        e.preventDefault();

        var attr = $(e.currentTarget).attr("data-rel");
        var el = $("#"+attr);
        $(e.currentTarget).siblings().removeClass("active");
        $(el).siblings().removeClass("active").fadeOut();
        $(el).fadeIn().addClass("active");
        return false;
    },
    startCarousel: function(initialSlide) {
        var _this = this;
        initialSlide = initialSlide || 0;

        this.swiper = new Swiper(this.options.swiperEl,{
        slidesPerView:'auto',
        mode:'horizontal',
        loop: false,
        centeredSlides: true,
        cssWidthAndHeight: true,
        initialSlide: initialSlide,
         onTouchEnd : function(e) {
                var idx = e.activeIndex;

                $(_this.options.swiperEl + " .swiper-wrapper .swiper-slide:nth-child("+(idx+1)+")").click().siblings().removeClass("active");

        },
        onSwiperCreated : function() { 
            if (_this.options.swipeTo) {
                var el = $(_this.options.swiperEl + " .swiper-wrapper .swiper-slide:nth-child("+(_this.options.swipeTo+1)+")");
                el.click();
                var tab = el.attr("data-rel");
                $("#"+tab).show().siblings().hide();

            }
            
        },
      }); 

        this.$('.swiper-slide').on('click', this.changeTab);

      $(this.options.swiperEl + " .swiper-slide").each(function(item) { 

            $(this).click(function(e) {
                _this.options.swipeTo = item;
                e.preventDefault();
                _this.swiper.swipeTo(item);
            })  
      });

      return this.swiper;
    }
});
App.Views.DialogView = Backbone.View.extend({ 

    initialize: function(options) {

    },

    onClose: function() {
       $.magnificPopup.close(); 
    },

    openDialog: function(e, content) {
        if (e) e.preventDefault();
        var html = content ? content: this.$el.html();
        $.magnificPopup.open({
          items: {
              src: html,
              type: 'inline',
          },
          prependTo: document.getElementById("dialog"),
          removalDelay: 500, //delay removal by X to allow out-animation
          callbacks: {
            beforeOpen: this.beforeOpen,
            afterOpen: this.afterOpen,
            afterClose: this.afterClose
          },
          showCloseBtn: false,
          closeBtnInside: false

        });
        return false;
    },
    afterOpen: function(e) {},
    beforeOpen: function(e) {},
    afterClose: function(e) {},
    

    
});
App.Views.ContentView = Backbone.View.extend({ 

    el: "#contentpage",
    initialize: function(options) {

        this.template = eval("ich."+options.template);


    },
    render: function() {

        this.$el.empty().append(this.template().html());
        return this;
    }

    
});
App.Views.Error = Backbone.View.extend({
    text: {error_description: ''},
    initialize: function (options) {

        if (options.text) this.text.error_description = options.text;

        this.template = ich.errorPageTemplate();
        this.render();
    },

    render: function () {
        this.$el.html(this.template(this.text));
        return this;
    },

    events: {
        'click .retry':'retry'
    },

    retry: function () {
        Backbone.history.loadUrl(Backbone.history.fragment);
    }

});
