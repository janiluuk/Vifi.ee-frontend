
App.Utils = { 
    template: function(id) {
        return _.template( $('#'+id).html());
    },
    include: function(names, callback) {
        var self = this;
        var deferreds = [];
        $.each(names, function(index, name) { 
        deferreds.push($.ajax({ url: '/tpl/'+name+'.html', dataType: 'html', success: function(response) { 

            var items = $('<div>').html(response).find("script"); 
            items.each(function(idx,item) { 
                var id = $(item).attr("id");         

                ich.addTemplate(id, $(item).html());
            });
        }}));
        })
        $.when.apply(window, deferreds).done(callback);

    },

    TemplateLoader: function () {

        this.templates = {};

        this.load = function (names, callback) {

            var deferreds = [],
                self = this;

            $.each(names, function (index, name) {
                deferreds.push($.get('tpl/' + name + '.html', function (data) {
                    self.templates[name] = data;
                }));
            });

            $.when.apply(null, deferreds).done(callback);
        };

        // Get template by name from hash of preloaded templates
        this.get = function (name) {
            return this.templates[name];
        };

    },
    convertMstoHumanReadable: function(ms, leadingZeros) {
            leadingZeros = typeof(leadingZerons) == 'undefined' ? true : !!leadingZeros // Make sure its boolean

            var x = ms / 1000
            var numSecs = seconds = Math.floor(x % 60)
            x /= 60
            var numMins = minutes = Math.floor(x % 60)
            x /= 60
            hours = Math.floor(x % 24)
            x /= 24
            days = Math.floor(x);

            var numMs = ms - (seconds * 1000);

            if (leadingZeros) {
                if (numSecs < 10) {
                    numSecs = "0" + numSecs.toString();
                }
                if (numMins < 10) {
                    numMins = "0" + numMins.toString();
                }
            }

            return {
                millis: numMs,
                seconds: numSecs,
                minutes: Math.floor(numMins),
                hours: Math.floor(hours),
                toString: function() {
                    var str = numSecs;
                    if (Math.floor(numMins))
                        str = numMins + ":" + str;
                    else
                        str = "00:" + str;
                    if (Math.floor(hours))
                        str = hours + ":" + str;
                    return str;
                }
            }
        },
        stringToDate: function(s) {
            var dateParts = s.split(' ')[0].split('-');
            var timeParts = s.split(' ')[1].split(':');
            return new Date(dateParts[0], dateParts[1], dateParts[2], timeParts[0], timeParts[1], 00, 0);
        },
        /* Return date as human readable format */

        dateToHumanreadable: function(s) {
            return s.getDate() + "." + s.getMonth() + " " + s.getHours() + ":" + ("0" + s.getMinutes()).slice(-2);
        },
        /* Return time after certain duration in minutes */
        minutesToTime: function(duration) {

            if (!duration) return false;
            var time = new Date();
            var endingtime = new Date(time.getTime() + duration * 60000);
            var endingtimestring = endingtime.getHours();
            endingtimestring += ":";
            endingtimestring += ("0" + endingtime.getMinutes()).slice(-2);
            return endingtimestring;
        }

};


