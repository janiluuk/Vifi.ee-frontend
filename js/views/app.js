
App.Views = {};
App.Views.BaseAppView = Backbone.View.extend({
    el: $("#vifi-page-container"),

    events: {
        'click .goTop': 'scrollToTop',
    },
    scrollTop: 0,
    initialize: function(options) {


        this.options = options || {};
        this.session = options.session;
        this.user = options.session.get("profile");
        this.collection = options.collection;
        this.usercollection = options.usercollection;
        this.sessioncollection = options.sessioncollection;
        this.subscriptions = options.subscriptions;
        this.paymentmethods = options.paymentmethods;
        this.evt = options.eventhandler;
        this.template = options.template;
        this.player = options.player;
        this.fbuser = new App.User.FBPerson(); // Holds the authenticated Facebook user
        options.model = this.user;
        _.bindAll(this, 'render', 'showBrowserPage', 'onResizeScreen');
        this.api = new App.Utils.Api({
            model: this.session
        });
        this.notification = new App.Utils.Notification({
            model: this
        });
        this.notification.attach(this.session);
        this.sidemenu = new App.Views.SideMenu({
            model: this.user,
            session: this.session
        });
        this.topmenu = new App.Views.TopMenu({
            model: this.user
        });
        
        this.platform = App.Platforms.platform;

        /* Filterbar open by default */
        options.initialFilterState = true;        

        /* If mobile and default view, minimize filterbar. React on screen changes. */

        if (this.platform.name == "mobile") {
            options.initialFilterState = this.collection.querystate.isDefault() ? false : true;
            //this.platform.on("screen:orientation:change", this.onResizeScreen);
            //this.initMobile();
        }

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
    scrollToTop: function(instant, callback) {

        if (instant) { 
            $("body, #content-container").scrollTop(0);
        } else { 
            $("body, #content-container").stop().animate({
                scrollTop: 0
            }, 600,callback);
        }

    },
    showMoviePage: function() {
        this.scrollTop = this.$("#content-container").scrollTop() + $("body").scrollTop();
        $(".main-wrapper:not(#moviepage)").hide();
        $("#moviepage").fadeIn("fast");
        this.scrollToTop(true);
        App.Utils.lazyload();        
    },

    showBrowserPage: function() {

        $(".main-wrapper:not(#homepage)").hide();
        $("#homepage").css("visibility", "visible");
        $("#homepage").show();
        

        if (!this.browserInitialized) { 
            if (window.mySwiper) mySwiper.resizeFix();
            app.homepage.browserview.filterview.filterbarview.enableCarosel();
            this.browserInitialized = true;
        }            
        app.homepage.browserview.$isotope.isotope('layout');
        app.homepage.browserview.renderResults();
        App.Utils.lazyload();

        if (this.scrollTop == 0) {
        } else {
            $("#content-container").scrollTop(this.scrollTop);
        }
    },


    /* Pure evil addressbar hiding on resizing the screen */

    onResizeScreen: function() {
            $("body").height(this.platform.resolution.height-5); 
            var height = this.platform.resolution.height;
            this.$el.css("height",height);
            this.browserInitialized = false;
    },
    
    /* Pure evil addressbar hiding */

    initMobile: function() { 
        this.onResizeScreen();
        $("body,html").css("overflow", "visible");
    },

    showSearchPage: function() {
        app.homepage.browserview.collection.onSearchFieldChange();
    },
    showContentPage: function(id) {
        $(".main-wrapper:not(#contentpage)").hide();
        if (id) {
            $(".side-menu-list a.active").removeClass("active");
            $(".side-menu-list a#menu-" + id).addClass("active");
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
            sort: options.sort,
            initialState: options.initialFilterState
        });
        
        this.featuredview = new App.Views.FeaturedView({
            collection: options.collection.featured(),
            banners: options.banners,
            querystate: options.collection.querystate
        });

        this.featuredview.on("search:open", this.onSearchOpen,this);
        this.featuredview.on("search:close", this.onSearchClose,this);        
    },
    render: function() {
        this.featuredview.render();
        this.browserview.render();
        return this;
    },

    onSearchOpen: function() {        
        this.browserview.trigger("minimize");
    },
    onSearchClose: function() {
        this.browserview.trigger("maximize");
    },    
});


