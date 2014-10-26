
window.$noop = function(input) {
    // if more then one return an array.
    if (arguments.length > 1) return Array.prototype.slice.call(arguments, 0);
    else return arguments[0]; // Don't return an array if only one thing came in.
}

window.$log = function(log) { 
    if (App.Settings.Debug === true)
    console.log(log); 
    
};

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
            //console.log(" COULD NOT DETECT PLATFORM, USING DEFAULT (" + this.defaultPlatform.name + ")");
            this.platform = this.defaultPlatform;
        }
        $log("<< PLATFORM IS: (" + this.platform.name + ") >>");
        this.platform.init();
        //this.platform.addPlatformCSS();
        this.platform.fetchMediaPlayer();


    }
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
        var path = "js/vendor/" + this._mediaPlayer.toLowerCase() + ".min.js?";
        //$log("Adding media player path: " + path);
        $("<script />", {
            src: path,
            async: true,
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
           // alert("screen changed to "+this.matrix()+" "+this.orientation);

        }.bind(browser));

        this.orientation = this.getDeviceOrientation();
        this.updateScreen();

    };  
    browser.setResolution($(window).outerWidth(), $(window).outerHeight());

    browser.defaultPlatform = false;
    App.Platforms.addSupportedPlatform(browser);
    browser.setMediaPlayer("flowplayer");
    
}());