//A utility model to track state using the hash and also generate a url
App.Utils.State = Backbone.Model.extend({
    defaults: {},
    getQueryString: function(addParams) {
        var hashables = [];
        var dict = this.toJSON();
        for (key in dict) {
            if ((!_.indexOf(_.keys(this.defaults), key) || (this.defaults[key] != dict[key])) && dict[key] != undefined) {
                if (dict[key] != "") hashables.push(key + '=' + escape(dict[key]));

            }
        }
        if (addParams) {
            for (key in addParams) {
                hashables.push(key + '=' + addParams[key])
            }
        }
        var params = hashables.join('&');
        return params.length ? '?' + params : "";
    },
    //A hash to use in the url to create a bookmark or link
    //Makes somehting like prop1:value1|prop2:value2
    getHash: function() {
        return this.getQueryString().substring(1).replace(/&/g, '|').replace(/=/g, ':');
    },
    //Take a hash from the url and set the model attributes
    //Parses from the formate of prop1:value1|prop2:value2
    setFromHash: function(hash) {
        hash = hash.replace("?", "");
        if (hash.length == 0) return false;
        
        var hashables = hash.split('|');
        var dict = _.clone(this.defaults);
        var i = false;

        _.each(hashables, function(hashable) {
            var parts = hashable.split(':');
            var prop = parts[0];
            var value = parts[1];

            dict[prop] = value.length > 0 ? value : undefined;

            if (dict[prop] == undefined && !i) {
                i = true;
            } 

        });
        
        this.set(dict);
        return i;
        
    }
});

App.Platforms = {

    platform: null,
    proxy: function() { return "" }, // Default

    supportedPlatforms: {},
    addSupportedPlatform: function(platform) {

        this.supportedPlatforms[platform.name] = platform;
        if (platform.defaultPlatform == true) {
            this.defaultPlatform = platform;
        }
    },

    init: function() {
 
        _.each(this.supportedPlatforms, function(platform) {
            if (!platform.defaultPlatform && platform.detectPlatform()) {
                this.platform = platform;
                return;
            }
        }, this);
        if (!this.platform && !this.defaultPlatform) {
            console.log("!!!! NO PLATFORM DETECTED, AND NO DEFAULT PLATFORM !!!!");
            return;
        } else if (!this.platform) {
            console.log(" COULD NOT DETECT PLATFORM, USING DEFAULT (" + this.defaultPlatform.name + ")");
            this.platform = this.defaultPlatform;
        }
        $log("<< PLATFORM IS: (" + this.platform.name + ") >>");
        this.platform.init();
        //this.platform.addPlatformCSS();
        this.platform.fetchMediaPlayer();

        // Going to add our proxy adding an ajax prefilter to switch to route the url
        // through a proxy for cross domain requests.
        var platform = this.platform;

        if (_.isFunction($.ajaxPrefilter)) {
            $.ajaxPrefilter(function(options, originalOptions) {
                var proxy = platform.proxy;
                if (proxy !== "") {
                    // Create the URL.
                    var data = originalOptions.data || {};
                    data['url'] = originalOptions.url;
                    options.data = $.param(data);
                    options.url = proxy;
                }
            });
        }

    }
}

window.$noop = function(input) {
    // if more then one return an array.
    if (arguments.length > 1) return Array.prototype.slice.call(arguments, 0);
    else return arguments[0]; // Don't return an array if only one thing came in.
}


// Master "Class" for Platforms.


App.Platform = function(name) {
    this.name = name;
    this.defaultPlatform = true;
    this._mediaPlayer = "flowplayer";

    this.start = $noop;
    this.exit = $noop;
    this._keys = {
        KEY_RETURN: 8,
        KEY_UP: 38,
        KEY_DOWN: 40,
        KEY_LEFT: 37,
        KEY_RIGHT: 39,
        KEY_ENTER: 13, // Enter
        KEY_RED: 65, // a
        KEY_GREEN: 66, // b
        KEY_YELLOW: 67, // c
        KEY_BLUE: 68, // d
        KEY_BACK: 8, // backspace
        KEY_PLAY: 80, // p
        KEY_FF: 190, // .
        KEY_RW: 188, // ,
        KEY_PAUSE: 189,
        KEY_STOP: 83, // s
        KEY_VOL_UP: 187, // +
        KEY_VOL_DOWN: 48, // 0
        KEY_MUTE: 77, // m
        KEY_CANCEL: 27 // ESC

    }
    this.resolution = {
        height: 720,
        width: 1280
    }

    // You can override this if you'd like
    this.init = $noop;

    // Might want to set this to something different
    this.needsProxy = null;

}
App.Platform.prototype.initready = function() {
    $log("<< Platform ready (" + this.name + " " + this.matrix() + " on " + window.screen.width + "x" + window.screen.height + " ) >>");

}
// override this if necessary
App.Platform.prototype.keys = function() {
    return this._keys;
}
App.Platform.prototype.setMediaPlayer = function(mediaplayer) {
    this._mediaPlayer = mediaplayer;
}
App.Platform.prototype.fetchMediaPlayer = function() {
    if (this._mediaPlayer) {
        //  $log("Adding media player path");
        var path = "js/vendor/" + this._mediaPlayer.toLowerCase() + ".min.js?" + new Date().getTime();
        $log("Adding media player path: " + path);
        $("<script />", {
            src: path,
            type: 'text/javascript'
        }).appendTo("head");
    }
}