App.Views.TopMenu = Backbone.View.extend({
    events: {
        'submit form#main-search-form': 'onSearchSubmit',
        'keypress #main-search-box' : 'onSearchChange',
        'blur #main-search-box' : 'onSearchChange',
        'change #main-search-box input[type="text"]': 'onSearchChange',             
        'click #search-button': 'toggleSearchBox',
        'click #menu-dragger': 'toggleSideBar',
        'click .login': 'login',
        'click .logout': 'logout',
        'click #clear-search-text-button': 'clearSearch'
    },

    model: App.User.FBPerson,
    el: $("#top-main-toolbar"),

    initialize: function(options) {
        if (options.model) this.model = options.model;
        this.model.on('change', this.render, this);
    },

    onSearchChange: function(e) { 

        var query = $('#main-search-box').val();
        if (query != "") {
            $("#clear-search-text-button").fadeIn("fast");
        } else {
            $("#clear-search-text-button").fadeOut("fast");
        }
        return true;

    },

    render: function() {
        var search = this.$("#main-search-box").val();
        this.$el.html(ich.topmenuTemplate(this.model.toJSON()));
        this.$("#main-search-box").val(search).trigger("keypress");
        return this;
    },
    login: function(e) {
        $(document).trigger("login");
        return false;
    },
    logout: function(e) {
        app.router.navigate("/", {
            trigger: true
        });
        $(document).trigger('logout');
        return false;
    },
    toggleSearchBox: function(e) {

        var el = this.$("#toolbar-search-group");
        var visible = el.hasClass("pullDownRight");
        el.toggleClass("pullDownRight");
        el.toggleClass("pullUpRight", visible);
        if (e) $(e.currentTarget).toggleClass("active",!visible);

        if (!visible) $("#main-search-box").focus();
        else $("#main-search-box").blur();

        return false;

    },

    toggleSideBar: function(e) {
        app.sidemenu.toggleSideBar(e);
        return false;
    },
    clearSearch: function(e) {
        e.preventDefault();

        if (app.collection.querystate.isDefault() === false) { 
            app.collection.querystate.setDefault();
        }

        app.homepage.browserview.onSearchFieldChange(e);
        this.toggleSearchBox();
        app.scrollToTop();
        
        return false;
    },
    onSearchSubmit: function(e) {
        e.preventDefault();
        var query = $('#main-search-box').val();
        if (query == '') return this.clearSearch(e);
        
        if (app.collection.querystate.isDefault() === true) { 
            $("[data-val=reset]").click();
        }
        
        app.homepage.browserview.onSearchFieldChange(e);
        this.toggleSearchBox();
        app.scrollToTop();
        return false;
    },
});
App.Views.SideMenu = Backbone.View.extend({
    el: $("#side-menu-container"),
    state: 'closed',
    events: {
        'click .logout': 'logout'
    },
    initialize: function(options) {
        var options = options || {};
        if (options.model) this.model = options.model;
        if (options.session) this.session = options.session;
        _.bindAll(this, 'enableSideMenu', 'toggleSideBar', 'render');
        this.listenTo(this.session, "user:login:success", this.render, this);
        this.listenTo(this.session, "user:logout", this.render, this);
        this.loginForm = new App.Views.LoginForm({
            session: this.session
        });
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
    toggleSideBar: function(e) {

        if (!window.snapper) return false;
        if ($("body").hasClass("snapjs-left")) this.state = "left";
        else this.state = "closed";
        if (this.state == "left") {
            this.closeSideBar();
        } else {
            window.snapper.open('left');
            this.state = "left";
        }
        if (e) $(e.currentTarget).toggleClass("active", this.state != "closed");

    },
    closeSideBar: function() {
        if (!window.snapper) return false;
        window.snapper.close();
        this.state = "closed";
    },
    render: function() {
        this.$el.html(ich.sidemenuTemplate(this.model.toJSON()));
        this.assign(this.loginForm, "#login-register-form");
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
        $(el).siblings().removeClass("active").hide();
        $(el).fadeIn().addClass("active");
        return false;
    },
    startCarousel: function(initialSlide) {
        var _this = this;
        initialSlide = initialSlide || 0;
        this.swiper = new Swiper(this.options.swiperEl, {
            slidesPerView: 'auto',
            mode: 'horizontal',
            loop: false,
            centeredSlides: true,
            cssWidthAndHeight: true,
            initialSlide: initialSlide,
            onTouchEnd: function(e) {
                var idx = e.activeIndex;
                $(_this.options.swiperEl + " .swiper-wrapper .swiper-slide:nth-child(" + (idx + 1) + ")").click().siblings().removeClass("active");

            },
            onSwiperCreated: function() {
                if (_this.options.swipeTo) {
                    var el = $(_this.options.swiperEl + " .swiper-wrapper .swiper-slide:nth-child(" + (_this.options.swipeTo + 1) + ")");
                    el.click();
                    var tab = el.attr("data-rel");
                    $("#" + tab).show().siblings().hide();
                    App.Utils.lazyload();

                }
            },

        });
        this.$('.swiper-slide').on('click', this.changeTab);
        $(this.options.swiperEl + " .swiper-slide").each(function(item) {
            $(this).click(function(e) {
                _this.options.swipeTo = item;
                e.preventDefault();
                _this.swiper.swipeTo(item);
                App.Utils.lazyload();

            })
        });
        return this.swiper;
    }
});
App.Views.DialogView = Backbone.View.extend({
    initialize: function(options) {},
    onClose: function() {
        $.magnificPopup.close();
    },
    openDialog: function(e, content) {
        if (e) e.preventDefault();
        var html = content ? content : this.$el.html();
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
        this.content = eval("ich." + options.template + "().html()");
        this.template = ich.contentPageTemplate({
            content: this.content,
            title: options.title
        });
    },
 
    render: function() {
        this.$el.empty().append(this.template);
        return this;
    }
});
App.Views.ContactView = App.Views.ContentView.extend({
    bindings: {
        '[name=contact_email]': {
            observe: 'contact_email',
            setOptions: {
                validate: false
            }
        },
        '[name=contact_body]': {
            observe: 'contact_body', 
            setOptions: {
                validate: false
            }
        },
        '[name=contact_phone]': {
            observe: 'contact_phone',
            setOptions: {
                validate: false
            }
        },
        '[name=contact_name]': {
            observe: 'contact_name',
            setOptions: {
                validate: false
            }
        },
         
    },
    events: {
        'submit #contact-form': 'onSubmit'
    },

    initialize: function(options) {
        this.template = ich.contactPageTemplate();
        this.model = new App.Forms.ContactForm();
        // This hooks up the validation
        Backbone.Validation.bind(this);
    },
    
    onSubmit: function(e) {
        e.preventDefault();

        var form = $("#contact-form").serializeArray();

        var message = {
            name : _.where(form, {name: "contact_name"}).pop().value,
            phone : _.where(form, {name: "contact_phone"}).pop().value,
            email : _.where(form, {name: "contact_email"}).pop().value,
            body : _.where(form, {name: "contact_body"}).pop().value
        };

        var msg = [message.body,message.name,message.phone,message.email].join("\n\n");

        var subject = "Feedback from "+App.Settings.sitename;
        
        var res = this.model.validate();

        if (res == undefined) { 
            this.removeOnDone($("#submit_contact_form"));
            app.api.post(["user", "sendfeedback"], {message: msg, email: message.email, subject: subject});
            this.$("#contact-form button").attr("disabled", "disabled").css("opacity", "0.5");
        }
    
        e.stopPropagation();

        return false;

    },
    render: function() {
        this.$el.empty().append(this.template);
        this.stickit();
        return this;
    },
    remove: function() {
        // Remove the validation binding
        Backbone.Validation.unbind(this);
        return Backbone.View.prototype.remove.apply(this, arguments);
    }

});
App.Views.RecoveryView = App.Views.ContentView.extend({
    events: {
        'submit #recovery-form': 'onSubmit'
    },
    initialize: function(options) {
        this.content = ich.recoveryPageTemplate(options).html();
        this.template = ich.contentPageTemplate({
            content: this.content,
            title: "Recovery"
        });
    },
    onFail: function(data) {
        if (!data) return false;
        this.$("form .error").remove();
        var div = $("<div>").addClass("row-fluid error").html(data.message);
        this.$("form:visible:first").prepend(div);
        return false;
    },
    onSubmit: function(e) {
        e.preventDefault();
        var email = this.$("#recover-email").val();
        var key = this.$("#recover-key").val();
        var pass = this.$("#recover-password").val();
        var passverify = this.$("#recover-password-confirm").val();
        if (pass != passverify) {
            this.onFail({
                message: "Passwords do not match!"
            });
        }
        if (pass == "" || passverify == "") {
            this.onFail({
                message: "Fill all the fields!"
            });
        } else {
            app.session.get("profile").recoverPassword(email, key, pass);
        }
        return false;
    }
});

App.Views.Error = App.Views.ContentView.extend({
    type: false,
    text: {
        error_description: ''
    },
    events: {
        'click .retry': 'retry'
    },
    initialize: function(options) {
        this.content = ich.errorPageTemplate(options).html();
        this.template = ich.errorPageTemplate({
            content: this.content,
            title: "Error has occured"
        });
    },

    retry: function() {

        Backbone.history.loadUrl(Backbone.history.fragment);
    }
});