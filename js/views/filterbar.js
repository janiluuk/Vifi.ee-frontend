App.Views.FilterView = Backbone.View.extend({
    initialize: function(options) {

        this.filterbarview = new App.Views.FilterbarView({filters: options.filters, sort: options.sort});
        this.filterlistview = new App.Views.FilterlistView({filters: options.filters, sort: options.sort});
        this.filterlistview.bind('filter-bar:toggle', this.onChangeFilter, this );

    },

    onChangeFilter: function(field, val) {

            $("#id_" + field + " option").each(function() {
                if (val == "reset") {
                    $(this).attr("selected", this.value != "" ? false : "selected");
                } else if (this.value == val) {
                    var sel = $(this).attr("selected");

                    $(this).attr("selected", !sel ? "selected": false);
                }
            });

            $("#id_" + field ).trigger("change");


    }


 }); 

App.Views.FilterItemView = Backbone.View.extend({
    selectEl: '',
    tagName: 'div',
    filters: [],
    events: { 
        'click .selection' : 'toggleSelection'

    },
    toggleSelection: function(e) {
        e.preventDefault();
        var el = $(e.currentTarget);
        var val = el.attr("data-val");
        var field = el.parent().attr("data-field");
        var type = el.attr("data-type");
        var category = el.attr("data-category");


        if (val == "reset") { 
            $(el).addClass("toggle-on").siblings().removeClass("toggle-on");
        } else {
            $(el).toggleClass("toggle-on");
            $(el).parent().find('.reset').removeClass("toggle-on");
        }

        if ($(el).parent().find(".toggle-on").length == 0) {
                $(el).parent().find('.reset').addClass("toggle-on")
        }

        e.stopPropagation();

        this.trigger("filter-bar:toggle", val, field);


    },
    initialize: function(options) {
        this.options = options || {};
        this.selectEl = options.selectEl;
        this.el = options.el;

        this.filters = options.filters;
        this.initDropDown();

    },
    initDropDown: function() {
        var _this = this;
        var el = this.selectEl;
        $('<select id="id_'+el+'" multiple></select>').appendTo("#filter-elements");

        if (this.filters.length > 0) {
                $('#id_'+_this.selectEl).append(new Option('All Genres',''));
                this.filters.each(function(filter) { 
                $("#id_"+_this.selectEl).append('<option value="'+filter.get("id")+'" data-val="'+filter.get("id")+'">'+filter.get("name")+'</option>');
            });
        }
    },
    render: function() {
        this.$el.html(ich.checkboxlistTemplate({'items': this.filters.toJSON(), 'group': this.selectEl }));
        return this;
    }

});
App.Views.SortItemView = App.Views.FilterItemView.extend({ 

    toggleSelection: function(e) {
        e.preventDefault();
        var el = $(e.currentTarget);
        $(el).addClass("toggle-on");
        $(el).siblings().removeClass("toggle-on");
    },
    render: function() {
        this.$el.html(ich.radiolistTemplate({'items': this.filters.toJSON()}));
        return this;
    }

});

App.Views.FilterlistView = Backbone.View.extend({ 

    el: "#filter-list",
    views: [],
    initialize: function(options) { 
        _.bindAll(this, "render");

        this.options = options || {};
        this.filters = options.filters;
        this.sort = options.sort;
        this.render();
    },
    onFilterBarButton: function(val, field) {
        this.trigger("filter-bar:toggle", field, val);

    },
    render: function() { 
        var _this = this;

         $("<div>").attr("id", "sort-list").appendTo(_this.$el);
            var view = new App.Views.SortItemView({
                filters: _this.sort,
                selectEl: "sort",
                el: '#sort-list'
            });


            this.$el.append(view.render().$el);
            this.views.push(view);

            _.each(this.filters, function(items, id) {
                var name = id+"-list"
                $("<div>").attr("id", name).css("display", "none").appendTo(_this.$el);
                var view = new App.Views.FilterItemView({
                    filters: items,
                    selectEl: id,
                    el: '#'+name
                });
                view.on('filter-bar:toggle', _this.onFilterBarButton, _this);
                _this.$el.append(view.render().$el);
                _this.views.push(view);
            });
    }
});

App.Views.FilterbarView = Backbone.View.extend({ 
    el: "#filter-bar",
    events: { 'click .swiper-slide' : 'toggleFilter'},
    state: true,
    initialize: function(options) { 
        _.bindAll(this, "render");
        this.options = options || {};
        this.render();
    },


    render: function() {
        this.$el.html(ich.filterBarTemplate());
        this.$(".swiper-slide:first").addClass("active swiper-slide-active");
        var _this = this;
        setTimeout(function() { 
            _this.enableCarosel();

        },100);
        return this;
    },
    toggleFilter: function(e) { 

        e.preventDefault();
        var el = e.currentTarget;
        var attr = $(el).attr("data-rel");
        var filterEl = $("#"+attr);


        $(filterEl).siblings().hide();

        if ($(el).hasClass("active")) {
            this.closeFilterBar();
            $(el).removeClass("active swiper-slide-active");            
        } else { 
            $(filterEl).show();
            $(el).addClass("active swiper-slide-active");
            this.openFilterBar();
        }

        $(el).siblings().removeClass("swiper-slide-active active");
        e.stopPropagation();
        return false;
        
    },
    enableCarosel: function() { 


      /* Categories / Filters */
      window.frontnavSwiper = new Swiper('#front-tabbar-swiper-container',{
        slidesPerView:'auto',
        mode:'horizontal',
        loop: false,
        centeredSlides: true,
        moveStartThreshold: 5,
        slideActiveClass: "activeslide",
        cssWidthAndHeight: true,
         
      });  

      $("#front-tabbar-swiper-container .swiper-slide").each(function(item) {  $(this).click(function() { frontnavSwiper.swipeTo(item) })  });
      
    },
    openFilterBar: function() {
        if (this.state) return;
        this.state = true;
         $("#filter-list").slideDown(); 
    },
    closeFilterBar: function() {
        if (!this.state) return;
        this.state = false;
        $("#filter-list").slideUp(); $("#front-tabbar-swiper-container .swiper-slide-active").removeClass("swiper-slide-active");
    },

});