App.Platform.prototype.cleanAppVersion = function() {
    var version = navigator.appVersion.match(/^[^\s]*/)[0] || null;
    if (version == null) return null;
    split = version.split(".")
    return {
        major: split[0],
        minor: split[1],
        mod: split[2]
    }
};

App.Platform.prototype.setResolution = function(width, height) {
    this.resolution.height = height;
    this.resolution.width = width;
}
App.Platform.prototype.matrix = function() {
    return this.resolution.width + "x" + this.resolution.height;
}

App.Platform.prototype.addPlatformCSS = function() {
    // $log(" ADDING PLATFORM CSS FOR PLATFORM: " + this.name  + " path: css/platforms/"+this.name.toLowerCase()+".css and resolution: css/resolutions/"+this.matrix()+".css" );
    $("<link/>", {
        rel: "stylesheet",
        type: "text/css",
        href: "style/" + this.matrix() + ".css?1234"
    }).appendTo("head");

    $("<link/>", {
        rel: "stylesheet",
        type: "text/css",
        href: "style/" + this.name.toLowerCase() + ".css?1234"
    }).appendTo("head");


}

// Override this 
App.Platform.prototype.detectPlatform = function() {
    if (!this.defaultPlatform) $log(" <<< PLATFORM MUST OVERRIDE THE DETECT PLATFORM METHOD >>>");
}

App.Platform.prototype.getDeviceOrientation = function() {
           
    if (window.orientation && Math.abs(window.orientation) === 90) {
        return "landscape";
    } else {
        return "portrait";
    }


}
App.Platform.prototype.proxy = function() {
    return this.needsProxy ? "proxy.php" : "";
}



(function() {
    var browser = new App.Platform('browser');
    // browser.needsProxy = true;
    // We want this to fail, and get added as default

    browser.setResolution(window.screen.width, window.screen.height);
    browser.defaultPlatform = true;
    App.Platforms.addSupportedPlatform(browser);
    browser.setMediaPlayer("flowplayer");
    
}());

(function() {
    var browser = new App.Platform('mobile');
    // browser.needsProxy = true;
    // We want this to fail, and get added as default
    browser.detectPlatform = function() {

        return jQuery.browser.mobile;

    };
    browser.updateScreen = function() {

            this.orientation = this.getDeviceOrientation();
            this.setResolution($(window).outerWidth(), $(window).outerHeight());


    };
    browser.init = function() {
        $(window).on('resize', function(e) { 
            this.updateScreen();
            alert("screen changed to "+this.matrix()+" "+this.orientation);
            e.stopPropagation();

        }.bind(browser));

        this.orientation = this.getDeviceOrientation();
        this.updateScreen();

    };  
    browser.setResolution($(window).outerWidth(), $(window).outerHeight());

    browser.defaultPlatform = false;
    App.Platforms.addSupportedPlatform(browser);
    browser.setMediaPlayer("flowplayer");
    
}());

Backbone.View.prototype.close = function(){
  this.remove();
  this.unbind();
  if (this.onClose){
    this.onClose();
  }
}