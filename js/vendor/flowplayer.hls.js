/*!

   Flowplayer v6.0.5 (Wednesday, 13. January 2016 09:17AM) | flowplayer.org/license

*/
/*!

   Flowplayer v6.0.5 (Wednesday, 13. January 2016 09:17AM) | flowplayer.org/license

*/
/*! (C) WebReflection Mit Style License */

(function(e){function g(e,t,n,r){for(var i,s=n.slice(),o=w(t,e),u=0,a=s.length;u<a;u++){handler=s[u],typeof handler=="object"&&typeof handler.handleEvent=="function"?handler.handleEvent(o):handler.call(e,o);if(o.stoppedImmediatePropagation)break}return i=!o.stoppedPropagation,r&&i&&e.parentNode?e.parentNode.dispatchEvent(o):!o.defaultPrevented}function y(e,t){return{configurable:!0,get:e,set:t}}function b(e,t,n){var r=f(t||e,n);u(e,"textContent",y(function(){return r.get.call(this)},function(e){r.set.call(this,e)}))}function w(e,t){return e.currentTarget=t,e.eventPhase=e.target===e.currentTarget?2:3,e}function E(e,t){var n=e.length;while(n--&&e[n]!==t);return n}function S(){if(this.tagName==="BR")return"\n";var e=this.firstChild,t=[];while(e)e.nodeType!==8&&e.nodeType!==7&&t.push(e.textContent),e=e.nextSibling;return t.join("")}function x(e){return e.nodeType!==9&&document.documentElement.contains(e)}function T(e){!n&&d.test(document.readyState)&&(n=!n,document.detachEvent(r,T),e=document.createEvent("Event"),e.initEvent(i,!0,!0),document.dispatchEvent(e))}function N(e){var t;while(t=this.lastChild)this.removeChild(t);e!=null&&this.appendChild(document.createTextNode(e))}function C(t,n){return n||(n=e.event),n.target||(n.target=n.srcElement||n.fromElement||document),n.timeStamp||(n.timeStamp=(new Date).getTime()),n}if(document.createEvent)return;var t=!0,n=!1,r="onreadystatechange",i="DOMContentLoaded",s="__IE8__"+Math.random(),o=e.Object,u=o.defineProperty||function(e,t,n){e[t]=n.value},a=o.defineProperties||function(t,n){for(var r in n)if(l.call(n,r))try{u(t,r,n[r])}catch(i){e.console&&console.log(r+" failed on object:",t,i.message)}},f=o.getOwnPropertyDescriptor,l=o.prototype.hasOwnProperty,c=e.Element.prototype,h=e.Text.prototype,p=/^[a-z]+$/,d=/loaded|complete/,v={},m=document.createElement("div");b(e.HTMLCommentElement.prototype,c,"nodeValue"),b(e.HTMLScriptElement.prototype,null,"text"),b(h,null,"nodeValue"),b(e.HTMLTitleElement.prototype,null,"text"),u(e.HTMLStyleElement.prototype,"textContent",function(e){return y(function(){return e.get.call(this.styleSheet)},function(t){e.set.call(this.styleSheet,t)})}(f(e.CSSStyleSheet.prototype,"cssText"))),a(c,{textContent:{get:S,set:N},firstElementChild:{get:function(){for(var e=this.childNodes||[],t=0,n=e.length;t<n;t++)if(e[t].nodeType==1)return e[t]}},lastElementChild:{get:function(){for(var e=this.childNodes||[],t=e.length;t--;)if(e[t].nodeType==1)return e[t]}},previousElementSibling:{get:function(){var e=this.previousSibling;while(e&&e.nodeType!=1)e=e.previousSibling;return e}},nextElementSibling:{get:function(){var e=this.nextSibling;while(e&&e.nodeType!=1)e=e.nextSibling;return e}},childElementCount:{get:function(){for(var e=0,t=this.childNodes||[],n=t.length;n--;e+=t[n].nodeType==1);return e}},addEventListener:{value:function(e,t,n){var r=this,i="on"+e,o=r[s]||u(r,s,{value:{}})[s],a=o[i]||(o[i]={}),f=a.h||(a.h=[]),c;if(!l.call(a,"w")){a.w=function(e){return e[s]||g(r,C(r,e),f,!1)};if(!l.call(v,i))if(p.test(e))try{c=document.createEventObject(),c[s]=!0,r.nodeType!=9&&r.parentNode==null&&m.appendChild(r),r.fireEvent(i,c),v[i]=!0}catch(c){v[i]=!1;while(m.hasChildNodes())m.removeChild(m.firstChild)}else v[i]=!1;(a.n=v[i])&&r.attachEvent(i,a.w)}E(f,t)<0&&f[n?"unshift":"push"](t)}},dispatchEvent:{value:function(e){var t=this,n="on"+e.type,r=t[s],i=r&&r[n],o=!!i,u;return e.target||(e.target=t),o?i.n?t.fireEvent(n,e):g(t,e,i.h,!0):(u=t.parentNode)?u.dispatchEvent(e):!0,!e.defaultPrevented}},removeEventListener:{value:function(e,t,n){var r=this,i="on"+e,o=r[s],u=o&&o[i],a=u&&u.h,f=a?E(a,t):-1;-1<f&&a.splice(f,1)}}}),a(h,{addEventListener:{value:c.addEventListener},dispatchEvent:{value:c.dispatchEvent},removeEventListener:{value:c.removeEventListener}}),a(e.XMLHttpRequest.prototype,{addEventListener:{value:function(e,t,n){var r=this,i="on"+e,o=r[s]||u(r,s,{value:{}})[s],a=o[i]||(o[i]={}),f=a.h||(a.h=[]);E(f,t)<0&&(r[i]||(r[i]=function(){var t=document.createEvent("Event");t.initEvent(e,!0,!0),r.dispatchEvent(t)}),f[n?"unshift":"push"](t))}},dispatchEvent:{value:function(e){var t=this,n="on"+e.type,r=t[s],i=r&&r[n],o=!!i;return o&&(i.n?t.fireEvent(n,e):g(t,e,i.h,!0))}},removeEventListener:{value:c.removeEventListener}}),a(e.Event.prototype,{bubbles:{value:!0,writable:!0},cancelable:{value:!0,writable:!0},preventDefault:{value:function(){this.cancelable&&(this.defaultPrevented=!0,this.returnValue=!1)}},stopPropagation:{value:function(){this.stoppedPropagation=!0,this.cancelBubble=!0}},stopImmediatePropagation:{value:function(){this.stoppedImmediatePropagation=!0,this.stopPropagation()}},initEvent:{value:function(e,t,n){this.type=e,this.bubbles=!!t,this.cancelable=!!n,this.bubbles||this.stopPropagation()}}}),a(e.HTMLDocument.prototype,{textContent:{get:function(){return this.nodeType===11?S.call(this):null},set:function(e){this.nodeType===11&&N.call(this,e)}},addEventListener:{value:function(n,s,o){var u=this;c.addEventListener.call(u,n,s,o),t&&n===i&&!d.test(u.readyState)&&(t=!1,u.attachEvent(r,T),e==top&&function a(e){try{u.documentElement.doScroll("left"),T()}catch(t){setTimeout(a,50)}}())}},dispatchEvent:{value:c.dispatchEvent},removeEventListener:{value:c.removeEventListener},createEvent:{value:function(e){var t;if(e!=="Event")throw new Error("unsupported "+e);return t=document.createEventObject(),t.timeStamp=(new Date).getTime(),t}}}),a(e.Window.prototype,{getComputedStyle:{value:function(){function i(e){this._=e}function s(){}var e=/^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/,t=/^(top|right|bottom|left)$/,n=/\-([a-z])/g,r=function(e,t){return t.toUpperCase()};return i.prototype.getPropertyValue=function(i){var s=this._,o=s.style,u=s.currentStyle,a=s.runtimeStyle,f,l,c;return i=(i==="float"?"style-float":i).replace(n,r),f=u?u[i]:o[i],e.test(f)&&!t.test(i)&&(l=o.left,c=a&&a.left,c&&(a.left=u.left),o.left=i==="fontSize"?"1em":f,f=o.pixelLeft+"px",o.left=l,c&&(a.left=c)),f==null?f:f+""||"auto"},s.prototype.getPropertyValue=function(){return null},function(e,t){return t?new s(e):new i(e)}}()},addEventListener:{value:function(t,n,r){var i=e,o="on"+t,u;i[o]||(i[o]=function(e){return g(i,C(i,e),u,!1)}),u=i[o][s]||(i[o][s]=[]),E(u,n)<0&&u[r?"unshift":"push"](n)}},dispatchEvent:{value:function(t){var n=e["on"+t.type];return n?n.call(e,t)!==!1&&!t.defaultPrevented:!0}},removeEventListener:{value:function(t,n,r){var i="on"+t,u=(e[i]||o)[s],a=u?E(u,n):-1;-1<a&&u.splice(a,1)}}})})(this);
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.flowplayer=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';
var common = module.exports = {},
    ClassList = _dereq_('class-list'),
    $ = window.jQuery,
    punycode = _dereq_('punycode'),
    computedStyle = _dereq_('computed-style');

common.noop = function() {};
common.identity = function(i) { return i; };

common.removeNode = function(el) {
  if (!el || !el.parentNode) return;
  el.parentNode.removeChild(el);
};

common.find = function(query, ctx) {
  if ($) return $(query, ctx).toArray();
  ctx = ctx || document;
  return Array.prototype.map.call(ctx.querySelectorAll(query), function(el) { return el; });
};

common.text = function(el, txt) {
  el[('innerText' in el) ? 'innerText' : 'textContent'] = txt;
};

common.findDirect = function(query, ctx) {
  return common.find(query, ctx).filter(function(node) {
    return node.parentNode === ctx;
  });
};

common.hasClass = function(el, kls) {
  return ClassList(el).contains(kls);
};

common.isSameDomain = function(url) {
  var w = window.location,
      a = common.createElement('a', { href: url });
  return w.hostname === a.hostname &&
         w.protocol === a.protocol &&
         w.port === a.port;
};

common.css = function(el, property, value) {
  if (typeof property === 'object') {
    return Object.keys(property).forEach(function(key) {
      common.css(el, key, property[key]);
    });
  }
  if (typeof value !== 'undefined') {
    if (value === '') return el ? el.style.removeProperty(property)  : undefined;
    return el ? el.style.setProperty(property, value) : undefined;
  }
  return el ? computedStyle(el, property) : undefined;
};

common.createElement = function(tag, attributes, innerHTML) {
  try {
    var el = document.createElement(tag);
    for (var key in attributes) {
      if (!attributes.hasOwnProperty(key)) continue;
      if (key === 'css') {
        common.css(el, attributes[key]);
      } else {
        common.attr(el, key, attributes[key]);
      }
    }
    el.innerHTML = innerHTML || '';
    return el;
  } catch (e) {
    if (!$) throw e;
    return $('<' + tag + '>' + innerHTML + '</' + tag + '>').attr(attributes)[0];
  }
};

common.toggleClass = function(el, cls, flag) {
  if (!el) return;
  var classes = ClassList(el);
  if (typeof flag === 'undefined') classes.toggle(cls);
  else if (flag) classes.add(cls);
  else if (!flag) classes.remove(cls);
};

common.addClass = function(el, cls) {
  return common.toggleClass(el, cls, true);
};

common.removeClass = function(el, cls) {
  return common.toggleClass(el, cls, false);
};

common.append = function(par, child) {
  par.appendChild(child);
  return par;
};

common.appendTo = function(child, par) {
  common.append(par, child);
  return child;
};

common.prepend = function(par, child) {
  par.insertBefore(child, par.firstChild);
};


// Inserts `el` after `child` that is child of `par`
common.insertAfter = function(par, child, el) {
  if (child == common.lastChild(par)) par.appendChild(el);
  var childIndex = Array.prototype.indexOf.call(par.children, child);
  par.insertBefore(el, par.children[childIndex + 1]);
};

common.html = function(elms, val) {
  elms = elms.length ? elms : [elms];
  elms.forEach(function(elm) {
    elm.innerHTML = val;
  });
};


common.attr = function(el, key, val) {
  if (key === 'class') key = 'className';
  if (common.hasOwnOrPrototypeProperty(el, key)) {
    try {
      el[key] = val;
    } catch (e) { // Most likely IE not letting set property
      if ($) {
        $(el).attr(key, val);
      } else {
        throw e;
      }
    }
  } else {
    if (val === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, val);
    }
  }
  return el;
};

common.prop = function(el, key, val) {
  if (typeof val === 'undefined') {
    return el && el[key];
  }
  el[key] = val;
};

common.offset = function(el) {
  var ret = el.getBoundingClientRect();
  if (el.offsetWidth / el.offsetHeight > el.clientWidth / el.clientHeight) { // https://github.com/flowplayer/flowplayer/issues/757
    ret = {
      left: ret.left * 100,
      right: ret.right * 100,
      top: ret.top * 100,
      bottom: ret.bottom * 100,
      width: ret.width * 100,
      height: ret.height * 100
    };
  }
  return ret;
};

common.width = function(el, val) {
  /*jshint -W093 */
  if (val) return el.style.width = (''+val).replace(/px$/, '') + 'px';
  var ret = common.offset(el).width;
  return typeof ret === 'undefined' ? el.offsetWidth : ret;
};

common.height = function(el, val) {
  /*jshint -W093 */
  if (val) return el.style.height = (''+val).replace(/px$/, '') + 'px';
  var ret = common.offset(el).height;
  return typeof ret === 'undefined' ? el.offsetHeight : ret;
};

common.lastChild = function(el) {
  return el.children[el.children.length - 1];
};

common.hasParent = function(el, parentSelector) {
  var parent = el.parentElement;
  while (parent) {
    if (common.matches(parent, parentSelector)) return true;
    parent = parent.parentElement;
  }
  return false;
};

common.createAbsoluteUrl = function(url) {
  return common.createElement('a', {href: url}).href; // This won't work on IE7
};

common.xhrGet = function(url, successCb, errorCb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status >= 400) return errorCb();
    successCb(this.responseText);
  };
  xhr.open('get', url, true);
  xhr.send();
};

common.pick = function(obj, props) {
  var ret = {};
  props.forEach(function(prop) {
    if (obj.hasOwnProperty(prop)) ret[prop] = obj[prop];
  });
  return ret;
};

common.hostname = function(host) {
  return punycode.toUnicode(host || window.location.hostname);
};

//Hacks
common.browser = {
  webkit: 'WebkitAppearance' in document.documentElement.style
};

common.getPrototype = function(el) {
  /* jshint proto:true */
  if (!Object.getPrototypeOf) return el.__proto__;
  return Object.getPrototypeOf(el);
};

common.hasOwnOrPrototypeProperty = function(obj, prop) {
  var o = obj;
  while (o) {
    if (Object.prototype.hasOwnProperty.call(o, prop)) return true;
    o = common.getPrototype(o);
  }
  return false;
};


// Polyfill for Element.matches
// adapted from https://developer.mozilla.org/en/docs/Web/API/Element/matches
common.matches = function(elem, selector) {
  var proto = Element.prototype,
      fn = proto.matches ||
          proto.matchesSelector ||
          proto.mozMatchesSelector ||
          proto.msMatchesSelector ||
          proto.oMatchesSelector ||
          proto.webkitMatchesSelector ||
          function (selector) {
            var element = this,
                matches = (element.document || element.ownerDocument).querySelectorAll(selector),
                i = 0;
            while (matches[i] && matches[i] !== element) {
              i++;
            }

            return matches[i] ? true : false;
      };
  return fn.call(elem, selector);
};


// Polyfill for CSSStyleDeclaration
// from https://github.com/shawnbot/aight
(function(CSSSDProto) {

  function getAttribute(property) {
    return property.replace(/-[a-z]/g, function(bit) {
      return bit[1].toUpperCase();
    });
  }

  // patch CSSStyleDeclaration.prototype using IE8's methods
  if (typeof CSSSDProto.setAttribute !== "undefined") {
    CSSSDProto.setProperty = function(property, value) {
      return this.setAttribute(getAttribute(property), String(value) /*, important */ );
    };
    CSSSDProto.getPropertyValue = function(property) {
      return this.getAttribute(getAttribute(property)) || null;
    };
    CSSSDProto.removeProperty = function(property) {
      var value = this.getPropertyValue(property);
      this.removeAttribute(getAttribute(property));
      return value;
    };
  }

})(window.CSSStyleDeclaration.prototype);

},{"class-list":22,"computed-style":24,"punycode":21}],2:[function(_dereq_,module,exports){
'use strict';
var common = _dereq_('../common');

// movie required in opts
module.exports = function embed(swf, flashvars, wmode, bgColor) {
   wmode = wmode || "opaque";

   var id = "obj" + ("" + Math.random()).slice(2, 15),
       tag = '<object class="fp-engine" id="' + id+ '" name="' + id + '" ',
       msie = navigator.userAgent.indexOf('MSIE') > -1;

   tag += msie ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' :
      ' data="' + swf  + '" type="application/x-shockwave-flash">';

   var opts = {
      width: "100%",
      height: "100%",
      allowscriptaccess: "always",
      wmode: wmode,
      quality: "high",
      flashvars: "",

      // https://github.com/flowplayer/flowplayer/issues/13#issuecomment-9369919
      movie: swf + (msie ? "?" + id : ""),
      name: id
   };

   if (wmode !== 'transparent') opts.bgcolor = bgColor || '#333333';

   // flashvars
   Object.keys(flashvars).forEach(function(key) {
      opts.flashvars += key + "=" + flashvars[key] + "&";
   });

   // parameters
   Object.keys(opts).forEach(function(key) {
      tag += '<param name="' + key + '" value="'+ opts[key] +'"/>';
   });

   tag += "</object>";
   var el = common.createElement('div', {}, tag);
   return common.find('object', el);

};


// Flash is buggy allover
if (window.attachEvent) {
   window.attachEvent("onbeforeunload", function() {
      window.__flash_savedUnloadHandler = window.__flash_unloadHandler = function() {};
   });
}


},{"../common":1}],3:[function(_dereq_,module,exports){
'use strict';
var flowplayer = _dereq_('../flowplayer'),
    common = _dereq_('../common'),
    embed = _dereq_('./embed'),
    extend = _dereq_('extend-object'),
    bean = _dereq_('bean'),
    engineImpl;

engineImpl = function flashEngine(player, root) {

   var conf = player.conf,
      video = player.video,
      loadVideo,
      callbackId,
      objectTag,
      api;

   var win = window;

   var engine = {
      engineName: engineImpl.engineName,

      pick: function(sources) {

        var source = extend({}, (function() {
          if (flowplayer.support.flashVideo) {
            var selectedSource;
            for (var i = 0, source; i < sources.length; i++) {
               source = sources[i];
               if (/mp4|flv|flash/i.test(source.type)) selectedSource = source;
               if (player.conf.swfHls && /mpegurl/i.test(source.type)) selectedSource = source;
               if (selectedSource && !/mp4/i.test(selectedSource.type)) return selectedSource;
               // Did not find any source or source was video/mp4, let's try find more
            }
            return selectedSource; // Accept the fact we don't have anything or just an MP4
          }
        })());
        if (!source) return;
        if (source.src && !isAbsolute(source.src) && !player.conf.rtmp && !source.rtmp) source.src = common.createAbsoluteUrl(source.src);
        return source;
      },

      load: function(video) {
         loadVideo = video;

         function escapeURL(url) {
            return url.replace(/&amp;/g, '%26').replace(/&/g, '%26').replace(/=/g, '%3D');
         }

         var html5Tag = common.findDirect('video', root)[0] || common.find('.fp-player > video', root)[0],
            url = video.src,
            is_absolute = isAbsolute(url);

         var removeTag = function() {
            common.removeNode(html5Tag);
         };
         var hasSupportedSource = function(sources) {
            return sources.some(function(src) {
               return !!html5Tag.canPlayType(src.type);
            });
         };
         if (flowplayer.support.video &&
            common.prop(html5Tag, 'autoplay') &&
            hasSupportedSource(video.sources)) bean.one(html5Tag, 'timeupdate', removeTag);
         else removeTag();

         // convert to absolute
         var rtmp = video.rtmp || conf.rtmp;
         if (!is_absolute && !rtmp) url = common.createAbsoluteUrl(url);

         if (api && isHLS(video) && api.data !== conf.swfHls) engine.unload();

         if (api) {
            ['live', 'preload', 'loop'].forEach(function(prop) {
              if (!video.hasOwnProperty(prop)) return;
              api.__set(prop, video[prop]);
            });
            Object.keys(video.flashls || {}).forEach(function(key) {
              api.__set('hls_' + key, video.flashls[key]);
            });
            var providerChangeNeeded = false;
            if (!is_absolute && rtmp) api.__set('rtmp', rtmp.url || rtmp);
            else {
              var oldRtmp = api.__get('rtmp');
              providerChangeNeeded = !!oldRtmp;
              api.__set('rtmp', null);
            }
            api.__play(url, providerChangeNeeded || video.rtmp && video.rtmp !== conf.rtmp);

         } else {

            callbackId = "fpCallback" + ("" + Math.random()).slice(3, 15);
            url = escapeURL(url);

            var opts = {
               hostname: conf.embedded ? common.hostname(conf.hostname) : common.hostname(location.hostname),
               url: url,
               callback: callbackId
            };
            if (root.getAttribute('data-origin')) {
               opts.origin = root.getAttribute('data-origin');
            }

            // optional conf
            ['proxy', 'key', 'autoplay', 'preload', 'subscribe', 'live', 'loop', 'debug', 'splash', 'poster', 'rtmpt'].forEach(function(key) {
              if (conf.hasOwnProperty(key)) opts[key] = conf[key];
              if (video.hasOwnProperty(key)) opts[key] = video[key];
              if ((conf.rtmp || {}).hasOwnProperty(key)) opts[key] = (conf.rtmp || {})[key];
              if ((video.rtmp || {}).hasOwnProperty(key)) opts[key] = (video.rtmp || {})[key];
            });
            if (conf.rtmp) opts.rtmp = conf.rtmp.url || conf.rtmp;
            if (video.rtmp) opts.rtmp = video.rtmp.url || video.rtmp;
            Object.keys(video.flashls || {}).forEach(function(key) {
              var val = video.flashls[key];
              opts['hls_' + key] = val;
            });
            // bufferTime might be 0
            if (conf.bufferTime !== undefined) opts.bufferTime = conf.bufferTime;

            if (is_absolute) delete opts.rtmp;

            // issues #376
            if (opts.rtmp) {
               opts.rtmp = escapeURL(opts.rtmp);
            }

            // issues #733, 906
            var bgColor = conf.bgcolor || common.css(root, 'background-color') ||'', bg;
            if (bgColor.indexOf('rgb') === 0) {
              bg = toHex(bgColor);
            } else if (bgColor.indexOf('#') === 0) {
              bg = toLongHex(bgColor);
            }

            // issues #387
            opts.initialVolume = player.volumeLevel;

            var swfUrl = isHLS(video) ? conf.swfHls : conf.swf;

            api = embed(swfUrl, opts, conf.wmode, bg)[0];

            var container = common.find('.fp-player', root)[0];

            common.prepend(container, api);

            // throw error if no loading occurs
            setTimeout(function() {
               try {
                  if (!api.PercentLoaded()) {
                     return player.trigger("error", [player, { code: 7, url: conf.swf }]);
                  }
               } catch (e) {}
            }, 5000);

            // detect disabled flash
            setTimeout(function() {
              if (typeof api.PercentLoaded === 'undefined') {
                player.trigger('flashdisabled', [player]);
              }
            }, 1000);

            player.off('resume.flashhack').on('resume.flashhack', function() {
              var timer = setTimeout(function() {
                if (player.playing) {
                  player.trigger('flashdisabled', [player]);
                }
              }, 1000);
              player.one('progress', function() {
                clearTimeout(timer);
              });
            });


            api.pollInterval = setInterval(function () {
               if (!api) return;
               var status = api.__status ? api.__status() : null;

               if (!status) return;

               if (player.playing && status.time && status.time !== player.video.time) player.trigger("progress", [player, status.time]);

               video.buffer = status.buffer / video.bytes * video.duration;
               player.trigger("buffer", [player, video.buffer]);
               if (!video.buffered && status.time > 0) {
                  video.buffered = true;
                  player.trigger("buffered", [player]);
               }

            }, 250);

            // listen
            window[callbackId] = function(type, arg) {
               var video = loadVideo;

               if (conf.debug) {
                 if (type.indexOf('debug') === 0 && arg && arg.length) {
                   console.log.apply(console, ['-- ' + type].concat(arg));
                 }
                 else console.log("--", type, arg);
               }

               var event = {
                 type: type
               };

               switch (type) {

                  // RTMP sends a lot of finish events in vain
                  // case "finish": if (conf.rtmp) return;
                  case "ready": arg = extend(video, arg); break;
                  case "click": event.flash = true; break;
                  case "keydown": event.which = arg; break;
                  case "seek": video.time = arg; break;
                  case "status":
                     player.trigger("progress", [player, arg.time]);

                     if (arg.buffer < video.bytes && !video.buffered) {
                        video.buffer = arg.buffer / video.bytes * video.duration;
                        player.trigger("buffer", video.buffer);
                     } else if (!video.buffered) {
                        video.buffered = true;
                        player.trigger("buffered");
                     }

                     break;
               }
               if (type === 'click' || type === 'keydown') {
                 event.target = root;
                 bean.fire(root, type, [event]);
               }
               else if (type != 'buffered' && type !== 'unload') {
                  // add some delay so that player is truly ready after an event
                  setTimeout(function() { player.trigger(event, [player, arg]); }, 1);
               } else if (type === 'unload') {
                 player.trigger(event, [player, arg]);
               }

            };

         }

      },

      // not supported yet
      speed: common.noop,


      unload: function() {
         if (api && api.__unload) api.__unload();
         try {
           if (callbackId && window[callbackId])delete window[callbackId];
         } catch (e) {}
         common.find("object", root).forEach(common.removeNode);
         api = 0;
         player.off('.flashengine');
         clearInterval(api.pollInterval);
      }

   };

   ['pause','resume','seek','volume'].forEach(function(name) {

      engine[name] = function(arg) {
         try {
           if (player.ready) {

              if (arg === undefined) {
                 api["__" + name]();

              } else {
                 api["__" + name](arg);
              }

           }
         } catch (e) {
           if (typeof api["__" + name] === 'undefined') { //flash lost it's methods
             return player.trigger('flashdisabled', [player]);
           }
           throw e;
         }
      };

   });

   function toHex(bg) {
     function hex(x) {
       return ("0" + parseInt(x).toString(16)).slice(-2);
     }

     bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
     if (!bg) return;

     return '#' + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
   }

   function toLongHex(bg) {
     if (bg.length === 7) return bg;
     var a = bg.split('').slice(1);
     return '#' + a.map(function(i) {
       return i + i;
     }).join('');
   }

   function isHLS(video) {
     return /application\/x-mpegurl/i.test(video.type);
   }

   return engine;

};


engineImpl.engineName = 'flash';
engineImpl.canPlay = function(type, conf) {
  return flowplayer.support.flashVideo && /video\/(mp4|flash|flv)/i.test(type) || flowplayer.support.flashVideo && conf.swfHls && /mpegurl/i.test(type);
};
flowplayer.engines.push(engineImpl);



function isAbsolute(url) {
  return /^https?:/.test(url);
}

},{"../common":1,"../flowplayer":18,"./embed":2,"bean":20,"extend-object":26}],4:[function(_dereq_,module,exports){
'use strict';
var flowplayer = _dereq_('../flowplayer'),
    bean = _dereq_('bean'),
    ClassList = _dereq_('class-list'),
    extend = _dereq_('extend-object'),
    common = _dereq_('../common');
var VIDEO = document.createElement('video');

// HTML5 --> Flowplayer event
var EVENTS = {

   // fired
   ended: 'finish',
   pause: 'pause',
   play: 'resume',
   progress: 'buffer',
   timeupdate: 'progress',
   volumechange: 'volume',
   ratechange: 'speed',
   //seeking: 'beforeseek',
   seeked: 'seek',
   // abort: 'resume',

   // not fired
   loadeddata: 'ready',
   // loadedmetadata: 0,
   // canplay: 0,

   // error events
   // load: 0,
   // emptied: 0,
   // empty: 0,
   error: 'error',
   dataunavailable: 'error',
   webkitendfullscreen: !flowplayer.support.inlineVideo && 'unload'

};

function round(val, per) {
   per = per || 100;
   return Math.round(val * per) / per;
}

function getType(type) {
   return /mpegurl/i.test(type) ? "application/x-mpegurl" : type;
}

function canPlay(type) {
   if (!/^(video|application)/i.test(type))
      type = getType(type);
   return !!VIDEO.canPlayType(type).replace("no", '');
}

function findFromSourcesByType(sources, type) {
   var arr = sources.filter(function(s) {
      return s.type === type;
   });
   return arr.length ? arr[0] : null;
}

var videoTagCache;
var createVideoTag = function(video, autoplay, preload, useCache) {
  if (typeof autoplay === 'undefined') autoplay = true;
  if (typeof preload === 'undefined') preload = 'none';
  if (typeof useCache === 'undefined') useCache = true;
  if (useCache && videoTagCache) {
    videoTagCache.type = getType(video.type);
    videoTagCache.src = video.src;
    common.find('track', videoTagCache).forEach(common.removeNode);
    videoTagCache.removeAttribute('crossorigin');
    return videoTagCache;
  }
  var el  = document.createElement('video');
  el.src = video.src;
  el.type = getType(video.type);
  el.className = 'fp-engine';
  el.autoplay = autoplay ? 'autoplay' : false;
  el.preload = preload;
  el.setAttribute('x-webkit-airplay', 'allow');
  if (useCache) videoTagCache = el;
  return el;
};

var engine;

engine = function(player, root) {

  var api = common.findDirect('video', root)[0] || common.find('.fp-player > video', root)[0],
      support = flowplayer.support,
      track = common.find("track", api)[0],
      conf = player.conf,
      self,
      timer,
      volumeLevel;
   /*jshint -W093 */
   return self = {
      engineName: engine.engineName,

      pick: function(sources) {
        var source = (function() {
          if (support.video) {
            if (conf.videoTypePreference) {
               var mp4source = findFromSourcesByType(sources, conf.videoTypePreference);
               if (mp4source) return mp4source;
            }

            for (var i = 0, source; i < sources.length; i++) {
               if (canPlay(sources[i].type)) return sources[i];
            }
          }
        })();
        if (!source) return;
        if (typeof source.src === 'string') source.src = common.createAbsoluteUrl(source.src);
        return source;
      },

      load: function(video) {
         var created = false, container = common.find('.fp-player', root)[0], reload = false;
         if (conf.splash && !api) {
           api = createVideoTag(video);
           common.prepend(container, api);
           created = true;
         } else if (!api) {
           api = createVideoTag(video, !!video.autoplay || !!conf.autoplay, conf.clip.preload || 'metadata', false);
           common.prepend(container, api);
           created = true;
         } else {
           ClassList(api).add('fp-engine');
           common.find('source,track', api).forEach(common.removeNode);
           if (!player.conf.nativesubtitles) common.attr(api, 'crossorigin', false);
           reload = api.src === video.src;
         }
         if (!support.inlineVideo) {
           common.css(api, {
             position: 'absolute',
             top: '-9999em'
           });
         }
         //TODO subtitles support

         // IE does not fire delegated timeupdate events
         bean.off(api, 'timeupdate', common.noop);
         bean.on(api, 'timeupdate', common.noop);

         common.prop(api, 'loop', !!(video.loop || conf.loop));

         if (typeof volumeLevel !== 'undefined') {
           api.volume = volumeLevel;
         }

         if (player.video.src && video.src != player.video.src || video.index) common.attr(api, 'autoplay', 'autoplay');
         api.src = video.src;
         api.type = video.type;

         self._listeners = listen(api, common.find("source", api).concat(api), video);

         // iPad (+others?) demands load()
         if (conf.clip.preload != 'none' && video.type != "mpegurl" || !support.zeropreload || !support.dataload) api.load();
         if (created || reload) api.load();
         if (api.paused && (video.autoplay || conf.autoplay)) api.play();
      },

      pause: function() {
         api.pause();
      },

      resume: function() {
         api.play();
      },

      speed: function(val) {
         api.playbackRate = val;
      },

      seek: function(time) {
         try {
            var pausedState = player.paused;
            api.currentTime = time;
            if (pausedState) api.pause();
         } catch (ignored) {}
      },

      volume: function(level) {
         volumeLevel = level;
         if (api) {
            api.volume = level;
         }
      },

      unload: function() {
         common.find('video.fp-engine', root).forEach(common.removeNode);
         if (!support.cachedVideoTag) videoTagCache = null;
         timer = clearInterval(timer);
         var instanceId = root.getAttribute('data-flowplayer-instance-id');
         delete api.listeners[instanceId];
         api = 0;
         if (self._listeners) Object.keys(self._listeners).forEach(function(typ) {
           self._listeners[typ].forEach(function(l) {
             root.removeEventListener(typ, l, true);
           });
         });
      }

   };

   function listen(api, sources, video) {
      // listen only once
      var instanceId = root.getAttribute('data-flowplayer-instance-id');

      if (api.listeners && api.listeners.hasOwnProperty(instanceId)) {
        api.listeners[instanceId] = video;
        return;
      }
      (api.listeners || (api.listeners = {}))[instanceId] = video;

      bean.on(sources, 'error', function(e) {
         try {
            if (canPlay(e.target.getAttribute('type'))) {
               player.trigger("error", [player, { code: 4, video: extend(video, {src: api.src, url: api.src}) }]);
            }
         } catch (er) {
            // Most likely: https://bugzilla.mozilla.org/show_bug.cgi?id=208427
         }
      });

      player.on('shutdown', function() {
        bean.off(sources);
      });

      var eventListeners = {};

      Object.keys(EVENTS).forEach(function(type) {
        var flow = EVENTS[type];
        if (!flow) return;
        var l = function(e) {
          video = api.listeners[instanceId];
          if (!e.target || !ClassList(e.target).contains('fp-engine')) return;

            if (conf.debug && !/progress/.test(flow)) console.log(type, "->", flow, e);

            // no events if player not ready
            if (!player.ready && !/ready|error/.test(flow) || !flow || !common.find('video', root).length) { return; }

            var arg, vtype;

            if (flow === 'unload') { //Call player unload
              player.unload();
              return;
            }

            var triggerEvent = function() {
              player.trigger(flow, [player, arg]);
            };

            switch (flow) {

               case "ready":

                  arg = extend(video, {
                     duration: api.duration,
                     width: api.videoWidth,
                     height: api.videoHeight,
                     url: api.currentSrc,
                     src: api.currentSrc
                  });

                  try {
                     arg.seekable = !player.live && /mpegurl/i.test(video ? (video.type || '') : '') && api.duration || api.seekable && api.seekable.end(null);

                  } catch (ignored) {}

                  // buffer
                  timer = timer || setInterval(function() {

                     try {
                        arg.buffer = api.buffered.end(null);

                     } catch (ignored) {}

                     if (arg.buffer) {
                        if (round(arg.buffer, 1000) < round(arg.duration, 1000) && !arg.buffered) {
                           player.trigger("buffer", e);

                        } else if (!arg.buffered) {
                           arg.buffered = true;
                           player.trigger("buffer", e).trigger("buffered", e);
                           clearInterval(timer);
                           timer = 0;
                        }
                     }

                  }, 250);

                  if (!player.live && !arg.duration && !support.hlsDuration && type === "loadeddata") {
                     var durationChanged = function() {
                        arg.duration = api.duration;
                        try {
                           arg.seekable = api.seekable && api.seekable.end(null);

                        } catch (ignored) {}
                        triggerEvent();
                        api.removeEventListener('durationchange', durationChanged);
                        ClassList(root).remove('is-live');
                     };
                     api.addEventListener('durationchange', durationChanged);

                     // Ugly hack to handle broken Android devices
                     var timeUpdated = function() {
                       if (!player.ready && !api.duration) { // No duration even though the video already plays
                         arg.duration = 0;
                         ClassList(root).add('is-live'); // Make UI believe it's live
                         triggerEvent();
                       }
                       api.removeEventListener('timeupdate', timeUpdated);
                     };
                     api.addEventListener('timeupdate', timeUpdated);
                     return;
                  }

                  break;

               case "progress": case "seek":

                  var dur = player.video.duration;

                  if (api.currentTime > 0 || player.live) {
                     arg = Math.max(api.currentTime, 0);

                  } else if (flow == 'progress') {
                     return;
                  }
                  break;


               case "speed":
                  arg = round(api.playbackRate);
                  break;

               case "volume":
                  arg = round(api.volume);
                  break;

               case "error":
                  try {
                     arg = (e.srcElement || e.originalTarget).error;
                     arg.video = extend(video, {src: api.src, url: api.src});
                  } catch (er) {
                     // Most likely https://bugzilla.mozilla.org/show_bug.cgi?id=208427
                     return;
                  }
            }

            triggerEvent();


        };
        root.addEventListener(type, l, true);
        if (!eventListeners[type]) eventListeners[type] = [];
        eventListeners[type].push(l);

      });
      return eventListeners;

   }

};


engine.canPlay = function(type) {
  return flowplayer.support.video && canPlay(type);
};

engine.engineName = 'html5';

flowplayer.engines.push(engine);

},{"../common":1,"../flowplayer":18,"bean":20,"class-list":22,"extend-object":26}],5:[function(_dereq_,module,exports){
'use strict';
/* global _gat */
var flowplayer = _dereq_('../flowplayer'),
    TYPE_RE = _dereq_('./resolve').TYPE_RE,
    scriptjs = _dereq_('scriptjs'),
    bean = _dereq_('bean');
flowplayer(function(player, root) {

   var id = player.conf.analytics, time = 0, last = 0, timer;

   if (id) {

      // load Analytics script if needed
      if (typeof _gat == 'undefined') scriptjs("//google-analytics.com/ga.js");

      var getTracker = function() {
        var tracker = _gat._getTracker(id);
        tracker._setAllowLinker(true);
        return tracker;
      };

      var  track = function track(e, api, video) {

         video = video || player.video;

         if (time && typeof _gat != 'undefined') {
            var tracker = getTracker();


            // http://code.google.com/apis/analytics/docs/tracking/eventTrackerGuide.html
            tracker._trackEvent(
               "Video / Seconds played",
               player.engine.engineName + "/" + video.type,
               video.title || root.getAttribute("title") || video.src.split("/").slice(-1)[0].replace(TYPE_RE, ''),
               Math.round(time / 1000)
            );
            time = 0;
            if (timer) {
              clearTimeout(timer);
              timer = null;
            }
         }

      };

      player.bind("load unload", track).bind("progress", function() {

         if (!player.seeking) {
            time += last ? (+new Date() - last) : 0;
            last = +new Date();
         }

         if (!timer) {
           timer = setTimeout(function() {
             timer = null;
             var tracker = getTracker();
             tracker._trackEvent('Flowplayer heartbeat', 'Heartbeat', '', 0, true);
           }, 10*60*1000); // heartbeat every 10 minutes
         }

      }).bind("pause", function() {
         last = 0;
      });

      player.bind('shutdown', function() {
        bean.off(window, 'unload', track);
      });

      bean.on(window, 'unload', track);

   }

});

},{"../flowplayer":18,"./resolve":13,"bean":20,"scriptjs":29}],6:[function(_dereq_,module,exports){
'use strict';
var flowplayer = _dereq_('../flowplayer'),
    ClassList = _dereq_('class-list'),
    common = _dereq_('../common'),
    bean = _dereq_('bean');

flowplayer(function(player, root) {

   var CUE_RE = / ?cue\d+ ?/;

   var lastTime = 0, cuepointsDisabled = false;

   function setClass(index) {
      root.className = root.className.replace(CUE_RE, " ");
      if (index >= 0) ClassList(root).add('cue' + index);
   }

   var segments = {}, lastFiredSegment = -0.125;

   var fire = function(cue) {
     var idx = player.cuepoints.indexOf(cue);
     if (!isNaN(cue)) cue = { time: cue };
     cue.index = idx;
     setClass(idx);
     player.trigger('cuepoint', [player, cue]);
   };

   player.on("progress", function(e, api, time) {
     if (cuepointsDisabled) return;
      var segment = segmentForCue(time);
      while (lastFiredSegment < segment) {
        lastFiredSegment += 0.125;
        if (!segments[lastFiredSegment]) continue;
        segments[lastFiredSegment].forEach(fire);
      }

   }).on("unload", setClass)
   .on('beforeseek', function(ev) {
     setTimeout(function() {
       if (!ev.defaultPrevented) cuepointsDisabled = true;
     });
   }).on("seek", function(ev, api, time) {
     setClass();
     lastFiredSegment = segmentForCue(time || 0) - 0.125;
     cuepointsDisabled = false;
     if (!time && segments[0]) segments[0].forEach(fire);
   }).on('ready', function(e, api, video) {
     lastFiredSegment = -0.125;
     var cues = video.cuepoints || player.conf.cuepoints || [];
     player.setCuepoints(cues);
   }).on('finish', function() {
     lastFiredSegment = -0.125;
   });
   if (player.conf.generate_cuepoints) {

      player.bind("load", function() {

         // clean up cuepoint elements of previous playlist items
         common.find('.fp-cuepoint', root).forEach(common.removeNode);

      });
   }

   /**
    * API
    */
   player.setCuepoints = function(cues) {
     player.cuepoints = [];
     segments = {};
     cues.forEach(player.addCuepoint);
     return player;
   };
   player.addCuepoint = function(cue) {
     if (!player.cuepoints) player.cuepoints = [];
     var segment = segmentForCue(cue);
     if (!segments[segment]) segments[segment] = [];
     segments[segment].push(cue);
     player.cuepoints.push(cue);

    if (player.conf.generate_cuepoints && cue.visible !== false) {
       var duration = player.video.duration,
           timeline = common.find('.fp-timeline', root)[0];
        common.css(timeline, "overflow", "visible");

        var time = cue.time || cue;
        if (time < 0) time = duration + time;

        var el = common.createElement('a', {className: 'fp-cuepoint fp-cuepoint' + (player.cuepoints.length - 1)});
        common.css(el, "left", (time / duration * 100) + "%");

        timeline.appendChild(el);
        bean.on(el, 'mousedown', function(e) {
          e.preventDefault();
          e.stopPropagation();
          player.seek(time);
        });
    }
    return player;
   };

   player.removeCuepoint = function(cue) {
     var idx = player.cuepoints.indexOf(cue),
         segment = segmentForCue(cue);
     if (idx === -1) return;
     player.cuepoints = player.cuepoints.slice(0, idx).concat(player.cuepoints.slice(idx+1));

     var sIdx = segments[segment].indexOf(cue);
     if (sIdx === -1) return;
     segments[segment] = segments[segment].slice(0, sIdx).concat(segments[segment].slice(sIdx+1));
     return player;
   };

   function segmentForCue(cue) {
     var time = cue && !isNaN(cue.time) ? cue.time : cue;
     if (time < 0) time = player.video.duration + time;
     return Math.round(time/0.125)*0.125;
   }

});

},{"../common":1,"../flowplayer":18,"bean":20,"class-list":22}],7:[function(_dereq_,module,exports){
'use strict';
var flowplayer = _dereq_('../flowplayer'),
    bean = _dereq_('bean'),
    common = _dereq_('../common'),
    isObject = _dereq_('is-object'),
    extend = _dereq_('extend-object'),
    ClassList = _dereq_('class-list');



flowplayer(function(player, root) {

   // no embedding
   if (player.conf.embed === false) return;

   var conf = player.conf,
      ui = common.find('.fp-ui', root)[0],
      trigger = common.createElement('a', { "class": "fp-embed", title: 'Copy to your site'}),
      target = common.createElement('div',{ 'class': 'fp-embed-code'}, '<label>Paste this HTML code on your site to embed.</label><textarea></textarea>'),
      area = common.find("textarea", target)[0];

   ui.appendChild(trigger);
   ui.appendChild(target);

   player.embedCode = function() {
     var embedConf = player.conf.embed || {},
         video = player.video;

     if (embedConf.iframe) {
       var src = player.conf.embed.iframe,
           width = embedConf.width || video.width || common.width(root),
           height = embedConf.height || video.height || common.height(root);
       return '<iframe src="' + player.conf.embed.iframe + '" allowfullscreen style="width:' + width + ';height:' + height + ';border:none;"></iframe>';
     }
     var props = ['ratio', 'rtmp', 'live', 'bufferTime', 'origin', 'analytics', 'key', 'subscribe', 'swf', 'swfHls', 'embed', 'adaptiveRatio', 'logo'];
     if (embedConf.playlist) props.push('playlist');
     var c = common.pick(player.conf, props);
     if (c.logo) c.logo = common.createElement('img', {src: c.logo}).src;
     if (!embedConf.playlist || !player.conf.playlist.length) c.clip =  extend({}, player.conf.clip, common.pick(player.video, ['sources']));
     var script = "var w=window,d=document,e;w._fpes||(w._fpes=[],w.addEventListener(\"load\",function(){var s=d.createElement(\"script\");s.src=\"//embed.flowplayer.org/6.0.5/embed.min.js\",d.body.appendChild(s)})),e=[].slice.call(d.getElementsByTagName(\"script\"),-1)[0].parentNode,w._fpes.push({e:e,l:\"$library\",c:$conf});\n".replace('$conf', JSON.stringify(c)).replace('$library', embedConf.library || '');

     return '<a href="$href">Watch video!\n<script>$script</script></a>'.replace('$href', player.conf.origin || window.location.href).replace('$script', script);

   };
   fptip(root, ".fp-embed", "is-embedding");

   bean.on(root, 'click', '.fp-embed-code textarea',  function() {
      area.select();
   });

   bean.on(root, 'click', '.fp-embed', function() {
      area.textContent = player.embedCode().replace(/(\r\n|\n|\r)/gm,"");
      area.focus();
      area.select();
   });

});

var fptip = function(root, trigger, active) {

  function close() {
    rootClasses.remove(active);
    bean.off(document, '.st');
  }

  var rootClasses = ClassList(root);

  bean.on(root, 'click', trigger || 'a', function(e) {
    e.preventDefault();

    rootClasses.toggle(active);

    if (rootClasses.contains(active)) {

      bean.on(document, 'keydown.st', function(e) {
        if (e.which == 27) close();
      });
      bean.on(document, 'click.st', function(e) {
        if (!common.hasParent(e.target, '.' + active)) close();
      });
    }
  });
};


},{"../common":1,"../flowplayer":18,"bean":20,"class-list":22,"extend-object":26,"is-object":28}],8:[function(_dereq_,module,exports){
'use strict';
/* global jQuery */
/**
 * Mimimal jQuery-like event emitter implementation
 */
module.exports = function(obj, elem) {
  if (!elem) elem = document.createElement('div'); //In this case we always want to trigger (Custom)Events on dom element
  var handlers = {}, eventArguments = {};

  var listenEvent = function(type, hndlr, disposable) {
    var actualEvent = type.split('.')[0]; //Strip namespace
    var internalHandler = function(ev) {
      if (disposable) {
        elem.removeEventListener(actualEvent, internalHandler);
        handlers[type].splice(handlers[type].indexOf(internalHandler), 1);
      }
      var args = [ev].concat(eventArguments[ev.timeStamp + ev.type] || []);
      if (hndlr) hndlr.apply(undefined, args);
    };
    elem.addEventListener(actualEvent, internalHandler);

    //Store handlers for unbinding
    if (!handlers[type]) handlers[type] = [];
    handlers[type].push(internalHandler);
  };

  obj.on = obj.bind = function(typ, hndlr) {
    var types = typ.split(' ');
    types.forEach(function(type) {
      listenEvent(type, hndlr);
    });
    return obj; //for chaining
  };

  obj.one = function(typ, hndlr) {
    var types = typ.split(' ');
    types.forEach(function(type) {
      listenEvent(type, hndlr, true);
    });
    return obj;
  };

  // Function to check if all items in toBeContained array are in the containing array
  var containsAll = function(containing, toBeContained) {
    return toBeContained.filter(function(i) {
      return containing.indexOf(i) === -1;
    }).length === 0;
  };


  obj.off = obj.unbind = function(typ) {
    var types = typ.split(' ');
    types.forEach(function(type) {
      var typeNameSpaces = type.split('.').slice(1),
          actualType = type.split('.')[0];
      Object.keys(handlers).filter(function(t) {
        var handlerNamespaces = t.split('.').slice(1);
        return (!actualType || t.indexOf(actualType) === 0) && containsAll(handlerNamespaces, typeNameSpaces);
      }).forEach(function(t) {
        var registererHandlers = handlers[t],
            actualEvent = t.split('.')[0];
        registererHandlers.forEach(function(hndlr) {
          elem.removeEventListener(actualEvent, hndlr);
          registererHandlers.splice(registererHandlers.indexOf(hndlr), 1);
        });
      });
    });
    return obj;
  };

  obj.trigger = function(typ, args, returnEvent) {
    if (!typ) return;
    args = (args || []).length ? args || [] : [args];
    var event = document.createEvent('Event'), typStr;
    typStr = typ.type || typ;
    event.initEvent(typStr, false, true);
    if (Object.defineProperty) event.preventDefault = function() {
      Object.defineProperty(this, 'defaultPrevented', { get: function() { return true; } });
    };
    eventArguments[event.timeStamp + event.type] = args;
    elem.dispatchEvent(event);
    return returnEvent ? event : obj;
  };
};


module.exports.EVENTS = [
  'beforeseek',
  'disable',
  'error',
  'finish',
  'fullscreen',
  'fullscreen-exit',
  'load',
  'mute',
  'pause',
  'progress',
  'ready',
  'resume',
  'seek',
  'speed',
  'stop',
  'unload',
  'volume',
  'boot',
  'shutdown'
];

},{}],9:[function(_dereq_,module,exports){
'use strict';
var flowplayer = _dereq_('../flowplayer'),
    bean = _dereq_('bean'),
    ClassList = _dereq_('class-list'),
    extend = _dereq_('extend-object'),
    common = _dereq_('../common'),
   VENDOR = flowplayer.support.browser.mozilla ? "moz": "webkit",
   FS_ENTER = "fullscreen",
   FS_EXIT = "fullscreen-exit",
   FULL_PLAYER,
   FS_SUPPORT = flowplayer.support.fullscreen,
   FS_NATIVE_SUPPORT = typeof document.exitFullscreen == 'function',
   ua = navigator.userAgent.toLowerCase(),
   IS_SAFARI = /(safari)[ \/]([\w.]+)/.exec(ua) && !/(chrome)[ \/]([\w.]+)/.exec(ua);


// esc button
bean.on(document, "fullscreenchange.ffscr webkitfullscreenchange.ffscr mozfullscreenchange.ffscr MSFullscreenChange.ffscr", function(e) {
  var el = document.webkitCurrentFullScreenElement || document.mozFullScreenElement || document.fullscreenElement || document.msFullscreenElement || e.target;
  if (!FULL_PLAYER && (!el.parentNode || !el.parentNode.getAttribute('data-flowplayer-instance-id'))) return;
  var player = FULL_PLAYER || flowplayer(el.parentNode);
  if (el && !FULL_PLAYER) {
     FULL_PLAYER = player.trigger(FS_ENTER, [el]);
  } else {
     FULL_PLAYER.trigger(FS_EXIT, [FULL_PLAYER]);
     FULL_PLAYER = null;
  }
 });

flowplayer(function(player, root) {

   var wrapper = common.createElement('div', {className: 'fp-player'});
   Array.prototype.map.call(root.children, common.identity).forEach(function(el) {
     if (common.matches(el, '.fp-ratio,script')) return;
     wrapper.appendChild(el);
   });
   root.appendChild(wrapper);

   if (!player.conf.fullscreen) return;

   var win = window,
      scrollY,
      scrollX,
      rootClasses = ClassList(root);

   player.isFullscreen = false;

   player.fullscreen = function(flag) {

      if (player.disabled) return;

      if (flag === undefined) flag = !player.isFullscreen;

      if (flag) {
        scrollY = win.scrollY;
        scrollX = win.scrollX;
      }

      if (FS_SUPPORT) {

         if (flag) {
            ['requestFullScreen', 'webkitRequestFullScreen', 'mozRequestFullScreen', 'msRequestFullscreen'].forEach(function(fName) {
               if (typeof wrapper[fName] === 'function') {
                  wrapper[fName](Element.ALLOW_KEYBOARD_INPUT);
                  if (IS_SAFARI && !document.webkitCurrentFullScreenElement && !document.mozFullScreenElement) { // Element.ALLOW_KEYBOARD_INPUT not allowed
                     wrapper[fName]();
                  }
                  return false;
               }
            });

         } else {
            ['exitFullscreen', 'webkitCancelFullScreen', 'mozCancelFullScreen', 'msExitFullscreen'].forEach(function(fName) {
              if (typeof document[fName] === 'function') {
                document[fName]();
                return false;
              }
            });
         }

      } else {
         player.trigger(flag ? FS_ENTER : FS_EXIT, [player]);
      }

      return player;
   };

   var lastClick;

   player.on("mousedown.fs", function() {
      if (+new Date() - lastClick < 150 && player.ready) player.fullscreen();
      lastClick = +new Date();
   });

   player.on(FS_ENTER, function(e) {
      rootClasses.add("is-fullscreen");
      if (!FS_SUPPORT) common.css(root, 'position', 'fixed');
      player.isFullscreen = true;

   }).on(FS_EXIT, function(e) {
      var oldOpacity;
      if (!FS_SUPPORT && player.engine === "html5") {
        oldOpacity = root.css('opacity') || '';
        common.css(root, 'opacity', 0);
      }
      if (!FS_SUPPORT) common.css(root, 'position', '');
      rootClasses.remove("is-fullscreen");
      if (!FS_SUPPORT && player.engine === "html5") setTimeout(function() { root.css('opacity', oldOpacity); });
      player.isFullscreen = false;
      win.scrollTo(scrollX, scrollY);
   }).on('unload', function() {
     if (player.isFullscreen) player.fullscreen();
   });

   player.on('shutdown', function() {
     FULL_PLAYER = null;
   });

});

},{"../common":1,"../flowplayer":18,"bean":20,"class-list":22,"extend-object":26}],10:[function(_dereq_,module,exports){
'use strict';
var flowplayer = _dereq_('../flowplayer'),
    bean = _dereq_('bean'),
    focused,
    focusedRoot,
    IS_HELP = "is-help",
    common = _dereq_('../common'),
    ClassList = _dereq_('class-list');

 // keyboard. single global listener
bean.on(document, "keydown.fp", function(e) {

   var el = focused,
      metaKeyPressed = e.ctrlKey || e.metaKey || e.altKey,
      key = e.which,
      conf = el && el.conf,
      focusedRootClasses = focusedRoot && ClassList(focusedRoot);

   if (!el || !conf.keyboard || el.disabled) return;

   // help dialog (shift key not truly required)
   if ([63, 187, 191].indexOf(key) != -1) {
      focusedRootClasses.toggle(IS_HELP);
      return false;
   }

   // close help / unload
   if (key == 27 && focusedRootClasses.contains(IS_HELP)) {
      focusedRootClasses.toggle(IS_HELP);
      return false;
   }

   if (!metaKeyPressed && el.ready) {

      e.preventDefault();

      // slow motion / fast forward
      if (e.shiftKey) {
         if (key == 39) el.speed(true);
         else if (key == 37) el.speed(false);
         return;
      }

      // 1, 2, 3, 4 ..
      if (key < 58 && key > 47) return el.seekTo(key - 48);

      switch (key) {
         case 38: case 75: el.volume(el.volumeLevel + 0.15); break;        // volume up
         case 40: case 74: el.volume(el.volumeLevel - 0.15); break;        // volume down
         case 39: case 76: el.seeking = true; el.seek(true); break;        // forward
         case 37: case 72: el.seeking = true; el.seek(false); break;       // backward
         case 190: el.seekTo(); break;                                     // to last seek position
         case 32: el.toggle(); break;                                      // spacebar
         case 70: if(conf.fullscreen) el.fullscreen(); break;               // toggle fullscreen
         case 77: el.mute(); break;                                        // mute
         case 81: el.unload(); break;                                      // unload/stop
      }

   }

});

flowplayer(function(api, root) {

   // no keyboard configured
   if (!api.conf.keyboard) return;

   // hover
   bean.on(root, "mouseenter mouseleave", function(e) {
      focused = !api.disabled && e.type == 'mouseover' ? api : 0;
      if (focused) focusedRoot = root;
   });

   var speedhelp = flowplayer.support.video && api.conf.engine !== "flash" &&
      !!document.createElement('video').playbackRate ?
      '<p><em>shift</em> + <em>&#8592;</em><em>&#8594;</em>slower / faster</p>' : '';

   // TODO: add to player-layout.html
   root.appendChild(common.createElement('div', { className: 'fp-help' }, '\
         <a class="fp-close"></a>\
         <div class="fp-help-section fp-help-basics">\
            <p><em>space</em>play / pause</p>\
            <p><em>q</em>unload | stop</p>\
            <p><em>f</em>fullscreen</p>' + speedhelp + '\
         </div>\
         <div class="fp-help-section">\
            <p><em>&#8593;</em><em>&#8595;</em>volume</p>\
            <p><em>m</em>mute</p>\
         </div>\
         <div class="fp-help-section">\
            <p><em>&#8592;</em><em>&#8594;</em>seek</p>\
            <p><em>&nbsp;. </em>seek to previous\
            </p><p><em>1</em><em>2</em>&hellip; <em>6</em> seek to 10%, 20% &hellip; 60% </p>\
         </div>\
   '));

   if (api.conf.tooltip) {
     var ui = common.find('.fp-ui', root)[0];
     ui.setAttribute('title', 'Hit ? for help');
     bean.one(root, "mouseout.tip", '.fp-ui', function() {
       ui.removeAttribute('title');
     });
   }

   bean.on(root, 'click', '.fp-close', function() {
     ClassList(root).toggle(IS_HELP);
   });

   api.bind('shutdown', function() {
     if (focusedRoot == root) focusedRoot = null;
   });

});


},{"../common":1,"../flowplayer":18,"bean":20,"class-list":22}],11:[function(_dereq_,module,exports){
'use strict';
var flowplayer = _dereq_('../flowplayer'),
    isIeMobile = /IEMobile/.test(window.navigator.userAgent),
    ClassList = _dereq_('class-list'),
    common = _dereq_('../common'),
    bean = _dereq_('bean'),
    format = _dereq_('./ui').format,
    UA = window.navigator.userAgent;
if (flowplayer.support.touch || isIeMobile) {

   flowplayer(function(player, root) {
      var isAndroid = /Android/.test(UA) && !/Firefox/.test(UA) && !/Opera/.test(UA),
          isSilk = /Silk/.test(UA),
          androidVer = isAndroid ? parseFloat(/Android\ ((\d+\.\d+)|\d+)/.exec(UA)[1], 10) : 0,
          rootClasses = ClassList(root);

      // custom load for android
      if (isAndroid && !isIeMobile) {
         if (!/Chrome/.test(UA) && androidVer < 4) {
            var originalLoad = player.load;
            player.load = function(video, callback) {
               var ret = originalLoad.apply(player, arguments);
               player.trigger('ready', [player, player.video]);
               return ret;
            };
         }
         var timer, currentTime = 0;
         var resumeTimer = function(api) {
           timer = setInterval(function() {
             api.video.time = ++currentTime;
             api.trigger('progress', [api, currentTime]);
           }, 1000);
         };
         player.bind('ready pause unload', function() {
           if (timer) {
             clearInterval(timer);
             timer = null;
           }
         });
         player.bind('ready', function() {
           currentTime = 0;
         });
         player.bind('resume', function(ev, api) {
           if (!api.live) return;
           if (currentTime) { return resumeTimer(api); }
           player.one('progress', function(ev, api, t) {
             if (t === 0) { // https://github.com/flowplayer/flowplayer/issues/727
               resumeTimer(api);
             }
           });
         });
      }

      // hide volume
      if (!flowplayer.support.volume) {
         rootClasses.add("no-volume");
         rootClasses.add("no-mute");
      }
      rootClasses.add("is-touch");
      if (player.sliders && player.sliders.timeline) player.sliders.timeline.disableAnimation();

      if (!flowplayer.support.inlineVideo || player.conf.native_fullscreen) player.conf.nativesubtitles = true;

      // fake mouseover effect with click
      var hasMoved = false;
      bean.on(root, 'touchmove', function() {
        hasMoved = true;
      });
      bean.on(root, 'touchend click', function(e) {
        if (hasMoved) { //not intentional, most likely scrolling
          hasMoved = false;
          return;
        }

        if (player.playing && !rootClasses.contains("is-mouseover")) {
          rootClasses.add("is-mouseover");
          rootClasses.remove("is-mouseout");
          e.preventDefault();
          e.stopPropagation();
          return;
        }

        if (!player.playing && !player.splash && rootClasses.contains('is-mouseout') && !rootClasses.contains('is-mouseover')) {
          setTimeout(function() {
            if (!player.playing && !player.splash) {
              player.resume();
            }
          }, 400);
        }


      });

      // native fullscreen
      if (player.conf.native_fullscreen && typeof document.createElement('video').webkitEnterFullScreen === 'function') {
         player.fullscreen = function() {
            var video = common.find('video.fp-engine', root)[0];
            video.webkitEnterFullScreen();
            bean.one(video, 'webkitendfullscreen', function() {
              common.prop(video, 'controls', true);
              common.prop(video, 'controls', false);
            });
         };
      }


      // Android browser gives video.duration == 1 until second 'timeupdate' event
      if (isAndroid || isSilk) player.bind("ready", function() {

         var video = common.find('video.fp-engine', root)[0];
         bean.one(video, 'canplay', function() {
            video.play();
         });
         video.play();

         player.bind("progress.dur", function() {

            var duration = video.duration;

            if (duration !== 1) {
               player.video.duration = duration;
               common.find(".fp-duration", root)[0].innerHTML = format(duration);
               player.unbind("progress.dur");
            }
         });
      });


   });

}


},{"../common":1,"../flowplayer":18,"./ui":17,"bean":20,"class-list":22}],12:[function(_dereq_,module,exports){
'use strict';
var flowplayer = _dereq_('../flowplayer'),
    extend = _dereq_('extend-object'),
    bean = _dereq_('bean'),
    ClassList = _dereq_('class-list'),
    common = _dereq_('../common'),
    Resolve = _dereq_('./resolve'),
    resolver = new Resolve(),
    $ = window.jQuery,
    externalRe = /^#/;
flowplayer(function(player, root) {

   var conf = extend({ active: 'is-active', advance: true, query: ".fp-playlist a" }, player.conf),
      klass = conf.active, rootClasses = ClassList(root);

   // getters
   function els() {
     return common.find(conf.query, queryRoot());
   }

   function queryRoot() {
     if (externalRe.test(conf.query)) return;
     return root;
   }

   function active() {
      return common.find(conf.query + "." + klass, queryRoot());
   }


   player.play = function(i) {
      if (i === undefined) return player.resume();
      if (typeof i === 'number' && !player.conf.playlist[i]) return player;
      else if (typeof i != 'number') return player.load.apply(null, arguments);
      var arg = extend({index: i}, player.conf.playlist[i]);
      if (i === player.video.index) return player.load(arg, function() { player.resume(); });
      player.off('resume.fromfirst'); // Don't start from beginning if clip explicitely chosen
      player.load(arg, function() {
        player.video.index = i;
      });
      return player;
   };

   player.next = function(e) {
      if (e) e.preventDefault();
      var current = player.video.index;
      if (current != -1) {
         current = current === player.conf.playlist.length - 1 ? 0 : current + 1;
         player.play(current);
      }
      return player;
   };

   player.prev = function(e) {
      if (e) e.preventDefault();
      var current = player.video.index;
      if (current != -1) {
         current = current === 0 ? player.conf.playlist.length - 1 : current - 1;
         player.play(current);
      }
      return player;
   };

   player.setPlaylist = function(items) {
     player.conf.playlist = items;
     delete player.video.index;
     generatePlaylist();
     return player;
   };

   player.addPlaylistItem = function(item) {
     return player.setPlaylist(player.conf.playlist.concat([item]));
   };

   player.removePlaylistItem = function(idx) {
     var pl = player.conf.playlist;
     return player.setPlaylist(pl.slice(0, idx).concat(pl.slice(idx+1)));
   };

   bean.on(root, 'click', '.fp-next', player.next);
   bean.on(root, 'click', '.fp-prev', player.prev);

   if (conf.advance) {
      player.off("finish.pl").on("finish.pl", function(e, player) {
         // clip looping
         if (player.video.loop) return player.seek(0, function() { player.resume(); });
         // next clip is found or loop
         var next = player.video.index >= 0 ? player.video.index + 1 : undefined;
         if (next < player.conf.playlist.length || conf.loop) {
            next = next === player.conf.playlist.length ? 0 : next;
            rootClasses.remove('is-finished');
            setTimeout(function() { // Let other finish callbacks fire first
               player.play(next);
            });

         // stop to last clip, play button starts from 1:st clip
         } else {

            // If we have multiple items in playlist, start from first
            if (player.conf.playlist.length > 1) player.one("resume.fromfirst", function() {
               player.play(0);
               return false;
            });
         }
      });
   }

   function generatePlaylist() {
      var plEl = common.find('.fp-playlist', root)[0];
      if (!plEl) {
         plEl = common.createElement('div', {className: 'fp-playlist'});
         var cntrls = common.find('.fp-next,.fp-prev', root);
         if (!cntrls.length) common.insertAfter(root, common.find('video', root)[0], plEl);
         else cntrls[0].parentElement.insertBefore(plEl, cntrls[0]);
      }
      plEl.innerHTML = '';
      if (player.conf.playlist[0].length) { // FP5 style playlist
        player.conf.playlist = player.conf.playlist.map(function(itm) {
          if (typeof itm === 'string') {
            var type = itm.split(Resolve.TYPE_RE)[1];
            return {
              sources: [{
                type: type.toLowerCase() === 'm3u8' ? 'application/x-mpegurl' : 'video/' + type,
                src: itm
              }]
            };
          }
          return {
            sources: itm.map(function(src) {
              var s = {};
              Object.keys(src).forEach(function(k) {
                s.type = /mpegurl/i.test(k) ? 'application/x-mpegurl' : 'video/' + k;
                s.src = src[k];
              });
              return s;
            })
          };
        });
      }
      player.conf.playlist.forEach(function(item, i) {
         var href = item.sources[0].src;
         plEl.appendChild(common.createElement('a', {
            href: href,
            'data-index': i
         }));
      });
   }

   var playlistInitialized = false;
   if (player.conf.playlist.length) { // playlist configured by javascript, generate playlist
      playlistInitialized = true;
      generatePlaylist();
      if (!player.conf.clip || !player.conf.clip.sources.length) {
        player.conf.clip = player.conf.playlist[player.conf.startIndex || 0];
      }
   }

   if (els().length && !playlistInitialized) { //generate playlist from existing elements
       player.conf.playlist = [];
       delete player.conf.startIndex;
       els().forEach(function(el) {
          var src = el.href;
          el.setAttribute('data-index', player.conf.playlist.length);
          var itm = resolver.resolve(src, player.conf.clip.sources);
          if ($) {
            extend(itm, $(el).data());
          }
          player.conf.playlist.push(itm);
       });
    }

    /* click -> play */
    bean.on(externalRe.test(conf.query) ? document : root, "click", conf.query, function(e) {
       e.preventDefault();
       var el = e.currentTarget;
       var toPlay = Number(el.getAttribute('data-index'));
       if (toPlay != -1) {
          player.play(toPlay);
       }
    });

    // highlight
    function videoIndex(video) {
      if (typeof video.index !== 'undefined') return video.index;
      if (typeof player.video.index !== 'undefined') return player.video.index;
      return player.conf.startIndex || 0;
    }
    player.on("load", function(e, api, video) {
       if (!player.conf.playlist.length) return;
       var prev = active()[0],
          prevIndex = prev && prev.getAttribute('data-index'),
          index = video.index = videoIndex(video),
          el = common.find(conf.query +'[data-index="' + index + '"]', queryRoot())[0],
          is_last = index == player.conf.playlist.length - 1;
       if (prev) ClassList(prev).remove(klass);
       if (el) ClassList(el).add(klass);
       // index
       rootClasses.remove("video" + prevIndex);
       rootClasses.add("video" + index);
       common.toggleClass(root, "last-video", is_last);

       // video properties
       video.index = api.video.index = index;
       video.is_last = api.video.is_last = is_last;

    // without namespace callback called only once. unknown rason.
    }).on("unload.pl", function() {
       if (!player.conf.playlist.length) return;
       active().forEach(function(el) {
         ClassList(el).toggle(klass);
       });
       player.conf.playlist.forEach(function(itm, i) {
         rootClasses.remove('video' + i);
       });
    });

   if (player.conf.playlist.length) {
      // disable single clip looping
      player.conf.loop = false;
   }


});

},{"../common":1,"../flowplayer":18,"./resolve":13,"bean":20,"class-list":22,"extend-object":26}],13:[function(_dereq_,module,exports){
'use strict';
var TYPE_RE = /\.(\w{3,4})(\?.*)?$/i,
    extend = _dereq_('extend-object');

function parseSource(el) {

   var src = el.attr("src"),
      type = el.attr("type") || "",
      suffix = src.split(TYPE_RE)[1];
   type = type.toLowerCase();
   return extend(el.data(), { src: src, suffix: suffix || type, type: type || suffix });
}

function getType(typ) {
  if (/mpegurl/i.test(typ)) return 'application/x-mpegurl';
  return 'video/' + typ;
}

/* Resolves video object from initial configuration and from load() method */
module.exports = function URLResolver() {
  var self = this;

  self.sourcesFromVideoTag = function(videoTag, $) {
    /* global $ */
    var sources = [];
    // initial sources
    $("source", videoTag).each(function() {
      sources.push(parseSource($(this)));
    });

    if (!sources.length && videoTag.length) sources.push(parseSource(videoTag));

    return sources;
  };


  self.resolve = function(video, sources) {
    if (!video) return { sources: sources };

    if (typeof video == 'string') {
      video = { src: video, sources: [] };
      video.sources = (sources || []).map(function(source) {
        var suffix = source.src.split(TYPE_RE)[1];
        return {type: source.type, src: video.src.replace(TYPE_RE, '.' + suffix + "$2")};
      });
    }

    if (video instanceof Array) {
      video = {
        sources: video.map(function(src) {
          if (src.type && src.src) return src;
          return Object.keys(src).reduce(function(m, typ) {
            return extend(m, {
              type: getType(typ),
              src: src[typ]
            });
          }, {});
        })
      };
    }

    return video;
  };
};

module.exports.TYPE_RE = TYPE_RE;

},{"extend-object":26}],14:[function(_dereq_,module,exports){
'use strict';
// skip IE policies
// document.ondragstart = function () { return false; };
//
var ClassList = _dereq_('class-list'),
    bean = _dereq_('bean'),
    common = _dereq_('../common');


// execute function every <delay> ms
var throttle = function(fn, delay) {
   var locked;

   return function () {
      if (!locked) {
         fn.apply(this, arguments);
         locked = 1;
         setTimeout(function () { locked = 0; }, delay);
      }
   };
};


var slider = function(root, rtl) {
  var IS_IPAD = /iPad/.test(navigator.userAgent) && !/CriOS/.test(navigator.userAgent);

  var progress = common.lastChild(root),
      rootClasses = ClassList(root),
      progressClasses = ClassList(progress),
      disabled,
      offset,
      width,
      height,
      vertical,
      size,
      maxValue,
      max,
      skipAnimation = false,

      /* private */
      calc = function() {
         offset = common.offset(root);
         width = common.width(root);
         height = common.height(root);

         /* exit from fullscreen can mess this up.*/
         // vertical = height > width;

         size = vertical ? height : width;
         max = toDelta(maxValue);
      },

      fire = function(value) {
         if (!disabled && value != api.value && (!maxValue || value < maxValue)) {
            bean.fire(root, 'slide', [ value ]);
            api.value = value;
         }
      },

      mousemove = function(e) {
         var pageX = e.pageX || e.clientX;
         if (!pageX && e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length) {
            pageX = e.originalEvent.touches[0].pageX;
         }
         var delta = vertical ? e.pageY - offset.top : pageX - offset.left;
         delta = Math.max(0, Math.min(max || size, delta));

         var value = delta / size;
         if (vertical) value = 1 - value;
         if (rtl) value = 1 - value;
         return move(value, 0, true);
      },

      move = function(value, speed) {
         if (speed === undefined) { speed = 0; }
         if (value > 1) value = 1;

         var to = (Math.round(value * 1000) / 10) + "%";

         if (!maxValue || value <= maxValue) {
           progressClasses.remove('animated');
            if (skipAnimation) {
              progressClasses.remove('animated');
            } else {
              progressClasses.add('animated');
              common.css(progress, 'transition-duration', (speed || 0) + 'ms');
            }
            common.css(progress, 'width', to);
         }

         return value;
      },

      toDelta = function(value) {
         return Math.max(0, Math.min(size, vertical ? (1 - value) * height : value * width));
      },

      /* public */
      api = {

         max: function(value) {
            maxValue = value;
         },

         disable: function(flag) {
            disabled = flag;
         },

         slide: function(value, speed, fireEvent) {
            calc();
            if (fireEvent) fire(value);
            move(value, speed);
         },

         // Should animation be handled via css
         disableAnimation: function(value, alsoCssAnimations) {
            skipAnimation = value !== false;
            common.toggleClass(root, 'no-animation', !!alsoCssAnimations);
         }

      };

  calc();

  // bound dragging into document
  bean.on(root, 'mousedown.sld touchstart', function(e) {
    e.preventDefault();

    if (!disabled) {
      // begin --> recalculate. allows dynamic resizing of the slider
      var delayedFire = throttle(fire, 100);
      calc();
      api.dragging = true;
      rootClasses.add('is-dragging');
      fire(mousemove(e));

      bean.on(document, 'mousemove.sld touchmove.sld', function(e) {
        e.preventDefault();
        delayedFire(mousemove(e));

      });
      bean.one(document, 'mouseup touchend', function() {
         api.dragging = false;
         rootClasses.remove('is-dragging');
         bean.off(document, 'mousemove.sld touchmove.sld');
      });

     }

  });
  return api;
};

module.exports = slider;

},{"../common":1,"bean":20,"class-list":22}],15:[function(_dereq_,module,exports){
'use strict';
var flowplayer = _dereq_('../flowplayer'),
    common = _dereq_('../common'),
    bean = _dereq_('bean'),
    ClassList = _dereq_('class-list');

flowplayer.defaults.subtitleParser = function(txt) {
  var TIMECODE_RE = /^(([0-9]{2}:){1,2}[0-9]{2}[,.][0-9]{3}) --\> (([0-9]{2}:){1,2}[0-9]{2}[,.][0-9]{3})(.*)/;

  function seconds(timecode) {
     var els = timecode.split(':');
     if (els.length == 2) els.unshift(0);
     return els[0] * 60 * 60 + els[1] * 60 + parseFloat(els[2].replace(',','.'));
  }

  var entries = [];
  for (var i = 0, lines = txt.split("\n"), len = lines.length, entry = {}, title, timecode, text, cue; i < len; i++) {
    timecode = TIMECODE_RE.exec(lines[i]);

    if (timecode) {

      // title
      title = lines[i - 1];

      // text
      text = "<p>" + lines[++i] + "</p><br/>";
      while (typeof lines[++i] === 'string' && lines[i].trim() && i < lines.length) text +=  "<p>" + lines[i] + "</p><br/>";

      // entry
      entry = {
        title: title,
        startTime: seconds(timecode[1]),
        endTime: seconds(timecode[3]),
        text: text
      };
      entries.push(entry);
    }
  }
  return entries;
};

flowplayer(function(p, root) {
  var wrapClasses, currentPoint, wrap,
      rootClasses = ClassList(root),
      subtitleControl;

  var createSubtitleControl = function() {
    subtitleControl = common.createElement('a', {className: 'fp-menu'});
    var menu = common.createElement('ul', {className: 'fp-dropdown fp-dropup'});
    menu.appendChild(common.createElement('li', {'data-subtitle-index': -1}, 'No subtitles'));
    (p.video.subtitles || []).forEach(function(st, i) {
      var srcLang = st.srclang || 'en',
          label = st.label || 'Default (' + srcLang + ')';
      var item = common.createElement('li', {'data-subtitle-index': i}, label);
      menu.appendChild(item);
    });
    subtitleControl.appendChild(menu);
    common.find('.fp-controls', root)[0].appendChild(subtitleControl);
    return subtitleControl;
  };

  bean.on(root, 'click', '.fp-menu', function(ev) {
    ClassList(subtitleControl).toggle('dropdown-open');
  });

  bean.on(root, 'click', '.fp-menu li[data-subtitle-index]', function(ev) {
    var idx = ev.target.getAttribute('data-subtitle-index');
    if (idx === '-1') return p.disableSubtitles();
    p.loadSubtitles(idx);
  });

  var createUIElements = function() {
    var playerEl = common.find('.fp-player', root)[0];
    wrap = common.find('.fp-subtitle', root)[0];
    wrap = wrap || common.appendTo(common.createElement('div', {'class': 'fp-subtitle'}), playerEl);
    Array.prototype.forEach.call(wrap.children, common.removeNode);
    wrapClasses = ClassList(wrap);
    common.find('.fp-menu', root).forEach(common.removeNode);
    createSubtitleControl();
  };


  p.on('ready',  function(ev, player, video) {
    var conf = player.conf;
    if (flowplayer.support.subtitles && conf.nativesubtitles && player.engine.engineName == 'html5') {
      var setMode = function(mode) {
        var tracks = common.find('video', root)[0].textTracks;
        if (!tracks.length) return;
        tracks[0].mode = mode;
      };
      if (!video.subtitles || !video.subtitles.length) return;
      var videoTag = common.find('video.fp-engine', root)[0];
      if (video.subtitles.some(function(st) { return !common.isSameDomain(st.src); })) common.attr(videoTag, 'crossorigin', 'anonymous');
      videoTag.textTracks.addEventListener('addtrack', function() {
        setMode('disabled');
        setMode('showing');
      });
      video.subtitles.forEach(function(st) {
        videoTag.appendChild(common.createElement('track', {
          kind: 'subtitles',
          srclang: st.srclang || 'en',
          label: st.label || 'en',
          src: st.src,
          'default': st['default']
        }));
      });
      return;
    }

    player.subtitles = [];

    createUIElements();

    rootClasses.remove('has-menu');

    p.disableSubtitles();

    if (!video.subtitles || !video.subtitles.length) return;

    rootClasses.add('has-menu');
    var defaultSubtitle = video.subtitles.filter(function(one) {
      return one['default'];
    })[0];
    if (defaultSubtitle) player.loadSubtitles(video.subtitles.indexOf(defaultSubtitle));
  });

  p.bind("cuepoint", function(e, api, cue) {
    if (cue.subtitle) {
       currentPoint = cue.index;
       common.html(wrap, cue.subtitle.text);
       wrapClasses.add('fp-active');
    } else if (cue.subtitleEnd) {
       wrapClasses.remove('fp-active');
       currentPoint = cue.index;
    }
  });

  p.bind("seek", function(e, api, time) {
    // Clear future subtitles if seeking backwards
    if (currentPoint && p.cuepoints[currentPoint] && p.cuepoints[currentPoint].time > time) {
       wrapClasses.remove('fp-active');
       currentPoint = null;
    }
    (p.cuepoints || []).forEach(function(cue) {
      var entry = cue.subtitle;
      //Trigger cuepoint if start time before seek position and end time nonexistent or in the future
      if (entry && currentPoint != cue.index) {
        if (time >= cue.time && (!entry.endTime || time <= entry.endTime)) p.trigger("cuepoint", [p, cue]);
      } // Also handle cuepoints that act as the removal trigger
      else if (cue.subtitleEnd && time >= cue.time && cue.index == currentPoint + 1) p.trigger("cuepoint", [p, cue]);
    });

  });

  var setActiveSubtitleClass = function(idx) {
    common.toggleClass(common.find('li.active', root)[0], 'active');
    common.toggleClass(common.find('li[data-subtitle-index="' + idx + '"]', root)[0], 'active');
  };

  p.disableSubtitles = function() {
    p.subtitles = [];
    (p.cuepoints || []).forEach(function(c) {
      if (c.subtitle || c.subtitleEnd) p.removeCuepoint(c);
    });
    if (wrap) Array.prototype.forEach.call(wrap.children, common.removeNode);
    setActiveSubtitleClass(-1);
    return p;
  };

  p.loadSubtitles = function(i) {
    //First remove possible old subtitles
    p.disableSubtitles();

    var st = p.video.subtitles[i];

    var url = st.src;
    if (!url) return;
    setActiveSubtitleClass(i);
    common.xhrGet(url, function(txt) {
      var entries = p.conf.subtitleParser(txt);
      entries.forEach(function(entry) {
        var cue = { time: entry.startTime, subtitle: entry, visible: false };
        p.subtitles.push(entry);
        p.addCuepoint(cue);
        p.addCuepoint({ time: entry.endTime, subtitleEnd: entry.title, visible: false });

        // initial cuepoint
        if (entry.startTime === 0 && !p.video.time) {
          p.trigger("cuepoint", [p, cue]);
        }
      });
    }, function() {
      p.trigger("error", {code: 8, url: url });
      return false;
    });
    return p;
  };
});


},{"../common":1,"../flowplayer":18,"bean":20,"class-list":22}],16:[function(_dereq_,module,exports){
'use strict';
/* global ActiveXObject */
var flowplayer = _dereq_('../flowplayer'),
    extend = _dereq_('extend-object');
(function() {

   var parseIpadVersion = function(UA) {
      var e = /Version\/(\d\.\d)/.exec(UA);
      if (e && e.length > 1) {
         return parseFloat(e[1], 10);
      }
      return 0;
   };

   var createVideoTag = function() {
     var videoTag = document.createElement('video');
     videoTag.loop = true;
     videoTag.autoplay = true;
     videoTag.preload = true;
     return videoTag;
   };

    var b = {},
      ua = navigator.userAgent.toLowerCase(),
      match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
      /(safari)[ \/]([\w.]+)/.exec(ua) ||
      /(webkit)[ \/]([\w.]+)/.exec(ua) ||
      /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
      /(msie) ([\w.]+)/.exec(ua) ||
      ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

   if (match[1]) {
      b[match[1]] = true;
      b.version = match[2] || "0";
   }

   var video = createVideoTag(),
      UA = navigator.userAgent,
      IS_IE = b.msie || /Trident\/7/.test(UA),
      IS_IPAD = /iPad|MeeGo/.test(UA) && !/CriOS/.test(UA),
      IS_IPAD_CHROME = /iPad/.test(UA) && /CriOS/.test(UA),
      IS_IPHONE = /iP(hone|od)/i.test(UA) && !/iPad/.test(UA) && !/IEMobile/i.test(UA),
      IS_ANDROID = /Android/.test(UA) && !/Firefox/.test(UA),
      IS_ANDROID_FIREFOX = /Android/.test(UA) && /Firefox/.test(UA),
      IS_SILK = /Silk/.test(UA),
      IS_WP = /IEMobile/.test(UA),
      WP_VER = IS_WP ? parseFloat(/Windows\ Phone\ (\d+\.\d+)/.exec(UA)[1], 10) : 0,
      IE_MOBILE_VER = IS_WP ? parseFloat(/IEMobile\/(\d+\.\d+)/.exec(UA)[1], 10) : 0,
      IPAD_VER = IS_IPAD ? parseIpadVersion(UA) : 0,
      ANDROID_VER = IS_ANDROID ? parseFloat(/Android\ ((\d+\.\d+)|\d+)/.exec(UA)[1], 10) : 0,
      s = extend(flowplayer.support, {

        browser: b,
        subtitles: !!video.addTextTrack,
        fullscreen: typeof document.webkitCancelFullScreen == 'function' && !/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(UA) ||
              document.mozFullScreenEnabled ||
              typeof document.exitFullscreen == 'function' ||
              typeof document.msExitFullscreen == 'function',
        inlineBlock: !(IS_IE && b.version < 8),
        touch: ('ontouchstart' in window),
        dataload: !IS_IPAD && !IS_IPHONE && !IS_WP,
        zeropreload: !IS_IE && !IS_ANDROID, // IE supports only preload=metadata
        volume: !IS_IPAD && !IS_ANDROID && !IS_IPHONE && !IS_SILK && !IS_IPAD_CHROME,
        cachedVideoTag: !IS_IPAD && !IS_IPHONE && !IS_IPAD_CHROME && !IS_WP,
        firstframe: !IS_IPHONE && !IS_IPAD && !IS_ANDROID && !IS_SILK && !IS_IPAD_CHROME && !IS_WP && !IS_ANDROID_FIREFOX,
        inlineVideo: !IS_IPHONE && (!IS_WP || (WP_VER >= 8.1 && IE_MOBILE_VER >= 11)) && (!IS_ANDROID || ANDROID_VER >= 3),
        hlsDuration: !IS_ANDROID && (!b.safari || IS_IPAD || IS_IPHONE || IS_IPAD_CHROME),
        seekable: !IS_IPAD && !IS_IPAD_CHROME
    });

   // flashVideo
   try {
      var plugin = navigator.plugins["Shockwave Flash"],
          ver = IS_IE ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable('$version') : plugin.description;
      if (!IS_IE && !plugin[0].enabledPlugin) s.flashVideo = false;
      else {

         ver = ver.split(/\D+/);
         if (ver.length && !ver[0]) ver = ver.slice(1);

         s.flashVideo = ver[0] > 9 || ver[0] == 9 && ver[3] >= 115;
      }

   } catch (ignored) {}
   try {
      s.video = !!video.canPlayType;
      if (s.video) video.canPlayType('video/mp4');
   } catch (e) {
      s.video = false;
   }

   // animation
   s.animation = (function() {
      var vendors = ['','Webkit','Moz','O','ms','Khtml'], el = document.createElement('p');

      for (var i = 0; i < vendors.length; i++) {
         if (typeof el.style[vendors[i] + 'AnimationName'] !== 'undefined') return true;
      }
   })();



})();


},{"../flowplayer":18,"extend-object":26}],17:[function(_dereq_,module,exports){
'use strict';
var flowplayer = _dereq_('../flowplayer'),
    common = _dereq_('../common'),
    ClassList = _dereq_('class-list'),
    bean = _dereq_('bean'),
    slider = _dereq_('./slider');

function zeropad(val) {
   val = parseInt(val, 10);
   return val >= 10 ? val : "0" + val;
}

// display seconds in hh:mm:ss format
function format(sec) {

   sec = sec || 0;

   var h = Math.floor(sec / 3600),
       min = Math.floor(sec / 60);

   sec = sec - (min * 60);

   if (h >= 1) {
      min -= h * 60;
      return h + ":" + zeropad(min) + ":" + zeropad(sec);
   }

   return zeropad(min) + ":" + zeropad(sec);
}

flowplayer(function(api, root) {

   var conf = api.conf,
      support = flowplayer.support,
      hovertimer,
      rootClasses = ClassList(root);
   common.find('.fp-ratio,.fp-ui', root).forEach(common.removeNode);
   rootClasses.add('flowplayer');
   root.appendChild(common.createElement('div', {className: 'fp-ratio'}));
   var ui = common.createElement('div', {className: 'fp-ui'}, '\
         <div class="waiting"><em></em><em></em><em></em></div>\
         <a class="fullscreen"></a>\
         <a class="unload"></a>\
         <p class="speed"></p>\
         <div class="controls">\
            <a class="play"></a>\
            <div class="timeline">\
               <div class="buffer"></div>\
               <div class="progress"></div>\
            </div>\
            <div class="timeline-tooltip fp-tooltip"></div>\
            <div class="volume">\
               <a class="mute"></a>\
               <div class="volumeslider">\
                  <div class="volumelevel"></div>\
               </div>\
            </div>\
         </div>\
         <div class="time">\
            <em class="elapsed">00:00</em>\
            <em class="remaining"></em>\
            <em class="duration">00:00</em>\
         </div>\
         <div class="message"><h2></h2><p></p></div>'.replace(/class="/g, 'class="fp-'));
   root.appendChild(ui);
   function find(klass) {
     return common.find(".fp-" + klass, root)[0];
   }

   // widgets
   var progress = find("progress"),
      buffer = find("buffer"),
      elapsed = find("elapsed"),
      remaining = find("remaining"),
      waiting = find("waiting"),
      ratio = find("ratio"),
      speed = find("speed"),
      speedClasses = ClassList(speed),
      durationEl = find("duration"),
      controls = find('controls'),
      timelineTooltip = find('timeline-tooltip'),
      origRatio = common.css(ratio, 'padding-top'),

      // sliders
      timeline = find("timeline"),
      timelineApi = slider(timeline, api.rtl),

      volume = find("volume"),
      fullscreen = find("fullscreen"),
      volumeSlider = find("volumeslider"),
      volumeApi = slider(volumeSlider, api.rtl),
      noToggle = rootClasses.contains('fixed-controls') || rootClasses.contains('no-toggle');

   timelineApi.disableAnimation(rootClasses.contains('is-touch'));
   api.sliders = api.sliders || {};
   api.sliders.timeline = timelineApi;
   api.sliders.volume = volumeApi;

   // aspect ratio
   function setRatio(val) {
     common.css(ratio, 'padding-top', val * 100 + "%");
     if (!support.inlineBlock) common.height(common.find('object', root)[0], common.height(root));
   }

   function hover(flag) {
     if (flag) {
       rootClasses.add('is-mouseover');
       rootClasses.remove('is-mouseout');
     } else {
       rootClasses.add('is-mouseout');
       rootClasses.remove('is-mouseover');
     }
   }

   // loading...
   if (!support.animation) common.html(waiting, "<p>loading &hellip;</p>");

   if (conf.ratio) setRatio(conf.ratio);

   // no fullscreen in IFRAME
   try {
      if (!conf.fullscreen) common.removeNode(fullscreen);

   } catch (e) {
      common.removeNode(fullscreen);
   }

   api.on("ready", function(ev, api, video) {

      var duration = api.video.duration;

      timelineApi.disable(api.disabled || !duration);

      if (conf.adaptiveRatio && !isNaN(video.height / video.width)) setRatio(video.height / video.width, true);

      // initial time & volume
      common.html([durationEl, remaining], format(duration));

      // do we need additional space for showing hour
      common.toggleClass(root, 'is-long', duration >= 3600);
      volumeApi.slide(api.volumeLevel);

      if (api.engine.engineName === 'flash') timelineApi.disableAnimation(true, true);
      else timelineApi.disableAnimation(false);
      common.find('.fp-title', ui).forEach(common.removeNode);
      if (video.title) {
        common.prepend(ui, common.createElement('div', {
          className: 'fp-title'
        }, video.title));
      }


   }).on("unload", function() {
     if (!origRatio && !conf.splash) common.css(ratio, "paddingTop", "");
     timelineApi.slide(0);

   // buffer
   }).on("buffer", function() {
      var video = api.video,
         max = video.buffer / video.duration;

      if (!video.seekable && support.seekable) timelineApi.max(max);
      if (max < 1) common.css(buffer, "width", (max * 100) + "%");
      else common.css(buffer, 'width', '100%');

   }).on("speed", function(e, api, val) {
     common.text(speed, val + "x");
     speedClasses.add('fp-hilite');
     setTimeout(function() { speedClasses.remove('fp-hilite'); }, 1000);

   }).on("buffered", function() {
     common.css(buffer, 'width', '100%');
      timelineApi.max(1);

   // progress
   }).on("progress", function() {

      var time = api.video.time,
         duration = api.video.duration;

      if (!timelineApi.dragging) {
        timelineApi.slide(time / duration, api.seeking ? 0 : 250);
      }

      common.html(elapsed, format(time));
      common.html(remaining, '-' + format(duration - time));

   }).on("finish resume seek", function(e) {
      common.toggleClass(root, "is-finished", e.type == "finish");

   }).on("stop", function() {
      common.html(elapsed, format(0));
      timelineApi.slide(0, 100);

   }).on("finish", function() {
      common.html(elapsed, format(api.video.duration));
      timelineApi.slide(1, 100);
      rootClasses.remove('is-seeking');

   // misc
   }).on("beforeseek", function() {
      //TODO FIXME
      //progress.stop();

   }).on("volume", function() {
      volumeApi.slide(api.volumeLevel);


   }).on("disable", function() {
      var flag = api.disabled;
      timelineApi.disable(flag);
      volumeApi.disable(flag);
      common.toggleClass(root, 'is-disabled', api.disabled);

   }).on("mute", function(e, api, flag) {
      common.toggleClass(root, 'is-muted', flag);

   }).on("error", function(e, api, error) {
      common.removeClass(root, 'is-loading');
      common.removeClass(root, 'is-seeking');
      common.addClass(root, 'is-error');
      if (error) {
         error.message = conf.errors[error.code];
         api.error = true;

         var el = common.find('.fp-message', root)[0],
             video = error.video || api.video;
         common.find('h2', el)[0].innerHTML = (api.engine && api.engine.engineName || 'html5') + ": " + error.message;
         common.find('p', el)[0].innerHTML = error.url || video.url || video.src || conf.errorUrls[error.code];
         api.off("mouseenter click");
         rootClasses.remove('is-mouseover');
      }


   // hover
   });
   //Interaction events
   bean.on(root, "mouseenter mouseleave", function(e) {
     if (noToggle) return;

      var is_over = e.type == "mouseover",
         lastMove;

      // is-mouseover/out
      hover(is_over);

      if (is_over) {

         var reg = function() {
            hover(true);
            lastMove = new Date();
         };
         api.on("pause.x volume.x", reg);
         bean.on(root, 'mousemove.x', reg);

         hovertimer = setInterval(function() {
            if (new Date() - lastMove > conf.mouseoutTimeout) {
               hover(false);
               lastMove = new Date();
            }
         }, 100);

      } else {
         bean.off(root, 'mousemove.x');
         api.off("pause.x volume.x");
         clearInterval(hovertimer);
      }


   // allow dragging over the player edge
   });
   bean.on(root, "mouseleave", function() {

     if (timelineApi.dragging || volumeApi.dragging) {
       rootClasses.add('is-mouseover');
       rootClasses.remove('is-mouseout');
     }

   // click
   });
   bean.on(root, "click.player", function(e) {
     if (api.disabled) return;
     var kls = ClassList(e.target);
      if (kls.contains('fp-ui') || kls.contains('fp-engine') || e.flash) {
         if (e.preventDefault) e.preventDefault();
         return api.toggle();
      }
   });

   bean.on(root, 'mousemove', '.fp-timeline', function(ev) {
     var x = ev.pageX || ev.clientX,
         delta = x - common.offset(timeline).left,
         percentage = delta / common.width(timeline),
         seconds = percentage * api.video.duration;
     if (percentage < 0) return;
     common.html(timelineTooltip, format(seconds));
     common.css(timelineTooltip, 'left', (x - common.offset(controls).left - common.width(timelineTooltip) / 2) + 'px');
   });

   bean.on(root, 'contextmenu', function(ev) {
      var o = common.offset(common.find('.fp-player', root)[0]),
          w = window,
          left = ev.clientX - (o.left + w.scrollX),
          t = ev.clientY - (o.top + w.scrollY);
      if (rootClasses.contains('is-flash-disabled')) return;
      var menu = common.find('.fp-context-menu', root)[0];
      if (!menu) return;
      ev.preventDefault();
      common.css(menu,
      {left: left + 'px',
         top: t + 'px',
         display: 'block'
      });
      bean.on(root, 'click', '.fp-context-menu', function(ev) {
         ev.stopPropagation();
      });
      bean.on(document, 'click.outsidemenu', function(ev) {
         common.css(menu, 'display', 'none');
         bean.off(document, 'click.outsidemenu');
      });
   });
   api.on('flashdisabled', function() {
     rootClasses.add('is-flash-disabled');
     api.one('ready progress', function() {
       rootClasses.remove('is-flash-disabled');
       common.find('.fp-flash-disabled', root).forEach(common.removeNode);
     });
     root.appendChild(common.createElement('div', {className: "fp-flash-disabled"}, 'Adobe Flash is disabled for this page, click player area to enable'));
   });

   // poster -> background image
   if (conf.poster) common.css(root, 'background-image', "url(" + conf.poster + ")");

   var bc = common.css(root, 'background-color'),
      has_bg = common.css(root, 'background-image') != "none" || bc && bc != "rgba(0, 0, 0, 0)" && bc != "transparent";

   // is-poster class
   if (has_bg && !conf.splash) {
      if (!conf.poster) conf.poster = true;

      api.on("ready stop", function() {
        rootClasses.add("is-poster");
        api.poster = true;
        api.one("progress", function() {
          rootClasses.remove("is-poster");
          api.poster = false;
        });
      });

   }

   if (typeof conf.splash === 'string') {
     common.css(root, 'background-image', "url('" + conf.splash + "')");
   }

   // default background color if not present
   if (!has_bg && api.forcedSplash) {
      common.css(root, "background-color", "#555");
   }

   bean.on(root, 'click', '.fp-toggle, .fp-play', function() {
     if (api.disabled) return;
     api.toggle();
   });

   /* controlbar elements */
   bean.on(root, 'click', '.fp-mute', function() { api.mute(); });
   bean.on(root, 'click', '.fp-fullscreen', function() { api.fullscreen(); });
   bean.on(root, 'click', '.fp-unload', function() { api.unload(); });

   bean.on(timeline, 'slide', function(val) {
     api.seeking = true;
     api.seek(val * api.video.duration);
   });

   bean.on(volumeSlider, 'slide', function(val) {
      api.volume(val);
   });

   // times

   var time = find('time');
   bean.on(root, 'click', '.fp-time', function() {
     ClassList(time).toggle('is-inverted');
   });

   hover(noToggle);

   api.on('shutdown', function() {
     bean.off(timeline);
     bean.off(volumeSlider);
   });

});


module.exports.format = format;

},{"../common":1,"../flowplayer":18,"./slider":14,"bean":20,"class-list":22}],18:[function(_dereq_,module,exports){
'use strict';
var extend = _dereq_('extend-object'),
    isFunction = _dereq_('is-function'),
    ClassList = _dereq_('class-list'),
    bean = _dereq_('bean'),
    common = _dereq_('./common'),
    events = _dereq_('./ext/events');

var instances = [],
   extensions = [],
   UA = window.navigator.userAgent;


var oldHandler = window.onbeforeunload;
window.onbeforeunload = function(ev) {
  instances.forEach(function(api) {
    if (api.conf.splash) {
      api.unload();
    } else {
      api.bind("error", function () {
        common.find('.flowplayer.is-error .fp-message').forEach(common.removeNode);
      });
    }
  });
  if (oldHandler) return oldHandler(ev);
};

var supportLocalStorage = false;
try {
  if (typeof window.localStorage == "object") {
    window.localStorage.flowplayerTestStorage = "test";
    supportLocalStorage = true;
  }
} catch (ignored) {}

var isSafari = /Safari/.exec(navigator.userAgent) && !/Chrome/.exec(navigator.userAgent),
    m = /(\d+\.\d+) Safari/.exec(navigator.userAgent),
    safariVersion = m ? Number(m[1]) : 100;

/* flowplayer()  */
var flowplayer = module.exports = function(fn, opts, callback) {
  if (isFunction(fn)) return extensions.push(fn);
  if (typeof fn == 'number' || typeof fn === 'undefined') return instances[fn || 0];
  if (fn.nodeType) { // Is an element
    if (fn.getAttribute('data-flowplayer-instance-id') !== null) { // Already flowplayer instance
      return instances[fn.getAttribute('data-flowplayer-instance-id')];
    }
    if (!opts) return; // Can't initialize without data
    return initializePlayer(fn, opts, callback);
  }
  if (fn.jquery) return flowplayer(fn[0], opts, callback);
  if (typeof fn === 'string') {
    var el = common.find(fn)[0];
    return el && flowplayer(el, opts, callback);
  }
};

extend(flowplayer, {

   version: '6.0.5',

   engines: [],

   conf: {},

   set: function(key, value) {
      if (typeof key === 'string') flowplayer.conf[key] = value;
      else extend(flowplayer.conf, key);
   },

   support: {},

   defaults: {

      debug: supportLocalStorage ? !!localStorage.flowplayerDebug : false,

      // true = forced playback
      disabled: false,

      fullscreen: window == window.top,

      // keyboard shortcuts
      keyboard: true,

      // default aspect ratio
      ratio: 9 / 16,

      adaptiveRatio: false,

      rtmp: 0,

      proxy: 'best',

      splash: false,

      live: false,

      swf: "//releases.flowplayer.org/6.0.5/flowplayer.swf",
      swfHls: "//releases.flowplayer.org/6.0.5/flowplayerhls.swf",

      speeds: [0.25, 0.5, 1, 1.5, 2],

      tooltip: true,

      mouseoutTimeout: 5000,

      // initial volume level
      volume: !supportLocalStorage ? 1 : localStorage.muted == "true" ? 0 : !isNaN(localStorage.volume) ? localStorage.volume || 1 : 1,

      // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-video-element.html#error-codes
      errors: [

         // video exceptions
         '',
         'Video loading aborted',
         'Network error',
         'Video not properly encoded',
         'Video file not found',

         // player exceptions
         'Unsupported video',
         'Skin not found',
         'SWF file not found',
         'Subtitles not found',
         'Invalid RTMP URL',
         'Unsupported video format. Try installing Adobe Flash.'
      ],
      errorUrls: ['','','','','','','','','','',
         'http://get.adobe.com/flashplayer/'
      ],
      playlist: [],

      hlsFix: isSafari && safariVersion < 8

   },
   // Expose utilities for plugins
   bean: bean,
   common: common,
   extend: extend



});

// keep track of players
var playerCount = 0;

var URLResolver = _dereq_('./ext/resolve');



if (typeof window.jQuery !== 'undefined') {
  var $ = window.jQuery;
  // auto-install (any video tag with parent .flowplayer)
  $(function() {
     if (typeof $.fn.flowplayer == 'function') {
        $('.flowplayer:has(video,script[type="application/json"])').flowplayer();
     }
  });

  // jQuery plugin
  var videoTagConfig = function(videoTag) {
    if (!videoTag.length) return {};
    var clip = videoTag.data() || {}, conf = {};
    $.each(['autoplay', 'loop', 'preload', 'poster'], function(i, key) {
      var val = videoTag.attr(key);
      if (val !== undefined && ['autoplay', 'poster'].indexOf(key) !== -1) conf[key] = val ? val : true;
      else if (val !== undefined) clip[key] = val ? val : true;
    });
    clip.subtitles = videoTag.find('track').map(function() {
      var tr = $(this);
      return {
        src: tr.attr('src'),
        kind: tr.attr('kind'),
        label: tr.attr('label'),
        srclang: tr.attr('srclang'),
        'default': tr.prop('default')
      };
    }).get();

    clip.sources = (new URLResolver()).sourcesFromVideoTag(videoTag, $);
    return extend(conf, {clip: clip});
  };
  $.fn.flowplayer = function(opts, callback) {
    return this.each(function() {
      if (typeof opts == 'string') opts = { swf: opts };
      if (isFunction(opts)) { callback = opts; opts = {}; }
      var root = $(this),
          scriptConf = root.find('script[type="application/json"]'),
          confObject = scriptConf.length ? JSON.parse(scriptConf.text()) : videoTagConfig(root.find('video')),
          conf = $.extend({}, opts || {}, confObject, root.data());
      var api = initializePlayer(this, conf, callback);
      events.EVENTS.forEach(function(evName) {
        api.on(evName + '.jquery', function(ev) {
          root.trigger.call(root, ev.type, ev.detail && ev.detail.args);
        });
      });
      root.data('flowplayer', api);
    });
  };
}

function initializePlayer(element, opts, callback) {
  if (opts && opts.embed) opts.embed = extend({}, flowplayer.defaults.embed, opts.embed);

  var root = element,
      rootClasses = ClassList(root),
      conf = extend({}, flowplayer.defaults, flowplayer.conf, opts),
      storage = {},
      lastSeekPosition,
      engine,
      url,
      urlResolver = new URLResolver();

      rootClasses.add('is-loading');

      try {
         storage = supportLocalStorage ? window.localStorage : storage;
      } catch(e) {}

      var isRTL = (root.currentStyle && root.currentStyle.direction === 'rtl') ||
        (window.getComputedStyle && window.getComputedStyle(root, null) !== null && window.getComputedStyle(root, null).getPropertyValue('direction') === 'rtl');

      if (isRTL) rootClasses.add('is-rtl');

      /*** API ***/
      var api = {

         // properties
         conf: conf,
         currentSpeed: 1,
         volumeLevel: conf.muted ? 0 : typeof conf.volume === "undefined" ? storage.volume * 1 : conf.volume,
         video: {},

         // states
         disabled: false,
         finished: false,
         loading: false,
         muted: storage.muted == "true" || conf.muted,
         paused: false,
         playing: false,
         ready: false,
         splash: false,
         rtl: isRTL,

         // methods
         load: function(video, callback) {

            if (api.error || api.loading) return;
            api.video = {};

            api.finished = false;

            video = video || conf.clip;

            // resolve URL
            video = extend({}, urlResolver.resolve(video, conf.clip.sources));
            if (api.playing || api.engine) video.autoplay = true;
            var engineImpl = selectEngine(video);
            if (!engineImpl) return api.trigger("error", [api, { code: flowplayer.support.flashVideo ? 5 : 10 }]);
            if (!engineImpl.engineName) throw new Error('engineName property of factory should be exposed');
            if (!api.engine || engineImpl.engineName !== api.engine.engineName) {
              api.ready = false;
              if (api.engine) {
                api.engine.unload();
                api.conf.autoplay = true;
              }
              engine = api.engine = engineImpl(api, root);
              api.one('ready', function() {
                engine.volume(api.volumeLevel);
              });
            }

            extend(video, engine.pick(video.sources.filter(function(source) { // Filter out sources explicitely configured for some other engine
              if (!source.engine) return true;
              return source.engine === engine.engineName;
            })));

            if (video.src) {
               var e = api.trigger('load', [api, video, engine], true);
               if (!e.defaultPrevented) {
                  engine.load(video);

                  // callback
                  if (isFunction(video)) callback = video;
                  if (callback) api.one("ready", callback);
               } else {
                  api.loading = false;
               }
            }

            return api;
         },

         pause: function(fn) {
            if (api.ready && !api.seeking && !api.loading) {
               engine.pause();
               api.one("pause", fn);
            }
            return api;
         },

         resume: function() {

            if (api.ready && api.paused) {
               engine.resume();

               // Firefox (+others?) does not fire "resume" after finish
               if (api.finished) {
                  api.trigger("resume", [api]);
                  api.finished = false;
               }
            }

            return api;
         },

         toggle: function() {
            return api.ready ? api.paused ? api.resume() : api.pause() : api.load();
         },

         /*
            seek(1.4)   -> 1.4s time
            seek(true)  -> 10% forward
            seek(false) -> 10% backward
         */
         seek: function(time, callback) {
            if (api.ready && !api.live) {

               if (typeof time == "boolean") {
                  var delta = api.video.duration * 0.1;
                  time = api.video.time + (time ? delta : -delta);
               }
               time = lastSeekPosition = Math.min(Math.max(time, 0), api.video.duration - 0.1).toFixed(1);
               var ev = api.trigger('beforeseek', [api, time], true);
               if (!ev.defaultPrevented) {
                  engine.seek(time);
                  if (isFunction(callback)) api.one("seek", callback);
               } else {
                  api.seeking = false;
                  common.toggleClass(root, 'is-seeking', api.seeking); // remove loading indicator
               }
            }
            return api;
         },

         /*
            seekTo(1) -> 10%
            seekTo(2) -> 20%
            seekTo(3) -> 30%
            ...
            seekTo()  -> last position
         */
         seekTo: function(position, fn) {
            var time = position === undefined ? lastSeekPosition : api.video.duration * 0.1 * position;
            return api.seek(time, fn);
         },

         mute: function(flag, skipStore) {
           if (flag === undefined) flag = !api.muted;
           if (!skipStore) {
             storage.muted = api.muted = flag;
             storage.volume = !isNaN(storage.volume) ? storage.volume : conf.volume; // make sure storage has volume
           }
           api.volume(flag ? 0 : storage.volume, true);
           api.trigger("mute", [api, flag]);
           return api;
         },

         volume: function(level, skipStore) {
            if (api.ready) {
              level = Math.min(Math.max(level, 0), 1);
              if (!skipStore) storage.volume = level;
              engine.volume(level);
            }

            return api;
         },

         speed: function(val, callback) {

            if (api.ready) {

               // increase / decrease
               if (typeof val == "boolean") {
                  val = conf.speeds[conf.speeds.indexOf(api.currentSpeed) + (val ? 1 : -1)] || api.currentSpeed;
               }

               engine.speed(val);
               if (callback) root.one("speed", callback);
            }

            return api;
         },


         stop: function() {
            if (api.ready) {
               api.pause();
               api.seek(0, function() {
                  api.trigger("stop", [api]);
               });
            }
            return api;
         },

         unload: function() {
            if (!rootClasses.contains("is-embedding")) {

               if (conf.splash) {
                  api.trigger("unload", [api]);
                  if (engine) {
                    engine.unload();
                    api.engine = engine = 0;
                  }
               } else {
                  api.stop();
               }
            }
            return api;
         },

         shutdown: function() {
           api.unload();
           api.trigger('shutdown', [api]);
           bean.off(root);
           delete instances[root.getAttribute('data-flowplayer-instance-id')];
           root.removeAttribute('data-flowplayer-instance-id');
         },

         disable: function(flag) {
            if (flag === undefined) flag = !api.disabled;

            if (flag != api.disabled) {
               api.disabled = flag;
               api.trigger("disable", flag);
            }
            return api;
         }

      };

      api.conf = extend(api.conf, conf);

      /* event binding / unbinding */
      events(api);

      var selectEngine = function(clip) {
        var engine;
        var engines = flowplayer.engines;
        if (conf.engine) {
          var eng = engines.filter(function(e) { return e.engineName === conf.engine; })[0];
          if (eng && clip.sources.some(function(source) {
            if (source.engine && source.engine !== eng.engineName) return false;
            return eng.canPlay(source.type, api.conf);
          })) return eng;
        }
        if (conf.enginePreference) engines = flowplayer.engines.filter(function(one) { return conf.enginePreference.indexOf(one.engineName) > -1; }).sort(function(a, b) {
          return conf.enginePreference.indexOf(a.engineName) - conf.enginePreference.indexOf(b.engineName);
        });
        clip.sources.some(function(source) {
          var eng = engines.filter(function(engine) {
            if (source.engine && source.engine !== engine.engineName) return false;
            return engine.canPlay(source.type, api.conf);
          }).shift();
          if (eng) engine = eng;
          return !!eng;
        });
        return engine;
      };

      /*** Behaviour ***/
      if (!root.getAttribute('data-flowplayer-instance-id')) { // Only bind once
         root.setAttribute('data-flowplayer-instance-id', playerCount++);


         api.on('boot', function() {

            // splash
            if (conf.splash || rootClasses.contains("is-splash") || !flowplayer.support.firstframe) {
               api.forcedSplash = !conf.splash && !rootClasses.contains("is-splash");
               api.splash = conf.autoplay = true;
               if (!conf.splash) conf.splash = true;
               rootClasses.add("is-splash");
            }

            if (conf.splash) common.find('video', root).forEach(common.removeNode);

            if (conf.live || rootClasses.contains('is-live')) {
               api.live = conf.live = true;
               rootClasses.add('is-live');
            }

            // extensions
            extensions.forEach(function(e) {
               e(api, root);
            });

            // instances
            instances.push(api);

            // start
            if (conf.splash) api.unload(); else api.load();

            // disabled
            if (conf.disabled) api.disable();

            // initial callback
            api.one("ready", callback);


         }).on("load", function(e, api, video) {

            // unload others
            if (conf.splash) {
              common.find('.flowplayer.is-ready,.flowplayer.is-loading').forEach(function(el) {
                var playerId = el.getAttribute('data-flowplayer-instance-id');
                if (playerId === root.getAttribute('data-flowplayer-instance-id')) return;
                var a = instances[Number(playerId)];
                if (a && a.conf.splash) a.unload();
              });

            }

            // loading
            rootClasses.add("is-loading");
            api.loading = true;

            if (typeof video.live !== 'undefined') {
              common.toggleClass(root, 'is-live', video.live);
              api.live = video.live;
            }


         }).on("ready", function(e, api, video) {
            video.time = 0;
            api.video = video;

            rootClasses.remove("is-loading");
            api.loading = false;

            // saved state
            if (api.muted) api.mute(true, true);
            else api.volume(api.volumeLevel);

            // see https://github.com/flowplayer/flowplayer/issues/479

            var hlsFix = api.conf.hlsFix && /mpegurl/i.exec(video.type);
            common.toggleClass(root, 'hls-fix', !!hlsFix);

         }).on("unload", function(e) {
            rootClasses.remove("is-loading");
            api.loading = false;


         }).on("ready unload", function(e) {
           var is_ready = e.type == "ready";
           common.toggleClass(root, 'is-splash', !is_ready);
           common.toggleClass(root, 'is-ready', is_ready);
           api.ready = is_ready;
           api.splash = !is_ready;


         }).on("progress", function(e, api, time) {
            api.video.time = time;


         }).on("speed", function(e, api, val) {
            api.currentSpeed = val;

         }).on("volume", function(e, api, level) {
            api.volumeLevel = Math.round(level * 100) / 100;
            if (!api.muted) storage.volume = level;
            else if (level) api.mute(false);


         }).on("beforeseek seek", function(e) {
            api.seeking = e.type == "beforeseek";
            common.toggleClass(root, 'is-seeking', api.seeking);

         }).on("ready pause resume unload finish stop", function(e, _api, video) {

            // PAUSED: pause / finish
            api.paused = /pause|finish|unload|stop/.test(e.type);
            api.paused = api.paused || e.type === 'ready' && !conf.autoplay && !api.playing;

            // the opposite
            api.playing = !api.paused;

            // CSS classes
            common.toggleClass(root, 'is-paused', api.paused);
            common.toggleClass(root, 'is-playing', api.playing);

            // sanity check
            if (!api.load.ed) api.pause();

         }).on("finish", function(e) {
            api.finished = true;

         }).on("error", function() {
         });
      }

      // boot
      api.trigger('boot', [api, root]);
  return api;
}

},{"./common":1,"./ext/events":8,"./ext/resolve":13,"bean":20,"class-list":22,"extend-object":26,"is-function":27}],19:[function(_dereq_,module,exports){
//Flowplayer with extensions

_dereq_('es5-shim');

var flowplayer = module.exports = _dereq_('./flowplayer');
//

//Support needed before engines
_dereq_('./ext/support');

//Engines
_dereq_('./engine/embed');
_dereq_('./engine/html5');
_dereq_('./engine/flash');

//Extensions
//require('./ext/slider'); //TODO enable
_dereq_('./ext/ui');
_dereq_('./ext/keyboard');
_dereq_('./ext/playlist');
_dereq_('./ext/cuepoint');
_dereq_('./ext/subtitle');
_dereq_('./ext/analytics');
_dereq_('./ext/embed');
//Have to add fullscreen last
_dereq_('./ext/fullscreen');

_dereq_('./ext/mobile');
flowplayer(function(e,o){function a(e){var o=document.createElement("a");return o.href=e,t.hostname(o.hostname)}var n=function(e,o){var a=e.className.split(" ");-1===a.indexOf(o)&&(e.className+=" "+o)},r=function(e){return"none"!==window.getComputedStyle(e).display},l=e.conf,t=flowplayer.common,i=t.createElement,d=l.swf.indexOf("flowplayer.org")&&l.e&&o.getAttribute("data-origin"),p=d?a(d):t.hostname(),s=(document,l.key);"file:"==location.protocol&&(p="localhost"),e.load.ed=1,l.hostname=p,l.origin=d||location.href,d&&n(o,"is-embedded"),"string"==typeof s&&(s=s.split(/,\s*/));var f=function(e,a){var n=i("a",{href:a,className:"fp-brand"});n.innerHTML=e,t.find(".fp-controls",o)[0].appendChild(n)};if(s&&"function"==typeof key_check&&key_check(s,p)){if(l.logo){var c=t.find(".fp-player",o)[0],h=i("a",{className:"fp-logo"});d&&(h.href=d),l.embed&&l.embed.popup&&(h.target="_blank");var y=i("img",{src:l.logo});h.appendChild(y),(c||o).appendChild(h)}l.brand&&d||l.brand&&l.brand.showOnOrigin?f(l.brand.text||l.brand,d||location.href):t.addClass(o,"no-brand")}else{f("flowplayer","http://flowplayer.org");var h=i("a",{href:"http://flowplayer.org"});o.appendChild(h);var u=i("div",{className:"fp-context-menu"},'<ul><li class="copyright">&copy; 2015</li><li><a href="http://flowplayer.org">About Flowplayer</a></li><li><a href="http://flowplayer.org/license">GPL based license</a></li></ul>'),g=window.location.href.indexOf("localhost"),c=t.find(".fp-player",o)[0];7!==g&&(c||o).appendChild(u),e.on("pause resume finish unload ready",function(e,a){t.removeClass(o,"no-brand");var n=-1;if(a.video.src)for(var l=[["org","flowplayer","drive"],["org","flowplayer","my"],["org","flowplayer","cdn"]],i=0;i<l.length&&(n=a.video.src.indexOf("://"+l[i].reverse().join(".")),-1===n);i++);if((4===n||5===n)&&t.addClass(o,"no-brand"),/pause|resume/.test(e.type)&&"flash"!=a.engine.engineName&&4!=n&&5!=n){var d={display:"block",position:"absolute",left:"16px",bottom:"46px",zIndex:99999,width:"100px",height:"20px",backgroundImage:"url("+[".png","logo","/",".net",".cloudfront","d32wqyuo10o653","//"].reverse().join("")+")"};for(var p in d)d.hasOwnProperty(p)&&(h.style[p]=d[p]);a.load.ed=r(h)&&(7===g||u.parentNode==o||u.parentNode==c)&&!t.hasClass(o,"no-brand"),a.load.ed||a.pause()}else h.style.display="none"})}});


},{"./engine/embed":2,"./engine/flash":3,"./engine/html5":4,"./ext/analytics":5,"./ext/cuepoint":6,"./ext/embed":7,"./ext/fullscreen":9,"./ext/keyboard":10,"./ext/mobile":11,"./ext/playlist":12,"./ext/subtitle":15,"./ext/support":16,"./ext/ui":17,"./flowplayer":18,"es5-shim":25}],20:[function(_dereq_,module,exports){
/*!
  * Bean - copyright (c) Jacob Thornton 2011-2012
  * https://github.com/fat/bean
  * MIT license
  */
(function (name, context, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(definition)
  else context[name] = definition()
})('bean', this, function (name, context) {
  name    = name    || 'bean'
  context = context || this

  var win            = window
    , old            = context[name]
    , namespaceRegex = /[^\.]*(?=\..*)\.|.*/
    , nameRegex      = /\..*/
    , addEvent       = 'addEventListener'
    , removeEvent    = 'removeEventListener'
    , doc            = document || {}
    , root           = doc.documentElement || {}
    , W3C_MODEL      = root[addEvent]
    , eventSupport   = W3C_MODEL ? addEvent : 'attachEvent'
    , ONE            = {} // singleton for quick matching making add() do one()

    , slice          = Array.prototype.slice
    , str2arr        = function (s, d) { return s.split(d || ' ') }
    , isString       = function (o) { return typeof o == 'string' }
    , isFunction     = function (o) { return typeof o == 'function' }

      // events that we consider to be 'native', anything not in this list will
      // be treated as a custom event
    , standardNativeEvents =
        'click dblclick mouseup mousedown contextmenu '                  + // mouse buttons
        'mousewheel mousemultiwheel DOMMouseScroll '                     + // mouse wheel
        'mouseover mouseout mousemove selectstart selectend '            + // mouse movement
        'keydown keypress keyup '                                        + // keyboard
        'orientationchange '                                             + // mobile
        'focus blur change reset select submit '                         + // form elements
        'load unload beforeunload resize move DOMContentLoaded '         + // window
        'readystatechange message '                                      + // window
        'error abort scroll '                                              // misc
      // element.fireEvent('onXYZ'... is not forgiving if we try to fire an event
      // that doesn't actually exist, so make sure we only do these on newer browsers
    , w3cNativeEvents =
        'show '                                                          + // mouse buttons
        'input invalid '                                                 + // form elements
        'touchstart touchmove touchend touchcancel '                     + // touch
        'gesturestart gesturechange gestureend '                         + // gesture
        'textinput '                                                     + // TextEvent
        'readystatechange pageshow pagehide popstate '                   + // window
        'hashchange offline online '                                     + // window
        'afterprint beforeprint '                                        + // printing
        'dragstart dragenter dragover dragleave drag drop dragend '      + // dnd
        'loadstart progress suspend emptied stalled loadmetadata '       + // media
        'loadeddata canplay canplaythrough playing waiting seeking '     + // media
        'seeked ended durationchange timeupdate play pause ratechange '  + // media
        'volumechange cuechange '                                        + // media
        'checking noupdate downloading cached updateready obsolete '       // appcache

      // convert to a hash for quick lookups
    , nativeEvents = (function (hash, events, i) {
        for (i = 0; i < events.length; i++) events[i] && (hash[events[i]] = 1)
        return hash
      }({}, str2arr(standardNativeEvents + (W3C_MODEL ? w3cNativeEvents : ''))))

      // custom events are events that we *fake*, they are not provided natively but
      // we can use native events to generate them
    , customEvents = (function () {
        var isAncestor = 'compareDocumentPosition' in root
              ? function (element, container) {
                  return container.compareDocumentPosition && (container.compareDocumentPosition(element) & 16) === 16
                }
              : 'contains' in root
                ? function (element, container) {
                    container = container.nodeType === 9 || container === window ? root : container
                    return container !== element && container.contains(element)
                  }
                : function (element, container) {
                    while (element = element.parentNode) if (element === container) return 1
                    return 0
                  }
          , check = function (event) {
              var related = event.relatedTarget
              return !related
                ? related == null
                : (related !== this && related.prefix !== 'xul' && !/document/.test(this.toString())
                    && !isAncestor(related, this))
            }

        return {
            mouseenter: { base: 'mouseover', condition: check }
          , mouseleave: { base: 'mouseout', condition: check }
          , mousewheel: { base: /Firefox/.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel' }
        }
      }())

      // we provide a consistent Event object across browsers by taking the actual DOM
      // event object and generating a new one from its properties.
    , Event = (function () {
            // a whitelist of properties (for different event types) tells us what to check for and copy
        var commonProps  = str2arr('altKey attrChange attrName bubbles cancelable ctrlKey currentTarget ' +
              'detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey '  +
              'srcElement target timeStamp type view which propertyName')
          , mouseProps   = commonProps.concat(str2arr('button buttons clientX clientY dataTransfer '      +
              'fromElement offsetX offsetY pageX pageY screenX screenY toElement'))
          , mouseWheelProps = mouseProps.concat(str2arr('wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ ' +
              'axis')) // 'axis' is FF specific
          , keyProps     = commonProps.concat(str2arr('char charCode key keyCode keyIdentifier '          +
              'keyLocation location'))
          , textProps    = commonProps.concat(str2arr('data'))
          , touchProps   = commonProps.concat(str2arr('touches targetTouches changedTouches scale rotation'))
          , messageProps = commonProps.concat(str2arr('data origin source'))
          , stateProps   = commonProps.concat(str2arr('state'))
          , overOutRegex = /over|out/
            // some event types need special handling and some need special properties, do that all here
          , typeFixers   = [
                { // key events
                    reg: /key/i
                  , fix: function (event, newEvent) {
                      newEvent.keyCode = event.keyCode || event.which
                      return keyProps
                    }
                }
              , { // mouse events
                    reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i
                  , fix: function (event, newEvent, type) {
                      newEvent.rightClick = event.which === 3 || event.button === 2
                      newEvent.pos = { x: 0, y: 0 }
                      if (event.pageX || event.pageY) {
                        newEvent.clientX = event.pageX
                        newEvent.clientY = event.pageY
                      } else if (event.clientX || event.clientY) {
                        newEvent.clientX = event.clientX + doc.body.scrollLeft + root.scrollLeft
                        newEvent.clientY = event.clientY + doc.body.scrollTop + root.scrollTop
                      }
                      if (overOutRegex.test(type)) {
                        newEvent.relatedTarget = event.relatedTarget
                          || event[(type == 'mouseover' ? 'from' : 'to') + 'Element']
                      }
                      return mouseProps
                    }
                }
              , { // mouse wheel events
                    reg: /mouse.*(wheel|scroll)/i
                  , fix: function () { return mouseWheelProps }
                }
              , { // TextEvent
                    reg: /^text/i
                  , fix: function () { return textProps }
                }
              , { // touch and gesture events
                    reg: /^touch|^gesture/i
                  , fix: function () { return touchProps }
                }
              , { // message events
                    reg: /^message$/i
                  , fix: function () { return messageProps }
                }
              , { // popstate events
                    reg: /^popstate$/i
                  , fix: function () { return stateProps }
                }
              , { // everything else
                    reg: /.*/
                  , fix: function () { return commonProps }
                }
            ]
          , typeFixerMap = {} // used to map event types to fixer functions (above), a basic cache mechanism

          , Event = function (event, element, isNative) {
              if (!arguments.length) return
              event = event || ((element.ownerDocument || element.document || element).parentWindow || win).event
              this.originalEvent = event
              this.isNative       = isNative
              this.isBean         = true

              if (!event) return

              var type   = event.type
                , target = event.target || event.srcElement
                , i, l, p, props, fixer

              this.target = target && target.nodeType === 3 ? target.parentNode : target

              if (isNative) { // we only need basic augmentation on custom events, the rest expensive & pointless
                fixer = typeFixerMap[type]
                if (!fixer) { // haven't encountered this event type before, map a fixer function for it
                  for (i = 0, l = typeFixers.length; i < l; i++) {
                    if (typeFixers[i].reg.test(type)) { // guaranteed to match at least one, last is .*
                      typeFixerMap[type] = fixer = typeFixers[i].fix
                      break
                    }
                  }
                }

                props = fixer(event, this, type)
                for (i = props.length; i--;) {
                  if (!((p = props[i]) in this) && p in event) this[p] = event[p]
                }
              }
            }

        // preventDefault() and stopPropagation() are a consistent interface to those functions
        // on the DOM, stop() is an alias for both of them together
        Event.prototype.preventDefault = function () {
          if (this.originalEvent.preventDefault) this.originalEvent.preventDefault()
          else this.originalEvent.returnValue = false
        }
        Event.prototype.stopPropagation = function () {
          if (this.originalEvent.stopPropagation) this.originalEvent.stopPropagation()
          else this.originalEvent.cancelBubble = true
        }
        Event.prototype.stop = function () {
          this.preventDefault()
          this.stopPropagation()
          this.stopped = true
        }
        // stopImmediatePropagation() has to be handled internally because we manage the event list for
        // each element
        // note that originalElement may be a Bean#Event object in some situations
        Event.prototype.stopImmediatePropagation = function () {
          if (this.originalEvent.stopImmediatePropagation) this.originalEvent.stopImmediatePropagation()
          this.isImmediatePropagationStopped = function () { return true }
        }
        Event.prototype.isImmediatePropagationStopped = function () {
          return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped()
        }
        Event.prototype.clone = function (currentTarget) {
          //TODO: this is ripe for optimisation, new events are *expensive*
          // improving this will speed up delegated events
          var ne = new Event(this, this.element, this.isNative)
          ne.currentTarget = currentTarget
          return ne
        }

        return Event
      }())

      // if we're in old IE we can't do onpropertychange on doc or win so we use doc.documentElement for both
    , targetElement = function (element, isNative) {
        return !W3C_MODEL && !isNative && (element === doc || element === win) ? root : element
      }

      /**
        * Bean maintains an internal registry for event listeners. We don't touch elements, objects
        * or functions to identify them, instead we store everything in the registry.
        * Each event listener has a RegEntry object, we have one 'registry' for the whole instance.
        */
    , RegEntry = (function () {
        // each handler is wrapped so we can handle delegation and custom events
        var wrappedHandler = function (element, fn, condition, args) {
            var call = function (event, eargs) {
                  return fn.apply(element, args ? slice.call(eargs, event ? 0 : 1).concat(args) : eargs)
                }
              , findTarget = function (event, eventElement) {
                  return fn.__beanDel ? fn.__beanDel.ft(event.target, element) : eventElement
                }
              , handler = condition
                  ? function (event) {
                      var target = findTarget(event, this) // deleated event
                      if (condition.apply(target, arguments)) {
                        if (event) event.currentTarget = target
                        return call(event, arguments)
                      }
                    }
                  : function (event) {
                      if (fn.__beanDel) event = event.clone(findTarget(event)) // delegated event, fix the fix
                      return call(event, arguments)
                    }
            handler.__beanDel = fn.__beanDel
            return handler
          }

        , RegEntry = function (element, type, handler, original, namespaces, args, root) {
            var customType     = customEvents[type]
              , isNative

            if (type == 'unload') {
              // self clean-up
              handler = once(removeListener, element, type, handler, original)
            }

            if (customType) {
              if (customType.condition) {
                handler = wrappedHandler(element, handler, customType.condition, args)
              }
              type = customType.base || type
            }

            this.isNative      = isNative = nativeEvents[type] && !!element[eventSupport]
            this.customType    = !W3C_MODEL && !isNative && type
            this.element       = element
            this.type          = type
            this.original      = original
            this.namespaces    = namespaces
            this.eventType     = W3C_MODEL || isNative ? type : 'propertychange'
            this.target        = targetElement(element, isNative)
            this[eventSupport] = !!this.target[eventSupport]
            this.root          = root
            this.handler       = wrappedHandler(element, handler, null, args)
          }

        // given a list of namespaces, is our entry in any of them?
        RegEntry.prototype.inNamespaces = function (checkNamespaces) {
          var i, j, c = 0
          if (!checkNamespaces) return true
          if (!this.namespaces) return false
          for (i = checkNamespaces.length; i--;) {
            for (j = this.namespaces.length; j--;) {
              if (checkNamespaces[i] == this.namespaces[j]) c++
            }
          }
          return checkNamespaces.length === c
        }

        // match by element, original fn (opt), handler fn (opt)
        RegEntry.prototype.matches = function (checkElement, checkOriginal, checkHandler) {
          return this.element === checkElement &&
            (!checkOriginal || this.original === checkOriginal) &&
            (!checkHandler || this.handler === checkHandler)
        }

        return RegEntry
      }())

    , registry = (function () {
        // our map stores arrays by event type, just because it's better than storing
        // everything in a single array.
        // uses '$' as a prefix for the keys for safety and 'r' as a special prefix for
        // rootListeners so we can look them up fast
        var map = {}

          // generic functional search of our registry for matching listeners,
          // `fn` returns false to break out of the loop
          , forAll = function (element, type, original, handler, root, fn) {
              var pfx = root ? 'r' : '$'
              if (!type || type == '*') {
                // search the whole registry
                for (var t in map) {
                  if (t.charAt(0) == pfx) {
                    forAll(element, t.substr(1), original, handler, root, fn)
                  }
                }
              } else {
                var i = 0, l, list = map[pfx + type], all = element == '*'
                if (!list) return
                for (l = list.length; i < l; i++) {
                  if ((all || list[i].matches(element, original, handler)) && !fn(list[i], list, i, type)) return
                }
              }
            }

          , has = function (element, type, original, root) {
              // we're not using forAll here simply because it's a bit slower and this
              // needs to be fast
              var i, list = map[(root ? 'r' : '$') + type]
              if (list) {
                for (i = list.length; i--;) {
                  if (!list[i].root && list[i].matches(element, original, null)) return true
                }
              }
              return false
            }

          , get = function (element, type, original, root) {
              var entries = []
              forAll(element, type, original, null, root, function (entry) {
                return entries.push(entry)
              })
              return entries
            }

          , put = function (entry) {
              var has = !entry.root && !this.has(entry.element, entry.type, null, false)
                , key = (entry.root ? 'r' : '$') + entry.type
              ;(map[key] || (map[key] = [])).push(entry)
              return has
            }

          , del = function (entry) {
              forAll(entry.element, entry.type, null, entry.handler, entry.root, function (entry, list, i) {
                list.splice(i, 1)
                entry.removed = true
                if (list.length === 0) delete map[(entry.root ? 'r' : '$') + entry.type]
                return false
              })
            }

            // dump all entries, used for onunload
          , entries = function () {
              var t, entries = []
              for (t in map) {
                if (t.charAt(0) == '$') entries = entries.concat(map[t])
              }
              return entries
            }

        return { has: has, get: get, put: put, del: del, entries: entries }
      }())

      // we need a selector engine for delegated events, use querySelectorAll if it exists
      // but for older browsers we need Qwery, Sizzle or similar
    , selectorEngine
    , setSelectorEngine = function (e) {
        if (!arguments.length) {
          selectorEngine = doc.querySelectorAll
            ? function (s, r) {
                return r.querySelectorAll(s)
              }
            : function () {
                throw new Error('Bean: No selector engine installed') // eeek
              }
        } else {
          selectorEngine = e
        }
      }

      // we attach this listener to each DOM event that we need to listen to, only once
      // per event type per DOM element
    , rootListener = function (event, type) {
        if (!W3C_MODEL && type && event && event.propertyName != '_on' + type) return

        var listeners = registry.get(this, type || event.type, null, false)
          , l = listeners.length
          , i = 0

        event = new Event(event, this, true)
        if (type) event.type = type

        // iterate through all handlers registered for this type, calling them unless they have
        // been removed by a previous handler or stopImmediatePropagation() has been called
        for (; i < l && !event.isImmediatePropagationStopped(); i++) {
          if (!listeners[i].removed) listeners[i].handler.call(this, event)
        }
      }

      // add and remove listeners to DOM elements
    , listener = W3C_MODEL
        ? function (element, type, add) {
            // new browsers
            element[add ? addEvent : removeEvent](type, rootListener, false)
          }
        : function (element, type, add, custom) {
            // IE8 and below, use attachEvent/detachEvent and we have to piggy-back propertychange events
            // to simulate event bubbling etc.
            var entry
            if (add) {
              registry.put(entry = new RegEntry(
                  element
                , custom || type
                , function (event) { // handler
                    rootListener.call(element, event, custom)
                  }
                , rootListener
                , null
                , null
                , true // is root
              ))
              if (custom && element['_on' + custom] == null) element['_on' + custom] = 0
              entry.target.attachEvent('on' + entry.eventType, entry.handler)
            } else {
              entry = registry.get(element, custom || type, rootListener, true)[0]
              if (entry) {
                entry.target.detachEvent('on' + entry.eventType, entry.handler)
                registry.del(entry)
              }
            }
          }

    , once = function (rm, element, type, fn, originalFn) {
        // wrap the handler in a handler that does a remove as well
        return function () {
          fn.apply(this, arguments)
          rm(element, type, originalFn)
        }
      }

    , removeListener = function (element, orgType, handler, namespaces) {
        var type     = orgType && orgType.replace(nameRegex, '')
          , handlers = registry.get(element, type, null, false)
          , removed  = {}
          , i, l

        for (i = 0, l = handlers.length; i < l; i++) {
          if ((!handler || handlers[i].original === handler) && handlers[i].inNamespaces(namespaces)) {
            // TODO: this is problematic, we have a registry.get() and registry.del() that
            // both do registry searches so we waste cycles doing this. Needs to be rolled into
            // a single registry.forAll(fn) that removes while finding, but the catch is that
            // we'll be splicing the arrays that we're iterating over. Needs extra tests to
            // make sure we don't screw it up. @rvagg
            registry.del(handlers[i])
            if (!removed[handlers[i].eventType] && handlers[i][eventSupport])
              removed[handlers[i].eventType] = { t: handlers[i].eventType, c: handlers[i].type }
          }
        }
        // check each type/element for removed listeners and remove the rootListener where it's no longer needed
        for (i in removed) {
          if (!registry.has(element, removed[i].t, null, false)) {
            // last listener of this type, remove the rootListener
            listener(element, removed[i].t, false, removed[i].c)
          }
        }
      }

      // set up a delegate helper using the given selector, wrap the handler function
    , delegate = function (selector, fn) {
        //TODO: findTarget (therefore $) is called twice, once for match and once for
        // setting e.currentTarget, fix this so it's only needed once
        var findTarget = function (target, root) {
              var i, array = isString(selector) ? selectorEngine(selector, root) : selector
              for (; target && target !== root; target = target.parentNode) {
                for (i = array.length; i--;) {
                  if (array[i] === target) return target
                }
              }
            }
          , handler = function (e) {
              var match = findTarget(e.target, this)
              if (match) fn.apply(match, arguments)
            }

        // __beanDel isn't pleasant but it's a private function, not exposed outside of Bean
        handler.__beanDel = {
            ft       : findTarget // attach it here for customEvents to use too
          , selector : selector
        }
        return handler
      }

    , fireListener = W3C_MODEL ? function (isNative, type, element) {
        // modern browsers, do a proper dispatchEvent()
        var evt = doc.createEvent(isNative ? 'HTMLEvents' : 'UIEvents')
        evt[isNative ? 'initEvent' : 'initUIEvent'](type, true, true, win, 1)
        element.dispatchEvent(evt)
      } : function (isNative, type, element) {
        // old browser use onpropertychange, just increment a custom property to trigger the event
        element = targetElement(element, isNative)
        isNative ? element.fireEvent('on' + type, doc.createEventObject()) : element['_on' + type]++
      }

      /**
        * Public API: off(), on(), add(), (remove()), one(), fire(), clone()
        */

      /**
        * off(element[, eventType(s)[, handler ]])
        */
    , off = function (element, typeSpec, fn) {
        var isTypeStr = isString(typeSpec)
          , k, type, namespaces, i

        if (isTypeStr && typeSpec.indexOf(' ') > 0) {
          // off(el, 't1 t2 t3', fn) or off(el, 't1 t2 t3')
          typeSpec = str2arr(typeSpec)
          for (i = typeSpec.length; i--;)
            off(element, typeSpec[i], fn)
          return element
        }

        type = isTypeStr && typeSpec.replace(nameRegex, '')
        if (type && customEvents[type]) type = customEvents[type].base

        if (!typeSpec || isTypeStr) {
          // off(el) or off(el, t1.ns) or off(el, .ns) or off(el, .ns1.ns2.ns3)
          if (namespaces = isTypeStr && typeSpec.replace(namespaceRegex, '')) namespaces = str2arr(namespaces, '.')
          removeListener(element, type, fn, namespaces)
        } else if (isFunction(typeSpec)) {
          // off(el, fn)
          removeListener(element, null, typeSpec)
        } else {
          // off(el, { t1: fn1, t2, fn2 })
          for (k in typeSpec) {
            if (typeSpec.hasOwnProperty(k)) off(element, k, typeSpec[k])
          }
        }

        return element
      }

      /**
        * on(element, eventType(s)[, selector], handler[, args ])
        */
    , on = function(element, events, selector, fn) {
        var originalFn, type, types, i, args, entry, first

        //TODO: the undefined check means you can't pass an 'args' argument, fix this perhaps?
        if (selector === undefined && typeof events == 'object') {
          //TODO: this can't handle delegated events
          for (type in events) {
            if (events.hasOwnProperty(type)) {
              on.call(this, element, type, events[type])
            }
          }
          return
        }

        if (!isFunction(selector)) {
          // delegated event
          originalFn = fn
          args       = slice.call(arguments, 4)
          fn         = delegate(selector, originalFn, selectorEngine)
        } else {
          args       = slice.call(arguments, 3)
          fn         = originalFn = selector
        }

        types = str2arr(events)

        // special case for one(), wrap in a self-removing handler
        if (this === ONE) {
          fn = once(off, element, events, fn, originalFn)
        }

        for (i = types.length; i--;) {
          // add new handler to the registry and check if it's the first for this element/type
          first = registry.put(entry = new RegEntry(
              element
            , types[i].replace(nameRegex, '') // event type
            , fn
            , originalFn
            , str2arr(types[i].replace(namespaceRegex, ''), '.') // namespaces
            , args
            , false // not root
          ))
          if (entry[eventSupport] && first) {
            // first event of this type on this element, add root listener
            listener(element, entry.eventType, true, entry.customType)
          }
        }

        return element
      }

      /**
        * add(element[, selector], eventType(s), handler[, args ])
        *
        * Deprecated: kept (for now) for backward-compatibility
        */
    , add = function (element, events, fn, delfn) {
        return on.apply(
            null
          , !isString(fn)
              ? slice.call(arguments)
              : [ element, fn, events, delfn ].concat(arguments.length > 3 ? slice.call(arguments, 5) : [])
        )
      }

      /**
        * one(element, eventType(s)[, selector], handler[, args ])
        */
    , one = function () {
        return on.apply(ONE, arguments)
      }

      /**
        * fire(element, eventType(s)[, args ])
        *
        * The optional 'args' argument must be an array, if no 'args' argument is provided
        * then we can use the browser's DOM event system, otherwise we trigger handlers manually
        */
    , fire = function (element, type, args) {
        var types = str2arr(type)
          , i, j, l, names, handlers

        for (i = types.length; i--;) {
          type = types[i].replace(nameRegex, '')
          if (names = types[i].replace(namespaceRegex, '')) names = str2arr(names, '.')
          if (!names && !args && element[eventSupport]) {
            fireListener(nativeEvents[type], type, element)
          } else {
            // non-native event, either because of a namespace, arguments or a non DOM element
            // iterate over all listeners and manually 'fire'
            handlers = registry.get(element, type, null, false)
            args = [false].concat(args)
            for (j = 0, l = handlers.length; j < l; j++) {
              if (handlers[j].inNamespaces(names)) {
                handlers[j].handler.apply(element, args)
              }
            }
          }
        }
        return element
      }

      /**
        * clone(dstElement, srcElement[, eventType ])
        *
        * TODO: perhaps for consistency we should allow the same flexibility in type specifiers?
        */
    , clone = function (element, from, type) {
        var handlers = registry.get(from, type, null, false)
          , l = handlers.length
          , i = 0
          , args, beanDel

        for (; i < l; i++) {
          if (handlers[i].original) {
            args = [ element, handlers[i].type ]
            if (beanDel = handlers[i].handler.__beanDel) args.push(beanDel.selector)
            args.push(handlers[i].original)
            on.apply(null, args)
          }
        }
        return element
      }

    , bean = {
          'on'                : on
        , 'add'               : add
        , 'one'               : one
        , 'off'               : off
        , 'remove'            : off
        , 'clone'             : clone
        , 'fire'              : fire
        , 'Event'             : Event
        , 'setSelectorEngine' : setSelectorEngine
        , 'noConflict'        : function () {
            context[name] = old
            return this
          }
      }

  // for IE, clean up on unload to avoid leaks
  if (win.attachEvent) {
    var cleanup = function () {
      var i, entries = registry.entries()
      for (i in entries) {
        if (entries[i].type && entries[i].type !== 'unload') off(entries[i].element, entries[i].type)
      }
      win.detachEvent('onunload', cleanup)
      win.CollectGarbage && win.CollectGarbage()
    }
    win.attachEvent('onunload', cleanup)
  }

  // initialize selector engine to internal default (qSA or throw Error)
  setSelectorEngine()

  return bean
});

},{}],21:[function(_dereq_,module,exports){
(function (global){
/*! http://mths.be/punycode v1.2.4 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports;
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^ -~]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /\x2E|\u3002|\uFF0E|\uFF61/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		while (length--) {
			array[length] = fn(array[length]);
		}
		return array;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings.
	 * @private
	 * @param {String} domain The domain name.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		return map(string.split(regexSeparators), fn).join('.');
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <http://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols to a Punycode string of ASCII-only
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name to Unicode. Only the
	 * Punycoded parts of the domain name will be converted, i.e. it doesn't
	 * matter if you call it on a string that has already been converted to
	 * Unicode.
	 * @memberOf punycode
	 * @param {String} domain The Punycode domain name to convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(domain) {
		return mapDomain(domain, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name to Punycode. Only the
	 * non-ASCII parts of the domain name will be converted, i.e. it doesn't
	 * matter if you call it with a domain that's already in ASCII.
	 * @memberOf punycode
	 * @param {String} domain The domain name to convert, as a Unicode string.
	 * @returns {String} The Punycode representation of the given domain name.
	 */
	function toASCII(domain) {
		return mapDomain(domain, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.2.4',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <http://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],22:[function(_dereq_,module,exports){
// contains, add, remove, toggle
var indexof = _dereq_('indexof')

module.exports = ClassList

function ClassList(elem) {
    var cl = elem.classList

    if (cl) {
        return cl
    }

    var classList = {
        add: add
        , remove: remove
        , contains: contains
        , toggle: toggle
        , toString: $toString
        , length: 0
        , item: item
    }

    return classList

    function add(token) {
        var list = getTokens()
        if (indexof(list, token) > -1) {
            return
        }
        list.push(token)
        setTokens(list)
    }

    function remove(token) {
        var list = getTokens()
            , index = indexof(list, token)

        if (index === -1) {
            return
        }

        list.splice(index, 1)
        setTokens(list)
    }

    function contains(token) {
        return indexof(getTokens(), token) > -1
    }

    function toggle(token) {
        if (contains(token)) {
            remove(token)
            return false
        } else {
            add(token)
            return true
        }
    }

    function $toString() {
        return elem.className
    }

    function item(index) {
        var tokens = getTokens()
        return tokens[index] || null
    }

    function getTokens() {
        var className = elem.className

        return filter(className.split(" "), isTruthy)
    }

    function setTokens(list) {
        var length = list.length

        elem.className = list.join(" ")
        classList.length = length

        for (var i = 0; i < list.length; i++) {
            classList[i] = list[i]
        }

        delete list[length]
    }
}

function filter (arr, fn) {
    var ret = []
    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i])) ret.push(arr[i])
    }
    return ret
}

function isTruthy(value) {
    return !!value
}

},{"indexof":23}],23:[function(_dereq_,module,exports){

var indexOf = [].indexOf;

module.exports = function(arr, obj){
  if (indexOf) return arr.indexOf(obj);
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] === obj) return i;
  }
  return -1;
};
},{}],24:[function(_dereq_,module,exports){
// DEV: We don't use var but favor parameters since these play nicer with minification
function computedStyle(el, prop, getComputedStyle, style) {
  getComputedStyle = window.getComputedStyle;
  style =
      // If we have getComputedStyle
      getComputedStyle ?
        // Query it
        // TODO: From CSS-Query notes, we might need (node, null) for FF
        getComputedStyle(el) :

      // Otherwise, we are in IE and use currentStyle
        el.currentStyle;
  if (style) {
    return style
    [
      // Switch to camelCase for CSSOM
      // DEV: Grabbed from jQuery
      // https://github.com/jquery/jquery/blob/1.9-stable/src/css.js#L191-L194
      // https://github.com/jquery/jquery/blob/1.9-stable/src/core.js#L593-L597
      prop.replace(/-(\w)/gi, function (word, letter) {
        return letter.toUpperCase();
      })
    ];
  }
}

module.exports = computedStyle;

},{}],25:[function(_dereq_,module,exports){
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */

// vim: ts=4 sts=4 sw=4 expandtab

// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
;

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
    'use strict';

    /* global define, exports, module */
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {

/**
 * Brings an environment as close to ECMAScript 5 compliance
 * as is possible with the facilities of erstwhile engines.
 *
 * Annotated ES5: http://es5.github.com/ (specific links below)
 * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
 * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
 */

// Shortcut to an often accessed properties, in order to avoid multiple
// dereference that costs universally. This also holds a reference to known-good
// functions.
var $Array = Array;
var ArrayPrototype = $Array.prototype;
var $Object = Object;
var ObjectPrototype = $Object.prototype;
var FunctionPrototype = Function.prototype;
var $String = String;
var StringPrototype = $String.prototype;
var $Number = Number;
var NumberPrototype = $Number.prototype;
var array_slice = ArrayPrototype.slice;
var array_splice = ArrayPrototype.splice;
var array_push = ArrayPrototype.push;
var array_unshift = ArrayPrototype.unshift;
var array_concat = ArrayPrototype.concat;
var call = FunctionPrototype.call;
var apply = FunctionPrototype.apply;
var max = Math.max;
var min = Math.min;

// Having a toString local variable name breaks in Opera so use to_string.
var to_string = ObjectPrototype.toString;

var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, tryFunctionObject = function tryFunctionObject(value) { try { fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]'; isCallable = function isCallable(value) { if (typeof value !== 'function') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };
var isRegex; /* inlined from https://npmjs.com/is-regex */ var regexExec = RegExp.prototype.exec, tryRegexExec = function tryRegexExec(value) { try { regexExec.call(value); return true; } catch (e) { return false; } }, regexClass = '[object RegExp]'; isRegex = function isRegex(value) { if (typeof value !== 'object') { return false; } return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass; };
var isString; /* inlined from https://npmjs.com/is-string */ var strValue = String.prototype.valueOf, tryStringObject = function tryStringObject(value) { try { strValue.call(value); return true; } catch (e) { return false; } }, stringClass = '[object String]'; isString = function isString(value) { if (typeof value === 'string') { return true; } if (typeof value !== 'object') { return false; } return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass; };

/* inlined from http://npmjs.com/define-properties */
var supportsDescriptors = $Object.defineProperty && (function () {
    try {
        var obj = {};
        $Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
        for (var _ in obj) { return false; }
        return obj.x === obj;
    } catch (e) { /* this is ES3 */
        return false;
    }
}());
var defineProperties = (function (has) {
  // Define configurable, writable, and non-enumerable props
  // if they don't exist.
  var defineProperty;
  if (supportsDescriptors) {
      defineProperty = function (object, name, method, forceAssign) {
          if (!forceAssign && (name in object)) { return; }
          $Object.defineProperty(object, name, {
              configurable: true,
              enumerable: false,
              writable: true,
              value: method
          });
      };
  } else {
      defineProperty = function (object, name, method, forceAssign) {
          if (!forceAssign && (name in object)) { return; }
          object[name] = method;
      };
  }
  return function defineProperties(object, map, forceAssign) {
      for (var name in map) {
          if (has.call(map, name)) {
            defineProperty(object, name, map[name], forceAssign);
          }
      }
  };
}(ObjectPrototype.hasOwnProperty));

//
// Util
// ======
//

/* replaceable with https://npmjs.com/package/es-abstract /helpers/isPrimitive */
var isPrimitive = function isPrimitive(input) {
    var type = typeof input;
    return input === null || (type !== 'object' && type !== 'function');
};

var isActualNaN = $Number.isNaN || function (x) { return x !== x; };

var ES = {
    // ES5 9.4
    // http://es5.github.com/#x9.4
    // http://jsperf.com/to-integer
    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */
    ToInteger: function ToInteger(num) {
        var n = +num;
        if (isActualNaN(n)) {
            n = 0;
        } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
            n = (n > 0 || -1) * Math.floor(Math.abs(n));
        }
        return n;
    },

    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */
    ToPrimitive: function ToPrimitive(input) {
        var val, valueOf, toStr;
        if (isPrimitive(input)) {
            return input;
        }
        valueOf = input.valueOf;
        if (isCallable(valueOf)) {
            val = valueOf.call(input);
            if (isPrimitive(val)) {
                return val;
            }
        }
        toStr = input.toString;
        if (isCallable(toStr)) {
            val = toStr.call(input);
            if (isPrimitive(val)) {
                return val;
            }
        }
        throw new TypeError();
    },

    // ES5 9.9
    // http://es5.github.com/#x9.9
    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */
    ToObject: function (o) {
        if (o == null) { // this matches both null and undefined
            throw new TypeError("can't convert " + o + ' to object');
        }
        return $Object(o);
    },

    /* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */
    ToUint32: function ToUint32(x) {
        return x >>> 0;
    }
};

//
// Function
// ========
//

// ES-5 15.3.4.5
// http://es5.github.com/#x15.3.4.5

var Empty = function Empty() {};

defineProperties(FunctionPrototype, {
    bind: function bind(that) { // .length is 1
        // 1. Let Target be the this value.
        var target = this;
        // 2. If IsCallable(Target) is false, throw a TypeError exception.
        if (!isCallable(target)) {
            throw new TypeError('Function.prototype.bind called on incompatible ' + target);
        }
        // 3. Let A be a new (possibly empty) internal list of all of the
        //   argument values provided after thisArg (arg1, arg2 etc), in order.
        // XXX slicedArgs will stand in for "A" if used
        var args = array_slice.call(arguments, 1); // for normal call
        // 4. Let F be a new native ECMAScript object.
        // 11. Set the [[Prototype]] internal property of F to the standard
        //   built-in Function prototype object as specified in 15.3.3.1.
        // 12. Set the [[Call]] internal property of F as described in
        //   15.3.4.5.1.
        // 13. Set the [[Construct]] internal property of F as described in
        //   15.3.4.5.2.
        // 14. Set the [[HasInstance]] internal property of F as described in
        //   15.3.4.5.3.
        var bound;
        var binder = function () {

            if (this instanceof bound) {
                // 15.3.4.5.2 [[Construct]]
                // When the [[Construct]] internal method of a function object,
                // F that was created using the bind function is called with a
                // list of arguments ExtraArgs, the following steps are taken:
                // 1. Let target be the value of F's [[TargetFunction]]
                //   internal property.
                // 2. If target has no [[Construct]] internal method, a
                //   TypeError exception is thrown.
                // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Construct]] internal
                //   method of target providing args as the arguments.

                var result = target.apply(
                    this,
                    array_concat.call(args, array_slice.call(arguments))
                );
                if ($Object(result) === result) {
                    return result;
                }
                return this;

            } else {
                // 15.3.4.5.1 [[Call]]
                // When the [[Call]] internal method of a function object, F,
                // which was created using the bind function is called with a
                // this value and a list of arguments ExtraArgs, the following
                // steps are taken:
                // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                //   property.
                // 2. Let boundThis be the value of F's [[BoundThis]] internal
                //   property.
                // 3. Let target be the value of F's [[TargetFunction]] internal
                //   property.
                // 4. Let args be a new list containing the same values as the
                //   list boundArgs in the same order followed by the same
                //   values as the list ExtraArgs in the same order.
                // 5. Return the result of calling the [[Call]] internal method
                //   of target providing boundThis as the this value and
                //   providing args as the arguments.

                // equiv: target.call(this, ...boundArgs, ...args)
                return target.apply(
                    that,
                    array_concat.call(args, array_slice.call(arguments))
                );

            }

        };

        // 15. If the [[Class]] internal property of Target is "Function", then
        //     a. Let L be the length property of Target minus the length of A.
        //     b. Set the length own property of F to either 0 or L, whichever is
        //       larger.
        // 16. Else set the length own property of F to 0.

        var boundLength = max(0, target.length - args.length);

        // 17. Set the attributes of the length own property of F to the values
        //   specified in 15.3.5.1.
        var boundArgs = [];
        for (var i = 0; i < boundLength; i++) {
            array_push.call(boundArgs, '$' + i);
        }

        // XXX Build a dynamic function with desired amount of arguments is the only
        // way to set the length property of a function.
        // In environments where Content Security Policies enabled (Chrome extensions,
        // for ex.) all use of eval or Function costructor throws an exception.
        // However in all of these environments Function.prototype.bind exists
        // and so this code will never be executed.
        bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this, arguments); }')(binder);

        if (target.prototype) {
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            // Clean up dangling references.
            Empty.prototype = null;
        }

        // TODO
        // 18. Set the [[Extensible]] internal property of F to true.

        // TODO
        // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
        // 20. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
        //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
        //   false.
        // 21. Call the [[DefineOwnProperty]] internal method of F with
        //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
        //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
        //   and false.

        // TODO
        // NOTE Function objects created using Function.prototype.bind do not
        // have a prototype property or the [[Code]], [[FormalParameters]], and
        // [[Scope]] internal properties.
        // XXX can't delete prototype in pure-js.

        // 22. Return F.
        return bound;
    }
});

// _Please note: Shortcuts are defined after `Function.prototype.bind` as we
// use it in defining shortcuts.
var owns = call.bind(ObjectPrototype.hasOwnProperty);
var toStr = call.bind(ObjectPrototype.toString);
var arraySlice = call.bind(array_slice);
var arraySliceApply = apply.bind(array_slice);
var strSlice = call.bind(StringPrototype.slice);
var strSplit = call.bind(StringPrototype.split);
var strIndexOf = call.bind(StringPrototype.indexOf);
var push = call.bind(array_push);
var isEnum = call.bind(ObjectPrototype.propertyIsEnumerable);
var arraySort = call.bind(ArrayPrototype.sort);

//
// Array
// =====
//

var isArray = $Array.isArray || function isArray(obj) {
    return toStr(obj) === '[object Array]';
};

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.13
// Return len+argCount.
// [bugfix, ielt8]
// IE < 8 bug: [].unshift(0) === undefined but should be "1"
var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
defineProperties(ArrayPrototype, {
    unshift: function () {
        array_unshift.apply(this, arguments);
        return this.length;
    }
}, hasUnshiftReturnValueBug);

// ES5 15.4.3.2
// http://es5.github.com/#x15.4.3.2
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
defineProperties($Array, { isArray: isArray });

// The IsCallable() check in the Array functions
// has been replaced with a strict check on the
// internal class of the object to trap cases where
// the provided function was actually a regular
// expression literal, which in V8 and
// JavaScriptCore is a typeof "function".  Only in
// V8 are regular expression literals permitted as
// reduce parameters, so it is desirable in the
// general case for the shim to match the more
// strict and common behavior of rejecting regular
// expressions.

// ES5 15.4.4.18
// http://es5.github.com/#x15.4.4.18
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

// Check failure of by-index access of string characters (IE < 9)
// and failure of `0 in boxedString` (Rhino)
var boxedString = $Object('a');
var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

var properlyBoxesContext = function properlyBoxed(method) {
    // Check node 0.6.21 bug where third parameter is not boxed
    var properlyBoxesNonStrict = true;
    var properlyBoxesStrict = true;
    if (method) {
        method.call('foo', function (_, __, context) {
            if (typeof context !== 'object') { properlyBoxesNonStrict = false; }
        });

        method.call([1], function () {
            'use strict';

            properlyBoxesStrict = typeof this === 'string';
        }, 'x');
    }
    return !!method && properlyBoxesNonStrict && properlyBoxesStrict;
};

defineProperties(ArrayPrototype, {
    forEach: function forEach(callbackfn/*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var i = -1;
        var length = ES.ToUint32(self.length);
        var T;
        if (arguments.length > 1) {
          T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.forEach callback must be a function');
        }

        while (++i < length) {
            if (i in self) {
                // Invoke the callback function with call, passing arguments:
                // context, property value, property key, thisArg object
                if (typeof T === 'undefined') {
                    callbackfn(self[i], i, object);
                } else {
                    callbackfn.call(T, self[i], i, object);
                }
            }
        }
    }
}, !properlyBoxesContext(ArrayPrototype.forEach));

// ES5 15.4.4.19
// http://es5.github.com/#x15.4.4.19
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
defineProperties(ArrayPrototype, {
    map: function map(callbackfn/*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = ES.ToUint32(self.length);
        var result = $Array(length);
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.map callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self) {
                if (typeof T === 'undefined') {
                    result[i] = callbackfn(self[i], i, object);
                } else {
                    result[i] = callbackfn.call(T, self[i], i, object);
                }
            }
        }
        return result;
    }
}, !properlyBoxesContext(ArrayPrototype.map));

// ES5 15.4.4.20
// http://es5.github.com/#x15.4.4.20
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
defineProperties(ArrayPrototype, {
    filter: function filter(callbackfn/*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = ES.ToUint32(self.length);
        var result = [];
        var value;
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.filter callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self) {
                value = self[i];
                if (typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) {
                    push(result, value);
                }
            }
        }
        return result;
    }
}, !properlyBoxesContext(ArrayPrototype.filter));

// ES5 15.4.4.16
// http://es5.github.com/#x15.4.4.16
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
defineProperties(ArrayPrototype, {
    every: function every(callbackfn/*, thisArg*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = ES.ToUint32(self.length);
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.every callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
                return false;
            }
        }
        return true;
    }
}, !properlyBoxesContext(ArrayPrototype.every));

// ES5 15.4.4.17
// http://es5.github.com/#x15.4.4.17
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
defineProperties(ArrayPrototype, {
    some: function some(callbackfn/*, thisArg */) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = ES.ToUint32(self.length);
        var T;
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.some callback must be a function');
        }

        for (var i = 0; i < length; i++) {
            if (i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
                return true;
            }
        }
        return false;
    }
}, !properlyBoxesContext(ArrayPrototype.some));

// ES5 15.4.4.21
// http://es5.github.com/#x15.4.4.21
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
var reduceCoercesToObject = false;
if (ArrayPrototype.reduce) {
    reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function (_, __, ___, list) { return list; }) === 'object';
}
defineProperties(ArrayPrototype, {
    reduce: function reduce(callbackfn/*, initialValue*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = ES.ToUint32(self.length);

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.reduce callback must be a function');
        }

        // no value to return if no initial value and an empty array
        if (length === 0 && arguments.length === 1) {
            throw new TypeError('reduce of empty array with no initial value');
        }

        var i = 0;
        var result;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i++];
                    break;
                }

                // if array contains no values, no initial value to return
                if (++i >= length) {
                    throw new TypeError('reduce of empty array with no initial value');
                }
            } while (true);
        }

        for (; i < length; i++) {
            if (i in self) {
                result = callbackfn(result, self[i], i, object);
            }
        }

        return result;
    }
}, !reduceCoercesToObject);

// ES5 15.4.4.22
// http://es5.github.com/#x15.4.4.22
// https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
var reduceRightCoercesToObject = false;
if (ArrayPrototype.reduceRight) {
    reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function (_, __, ___, list) { return list; }) === 'object';
}
defineProperties(ArrayPrototype, {
    reduceRight: function reduceRight(callbackfn/*, initial*/) {
        var object = ES.ToObject(this);
        var self = splitString && isString(this) ? strSplit(this, '') : object;
        var length = ES.ToUint32(self.length);

        // If no callback function or if callback is not a callable function
        if (!isCallable(callbackfn)) {
            throw new TypeError('Array.prototype.reduceRight callback must be a function');
        }

        // no value to return if no initial value, empty array
        if (length === 0 && arguments.length === 1) {
            throw new TypeError('reduceRight of empty array with no initial value');
        }

        var result;
        var i = length - 1;
        if (arguments.length >= 2) {
            result = arguments[1];
        } else {
            do {
                if (i in self) {
                    result = self[i--];
                    break;
                }

                // if array contains no values, no initial value to return
                if (--i < 0) {
                    throw new TypeError('reduceRight of empty array with no initial value');
                }
            } while (true);
        }

        if (i < 0) {
            return result;
        }

        do {
            if (i in self) {
                result = callbackfn(result, self[i], i, object);
            }
        } while (i--);

        return result;
    }
}, !reduceRightCoercesToObject);

// ES5 15.4.4.14
// http://es5.github.com/#x15.4.4.14
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
defineProperties(ArrayPrototype, {
    indexOf: function indexOf(searchElement/*, fromIndex */) {
        var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
        var length = ES.ToUint32(self.length);

        if (length === 0) {
            return -1;
        }

        var i = 0;
        if (arguments.length > 1) {
            i = ES.ToInteger(arguments[1]);
        }

        // handle negative indices
        i = i >= 0 ? i : max(0, length + i);
        for (; i < length; i++) {
            if (i in self && self[i] === searchElement) {
                return i;
            }
        }
        return -1;
    }
}, hasFirefox2IndexOfBug);

// ES5 15.4.4.15
// http://es5.github.com/#x15.4.4.15
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
defineProperties(ArrayPrototype, {
    lastIndexOf: function lastIndexOf(searchElement/*, fromIndex */) {
        var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
        var length = ES.ToUint32(self.length);

        if (length === 0) {
            return -1;
        }
        var i = length - 1;
        if (arguments.length > 1) {
            i = min(i, ES.ToInteger(arguments[1]));
        }
        // handle negative indices
        i = i >= 0 ? i : length - Math.abs(i);
        for (; i >= 0; i--) {
            if (i in self && searchElement === self[i]) {
                return i;
            }
        }
        return -1;
    }
}, hasFirefox2LastIndexOfBug);

// ES5 15.4.4.12
// http://es5.github.com/#x15.4.4.12
var spliceNoopReturnsEmptyArray = (function () {
    var a = [1, 2];
    var result = a.splice();
    return a.length === 2 && isArray(result) && result.length === 0;
}());
defineProperties(ArrayPrototype, {
    // Safari 5.0 bug where .splice() returns undefined
    splice: function splice(start, deleteCount) {
        if (arguments.length === 0) {
            return [];
        } else {
            return array_splice.apply(this, arguments);
        }
    }
}, !spliceNoopReturnsEmptyArray);

var spliceWorksWithEmptyObject = (function () {
    var obj = {};
    ArrayPrototype.splice.call(obj, 0, 0, 1);
    return obj.length === 1;
}());
defineProperties(ArrayPrototype, {
    splice: function splice(start, deleteCount) {
        if (arguments.length === 0) { return []; }
        var args = arguments;
        this.length = max(ES.ToInteger(this.length), 0);
        if (arguments.length > 0 && typeof deleteCount !== 'number') {
            args = arraySlice(arguments);
            if (args.length < 2) {
                push(args, this.length - start);
            } else {
                args[1] = ES.ToInteger(deleteCount);
            }
        }
        return array_splice.apply(this, args);
    }
}, !spliceWorksWithEmptyObject);
var spliceWorksWithLargeSparseArrays = (function () {
    // Per https://github.com/es-shims/es5-shim/issues/295
    // Safari 7/8 breaks with sparse arrays of size 1e5 or greater
    var arr = new $Array(1e5);
    // note: the index MUST be 8 or larger or the test will false pass
    arr[8] = 'x';
    arr.splice(1, 1);
    // note: this test must be defined *after* the indexOf shim
    // per https://github.com/es-shims/es5-shim/issues/313
    return arr.indexOf('x') === 7;
}());
var spliceWorksWithSmallSparseArrays = (function () {
    // Per https://github.com/es-shims/es5-shim/issues/295
    // Opera 12.15 breaks on this, no idea why.
    var n = 256;
    var arr = [];
    arr[n] = 'a';
    arr.splice(n + 1, 0, 'b');
    return arr[n] === 'a';
}());
defineProperties(ArrayPrototype, {
    splice: function splice(start, deleteCount) {
        var O = ES.ToObject(this);
        var A = [];
        var len = ES.ToUint32(O.length);
        var relativeStart = ES.ToInteger(start);
        var actualStart = relativeStart < 0 ? max((len + relativeStart), 0) : min(relativeStart, len);
        var actualDeleteCount = min(max(ES.ToInteger(deleteCount), 0), len - actualStart);

        var k = 0;
        var from;
        while (k < actualDeleteCount) {
            from = $String(actualStart + k);
            if (owns(O, from)) {
                A[k] = O[from];
            }
            k += 1;
        }

        var items = arraySlice(arguments, 2);
        var itemCount = items.length;
        var to;
        if (itemCount < actualDeleteCount) {
            k = actualStart;
            while (k < (len - actualDeleteCount)) {
                from = $String(k + actualDeleteCount);
                to = $String(k + itemCount);
                if (owns(O, from)) {
                    O[to] = O[from];
                } else {
                    delete O[to];
                }
                k += 1;
            }
            k = len;
            while (k > (len - actualDeleteCount + itemCount)) {
                delete O[k - 1];
                k -= 1;
            }
        } else if (itemCount > actualDeleteCount) {
            k = len - actualDeleteCount;
            while (k > actualStart) {
                from = $String(k + actualDeleteCount - 1);
                to = $String(k + itemCount - 1);
                if (owns(O, from)) {
                    O[to] = O[from];
                } else {
                    delete O[to];
                }
                k -= 1;
            }
        }
        k = actualStart;
        for (var i = 0; i < items.length; ++i) {
            O[k] = items[i];
            k += 1;
        }
        O.length = len - actualDeleteCount + itemCount;

        return A;
    }
}, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);

var originalJoin = ArrayPrototype.join;
var hasStringJoinBug;
try {
    hasStringJoinBug = Array.prototype.join.call('123', ',') !== '1,2,3';
} catch (e) {
    hasStringJoinBug = true;
}
if (hasStringJoinBug) {
    defineProperties(ArrayPrototype, {
        join: function join(separator) {
            var sep = typeof separator === 'undefined' ? ',' : separator;
            return originalJoin.call(isString(this) ? strSplit(this, '') : this, sep);
        }
    }, hasStringJoinBug);
}

var hasJoinUndefinedBug = [1, 2].join(undefined) !== '1,2';
if (hasJoinUndefinedBug) {
    defineProperties(ArrayPrototype, {
        join: function join(separator) {
            var sep = typeof separator === 'undefined' ? ',' : separator;
            return originalJoin.call(this, sep);
        }
    }, hasJoinUndefinedBug);
}

var pushShim = function push(item) {
    var O = ES.ToObject(this);
    var n = ES.ToUint32(O.length);
    var i = 0;
    while (i < arguments.length) {
        O[n + i] = arguments[i];
        i += 1;
    }
    O.length = n + i;
    return n + i;
};

var pushIsNotGeneric = (function () {
    var obj = {};
    var result = Array.prototype.push.call(obj, undefined);
    return result !== 1 || obj.length !== 1 || typeof obj[0] !== 'undefined' || !owns(obj, 0);
}());
defineProperties(ArrayPrototype, {
    push: function push(item) {
        if (isArray(this)) {
            return array_push.apply(this, arguments);
        }
        return pushShim.apply(this, arguments);
    }
}, pushIsNotGeneric);

// This fixes a very weird bug in Opera 10.6 when pushing `undefined
var pushUndefinedIsWeird = (function () {
    var arr = [];
    var result = arr.push(undefined);
    return result !== 1 || arr.length !== 1 || typeof arr[0] !== 'undefined' || !owns(arr, 0);
}());
defineProperties(ArrayPrototype, { push: pushShim }, pushUndefinedIsWeird);

// ES5 15.2.3.14
// http://es5.github.io/#x15.4.4.10
// Fix boxed string bug
defineProperties(ArrayPrototype, {
    slice: function (start, end) {
        var arr = isString(this) ? strSplit(this, '') : this;
        return arraySliceApply(arr, arguments);
    }
}, splitString);

var sortIgnoresNonFunctions = (function () {
    try {
        [1, 2].sort(null);
        [1, 2].sort({});
        return true;
    } catch (e) { /**/ }
    return false;
}());
var sortThrowsOnRegex = (function () {
    // this is a problem in Firefox 4, in which `typeof /a/ === 'function'`
    try {
        [1, 2].sort(/a/);
        return false;
    } catch (e) { /**/ }
    return true;
}());
var sortIgnoresUndefined = (function () {
    // applies in IE 8, for one.
    try {
        [1, 2].sort(undefined);
        return true;
    } catch (e) { /**/ }
    return false;
}());
defineProperties(ArrayPrototype, {
    sort: function sort(compareFn) {
        if (typeof compareFn === 'undefined') {
            return arraySort(this);
        }
        if (!isCallable(compareFn)) {
            throw new TypeError('Array.prototype.sort callback must be a function');
        }
        return arraySort(this, compareFn);
    }
}, sortIgnoresNonFunctions || !sortIgnoresUndefined || !sortThrowsOnRegex);

//
// Object
// ======
//

// ES5 15.2.3.14
// http://es5.github.com/#x15.2.3.14

// http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
var hasDontEnumBug = !({ 'toString': null }).propertyIsEnumerable('toString');
var hasProtoEnumBug = function () {}.propertyIsEnumerable('prototype');
var hasStringEnumBug = !owns('x', '0');
var equalsConstructorPrototype = function (o) {
    var ctor = o.constructor;
    return ctor && ctor.prototype === o;
};
var blacklistedKeys = {
    $window: true,
    $console: true,
    $parent: true,
    $self: true,
    $frame: true,
    $frames: true,
    $frameElement: true,
    $webkitIndexedDB: true,
    $webkitStorageInfo: true,
    $external: true
};
var hasAutomationEqualityBug = (function () {
    /* globals window */
    if (typeof window === 'undefined') { return false; }
    for (var k in window) {
        try {
            if (!blacklistedKeys['$' + k] && owns(window, k) && window[k] !== null && typeof window[k] === 'object') {
                equalsConstructorPrototype(window[k]);
            }
        } catch (e) {
            return true;
        }
    }
    return false;
}());
var equalsConstructorPrototypeIfNotBuggy = function (object) {
    if (typeof window === 'undefined' || !hasAutomationEqualityBug) { return equalsConstructorPrototype(object); }
    try {
        return equalsConstructorPrototype(object);
    } catch (e) {
        return false;
    }
};
var dontEnums = [
    'toString',
    'toLocaleString',
    'valueOf',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'constructor'
];
var dontEnumsLength = dontEnums.length;

// taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
// can be replaced with require('is-arguments') if we ever use a build process instead
var isStandardArguments = function isArguments(value) {
    return toStr(value) === '[object Arguments]';
};
var isLegacyArguments = function isArguments(value) {
    return value !== null &&
        typeof value === 'object' &&
        typeof value.length === 'number' &&
        value.length >= 0 &&
        !isArray(value) &&
        isCallable(value.callee);
};
var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;

defineProperties($Object, {
    keys: function keys(object) {
        var isFn = isCallable(object);
        var isArgs = isArguments(object);
        var isObject = object !== null && typeof object === 'object';
        var isStr = isObject && isString(object);

        if (!isObject && !isFn && !isArgs) {
            throw new TypeError('Object.keys called on a non-object');
        }

        var theKeys = [];
        var skipProto = hasProtoEnumBug && isFn;
        if ((isStr && hasStringEnumBug) || isArgs) {
            for (var i = 0; i < object.length; ++i) {
                push(theKeys, $String(i));
            }
        }

        if (!isArgs) {
            for (var name in object) {
                if (!(skipProto && name === 'prototype') && owns(object, name)) {
                    push(theKeys, $String(name));
                }
            }
        }

        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for (var j = 0; j < dontEnumsLength; j++) {
                var dontEnum = dontEnums[j];
                if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
                    push(theKeys, dontEnum);
                }
            }
        }
        return theKeys;
    }
});

var keysWorksWithArguments = $Object.keys && (function () {
    // Safari 5.0 bug
    return $Object.keys(arguments).length === 2;
}(1, 2));
var keysHasArgumentsLengthBug = $Object.keys && (function () {
    var argKeys = $Object.keys(arguments);
    return arguments.length !== 1 || argKeys.length !== 1 || argKeys[0] !== 1;
}(1));
var originalKeys = $Object.keys;
defineProperties($Object, {
    keys: function keys(object) {
        if (isArguments(object)) {
            return originalKeys(arraySlice(object));
        } else {
            return originalKeys(object);
        }
    }
}, !keysWorksWithArguments || keysHasArgumentsLengthBug);

//
// Date
// ====
//

// ES5 15.9.5.43
// http://es5.github.com/#x15.9.5.43
// This function returns a String value represent the instance in time
// represented by this Date object. The format of the String is the Date Time
// string format defined in 15.9.1.15. All fields are present in the String.
// The time zone is always UTC, denoted by the suffix Z. If the time value of
// this object is not a finite Number a RangeError exception is thrown.
var negativeDate = -62198755200000;
var negativeYearString = '-000001';
var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1;
var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';

defineProperties(Date.prototype, {
    toISOString: function toISOString() {
        var result, length, value, year, month;
        if (!isFinite(this)) {
            throw new RangeError('Date.prototype.toISOString called on non-finite value.');
        }

        year = this.getUTCFullYear();

        month = this.getUTCMonth();
        // see https://github.com/es-shims/es5-shim/issues/111
        year += Math.floor(month / 12);
        month = (month % 12 + 12) % 12;

        // the date time string format is specified in 15.9.1.15.
        result = [month + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()];
        year = (
            (year < 0 ? '-' : (year > 9999 ? '+' : '')) +
            strSlice('00000' + Math.abs(year), (0 <= year && year <= 9999) ? -4 : -6)
        );

        length = result.length;
        while (length--) {
            value = result[length];
            // pad months, days, hours, minutes, and seconds to have two
            // digits.
            if (value < 10) {
                result[length] = '0' + value;
            }
        }
        // pad milliseconds to have three digits.
        return (
            year + '-' + arraySlice(result, 0, 2).join('-') +
            'T' + arraySlice(result, 2).join(':') + '.' +
            strSlice('000' + this.getUTCMilliseconds(), -3) + 'Z'
        );
    }
}, hasNegativeDateBug || hasSafari51DateBug);

// ES5 15.9.5.44
// http://es5.github.com/#x15.9.5.44
// This function provides a String representation of a Date object for use by
// JSON.stringify (15.12.3).
var dateToJSONIsSupported = (function () {
    try {
        return Date.prototype.toJSON &&
            new Date(NaN).toJSON() === null &&
            new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
            Date.prototype.toJSON.call({ // generic
                toISOString: function () { return true; }
            });
    } catch (e) {
        return false;
    }
}());
if (!dateToJSONIsSupported) {
    Date.prototype.toJSON = function toJSON(key) {
        // When the toJSON method is called with argument key, the following
        // steps are taken:

        // 1.  Let O be the result of calling ToObject, giving it the this
        // value as its argument.
        // 2. Let tv be ES.ToPrimitive(O, hint Number).
        var O = $Object(this);
        var tv = ES.ToPrimitive(O);
        // 3. If tv is a Number and is not finite, return null.
        if (typeof tv === 'number' && !isFinite(tv)) {
            return null;
        }
        // 4. Let toISO be the result of calling the [[Get]] internal method of
        // O with argument "toISOString".
        var toISO = O.toISOString;
        // 5. If IsCallable(toISO) is false, throw a TypeError exception.
        if (!isCallable(toISO)) {
            throw new TypeError('toISOString property is not callable');
        }
        // 6. Return the result of calling the [[Call]] internal method of
        //  toISO with O as the this value and an empty argument list.
        return toISO.call(O);

        // NOTE 1 The argument is ignored.

        // NOTE 2 The toJSON function is intentionally generic; it does not
        // require that its this value be a Date object. Therefore, it can be
        // transferred to other kinds of objects for use as a method. However,
        // it does require that any such object have a toISOString method. An
        // object is free to use the argument key to filter its
        // stringification.
    };
}

// ES5 15.9.4.2
// http://es5.github.com/#x15.9.4.2
// based on work shared by Daniel Friesen (dantman)
// http://gist.github.com/303249
var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
if (doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
    // XXX global assignment won't work in embeddings that use
    // an alternate object for the context.
    /* global Date: true */
    /* eslint-disable no-undef */
    var maxSafeUnsigned32Bit = Math.pow(2, 31) - 1;
    var hasSafariSignedIntBug = isActualNaN(new Date(1970, 0, 1, 0, 0, 0, maxSafeUnsigned32Bit + 1).getTime());
    Date = (function (NativeDate) {
    /* eslint-enable no-undef */
        // Date.length === 7
        var DateShim = function Date(Y, M, D, h, m, s, ms) {
            var length = arguments.length;
            var date;
            if (this instanceof NativeDate) {
                var seconds = s;
                var millis = ms;
                if (hasSafariSignedIntBug && length >= 7 && ms > maxSafeUnsigned32Bit) {
                    // work around a Safari 8/9 bug where it treats the seconds as signed
                    var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
                    var sToShift = Math.floor(msToShift / 1e3);
                    seconds += sToShift;
                    millis -= sToShift * 1e3;
                }
                date = length === 1 && $String(Y) === Y ? // isString(Y)
                    // We explicitly pass it through parse:
                    new NativeDate(DateShim.parse(Y)) :
                    // We have to manually make calls depending on argument
                    // length here
                    length >= 7 ? new NativeDate(Y, M, D, h, m, seconds, millis) :
                    length >= 6 ? new NativeDate(Y, M, D, h, m, seconds) :
                    length >= 5 ? new NativeDate(Y, M, D, h, m) :
                    length >= 4 ? new NativeDate(Y, M, D, h) :
                    length >= 3 ? new NativeDate(Y, M, D) :
                    length >= 2 ? new NativeDate(Y, M) :
                    length >= 1 ? new NativeDate(Y) :
                                  new NativeDate();
            } else {
                date = NativeDate.apply(this, arguments);
            }
            if (!isPrimitive(date)) {
              // Prevent mixups with unfixed Date object
              defineProperties(date, { constructor: DateShim }, true);
            }
            return date;
        };

        // 15.9.1.15 Date Time String Format.
        var isoDateExpression = new RegExp('^' +
            '(\\d{4}|[+-]\\d{6})' + // four-digit year capture or sign +
                                      // 6-digit extended year
            '(?:-(\\d{2})' + // optional month capture
            '(?:-(\\d{2})' + // optional day capture
            '(?:' + // capture hours:minutes:seconds.milliseconds
                'T(\\d{2})' + // hours capture
                ':(\\d{2})' + // minutes capture
                '(?:' + // optional :seconds.milliseconds
                    ':(\\d{2})' + // seconds capture
                    '(?:(\\.\\d{1,}))?' + // milliseconds capture
                ')?' +
            '(' + // capture UTC offset component
                'Z|' + // UTC capture
                '(?:' + // offset specifier +/-hours:minutes
                    '([-+])' + // sign capture
                    '(\\d{2})' + // hours offset capture
                    ':(\\d{2})' + // minutes offset capture
                ')' +
            ')?)?)?)?' +
        '$');

        var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

        var dayFromMonth = function dayFromMonth(year, month) {
            var t = month > 1 ? 1 : 0;
            return (
                months[month] +
                Math.floor((year - 1969 + t) / 4) -
                Math.floor((year - 1901 + t) / 100) +
                Math.floor((year - 1601 + t) / 400) +
                365 * (year - 1970)
            );
        };

        var toUTC = function toUTC(t) {
            var s = 0;
            var ms = t;
            if (hasSafariSignedIntBug && ms > maxSafeUnsigned32Bit) {
                // work around a Safari 8/9 bug where it treats the seconds as signed
                var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
                var sToShift = Math.floor(msToShift / 1e3);
                s += sToShift;
                ms -= sToShift * 1e3;
            }
            return $Number(new NativeDate(1970, 0, 1, 0, 0, s, ms));
        };

        // Copy any custom methods a 3rd party library may have added
        for (var key in NativeDate) {
            if (owns(NativeDate, key)) {
                DateShim[key] = NativeDate[key];
            }
        }

        // Copy "native" methods explicitly; they may be non-enumerable
        defineProperties(DateShim, {
            now: NativeDate.now,
            UTC: NativeDate.UTC
        }, true);
        DateShim.prototype = NativeDate.prototype;
        defineProperties(DateShim.prototype, {
            constructor: DateShim
        }, true);

        // Upgrade Date.parse to handle simplified ISO 8601 strings
        var parseShim = function parse(string) {
            var match = isoDateExpression.exec(string);
            if (match) {
                // parse months, days, hours, minutes, seconds, and milliseconds
                // provide default values if necessary
                // parse the UTC offset component
                var year = $Number(match[1]),
                    month = $Number(match[2] || 1) - 1,
                    day = $Number(match[3] || 1) - 1,
                    hour = $Number(match[4] || 0),
                    minute = $Number(match[5] || 0),
                    second = $Number(match[6] || 0),
                    millisecond = Math.floor($Number(match[7] || 0) * 1000),
                    // When time zone is missed, local offset should be used
                    // (ES 5.1 bug)
                    // see https://bugs.ecmascript.org/show_bug.cgi?id=112
                    isLocalTime = Boolean(match[4] && !match[8]),
                    signOffset = match[9] === '-' ? 1 : -1,
                    hourOffset = $Number(match[10] || 0),
                    minuteOffset = $Number(match[11] || 0),
                    result;
                var hasMinutesOrSecondsOrMilliseconds = minute > 0 || second > 0 || millisecond > 0;
                if (
                    hour < (hasMinutesOrSecondsOrMilliseconds ? 24 : 25) &&
                    minute < 60 && second < 60 && millisecond < 1000 &&
                    month > -1 && month < 12 && hourOffset < 24 &&
                    minuteOffset < 60 && // detect invalid offsets
                    day > -1 &&
                    day < (dayFromMonth(year, month + 1) - dayFromMonth(year, month))
                ) {
                    result = (
                        (dayFromMonth(year, month) + day) * 24 +
                        hour +
                        hourOffset * signOffset
                    ) * 60;
                    result = (
                        (result + minute + minuteOffset * signOffset) * 60 +
                        second
                    ) * 1000 + millisecond;
                    if (isLocalTime) {
                        result = toUTC(result);
                    }
                    if (-8.64e15 <= result && result <= 8.64e15) {
                        return result;
                    }
                }
                return NaN;
            }
            return NativeDate.parse.apply(this, arguments);
        };
        defineProperties(DateShim, { parse: parseShim });

        return DateShim;
    }(Date));
    /* global Date: false */
}

// ES5 15.9.4.4
// http://es5.github.com/#x15.9.4.4
if (!Date.now) {
    Date.now = function now() {
        return new Date().getTime();
    };
}

//
// Number
// ======
//

// ES5.1 15.7.4.5
// http://es5.github.com/#x15.7.4.5
var hasToFixedBugs = NumberPrototype.toFixed && (
  (0.00008).toFixed(3) !== '0.000' ||
  (0.9).toFixed(0) !== '1' ||
  (1.255).toFixed(2) !== '1.25' ||
  (1000000000000000128).toFixed(0) !== '1000000000000000128'
);

var toFixedHelpers = {
  base: 1e7,
  size: 6,
  data: [0, 0, 0, 0, 0, 0],
  multiply: function multiply(n, c) {
      var i = -1;
      var c2 = c;
      while (++i < toFixedHelpers.size) {
          c2 += n * toFixedHelpers.data[i];
          toFixedHelpers.data[i] = c2 % toFixedHelpers.base;
          c2 = Math.floor(c2 / toFixedHelpers.base);
      }
  },
  divide: function divide(n) {
      var i = toFixedHelpers.size, c = 0;
      while (--i >= 0) {
          c += toFixedHelpers.data[i];
          toFixedHelpers.data[i] = Math.floor(c / n);
          c = (c % n) * toFixedHelpers.base;
      }
  },
  numToString: function numToString() {
      var i = toFixedHelpers.size;
      var s = '';
      while (--i >= 0) {
          if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
              var t = $String(toFixedHelpers.data[i]);
              if (s === '') {
                  s = t;
              } else {
                  s += strSlice('0000000', 0, 7 - t.length) + t;
              }
          }
      }
      return s;
  },
  pow: function pow(x, n, acc) {
      return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
  },
  log: function log(x) {
      var n = 0;
      var x2 = x;
      while (x2 >= 4096) {
          n += 12;
          x2 /= 4096;
      }
      while (x2 >= 2) {
          n += 1;
          x2 /= 2;
      }
      return n;
  }
};

var toFixedShim = function toFixed(fractionDigits) {
    var f, x, s, m, e, z, j, k;

    // Test for NaN and round fractionDigits down
    f = $Number(fractionDigits);
    f = isActualNaN(f) ? 0 : Math.floor(f);

    if (f < 0 || f > 20) {
        throw new RangeError('Number.toFixed called with invalid number of decimals');
    }

    x = $Number(this);

    if (isActualNaN(x)) {
        return 'NaN';
    }

    // If it is too big or small, return the string value of the number
    if (x <= -1e21 || x >= 1e21) {
        return $String(x);
    }

    s = '';

    if (x < 0) {
        s = '-';
        x = -x;
    }

    m = '0';

    if (x > 1e-21) {
        // 1e-21 < x < 1e21
        // -70 < log2(x) < 70
        e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
        z = (e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1));
        z *= 0x10000000000000; // Math.pow(2, 52);
        e = 52 - e;

        // -18 < e < 122
        // x = z / 2 ^ e
        if (e > 0) {
            toFixedHelpers.multiply(0, z);
            j = f;

            while (j >= 7) {
                toFixedHelpers.multiply(1e7, 0);
                j -= 7;
            }

            toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
            j = e - 1;

            while (j >= 23) {
                toFixedHelpers.divide(1 << 23);
                j -= 23;
            }

            toFixedHelpers.divide(1 << j);
            toFixedHelpers.multiply(1, 1);
            toFixedHelpers.divide(2);
            m = toFixedHelpers.numToString();
        } else {
            toFixedHelpers.multiply(0, z);
            toFixedHelpers.multiply(1 << (-e), 0);
            m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
        }
    }

    if (f > 0) {
        k = m.length;

        if (k <= f) {
            m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
        } else {
            m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
        }
    } else {
        m = s + m;
    }

    return m;
};
defineProperties(NumberPrototype, { toFixed: toFixedShim }, hasToFixedBugs);

var hasToPrecisionUndefinedBug = (function () {
    try {
        return 1.0.toPrecision(undefined) === '1';
    } catch (e) {
        return true;
    }
}());
var originalToPrecision = NumberPrototype.toPrecision;
defineProperties(NumberPrototype, {
    toPrecision: function toPrecision(precision) {
        return typeof precision === 'undefined' ? originalToPrecision.call(this) : originalToPrecision.call(this, precision);
    }
}, hasToPrecisionUndefinedBug);

//
// String
// ======
//

// ES5 15.5.4.14
// http://es5.github.com/#x15.5.4.14

// [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
// Many browsers do not split properly with regular expressions or they
// do not perform the split correctly under obscure conditions.
// See http://blog.stevenlevithan.com/archives/cross-browser-split
// I've tested in many browsers and this seems to cover the deviant ones:
//    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
//    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
//    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
//       [undefined, "t", undefined, "e", ...]
//    ''.split(/.?/) should be [], not [""]
//    '.'.split(/()()/) should be ["."], not ["", "", "."]

if (
    'ab'.split(/(?:ab)*/).length !== 2 ||
    '.'.split(/(.?)(.?)/).length !== 4 ||
    'tesst'.split(/(s)*/)[1] === 't' ||
    'test'.split(/(?:)/, -1).length !== 4 ||
    ''.split(/.?/).length ||
    '.'.split(/()()/).length > 1
) {
    (function () {
        var compliantExecNpcg = typeof (/()??/).exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group
        var maxSafe32BitInt = Math.pow(2, 32) - 1;

        StringPrototype.split = function (separator, limit) {
            var string = String(this);
            if (typeof separator === 'undefined' && limit === 0) {
                return [];
            }

            // If `separator` is not a regex, use native split
            if (!isRegex(separator)) {
                return strSplit(this, separator, limit);
            }

            var output = [];
            var flags = (separator.ignoreCase ? 'i' : '') +
                        (separator.multiline ? 'm' : '') +
                        (separator.unicode ? 'u' : '') + // in ES6
                        (separator.sticky ? 'y' : ''), // Firefox 3+ and ES6
                lastLastIndex = 0,
                // Make `global` and avoid `lastIndex` issues by working with a copy
                separator2, match, lastIndex, lastLength;
            var separatorCopy = new RegExp(separator.source, flags + 'g');
            if (!compliantExecNpcg) {
                // Doesn't need flags gy, but they don't hurt
                separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
            }
            /* Values for `limit`, per the spec:
             * If undefined: 4294967295 // maxSafe32BitInt
             * If 0, Infinity, or NaN: 0
             * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
             * If negative number: 4294967296 - Math.floor(Math.abs(limit))
             * If other: Type-convert, then use the above rules
             */
            var splitLimit = typeof limit === 'undefined' ? maxSafe32BitInt : ES.ToUint32(limit);
            match = separatorCopy.exec(string);
            while (match) {
                // `separatorCopy.lastIndex` is not reliable cross-browser
                lastIndex = match.index + match[0].length;
                if (lastIndex > lastLastIndex) {
                    push(output, strSlice(string, lastLastIndex, match.index));
                    // Fix browsers whose `exec` methods don't consistently return `undefined` for
                    // nonparticipating capturing groups
                    if (!compliantExecNpcg && match.length > 1) {
                        /* eslint-disable no-loop-func */
                        match[0].replace(separator2, function () {
                            for (var i = 1; i < arguments.length - 2; i++) {
                                if (typeof arguments[i] === 'undefined') {
                                    match[i] = void 0;
                                }
                            }
                        });
                        /* eslint-enable no-loop-func */
                    }
                    if (match.length > 1 && match.index < string.length) {
                        array_push.apply(output, arraySlice(match, 1));
                    }
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= splitLimit) {
                        break;
                    }
                }
                if (separatorCopy.lastIndex === match.index) {
                    separatorCopy.lastIndex++; // Avoid an infinite loop
                }
                match = separatorCopy.exec(string);
            }
            if (lastLastIndex === string.length) {
                if (lastLength || !separatorCopy.test('')) {
                    push(output, '');
                }
            } else {
                push(output, strSlice(string, lastLastIndex));
            }
            return output.length > splitLimit ? strSlice(output, 0, splitLimit) : output;
        };
    }());

// [bugfix, chrome]
// If separator is undefined, then the result array contains just one String,
// which is the this value (converted to a String). If limit is not undefined,
// then the output array is truncated so that it contains no more than limit
// elements.
// "0".split(undefined, 0) -> []
} else if ('0'.split(void 0, 0).length) {
    StringPrototype.split = function split(separator, limit) {
        if (typeof separator === 'undefined' && limit === 0) { return []; }
        return strSplit(this, separator, limit);
    };
}

var str_replace = StringPrototype.replace;
var replaceReportsGroupsCorrectly = (function () {
    var groups = [];
    'x'.replace(/x(.)?/g, function (match, group) {
        push(groups, group);
    });
    return groups.length === 1 && typeof groups[0] === 'undefined';
}());

if (!replaceReportsGroupsCorrectly) {
    StringPrototype.replace = function replace(searchValue, replaceValue) {
        var isFn = isCallable(replaceValue);
        var hasCapturingGroups = isRegex(searchValue) && (/\)[*?]/).test(searchValue.source);
        if (!isFn || !hasCapturingGroups) {
            return str_replace.call(this, searchValue, replaceValue);
        } else {
            var wrappedReplaceValue = function (match) {
                var length = arguments.length;
                var originalLastIndex = searchValue.lastIndex;
                searchValue.lastIndex = 0;
                var args = searchValue.exec(match) || [];
                searchValue.lastIndex = originalLastIndex;
                push(args, arguments[length - 2], arguments[length - 1]);
                return replaceValue.apply(this, args);
            };
            return str_replace.call(this, searchValue, wrappedReplaceValue);
        }
    };
}

// ECMA-262, 3rd B.2.3
// Not an ECMAScript standard, although ECMAScript 3rd Edition has a
// non-normative section suggesting uniform semantics and it should be
// normalized across all browsers
// [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
var string_substr = StringPrototype.substr;
var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
defineProperties(StringPrototype, {
    substr: function substr(start, length) {
        var normalizedStart = start;
        if (start < 0) {
            normalizedStart = max(this.length + start, 0);
        }
        return string_substr.call(this, normalizedStart, length);
    }
}, hasNegativeSubstrBug);

// ES5 15.5.4.20
// whitespace from: http://es5.github.io/#x15.5.4.20
var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
    '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
    '\u2029\uFEFF';
var zeroWidth = '\u200b';
var wsRegexChars = '[' + ws + ']';
var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
defineProperties(StringPrototype, {
    // http://blog.stevenlevithan.com/archives/faster-trim-javascript
    // http://perfectionkills.com/whitespace-deviations/
    trim: function trim() {
        if (typeof this === 'undefined' || this === null) {
            throw new TypeError("can't convert " + this + ' to object');
        }
        return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
    }
}, hasTrimWhitespaceBug);

var hasLastIndexBug = StringPrototype.lastIndexOf && 'abcã‚ã„'.lastIndexOf('ã‚ã„', 2) !== -1;
defineProperties(StringPrototype, {
    lastIndexOf: function lastIndexOf(searchString) {
        if (typeof this === 'undefined' || this === null) {
            throw new TypeError("can't convert " + this + ' to object');
        }
        var S = $String(this);
        var searchStr = $String(searchString);
        var numPos = arguments.length > 1 ? $Number(arguments[1]) : NaN;
        var pos = isActualNaN(numPos) ? Infinity : ES.ToInteger(numPos);
        var start = min(max(pos, 0), S.length);
        var searchLen = searchStr.length;
        var k = start + searchLen;
        while (k > 0) {
            k = max(0, k - searchLen);
            var index = strIndexOf(strSlice(S, k, start + searchLen), searchStr);
            if (index !== -1) {
                return k + index;
            }
        }
        return -1;
    }
}, hasLastIndexBug);

var originalLastIndexOf = StringPrototype.lastIndexOf;
defineProperties(StringPrototype, {
    lastIndexOf: function lastIndexOf(searchString) {
        return originalLastIndexOf.apply(this, arguments);
    }
}, StringPrototype.lastIndexOf.length !== 1);

// ES-5 15.1.2.2
/* eslint-disable radix */
if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
/* eslint-enable radix */
    /* global parseInt: true */
    parseInt = (function (origParseInt) {
        var hexRegex = /^[\-+]?0[xX]/;
        return function parseInt(str, radix) {
            var string = $String(str).trim();
            var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
            return origParseInt(string, defaultedRadix);
        };
    }(parseInt));
}

if (String(new RangeError('test')) !== 'RangeError: test') {
    var errorToStringShim = function toString() {
        if (typeof this === 'undefined' || this === null) {
            throw new TypeError("can't convert " + this + ' to object');
        }
        var name = this.name;
        if (typeof name === 'undefined') {
            name = 'Error';
        } else if (typeof name !== 'string') {
            name = $String(name);
        }
        var msg = this.message;
        if (typeof msg === 'undefined') {
            msg = '';
        } else if (typeof msg !== 'string') {
            msg = $String(msg);
        }
        if (!name) {
            return msg;
        }
        if (!msg) {
            return name;
        }
        return name + ': ' + msg;
    };
    // can't use defineProperties here because of toString enumeration issue in IE <= 8
    Error.prototype.toString = errorToStringShim;
}

if (supportsDescriptors) {
    var ensureNonEnumerable = function (obj, prop) {
        if (isEnum(obj, prop)) {
            var desc = Object.getOwnPropertyDescriptor(obj, prop);
            desc.enumerable = false;
            Object.defineProperty(obj, prop, desc);
        }
    };
    ensureNonEnumerable(Error.prototype, 'message');
    if (Error.prototype.message !== '') {
      Error.prototype.message = '';
    }
    ensureNonEnumerable(Error.prototype, 'name');
}

if (String(/a/mig) !== '/a/gim') {
    var regexToString = function toString() {
        var str = '/' + this.source + '/';
        if (this.global) {
            str += 'g';
        }
        if (this.ignoreCase) {
            str += 'i';
        }
        if (this.multiline) {
            str += 'm';
        }
        return str;
    };
    // can't use defineProperties here because of toString enumeration issue in IE <= 8
    RegExp.prototype.toString = regexToString;
}

}));

},{}],26:[function(_dereq_,module,exports){
var arr = [];
var each = arr.forEach;
var slice = arr.slice;


module.exports = function(obj) {
    each.call(slice.call(arguments, 1), function(source) {
        if (source) {
            for (var prop in source) {
                obj[prop] = source[prop];
            }
        }
    });
    return obj;
};

},{}],27:[function(_dereq_,module,exports){
module.exports = isFunction

var toString = Object.prototype.toString

function isFunction (fn) {
  var string = toString.call(fn)
  return string === '[object Function]' ||
    (typeof fn === 'function' && string !== '[object RegExp]') ||
    (typeof window !== 'undefined' &&
     // IE8 and below
     (fn === window.setTimeout ||
      fn === window.alert ||
      fn === window.confirm ||
      fn === window.prompt))
};

},{}],28:[function(_dereq_,module,exports){
"use strict";

module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};

},{}],29:[function(_dereq_,module,exports){
/*!
  * $script.js JS loader & dependency manager
  * https://github.com/ded/script.js
  * (c) Dustin Diaz 2014 | License MIT
  */

(function (name, definition) {
  if (typeof module != 'undefined' && module.exports) module.exports = definition()
  else if (typeof define == 'function' && define.amd) define(definition)
  else this[name] = definition()
})('$script', function () {
  var doc = document
    , head = doc.getElementsByTagName('head')[0]
    , s = 'string'
    , f = false
    , push = 'push'
    , readyState = 'readyState'
    , onreadystatechange = 'onreadystatechange'
    , list = {}
    , ids = {}
    , delay = {}
    , scripts = {}
    , scriptpath
    , urlArgs

  function every(ar, fn) {
    for (var i = 0, j = ar.length; i < j; ++i) if (!fn(ar[i])) return f
    return 1
  }
  function each(ar, fn) {
    every(ar, function (el) {
      return !fn(el)
    })
  }

  function $script(paths, idOrDone, optDone) {
    paths = paths[push] ? paths : [paths]
    var idOrDoneIsDone = idOrDone && idOrDone.call
      , done = idOrDoneIsDone ? idOrDone : optDone
      , id = idOrDoneIsDone ? paths.join('') : idOrDone
      , queue = paths.length
    function loopFn(item) {
      return item.call ? item() : list[item]
    }
    function callback() {
      if (!--queue) {
        list[id] = 1
        done && done()
        for (var dset in delay) {
          every(dset.split('|'), loopFn) && !each(delay[dset], loopFn) && (delay[dset] = [])
        }
      }
    }
    setTimeout(function () {
      each(paths, function loading(path, force) {
        if (path === null) return callback()

        if (!force && !/^https?:\/\//.test(path) && scriptpath) {
          path = (path.indexOf('.js') === -1) ? scriptpath + path + '.js' : scriptpath + path;
        }

        if (scripts[path]) {
          if (id) ids[id] = 1
          return (scripts[path] == 2) ? callback() : setTimeout(function () { loading(path, true) }, 0)
        }

        scripts[path] = 1
        if (id) ids[id] = 1
        create(path, callback)
      })
    }, 0)
    return $script
  }

  function create(path, fn) {
    var el = doc.createElement('script'), loaded
    el.onload = el.onerror = el[onreadystatechange] = function () {
      if ((el[readyState] && !(/^c|loade/.test(el[readyState]))) || loaded) return;
      el.onload = el[onreadystatechange] = null
      loaded = 1
      scripts[path] = 2
      fn()
    }
    el.async = 1
    el.src = urlArgs ? path + (path.indexOf('?') === -1 ? '?' : '&') + urlArgs : path;
    head.insertBefore(el, head.lastChild)
  }

  $script.get = create

  $script.order = function (scripts, id, done) {
    (function callback(s) {
      s = scripts.shift()
      !scripts.length ? $script(s, id, done) : $script(s, callback)
    }())
  }

  $script.path = function (p) {
    scriptpath = p
  }
  $script.urlArgs = function (str) {
    urlArgs = str;
  }
  $script.ready = function (deps, ready, req) {
    deps = deps[push] ? deps : [deps]
    var missing = [];
    !each(deps, function (dep) {
      list[dep] || missing[push](dep);
    }) && every(deps, function (dep) {return list[dep]}) ?
      ready() : !function (key) {
      delay[key] = delay[key] || []
      delay[key][push](ready)
      req && req(missing)
    }(deps.join('|'))
    return $script
  }

  $script.done = function (idOrDone) {
    $script([null], idOrDone)
  }

  return $script
});

},{}]},{},[19])(19)
});


/*!

   hlsjs engine plugin for Flowplayer HTML5

   Copyright (c) 2015-2017, Flowplayer Drive Oy

   Released under the MIT License:
   http://www.opensource.org/licenses/mit-license.php

   Includes hls.js
   Copyright (c) 2017 Dailymotion (http://www.dailymotion.com)
   https://github.com/video-dev/hls.js/blob/master/LICENSE

   Requires Flowplayer HTML5 version 6 or greater
   v1.1.1-42-g4295710

*/
/*@cc_on @*/
/*@
  @if (@_jscript_version > 9)
  @*/
!function(t){function e(i){if(r[i])return r[i].exports;var a=r[i]={exports:{},id:i,loaded:!1};return t[i].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){t.exports=r(5)},function(t,e,r){!function(){"use strict";var e=function(t,e){var i,a="hlsjs",n=e.common,o=e.extend,s=e.support,l=s.browser,u=e.version,d=0===u.indexOf("6."),c=window,f=c.MediaSource||c.WebKitMediaSource,h=c.performance,p=function(t){return t.toLowerCase().indexOf("mpegurl")>-1},g=function(t){var e=t.clip&&t.clip.hlsQualities||t.hlsQualities;return s.inlineVideo&&(e===!0||e&&e.length)},v=function(t){var e=n.findDirect("video",t)[0]||n.find(".fp-player>video",t)[0];e&&(n.find("source",e).forEach(function(t){t.removeAttribute("src")}),e.removeAttribute("src"),e.load(),n.removeNode(e))},m=r(3),y=new m.TextDecoder("utf-8"),b=function(t){var e="";try{e=y.decode(t)}catch(r){try{y=new m.TextDecoder("utf-16be"),e=y.decode(t)}catch(r){try{y=new m.TextDecoder("utf-16le"),e=y.decode(t)}catch(t){}}}return e},E=function(t,e,r){e.title=e.title||r+"";var i={time:e.startTime,subtitle:e,visible:!1};t.subtitles.push(e),t.addCuepoint(i),t.addCuepoint({time:e.endTime,subtitleEnd:e.title,visible:!1}),0!==e.startTime||t.video.time||t.splash||t.trigger("cuepoint",[t,i]),t.splash&&t.one("ready."+a,function(){t.trigger("cuepoint",[t,i])})},T=function(r,l){var c,m,y,T,R,S,A,w,_,L,k,D=e.bean,I="is-seeking",O="is-poster",C=function(t,e,i){if(t.debug&&console.log("recovery."+a,"<-",e),n.removeClass(l,"is-paused"),n.addClass(l,I),i)m.startLoad();else{var o=h.now();!T||o-T>3e3?(T=h.now(),m.recoverMediaError()):(!R||o-R>3e3)&&(R=h.now(),m.swapAudioCodec(),m.recoverMediaError())}y>0&&(y-=1),D.one(c,"seeked."+a,function(){c.paused&&(n.removeClass(l,O),r.poster=!1,c.play()),n.removeClass(l,I)})},x=function(t,e,i){var a={code:t};return t>2&&(a.video=o(r.video,{src:e,url:i||e})),a},P=function(){D.one(c,"timeupdate."+a,function(){n.addClass(l,O),r.poster=!0})},F=function(){d&&r.poster&&D.one(c,"timeupdate."+a,function(){n.removeClass(l,O),r.poster=!1})},N=0,M=function(t){if(w&&w.length>1){var e=m.audioTracks,r=e.filter(function(r){var i=m.levels[t].attrs;return r.autoselect&&i&&r.groupId===i.AUDIO&&r.name===e[m.audioTrack].name}),i=r.length&&r[0].id;void 0!==i&&i!==m.audioTrack&&(m.audioTrack=i)}},U=function(t){n.find(".fp-audio",l)[0].innerHTML=t.lang||t.name,n.find(".fp-audio-menu a",l).forEach(function(e){var r=e.getAttribute("data-audio"),i=r===t.name;n.toggleClass(e,"fp-selected",i),n.toggleClass(e,"fp-color",i)})},B=function(){n.find(".fp-audio-menu",l).forEach(n.removeNode),n.find(".fp-audio",l).forEach(n.removeNode)},G=function(t){var e=n.find(".fp-subtitle-menu",l)[0];n.toggleClass(n.find("a.fp-selected",e)[0],"fp-selected"),n.toggleClass(n.find('a[data-subtitle-index="'+t+'"]',e)[0],"fp-selected")},j=function(t,e){var i=b(t.payload),a=t.frag.trackId;i&&(k[a]||(k[a]=[]),i=e.subtitleParser(i),i.forEach(function(t){if(t.text&&(k[a].push(t),r.ready&&(E(r,t,k[a].length),r.live))){var e=r.video.seekOffset;k[a]=k[a].filter(function(t){return t.endTime>=e}),r.subtitles=r.subtitles.filter(function(t){return t.endTime>=e}),r.cuepoints.forEach(function(t){t.subtitle&&t.time<e&&r.removeCuepoint(t)})}}))},K=function(){[].forEach.call(c.textTracks,function(t){"subtitles"===t.kind&&(t.mode="hidden")})},H=function(t,e){var i=t.subtitleTracks;e.subtitles&&i.length&&s.inlineVideo&&!d&&(i=i.filter(function(t){return t.groupId===i[0].groupId}),r.video.subtitles=i.map(function(t){var e={kind:"subtitles",id:t.id,srclang:t.lang,label:t.name,default:t.default};return n.append(c,n.createElement("track",e)),e}),r.on("ready."+a,function(t,e){var r,i=m.subtitleTracks;i&&i.length&&(L?n.addClass(c,"native-subtitles"):K(),i.map(function(t,e){t.default&&(m.subtitleTrack=e)}),r=m.subtitleTrack,r>-1?(!L&&k[r]&&k[r].forEach(function(t,r){E(e,t,r+1)}),G(r)):G(-1))}),D.on(l,"click."+a,".fp-subtitle-menu [data-subtitle-index]",function(t){t.preventDefault();var e=t.target.getAttribute("data-subtitle-index");return r.disableSubtitles(),m.subtitleTrack=e,e<0?void K():(G(e),void(!L&&k[e]&&k[e].forEach(function(t,e){E(r,t,e+1)})))}))},W=function(t){w=[],_=[],t.levels.forEach(function(t){var e=t.attrs&&t.attrs.AUDIO,r=t.audioCodec;e&&w.indexOf(e)<0&&(!r||f.isTypeSupported("audio/mp4;codecs="+r))&&w.push(e)}),w.length&&(_=t.audioTracks.filter(function(t){return t.groupId===w[0]})),!s.inlineVideo||d||_.length<2||(D.on(l,"click."+a,".fp-audio",function(){var t=n.find(".fp-audio-menu",l)[0];n.hasClass(t,"fp-active")?r.hideMenu():r.showMenu(t)}),D.on(l,"click."+a,".fp-audio-menu a",function(t){var e=t.target.getAttribute("data-audio"),r=m.audioTracks,i=r[m.audioTrack].groupId,a=r.filter(function(t){return t.groupId===i&&(t.name===e||t.lang===e)})[0];m.audioTrack=a.id,U(a)}),r.on("ready."+a,function(){if(B(),m&&_&&!(_.length<2)){var t=n.find(".fp-ui",l)[0],e=n.find(".fp-controls",t)[0],r=m.audioTracks[m.audioTrack],i=n.createElement("div",{className:"fp-menu fp-audio-menu",css:{width:"auto"}},"<strong>Audio</strong>");_.forEach(function(t){i.appendChild(n.createElement("a",{"data-audio":t.name},t.name))}),t.appendChild(i),e.appendChild(n.createElement("strong",{className:"fp-audio"},r)),U(r)}}))},V="active",q=function(t){return t?r.qualities.indexOf(t)<0&&(t="abr"):t=r.quality,t.toLowerCase().replace(/\ /g,"")},Y=function(){var t=r.qualities;t&&(n.removeClass(l,"quality-abr"),t.forEach(function(t){n.removeClass(l,"quality-"+q(t))}))},z=function(){d&&(delete r.hlsQualities,Y(),n.find(".fp-quality-selector",l).forEach(n.removeNode))},X=function(){return r.hlsQualities[r.qualities.indexOf(r.quality)+1]},Q=-1,J=function(t,e,i){var o,s,u,h=i.levels,p=function(t){return isNaN(Number(t))?t.level:t};if(z(),t&&!(h.length<2)){if("drive"===t){switch(h.length){case 4:o=[1,2,3];break;case 5:o=[1,2,3,4];break;case 6:o=[1,3,4,5];break;case 7:o=[1,3,5,6];break;case 8:o=[1,3,6,7];break;default:if(h.length<3||h[0].height&&h[2].height&&h[0].height===h[2].height)return;o=[1,2]}o.unshift(-1)}else switch(typeof t){case"object":o=t.map(p);break;case"string":o=t.split(/\s*,\s*/).map(Number);break;default:o=h.map(function(t,e){return e}),o.unshift(-1)}if(d&&o.indexOf(-1)<0&&o.unshift(-1),o=o.filter(function(t){if(t>-1&&t<h.length){var e=h[t];return!e.videoCodec||e.videoCodec&&f.isTypeSupported("video/mp4;codecs="+e.videoCodec)}return t===-1}),s=o.map(function(e,r){var i=h[e],a="object"==typeof t?t.filter(function(t){return p(t)===e})[0]:e,n="Level "+(r+1);return e<0?n=a.label||"Auto":a.label?n=a.label:(i.width&&i.height&&(n=Math.min(i.width,i.height)+"p"),"drive"!==t&&i.bitrate&&(n+=" ("+Math.round(i.bitrate/1e3)+"k)")),d?n:{value:e,label:n}}),!d)return r.video.qualities=s,Q>-1||o.indexOf(-1)<0?(m.loadLevel=o.indexOf(Q)<0?o[0]:Q,m.config.startLevel=m.loadLevel,r.video.quality=m.loadLevel):r.video.quality=-1,void(Q=r.video.quality);r.hlsQualities=o,r.qualities=s.slice(1),u=n.createElement("ul",{class:"fp-quality-selector"}),n.find(".fp-ui",l)[0].appendChild(u),!r.quality||s.indexOf(r.quality)<1?r.quality="abr":(m.loadLevel=X(),m.config.startLevel=m.loadLevel),s.forEach(function(t){u.appendChild(n.createElement("li",{"data-quality":q(t)},t))}),n.addClass(l,"quality-"+q()),D.on(l,"click."+a,".fp-quality-selector li",function(t){var i=t.currentTarget,o=n.find(".fp-quality-selector li",l),s=e.smoothSwitching,u=c.paused;n.hasClass(i,V)||(u||s||D.one(c,"pause."+a,function(){n.removeClass(l,"is-paused")}),o.forEach(function(t,e){var a=t===i;a&&(r.quality=e>0?r.qualities[e-1]:"abr",s&&!r.poster?m.nextLevel=X():m.currentLevel=X(),n.addClass(i,V),u&&c.play()),n.toggleClass(t,V,a)}),Y(),n.addClass(l,"quality-"+q()))})}},$={engineName:a,pick:function(t){var e=t.filter(function(t){return p(t.type)})[0];return"string"==typeof e.src&&(e.src=n.createAbsoluteUrl(e.src)),e},load:function(e){var u=r.conf,f={ended:"finish",loadeddata:"ready",pause:"pause",play:"resume",progress:"buffer",ratechange:"speed",seeked:"seek",timeupdate:"progress",volumechange:"volume",error:"error"},h=t.Events,p=!!e.autoplay||!!u.autoplay||!!u.splash,E=e.hlsQualities||u.hlsQualities,S=o(i,u.hlsjs,e.hlsjs),A=o({},S);if(e.hlsQualities===!1&&(E=!1),L=S.subtitles&&s.subtitles&&u.nativesubtitles,m?(m.destroy(),n.find("track",c).forEach(n.removeNode),n.removeClass(c,"native-subtitles"),(r.video.src&&e.src!==r.video.src||e.index)&&n.attr(c,"autoplay","autoplay")):(v(l),c=n.createElement("video",{class:"fp-engine "+a+"-engine",autoplay:!!p&&"autoplay",volume:r.volumeLevel}),s.mutedAutoplay&&!u.splash&&p&&(c.muted=!0),Object.keys(f).forEach(function(t){var e,i=f[t],s=t+"."+a;D.on(c,s,function(t){u.debug&&i.indexOf("progress")<0&&console.log(s,"->",i,t.originalEvent);var a,f,h,p=c.currentTime,g=c.seekable,v=r.video,y=r.dvr?v.seekOffset:r.live?m.liveSyncPosition:0,b=c.buffered,E=[],T=v.src,R=r.quality;switch(i){case"ready":e=o(v,{duration:c.duration,seekable:g.length&&g.end(null),width:c.videoWidth,height:c.videoHeight,url:T});break;case"resume":F(),S.bufferWhilePaused||m.startLoad(p),p<y&&(c.currentTime=y);break;case"seek":F(),!S.bufferWhilePaused&&c.paused&&m.stopLoad(),e=p;break;case"pause":S.bufferWhilePaused||m.stopLoad();break;case"progress":e=p;break;case"speed":e=c.playbackRate;break;case"volume":e=c.volume;break;case"buffer":for(a=0;a<b.length;a+=1)E.push(b.end(a));e=E.filter(function(t){return t>=p}).sort()[0],v.buffer=e;break;case"finish":S.bufferWhilePaused&&m.autoLevelEnabled&&(v.loop||u.playlist.length<2||u.advance===!1)&&(m.nextLoadLevel=N);break;case"error":if(h=c.error&&c.error.code,S.recoverMediaError&&(3===h||!h)||S.recoverNetworkError&&2===h||S.recover&&(2===h||3===h))return t.preventDefault(),void C(u,i,2===h);e=x(h,T)}r.trigger(i,[r,e]),d&&"ready"===i&&R&&(f="abr"===R?0:r.qualities.indexOf(R)+1,n.addClass(n.find(".fp-quality-selector li",l)[f],V))})}),r.on("error."+a,function(){m&&r.engine.unload()}).on("beforeseek."+a,function(t,e,r){void 0===r?t.preventDefault():!S.bufferWhilePaused&&e.paused&&m.startLoad(r)}),d?u.poster&&(r.on("stop."+a,P),!r.live||p||r.video.autoplay||D.one(c,"seeked."+a,P)):r.on("quality."+a,function(t,e,r){S.smoothSwitching?m.nextLevel=r:m.currentLevel=r,Q=r}),n.prepend(n.find(".fp-player",l)[0],c)),r.video=e,N=0,Object.keys(S).forEach(function(e){t.DefaultConfig.hasOwnProperty(e)||delete A[e];var r=S[e];switch(e){case"adaptOnStartOnly":r&&(A.startLevel=-1);break;case"autoLevelCapping":r===!1&&(r=-1),A[e]=r;break;case"startLevel":switch(r){case"auto":r=-1;break;case"firstLevel":r=void 0}A[e]=r;break;case"recover":S.recoverMediaError=!1,S.recoverNetworkError=!1,y=r;break;case"strict":r&&(S.recoverMediaError=!1,S.recoverNetworkError=!1,y=0)}}),m=new t(A),r.engine[a]=m,T=null,R=null,r.disableSubtitles(),k={},Object.keys(h).forEach(function(e){var i=h[e],s=S.listeners,f=s&&s.indexOf(i)>-1;m.on(i,function(i,s){var h,p={},v=t.ErrorTypes,T=t.ErrorDetails,R=r.video,A=R.src;switch(e){case"MANIFEST_PARSED":!g(u)||!d&&r.pluginQualitySelectorEnabled?d&&delete r.quality:J(E,S,s);break;case"MANIFEST_LOADED":W(s);break;case"SUBTITLE_TRACKS_UPDATED":H(s,S);break;case"MEDIA_ATTACHED":m.loadSource(A);break;case"FRAG_LOADED":"subtitle"===s.frag.type&&S.subtitles&&!L&&j(s,u),S.bufferWhilePaused&&!r.live&&m.autoLevelEnabled&&m.nextLoadLevel>N&&(N=m.nextLoadLevel);break;case"SUBTITLE_TRACK_SWITCH":L&&[].forEach.call(c.textTracks,function(t){t.mode=m.subtitleTracks[s.id].lang===t.language&&"subtitles"===t.kind?"showing":"hidden"});break;case"FRAG_PARSING_METADATA":if(d)return;s.samples.forEach(function(t){var e;e=function(){if(!(c.currentTime<t.dts)){D.off(c,"timeupdate."+a,e);var i=b(t.unit||t.data);r.trigger("metadata",[r,{key:i.substr(10,4),data:i}])}},D.on(c,"timeupdate."+a,e)});break;case"LEVEL_UPDATED":r.live&&(o(R,{seekOffset:s.details.fragments[0].start+m.config.nudgeOffset,duration:m.liveSyncPosition}),r.dvr&&r.playing&&r.trigger("dvrwindow",[r,{start:R.seekOffset,end:m.liveSyncPosition}]));break;case"LEVEL_SWITCHED":S.audioABR&&r.one("buffer."+a,function(t,e,r){r>e.video.time&&M(s.level)});break;case"BUFFER_APPENDED":n.removeClass(l,I);break;case"ERROR":if(s.fatal||S.strict){switch(s.type){case v.NETWORK_ERROR:S.recoverNetworkError||y?C(u,s.type,!0):s.frag&&s.frag.url?(p.url=s.frag.url,h=2):h=4;break;case v.MEDIA_ERROR:S.recoverMediaError||y?C(u,s.type):h=3;break;default:h=5}void 0!==h&&(p=x(h,A,s.url),r.trigger("error",[r,p]))}else s.details!==T.FRAG_LOOP_LOADING_ERROR&&s.details!==T.BUFFER_STALLED_ERROR||n.addClass(l,I)}f&&r.trigger(i,[r,s])})}),S.adaptOnStartOnly&&D.one(c,"timeupdate."+a,function(){m.loadLevel=m.loadLevel}),m.attachMedia(c),p&&c.paused){var w=c.play();void 0!==w&&w.catch(function(){s.mutedAutoplay||(r.unload(),d||r.message("Please click the play button",3e3))})}},resume:function(){c.play()},pause:function(){c.pause()},seek:function(t){c&&(c.currentTime=t)},volume:function(t){c&&(c.volume=t)},speed:function(t){c.playbackRate=t,r.trigger("speed",[r,t])},unload:function(){if(m){var t="."+a;r.disableSubtitles(),m.destroy(),m=0,z(),B(),r.off(t),D.off(l,t),D.off(c,t),n.removeNode(c),c=0}}};return!/^6\.0\.[0-3]$/.test(u)||r.conf.splash||r.conf.poster||r.conf.autoplay||(S=n.css(l,"backgroundColor"),A="none"!==n.css(l,"backgroundImage")||S&&"rgba(0, 0, 0, 0)"!==S&&"transparent"!==S,A&&(r.conf.poster=!0)),$};t.isSupported()&&0!==u.indexOf("5.")&&(T.engineName=a,T[a+"ClientVersion"]=t.version,T.canPlay=function(t,e){return e[a]!==!1&&e.clip[a]!==!1&&(i=o({bufferWhilePaused:!0,smoothSwitching:!0,recoverMediaError:!0},e[a],e.clip[a]),p(t)&&(!(l.safari&&s.dataload)||i.safari))},e(function(t,e){var r=t.conf;d?t.pluginQualitySelectorEnabled=g(r)&&T.canPlay("application/x-mpegurl",r):!s.mutedAutoplay||r.splash||r.autoplay||"7.1.0"!==u&&"7.0.0"!==u||(t.splash=!0,r.splash="string"!=typeof r.poster||r.poster,r.poster=void 0,r.autoplay=!0,v(e))}),e.engines.unshift(T))};"object"==typeof t&&t.exports?t.exports=e.bind(void 0,r(2)):window.Hls&&window.flowplayer&&e(window.Hls,window.flowplayer)}()},function(t,e,r){!function(e,r){t.exports=r()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var a=r[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=7)}([function(t,e,r){"use strict";function i(){}function a(t,e){return e="["+t+"] > "+e}function n(t){var e=self.console[t];return e?function(){for(var r=arguments.length,i=Array(r),n=0;n<r;n++)i[n]=arguments[n];i[0]&&(i[0]=a(t,i[0])),e.apply(self.console,i)}:i}function o(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];r.forEach(function(e){u[e]=t[e]?t[e].bind(t):n(e)})}r.d(e,"a",function(){return d}),r.d(e,"b",function(){return c});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l={trace:i,debug:i,log:i,warn:i,info:i,error:i},u=l,d=function(t){if(t===!0||"object"===("undefined"==typeof t?"undefined":s(t))){o(t,"debug","log","info","warn","error");try{u.log()}catch(t){u=l}}else u=l},c=u},function(t,e,r){"use strict";e.a={MEDIA_ATTACHING:"hlsMediaAttaching",MEDIA_ATTACHED:"hlsMediaAttached",MEDIA_DETACHING:"hlsMediaDetaching",MEDIA_DETACHED:"hlsMediaDetached",BUFFER_RESET:"hlsBufferReset",BUFFER_CODECS:"hlsBufferCodecs",BUFFER_CREATED:"hlsBufferCreated",BUFFER_APPENDING:"hlsBufferAppending",BUFFER_APPENDED:"hlsBufferAppended",BUFFER_EOS:"hlsBufferEos",BUFFER_FLUSHING:"hlsBufferFlushing",BUFFER_FLUSHED:"hlsBufferFlushed",MANIFEST_LOADING:"hlsManifestLoading",MANIFEST_LOADED:"hlsManifestLoaded",MANIFEST_PARSED:"hlsManifestParsed",LEVEL_SWITCH:"hlsLevelSwitch",LEVEL_SWITCHING:"hlsLevelSwitching",LEVEL_SWITCHED:"hlsLevelSwitched",LEVEL_LOADING:"hlsLevelLoading",LEVEL_LOADED:"hlsLevelLoaded",LEVEL_UPDATED:"hlsLevelUpdated",LEVEL_PTS_UPDATED:"hlsLevelPtsUpdated",AUDIO_TRACKS_UPDATED:"hlsAudioTracksUpdated",AUDIO_TRACK_SWITCH:"hlsAudioTrackSwitch",AUDIO_TRACK_SWITCHING:"hlsAudioTrackSwitching",AUDIO_TRACK_SWITCHED:"hlsAudioTrackSwitched",AUDIO_TRACK_LOADING:"hlsAudioTrackLoading",AUDIO_TRACK_LOADED:"hlsAudioTrackLoaded",SUBTITLE_TRACKS_UPDATED:"hlsSubtitleTracksUpdated",SUBTITLE_TRACK_SWITCH:"hlsSubtitleTrackSwitch",SUBTITLE_TRACK_LOADING:"hlsSubtitleTrackLoading",SUBTITLE_TRACK_LOADED:"hlsSubtitleTrackLoaded",SUBTITLE_FRAG_PROCESSED:"hlsSubtitleFragProcessed",INIT_PTS_FOUND:"hlsInitPtsFound",FRAG_LOADING:"hlsFragLoading",FRAG_LOAD_PROGRESS:"hlsFragLoadProgress",FRAG_LOAD_EMERGENCY_ABORTED:"hlsFragLoadEmergencyAborted",FRAG_LOADED:"hlsFragLoaded",FRAG_DECRYPTED:"hlsFragDecrypted",FRAG_PARSING_INIT_SEGMENT:"hlsFragParsingInitSegment",FRAG_PARSING_USERDATA:"hlsFragParsingUserdata",FRAG_PARSING_METADATA:"hlsFragParsingMetadata",FRAG_PARSING_DATA:"hlsFragParsingData",FRAG_PARSED:"hlsFragParsed",FRAG_BUFFERED:"hlsFragBuffered",FRAG_CHANGED:"hlsFragChanged",FPS_DROP:"hlsFpsDrop",FPS_DROP_LEVEL_CAPPING:"hlsFpsDropLevelCapping",ERROR:"hlsError",DESTROYING:"hlsDestroying",KEY_LOADING:"hlsKeyLoading",KEY_LOADED:"hlsKeyLoaded",STREAM_STATE_TRANSITION:"hlsStreamStateTransition"}},function(t,e,r){"use strict";r.d(e,"b",function(){return i}),r.d(e,"a",function(){return a});var i={NETWORK_ERROR:"networkError",MEDIA_ERROR:"mediaError",MUX_ERROR:"muxError",OTHER_ERROR:"otherError"},a={MANIFEST_LOAD_ERROR:"manifestLoadError",MANIFEST_LOAD_TIMEOUT:"manifestLoadTimeOut",MANIFEST_PARSING_ERROR:"manifestParsingError",MANIFEST_INCOMPATIBLE_CODECS_ERROR:"manifestIncompatibleCodecsError",LEVEL_LOAD_ERROR:"levelLoadError",LEVEL_LOAD_TIMEOUT:"levelLoadTimeOut",LEVEL_SWITCH_ERROR:"levelSwitchError",AUDIO_TRACK_LOAD_ERROR:"audioTrackLoadError",AUDIO_TRACK_LOAD_TIMEOUT:"audioTrackLoadTimeOut",FRAG_LOAD_ERROR:"fragLoadError",FRAG_LOOP_LOADING_ERROR:"fragLoopLoadingError",FRAG_LOAD_TIMEOUT:"fragLoadTimeOut",FRAG_DECRYPT_ERROR:"fragDecryptError",FRAG_PARSING_ERROR:"fragParsingError",REMUX_ALLOC_ERROR:"remuxAllocError",KEY_LOAD_ERROR:"keyLoadError",KEY_LOAD_TIMEOUT:"keyLoadTimeOut",BUFFER_ADD_CODEC_ERROR:"bufferAddCodecError",BUFFER_APPEND_ERROR:"bufferAppendError",BUFFER_APPENDING_ERROR:"bufferAppendingError",BUFFER_STALLED_ERROR:"bufferStalledError",BUFFER_FULL_ERROR:"bufferFullError",BUFFER_SEEK_OVER_HOLE:"bufferSeekOverHole",BUFFER_NUDGE_ON_STALL:"bufferNudgeOnStall",INTERNAL_EXCEPTION:"internalException"}},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var a=function(){function t(){i(this,t)}return t.isHeader=function(t,e){return e+10<=t.length&&73===t[e]&&68===t[e+1]&&51===t[e+2]&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},t.isFooter=function(t,e){return e+10<=t.length&&51===t[e]&&68===t[e+1]&&73===t[e+2]&&t[e+3]<255&&t[e+4]<255&&t[e+6]<128&&t[e+7]<128&&t[e+8]<128&&t[e+9]<128},t.getID3Data=function(e,r){for(var i=r,a=0;t.isHeader(e,r);){a+=10;var n=t._readSize(e,r+6);a+=n,t.isFooter(e,r+10)&&(a+=10),r+=a}if(a>0)return e.subarray(i,i+a)},t._readSize=function(t,e){var r=0;return r=(127&t[e])<<21,r|=(127&t[e+1])<<14,r|=(127&t[e+2])<<7,r|=127&t[e+3]},t.getTimeStamp=function(e){for(var r=t.getID3Frames(e),i=0;i<r.length;i++){var a=r[i];if(t.isTimeStampFrame(a))return t._readTimeStamp(a)}},t.isTimeStampFrame=function(t){return t&&"PRIV"===t.key&&"com.apple.streaming.transportStreamTimestamp"===t.info},t._getFrameData=function(e){var r=String.fromCharCode(e[0],e[1],e[2],e[3]),i=t._readSize(e,4),a=10;return{type:r,size:i,data:e.subarray(a,a+i)}},t.getID3Frames=function(e){for(var r=0,i=[];t.isHeader(e,r);){var a=t._readSize(e,r+6);r+=10;for(var n=r+a;r+8<n;){var o=t._getFrameData(e.subarray(r)),s=t._decodeFrame(o);s&&i.push(s),r+=o.size+10}t.isFooter(e,r)&&(r+=10)}return i},t._decodeFrame=function(e){return"PRIV"===e.type?t._decodePrivFrame(e):"T"===e.type[0]?t._decodeTextFrame(e):"W"===e.type[0]?t._decodeURLFrame(e):void 0},t._readTimeStamp=function(t){if(8===t.data.byteLength){var e=new Uint8Array(t.data),r=1&e[3],i=(e[4]<<23)+(e[5]<<15)+(e[6]<<7)+e[7];return i/=45,r&&(i+=47721858.84),Math.round(i)}},t._decodePrivFrame=function(e){if(!(e.size<2)){var r=t._utf8ArrayToStr(e.data),i=new Uint8Array(e.data.subarray(r.length+1));return{key:e.type,info:r,data:i.buffer}}},t._decodeTextFrame=function(e){if(!(e.size<2)){if("TXXX"===e.type){var r=1,i=t._utf8ArrayToStr(e.data.subarray(r));r+=i.length+1;var a=t._utf8ArrayToStr(e.data.subarray(r));return{key:e.type,info:i,data:a}}var n=t._utf8ArrayToStr(e.data.subarray(1));return{key:e.type,data:n}}},t._decodeURLFrame=function(e){if("WXXX"===e.type){if(e.size<2)return;var r=1,i=t._utf8ArrayToStr(e.data.subarray(r));r+=i.length+1;var a=t._utf8ArrayToStr(e.data.subarray(r));return{key:e.type,info:i,data:a}}var n=t._utf8ArrayToStr(e.data);return{key:e.type,data:n}},t._utf8ArrayToStr=function(t){for(var e=void 0,r=void 0,i="",a=0,n=t.length;a<n;){var o=t[a++];switch(o>>4){case 0:return i;case 1:case 2:case 3:case 4:case 5:case 6:case 7:i+=String.fromCharCode(o);break;case 12:case 13:e=t[a++],i+=String.fromCharCode((31&o)<<6|63&e);break;case 14:e=t[a++],r=t[a++],i+=String.fromCharCode((15&o)<<12|(63&e)<<6|(63&r)<<0)}}return i},t}();e.a=a},function(t,e){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(t){return"function"==typeof t}function a(t){return"number"==typeof t}function n(t){return"object"==typeof t&&null!==t}function o(t){return void 0===t}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(t){if(!a(t)||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},r.prototype.emit=function(t){var e,r,a,s,l,u;if(this._events||(this._events={}),"error"===t&&(!this._events.error||n(this._events.error)&&!this._events.error.length)){if(e=arguments[1],e instanceof Error)throw e;var d=new Error('Uncaught, unspecified "error" event. ('+e+")");throw d.context=e,d}if(r=this._events[t],o(r))return!1;if(i(r))switch(arguments.length){case 1:r.call(this);break;case 2:r.call(this,arguments[1]);break;case 3:r.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),r.apply(this,s)}else if(n(r))for(s=Array.prototype.slice.call(arguments,1),u=r.slice(),a=u.length,l=0;l<a;l++)u[l].apply(this,s);return!0},r.prototype.addListener=function(t,e){var a;if(!i(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,i(e.listener)?e.listener:e),this._events[t]?n(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,n(this._events[t])&&!this._events[t].warned&&(a=o(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,a&&a>0&&this._events[t].length>a&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(t,e){function r(){this.removeListener(t,r),a||(a=!0,e.apply(this,arguments))}if(!i(e))throw TypeError("listener must be a function");var a=!1;return r.listener=e,this.on(t,r),this},r.prototype.removeListener=function(t,e){var r,a,o,s;if(!i(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(r=this._events[t],o=r.length,a=-1,r===e||i(r.listener)&&r.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(n(r)){for(s=o;s-- >0;)if(r[s]===e||r[s].listener&&r[s].listener===e){a=s;break}if(a<0)return this;1===r.length?(r.length=0,delete this._events[t]):r.splice(a,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},r.prototype.removeAllListeners=function(t){var e,r;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[t],i(r))this.removeListener(t,r);else if(r)for(;r.length;)this.removeListener(t,r[r.length-1]);return delete this._events[t],this},r.prototype.listeners=function(t){var e;return e=this._events&&this._events[t]?i(this._events[t])?[this._events[t]]:this._events[t].slice():[]},r.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(i(e))return 1;if(e)return e.length}return 0},r.listenerCount=function(t,e){return t.listenerCount(e)}},function(t,e,r){!function(e){var r=/^((?:[^\/;?#]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,i=/^([^\/;?#]*)(.*)$/,a=/(?:\/|^)\.(?=\/)/g,n=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,o={buildAbsoluteURL:function(t,e,r){if(r=r||{},t=t.trim(),e=e.trim(),!e){if(!r.alwaysNormalize)return t;var a=this.parseURL(t);if(!s)throw new Error("Error trying to parse base URL.");return a.path=o.normalizePath(a.path),o.buildURLFromParts(a)}var n=this.parseURL(e);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return r.alwaysNormalize?(n.path=o.normalizePath(n.path),o.buildURLFromParts(n)):e;var s=this.parseURL(t);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var l=i.exec(s.path);s.netLoc=l[1],s.path=l[2]}s.netLoc&&!s.path&&(s.path="/");var u={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(u.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var d=s.path,c=d.substring(0,d.lastIndexOf("/")+1)+n.path;u.path=o.normalizePath(c)}else u.path=s.path,n.params||(u.params=s.params,n.query||(u.query=s.query));return null===u.path&&(u.path=r.alwaysNormalize?o.normalizePath(n.path):n.path),o.buildURLFromParts(u)},parseURL:function(t){var e=r.exec(t);return e?{scheme:e[1]||"",netLoc:e[2]||"",path:e[3]||"",params:e[4]||"",query:e[5]||"",fragment:e[6]||""}:null},normalizePath:function(t){for(t=t.split("").reverse().join("").replace(a,"");t.length!==(t=t.replace(n,"")).length;);return t.split("").reverse().join("")},buildURLFromParts:function(t){return t.scheme+t.netLoc+t.path+t.params+t.query+t.fragment}};t.exports=o}(this)},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e,r,i){var a,n,o,s,l,u=navigator.userAgent.toLowerCase(),d=i,c=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];return a=((192&e[r+2])>>>6)+1,n=(60&e[r+2])>>>2,n>c.length-1?void t.trigger(Event.ERROR,{type:D.b.MEDIA_ERROR,details:D.a.FRAG_PARSING_ERROR,fatal:!0,reason:"invalid ADTS sampling index:"+n}):(s=(1&e[r+2])<<2,s|=(192&e[r+3])>>>6,N.b.log("manifest codec:"+i+",ADTS data:type:"+a+",sampleingIndex:"+n+"["+c[n]+"Hz],channelConfig:"+s),/firefox/i.test(u)?n>=6?(a=5,l=new Array(4),o=n-3):(a=2,l=new Array(2),o=n):u.indexOf("android")!==-1?(a=2,l=new Array(2),o=n):(a=5,l=new Array(4),i&&(i.indexOf("mp4a.40.29")!==-1||i.indexOf("mp4a.40.5")!==-1)||!i&&n>=6?o=n-3:((i&&i.indexOf("mp4a.40.2")!==-1&&(n>=6&&1===s||/vivaldi/i.test(u))||!i&&1===s)&&(a=2,l=new Array(2)),o=n)),l[0]=a<<3,l[0]|=(14&n)>>1,l[1]|=(1&n)<<7,l[1]|=s<<3,5===a&&(l[1]|=(14&o)>>1,l[2]=(1&o)<<7,l[2]|=8,l[3]=0),{config:l,samplerate:c[n],channelCount:s,codec:"mp4a.40."+a,manifestCodec:d})}function l(t,e){return 255===t[e]&&240===(246&t[e+1])}function u(t,e){return 1&t[e+1]?7:9}function d(t,e){return(3&t[e+3])<<11|t[e+4]<<3|(224&t[e+5])>>>5}function c(t,e){return!!(e+1<t.length&&l(t,e))}function f(t,e){if(e+1<t.length&&l(t,e)){var r=u(t,e),i=r;e+5<t.length&&(i=d(t,e));var a=e+i;if(a===t.length||a+1<t.length&&l(t,a))return!0}return!1}function h(t,e,r,i,a){if(!t.samplerate){var n=s(e,r,i,a);t.config=n.config,t.samplerate=n.samplerate,t.channelCount=n.channelCount,t.codec=n.codec,t.manifestCodec=n.manifestCodec,N.b.log("parsed codec:"+t.codec+",rate:"+n.samplerate+",nb channel:"+n.channelCount)}}function p(t){return 9216e4/t}function g(t,e,r,i,a){var n,o,s,l=t.length;if(n=u(t,e),o=d(t,e),o-=n,o>0&&e+n+o<=l)return s=r+i*a,{headerLength:n,frameLength:o,stamp:s}}function v(t,e,r,i,a){var n=p(t.samplerate),o=g(e,r,i,a,n);if(o){var s=o.stamp,l=o.headerLength,u=o.frameLength,d={unit:e.subarray(r+l,r+l+u),pts:s,dts:s};return t.samples.push(d),t.len+=u,{sample:d,length:u+l}}}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function S(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function A(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function L(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var k=r(1),D=r(2),I=function(){function t(e,r){i(this,t),this.subtle=e,this.aesIV=r}return t.prototype.decrypt=function(t,e){return this.subtle.decrypt({name:"AES-CBC",iv:this.aesIV},e,t)},t}(),O=I,C=function(){function t(e,r){a(this,t),this.subtle=e,this.key=r}return t.prototype.expandKey=function(){return this.subtle.importKey("raw",this.key,{name:"AES-CBC"},!1,["encrypt","decrypt"])},t}(),x=C,P=function(){function t(){n(this,t),this.rcon=[0,1,2,4,8,16,32,64,128,27,54],this.subMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.invSubMix=[new Uint32Array(256),new Uint32Array(256),new Uint32Array(256),new Uint32Array(256)],this.sBox=new Uint32Array(256),this.invSBox=new Uint32Array(256),this.key=new Uint32Array(0),this.initTable()}return t.prototype.uint8ArrayToUint32Array_=function(t){for(var e=new DataView(t),r=new Uint32Array(4),i=0;i<4;i++)r[i]=e.getUint32(4*i);return r},t.prototype.initTable=function(){var t=this.sBox,e=this.invSBox,r=this.subMix,i=r[0],a=r[1],n=r[2],o=r[3],s=this.invSubMix,l=s[0],u=s[1],d=s[2],c=s[3],f=new Uint32Array(256),h=0,p=0,g=0;for(g=0;g<256;g++)g<128?f[g]=g<<1:f[g]=g<<1^283;for(g=0;g<256;g++){var v=p^p<<1^p<<2^p<<3^p<<4;v=v>>>8^255&v^99,t[h]=v,e[v]=h;var m=f[h],y=f[m],b=f[y],E=257*f[v]^16843008*v;i[h]=E<<24|E>>>8,a[h]=E<<16|E>>>16,n[h]=E<<8|E>>>24,o[h]=E,E=16843009*b^65537*y^257*m^16843008*h,l[v]=E<<24|E>>>8,u[v]=E<<16|E>>>16,d[v]=E<<8|E>>>24,c[v]=E,h?(h=m^f[f[f[b^m]]],p^=f[f[p]]):h=p=1}},t.prototype.expandKey=function(t){for(var e=this.uint8ArrayToUint32Array_(t),r=!0,i=0;i<e.length&&r;)r=e[i]===this.key[i],i++;if(!r){this.key=e;var a=this.keySize=e.length;if(4!==a&&6!==a&&8!==a)throw new Error("Invalid aes key size="+a);var n=this.ksRows=4*(a+6+1),o=void 0,s=void 0,l=this.keySchedule=new Uint32Array(n),u=this.invKeySchedule=new Uint32Array(n),d=this.sBox,c=this.rcon,f=this.invSubMix,h=f[0],p=f[1],g=f[2],v=f[3],m=void 0,y=void 0;
for(o=0;o<n;o++)o<a?m=l[o]=e[o]:(y=m,o%a===0?(y=y<<8|y>>>24,y=d[y>>>24]<<24|d[y>>>16&255]<<16|d[y>>>8&255]<<8|d[255&y],y^=c[o/a|0]<<24):a>6&&o%a===4&&(y=d[y>>>24]<<24|d[y>>>16&255]<<16|d[y>>>8&255]<<8|d[255&y]),l[o]=m=(l[o-a]^y)>>>0);for(s=0;s<n;s++)o=n-s,y=3&s?l[o]:l[o-4],s<4||o<=4?u[s]=y:u[s]=h[d[y>>>24]]^p[d[y>>>16&255]]^g[d[y>>>8&255]]^v[d[255&y]],u[s]=u[s]>>>0}},t.prototype.networkToHostOrderSwap=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},t.prototype.decrypt=function(t,e,r){for(var i,a,n=this.keySize+6,o=this.invKeySchedule,s=this.invSBox,l=this.invSubMix,u=l[0],d=l[1],c=l[2],f=l[3],h=this.uint8ArrayToUint32Array_(r),p=h[0],g=h[1],v=h[2],m=h[3],y=new Int32Array(t),b=new Int32Array(y.length),E=void 0,T=void 0,R=void 0,S=void 0,A=void 0,w=void 0,_=void 0,L=void 0,k=void 0,D=void 0,I=void 0,O=void 0,C=this.networkToHostOrderSwap;e<y.length;){for(k=C(y[e]),D=C(y[e+1]),I=C(y[e+2]),O=C(y[e+3]),A=k^o[0],w=O^o[1],_=I^o[2],L=D^o[3],i=4,a=1;a<n;a++)E=u[A>>>24]^d[w>>16&255]^c[_>>8&255]^f[255&L]^o[i],T=u[w>>>24]^d[_>>16&255]^c[L>>8&255]^f[255&A]^o[i+1],R=u[_>>>24]^d[L>>16&255]^c[A>>8&255]^f[255&w]^o[i+2],S=u[L>>>24]^d[A>>16&255]^c[w>>8&255]^f[255&_]^o[i+3],A=E,w=T,_=R,L=S,i+=4;E=s[A>>>24]<<24^s[w>>16&255]<<16^s[_>>8&255]<<8^s[255&L]^o[i],T=s[w>>>24]<<24^s[_>>16&255]<<16^s[L>>8&255]<<8^s[255&A]^o[i+1],R=s[_>>>24]<<24^s[L>>16&255]<<16^s[A>>8&255]<<8^s[255&w]^o[i+2],S=s[L>>>24]<<24^s[A>>16&255]<<16^s[w>>8&255]<<8^s[255&_]^o[i+3],i+=3,b[e]=C(E^p),b[e+1]=C(S^g),b[e+2]=C(R^v),b[e+3]=C(T^m),p=k,g=D,v=I,m=O,e+=4}return b.buffer},t.prototype.destroy=function(){this.key=void 0,this.keySize=void 0,this.ksRows=void 0,this.sBox=void 0,this.invSBox=void 0,this.subMix=void 0,this.invSubMix=void 0,this.keySchedule=void 0,this.invKeySchedule=void 0,this.rcon=void 0},t}(),F=P,N=r(0),M=function(){function t(e,r){o(this,t),this.observer=e,this.config=r,this.logEnabled=!0;try{var i=crypto?crypto:self.crypto;this.subtle=i.subtle||i.webkitSubtle}catch(t){}this.disableWebCrypto=!this.subtle}return t.prototype.isSync=function(){return this.disableWebCrypto&&this.config.enableSoftwareAES},t.prototype.decrypt=function(t,e,r,i){var a=this;if(this.disableWebCrypto&&this.config.enableSoftwareAES){this.logEnabled&&(N.b.log("JS AES decrypt"),this.logEnabled=!1);var n=this.decryptor;n||(this.decryptor=n=new F),n.expandKey(e),i(n.decrypt(t,0,r))}else{this.logEnabled&&(N.b.log("WebCrypto AES decrypt"),this.logEnabled=!1);var o=this.subtle;this.key!==e&&(this.key=e,this.fastAesKey=new x(o,e)),this.fastAesKey.expandKey().then(function(n){var s=new O(o,r);s.decrypt(t,n).catch(function(n){a.onWebCryptoError(n,t,e,r,i)}).then(function(t){i(t)})}).catch(function(n){a.onWebCryptoError(n,t,e,r,i)})}},t.prototype.onWebCryptoError=function(t,e,r,i,a){this.config.enableSoftwareAES?(N.b.log("WebCrypto Error, disable WebCrypto API"),this.disableWebCrypto=!0,this.logEnabled=!0,this.decrypt(e,r,i,a)):(N.b.error("decrypting error : "+t.message),this.observer.trigger(Event.ERROR,{type:D.b.MEDIA_ERROR,details:D.a.FRAG_DECRYPT_ERROR,fatal:!0,reason:t.message}))},t.prototype.destroy=function(){var t=this.decryptor;t&&(t.destroy(),this.decryptor=void 0)},t}(),U=M,B=r(3),G=function(){function t(e,r,i){m(this,t),this.observer=e,this.config=i,this.remuxer=r}return t.prototype.resetInitSegment=function(t,e,r,i){this._audioTrack={container:"audio/adts",type:"audio",id:0,sequenceNumber:0,isAAC:!0,samples:[],len:0,manifestCodec:e,duration:i,inputTimeScale:9e4}},t.prototype.resetTimeStamp=function(){},t.probe=function(t){if(!t)return!1;for(var e=B.a.getID3Data(t,0)||[],r=e.length,i=t.length;r<i;r++)if(f(t,r))return N.b.log("ADTS sync word found !"),!0;return!1},t.prototype.append=function(t,e,r,i){for(var a=this._audioTrack,n=B.a.getID3Data(t,0)||[],o=B.a.getTimeStamp(n),s=o?90*o:9e4*e,l=0,u=s,d=t.length,f=n.length,p=[{pts:u,dts:u,data:n}];f<d-1;)if(c(t,f)&&f+5<d){h(a,this.observer,t,f,a.manifestCodec);var g=v(a,t,f,s,l);if(!g){N.b.log("Unable to parse AAC frame");break}f+=g.length,u=g.sample.pts,l++}else B.a.isHeader(t,f)?(n=B.a.getID3Data(t,f),p.push({pts:u,dts:u,data:n}),f+=n.length):f++;this.remuxer.remux(a,{samples:[]},{samples:p,inputTimeScale:9e4},{samples:[]},e,r,i)},t.prototype.destroy=function(){},t}(),j=G,K=Math.pow(2,32)-1,H=function(){function t(e,r){y(this,t),this.observer=e,this.remuxer=r}return t.prototype.resetTimeStamp=function(t){this.initPTS=t},t.prototype.resetInitSegment=function(e,r,i,a){if(e&&e.byteLength){var n=this.initData=t.parseInitSegment(e),o={};n.audio&&n.video?o.audiovideo={container:"video/mp4",codec:r+","+i,initSegment:a?e:null}:(n.audio&&(o.audio={container:"audio/mp4",codec:r,initSegment:a?e:null}),n.video&&(o.video={container:"video/mp4",codec:i,initSegment:a?e:null})),this.observer.trigger(k.a.FRAG_PARSING_INIT_SEGMENT,{tracks:o})}else r&&(this.audioCodec=r),i&&(this.videoCodec=i)},t.probe=function(e){if(e.length>=8){var r=t.bin2str(e.subarray(4,8));return["moof","ftyp","styp"].indexOf(r)>=0}return!1},t.bin2str=function(t){return String.fromCharCode.apply(null,t)},t.readUint32=function(t,e){t.data&&(e+=t.start,t=t.data);var r=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3];return r<0?4294967296+r:r},t.writeUint32=function(t,e,r){t.data&&(e+=t.start,t=t.data),t[e]=r>>24,t[e+1]=r>>16&255,t[e+2]=r>>8&255,t[e+3]=255&r},t.findBox=function(e,r){var i,a,n,o,s,l,u,d=[];if(e.data?(l=e.start,o=e.end,e=e.data):(l=0,o=e.byteLength),!r.length)return null;for(i=l;i<o;)a=t.readUint32(e,i),n=t.bin2str(e.subarray(i+4,i+8)),u=a>1?i+a:o,n===r[0]&&(1===r.length?d.push({data:e,start:i+8,end:u}):(s=t.findBox({data:e,start:i+8,end:u},r.slice(1)),s.length&&(d=d.concat(s)))),i=u;return d},t.parseInitSegment=function(e){var r=[],i=t.findBox(e,["moov","trak"]);return i.forEach(function(e){var i=t.findBox(e,["tkhd"])[0];if(i){var a=i.data[i.start],n=0===a?12:20,o=t.readUint32(i,n),s=t.findBox(e,["mdia","mdhd"])[0];if(s){a=s.data[s.start],n=0===a?12:20;var l=t.readUint32(s,n),u=t.findBox(e,["mdia","hdlr"])[0];if(u){var d=t.bin2str(u.data.subarray(u.start+8,u.start+12)),c={soun:"audio",vide:"video"}[d];c&&(r[o]={timescale:l,type:c},r[c]={timescale:l,id:o})}}}}),r},t.getStartDTS=function(e,r){var i,a,n;return i=t.findBox(r,["moof","traf"]),a=[].concat.apply([],i.map(function(r){return t.findBox(r,["tfhd"]).map(function(i){var a,n,o;return a=t.readUint32(i,4),n=e[a].timescale||9e4,o=t.findBox(r,["tfdt"]).map(function(e){var r,i;return r=e.data[e.start],i=t.readUint32(e,4),1===r&&(i*=Math.pow(2,32),i+=t.readUint32(e,8)),i})[0],o/n})})),n=Math.min.apply(null,a),isFinite(n)?n:0},t.offsetStartDTS=function(e,r,i){t.findBox(r,["moof","traf"]).map(function(r){return t.findBox(r,["tfhd"]).map(function(a){var n=t.readUint32(a,4),o=e[n].timescale||9e4;t.findBox(r,["tfdt"]).map(function(e){var r=e.data[e.start],a=t.readUint32(e,4);if(0===r)t.writeUint32(e,4,a-i*o);else{a*=Math.pow(2,32),a+=t.readUint32(e,8),a-=i*o,a=Math.max(a,0);var n=Math.floor(a/(K+1)),s=Math.floor(a%(K+1));t.writeUint32(e,4,n),t.writeUint32(e,8,s)}})})})},t.prototype.append=function(e,r,i,a){var n=this.initData;n||(this.resetInitSegment(e,this.audioCodec,this.videoCodec),n=this.initData);var o=void 0,s=this.initPTS;if(void 0===s){var l=t.getStartDTS(n,e);this.initPTS=s=l-r,this.observer.trigger(k.a.INIT_PTS_FOUND,{initPTS:s})}t.offsetStartDTS(n,e,s),o=t.getStartDTS(n,e),this.remuxer.remux(n.audio,n.video,null,null,o,i,a,e)},t.prototype.destroy=function(){},t}(),W=H,V={BitratesMap:[32,64,96,128,160,192,224,256,288,320,352,384,416,448,32,48,56,64,80,96,112,128,160,192,224,256,320,384,32,40,48,56,64,80,96,112,128,160,192,224,256,320,32,48,56,64,80,96,112,128,144,160,176,192,224,256,8,16,24,32,40,48,56,64,80,96,112,128,144,160],SamplingRateMap:[44100,48e3,32e3,22050,24e3,16e3,11025,12e3,8e3],appendFrame:function(t,e,r,i,a){if(!(r+24>e.length)){var n=this.parseHeader(e,r);if(n&&r+n.frameLength<=e.length){var o=10368e4/n.sampleRate,s=i+a*o,l={unit:e.subarray(r,r+n.frameLength),pts:s,dts:s};return t.config=[],t.channelCount=n.channelCount,t.samplerate=n.sampleRate,t.samples.push(l),t.len+=n.frameLength,{sample:l,length:n.frameLength}}}},parseHeader:function(t,e){var r=t[e+1]>>3&3,i=t[e+1]>>1&3,a=t[e+2]>>4&15,n=t[e+2]>>2&3,o=!!(2&t[e+2]);if(1!==r&&0!==a&&15!==a&&3!==n){var s=3===r?3-i:3===i?3:4,l=1e3*V.BitratesMap[14*s+a-1],u=3===r?0:2===r?1:2,d=V.SamplingRateMap[3*u+n],c=o?1:0,f=t[e+3]>>6===3?1:2,h=3===i?(3===r?12:6)*l/d+c<<2:(3===r?144:72)*l/d+c|0;return{sampleRate:d,channelCount:f,frameLength:h}}},isHeaderPattern:function(t,e){return 255===t[e]&&224===(224&t[e+1])&&0!==(6&t[e+1])},isHeader:function(t,e){return!!(e+1<t.length&&this.isHeaderPattern(t,e))},probe:function(t,e){if(e+1<t.length&&this.isHeaderPattern(t,e)){var r=4,i=this.parseHeader(t,e),a=r;i&&i.frameLength&&(a=i.frameLength);var n=e+a;if(n===t.length||n+1<t.length&&this.isHeaderPattern(t,n))return!0}return!1}},q=V,Y=function(){function t(e){b(this,t),this.data=e,this.bytesAvailable=e.byteLength,this.word=0,this.bitsAvailable=0}return t.prototype.loadWord=function(){var t=this.data,e=this.bytesAvailable,r=t.byteLength-e,i=new Uint8Array(4),a=Math.min(4,e);if(0===a)throw new Error("no bytes available");i.set(t.subarray(r,r+a)),this.word=new DataView(i.buffer).getUint32(0),this.bitsAvailable=8*a,this.bytesAvailable-=a},t.prototype.skipBits=function(t){var e;this.bitsAvailable>t?(this.word<<=t,this.bitsAvailable-=t):(t-=this.bitsAvailable,e=t>>3,t-=e>>3,this.bytesAvailable-=e,this.loadWord(),this.word<<=t,this.bitsAvailable-=t)},t.prototype.readBits=function(t){var e=Math.min(this.bitsAvailable,t),r=this.word>>>32-e;return t>32&&N.b.error("Cannot read more than 32 bits at a time"),this.bitsAvailable-=e,this.bitsAvailable>0?this.word<<=e:this.bytesAvailable>0&&this.loadWord(),e=t-e,e>0&&this.bitsAvailable?r<<e|this.readBits(e):r},t.prototype.skipLZ=function(){var t;for(t=0;t<this.bitsAvailable;++t)if(0!==(this.word&2147483648>>>t))return this.word<<=t,this.bitsAvailable-=t,t;return this.loadWord(),t+this.skipLZ()},t.prototype.skipUEG=function(){this.skipBits(1+this.skipLZ())},t.prototype.skipEG=function(){this.skipBits(1+this.skipLZ())},t.prototype.readUEG=function(){var t=this.skipLZ();return this.readBits(t+1)-1},t.prototype.readEG=function(){var t=this.readUEG();return 1&t?1+t>>>1:-1*(t>>>1)},t.prototype.readBoolean=function(){return 1===this.readBits(1)},t.prototype.readUByte=function(){return this.readBits(8)},t.prototype.readUShort=function(){return this.readBits(16)},t.prototype.readUInt=function(){return this.readBits(32)},t.prototype.skipScalingList=function(t){var e,r,i=8,a=8;for(e=0;e<t;e++)0!==a&&(r=this.readEG(),a=(i+r+256)%256),i=0===a?i:a},t.prototype.readSPS=function(){var t,e,r,i,a,n,o,s,l,u=0,d=0,c=0,f=0,h=this.readUByte.bind(this),p=this.readBits.bind(this),g=this.readUEG.bind(this),v=this.readBoolean.bind(this),m=this.skipBits.bind(this),y=this.skipEG.bind(this),b=this.skipUEG.bind(this),E=this.skipScalingList.bind(this);if(h(),t=h(),e=p(5),m(3),r=h(),b(),100===t||110===t||122===t||244===t||44===t||83===t||86===t||118===t||128===t){var T=g();if(3===T&&m(1),b(),b(),m(1),v())for(s=3!==T?8:12,l=0;l<s;l++)v()&&E(l<6?16:64)}b();var R=g();if(0===R)g();else if(1===R)for(m(1),y(),y(),i=g(),l=0;l<i;l++)y();b(),m(1),a=g(),n=g(),o=p(1),0===o&&m(1),m(1),v()&&(u=g(),d=g(),c=g(),f=g());var S=[1,1];if(v()&&v()){var A=h();switch(A){case 1:S=[1,1];break;case 2:S=[12,11];break;case 3:S=[10,11];break;case 4:S=[16,11];break;case 5:S=[40,33];break;case 6:S=[24,11];break;case 7:S=[20,11];break;case 8:S=[32,11];break;case 9:S=[80,33];break;case 10:S=[18,11];break;case 11:S=[15,11];break;case 12:S=[64,33];break;case 13:S=[160,99];break;case 14:S=[4,3];break;case 15:S=[3,2];break;case 16:S=[2,1];break;case 255:S=[h()<<8|h(),h()<<8|h()]}}return{width:Math.ceil(16*(a+1)-2*u-2*d),height:(2-o)*(n+1)*16-(o?2:4)*(c+f),pixelRatio:S}},t.prototype.readSliceType=function(){return this.readUByte(),this.readUEG(),this.readUEG()},t}(),z=Y,X=function(){function t(e,r,i,a){E(this,t),this.decryptdata=i,this.discardEPB=a,this.decrypter=new U(e,r)}return t.prototype.decryptBuffer=function(t,e){this.decrypter.decrypt(t,this.decryptdata.key.buffer,this.decryptdata.iv.buffer,e)},t.prototype.decryptAacSample=function(t,e,r,i){var a=t[e].unit,n=a.subarray(16,a.length-a.length%16),o=n.buffer.slice(n.byteOffset,n.byteOffset+n.length),s=this;this.decryptBuffer(o,function(n){n=new Uint8Array(n),a.set(n,16),i||s.decryptAacSamples(t,e+1,r)})},t.prototype.decryptAacSamples=function(t,e,r){for(;;e++){if(e>=t.length)return void r();if(!(t[e].unit.length<32)){var i=this.decrypter.isSync();if(this.decryptAacSample(t,e,r,i),!i)return}}},t.prototype.getAvcEncryptedData=function(t){for(var e=16*Math.floor((t.length-48)/160)+16,r=new Int8Array(e),i=0,a=32;a<=t.length-16;a+=160,i+=16)r.set(t.subarray(a,a+16),i);return r},t.prototype.getAvcDecryptedUnit=function(t,e){e=new Uint8Array(e);for(var r=0,i=32;i<=t.length-16;i+=160,r+=16)t.set(e.subarray(r,r+16),i);return t},t.prototype.decryptAvcSample=function(t,e,r,i,a,n){var o=this.discardEPB(a.data),s=this.getAvcEncryptedData(o),l=this;this.decryptBuffer(s.buffer,function(s){a.data=l.getAvcDecryptedUnit(o,s),n||l.decryptAvcSamples(t,e,r+1,i)})},t.prototype.decryptAvcSamples=function(t,e,r,i){for(;;e++,r=0){if(e>=t.length)return void i();for(var a=t[e].units;!(r>=a.length);r++){var n=a[r];if(!(n.length<=48||1!==n.type&&5!==n.type)){var o=this.decrypter.isSync();if(this.decryptAvcSample(t,e,r,i,n,o),!o)return}}}},t}(),Q=X,J=function(){function t(e,r,i,a){T(this,t),this.observer=e,this.config=i,this.typeSupported=a,this.remuxer=r,this.sampleAes=null}return t.prototype.setDecryptData=function(t){null!=t&&null!=t.key&&"SAMPLE-AES"===t.method?this.sampleAes=new Q(this.observer,this.config,t,this.discardEPB):this.sampleAes=null},t.probe=function(t){return t.length>=564&&71===t[0]&&71===t[188]&&71===t[376]},t.prototype.resetInitSegment=function(t,e,r,i){this.pmtParsed=!1,this._pmtId=-1,this._avcTrack={container:"video/mp2t",type:"video",id:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0,dropped:0},this._audioTrack={container:"video/mp2t",type:"audio",id:-1,inputTimeScale:9e4,duration:i,sequenceNumber:0,samples:[],len:0,isAAC:!0},this._id3Track={type:"id3",id:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0},this._txtTrack={type:"text",id:-1,inputTimeScale:9e4,sequenceNumber:0,samples:[],len:0},this.aacOverFlow=null,this.aacLastPTS=null,this.avcSample=null,this.audioCodec=e,this.videoCodec=r,this._duration=i},t.prototype.resetTimeStamp=function(){},t.prototype.append=function(t,e,r,i){var a,n,o,s,l,u,d=t.length,c=!1;this.contiguous=r;var f=this.pmtParsed,h=this._avcTrack,p=this._audioTrack,g=this._id3Track,v=h.id,m=p.id,y=g.id,b=this._pmtId,E=h.pesData,T=p.pesData,R=g.pesData,S=this._parsePAT,A=this._parsePMT,w=this._parsePES,_=this._parseAVCPES.bind(this),L=this._parseAACPES.bind(this),I=this._parseMPEGPES.bind(this),O=this._parseID3PES.bind(this);for(d-=d%188,a=0;a<d;a+=188)if(71===t[a]){if(n=!!(64&t[a+1]),o=((31&t[a+1])<<8)+t[a+2],s=(48&t[a+3])>>4,s>1){if(l=a+5+t[a+4],l===a+188)continue}else l=a+4;switch(o){case v:n&&(E&&(u=w(E))&&_(u,!1),E={data:[],size:0}),E&&(E.data.push(t.subarray(l,a+188)),E.size+=a+188-l);break;case m:n&&(T&&(u=w(T))&&(p.isAAC?L(u):I(u)),T={data:[],size:0}),T&&(T.data.push(t.subarray(l,a+188)),T.size+=a+188-l);break;case y:n&&(R&&(u=w(R))&&O(u),R={data:[],size:0}),R&&(R.data.push(t.subarray(l,a+188)),R.size+=a+188-l);break;case 0:n&&(l+=t[l]+1),b=this._pmtId=S(t,l);break;case b:n&&(l+=t[l]+1);var C=A(t,l,this.typeSupported.mpeg===!0||this.typeSupported.mp3===!0,null!=this.sampleAes);v=C.avc,v>0&&(h.id=v),m=C.audio,m>0&&(p.id=m,p.isAAC=C.isAAC),y=C.id3,y>0&&(g.id=y),c&&!f&&(N.b.log("reparse from beginning"),c=!1,a=-188),f=this.pmtParsed=!0;break;case 17:case 8191:break;default:c=!0}}else this.observer.trigger(k.a.ERROR,{type:D.b.MEDIA_ERROR,details:D.a.FRAG_PARSING_ERROR,fatal:!1,reason:"TS packet did not start with 0x47"});E&&(u=w(E))?(_(u,!0),h.pesData=null):h.pesData=E,T&&(u=w(T))?(p.isAAC?L(u):I(u),p.pesData=null):(T&&T.size&&N.b.log("last AAC PES packet truncated,might overlap between fragments"),p.pesData=T),R&&(u=w(R))?(O(u),g.pesData=null):g.pesData=R,null==this.sampleAes?this.remuxer.remux(p,h,g,this._txtTrack,e,r,i):this.decryptAndRemux(p,h,g,this._txtTrack,e,r,i)},t.prototype.decryptAndRemux=function(t,e,r,i,a,n,o){if(t.samples&&t.isAAC){var s=this;this.sampleAes.decryptAacSamples(t.samples,0,function(){s.decryptAndRemuxAvc(t,e,r,i,a,n,o)})}else this.decryptAndRemuxAvc(t,e,r,i,a,n,o)},t.prototype.decryptAndRemuxAvc=function(t,e,r,i,a,n,o){if(e.samples){var s=this;this.sampleAes.decryptAvcSamples(e.samples,0,0,function(){s.remuxer.remux(t,e,r,i,a,n,o)})}else this.remuxer.remux(t,e,r,i,a,n,o)},t.prototype.destroy=function(){this._initPTS=this._initDTS=void 0,this._duration=0},t.prototype._parsePAT=function(t,e){return(31&t[e+10])<<8|t[e+11]},t.prototype._parsePMT=function(t,e,r,i){var a,n,o,s,l={audio:-1,avc:-1,id3:-1,isAAC:!0};for(a=(15&t[e+1])<<8|t[e+2],n=e+3+a-4,o=(15&t[e+10])<<8|t[e+11],e+=12+o;e<n;){switch(s=(31&t[e+1])<<8|t[e+2],t[e]){case 207:if(!i){N.b.log("unkown stream type:"+t[e]);break}case 15:l.audio===-1&&(l.audio=s);break;case 21:l.id3===-1&&(l.id3=s);break;case 219:if(!i){N.b.log("unkown stream type:"+t[e]);break}case 27:l.avc===-1&&(l.avc=s);break;case 3:case 4:r?l.audio===-1&&(l.audio=s,l.isAAC=!1):N.b.log("MPEG audio found, not supported in this browser for now");break;case 36:N.b.warn("HEVC stream type found, not supported for now");break;default:N.b.log("unkown stream type:"+t[e])}e+=((15&t[e+3])<<8|t[e+4])+5}return l},t.prototype._parsePES=function(t){var e,r,i,a,n,o,s,l,u,d=0,c=t.data;if(!t||0===t.size)return null;for(;c[0].length<19&&c.length>1;){var f=new Uint8Array(c[0].length+c[1].length);f.set(c[0]),f.set(c[1],c[0].length),c[0]=f,c.splice(1,1)}if(e=c[0],i=(e[0]<<16)+(e[1]<<8)+e[2],1===i){if(a=(e[4]<<8)+e[5],a&&a>t.size-6)return null;r=e[7],192&r&&(s=536870912*(14&e[9])+4194304*(255&e[10])+16384*(254&e[11])+128*(255&e[12])+(254&e[13])/2,s>4294967295&&(s-=8589934592),64&r?(l=536870912*(14&e[14])+4194304*(255&e[15])+16384*(254&e[16])+128*(255&e[17])+(254&e[18])/2,l>4294967295&&(l-=8589934592),s-l>54e5&&(N.b.warn(Math.round((s-l)/9e4)+"s delta between PTS and DTS, align them"),s=l)):l=s),n=e[8],u=n+9,t.size-=u,o=new Uint8Array(t.size);for(var h=0,p=c.length;h<p;h++){e=c[h];var g=e.byteLength;if(u){if(u>g){u-=g;continue}e=e.subarray(u),g-=u,u=0}o.set(e,d),d+=g}return a&&(a-=n+3),{data:o,pts:s,dts:l,len:a}}return null},t.prototype.pushAccesUnit=function(t,e){if(t.units.length&&t.frame){var r=e.samples,i=r.length;!this.config.forceKeyFrameOnDiscontinuity||t.key===!0||e.sps&&(i||this.contiguous)?(t.id=i,r.push(t)):e.dropped++}t.debug.length&&N.b.log(t.pts+"/"+t.dts+":"+t.debug)},t.prototype._parseAVCPES=function(t,e){var r,i,a,n=this,o=this._avcTrack,s=this._parseAVCNALu(t.data),l=!1,u=this.avcSample,d=!1,c=this.pushAccesUnit.bind(this),f=function(t,e,r,i){return{key:t,pts:e,dts:r,units:[],debug:i}};t.data=null,u&&s.length&&!o.audFound&&(c(u,o),u=this.avcSample=f(!1,t.pts,t.dts,"")),s.forEach(function(e){switch(e.type){case 1:i=!0,u||(u=n.avcSample=f(!0,t.pts,t.dts,"")),l&&(u.debug+="NDR "),u.frame=!0;var s=e.data;if(d&&s.length>4){var h=new z(s).readSliceType();2!==h&&4!==h&&7!==h&&9!==h||(u.key=!0)}break;case 5:i=!0,u||(u=n.avcSample=f(!0,t.pts,t.dts,"")),l&&(u.debug+="IDR "),u.key=!0,u.frame=!0;break;case 6:i=!0,l&&u&&(u.debug+="SEI "),r=new z(n.discardEPB(e.data)),r.readUByte();for(var p=0,g=0,v=!1,m=0;!v&&r.bytesAvailable>1;){p=0;do m=r.readUByte(),p+=m;while(255===m);g=0;do m=r.readUByte(),g+=m;while(255===m);if(4===p&&0!==r.bytesAvailable){v=!0;var y=r.readUByte();if(181===y){var b=r.readUShort();if(49===b){var E=r.readUInt();if(1195456820===E){var T=r.readUByte();if(3===T){var R=r.readUByte(),S=r.readUByte(),A=31&R,w=[R,S];for(a=0;a<A;a++)w.push(r.readUByte()),w.push(r.readUByte()),w.push(r.readUByte());n._insertSampleInOrder(n._txtTrack.samples,{type:3,pts:t.pts,bytes:w})}}}}}else if(g<r.bytesAvailable)for(a=0;a<g;a++)r.readUByte()}break;case 7:if(i=!0,d=!0,l&&u&&(u.debug+="SPS "),!o.sps){r=new z(e.data);var _=r.readSPS();o.width=_.width,o.height=_.height,o.pixelRatio=_.pixelRatio,o.sps=[e.data],o.duration=n._duration;var L=e.data.subarray(1,4),k="avc1.";for(a=0;a<3;a++){var D=L[a].toString(16);D.length<2&&(D="0"+D),k+=D}o.codec=k}break;case 8:i=!0,l&&u&&(u.debug+="PPS "),o.pps||(o.pps=[e.data]);break;case 9:i=!1,o.audFound=!0,u&&c(u,o),u=n.avcSample=f(!1,t.pts,t.dts,l?"AUD ":"");break;case 12:i=!1;break;default:i=!1,u&&(u.debug+="unknown NAL "+e.type+" ")}if(u&&i){var I=u.units;I.push(e)}}),e&&u&&(c(u,o),this.avcSample=null)},t.prototype._insertSampleInOrder=function(t,e){var r=t.length;if(r>0){if(e.pts>=t[r-1].pts)t.push(e);else for(var i=r-1;i>=0;i--)if(e.pts<t[i].pts){t.splice(i,0,e);break}}else t.push(e)},t.prototype._getLastNalUnit=function(){var t=this.avcSample,e=void 0;if(!t||0===t.units.length){var r=this._avcTrack,i=r.samples;t=i[i.length-1]}if(t){var a=t.units;e=a[a.length-1]}return e},t.prototype._parseAVCNALu=function(t){var e,r,i,a,n,o=0,s=t.byteLength,l=this._avcTrack,u=l.naluState||0,d=u,c=[],f=-1;for(u===-1&&(f=0,n=31&t[0],u=0,o=1);o<s;)if(e=t[o++],u)if(1!==u)if(e)if(1===e){if(f>=0)i={data:t.subarray(f,o-u-1),type:n},c.push(i);else{var h=this._getLastNalUnit();if(h&&(d&&o<=4-d&&h.state&&(h.data=h.data.subarray(0,h.data.byteLength-d)),r=o-u-1,r>0)){var p=new Uint8Array(h.data.byteLength+r);p.set(h.data,0),p.set(t.subarray(0,r),h.data.byteLength),h.data=p}}o<s?(a=31&t[o],f=o,n=a,u=0):u=-1}else u=0;else u=3;else u=e?0:2;else u=e?0:1;if(f>=0&&u>=0&&(i={data:t.subarray(f,s),type:n,state:u},c.push(i)),0===c.length){var g=this._getLastNalUnit();if(g){var v=new Uint8Array(g.data.byteLength+t.byteLength);v.set(g.data,0),v.set(t,g.data.byteLength),g.data=v}}return l.naluState=u,c},t.prototype.discardEPB=function(t){for(var e,r,i=t.byteLength,a=[],n=1;n<i-2;)0===t[n]&&0===t[n+1]&&3===t[n+2]?(a.push(n+2),n+=2):n++;if(0===a.length)return t;e=i-a.length,r=new Uint8Array(e);var o=0;for(n=0;n<e;o++,n++)o===a[0]&&(o++,a.shift()),r[n]=t[o];return r},t.prototype._parseAACPES=function(t){var e,r,i,a,n,o=this._audioTrack,s=t.data,l=t.pts,u=0,d=this.aacOverFlow,f=this.aacLastPTS;if(d){var g=new Uint8Array(d.byteLength+s.byteLength);g.set(d,0),g.set(s,d.byteLength),s=g}for(i=u,n=s.length;i<n-1&&!c(s,i);i++);if(i){var m,y;if(i<n-1?(m="AAC PES did not start with ADTS header,offset:"+i,y=!1):(m="no ADTS header found in AAC PES",y=!0),N.b.warn("parsing error:"+m),this.observer.trigger(k.a.ERROR,{type:D.b.MEDIA_ERROR,details:D.a.FRAG_PARSING_ERROR,fatal:y,reason:m}),y)return}if(h(o,this.observer,s,i,this.audioCodec),r=0,e=p(o.samplerate),d&&f){var b=f+e;Math.abs(b-l)>1&&(N.b.log("AAC: align PTS for overlapping frames by "+Math.round((b-l)/90)),l=b)}for(;i<n;)if(c(s,i)&&i+5<n){var E=v(o,s,i,l,r);if(!E)break;i+=E.length,a=E.sample.pts,r++}else i++;d=i<n?s.subarray(i,n):null,this.aacOverFlow=d,this.aacLastPTS=a},t.prototype._parseMPEGPES=function(t){for(var e=t.data,r=e.length,i=0,a=0,n=t.pts;a<r;)if(q.isHeader(e,a)){var o=q.appendFrame(this._audioTrack,e,a,n,i);if(!o)break;a+=o.length,i++}else a++},t.prototype._parseID3PES=function(t){this._id3Track.samples.push(t)},t}(),$=J,Z=function(){function t(e,r,i){R(this,t),this.observer=e,this.config=i,this.remuxer=r}return t.prototype.resetInitSegment=function(t,e,r,i){this._audioTrack={container:"audio/mpeg",type:"audio",id:-1,sequenceNumber:0,isAAC:!1,samples:[],len:0,manifestCodec:e,duration:i,inputTimeScale:9e4}},t.prototype.resetTimeStamp=function(){},t.probe=function(t){var e,r,i=B.a.getID3Data(t,0);if(i&&void 0!==B.a.getTimeStamp(i))for(e=i.length,r=Math.min(t.length-1,e+100);e<r;e++)if(q.probe(t,e))return N.b.log("MPEG Audio sync word found !"),!0;return!1},t.prototype.append=function(t,e,r,i){for(var a=B.a.getID3Data(t,0),n=90*B.a.getTimeStamp(a),o=a.length,s=t.length,l=0,u=0,d=this._audioTrack,c=[{pts:n,dts:n,data:a}];o<s;)if(q.isHeader(t,o)){var f=q.appendFrame(d,t,o,n,l);if(!f)break;o+=f.length,u=f.sample.pts,l++}else B.a.isHeader(t,o)?(a=B.a.getID3Data(t,o),c.push({pts:u,dts:u,data:a}),o+=a.length):o++;this.remuxer.remux(d,{samples:[]},{samples:c,inputTimeScale:9e4},{samples:[]},e,r,i)},t.prototype.destroy=function(){},t}(),tt=Z,et=function(){function t(){S(this,t)}return t.getSilentFrame=function(t,e){switch(t){case"mp4a.40.2":if(1===e)return new Uint8Array([0,200,0,128,35,128]);if(2===e)return new Uint8Array([33,0,73,144,2,25,0,35,128]);if(3===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,142]);if(4===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,128,44,128,8,2,56]);if(5===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,56]);if(6===e)return new Uint8Array([0,200,0,128,32,132,1,38,64,8,100,0,130,48,4,153,0,33,144,2,0,178,0,32,8,224]);break;default:if(1===e)return new Uint8Array([1,64,34,128,163,78,230,128,186,8,0,0,0,28,6,241,193,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(2===e)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94]);if(3===e)return new Uint8Array([1,64,34,128,163,94,230,128,186,8,0,0,0,0,149,0,6,241,161,10,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,90,94])}return null},t}(),rt=et,it=Math.pow(2,32)-1,at=function(){function t(){A(this,t)}return t.init=function(){t.types={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],".mp3":[],mvex:[],mvhd:[],pasp:[],sdtp:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[],smhd:[]};var e;for(e in t.types)t.types.hasOwnProperty(e)&&(t.types[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);var r=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),i=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]);t.HDLR_TYPES={video:r,audio:i};var a=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),n=new Uint8Array([0,0,0,0,0,0,0,0]);t.STTS=t.STSC=t.STCO=n,t.STSZ=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),t.VMHD=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0]),t.SMHD=new Uint8Array([0,0,0,0,0,0,0,0]),t.STSD=new Uint8Array([0,0,0,0,0,0,0,1]);var o=new Uint8Array([105,115,111,109]),s=new Uint8Array([97,118,99,49]),l=new Uint8Array([0,0,0,1]);t.FTYP=t.box(t.types.ftyp,o,l,o,s),t.DINF=t.box(t.types.dinf,t.box(t.types.dref,a))},t.box=function(t){for(var e,r=Array.prototype.slice.call(arguments,1),i=8,a=r.length,n=a;a--;)i+=r[a].byteLength;for(e=new Uint8Array(i),e[0]=i>>24&255,e[1]=i>>16&255,e[2]=i>>8&255,e[3]=255&i,e.set(t,4),a=0,i=8;a<n;a++)e.set(r[a],i),i+=r[a].byteLength;return e},t.hdlr=function(e){return t.box(t.types.hdlr,t.HDLR_TYPES[e])},t.mdat=function(e){return t.box(t.types.mdat,e)},t.mdhd=function(e,r){r*=e;var i=Math.floor(r/(it+1)),a=Math.floor(r%(it+1));return t.box(t.types.mdhd,new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,a>>24,a>>16&255,a>>8&255,255&a,85,196,0,0]))},t.mdia=function(e){return t.box(t.types.mdia,t.mdhd(e.timescale,e.duration),t.hdlr(e.type),t.minf(e))},t.mfhd=function(e){return t.box(t.types.mfhd,new Uint8Array([0,0,0,0,e>>24,e>>16&255,e>>8&255,255&e]))},t.minf=function(e){return"audio"===e.type?t.box(t.types.minf,t.box(t.types.smhd,t.SMHD),t.DINF,t.stbl(e)):t.box(t.types.minf,t.box(t.types.vmhd,t.VMHD),t.DINF,t.stbl(e))},t.moof=function(e,r,i){return t.box(t.types.moof,t.mfhd(e),t.traf(i,r))},t.moov=function(e){for(var r=e.length,i=[];r--;)i[r]=t.trak(e[r]);return t.box.apply(null,[t.types.moov,t.mvhd(e[0].timescale,e[0].duration)].concat(i).concat(t.mvex(e)))},t.mvex=function(e){for(var r=e.length,i=[];r--;)i[r]=t.trex(e[r]);return t.box.apply(null,[t.types.mvex].concat(i))},t.mvhd=function(e,r){r*=e;var i=Math.floor(r/(it+1)),a=Math.floor(r%(it+1)),n=new Uint8Array([1,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24,i>>16&255,i>>8&255,255&i,a>>24,a>>16&255,a>>8&255,255&a,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return t.box(t.types.mvhd,n)},t.sdtp=function(e){var r,i,a=e.samples||[],n=new Uint8Array(4+a.length);for(i=0;i<a.length;i++)r=a[i].flags,n[i+4]=r.dependsOn<<4|r.isDependedOn<<2|r.hasRedundancy;return t.box(t.types.sdtp,n)},t.stbl=function(e){return t.box(t.types.stbl,t.stsd(e),t.box(t.types.stts,t.STTS),t.box(t.types.stsc,t.STSC),t.box(t.types.stsz,t.STSZ),t.box(t.types.stco,t.STCO))},t.avc1=function(e){var r,i,a,n=[],o=[];for(r=0;r<e.sps.length;r++)i=e.sps[r],a=i.byteLength,n.push(a>>>8&255),n.push(255&a),n=n.concat(Array.prototype.slice.call(i));for(r=0;r<e.pps.length;r++)i=e.pps[r],a=i.byteLength,o.push(a>>>8&255),o.push(255&a),o=o.concat(Array.prototype.slice.call(i));var s=t.box(t.types.avcC,new Uint8Array([1,n[3],n[4],n[5],255,224|e.sps.length].concat(n).concat([e.pps.length]).concat(o))),l=e.width,u=e.height,d=e.pixelRatio[0],c=e.pixelRatio[1];return t.box(t.types.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,l>>8&255,255&l,u>>8&255,255&u,0,72,0,0,0,72,0,0,0,0,0,0,0,1,18,100,97,105,108,121,109,111,116,105,111,110,47,104,108,115,46,106,115,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),s,t.box(t.types.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])),t.box(t.types.pasp,new Uint8Array([d>>24,d>>16&255,d>>8&255,255&d,c>>24,c>>16&255,c>>8&255,255&c])))},t.esds=function(t){var e=t.config.length;return new Uint8Array([0,0,0,0,3,23+e,0,1,0,4,15+e,64,21,0,0,0,0,0,0,0,0,0,0,0,5].concat([e]).concat(t.config).concat([6,1,2]))},t.mp4a=function(e){var r=e.samplerate;return t.box(t.types.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]),t.box(t.types.esds,t.esds(e)))},t.mp3=function(e){var r=e.samplerate;return t.box(t.types[".mp3"],new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,e.channelCount,0,16,0,0,0,0,r>>8&255,255&r,0,0]))},t.stsd=function(e){return"audio"===e.type?e.isAAC||"mp3"!==e.codec?t.box(t.types.stsd,t.STSD,t.mp4a(e)):t.box(t.types.stsd,t.STSD,t.mp3(e)):t.box(t.types.stsd,t.STSD,t.avc1(e))},t.tkhd=function(e){var r=e.id,i=e.duration*e.timescale,a=e.width,n=e.height,o=Math.floor(i/(it+1)),s=Math.floor(i%(it+1));return t.box(t.types.tkhd,new Uint8Array([1,0,0,7,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,r>>24&255,r>>16&255,r>>8&255,255&r,0,0,0,0,o>>24,o>>16&255,o>>8&255,255&o,s>>24,s>>16&255,s>>8&255,255&s,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,a>>8&255,255&a,0,0,n>>8&255,255&n,0,0]))},t.traf=function(e,r){var i=t.sdtp(e),a=e.id,n=Math.floor(r/(it+1)),o=Math.floor(r%(it+1));return t.box(t.types.traf,t.box(t.types.tfhd,new Uint8Array([0,0,0,0,a>>24,a>>16&255,a>>8&255,255&a])),t.box(t.types.tfdt,new Uint8Array([1,0,0,0,n>>24,n>>16&255,n>>8&255,255&n,o>>24,o>>16&255,o>>8&255,255&o])),t.trun(e,i.length+16+20+8+16+8+8),i)},t.trak=function(e){return e.duration=e.duration||4294967295,t.box(t.types.trak,t.tkhd(e),t.mdia(e))},t.trex=function(e){var r=e.id;return t.box(t.types.trex,new Uint8Array([0,0,0,0,r>>24,r>>16&255,r>>8&255,255&r,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]))},t.trun=function(e,r){var i,a,n,o,s,l,u=e.samples||[],d=u.length,c=12+16*d,f=new Uint8Array(c);for(r+=8+c,f.set([0,0,15,1,d>>>24&255,d>>>16&255,d>>>8&255,255&d,r>>>24&255,r>>>16&255,r>>>8&255,255&r],0),i=0;i<d;i++)a=u[i],n=a.duration,o=a.size,s=a.flags,l=a.cts,f.set([n>>>24&255,n>>>16&255,n>>>8&255,255&n,o>>>24&255,o>>>16&255,o>>>8&255,255&o,s.isLeading<<2|s.dependsOn,s.isDependedOn<<6|s.hasRedundancy<<4|s.paddingValue<<1|s.isNonSync,61440&s.degradPrio,15&s.degradPrio,l>>>24&255,l>>>16&255,l>>>8&255,255&l],12+16*i);
return t.box(t.types.trun,f)},t.initSegment=function(e){t.types||t.init();var r,i=t.moov(e);return r=new Uint8Array(t.FTYP.byteLength+i.byteLength),r.set(t.FTYP),r.set(i,t.FTYP.byteLength),r},t}(),nt=at,ot=1e4,st=function(){function t(e,r,i,a){w(this,t),this.observer=e,this.config=r,this.typeSupported=i;var n=navigator.userAgent;this.isSafari=a&&a.indexOf("Apple")>-1&&n&&!n.match("CriOS"),this.ISGenerated=!1}return t.prototype.destroy=function(){},t.prototype.resetTimeStamp=function(t){this._initPTS=this._initDTS=t},t.prototype.resetInitSegment=function(){this.ISGenerated=!1},t.prototype.remux=function(t,e,r,i,a,n,o){if(this.ISGenerated||this.generateIS(t,e,a),this.ISGenerated){var s=t.samples.length,l=e.samples.length,u=a,d=a;if(s&&l){var c=(t.samples[0].dts-e.samples[0].dts)/e.inputTimeScale;u+=Math.max(0,c),d+=Math.max(0,-c)}if(s){t.timescale||(N.b.warn("regenerate InitSegment as audio detected"),this.generateIS(t,e,a));var f=this.remuxAudio(t,u,n,o);if(l){var h=void 0;f&&(h=f.endPTS-f.startPTS),e.timescale||(N.b.warn("regenerate InitSegment as video detected"),this.generateIS(t,e,a)),this.remuxVideo(e,d,n,h,o)}}else{var p=void 0;l&&(p=this.remuxVideo(e,d,n,o)),p&&t.codec&&this.remuxEmptyAudio(t,u,n,p)}}r.samples.length&&this.remuxID3(r,a),i.samples.length&&this.remuxText(i,a),this.observer.trigger(k.a.FRAG_PARSED)},t.prototype.generateIS=function(t,e,r){var i,a,n=this.observer,o=t.samples,s=e.samples,l=this.typeSupported,u="audio/mp4",d={},c={tracks:d},f=void 0===this._initPTS;if(f&&(i=a=1/0),t.config&&o.length&&(t.timescale=t.samplerate,N.b.log("audio sampling rate : "+t.samplerate),t.isAAC||(l.mpeg?(u="audio/mpeg",t.codec=""):l.mp3&&(t.codec="mp3")),d.audio={container:u,codec:t.codec,initSegment:!t.isAAC&&l.mpeg?new Uint8Array:nt.initSegment([t]),metadata:{channelCount:t.channelCount}},f&&(i=a=o[0].pts-t.inputTimeScale*r)),e.sps&&e.pps&&s.length){var h=e.inputTimeScale;e.timescale=h,d.video={container:"video/mp4",codec:e.codec,initSegment:nt.initSegment([e]),metadata:{width:e.width,height:e.height}},f&&(i=Math.min(i,s[0].pts-h*r),a=Math.min(a,s[0].dts-h*r),this.observer.trigger(k.a.INIT_PTS_FOUND,{initPTS:i}))}Object.keys(d).length?(n.trigger(k.a.FRAG_PARSING_INIT_SEGMENT,c),this.ISGenerated=!0,f&&(this._initPTS=i,this._initDTS=a)):n.trigger(k.a.ERROR,{type:D.b.MEDIA_ERROR,details:D.a.FRAG_PARSING_ERROR,fatal:!1,reason:"no audio/video samples found"})},t.prototype.remuxVideo=function(t,e,r,i,a){var n,o,s,l,u,d,c,f,h=8,p=t.timescale,g=t.samples,v=[],m=g.length,y=this._PTSNormalize,b=this._initDTS,E=this.nextAvcDts,T=this.isSafari;T&&(r|=g.length&&E&&(a&&Math.abs(e-E/p)<.1||Math.abs(g[0].pts-E-b)<p/5)),r||(E=e*p),g.forEach(function(t){t.pts=y(t.pts-b,E),t.dts=y(t.dts-b,E)}),g.sort(function(t,e){var r=t.dts-e.dts,i=t.pts-e.pts;return r?r:i?i:t.id-e.id});var R=g.reduce(function(t,e){return Math.max(Math.min(t,e.pts-e.dts),-18e3)},0);if(R<0){N.b.warn("PTS < DTS detected in video samples, shifting DTS by "+Math.round(R/90)+" ms to overcome this issue");for(var S=0;S<g.length;S++)g[S].dts+=R}var A=g[0];u=Math.max(A.dts,0),l=Math.max(A.pts,0);var w=Math.round((u-E)/90);r&&w&&(w>1?N.b.log("AVC:"+w+" ms hole between fragments detected,filling it"):w<-1&&N.b.log("AVC:"+-w+" ms overlapping between fragments detected"),u=E,g[0].dts=u,l=Math.max(l-w,E),g[0].pts=l,N.b.log("Video/PTS/DTS adjusted: "+Math.round(l/90)+"/"+Math.round(u/90)+",delta:"+w+" ms")),d=u,A=g[g.length-1],f=Math.max(A.dts,0),c=Math.max(A.pts,0,f),T&&(n=Math.round((f-u)/(g.length-1)));for(var _=0,L=0,I=0;I<m;I++){for(var O=g[I],C=O.units,x=C.length,P=0,F=0;F<x;F++)P+=C[F].data.length;L+=P,_+=x,O.length=P,T?O.dts=u+I*n:O.dts=Math.max(O.dts,u),O.pts=Math.max(O.pts,O.dts)}var M=L+4*_+8;try{o=new Uint8Array(M)}catch(t){return void this.observer.trigger(k.a.ERROR,{type:D.b.MUX_ERROR,details:D.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:M,reason:"fail allocating video mdat "+M})}var U=new DataView(o.buffer);U.setUint32(0,M),o.set(nt.types.mdat,4);for(var B=0;B<m;B++){for(var G=g[B],j=G.units,K=0,H=void 0,W=0,V=j.length;W<V;W++){var q=j[W],Y=q.data,z=q.data.byteLength;U.setUint32(h,z),h+=4,o.set(Y,h),h+=z,K+=4+z}if(T)H=Math.max(0,n*Math.round((G.pts-G.dts)/n));else{if(B<m-1)n=g[B+1].dts-G.dts;else{var X=this.config,Q=G.dts-g[B>0?B-1:B].dts;if(X.stretchShortVideoTrack){var J=X.maxBufferHole,$=X.maxSeekHole,Z=Math.floor(Math.min(J,$)*p),tt=(i?l+i*p:this.nextAudioPts)-G.pts;tt>Z?(n=tt-Q,n<0&&(n=Q),N.b.log("It is approximately "+tt/90+" ms to the next segment; using duration "+n/90+" ms for the last video frame.")):n=Q}else n=Q}H=Math.round(G.pts-G.dts)}v.push({size:K,duration:n,cts:H,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:G.key?2:1,isNonSync:G.key?0:1}})}this.nextAvcDts=f+n;var et=t.dropped;if(t.len=0,t.nbNalu=0,t.dropped=0,v.length&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var rt=v[0].flags;rt.dependsOn=2,rt.isNonSync=0}t.samples=v,s=nt.moof(t.sequenceNumber++,u,t),t.samples=[];var it={data1:s,data2:o,startPTS:l/p,endPTS:(c+n)/p,startDTS:u/p,endDTS:this.nextAvcDts/p,type:"video",nb:v.length,dropped:et};return this.observer.trigger(k.a.FRAG_PARSING_DATA,it),it},t.prototype.remuxAudio=function(t,e,r,i){var a,n,o,s,l,u,d,c=t.inputTimeScale,f=t.timescale,h=c/f,p=t.isAAC?1024:1152,g=p*h,v=this._PTSNormalize,m=this._initDTS,y=!t.isAAC&&this.typeSupported.mpeg,b=t.samples,E=[],T=this.nextAudioPts;if(r|=b.length&&T&&(i&&Math.abs(e-T/c)<.1||Math.abs(b[0].pts-T-m)<20*g),r||(T=e*c),b.forEach(function(t){t.pts=t.dts=v(t.pts-m,T)}),b.sort(function(t,e){return t.pts-e.pts}),i&&t.isAAC)for(var R=this.config.maxAudioFramesDrift,S=0,A=T;S<b.length;){var w,_=b[S],L=_.pts;w=L-A;var I=Math.abs(1e3*w/c);if(w<=-R*g)N.b.warn("Dropping 1 audio frame @ "+(A/c).toFixed(3)+"s due to "+Math.round(I)+" ms overlap."),b.splice(S,1),t.len-=_.unit.length;else if(w>=R*g&&I<ot&&A){var O=Math.round(w/g);N.b.warn("Injecting "+O+" audio frame @ "+(A/c).toFixed(3)+"s due to "+Math.round(1e3*w/c)+" ms gap.");for(var C=0;C<O;C++){var x=Math.max(A,0);o=rt.getSilentFrame(t.manifestCodec||t.codec,t.channelCount),o||(N.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),o=_.unit.subarray()),b.splice(S,0,{unit:o,pts:x,dts:x}),t.len+=o.length,A+=g,S++}_.pts=_.dts=A,A+=g,S++}else Math.abs(w)>.1*g,_.pts=_.dts=A,A+=g,S++}for(var P=0,F=b.length;P<F;P++){var M=b[P],U=M.unit,B=M.pts;if(void 0!==d)n.duration=Math.round((B-d)/h);else{var G=Math.round(1e3*(B-T)/c),j=0;if(r&&t.isAAC&&G){if(G>0&&G<ot)j=Math.round((B-T)/g),N.b.log(G+" ms hole between AAC samples detected,filling it"),j>0&&(o=rt.getSilentFrame(t.manifestCodec||t.codec,t.channelCount),o||(o=U.subarray()),t.len+=j*o.length);else if(G<-12){N.b.log("drop overlapping AAC sample, expected/parsed/delta:"+(T/c).toFixed(3)+"s/"+(B/c).toFixed(3)+"s/"+-G+"ms"),t.len-=U.byteLength;continue}B=T}if(u=Math.max(0,B),!(t.len>0))return;var K=y?t.len:t.len+8;a=y?0:8;try{s=new Uint8Array(K)}catch(t){return void this.observer.trigger(k.a.ERROR,{type:D.b.MUX_ERROR,details:D.a.REMUX_ALLOC_ERROR,fatal:!1,bytes:K,reason:"fail allocating audio mdat "+K})}if(!y){var H=new DataView(s.buffer);H.setUint32(0,K),s.set(nt.types.mdat,4)}for(var W=0;W<j;W++)o=rt.getSilentFrame(t.manifestCodec||t.codec,t.channelCount),o||(N.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),o=U.subarray()),s.set(o,a),a+=o.byteLength,n={size:o.byteLength,cts:0,duration:1024,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},E.push(n)}s.set(U,a);var V=U.byteLength;a+=V,n={size:V,cts:0,duration:0,flags:{isLeading:0,isDependedOn:0,hasRedundancy:0,degradPrio:0,dependsOn:1}},E.push(n),d=B}var q=0,Y=E.length;if(Y>=2&&(q=E[Y-2].duration,n.duration=q),Y){this.nextAudioPts=T=d+h*q,t.len=0,t.samples=E,l=y?new Uint8Array:nt.moof(t.sequenceNumber++,u/h,t),t.samples=[];var z=u/c,X=T/c,Q={data1:l,data2:s,startPTS:z,endPTS:X,startDTS:z,endDTS:X,type:"audio",nb:Y};return this.observer.trigger(k.a.FRAG_PARSING_DATA,Q),Q}return null},t.prototype.remuxEmptyAudio=function(t,e,r,i){var a=t.inputTimeScale,n=t.samplerate?t.samplerate:a,o=a/n,s=this.nextAudioPts,l=(void 0!==s?s:i.startDTS*a)+this._initDTS,u=i.endDTS*a+this._initDTS,d=1024,c=o*d,f=Math.ceil((u-l)/c),h=rt.getSilentFrame(t.manifestCodec||t.codec,t.channelCount);if(N.b.warn("remux empty Audio"),!h)return void N.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!");for(var p=[],g=0;g<f;g++){var v=l+g*c;p.push({unit:h,pts:v,dts:v}),t.len+=h.length}t.samples=p,this.remuxAudio(t,e,r)},t.prototype.remuxID3=function(t,e){var r,i=t.samples.length,a=t.inputTimeScale,n=this._initPTS,o=this._initDTS;if(i){for(var s=0;s<i;s++)r=t.samples[s],r.pts=(r.pts-n)/a,r.dts=(r.dts-o)/a;this.observer.trigger(k.a.FRAG_PARSING_METADATA,{samples:t.samples})}t.samples=[],e=e},t.prototype.remuxText=function(t,e){t.samples.sort(function(t,e){return t.pts-e.pts});var r,i=t.samples.length,a=t.inputTimeScale,n=this._initPTS;if(i){for(var o=0;o<i;o++)r=t.samples[o],r.pts=(r.pts-n)/a;this.observer.trigger(k.a.FRAG_PARSING_USERDATA,{samples:t.samples})}t.samples=[],e=e},t.prototype._PTSNormalize=function(t,e){var r;if(void 0===e)return t;for(r=e<t?-8589934592:8589934592;Math.abs(t-e)>4294967296;)t+=r;return t},t}(),lt=st,ut=function(){function t(e){_(this,t),this.observer=e}return t.prototype.destroy=function(){},t.prototype.resetTimeStamp=function(){},t.prototype.resetInitSegment=function(){},t.prototype.remux=function(t,e,r,i,a,n,o,s){var l=this.observer,u="";t&&(u+="audio"),e&&(u+="video"),l.trigger(k.a.FRAG_PARSING_DATA,{data1:s,startPTS:a,startDTS:a,type:u,nb:1,dropped:0}),l.trigger(k.a.FRAG_PARSED)},t}(),dt=ut,ct=function(){function t(e,r,i,a){L(this,t),this.observer=e,this.typeSupported=r,this.config=i,this.vendor=a}return t.prototype.destroy=function(){var t=this.demuxer;t&&t.destroy()},t.prototype.push=function(t,e,r,i,a,n,o,s,l,u,d,c){if(t.byteLength>0&&null!=e&&null!=e.key&&"AES-128"===e.method){var f=this.decrypter;null==f&&(f=this.decrypter=new U(this.observer,this.config));var h,p=this;try{h=performance.now()}catch(t){h=Date.now()}f.decrypt(t,e.key.buffer,e.iv.buffer,function(t){var f;try{f=performance.now()}catch(t){f=Date.now()}p.observer.trigger(k.a.FRAG_DECRYPTED,{stats:{tstart:h,tdecrypt:f}}),p.pushDecrypted(new Uint8Array(t),e,new Uint8Array(r),i,a,n,o,s,l,u,d,c)})}else this.pushDecrypted(new Uint8Array(t),e,new Uint8Array(r),i,a,n,o,s,l,u,d,c)},t.prototype.pushDecrypted=function(t,e,r,i,a,n,o,s,l,u,d,c){var f=this.demuxer;if(!f||o&&!this.probe(t)){for(var h=this.observer,p=this.typeSupported,g=this.config,v=[{demux:$,remux:lt},{demux:j,remux:lt},{demux:tt,remux:lt},{demux:W,remux:dt}],m=0,y=v.length;m<y;m++){var b=v[m],E=b.demux.probe;if(E(t)){var T=this.remuxer=new b.remux(h,g,p,this.vendor);f=new b.demux(h,T,g,p),this.probe=E;break}}if(!f)return void h.trigger(k.a.ERROR,{type:D.b.MEDIA_ERROR,details:D.a.FRAG_PARSING_ERROR,fatal:!0,reason:"no demux matching with content found"});this.demuxer=f}var R=this.remuxer;(o||s)&&(f.resetInitSegment(r,i,a,u),R.resetInitSegment()),o&&(f.resetTimeStamp(c),R.resetTimeStamp(c)),"function"==typeof f.setDecryptData&&f.setDecryptData(e),f.append(t,n,l,d)},t}();e.a=ct},function(t,e,r){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){var r=Mt[e];return!!r&&r[t.slice(0,4)]===!0}function o(t){return MediaSource.isTypeSupported('video/mp4;codecs="'+t+'"')}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function g(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e,r){var i=t[e],a=t[r],n=a.startPTS;isNaN(n)?r>e?a.start=i.start+i.duration:a.start=Math.max(i.start-a.duration,0):r>e?(i.duration=n-i.start,i.duration<0&&Dt.b.warn("negative duration computed for frag "+i.sn+",level "+i.level+", there should be some duration drift between playlist and fragment!")):(a.duration=i.start-n,a.duration<0&&Dt.b.warn("negative duration computed for frag "+a.sn+",level "+a.level+", there should be some duration drift between playlist and fragment!"))}function y(t,e,r,i,a,n){var o=r;if(!isNaN(e.startPTS)){var s=Math.abs(e.startPTS-r);isNaN(e.deltaPTS)?e.deltaPTS=s:e.deltaPTS=Math.max(s,e.deltaPTS),o=Math.max(r,e.startPTS),r=Math.min(r,e.startPTS),i=Math.max(i,e.endPTS),a=Math.min(a,e.startDTS),n=Math.max(n,e.endDTS)}var l=r-e.start;e.start=e.startPTS=r,e.maxStartPTS=o,e.endPTS=i,e.startDTS=a,e.endDTS=n,e.duration=i-r;var u=e.sn;if(!t||u<t.startSN||u>t.endSN)return 0;var d,c,f;for(d=u-t.startSN,c=t.fragments,c[d]=e,f=d;f>0;f--)m(c,f,f-1);for(f=d;f<c.length-1;f++)m(c,f,f+1);return t.PTSKnown=!0,l}function b(t,e){var r,i=Math.max(t.startSN,e.startSN)-e.startSN,a=Math.min(t.endSN,e.endSN)-e.startSN,n=e.startSN-t.startSN,o=t.fragments,s=e.fragments,l=0;if(a<i)return void(e.PTSKnown=!1);for(var u=i;u<=a;u++){var d=o[n+u],c=s[u];c&&d&&(l=d.cc-c.cc,isNaN(d.startPTS)||(c.start=c.startPTS=d.startPTS,c.endPTS=d.endPTS,c.duration=d.duration,c.backtracked=d.backtracked,c.dropped=d.dropped,r=c))}if(l)for(Dt.b.log("discontinuity sliding from playlist, take drift into account"),u=0;u<s.length;u++)s[u].cc+=l;if(r)y(e,r,r.startPTS,r.endPTS,r.startDTS,r.endDTS);else if(n>=0&&n<o.length){var f=o[n].start;for(u=0;u<s.length;u++)s[u].start+=f}e.PTSKnown=t.PTSKnown}function E(t,e){for(var r=null,i=0;i<t.length;i+=1){var a=t[i];if(a&&a.cc===e){r=a;break}}return r}function T(t,e){return $t.search(t,function(t){return t.cc<e?1:t.cc>e?-1:0})}function R(t,e,r){var i=!1;return e&&e.details&&r&&(r.endCC>r.startCC||t&&t.cc<r.startCC)&&(i=!0),i}function S(t,e){var r=t.fragments,i=e.fragments;if(!i.length||!r.length)return void Dt.b.log("No fragments to align");var a=E(r,i[0].cc);return!a||a&&!a.startPTS?void Dt.b.log("No frag in previous level to align on"):a}function A(t,e){e.fragments.forEach(function(e){if(e){var r=e.start+t;e.start=e.startPTS=r,e.endPTS=r+e.duration}}),e.PTSKnown=!0}function w(t,e,r){if(R(t,e,r)){var i=S(e.details,r);i&&(Dt.b.log("Adjusting PTS using last level due to CC increase within current level"),A(i.start,r))}if(r.PTSKnown===!1&&e&&e.details){var a=e.details.programDateTime,n=r.programDateTime,o=(n-a)/1e3+e.details.fragments[0].start;isNaN(o)||(Dt.b.log("adjusting PTS using programDateTime delta, sliding:"+o.toFixed(3)),A(o,r))}}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function L(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function k(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function I(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function O(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function C(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function P(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function F(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function N(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function M(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function U(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function B(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function G(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function j(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function K(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function H(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function V(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function q(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Y(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function z(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function X(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Q(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function J(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function $(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function Z(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function tt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function et(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function rt(){this.window=window,this.state="INITIAL",this.buffer="",this.decoder=new We,this.regionList=[]}function it(t){function e(t,e,r,i){return 3600*(0|t)+60*(0|e)+(0|r)+(0|i)/1e3}var r=t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return r?r[3]?e(r[1],r[2],r[3].replace(":",""),r[4]):r[1]>59?e(r[1],r[2],0,r[4]):e(0,r[1],r[2],r[4]):null}function at(){this.values=Object.create(null)}function nt(t,e,r,i){var a=i?t.split(i):[t];for(var n in a)if("string"==typeof a[n]){var o=a[n].split(r);if(2===o.length){var s=o[0],l=o[1];e(s,l)}}}function ot(t,e,r){function i(){var e=it(t);if(null===e)throw new Error("Malformed timestamp: "+o);return t=t.replace(/^[^\sa-zA-Z-]+/,""),e}function a(t,e){var i=new at;nt(t,function(t,e){switch(t){case"region":for(var a=r.length-1;a>=0;a--)if(r[a].id===e){i.set(t,r[a].region);break}break;case"vertical":i.alt(t,e,["rl","lr"]);break;case"line":var n=e.split(","),o=n[0];i.integer(t,o),i.percent(t,o)&&i.set("snapToLines",!1),i.alt(t,o,["auto"]),2===n.length&&i.alt("lineAlign",n[1],["start",qe,"end"]);break;case"position":n=e.split(","),i.percent(t,n[0]),2===n.length&&i.alt("positionAlign",n[1],["start",qe,"end","line-left","line-right","auto"]);break;case"size":i.percent(t,e);break;case"align":i.alt(t,e,["start",qe,"end","left","right"])}},/:/,/\s/),e.region=i.get("region",null),e.vertical=i.get("vertical","");var a=i.get("line","auto");"auto"===a&&Ve.line===-1&&(a=-1),e.line=a,e.lineAlign=i.get("lineAlign","start"),e.snapToLines=i.get("snapToLines",!0),e.size=i.get("size",100),e.align=i.get("align",qe);var n=i.get("position","auto");"auto"===n&&50===Ve.position&&(n="start"===e.align||"left"===e.align?0:"end"===e.align||"right"===e.align?100:50),e.position=n}function n(){t=t.replace(/^\s+/,"")}var o=t;if(n(),e.startTime=i(),n(),"-->"!==t.substr(0,3))throw new Error("Malformed time stamp (time stamps must be separated by '-->'): "+o);t=t.substr(3),n(),e.endTime=i(),n(),a(t,e)}function st(t){return t.replace(/<br(?: \/)?>/gi,"\n")}function lt(t,e,r,i){for(var a,n,o,s,l,u=window.VTTCue||window.TextTrackCue,d=0;d<i.rows.length;d++)if(a=i.rows[d],o=!0,s=0,l="",!a.isEmpty()){for(var c=0;c<a.chars.length;c++)a.chars[c].uchar.match(/\s/)&&o?s++:(l+=a.chars[c].uchar,o=!1);a.cueStartTime=e,e===r&&(r+=1e-4),n=new u(e,r,st(l.trim())),s>=16?s--:s++,navigator.userAgent.match(/Firefox\//)?n.line=d+1:n.line=d>7?d-2:d+1,n.align="left",n.position=Math.max(0,Math.min(100,100*(s/32)+(navigator.userAgent.match(/Firefox\//)?50:0))),t.addCue(n)}}function ut(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function dt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ct(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function ft(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function ht(t){if(t&&t.cues)for(;t.cues.length>0;)t.removeCue(t.cues[0])}function pt(t,e){return t&&t.label===e.name&&!(t.textTrack1||t.textTrack2)}function gt(t,e,r,i){return Math.min(e,i)-Math.max(t,r)}function vt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function yt(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function bt(t){for(var e=[],r=0;r<t.length;r++)"subtitles"===t[r].kind&&e.push(t[r]);return e}function Et(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Tt(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function Rt(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function St(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var At={};r.d(At,"newCue",function(){return lt});var wt=r(5),_t=r.n(wt),Lt=r(1),kt=r(2),Dt=r(0),It="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ot=function(){function t(e){i(this,t),this.hls=e,this.onEvent=this.onEvent.bind(this);for(var r=arguments.length,a=Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];this.handledEvents=a,this.useGenericHandler=!0,this.registerListeners()}return t.prototype.destroy=function(){this.unregisterListeners()},t.prototype.isEventHandler=function(){return"object"===It(this.handledEvents)&&this.handledEvents.length&&"function"==typeof this.onEvent},t.prototype.registerListeners=function(){this.isEventHandler()&&this.handledEvents.forEach(function(t){if("hlsEventGeneric"===t)throw new Error("Forbidden event name: "+t);this.hls.on(t,this.onEvent)},this)},t.prototype.unregisterListeners=function(){this.isEventHandler()&&this.handledEvents.forEach(function(t){this.hls.off(t,this.onEvent)},this)},t.prototype.onEvent=function(t,e){this.onEventGeneric(t,e)},t.prototype.onEventGeneric=function(t,e){var r=function(t,e){var r="on"+t.replace("hls","");if("function"!=typeof this[r])throw new Error("Event "+t+" has no generic handler in this "+this.constructor.name+" class (tried "+r+")");return this[r].bind(this,e)};try{r.call(this,t,e).call()}catch(e){Dt.b.error("internal error happened while processing "+t+":"+e.message),this.hls.trigger(Lt.a.ERROR,{type:kt.b.OTHER_ERROR,details:kt.a.INTERNAL_EXCEPTION,fatal:!1,event:t,err:e})}},t}(),Ct=Ot,xt=/^(\d+)x(\d+)$/,Pt=/\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,Ft=function(){function t(e){a(this,t),"string"==typeof e&&(e=t.parseAttrList(e));for(var r in e)e.hasOwnProperty(r)&&(this[r]=e[r])}return t.prototype.decimalInteger=function(t){var e=parseInt(this[t],10);return e>Number.MAX_SAFE_INTEGER?1/0:e},t.prototype.hexadecimalInteger=function(t){if(this[t]){var e=(this[t]||"0x").slice(2);e=(1&e.length?"0":"")+e;for(var r=new Uint8Array(e.length/2),i=0;i<e.length/2;i++)r[i]=parseInt(e.slice(2*i,2*i+2),16);return r}return null},t.prototype.hexadecimalIntegerAsNumber=function(t){var e=parseInt(this[t],16);return e>Number.MAX_SAFE_INTEGER?1/0:e},t.prototype.decimalFloatingPoint=function(t){return parseFloat(this[t])},t.prototype.enumeratedString=function(t){return this[t]},t.prototype.decimalResolution=function(t){var e=xt.exec(this[t]);if(null!==e)return{width:parseInt(e[1],10),height:parseInt(e[2],10)}},t.parseAttrList=function(t){var e,r={};for(Pt.lastIndex=0;null!==(e=Pt.exec(t));){var i=e[2],a='"';0===i.indexOf(a)&&i.lastIndexOf(a)===i.length-1&&(i=i.slice(1,-1)),r[e[1]]=i}return r},t}(),Nt=Ft,Mt={audio:{a3ds:!0,"ac-3":!0,"ac-4":!0,alac:!0,alaw:!0,dra1:!0,"dts+":!0,"dts-":!0,dtsc:!0,dtse:!0,dtsh:!0,"ec-3":!0,enca:!0,g719:!0,g726:!0,m4ae:!0,mha1:!0,mha2:!0,mhm1:!0,mhm2:!0,mlpa:!0,mp4a:!0,"raw ":!0,Opus:!0,samr:!0,sawb:!0,sawp:!0,sevc:!0,sqcp:!0,ssmv:!0,twos:!0,ulaw:!0},video:{avc1:!0,avc2:!0,avc3:!0,avc4:!0,avcp:!0,drac:!0,dvav:!0,dvhe:!0,encv:!0,hev1:!0,hvc1:!0,mjp2:!0,mp4v:!0,mvc1:!0,mvc2:!0,mvc3:!0,mvc4:!0,resv:!0,rv60:!0,s263:!0,svc1:!0,svc2:!0,"vc-1":!0,vp08:!0,vp09:!0}},Ut=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),Bt=/#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,Gt=/#EXT-X-MEDIA:(.*)/g,jt=new RegExp([/#EXTINF:(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,/|(?!#)(\S+)/.source,/|#EXT-X-BYTERANGE:*(.+)/.source,/|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,/|#.*/.source].join(""),"g"),Kt=/(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,Ht=function(){function t(){u(this,t),this.method=null,this.key=null,this.iv=null,this._uri=null}return Ut(t,[{key:"uri",get:function(){return!this._uri&&this.reluri&&(this._uri=_t.a.buildAbsoluteURL(this.baseuri,this.reluri,{alwaysNormalize:!0})),this._uri}}]),t}(),Wt=function(){function t(){u(this,t),this._url=null,this._byteRange=null,this._decryptdata=null,this.tagList=[]}return t.prototype.createInitializationVector=function(t){for(var e=new Uint8Array(16),r=12;r<16;r++)e[r]=t>>8*(15-r)&255;return e},t.prototype.fragmentDecryptdataFromLevelkey=function(t,e){var r=t;return t&&t.method&&t.uri&&!t.iv&&(r=new Ht,r.method=t.method,r.baseuri=t.baseuri,r.reluri=t.reluri,r.iv=this.createInitializationVector(e)),r},t.prototype.cloneObj=function(t){return JSON.parse(JSON.stringify(t))},Ut(t,[{key:"url",get:function(){return!this._url&&this.relurl&&(this._url=_t.a.buildAbsoluteURL(this.baseurl,this.relurl,{alwaysNormalize:!0})),this._url},set:function(t){this._url=t}},{key:"programDateTime",get:function(){return!this._programDateTime&&this.rawProgramDateTime&&(this._programDateTime=new Date(Date.parse(this.rawProgramDateTime))),this._programDateTime}},{key:"byteRange",get:function(){if(!this._byteRange){var t=this._byteRange=[];if(this.rawByteRange){var e=this.rawByteRange.split("@",2);if(1===e.length){var r=this.lastByteRangeEndOffset;t[0]=r?r:0}else t[0]=parseInt(e[1]);t[1]=parseInt(e[0])+t[0]}}return this._byteRange}},{key:"byteRangeStartOffset",get:function(){return this.byteRange[0]}},{key:"byteRangeEndOffset",get:function(){return this.byteRange[1]}},{key:"decryptdata",
get:function(){return this._decryptdata||(this._decryptdata=this.fragmentDecryptdataFromLevelkey(this.levelkey,this.sn)),this._decryptdata}}]),t}(),Vt=function(t){function e(r){u(this,e);var i=s(this,t.call(this,r,Lt.a.MANIFEST_LOADING,Lt.a.LEVEL_LOADING,Lt.a.AUDIO_TRACK_LOADING,Lt.a.SUBTITLE_TRACK_LOADING));return i.loaders={},i}return l(e,t),e.prototype.destroy=function(){for(var t in this.loaders){var e=this.loaders[t];e&&e.destroy()}this.loaders={},Ct.prototype.destroy.call(this)},e.prototype.onManifestLoading=function(t){this.load(t.url,{type:"manifest"})},e.prototype.onLevelLoading=function(t){this.load(t.url,{type:"level",level:t.level,id:t.id})},e.prototype.onAudioTrackLoading=function(t){this.load(t.url,{type:"audioTrack",id:t.id})},e.prototype.onSubtitleTrackLoading=function(t){this.load(t.url,{type:"subtitleTrack",id:t.id})},e.prototype.load=function(t,e){var r=this.loaders[e.type];if(r){var i=r.context;if(i&&i.url===t)return void Dt.b.trace("playlist request ongoing");Dt.b.warn("abort previous loader for type:"+e.type),r.abort()}var a=this.hls.config,n=void 0,o=void 0,s=void 0,l=void 0;"manifest"===e.type?(n=a.manifestLoadingMaxRetry,o=a.manifestLoadingTimeOut,s=a.manifestLoadingRetryDelay,l=a.manifestLoadingMaxRetryTimeout):(n=a.levelLoadingMaxRetry,o=a.levelLoadingTimeOut,s=a.levelLoadingRetryDelay,l=a.levelLoadingMaxRetryTimeout,Dt.b.log("loading playlist for "+e.type+" "+(e.level||e.id))),r=this.loaders[e.type]=e.loader="undefined"!=typeof a.pLoader?new a.pLoader(a):new a.loader(a),e.url=t,e.responseType="";var u=void 0,d=void 0;u={timeout:o,maxRetry:n,retryDelay:s,maxRetryDelay:l},d={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)},r.load(e,u,d)},e.prototype.resolve=function(t,e){return _t.a.buildAbsoluteURL(e,t,{alwaysNormalize:!0})},e.prototype.parseMasterPlaylist=function(t,e){function r(t,e){["video","audio"].forEach(function(r){var i=t.filter(function(t){return n(t,r)});if(i.length){var a=i.filter(function(t){return 0===t.lastIndexOf("avc1",0)||0===t.lastIndexOf("mp4a",0)});e[r+"Codec"]=a.length>0?a[0]:i[0],t=t.filter(function(t){return i.indexOf(t)===-1})}}),e.unknownCodecs=t}var i=[],a=void 0;for(Bt.lastIndex=0;null!=(a=Bt.exec(t));){var o={},s=o.attrs=new Nt(a[1]);o.url=this.resolve(a[2],e);var l=s.decimalResolution("RESOLUTION");l&&(o.width=l.width,o.height=l.height),o.bitrate=s.decimalInteger("AVERAGE-BANDWIDTH")||s.decimalInteger("BANDWIDTH"),o.name=s.NAME,r([].concat((s.CODECS||"").split(/[ ,]+/)),o),o.videoCodec&&o.videoCodec.indexOf("avc1")!==-1&&(o.videoCodec=this.avc1toavcoti(o.videoCodec)),i.push(o)}return i},e.prototype.parseMasterPlaylistMedia=function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=void 0,n=[],o=0;for(Gt.lastIndex=0;null!=(a=Gt.exec(t));){var s={},l=new Nt(a[1]);l.TYPE===r&&(s.groupId=l["GROUP-ID"],s.name=l.NAME,s.type=r,s.default="YES"===l.DEFAULT,s.autoselect="YES"===l.AUTOSELECT,s.forced="YES"===l.FORCED,l.URI&&(s.url=this.resolve(l.URI,e)),s.lang=l.LANGUAGE,s.name||(s.name=s.lang),i&&(s.audioCodec=i),s.id=o++,n.push(s))}return n},e.prototype.avc1toavcoti=function(t){var e,r=t.split(".");return r.length>2?(e=r.shift()+".",e+=parseInt(r.shift()).toString(16),e+=("000"+parseInt(r.shift()).toString(16)).substr(-4)):e=t,e},e.prototype.parseLevelPlaylist=function(t,e,r,i){var a,n,o=0,s=0,l={type:null,version:null,url:e,fragments:[],live:!0,startSN:0},u=new Ht,d=0,c=null,f=new Wt;for(jt.lastIndex=0;null!==(a=jt.exec(t));){var h=a[1];if(h){f.duration=parseFloat(h);var p=(" "+a[2]).slice(1);f.title=p?p:null,f.tagList.push(p?["INF",h,p]:["INF",h])}else if(a[3]){if(!isNaN(f.duration)){var g=o++;f.type=i,f.start=s,f.levelkey=u,f.sn=g,f.level=r,f.cc=d,f.baseurl=e,f.relurl=(" "+a[3]).slice(1),l.fragments.push(f),c=f,s+=f.duration,f=new Wt}}else if(a[4]){if(f.rawByteRange=(" "+a[4]).slice(1),c){var v=c.byteRangeEndOffset;v&&(f.lastByteRangeEndOffset=v)}}else if(a[5])f.rawProgramDateTime=(" "+a[5]).slice(1),f.tagList.push(["PROGRAM-DATE-TIME",f.rawProgramDateTime]),void 0===l.programDateTime&&(l.programDateTime=new Date(new Date(Date.parse(a[5]))-1e3*s));else{for(a=a[0].match(Kt),n=1;n<a.length&&void 0===a[n];n++);var m=(" "+a[n+1]).slice(1),y=(" "+a[n+2]).slice(1);switch(a[n]){case"#":f.tagList.push(y?[m,y]:[m]);break;case"PLAYLIST-TYPE":l.type=m.toUpperCase();break;case"MEDIA-SEQUENCE":o=l.startSN=parseInt(m);break;case"TARGETDURATION":l.targetduration=parseFloat(m);break;case"VERSION":l.version=parseInt(m);break;case"EXTM3U":break;case"ENDLIST":l.live=!1;break;case"DIS":d++,f.tagList.push(["DIS"]);break;case"DISCONTINUITY-SEQ":d=parseInt(m);break;case"KEY":var b=m,E=new Nt(b),T=E.enumeratedString("METHOD"),R=E.URI,S=E.hexadecimalInteger("IV");T&&(u=new Ht,R&&["AES-128","SAMPLE-AES"].indexOf(T)>=0&&(u.method=T,u.baseuri=e,u.reluri=R,u.key=null,u.iv=S));break;case"START":var A=m,w=new Nt(A),_=w.decimalFloatingPoint("TIME-OFFSET");isNaN(_)||(l.startTimeOffset=_);break;case"MAP":var L=new Nt(m);f.relurl=L.URI,f.rawByteRange=L.BYTERANGE,f.baseurl=e,f.level=r,f.type=i,f.sn="initSegment",l.initSegment=f,f=new Wt;break;default:Dt.b.warn("line parsed but not handled: "+a)}}}return f=c,f&&!f.relurl&&(l.fragments.pop(),s-=f.duration),l.totalduration=s,l.averagetargetduration=s/l.fragments.length,l.endSN=o-1,l.startCC=l.fragments[0]?l.fragments[0].cc:0,l.endCC=d,l},e.prototype.loadsuccess=function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=t.data,n=t.url,o=r.type,s=r.id,l=r.level,u=this.hls;if(this.loaders[o]=void 0,void 0!==n&&0!==n.indexOf("data:")||(n=r.url),e.tload=performance.now(),0===a.indexOf("#EXTM3U"))if(a.indexOf("#EXTINF:")>0){var d="audioTrack"!==o&&"subtitleTrack"!==o,c=isNaN(l)?isNaN(s)?0:s:l,f=this.parseLevelPlaylist(a,n,c,"audioTrack"===o?"audio":"subtitleTrack"===o?"subtitle":"main");f.tload=e.tload,"manifest"===o&&u.trigger(Lt.a.MANIFEST_LOADED,{levels:[{url:n,details:f}],audioTracks:[],url:n,stats:e,networkDetails:i}),e.tparsed=performance.now(),f.targetduration?d?u.trigger(Lt.a.LEVEL_LOADED,{details:f,level:l||0,id:s||0,stats:e,networkDetails:i}):"audioTrack"===o?u.trigger(Lt.a.AUDIO_TRACK_LOADED,{details:f,id:s,stats:e,networkDetails:i}):"subtitleTrack"===o&&u.trigger(Lt.a.SUBTITLE_TRACK_LOADED,{details:f,id:s,stats:e,networkDetails:i}):u.trigger(Lt.a.ERROR,{type:kt.b.NETWORK_ERROR,details:kt.a.MANIFEST_PARSING_ERROR,fatal:!0,url:n,reason:"invalid targetduration",networkDetails:i})}else{var h=this.parseMasterPlaylist(a,n);if(h.length){var p=this.parseMasterPlaylistMedia(a,n,"AUDIO",h[0].audioCodec),g=this.parseMasterPlaylistMedia(a,n,"SUBTITLES");if(p.length){var v=!1;p.forEach(function(t){t.url||(v=!0)}),v===!1&&h[0].audioCodec&&!h[0].attrs.AUDIO&&(Dt.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),p.unshift({type:"main",name:"main"}))}u.trigger(Lt.a.MANIFEST_LOADED,{levels:h,audioTracks:p,subtitles:g,url:n,stats:e,networkDetails:i})}else u.trigger(Lt.a.ERROR,{type:kt.b.NETWORK_ERROR,details:kt.a.MANIFEST_PARSING_ERROR,fatal:!0,url:n,reason:"no level found in manifest",networkDetails:i})}else u.trigger(Lt.a.ERROR,{type:kt.b.NETWORK_ERROR,details:kt.a.MANIFEST_PARSING_ERROR,fatal:!0,url:n,reason:"no EXTM3U delimiter",networkDetails:i})},e.prototype.loaderror=function(t,e){var r,i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=e.loader;switch(e.type){case"manifest":r=kt.a.MANIFEST_LOAD_ERROR,i=!0;break;case"level":r=kt.a.LEVEL_LOAD_ERROR,i=!1;break;case"audioTrack":r=kt.a.AUDIO_TRACK_LOAD_ERROR,i=!1}n&&(n.abort(),this.loaders[e.type]=void 0),this.hls.trigger(Lt.a.ERROR,{type:kt.b.NETWORK_ERROR,details:r,fatal:i,url:n.url,loader:n,response:t,context:e,networkDetails:a})},e.prototype.loadtimeout=function(t,e){var r,i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=e.loader;switch(e.type){case"manifest":r=kt.a.MANIFEST_LOAD_TIMEOUT,i=!0;break;case"level":r=kt.a.LEVEL_LOAD_TIMEOUT,i=!1;break;case"audioTrack":r=kt.a.AUDIO_TRACK_LOAD_TIMEOUT,i=!1}n&&(n.abort(),this.loaders[e.type]=void 0),this.hls.trigger(Lt.a.ERROR,{type:kt.b.NETWORK_ERROR,details:r,fatal:i,url:n.url,loader:n,context:e,networkDetails:a})},e}(Ct),qt=Vt,Yt=function(t){function e(r){d(this,e);var i=c(this,t.call(this,r,Lt.a.FRAG_LOADING));return i.loaders={},i}return f(e,t),e.prototype.destroy=function(){var t=this.loaders;for(var e in t){var r=t[e];r&&r.destroy()}this.loaders={},Ct.prototype.destroy.call(this)},e.prototype.onFragLoading=function(t){var e=t.frag,r=e.type,i=this.loaders[r],a=this.hls.config;e.loaded=0,i&&(Dt.b.warn("abort previous fragment loader for type:"+r),i.abort()),i=this.loaders[r]=e.loader="undefined"!=typeof a.fLoader?new a.fLoader(a):new a.loader(a);var n=void 0,o=void 0,s=void 0;n={url:e.url,frag:e,responseType:"arraybuffer",progressData:!1};var l=e.byteRangeStartOffset,u=e.byteRangeEndOffset;isNaN(l)||isNaN(u)||(n.rangeStart=l,n.rangeEnd=u),o={timeout:a.fragLoadingTimeOut,maxRetry:0,retryDelay:0,maxRetryDelay:a.fragLoadingMaxRetryTimeout},s={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this),onProgress:this.loadprogress.bind(this)},i.load(n,o,s)},e.prototype.loadsuccess=function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=t.data,n=r.frag;n.loader=void 0,this.loaders[n.type]=void 0,this.hls.trigger(Lt.a.FRAG_LOADED,{payload:a,frag:n,stats:e,networkDetails:i})},e.prototype.loaderror=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=e.loader;i&&i.abort(),this.loaders[e.type]=void 0,this.hls.trigger(Lt.a.ERROR,{type:kt.b.NETWORK_ERROR,details:kt.a.FRAG_LOAD_ERROR,fatal:!1,frag:e.frag,response:t,networkDetails:r})},e.prototype.loadtimeout=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=e.loader;i&&i.abort(),this.loaders[e.type]=void 0,this.hls.trigger(Lt.a.ERROR,{type:kt.b.NETWORK_ERROR,details:kt.a.FRAG_LOAD_TIMEOUT,fatal:!1,frag:e.frag,networkDetails:r})},e.prototype.loadprogress=function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,a=e.frag;a.loaded=t.loaded,this.hls.trigger(Lt.a.FRAG_LOAD_PROGRESS,{frag:a,stats:t,networkDetails:i})},e}(Ct),zt=Yt,Xt=function(t){function e(r){h(this,e);var i=p(this,t.call(this,r,Lt.a.KEY_LOADING));return i.loaders={},i.decryptkey=null,i.decrypturl=null,i}return g(e,t),e.prototype.destroy=function(){for(var t in this.loaders){var e=this.loaders[t];e&&e.destroy()}this.loaders={},Ct.prototype.destroy.call(this)},e.prototype.onKeyLoading=function(t){var e=t.frag,r=e.type,i=this.loaders[r],a=e.decryptdata,n=a.uri;if(n!==this.decrypturl||null===this.decryptkey){var o=this.hls.config;i&&(Dt.b.warn("abort previous key loader for type:"+r),i.abort()),e.loader=this.loaders[r]=new o.loader(o),this.decrypturl=n,this.decryptkey=null;var s=void 0,l=void 0,u=void 0;s={url:n,frag:e,responseType:"arraybuffer"},l={timeout:o.fragLoadingTimeOut,maxRetry:o.fragLoadingMaxRetry,retryDelay:o.fragLoadingRetryDelay,maxRetryDelay:o.fragLoadingMaxRetryTimeout},u={onSuccess:this.loadsuccess.bind(this),onError:this.loaderror.bind(this),onTimeout:this.loadtimeout.bind(this)},e.loader.load(s,l,u)}else this.decryptkey&&(a.key=this.decryptkey,this.hls.trigger(Lt.a.KEY_LOADED,{frag:e}))},e.prototype.loadsuccess=function(t,e,r){var i=r.frag;this.decryptkey=i.decryptdata.key=new Uint8Array(t.data),i.loader=void 0,this.loaders[i.type]=void 0,this.hls.trigger(Lt.a.KEY_LOADED,{frag:i})},e.prototype.loaderror=function(t,e){var r=e.frag,i=r.loader;i&&i.abort(),this.loaders[e.type]=void 0,this.hls.trigger(Lt.a.ERROR,{type:kt.b.NETWORK_ERROR,details:kt.a.KEY_LOAD_ERROR,fatal:!1,frag:r,response:t})},e.prototype.loadtimeout=function(t,e){var r=e.frag,i=r.loader;i&&i.abort(),this.loaders[e.type]=void 0,this.hls.trigger(Lt.a.ERROR,{type:kt.b.NETWORK_ERROR,details:kt.a.KEY_LOAD_TIMEOUT,fatal:!1,frag:r})},e}(Ct),Qt=Xt,Jt={search:function(t,e){for(var r=0,i=t.length-1,a=null,n=null;r<=i;){a=(r+i)/2|0,n=t[a];var o=e(n);if(o>0)r=a+1;else{if(!(o<0))return n;i=a-1}}return null}},$t=Jt,Zt={isBuffered:function(t,e){if(t)for(var r=t.buffered,i=0;i<r.length;i++)if(e>=r.start(i)&&e<=r.end(i))return!0;return!1},bufferInfo:function(t,e,r){if(t){var i,a=t.buffered,n=[];for(i=0;i<a.length;i++)n.push({start:a.start(i),end:a.end(i)});return this.bufferedInfo(n,e,r)}return{len:0,start:e,end:e,nextStart:void 0}},bufferedInfo:function(t,e,r){var i,a,n,o,s,l=[];for(t.sort(function(t,e){var r=t.start-e.start;return r?r:e.end-t.end}),s=0;s<t.length;s++){var u=l.length;if(u){var d=l[u-1].end;t[s].start-d<r?t[s].end>d&&(l[u-1].end=t[s].end):l.push(t[s])}else l.push(t[s])}for(s=0,i=0,a=n=e;s<l.length;s++){var c=l[s].start,f=l[s].end;if(e+r>=c&&e<f)a=c,n=f,i=n-e;else if(e+r<c){o=c;break}}return{len:i,start:a,end:n,nextStart:o}}},te=Zt,ee=r(6),re=r(4),ie=r.n(re),ae=r(8),ne=r.n(ae),oe=function(){function t(e,r){v(this,t),this.hls=e,this.id=r;var i=this.observer=new ie.a,a=e.config;i.trigger=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];i.emit.apply(i,[t,t].concat(r))},i.off=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),a=1;a<e;a++)r[a-1]=arguments[a];i.removeListener.apply(i,[t].concat(r))};var n=function(t,r){r=r||{},r.frag=this.frag,r.id=this.id,e.trigger(t,r)}.bind(this);i.on(Lt.a.FRAG_DECRYPTED,n),i.on(Lt.a.FRAG_PARSING_INIT_SEGMENT,n),i.on(Lt.a.FRAG_PARSING_DATA,n),i.on(Lt.a.FRAG_PARSED,n),i.on(Lt.a.ERROR,n),i.on(Lt.a.FRAG_PARSING_METADATA,n),i.on(Lt.a.FRAG_PARSING_USERDATA,n),i.on(Lt.a.INIT_PTS_FOUND,n);var o={mp4:MediaSource.isTypeSupported("video/mp4"),mpeg:MediaSource.isTypeSupported("audio/mpeg"),mp3:MediaSource.isTypeSupported('audio/mp4; codecs="mp3"')},s=navigator.vendor;if(a.enableWorker&&"undefined"!=typeof Worker){Dt.b.log("demuxing in webworker");var l=void 0;try{l=this.w=ne()(9),this.onwmsg=this.onWorkerMessage.bind(this),l.addEventListener("message",this.onwmsg),l.onerror=function(t){e.trigger(Lt.a.ERROR,{type:kt.b.OTHER_ERROR,details:kt.a.INTERNAL_EXCEPTION,fatal:!0,event:"demuxerWorker",err:{message:t.message+" ("+t.filename+":"+t.lineno+")"}})},l.postMessage({cmd:"init",typeSupported:o,vendor:s,id:r,config:JSON.stringify(a)})}catch(t){Dt.b.error("error while initializing DemuxerWorker, fallback on DemuxerInline"),l&&URL.revokeObjectURL(l.objectURL),this.demuxer=new ee.a(i,o,a,s),this.w=void 0}}else this.demuxer=new ee.a(i,o,a,s)}return t.prototype.destroy=function(){var t=this.w;if(t)t.removeEventListener("message",this.onwmsg),t.terminate(),this.w=null;else{var e=this.demuxer;e&&(e.destroy(),this.demuxer=null)}var r=this.observer;r&&(r.removeAllListeners(),this.observer=null)},t.prototype.push=function(t,e,r,i,a,n,o,s){var l=this.w,u=isNaN(a.startDTS)?a.start:a.startDTS,d=a.decryptdata,c=this.frag,f=!(c&&a.cc===c.cc),h=!(c&&a.level===c.level),p=c&&a.sn===c.sn+1,g=!h&&p;if(f&&Dt.b.log(this.id+":discontinuity detected"),h&&Dt.b.log(this.id+":switch detected"),this.frag=a,l)l.postMessage({cmd:"demux",data:t,decryptdata:d,initSegment:e,audioCodec:r,videoCodec:i,timeOffset:u,discontinuity:f,trackSwitch:h,contiguous:g,duration:n,accurateTimeOffset:o,defaultInitPTS:s},[t]);else{var v=this.demuxer;v&&v.push(t,d,e,r,i,u,f,h,g,n,o,s)}},t.prototype.onWorkerMessage=function(t){var e=t.data,r=this.hls;switch(e.event){case"init":URL.revokeObjectURL(this.w.objectURL);break;case Lt.a.FRAG_PARSING_DATA:e.data.data1=new Uint8Array(e.data1),e.data2&&(e.data.data2=new Uint8Array(e.data2));default:e.data=e.data||{},e.data.frag=this.frag,e.data.id=this.id,r.trigger(e.event,e.data)}},t}(),se=oe,le={toString:function(t){for(var e="",r=t.length,i=0;i<r;i++)e+="["+t.start(i).toFixed(3)+","+t.end(i).toFixed(3)+"]";return e}},ue=le,de=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),ce={STOPPED:"STOPPED",IDLE:"IDLE",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_LEVEL:"WAITING_LEVEL",PARSING:"PARSING",PARSED:"PARSED",BUFFER_FLUSHING:"BUFFER_FLUSHING",ENDED:"ENDED",ERROR:"ERROR"},fe=function(t){function e(r){_(this,e);var i=L(this,t.call(this,r,Lt.a.MEDIA_ATTACHED,Lt.a.MEDIA_DETACHING,Lt.a.MANIFEST_LOADING,Lt.a.MANIFEST_PARSED,Lt.a.LEVEL_LOADED,Lt.a.KEY_LOADED,Lt.a.FRAG_LOADED,Lt.a.FRAG_LOAD_EMERGENCY_ABORTED,Lt.a.FRAG_PARSING_INIT_SEGMENT,Lt.a.FRAG_PARSING_DATA,Lt.a.FRAG_PARSED,Lt.a.ERROR,Lt.a.AUDIO_TRACK_SWITCHING,Lt.a.AUDIO_TRACK_SWITCHED,Lt.a.BUFFER_CREATED,Lt.a.BUFFER_APPENDED,Lt.a.BUFFER_FLUSHED));return i.config=r.config,i.audioCodecSwap=!1,i.ticks=0,i._state=ce.STOPPED,i.ontick=i.tick.bind(i),i}return k(e,t),e.prototype.destroy=function(){this.stopLoad(),this.timer&&(clearInterval(this.timer),this.timer=null),Ct.prototype.destroy.call(this),this.state=ce.STOPPED},e.prototype.startLoad=function(t){if(this.levels){var e=this.lastCurrentTime,r=this.hls;if(this.stopLoad(),this.timer||(this.timer=setInterval(this.ontick,100)),this.level=-1,this.fragLoadError=0,!this.startFragRequested){var i=r.startLevel;i===-1&&(i=0,this.bitrateTest=!0),this.level=r.nextLoadLevel=i,this.loadedmetadata=!1}e>0&&t===-1&&(Dt.b.log("override startPosition with lastCurrentTime @"+e.toFixed(3)),t=e),this.state=ce.IDLE,this.nextLoadPosition=this.startPosition=this.lastCurrentTime=t,this.tick()}else this.forceStartLoad=!0,this.state=ce.STOPPED},e.prototype.stopLoad=function(){var t=this.fragCurrent;t&&(t.loader&&t.loader.abort(),this.fragCurrent=null),this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=ce.STOPPED,this.forceStartLoad=!1},e.prototype.tick=function(){this.ticks++,1===this.ticks&&(this.doTick(),this.ticks>1&&setTimeout(this.tick,1),this.ticks=0)},e.prototype.doTick=function(){switch(this.state){case ce.ERROR:break;case ce.BUFFER_FLUSHING:this.fragLoadError=0;break;case ce.IDLE:this._doTickIdle();break;case ce.WAITING_LEVEL:var t=this.levels[this.level];t&&t.details&&(this.state=ce.IDLE);break;case ce.FRAG_LOADING_WAITING_RETRY:var e=performance.now(),r=this.retryDate;(!r||e>=r||this.media&&this.media.seeking)&&(Dt.b.log("mediaController: retryDate reached, switch back to IDLE state"),this.state=ce.IDLE);break;case ce.ERROR:case ce.STOPPED:case ce.FRAG_LOADING:case ce.PARSING:case ce.PARSED:case ce.ENDED:}this._checkBuffer(),this._checkFragmentChanged()},e.prototype._doTickIdle=function(){var t=this.hls,e=t.config,r=this.media;if(void 0!==this.levelLastLoaded&&(r||!this.startFragRequested&&e.startFragPrefetch)){var i=void 0;i=this.loadedmetadata?r.currentTime:this.nextLoadPosition;var a=t.nextLoadLevel,n=this.levels[a];if(n){var o=n.bitrate,s=void 0;s=o?Math.max(8*e.maxBufferSize/o,e.maxBufferLength):e.maxBufferLength,s=Math.min(s,e.maxMaxBufferLength);var l=te.bufferInfo(this.mediaBuffer?this.mediaBuffer:r,i,e.maxBufferHole),u=l.len;if(!(u>=s)){Dt.b.trace("buffer length of "+u.toFixed(3)+" is below max of "+s.toFixed(3)+". checking for more payload ..."),this.level=t.nextLoadLevel=a;var d=n.details;if("undefined"==typeof d||d.live&&this.levelLastLoaded!==a)return void(this.state=ce.WAITING_LEVEL);var c=this.fragPrevious;if(!d.live&&c&&!c.backtracked&&c.sn===d.endSN&&!l.nextStart){var f=Math.min(r.duration,c.start+c.duration);if(f-Math.max(l.end,c.start)<=Math.max(.2,c.duration)){var h={};return this.altAudio&&(h.type="video"),this.hls.trigger(Lt.a.BUFFER_EOS,h),void(this.state=ce.ENDED)}}this._fetchPayloadOrEos(i,l,d)}}}},e.prototype._fetchPayloadOrEos=function(t,e,r){var i=this.fragPrevious,a=this.level,n=r.fragments,o=n.length;if(0!==o){var s=n[0].start,l=n[o-1].start+n[o-1].duration,u=e.end,d=void 0;if(r.initSegment&&!r.initSegment.data)d=r.initSegment;else if(r.live){var c=this.config.initialLiveManifestSize;if(o<c)return void Dt.b.warn("Can not start playback of a level, reason: not enough fragments "+o+" < "+c);if(d=this._ensureFragmentAtLivePoint(r,u,s,l,i,n,o),null===d)return}else u<s&&(d=n[0]);d||(d=this._findFragment(s,i,o,n,u,l,r)),d&&this._loadFragmentOrKey(d,a,r,t,u)}},e.prototype._ensureFragmentAtLivePoint=function(t,e,r,i,a,n,o){var s=this.hls.config,l=this.media,u=void 0,d=void 0!==s.liveMaxLatencyDuration?s.liveMaxLatencyDuration:s.liveMaxLatencyDurationCount*t.targetduration;if(e<Math.max(r-s.maxFragLookUpTolerance,i-d)){var c=this.liveSyncPosition=this.computeLivePosition(r,t);Dt.b.log("buffer end: "+e.toFixed(3)+" is located too far from the end of live sliding playlist, reset currentTime to : "+c.toFixed(3)),e=c,l&&l.readyState&&l.duration>c&&(l.currentTime=c),this.nextLoadPosition=c}if(t.PTSKnown&&e>i&&l&&l.readyState)return null;if(this.startFragRequested&&!t.PTSKnown){if(a){var f=a.sn+1;if(f>=t.startSN&&f<=t.endSN){var h=n[f-t.startSN];a.cc===h.cc&&(u=h,Dt.b.log("live playlist, switching playlist, load frag with next SN: "+u.sn))}u||(u=$t.search(n,function(t){return a.cc-t.cc}),u&&Dt.b.log("live playlist, switching playlist, load frag with same CC: "+u.sn))}u||(u=n[Math.min(o-1,Math.round(o/2))],Dt.b.log("live playlist, switching playlist, unknown, load middle frag : "+u.sn))}return u},e.prototype._findFragment=function(t,e,r,i,a,n,o){var s=this.hls.config,l=void 0,u=void 0,d=s.maxFragLookUpTolerance,c=e?i[e.sn-i[0].sn+1]:void 0,f=function(t){var e=Math.min(d,t.duration+(t.deltaPTS?t.deltaPTS:0));return t.start+t.duration-e<=a?1:t.start-e>a&&t.start?-1:0};if(a<n?(a>n-d&&(d=0),u=c&&!f(c)?c:$t.search(i,f)):u=i[r-1],u){l=u;var h=l.sn-o.startSN,p=e&&l.level===e.level,g=i[h-1],v=i[h+1];if(e&&l.sn===e.sn)if(p&&!l.backtracked)if(l.sn<o.endSN){var m=e.deltaPTS;m&&m>s.maxBufferHole&&e.dropped&&h?(l=g,Dt.b.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this"),e.loadCounter--):(l=v,Dt.b.log("SN just loaded, load next one: "+l.sn))}else l=null;else l.backtracked&&(v&&v.backtracked?(Dt.b.warn("Already backtracked from fragment "+v.sn+", will not backtrack to fragment "+l.sn+". Loading fragment "+v.sn),l=v):(Dt.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),l.dropped=0,g?(g.loadCounter&&g.loadCounter--,l=g,l.backtracked=!0):h&&(l=null)))}return l},e.prototype._loadFragmentOrKey=function(t,e,r,i,a){var n=this.hls,o=n.config;if(!t.decryptdata||null==t.decryptdata.uri||null!=t.decryptdata.key){if(Dt.b.log("Loading "+t.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+e+", currentTime:"+i.toFixed(3)+",bufferEnd:"+a.toFixed(3)),void 0!==this.fragLoadIdx?this.fragLoadIdx++:this.fragLoadIdx=0,t.loadCounter){t.loadCounter++;var s=o.fragLoadingLoopThreshold;if(t.loadCounter>s&&Math.abs(this.fragLoadIdx-t.loadIdx)<s)return void n.trigger(Lt.a.ERROR,{type:kt.b.MEDIA_ERROR,details:kt.a.FRAG_LOOP_LOADING_ERROR,fatal:!1,frag:t})}else t.loadCounter=1;return t.loadIdx=this.fragLoadIdx,t.autoLevel=n.autoLevelEnabled,t.bitrateTest=this.bitrateTest,this.fragCurrent=t,this.startFragRequested=!0,isNaN(t.sn)||t.bitrateTest||(this.nextLoadPosition=t.start+t.duration),n.trigger(Lt.a.FRAG_LOADING,{frag:t}),this.demuxer||(this.demuxer=new se(n,"main")),void(this.state=ce.FRAG_LOADING)}Dt.b.log("Loading key for "+t.sn+" of ["+r.startSN+" ,"+r.endSN+"],level "+e),this.state=ce.KEY_LOADING,n.trigger(Lt.a.KEY_LOADING,{frag:t})},e.prototype.getBufferedFrag=function(t){return $t.search(this._bufferedFrags,function(e){return t<e.startPTS?-1:t>e.endPTS?1:0})},e.prototype.followingBufferedFrag=function(t){return t?this.getBufferedFrag(t.endPTS+.5):null},e.prototype._checkFragmentChanged=function(){var t,e,r=this.media;if(r&&r.readyState&&r.seeking===!1&&(e=r.currentTime,e>r.playbackRate*this.lastCurrentTime&&(this.lastCurrentTime=e),te.isBuffered(r,e)?t=this.getBufferedFrag(e):te.isBuffered(r,e+.1)&&(t=this.getBufferedFrag(e+.1)),t)){var i=t;if(i!==this.fragPlaying){this.hls.trigger(Lt.a.FRAG_CHANGED,{frag:i});var a=i.level;this.fragPlaying&&this.fragPlaying.level===a||this.hls.trigger(Lt.a.LEVEL_SWITCHED,{level:a}),this.fragPlaying=i}}},e.prototype.immediateLevelSwitch=function(){if(Dt.b.log("immediateLevelSwitch"),!this.immediateSwitch){this.immediateSwitch=!0;var t=this.media,e=void 0;t?(e=t.paused,t.pause()):e=!0,this.previouslyPaused=e}var r=this.fragCurrent;r&&r.loader&&r.loader.abort(),this.fragCurrent=null,void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold),this.flushMainBuffer(0,Number.POSITIVE_INFINITY)},e.prototype.immediateLevelSwitchEnd=function(){var t=this.media;t&&t.buffered.length&&(this.immediateSwitch=!1,te.isBuffered(t,t.currentTime)&&(t.currentTime-=1e-4),this.previouslyPaused||t.play())},e.prototype.nextLevelSwitch=function(){var t=this.media;if(t&&t.readyState){var e=void 0,r=void 0,i=void 0;if(void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold),r=this.getBufferedFrag(t.currentTime),r&&r.startPTS>1&&this.flushMainBuffer(0,r.startPTS-1),t.paused)e=0;else{var a=this.hls.nextLoadLevel,n=this.levels[a],o=this.fragLastKbps;e=o&&this.fragCurrent?this.fragCurrent.duration*n.bitrate/(1e3*o)+1:0}if(i=this.getBufferedFrag(t.currentTime+e),i&&(i=this.followingBufferedFrag(i))){var s=this.fragCurrent;s&&s.loader&&s.loader.abort(),this.fragCurrent=null,this.flushMainBuffer(i.maxStartPTS,Number.POSITIVE_INFINITY)}}},e.prototype.flushMainBuffer=function(t,e){this.state=ce.BUFFER_FLUSHING;var r={startOffset:t,endOffset:e};this.altAudio&&(r.type="video"),this.hls.trigger(Lt.a.BUFFER_FLUSHING,r)},e.prototype.onMediaAttached=function(t){var e=this.media=this.mediaBuffer=t.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvseeked=this.onMediaSeeked.bind(this),this.onvended=this.onMediaEnded.bind(this),e.addEventListener("seeking",this.onvseeking),e.addEventListener("seeked",this.onvseeked),e.addEventListener("ended",this.onvended);var r=this.config;this.levels&&r.autoStartLoad&&this.hls.startLoad(r.startPosition)},e.prototype.onMediaDetaching=function(){var t=this.media;t&&t.ended&&(Dt.b.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var e=this.levels;e&&e.forEach(function(t){t.details&&t.details.fragments.forEach(function(t){t.loadCounter=void 0,t.backtracked=void 0})}),t&&(t.removeEventListener("seeking",this.onvseeking),t.removeEventListener("seeked",this.onvseeked),t.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=null,this.loadedmetadata=!1,this.stopLoad()},e.prototype.onMediaSeeking=function(){var t=this.media,e=t?t.currentTime:void 0,r=this.config;isNaN(e)||Dt.b.log("media seeking to "+e.toFixed(3));var i=this.mediaBuffer?this.mediaBuffer:t,a=te.bufferInfo(i,e,this.config.maxBufferHole);if(this.state===ce.FRAG_LOADING){var n=this.fragCurrent;if(0===a.len&&n){var o=r.maxFragLookUpTolerance,s=n.start-o,l=n.start+n.duration+o;e<s||e>l?(n.loader&&(Dt.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),n.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.state=ce.IDLE):Dt.b.log("seeking outside of buffer but within currently loaded fragment range")}}else this.state===ce.ENDED&&(0===a.len&&(this.fragPrevious=0),this.state=ce.IDLE);t&&(this.lastCurrentTime=e),this.state!==ce.FRAG_LOADING&&void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*r.fragLoadingLoopThreshold),this.loadedmetadata||(this.nextLoadPosition=this.startPosition=e),this.tick()},e.prototype.onMediaSeeked=function(){var t=this.media,e=t?t.currentTime:void 0;isNaN(e)||Dt.b.log("media seeked to "+e.toFixed(3)),this.tick()},e.prototype.onMediaEnded=function(){Dt.b.log("media ended"),this.startPosition=this.lastCurrentTime=0},e.prototype.onManifestLoading=function(){Dt.b.log("trigger BUFFER_RESET"),this.hls.trigger(Lt.a.BUFFER_RESET),this._bufferedFrags=[],this.stalled=!1,this.startPosition=this.lastCurrentTime=0},e.prototype.onManifestParsed=function(t){var e,r=!1,i=!1;t.levels.forEach(function(t){e=t.audioCodec,e&&(e.indexOf("mp4a.40.2")!==-1&&(r=!0),e.indexOf("mp4a.40.5")!==-1&&(i=!0))}),this.audioCodecSwitch=r&&i,this.audioCodecSwitch&&Dt.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),this.levels=t.levels,this.startFragRequested=!1;var a=this.config;(a.autoStartLoad||this.forceStartLoad)&&this.hls.startLoad(a.startPosition)},e.prototype.onLevelLoaded=function(t){var e=t.details,r=t.level,i=this.levels[this.levelLastLoaded],a=this.levels[r],n=e.totalduration,o=0;if(Dt.b.log("level "+r+" loaded ["+e.startSN+","+e.endSN+"],duration:"+n),e.live){var s=a.details;s&&e.fragments.length>0?(b(s,e),o=e.fragments[0].start,this.liveSyncPosition=this.computeLivePosition(o,s),e.PTSKnown&&!isNaN(o)?Dt.b.log("live playlist sliding:"+o.toFixed(3)):(Dt.b.log("live playlist - outdated PTS, unknown sliding"),w(this.fragPrevious,i,e))):(Dt.b.log("live playlist - first load, unknown sliding"),e.PTSKnown=!1,w(this.fragPrevious,i,e))}else e.PTSKnown=!1;if(a.details=e,this.levelLastLoaded=r,this.hls.trigger(Lt.a.LEVEL_UPDATED,{details:e,level:r}),this.startFragRequested===!1){if(this.startPosition===-1||this.lastCurrentTime===-1){var l=e.startTimeOffset;isNaN(l)?e.live?(this.startPosition=this.computeLivePosition(o,e),Dt.b.log("configure startPosition to "+this.startPosition)):this.startPosition=0:(l<0&&(Dt.b.log("negative start time offset "+l+", count from end of last fragment"),l=o+n+l),Dt.b.log("start time offset found in playlist, adjust startPosition to "+l),this.startPosition=l),this.lastCurrentTime=this.startPosition}this.nextLoadPosition=this.startPosition}this.state===ce.WAITING_LEVEL&&(this.state=ce.IDLE),this.tick()},e.prototype.onKeyLoaded=function(){this.state===ce.KEY_LOADING&&(this.state=ce.IDLE,this.tick())},e.prototype.onFragLoaded=function(t){var e=this.fragCurrent,r=t.frag;if(this.state===ce.FRAG_LOADING&&e&&"main"===r.type&&r.level===e.level&&r.sn===e.sn){var i=t.stats,a=this.levels[e.level],n=a.details;if(Dt.b.log("Loaded  "+e.sn+" of ["+n.startSN+" ,"+n.endSN+"],level "+e.level),this.bitrateTest=!1,this.stats=i,r.bitrateTest===!0&&this.hls.nextLoadLevel)this.state=ce.IDLE,this.startFragRequested=!1,i.tparsed=i.tbuffered=performance.now(),this.hls.trigger(Lt.a.FRAG_BUFFERED,{stats:i,frag:e,id:"main"}),this.tick();else if("initSegment"===r.sn)this.state=ce.IDLE,i.tparsed=i.tbuffered=performance.now(),n.initSegment.data=t.payload,this.hls.trigger(Lt.a.FRAG_BUFFERED,{stats:i,frag:e,id:"main"}),this.tick();else{this.state=ce.PARSING;var o=n.totalduration,s=e.level,l=e.sn,u=this.config.defaultAudioCodec||a.audioCodec;this.audioCodecSwap&&(Dt.b.log("swapping playlist audio codec"),void 0===u&&(u=this.lastAudioCodec),u&&(u=u.indexOf("mp4a.40.5")!==-1?"mp4a.40.2":"mp4a.40.5")),this.pendingBuffering=!0,this.appended=!1,Dt.b.log("Parsing "+l+" of ["+n.startSN+" ,"+n.endSN+"],level "+s+", cc "+e.cc);var d=this.demuxer;d||(d=this.demuxer=new se(this.hls,"main"));var c=this.media,f=c&&c.seeking,h=!f&&(n.PTSKnown||!n.live),p=n.initSegment?n.initSegment.data:[];d.push(t.payload,p,u,a.videoCodec,e,o,h,void 0)}}this.fragLoadError=0},e.prototype.onFragParsingInitSegment=function(t){var e=this.fragCurrent,r=t.frag;if(e&&"main"===t.id&&r.sn===e.sn&&r.level===e.level&&this.state===ce.PARSING){var i,a,n=t.tracks;if(n.audio&&this.altAudio&&delete n.audio,a=n.audio){var o=this.levels[this.level].audioCodec,s=navigator.userAgent.toLowerCase();o&&this.audioCodecSwap&&(Dt.b.log("swapping playlist audio codec"),o=o.indexOf("mp4a.40.5")!==-1?"mp4a.40.2":"mp4a.40.5"),this.audioCodecSwitch&&1!==a.metadata.channelCount&&s.indexOf("firefox")===-1&&(o="mp4a.40.5"),s.indexOf("android")!==-1&&"audio/mpeg"!==a.container&&(o="mp4a.40.2",Dt.b.log("Android: force audio codec to "+o)),a.levelCodec=o,a.id=t.id}a=n.video,a&&(a.levelCodec=this.levels[this.level].videoCodec,a.id=t.id),this.hls.trigger(Lt.a.BUFFER_CODECS,n);for(i in n){a=n[i],Dt.b.log("main track:"+i+",container:"+a.container+",codecs[level/parsed]=["+a.levelCodec+"/"+a.codec+"]");
var l=a.initSegment;l&&(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(Lt.a.BUFFER_APPENDING,{type:i,data:l,parent:"main",content:"initSegment"}))}this.tick()}},e.prototype.onFragParsingData=function(t){var e=this,r=this.fragCurrent,i=t.frag;if(r&&"main"===t.id&&i.sn===r.sn&&i.level===r.level&&("audio"!==t.type||!this.altAudio)&&this.state===ce.PARSING){var a=this.levels[this.level],n=r;if(isNaN(t.endPTS)&&(t.endPTS=t.startPTS+r.duration,t.endDTS=t.startDTS+r.duration),Dt.b.log("Parsed "+t.type+",PTS:["+t.startPTS.toFixed(3)+","+t.endPTS.toFixed(3)+"],DTS:["+t.startDTS.toFixed(3)+"/"+t.endDTS.toFixed(3)+"],nb:"+t.nb+",dropped:"+(t.dropped||0)),"video"===t.type)if(n.dropped=t.dropped,n.dropped){if(!n.backtracked)return Dt.b.warn("missing video frame(s), backtracking fragment"),n.backtracked=!0,this.nextLoadPosition=t.startPTS,this.state=ce.IDLE,this.fragPrevious=n,void this.tick();Dt.b.warn("Already backtracked on this fragment, appending with the gap")}else n.backtracked=!1;var o=y(a.details,n,t.startPTS,t.endPTS,t.startDTS,t.endDTS),s=this.hls;s.trigger(Lt.a.LEVEL_PTS_UPDATED,{details:a.details,level:this.level,drift:o,type:t.type,start:t.startPTS,end:t.endPTS}),[t.data1,t.data2].forEach(function(r){r&&r.length&&e.state===ce.PARSING&&(e.appended=!0,e.pendingBuffering=!0,s.trigger(Lt.a.BUFFER_APPENDING,{type:t.type,data:r,parent:"main",content:"data"}))}),this.tick()}},e.prototype.onFragParsed=function(t){var e=this.fragCurrent,r=t.frag;e&&"main"===t.id&&r.sn===e.sn&&r.level===e.level&&this.state===ce.PARSING&&(this.stats.tparsed=performance.now(),this.state=ce.PARSED,this._checkAppendedParsed())},e.prototype.onAudioTrackSwitching=function(t){var e=!!t.url,r=t.id;if(!e){if(this.mediaBuffer!==this.media){Dt.b.log("switching on main audio, use media.buffered to schedule main fragment loading"),this.mediaBuffer=this.media;var i=this.fragCurrent;i.loader&&(Dt.b.log("switching to main audio track, cancel main fragment load"),i.loader.abort()),this.fragCurrent=null,this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=ce.IDLE}var a=this.hls;a.trigger(Lt.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),a.trigger(Lt.a.AUDIO_TRACK_SWITCHED,{id:r}),this.altAudio=!1}},e.prototype.onAudioTrackSwitched=function(t){var e=t.id,r=!!this.hls.audioTracks[e].url;if(r){var i=this.videoBuffer;i&&this.mediaBuffer!==i&&(Dt.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),this.mediaBuffer=i)}this.altAudio=r,this.tick()},e.prototype.onBufferCreated=function(t){var e=t.tracks,r=void 0,i=void 0,a=!1;for(var n in e){var o=e[n];"main"===o.id?(i=n,r=o,"video"===n&&(this.videoBuffer=e[n].buffer)):a=!0}a&&r?(Dt.b.log("alternate track found, use "+i+".buffered to schedule main fragment loading"),this.mediaBuffer=r.buffer):this.mediaBuffer=this.media},e.prototype.onBufferAppended=function(t){if("main"===t.parent){var e=this.state;e!==ce.PARSING&&e!==ce.PARSED||(this.pendingBuffering=t.pending>0,this._checkAppendedParsed())}},e.prototype._checkAppendedParsed=function(){if(!(this.state!==ce.PARSED||this.appended&&this.pendingBuffering)){var t=this.fragCurrent;if(t){var e=this.mediaBuffer?this.mediaBuffer:this.media;Dt.b.log("main buffered : "+ue.toString(e.buffered));var r=this._bufferedFrags.filter(function(t){return te.isBuffered(e,(t.startPTS+t.endPTS)/2)});r.push(t),this._bufferedFrags=r.sort(function(t,e){return t.startPTS-e.startPTS}),this.fragPrevious=t;var i=this.stats;i.tbuffered=performance.now(),this.fragLastKbps=Math.round(8*i.total/(i.tbuffered-i.tfirst)),this.hls.trigger(Lt.a.FRAG_BUFFERED,{stats:i,frag:t,id:"main"}),this.state=ce.IDLE}this.tick()}},e.prototype.onError=function(t){var e=t.frag||this.fragCurrent;if(!e||"main"===e.type){var r=!!this.media&&te.isBuffered(this.media,this.media.currentTime)&&te.isBuffered(this.media,this.media.currentTime+.5);switch(t.details){case kt.a.FRAG_LOAD_ERROR:case kt.a.FRAG_LOAD_TIMEOUT:case kt.a.KEY_LOAD_ERROR:case kt.a.KEY_LOAD_TIMEOUT:if(!t.fatal)if(this.fragLoadError+1<=this.config.fragLoadingMaxRetry){var i=Math.min(Math.pow(2,this.fragLoadError)*this.config.fragLoadingRetryDelay,this.config.fragLoadingMaxRetryTimeout);e.loadCounter=0,Dt.b.warn("mediaController: frag loading failed, retry in "+i+" ms"),this.retryDate=performance.now()+i,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.fragLoadError++,this.state=ce.FRAG_LOADING_WAITING_RETRY}else Dt.b.error("mediaController: "+t.details+" reaches max retry, redispatch as fatal ..."),t.fatal=!0,this.state=ce.ERROR;break;case kt.a.FRAG_LOOP_LOADING_ERROR:t.fatal||(r?(this._reduceMaxBufferLength(e.duration),this.state=ce.IDLE):e.autoLevel&&0!==e.level||(t.fatal=!0,this.state=ce.ERROR));break;case kt.a.LEVEL_LOAD_ERROR:case kt.a.LEVEL_LOAD_TIMEOUT:this.state!==ce.ERROR&&(t.fatal?(this.state=ce.ERROR,Dt.b.warn("streamController: "+t.details+",switch to "+this.state+" state ...")):t.levelRetry||this.state!==ce.WAITING_LEVEL||(this.state=ce.IDLE));break;case kt.a.BUFFER_FULL_ERROR:"main"!==t.parent||this.state!==ce.PARSING&&this.state!==ce.PARSED||(r?(this._reduceMaxBufferLength(this.config.maxBufferLength),this.state=ce.IDLE):(Dt.b.warn("buffer full error also media.currentTime is not buffered, flush everything"),this.fragCurrent=null,this.flushMainBuffer(0,Number.POSITIVE_INFINITY)))}}},e.prototype._reduceMaxBufferLength=function(t){var e=this.config;e.maxMaxBufferLength>=t&&(e.maxMaxBufferLength/=2,Dt.b.warn("main:reduce max buffer length to "+e.maxMaxBufferLength+"s"),void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*e.fragLoadingLoopThreshold))},e.prototype._checkBuffer=function(){var t=this.media,e=this.config;if(t&&t.readyState){var r=t.currentTime,i=this.mediaBuffer?this.mediaBuffer:t,a=i.buffered;if(!this.loadedmetadata&&a.length){this.loadedmetadata=!0;var n=t.seeking?r:this.startPosition,o=te.isBuffered(i,n),s=a.start(0),l=!o&&Math.abs(n-s)<e.maxSeekHole;(r!==n||l)&&(Dt.b.log("target start position:"+n),l&&(n=s,Dt.b.log("target start position not buffered, seek to buffered.start(0) "+n)),Dt.b.log("adjust currentTime from "+r+" to "+n),t.currentTime=n)}else if(this.immediateSwitch)this.immediateLevelSwitchEnd();else{var u=te.bufferInfo(t,r,0),d=!(t.paused||t.ended||0===t.buffered.length),c=.5,f=r!==this.lastCurrentTime;if(f)this.stallReported&&(Dt.b.warn("playback not stuck anymore @"+r+", after "+Math.round(performance.now()-this.stalled)+"ms"),this.stallReported=!1),this.stalled=void 0,this.nudgeRetry=0;else if(d){var h=performance.now(),p=this.hls;if(this.stalled){var g=h-this.stalled,v=u.len,m=this.nudgeRetry||0;if(v<=c&&g>1e3*e.lowBufferWatchdogPeriod){this.stallReported||(this.stallReported=!0,Dt.b.warn("playback stalling in low buffer @"+r),p.trigger(Lt.a.ERROR,{type:kt.b.MEDIA_ERROR,details:kt.a.BUFFER_STALLED_ERROR,fatal:!1,buffer:v}));var y=u.nextStart,b=y-r;if(y&&b<e.maxSeekHole&&b>0){this.nudgeRetry=++m;var E=m*e.nudgeOffset;Dt.b.log("adjust currentTime from "+t.currentTime+" to next buffered @ "+y+" + nudge "+E),t.currentTime=y+E,this.stalled=void 0,p.trigger(Lt.a.ERROR,{type:kt.b.MEDIA_ERROR,details:kt.a.BUFFER_SEEK_OVER_HOLE,fatal:!1,hole:y+E-r})}}else if(v>c&&g>1e3*e.highBufferWatchdogPeriod)if(this.stallReported||(this.stallReported=!0,Dt.b.warn("playback stalling in high buffer @"+r),p.trigger(Lt.a.ERROR,{type:kt.b.MEDIA_ERROR,details:kt.a.BUFFER_STALLED_ERROR,fatal:!1,buffer:v})),this.stalled=void 0,this.nudgeRetry=++m,m<e.nudgeMaxRetry){var T=t.currentTime,R=T+m*e.nudgeOffset;Dt.b.log("adjust currentTime from "+T+" to "+R),t.currentTime=R,p.trigger(Lt.a.ERROR,{type:kt.b.MEDIA_ERROR,details:kt.a.BUFFER_NUDGE_ON_STALL,fatal:!1})}else Dt.b.error("still stuck in high buffer @"+r+" after "+e.nudgeMaxRetry+", raise fatal error"),p.trigger(Lt.a.ERROR,{type:kt.b.MEDIA_ERROR,details:kt.a.BUFFER_STALLED_ERROR,fatal:!0})}else this.stalled=h,this.stallReported=!1}}}},e.prototype.onFragLoadEmergencyAborted=function(){this.state=ce.IDLE,this.loadedmetadata||(this.startFragRequested=!1,this.nextLoadPosition=this.startPosition),this.tick()},e.prototype.onBufferFlushed=function(){var t=this.mediaBuffer?this.mediaBuffer:this.media;this._bufferedFrags=this._bufferedFrags.filter(function(e){return te.isBuffered(t,(e.startPTS+e.endPTS)/2)}),void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold),this.state=ce.IDLE,this.fragPrevious=null},e.prototype.swapAudioCodec=function(){this.audioCodecSwap=!this.audioCodecSwap},e.prototype.computeLivePosition=function(t,e){var r=void 0!==this.config.liveSyncDuration?this.config.liveSyncDuration:this.config.liveSyncDurationCount*e.targetduration;return t+Math.max(0,e.totalduration-r)},de(e,[{key:"state",set:function(t){if(this.state!==t){var e=this.state;this._state=t,Dt.b.log("main stream:"+e+"->"+t),this.hls.trigger(Lt.a.STREAM_STATE_TRANSITION,{previousState:e,nextState:t})}},get:function(){return this._state}},{key:"currentLevel",get:function(){var t=this.media;if(t){var e=this.getBufferedFrag(t.currentTime);if(e)return e.level}return-1}},{key:"nextBufferedFrag",get:function(){var t=this.media;return t?this.followingBufferedFrag(this.getBufferedFrag(t.currentTime)):null}},{key:"nextLevel",get:function(){var t=this.nextBufferedFrag;return t?t.level:-1}},{key:"liveSyncPosition",get:function(){return this._liveSyncPosition},set:function(t){this._liveSyncPosition=t}}]),e}(Ct),he=fe,pe=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),ge=function(t){function e(r){D(this,e);var i=I(this,t.call(this,r,Lt.a.MANIFEST_LOADED,Lt.a.LEVEL_LOADED,Lt.a.FRAG_LOADED,Lt.a.ERROR));return i._manualLevel=-1,i.timer=null,i}return O(e,t),e.prototype.destroy=function(){this.cleanTimer(),this._manualLevel=-1},e.prototype.cleanTimer=function(){null!==this.timer&&(clearTimeout(this.timer),this.timer=null)},e.prototype.startLoad=function(){this.canload=!0;var t=this._levels;t&&t.forEach(function(t){t.loadError=0;var e=t.details;e&&e.live&&(t.details=void 0)}),this.timer&&this.tick()},e.prototype.stopLoad=function(){this.canload=!1},e.prototype.onManifestLoaded=function(t){var e=[],r=void 0,i={},a=null,n=!1,s=!1,l=/chrome|firefox/.test(navigator.userAgent.toLowerCase());if(t.levels.forEach(function(t){t.loadError=0,t.fragmentError=!1,n=n||!!t.videoCodec,s=s||!!t.audioCodec||!(!t.attrs||!t.attrs.AUDIO),l===!0&&t.audioCodec&&t.audioCodec.indexOf("mp4a.40.34")!==-1&&(t.audioCodec=void 0),a=i[t.bitrate],void 0===a?(t.url=[t.url],t.urlId=0,i[t.bitrate]=t,e.push(t)):a.url.push(t.url)}),n===!0&&s===!0&&(e=e.filter(function(t){var e=t.videoCodec;return!!e})),e=e.filter(function(t){var e=t.audioCodec,r=t.videoCodec;return(!e||o(e))&&(!r||o(r))}),e.length>0){r=e[0].bitrate,e.sort(function(t,e){return t.bitrate-e.bitrate}),this._levels=e;for(var u=0;u<e.length;u++)if(e[u].bitrate===r){this._firstLevel=u,Dt.b.log("manifest loaded,"+e.length+" level(s) found, first bitrate:"+r);break}this.hls.trigger(Lt.a.MANIFEST_PARSED,{levels:e,firstLevel:this._firstLevel,stats:t.stats,audio:s,video:n,altAudio:t.audioTracks.length>0})}else this.hls.trigger(Lt.a.ERROR,{type:kt.b.MEDIA_ERROR,details:kt.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,fatal:!0,url:this.hls.url,reason:"no level with compatible codecs found in manifest"})},e.prototype.setLevelInternal=function(t){var e=this._levels,r=this.hls;if(t>=0&&t<e.length){if(this.cleanTimer(),this._level!==t){Dt.b.log("switching to level "+t),this._level=t;var i=e[t];i.level=t,r.trigger(Lt.a.LEVEL_SWITCH,i),r.trigger(Lt.a.LEVEL_SWITCHING,i)}var a=e[t],n=a.details;if(!n||n.live===!0){var o=a.urlId;r.trigger(Lt.a.LEVEL_LOADING,{url:a.url[o],level:t,id:o})}}else r.trigger(Lt.a.ERROR,{type:kt.b.OTHER_ERROR,details:kt.a.LEVEL_SWITCH_ERROR,level:t,fatal:!1,reason:"invalid level idx"})},e.prototype.onError=function(t){var e=this;if(t.fatal===!0)return void(t.type===kt.b.NETWORK_ERROR&&this.cleanTimer());var r=t.details,i=!1,a=!1,n=void 0,o=void 0,s=this.hls,l=s.config,u=s.media;switch(r){case kt.a.FRAG_LOAD_ERROR:case kt.a.FRAG_LOAD_TIMEOUT:case kt.a.FRAG_LOOP_LOADING_ERROR:case kt.a.KEY_LOAD_ERROR:case kt.a.KEY_LOAD_TIMEOUT:n=t.frag.level,a=!0;break;case kt.a.LEVEL_LOAD_ERROR:case kt.a.LEVEL_LOAD_TIMEOUT:n=t.context.level,i=!0;break;case kt.a.REMUX_ALLOC_ERROR:n=t.level}if(void 0!==n){o=this._levels[n],o.loadError++,o.fragmentError=a;var d=o.url.length;if(d>1&&o.loadError<d)o.urlId=(o.urlId+1)%d,o.details=void 0,Dt.b.warn("level controller,"+r+" for level "+n+": switching to redundant stream id "+o.urlId);else if(this._manualLevel===-1&&0!==n)Dt.b.warn("level controller,"+r+": switch-down for next fragment"),this.hls.nextAutoLevel=Math.max(0,n-1);else if(o&&o.details&&o.details.live)Dt.b.warn("level controller,"+r+" on live stream, discard"),i===!0&&(this._level=void 0);else if(i===!0){var c=!!u&&te.isBuffered(u,u.currentTime)&&te.isBuffered(u,u.currentTime+.5);c===!0?(Dt.b.warn("level controller,"+r+", but media buffered, retry in "+l.levelLoadingRetryDelay+"ms"),this.timer=setTimeout(function(){return e.tick()},l.levelLoadingRetryDelay),t.levelRetry=!0):(Dt.b.error("cannot recover "+r+" error"),this._level=void 0,this.cleanTimer(),t.fatal=!0)}}},e.prototype.onFragLoaded=function(t){var e=t.frag;if(void 0!==e&&"main"===e.type){var r=this._levels[e.level];void 0!==r&&(r.fragmentError=!1,r.loadError=0)}},e.prototype.onLevelLoaded=function(t){var e=this,r=t.level;if(r===this._level){var i=this._levels[r];i.fragmentError===!1&&(i.loadError=0);var a=t.details;if(a.live){var n=1e3*(a.averagetargetduration?a.averagetargetduration:a.targetduration),o=i.details;o&&a.endSN===o.endSN&&(n/=2,Dt.b.log("same live playlist, reload twice faster")),n-=performance.now()-t.stats.trequest,n=Math.max(1e3,Math.round(n)),Dt.b.log("live playlist, reload in "+n+" ms"),this.timer=setTimeout(function(){return e.tick()},n)}else this.cleanTimer()}},e.prototype.tick=function(){var t=this._level;if(void 0!==t&&this.canload){var e=this._levels[t];if(e&&e.url){var r=e.urlId;this.hls.trigger(Lt.a.LEVEL_LOADING,{url:e.url[r],level:t,id:r})}}},pe(e,[{key:"levels",get:function(){return this._levels}},{key:"level",get:function(){return this._level},set:function(t){var e=this._levels;e&&e.length>t&&(this._level===t&&void 0!==e[t].details||this.setLevelInternal(t))}},{key:"manualLevel",get:function(){return this._manualLevel},set:function(t){this._manualLevel=t,void 0===this._startLevel&&(this._startLevel=t),t!==-1&&(this.level=t)}},{key:"firstLevel",get:function(){return this._firstLevel},set:function(t){this._firstLevel=t}},{key:"startLevel",get:function(){if(void 0===this._startLevel){var t=this.hls.config.startLevel;return void 0!==t?t:this._firstLevel}return this._startLevel},set:function(t){this._startLevel=t}},{key:"nextLoadLevel",get:function(){return this._manualLevel!==-1?this._manualLevel:this.hls.nextAutoLevel},set:function(t){this.level=t,this._manualLevel===-1&&(this.hls.nextAutoLevel=t)}}]),e}(Ct),ve=ge,me=r(3),ye=function(t){function e(r){C(this,e);var i=x(this,t.call(this,r,Lt.a.MEDIA_ATTACHED,Lt.a.MEDIA_DETACHING,Lt.a.FRAG_PARSING_METADATA));return i.id3Track=void 0,i.media=void 0,i}return P(e,t),e.prototype.destroy=function(){Ct.prototype.destroy.call(this)},e.prototype.onMediaAttached=function(t){this.media=t.media,!this.media},e.prototype.onMediaDetaching=function(){this.media=void 0},e.prototype.onFragParsingMetadata=function(t){var e=t.frag,r=t.samples;this.id3Track||(this.id3Track=this.media.addTextTrack("metadata","id3"),this.id3Track.mode="hidden");for(var i=window.WebKitDataCue||window.VTTCue||window.TextTrackCue,a=0;a<r.length;a++){var n=me.a.getID3Frames(r[a].data);if(n){var o=r[a].pts,s=a<r.length-1?r[a+1].pts:e.endPTS;o===s&&(s+=1e-4);for(var l=0;l<n.length;l++){var u=n[l];if(!me.a.isTimeStampFrame(u)){var d=new i(o,s,"");d.value=u,this.id3Track.addCue(d)}}}}},e}(Ct),be=ye,Ee=function(){function t(e){F(this,t),this.alpha_=e?Math.exp(Math.log(.5)/e):0,this.estimate_=0,this.totalWeight_=0}return t.prototype.sample=function(t,e){var r=Math.pow(this.alpha_,t);this.estimate_=e*(1-r)+r*this.estimate_,this.totalWeight_+=t},t.prototype.getTotalWeight=function(){return this.totalWeight_},t.prototype.getEstimate=function(){if(this.alpha_){var t=1-Math.pow(this.alpha_,this.totalWeight_);return this.estimate_/t}return this.estimate_},t}(),Te=Ee,Re=function(){function t(e,r,i,a){N(this,t),this.hls=e,this.defaultEstimate_=a,this.minWeight_=.001,this.minDelayMs_=50,this.slow_=new Te(r),this.fast_=new Te(i)}return t.prototype.sample=function(t,e){t=Math.max(t,this.minDelayMs_);var r=8e3*e/t,i=t/1e3;this.fast_.sample(i,r),this.slow_.sample(i,r)},t.prototype.canEstimate=function(){var t=this.fast_;return t&&t.getTotalWeight()>=this.minWeight_},t.prototype.getEstimate=function(){return this.canEstimate()?Math.min(this.fast_.getEstimate(),this.slow_.getEstimate()):this.defaultEstimate_},t.prototype.destroy=function(){},t}(),Se=Re,Ae=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),we=function(t){function e(r){M(this,e);var i=U(this,t.call(this,r,Lt.a.FRAG_LOADING,Lt.a.FRAG_LOADED,Lt.a.FRAG_BUFFERED,Lt.a.ERROR));return i.lastLoadedFragLevel=0,i._nextAutoLevel=-1,i.hls=r,i.timer=null,i._bwEstimator=null,i.onCheck=i._abandonRulesCheck.bind(i),i}return B(e,t),e.prototype.destroy=function(){this.clearTimer(),Ct.prototype.destroy.call(this)},e.prototype.onFragLoading=function(t){var e=t.frag;if("main"===e.type){if(this.timer||(this.timer=setInterval(this.onCheck,100)),!this._bwEstimator){var r=this.hls,i=t.frag.level,a=r.levels[i].details.live,n=r.config,o=void 0,s=void 0;a?(o=n.abrEwmaFastLive,s=n.abrEwmaSlowLive):(o=n.abrEwmaFastVoD,s=n.abrEwmaSlowVoD),this._bwEstimator=new Se(r,s,o,n.abrEwmaDefaultEstimate)}this.fragCurrent=e}},e.prototype._abandonRulesCheck=function(){var t=this.hls,e=t.media,r=this.fragCurrent,i=r.loader,a=t.minAutoLevel;if(!i||i.stats&&i.stats.aborted)return Dt.b.warn("frag loader destroy or aborted, disarm abandonRules"),void this.clearTimer();var n=i.stats;if(e&&n&&(!e.paused&&0!==e.playbackRate||!e.readyState)&&r.autoLevel&&r.level){var o=performance.now()-n.trequest,s=Math.abs(e.playbackRate);if(o>500*r.duration/s){var l=t.levels,u=Math.max(1,n.bw?n.bw/8:1e3*n.loaded/o),d=l[r.level],c=d.realBitrate?Math.max(d.realBitrate,d.bitrate):d.bitrate,f=n.total?n.total:Math.max(n.loaded,Math.round(r.duration*c/8)),h=e.currentTime,p=(f-n.loaded)/u,g=(te.bufferInfo(e,h,t.config.maxBufferHole).end-h)/s;if(g<2*r.duration/s&&p>g){var v=void 0,m=void 0;for(m=r.level-1;m>a;m--){var y=l[m].realBitrate?Math.max(l[m].realBitrate,l[m].bitrate):l[m].bitrate;if(v=r.duration*y/(6.4*u),v<g)break}v<p&&(Dt.b.warn("loading too slow, abort fragment loading and switch to level "+m+":fragLoadedDelay["+m+"]<fragLoadedDelay["+(r.level-1)+"];bufferStarvationDelay:"+v.toFixed(1)+"<"+p.toFixed(1)+":"+g.toFixed(1)),t.nextLoadLevel=m,this._bwEstimator.sample(o,n.loaded),i.abort(),this.clearTimer(),t.trigger(Lt.a.FRAG_LOAD_EMERGENCY_ABORTED,{frag:r,stats:n}))}}}},e.prototype.onFragLoaded=function(t){var e=t.frag;if("main"===e.type&&!isNaN(e.sn)){if(this.clearTimer(),this.lastLoadedFragLevel=e.level,this._nextAutoLevel=-1,this.hls.config.abrMaxWithRealBitrate){var r=this.hls.levels[e.level],i=(r.loaded?r.loaded.bytes:0)+t.stats.loaded,a=(r.loaded?r.loaded.duration:0)+t.frag.duration;r.loaded={bytes:i,duration:a},r.realBitrate=Math.round(8*i/a)}if(t.frag.bitrateTest){var n=t.stats;n.tparsed=n.tbuffered=n.tload,this.onFragBuffered(t)}}},e.prototype.onFragBuffered=function(t){var e=t.stats,r=t.frag;if(!(e.aborted===!0||1!==r.loadCounter||"main"!==r.type||isNaN(r.sn)||r.bitrateTest&&e.tload!==e.tbuffered)){var i=e.tparsed-e.trequest;Dt.b.log("latency/loading/parsing/append/kbps:"+Math.round(e.tfirst-e.trequest)+"/"+Math.round(e.tload-e.tfirst)+"/"+Math.round(e.tparsed-e.tload)+"/"+Math.round(e.tbuffered-e.tparsed)+"/"+Math.round(8*e.loaded/(e.tbuffered-e.trequest))),this._bwEstimator.sample(i,e.loaded),e.bwEstimate=this._bwEstimator.getEstimate(),r.bitrateTest?this.bitrateTestDelay=i/1e3:this.bitrateTestDelay=0}},e.prototype.onError=function(t){switch(t.details){case kt.a.FRAG_LOAD_ERROR:case kt.a.FRAG_LOAD_TIMEOUT:this.clearTimer()}},e.prototype.clearTimer=function(){clearInterval(this.timer),this.timer=null},e.prototype._findBestLevel=function(t,e,r,i,a,n,o,s,l){for(var u=a;u>=i;u--){var d=l[u],c=d.details,f=c?c.totalduration/c.fragments.length:e,h=!!c&&c.live,p=void 0;p=u<=t?o*r:s*r;var g=l[u].realBitrate?Math.max(l[u].realBitrate,l[u].bitrate):l[u].bitrate,v=g*f/p;if(Dt.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: "+u+"/"+Math.round(p)+"/"+g+"/"+f+"/"+n+"/"+v),p>g&&(!v||h&&!this.bitrateTestDelay||v<n))return u}return-1},Ae(e,[{key:"nextAutoLevel",get:function(){var t=this._nextAutoLevel,e=this._bwEstimator;if(!(t===-1||e&&e.canEstimate()))return t;var r=this._nextABRAutoLevel;return t!==-1&&(r=Math.min(t,r)),r},set:function(t){this._nextAutoLevel=t}},{key:"_nextABRAutoLevel",get:function(){var t=this.hls,e=t.maxAutoLevel,r=t.levels,i=t.config,a=t.minAutoLevel,n=t.media,o=this.lastLoadedFragLevel,s=this.fragCurrent?this.fragCurrent.duration:0,l=n?n.currentTime:0,u=n&&0!==n.playbackRate?Math.abs(n.playbackRate):1,d=this._bwEstimator?this._bwEstimator.getEstimate():i.abrEwmaDefaultEstimate,c=(te.bufferInfo(n,l,i.maxBufferHole).end-l)/u,f=this._findBestLevel(o,s,d,a,e,c,i.abrBandWidthFactor,i.abrBandWidthUpFactor,r);if(f>=0)return f;Dt.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");var h=s?Math.min(s,i.maxStarvationDelay):i.maxStarvationDelay,p=i.abrBandWidthFactor,g=i.abrBandWidthUpFactor;if(0===c){var v=this.bitrateTestDelay;if(v){var m=s?Math.min(s,i.maxLoadingDelay):i.maxLoadingDelay;h=m-v,Dt.b.trace("bitrate test took "+Math.round(1e3*v)+"ms, set first fragment max fetchDuration to "+Math.round(1e3*h)+" ms"),p=g=1}}return f=this._findBestLevel(o,s,d,a,e,c+h,p,g,r),Math.max(f,0)}}]),e}(Ct),_e=we,Le=function(t){function e(r){G(this,e);var i=j(this,t.call(this,r,Lt.a.MEDIA_ATTACHING,Lt.a.MEDIA_DETACHING,Lt.a.MANIFEST_PARSED,Lt.a.BUFFER_RESET,Lt.a.BUFFER_APPENDING,Lt.a.BUFFER_CODECS,Lt.a.BUFFER_EOS,Lt.a.BUFFER_FLUSHING,Lt.a.LEVEL_PTS_UPDATED,Lt.a.LEVEL_UPDATED));return i._msDuration=null,i._levelDuration=null,i.onsbue=i.onSBUpdateEnd.bind(i),i.onsbe=i.onSBUpdateError.bind(i),i.pendingTracks={},i.tracks={},i}return K(e,t),e.prototype.destroy=function(){Ct.prototype.destroy.call(this)},e.prototype.onLevelPtsUpdated=function(t){var e=t.type,r=this.tracks.audio;if("audio"===e&&r&&"audio/mpeg"===r.container){var i=this.sourceBuffer.audio,a=Math.abs(i.timestampOffset-t.start);if(a>.1){var n=i.updating;try{i.abort()}catch(t){n=!0,Dt.b.warn("can not abort audio buffer: "+t)}n?this.audioTimestampOffset=t.start:(Dt.b.warn("change mpeg audio timestamp offset from "+i.timestampOffset+" to "+t.start),i.timestampOffset=t.start)}}},e.prototype.onManifestParsed=function(t){var e=t.audio,r=t.video||t.levels.length&&t.audio,i=0;t.altAudio&&(e||r)&&(i=(e?1:0)+(r?1:0),Dt.b.log(i+" sourceBuffer(s) expected")),this.sourceBufferNb=i},e.prototype.onMediaAttaching=function(t){var e=this.media=t.media;if(e){var r=this.mediaSource=new MediaSource;this.onmso=this.onMediaSourceOpen.bind(this),this.onmse=this.onMediaSourceEnded.bind(this),this.onmsc=this.onMediaSourceClose.bind(this),r.addEventListener("sourceopen",this.onmso),r.addEventListener("sourceended",this.onmse),r.addEventListener("sourceclose",this.onmsc),e.src=URL.createObjectURL(r)}},e.prototype.onMediaDetaching=function(){Dt.b.log("media source detaching");var t=this.mediaSource;if(t){if("open"===t.readyState)try{t.endOfStream()}catch(t){Dt.b.warn("onMediaDetaching:"+t.message+" while calling endOfStream")}t.removeEventListener("sourceopen",this.onmso),t.removeEventListener("sourceended",this.onmse),t.removeEventListener("sourceclose",this.onmsc),this.media&&(URL.revokeObjectURL(this.media.src),this.media.removeAttribute("src"),this.media.load()),this.mediaSource=null,this.media=null,this.pendingTracks={},this.tracks={},this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0}this.onmso=this.onmse=this.onmsc=null,this.hls.trigger(Lt.a.MEDIA_DETACHED)},e.prototype.onMediaSourceOpen=function(){Dt.b.log("media source opened"),this.hls.trigger(Lt.a.MEDIA_ATTACHED,{media:this.media});var t=this.mediaSource;t&&t.removeEventListener("sourceopen",this.onmso),this.checkPendingTracks()},e.prototype.checkPendingTracks=function(){var t=this.pendingTracks,e=Object.keys(t).length;e&&(this.sourceBufferNb<=e||0===this.sourceBufferNb)&&(this.createSourceBuffers(t),this.pendingTracks={},this.doAppending())},e.prototype.onMediaSourceClose=function(){Dt.b.log("media source closed")},e.prototype.onMediaSourceEnded=function(){Dt.b.log("media source ended")},e.prototype.onSBUpdateEnd=function(){if(this.audioTimestampOffset){var t=this.sourceBuffer.audio;Dt.b.warn("change mpeg audio timestamp offset from "+t.timestampOffset+" to "+this.audioTimestampOffset),t.timestampOffset=this.audioTimestampOffset,delete this.audioTimestampOffset}this._needsFlush&&this.doFlush(),this._needsEos&&this.checkEos(),this.appending=!1;var e=this.parent,r=this.segments.reduce(function(t,r){return r.parent===e?t+1:t},0);this.hls.trigger(Lt.a.BUFFER_APPENDED,{parent:e,pending:r}),this._needsFlush||this.doAppending(),this.updateMediaElementDuration()},e.prototype.onSBUpdateError=function(t){Dt.b.error("sourceBuffer error:",t),this.hls.trigger(Lt.a.ERROR,{type:kt.b.MEDIA_ERROR,details:kt.a.BUFFER_APPENDING_ERROR,fatal:!1})},e.prototype.onBufferReset=function(){var t=this.sourceBuffer;for(var e in t){var r=t[e];try{this.mediaSource.removeSourceBuffer(r),r.removeEventListener("updateend",this.onsbue),r.removeEventListener("error",this.onsbe)}catch(t){}}this.sourceBuffer={},this.flushRange=[],this.segments=[],this.appended=0},e.prototype.onBufferCodecs=function(t){if(0===Object.keys(this.sourceBuffer).length){for(var e in t)this.pendingTracks[e]=t[e];var r=this.mediaSource;r&&"open"===r.readyState&&this.checkPendingTracks()}},e.prototype.createSourceBuffers=function(t){var e=this.sourceBuffer,r=this.mediaSource;for(var i in t)if(!e[i]){var a=t[i],n=a.levelCodec||a.codec,o=a.container+";codecs="+n;Dt.b.log("creating sourceBuffer("+o+")");try{var s=e[i]=r.addSourceBuffer(o);s.addEventListener("updateend",this.onsbue),s.addEventListener("error",this.onsbe),this.tracks[i]={codec:n,container:a.container},a.buffer=s}catch(t){Dt.b.error("error while trying to add sourceBuffer:"+t.message),this.hls.trigger(Lt.a.ERROR,{type:kt.b.MEDIA_ERROR,details:kt.a.BUFFER_ADD_CODEC_ERROR,fatal:!1,err:t,mimeType:o})}}this.hls.trigger(Lt.a.BUFFER_CREATED,{tracks:t})},e.prototype.onBufferAppending=function(t){this._needsFlush||(this.segments?this.segments.push(t):this.segments=[t],this.doAppending())},e.prototype.onBufferAppendFail=function(t){Dt.b.error("sourceBuffer error:",t.event),this.hls.trigger(Lt.a.ERROR,{type:kt.b.MEDIA_ERROR,details:kt.a.BUFFER_APPENDING_ERROR,fatal:!1})},e.prototype.onBufferEos=function(t){var e=this.sourceBuffer,r=t.type;for(var i in e)r&&i!==r||e[i].ended||(e[i].ended=!0,Dt.b.log(i+" sourceBuffer now EOS"));this.checkEos()},e.prototype.checkEos=function(){var t=this.sourceBuffer,e=this.mediaSource;if(!e||"open"!==e.readyState)return void(this._needsEos=!1);for(var r in t){var i=t[r];if(!i.ended)return;if(i.updating)return void(this._needsEos=!0)}Dt.b.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");try{e.endOfStream()}catch(t){Dt.b.warn("exception while calling mediaSource.endOfStream()")}this._needsEos=!1},e.prototype.onBufferFlushing=function(t){this.flushRange.push({start:t.startOffset,end:t.endOffset,type:t.type}),this.flushBufferCounter=0,this.doFlush()},e.prototype.onLevelUpdated=function(t){var e=t.details;0!==e.fragments.length&&(this._levelDuration=e.totalduration+e.fragments[0].start,this.updateMediaElementDuration())},e.prototype.updateMediaElementDuration=function(){var t=this.media,e=this.mediaSource,r=this.sourceBuffer,i=this._levelDuration;if(null!==i&&t&&e&&r&&0!==t.readyState&&"open"===e.readyState){for(var a in r)if(r[a].updating)return;null===this._msDuration&&(this._msDuration=e.duration);var n=t.duration;(i>this._msDuration&&i>n||n===1/0||isNaN(n))&&(Dt.b.log("Updating mediasource duration to "+i.toFixed(3)),this._msDuration=e.duration=i)}},e.prototype.doFlush=function(){for(;this.flushRange.length;){var t=this.flushRange[0];if(!this.flushBuffer(t.start,t.end,t.type))return void(this._needsFlush=!0);this.flushRange.shift(),this.flushBufferCounter=0}if(0===this.flushRange.length){this._needsFlush=!1;var e=0,r=this.sourceBuffer;try{for(var i in r)e+=r[i].buffered.length}catch(t){Dt.b.error("error while accessing sourceBuffer.buffered")}this.appended=e,this.hls.trigger(Lt.a.BUFFER_FLUSHED)}},e.prototype.doAppending=function(){var t=this.hls,e=this.sourceBuffer,r=this.segments;if(Object.keys(e).length){if(this.media.error)return this.segments=[],void Dt.b.error("trying to append although a media error occured, flush segment and abort");if(this.appending)return;if(r&&r.length){var i=r.shift();try{var a=i.type,n=e[a];n?n.updating?r.unshift(i):(n.ended=!1,this.parent=i.parent,n.appendBuffer(i.data),this.appendError=0,this.appended++,this.appending=!0):this.onSBUpdateEnd()}catch(e){Dt.b.error("error while trying to append buffer:"+e.message),r.unshift(i);var o={type:kt.b.MEDIA_ERROR,parent:i.parent};if(22===e.code)return this.segments=[],o.details=kt.a.BUFFER_FULL_ERROR,o.fatal=!1,void t.trigger(Lt.a.ERROR,o);if(this.appendError?this.appendError++:this.appendError=1,o.details=kt.a.BUFFER_APPEND_ERROR,this.appendError>t.config.appendErrorMaxRetry)return Dt.b.log("fail "+t.config.appendErrorMaxRetry+" times to append segment in sourceBuffer"),r=[],o.fatal=!0,void t.trigger(Lt.a.ERROR,o);o.fatal=!1,t.trigger(Lt.a.ERROR,o)}}}},e.prototype.flushBuffer=function(t,e,r){var i,a,n,o,s,l,u=this.sourceBuffer;if(Object.keys(u).length){if(Dt.b.log("flushBuffer,pos/start/end: "+this.media.currentTime.toFixed(3)+"/"+t+"/"+e),this.flushBufferCounter<this.appended){for(var d in u)if(!r||d===r){if(i=u[d],i.ended=!1,i.updating)return Dt.b.warn("cannot flush, sb updating in progress"),!1;try{for(a=0;a<i.buffered.length;a++)if(n=i.buffered.start(a),o=i.buffered.end(a),navigator.userAgent.toLowerCase().indexOf("firefox")!==-1&&e===Number.POSITIVE_INFINITY?(s=t,l=e):(s=Math.max(n,t),l=Math.min(o,e)),Math.min(l,o)-s>.5)return this.flushBufferCounter++,Dt.b.log("flush "+d+" ["+s+","+l+"], of ["+n+","+o+"], pos:"+this.media.currentTime),i.remove(s,l),!1}catch(t){Dt.b.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")}}}else Dt.b.warn("abort flushing too many retries");Dt.b.log("buffer flushed")}return!0},e}(Ct),ke=Le,De=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),Ie=function(t){function e(r){return H(this,e),W(this,t.call(this,r,Lt.a.FPS_DROP_LEVEL_CAPPING,Lt.a.MEDIA_ATTACHING,Lt.a.MANIFEST_PARSED))}return V(e,t),e.prototype.destroy=function(){this.hls.config.capLevelToPlayerSize&&(this.media=this.restrictedLevels=null,this.autoLevelCapping=Number.POSITIVE_INFINITY,this.timer&&(this.timer=clearInterval(this.timer)))},e.prototype.onFpsDropLevelCapping=function(t){e.isLevelAllowed(t.droppedLevel,this.restrictedLevels)&&this.restrictedLevels.push(t.droppedLevel)},e.prototype.onMediaAttaching=function(t){
this.media=t.media instanceof HTMLVideoElement?t.media:null},e.prototype.onManifestParsed=function(t){var e=this.hls;this.restrictedLevels=[],e.config.capLevelToPlayerSize&&(this.autoLevelCapping=Number.POSITIVE_INFINITY,this.levels=t.levels,e.firstLevel=this.getMaxLevel(t.firstLevel),clearInterval(this.timer),this.timer=setInterval(this.detectPlayerSize.bind(this),1e3),this.detectPlayerSize())},e.prototype.detectPlayerSize=function(){if(this.media){var t=this.levels?this.levels.length:0;if(t){var e=this.hls;e.autoLevelCapping=this.getMaxLevel(t-1),e.autoLevelCapping>this.autoLevelCapping&&e.streamController.nextLevelSwitch(),this.autoLevelCapping=e.autoLevelCapping}}},e.prototype.getMaxLevel=function(t){var r=this;if(!this.levels)return-1;var i=this.levels.filter(function(i,a){return e.isLevelAllowed(a,r.restrictedLevels)&&a<=t});return e.getMaxLevelByMediaSize(i,this.mediaWidth,this.mediaHeight)},e.isLevelAllowed=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.indexOf(t)===-1},e.getMaxLevelByMediaSize=function(t,e,r){if(!t||t&&!t.length)return-1;for(var i=function(t,e){return!e||(t.width!==e.width||t.height!==e.height)},a=t.length-1,n=0;n<t.length;n+=1){var o=t[n];if((o.width>=e||o.height>=r)&&i(o,t[n+1])){a=n;break}}return a},De(e,[{key:"mediaWidth",get:function(){var t=void 0,r=this.media;return r&&(t=r.width||r.clientWidth||r.offsetWidth,t*=e.contentScaleFactor),t}},{key:"mediaHeight",get:function(){var t=void 0,r=this.media;return r&&(t=r.height||r.clientHeight||r.offsetHeight,t*=e.contentScaleFactor),t}}],[{key:"contentScaleFactor",get:function(){var t=1;try{t=window.devicePixelRatio}catch(t){}return t}}]),e}(Ct),Oe=Ie,Ce=function(t){function e(r){return q(this,e),Y(this,t.call(this,r,Lt.a.MEDIA_ATTACHING))}return z(e,t),e.prototype.destroy=function(){this.timer&&clearInterval(this.timer),this.isVideoPlaybackQualityAvailable=!1},e.prototype.onMediaAttaching=function(t){var e=this.hls.config;if(e.capLevelOnFPSDrop){var r=this.video=t.media instanceof HTMLVideoElement?t.media:null;"function"==typeof r.getVideoPlaybackQuality&&(this.isVideoPlaybackQualityAvailable=!0),clearInterval(this.timer),this.timer=setInterval(this.checkFPSInterval.bind(this),e.fpsDroppedMonitoringPeriod)}},e.prototype.checkFPS=function(t,e,r){var i=performance.now();if(e){if(this.lastTime){var a=i-this.lastTime,n=r-this.lastDroppedFrames,o=e-this.lastDecodedFrames,s=1e3*n/a,l=this.hls;if(l.trigger(Lt.a.FPS_DROP,{currentDropped:n,currentDecoded:o,totalDroppedFrames:r}),s>0&&n>l.config.fpsDroppedMonitoringThreshold*o){var u=l.currentLevel;Dt.b.warn("drop FPS ratio greater than max allowed value for currentLevel: "+u),u>0&&(l.autoLevelCapping===-1||l.autoLevelCapping>=u)&&(u-=1,l.trigger(Lt.a.FPS_DROP_LEVEL_CAPPING,{level:u,droppedLevel:l.currentLevel}),l.autoLevelCapping=u,l.streamController.nextLevelSwitch())}}this.lastTime=i,this.lastDroppedFrames=r,this.lastDecodedFrames=e}},e.prototype.checkFPSInterval=function(){var t=this.video;if(t)if(this.isVideoPlaybackQualityAvailable){var e=t.getVideoPlaybackQuality();this.checkFPS(t,e.totalVideoFrames,e.droppedVideoFrames)}else this.checkFPS(t,t.webkitDecodedFrameCount,t.webkitDroppedFrameCount)},e}(Ct),xe=Ce,Pe=function(){function t(e){X(this,t),e&&e.xhrSetup&&(this.xhrSetup=e.xhrSetup)}return t.prototype.destroy=function(){this.abort(),this.loader=null},t.prototype.abort=function(){var t=this.loader;t&&4!==t.readyState&&(this.stats.aborted=!0,t.abort()),window.clearTimeout(this.requestTimeout),this.requestTimeout=null,window.clearTimeout(this.retryTimeout),this.retryTimeout=null},t.prototype.load=function(t,e,r){this.context=t,this.config=e,this.callbacks=r,this.stats={trequest:performance.now(),retry:0},this.retryDelay=e.retryDelay,this.loadInternal()},t.prototype.loadInternal=function(){var t,e=this.context;t=this.loader=new XMLHttpRequest;var r=this.stats;r.tfirst=0,r.loaded=0;var i=this.xhrSetup;try{if(i)try{i(t,e.url)}catch(r){t.open("GET",e.url,!0),i(t,e.url)}t.readyState||t.open("GET",e.url,!0)}catch(r){return void this.callbacks.onError({code:t.status,text:r.message},e,t)}e.rangeEnd&&t.setRequestHeader("Range","bytes="+e.rangeStart+"-"+(e.rangeEnd-1)),t.onreadystatechange=this.readystatechange.bind(this),t.onprogress=this.loadprogress.bind(this),t.responseType=e.responseType,this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),this.config.timeout),t.send()},t.prototype.readystatechange=function(t){var e=t.currentTarget,r=e.readyState,i=this.stats,a=this.context,n=this.config;if(!i.aborted&&r>=2)if(window.clearTimeout(this.requestTimeout),0===i.tfirst&&(i.tfirst=Math.max(performance.now(),i.trequest)),4===r){var o=e.status;if(o>=200&&o<300){i.tload=Math.max(i.tfirst,performance.now());var s=void 0,l=void 0;"arraybuffer"===a.responseType?(s=e.response,l=s.byteLength):(s=e.responseText,l=s.length),i.loaded=i.total=l;var u={url:e.responseURL,data:s};this.callbacks.onSuccess(u,i,a,e)}else i.retry>=n.maxRetry||o>=400&&o<499?(Dt.b.error(o+" while loading "+a.url),this.callbacks.onError({code:o,text:e.statusText},a,e)):(Dt.b.warn(o+" while loading "+a.url+", retrying in "+this.retryDelay+"..."),this.destroy(),this.retryTimeout=window.setTimeout(this.loadInternal.bind(this),this.retryDelay),this.retryDelay=Math.min(2*this.retryDelay,n.maxRetryDelay),i.retry++)}else this.requestTimeout=window.setTimeout(this.loadtimeout.bind(this),n.timeout)},t.prototype.loadtimeout=function(){Dt.b.warn("timeout while loading "+this.context.url),this.callbacks.onTimeout(this.stats,this.context,null)},t.prototype.loadprogress=function(t){var e=t.currentTarget,r=this.stats;r.loaded=t.loaded,t.lengthComputable&&(r.total=t.total);var i=this.callbacks.onProgress;i&&i(r,this.context,null,e)},t}(),Fe=Pe,Ne=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),Me=function(t){function e(r){Q(this,e);var i=J(this,t.call(this,r,Lt.a.MANIFEST_LOADING,Lt.a.MANIFEST_LOADED,Lt.a.AUDIO_TRACK_LOADED,Lt.a.ERROR));return i.ticks=0,i.ontick=i.tick.bind(i),i}return $(e,t),e.prototype.destroy=function(){this.cleanTimer(),Ct.prototype.destroy.call(this)},e.prototype.cleanTimer=function(){this.timer&&(clearTimeout(this.timer),this.timer=null)},e.prototype.tick=function(){this.ticks++,1===this.ticks&&(this.doTick(),this.ticks>1&&setTimeout(this.tick,1),this.ticks=0)},e.prototype.doTick=function(){this.updateTrack(this.trackId)},e.prototype.onError=function(t){t.fatal&&t.type===kt.b.NETWORK_ERROR&&this.cleanTimer()},e.prototype.onManifestLoading=function(){this.tracks=[],this.trackId=-1},e.prototype.onManifestLoaded=function(t){var e=this,r=t.audioTracks||[],i=!1;this.tracks=r,this.hls.trigger(Lt.a.AUDIO_TRACKS_UPDATED,{audioTracks:r});var a=0;r.forEach(function(t){return t.default&&!i?(e.audioTrack=a,void(i=!0)):void a++}),i===!1&&r.length&&(Dt.b.log("no default audio track defined, use first audio track as default"),this.audioTrack=0)},e.prototype.onAudioTrackLoaded=function(t){t.id<this.tracks.length&&(Dt.b.log("audioTrack "+t.id+" loaded"),this.tracks[t.id].details=t.details,t.details.live&&!this.timer&&(this.timer=setInterval(this.ontick,1e3*t.details.targetduration)),!t.details.live&&this.timer&&this.cleanTimer())},e.prototype.setAudioTrackInternal=function(t){if(t>=0&&t<this.tracks.length){this.cleanTimer(),this.trackId=t,Dt.b.log("switching to audioTrack "+t);var e=this.tracks[t],r=this.hls,i=e.type,a=e.url,n={id:t,type:i,url:a};r.trigger(Lt.a.AUDIO_TRACK_SWITCH,n),r.trigger(Lt.a.AUDIO_TRACK_SWITCHING,n);var o=e.details;!a||void 0!==o&&o.live!==!0||(Dt.b.log("(re)loading playlist for audioTrack "+t),r.trigger(Lt.a.AUDIO_TRACK_LOADING,{url:a,id:t}))}},e.prototype.updateTrack=function(t){if(t>=0&&t<this.tracks.length){this.cleanTimer(),this.trackId=t,Dt.b.log("updating audioTrack "+t);var e=this.tracks[t],r=e.url,i=e.details;!r||void 0!==i&&i.live!==!0||(Dt.b.log("(re)loading playlist for audioTrack "+t),this.hls.trigger(Lt.a.AUDIO_TRACK_LOADING,{url:r,id:t}))}},Ne(e,[{key:"audioTracks",get:function(){return this.tracks}},{key:"audioTrack",get:function(){return this.trackId},set:function(t){this.trackId===t&&void 0!==this.tracks[t].details||this.setAudioTrackInternal(t)}}]),e}(Ct),Ue=Me,Be=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),Ge={STOPPED:"STOPPED",STARTING:"STARTING",IDLE:"IDLE",PAUSED:"PAUSED",KEY_LOADING:"KEY_LOADING",FRAG_LOADING:"FRAG_LOADING",FRAG_LOADING_WAITING_RETRY:"FRAG_LOADING_WAITING_RETRY",WAITING_TRACK:"WAITING_TRACK",PARSING:"PARSING",PARSED:"PARSED",BUFFER_FLUSHING:"BUFFER_FLUSHING",ENDED:"ENDED",ERROR:"ERROR",WAITING_INIT_PTS:"WAITING_INIT_PTS"},je=function(t){function e(r){Z(this,e);var i=tt(this,t.call(this,r,Lt.a.MEDIA_ATTACHED,Lt.a.MEDIA_DETACHING,Lt.a.AUDIO_TRACKS_UPDATED,Lt.a.AUDIO_TRACK_SWITCHING,Lt.a.AUDIO_TRACK_LOADED,Lt.a.KEY_LOADED,Lt.a.FRAG_LOADED,Lt.a.FRAG_PARSING_INIT_SEGMENT,Lt.a.FRAG_PARSING_DATA,Lt.a.FRAG_PARSED,Lt.a.ERROR,Lt.a.BUFFER_CREATED,Lt.a.BUFFER_APPENDED,Lt.a.BUFFER_FLUSHED,Lt.a.INIT_PTS_FOUND));return i.config=r.config,i.audioCodecSwap=!1,i.ticks=0,i._state=Ge.STOPPED,i.ontick=i.tick.bind(i),i.initPTS=[],i.waitingFragment=null,i.videoTrackCC=null,i}return et(e,t),e.prototype.destroy=function(){this.stopLoad(),this.timer&&(clearInterval(this.timer),this.timer=null),Ct.prototype.destroy.call(this),this.state=Ge.STOPPED},e.prototype.onInitPtsFound=function(t){var e=t.id,r=t.frag.cc,i=t.initPTS;"main"===e&&(this.initPTS[r]=i,this.videoTrackCC=r,Dt.b.log("InitPTS for cc:"+r+" found from video track:"+i),this.state===Ge.WAITING_INIT_PTS&&this.tick())},e.prototype.startLoad=function(t){if(this.tracks){var e=this.lastCurrentTime;this.stopLoad(),this.timer||(this.timer=setInterval(this.ontick,100)),this.fragLoadError=0,e>0&&t===-1?(Dt.b.log("audio:override startPosition with lastCurrentTime @"+e.toFixed(3)),this.state=Ge.IDLE):(this.lastCurrentTime=this.startPosition?this.startPosition:t,this.state=Ge.STARTING),this.nextLoadPosition=this.startPosition=this.lastCurrentTime,this.tick()}else this.startPosition=t,this.state=Ge.STOPPED},e.prototype.stopLoad=function(){var t=this.fragCurrent;t&&(t.loader&&t.loader.abort(),this.fragCurrent=null),this.fragPrevious=null,this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),this.state=Ge.STOPPED},e.prototype.tick=function(){this.ticks++,1===this.ticks&&(this.doTick(),this.ticks>1&&setTimeout(this.tick,1),this.ticks=0)},e.prototype.doTick=function(){var t,e,r,i=this.hls,a=i.config;switch(this.state){case Ge.ERROR:case Ge.PAUSED:case Ge.BUFFER_FLUSHING:break;case Ge.STARTING:this.state=Ge.WAITING_TRACK,this.loadedmetadata=!1;break;case Ge.IDLE:var n=this.tracks;if(!n)break;if(!this.media&&(this.startFragRequested||!a.startFragPrefetch))break;if(this.loadedmetadata)t=this.media.currentTime;else if(t=this.nextLoadPosition,void 0===t)break;var o=this.mediaBuffer?this.mediaBuffer:this.media,s=this.videoBuffer?this.videoBuffer:this.media,l=te.bufferInfo(o,t,a.maxBufferHole),u=te.bufferInfo(s,t,a.maxBufferHole),d=l.len,c=l.end,f=this.fragPrevious,h=Math.max(a.maxBufferLength,u.len),p=this.audioSwitch,g=this.trackId;if((d<h||p)&&g<n.length){if(r=n[g].details,"undefined"==typeof r){this.state=Ge.WAITING_TRACK;break}if(!p&&!r.live&&f&&f.sn===r.endSN&&(!this.media.seeking||this.media.duration-c<f.duration/2)){this.hls.trigger(Lt.a.BUFFER_EOS,{type:"audio"}),this.state=Ge.ENDED;break}var v=r.fragments,m=v.length,y=v[0].start,b=v[m-1].start+v[m-1].duration,E=void 0;if(p)if(r.live&&!r.PTSKnown)Dt.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"),c=0;else if(c=t,r.PTSKnown&&t<y){if(!(l.end>y||l.nextStart))return;Dt.b.log("alt audio track ahead of main track, seek to start of alt audio track"),this.media.currentTime=y+.05}if(r.initSegment&&!r.initSegment.data)E=r.initSegment;else if(c<=y){if(E=v[0],null!==this.videoTrackCC&&E.cc!==this.videoTrackCC&&(E=T(v,this.videoTrackCC)),r.live&&E.loadIdx&&E.loadIdx===this.fragLoadIdx){var R=l.nextStart?l.nextStart:y;return Dt.b.log("no alt audio available @currentTime:"+this.media.currentTime+", seeking @"+(R+.05)),void(this.media.currentTime=R+.05)}}else{var S=void 0,A=a.maxFragLookUpTolerance,w=f?v[f.sn-v[0].sn+1]:void 0,_=function(t){var e=Math.min(A,t.duration);return t.start+t.duration-e<=c?1:t.start-e>c&&t.start?-1:0};c<b?(c>b-A&&(A=0),S=w&&!_(w)?w:$t.search(v,_)):S=v[m-1],S&&(E=S,y=S.start,f&&E.level===f.level&&E.sn===f.sn&&(E.sn<r.endSN?(E=v[E.sn+1-r.startSN],Dt.b.log("SN just loaded, load next one: "+E.sn)):E=null))}if(E)if(E.decryptdata&&null!=E.decryptdata.uri&&null==E.decryptdata.key)Dt.b.log("Loading key for "+E.sn+" of ["+r.startSN+" ,"+r.endSN+"],track "+g),this.state=Ge.KEY_LOADING,i.trigger(Lt.a.KEY_LOADING,{frag:E});else{if(Dt.b.log("Loading "+E.sn+", cc: "+E.cc+" of ["+r.startSN+" ,"+r.endSN+"],track "+g+", currentTime:"+t+",bufferEnd:"+c.toFixed(3)),void 0!==this.fragLoadIdx?this.fragLoadIdx++:this.fragLoadIdx=0,E.loadCounter){E.loadCounter++;var L=a.fragLoadingLoopThreshold;if(E.loadCounter>L&&Math.abs(this.fragLoadIdx-E.loadIdx)<L)return void i.trigger(Lt.a.ERROR,{type:kt.b.MEDIA_ERROR,details:kt.a.FRAG_LOOP_LOADING_ERROR,fatal:!1,frag:E})}else E.loadCounter=1;E.loadIdx=this.fragLoadIdx,this.fragCurrent=E,this.startFragRequested=!0,isNaN(E.sn)||(this.nextLoadPosition=E.start+E.duration),i.trigger(Lt.a.FRAG_LOADING,{frag:E}),this.state=Ge.FRAG_LOADING}}break;case Ge.WAITING_TRACK:e=this.tracks[this.trackId],e&&e.details&&(this.state=Ge.IDLE);break;case Ge.FRAG_LOADING_WAITING_RETRY:var k=performance.now(),D=this.retryDate;o=this.media;var I=o&&o.seeking;(!D||k>=D||I)&&(Dt.b.log("audioStreamController: retryDate reached, switch back to IDLE state"),this.state=Ge.IDLE);break;case Ge.WAITING_INIT_PTS:var O=this.videoTrackCC;if(void 0===this.initPTS[O])break;var C=this.waitingFragment;if(C){var x=C.frag.cc;O!==x?(e=this.tracks[this.trackId],e.details&&e.details.live&&(Dt.b.warn("Waiting fragment CC ("+x+") does not match video track CC ("+O+")"),this.waitingFragment=null,this.state=Ge.IDLE)):(this.state=Ge.FRAG_LOADING,this.onFragLoaded(this.waitingFragment),this.waitingFragment=null)}else this.state=Ge.IDLE;break;case Ge.STOPPED:case Ge.FRAG_LOADING:case Ge.PARSING:case Ge.PARSED:case Ge.ENDED:}},e.prototype.onMediaAttached=function(t){var e=this.media=this.mediaBuffer=t.media;this.onvseeking=this.onMediaSeeking.bind(this),this.onvended=this.onMediaEnded.bind(this),e.addEventListener("seeking",this.onvseeking),e.addEventListener("ended",this.onvended);var r=this.config;this.tracks&&r.autoStartLoad&&this.startLoad(r.startPosition)},e.prototype.onMediaDetaching=function(){var t=this.media;t&&t.ended&&(Dt.b.log("MSE detaching and video ended, reset startPosition"),this.startPosition=this.lastCurrentTime=0);var e=this.tracks;e&&e.forEach(function(t){t.details&&t.details.fragments.forEach(function(t){t.loadCounter=void 0})}),t&&(t.removeEventListener("seeking",this.onvseeking),t.removeEventListener("ended",this.onvended),this.onvseeking=this.onvseeked=this.onvended=null),this.media=this.mediaBuffer=this.videoBuffer=null,this.loadedmetadata=!1,this.stopLoad()},e.prototype.onMediaSeeking=function(){this.state===Ge.ENDED&&(this.state=Ge.IDLE),this.media&&(this.lastCurrentTime=this.media.currentTime),void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold),this.tick()},e.prototype.onMediaEnded=function(){this.startPosition=this.lastCurrentTime=0},e.prototype.onAudioTracksUpdated=function(t){Dt.b.log("audio tracks updated"),this.tracks=t.audioTracks},e.prototype.onAudioTrackSwitching=function(t){var e=!!t.url;this.trackId=t.id,this.fragCurrent=null,this.state=Ge.PAUSED,this.waitingFragment=null,e?this.timer||(this.timer=setInterval(this.ontick,100)):this.demuxer&&(this.demuxer.destroy(),this.demuxer=null),e&&(this.audioSwitch=!0,this.state=Ge.IDLE,void 0!==this.fragLoadIdx&&(this.fragLoadIdx+=2*this.config.fragLoadingLoopThreshold)),this.tick()},e.prototype.onAudioTrackLoaded=function(t){var e=t.details,r=t.id,i=this.tracks[r],a=e.totalduration,n=0;if(Dt.b.log("track "+r+" loaded ["+e.startSN+","+e.endSN+"],duration:"+a),e.live){var o=i.details;o&&e.fragments.length>0?(b(o,e),n=e.fragments[0].start,e.PTSKnown?Dt.b.log("live audio playlist sliding:"+n.toFixed(3)):Dt.b.log("live audio playlist - outdated PTS, unknown sliding")):(e.PTSKnown=!1,Dt.b.log("live audio playlist - first load, unknown sliding"))}else e.PTSKnown=!1;if(i.details=e,!this.startFragRequested){if(this.startPosition===-1){var s=e.startTimeOffset;isNaN(s)?this.startPosition=0:(Dt.b.log("start time offset found in playlist, adjust startPosition to "+s),this.startPosition=s)}this.nextLoadPosition=this.startPosition}this.state===Ge.WAITING_TRACK&&(this.state=Ge.IDLE),this.tick()},e.prototype.onKeyLoaded=function(){this.state===Ge.KEY_LOADING&&(this.state=Ge.IDLE,this.tick())},e.prototype.onFragLoaded=function(t){var e=this.fragCurrent,r=t.frag;if(this.state===Ge.FRAG_LOADING&&e&&"audio"===r.type&&r.level===e.level&&r.sn===e.sn){var i=this.tracks[this.trackId],a=i.details,n=a.totalduration,o=e.level,s=e.sn,l=e.cc,u=this.config.defaultAudioCodec||i.audioCodec||"mp4a.40.2",d=this.stats=t.stats;if("initSegment"===s)this.state=Ge.IDLE,d.tparsed=d.tbuffered=performance.now(),a.initSegment.data=t.payload,this.hls.trigger(Lt.a.FRAG_BUFFERED,{stats:d,frag:e,id:"audio"}),this.tick();else{this.state=Ge.PARSING,this.appended=!1,this.demuxer||(this.demuxer=new se(this.hls,"audio"));var c=this.initPTS[l],f=a.initSegment?a.initSegment.data:[];if(a.initSegment||void 0!==c){this.pendingBuffering=!0,Dt.b.log("Demuxing "+s+" of ["+a.startSN+" ,"+a.endSN+"],track "+o);var h=!1;this.demuxer.push(t.payload,f,u,null,e,n,h,c)}else Dt.b.log("unknown video PTS for continuity counter "+l+", waiting for video PTS before demuxing audio frag "+s+" of ["+a.startSN+" ,"+a.endSN+"],track "+o),this.waitingFragment=t,this.state=Ge.WAITING_INIT_PTS}}this.fragLoadError=0},e.prototype.onFragParsingInitSegment=function(t){var e=this.fragCurrent,r=t.frag;if(e&&"audio"===t.id&&r.sn===e.sn&&r.level===e.level&&this.state===Ge.PARSING){var i=t.tracks,a=void 0;if(i.video&&delete i.video,a=i.audio){a.levelCodec=a.codec,a.id=t.id,this.hls.trigger(Lt.a.BUFFER_CODECS,i),Dt.b.log("audio track:audio,container:"+a.container+",codecs[level/parsed]=["+a.levelCodec+"/"+a.codec+"]");var n=a.initSegment;if(n){var o={type:"audio",data:n,parent:"audio",content:"initSegment"};this.audioSwitch?this.pendingData=[o]:(this.appended=!0,this.pendingBuffering=!0,this.hls.trigger(Lt.a.BUFFER_APPENDING,o))}this.tick()}}},e.prototype.onFragParsingData=function(t){var e=this,r=this.fragCurrent,i=t.frag;if(r&&"audio"===t.id&&"audio"===t.type&&i.sn===r.sn&&i.level===r.level&&this.state===Ge.PARSING){var a=this.trackId,n=this.tracks[a],o=this.hls;isNaN(t.endPTS)&&(t.endPTS=t.startPTS+r.duration,t.endDTS=t.startDTS+r.duration),Dt.b.log("parsed "+t.type+",PTS:["+t.startPTS.toFixed(3)+","+t.endPTS.toFixed(3)+"],DTS:["+t.startDTS.toFixed(3)+"/"+t.endDTS.toFixed(3)+"],nb:"+t.nb),y(n.details,r,t.startPTS,t.endPTS);var s=this.audioSwitch,l=this.media,u=!1;if(s&&l)if(l.readyState){var d=l.currentTime;Dt.b.log("switching audio track : currentTime:"+d),d>=t.startPTS&&(Dt.b.log("switching audio track : flushing all audio"),this.state=Ge.BUFFER_FLUSHING,o.trigger(Lt.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"}),u=!0,this.audioSwitch=!1,o.trigger(Lt.a.AUDIO_TRACK_SWITCHED,{id:a}))}else this.audioSwitch=!1,o.trigger(Lt.a.AUDIO_TRACK_SWITCHED,{id:a});var c=this.pendingData;this.audioSwitch||([t.data1,t.data2].forEach(function(e){e&&e.length&&c.push({type:t.type,data:e,parent:"audio",content:"data"})}),!u&&c.length&&(c.forEach(function(t){e.state===Ge.PARSING&&(e.pendingBuffering=!0,e.hls.trigger(Lt.a.BUFFER_APPENDING,t))}),this.pendingData=[],this.appended=!0)),this.tick()}},e.prototype.onFragParsed=function(t){var e=this.fragCurrent,r=t.frag;e&&"audio"===t.id&&r.sn===e.sn&&r.level===e.level&&this.state===Ge.PARSING&&(this.stats.tparsed=performance.now(),this.state=Ge.PARSED,this._checkAppendedParsed())},e.prototype.onBufferCreated=function(t){var e=t.tracks.audio;e&&(this.mediaBuffer=e.buffer,this.loadedmetadata=!0),t.tracks.video&&(this.videoBuffer=t.tracks.video.buffer)},e.prototype.onBufferAppended=function(t){if("audio"===t.parent){var e=this.state;e!==Ge.PARSING&&e!==Ge.PARSED||(this.pendingBuffering=t.pending>0,this._checkAppendedParsed())}},e.prototype._checkAppendedParsed=function(){if(!(this.state!==Ge.PARSED||this.appended&&this.pendingBuffering)){var t=this.fragCurrent,e=this.stats,r=this.hls;if(t){this.fragPrevious=t,e.tbuffered=performance.now(),r.trigger(Lt.a.FRAG_BUFFERED,{stats:e,frag:t,id:"audio"});var i=this.mediaBuffer?this.mediaBuffer:this.media;Dt.b.log("audio buffered : "+ue.toString(i.buffered)),this.audioSwitch&&this.appended&&(this.audioSwitch=!1,r.trigger(Lt.a.AUDIO_TRACK_SWITCHED,{id:this.trackId})),this.state=Ge.IDLE}this.tick()}},e.prototype.onError=function(t){var e=t.frag;if(!e||"audio"===e.type)switch(t.details){case kt.a.FRAG_LOAD_ERROR:case kt.a.FRAG_LOAD_TIMEOUT:if(!t.fatal){var r=this.fragLoadError;r?r++:r=1;var i=this.config;if(r<=i.fragLoadingMaxRetry){this.fragLoadError=r,e.loadCounter=0;var a=Math.min(Math.pow(2,r-1)*i.fragLoadingRetryDelay,i.fragLoadingMaxRetryTimeout);Dt.b.warn("audioStreamController: frag loading failed, retry in "+a+" ms"),this.retryDate=performance.now()+a,this.state=Ge.FRAG_LOADING_WAITING_RETRY}else Dt.b.error("audioStreamController: "+t.details+" reaches max retry, redispatch as fatal ..."),t.fatal=!0,this.state=Ge.ERROR}break;case kt.a.FRAG_LOOP_LOADING_ERROR:case kt.a.AUDIO_TRACK_LOAD_ERROR:case kt.a.AUDIO_TRACK_LOAD_TIMEOUT:case kt.a.KEY_LOAD_ERROR:case kt.a.KEY_LOAD_TIMEOUT:this.state!==Ge.ERROR&&(this.state=t.fatal?Ge.ERROR:Ge.IDLE,Dt.b.warn("audioStreamController: "+t.details+" while loading frag,switch to "+this.state+" state ..."));break;case kt.a.BUFFER_FULL_ERROR:if("audio"===t.parent&&(this.state===Ge.PARSING||this.state===Ge.PARSED)){var n=this.mediaBuffer,o=this.media.currentTime,s=n&&te.isBuffered(n,o)&&te.isBuffered(n,o+.5);if(s){var l=this.config;l.maxMaxBufferLength>=l.maxBufferLength&&(l.maxMaxBufferLength/=2,Dt.b.warn("audio:reduce max buffer length to "+l.maxMaxBufferLength+"s"),this.fragLoadIdx+=2*l.fragLoadingLoopThreshold),this.state=Ge.IDLE}else Dt.b.warn("buffer full error also media.currentTime is not buffered, flush audio buffer"),this.fragCurrent=null,this.state=Ge.BUFFER_FLUSHING,this.hls.trigger(Lt.a.BUFFER_FLUSHING,{startOffset:0,endOffset:Number.POSITIVE_INFINITY,type:"audio"})}}},e.prototype.onBufferFlushed=function(){var t=this,e=this.pendingData;e&&e.length?(Dt.b.log("appending pending audio data on Buffer Flushed"),e.forEach(function(e){t.hls.trigger(Lt.a.BUFFER_APPENDING,e)}),this.appended=!0,this.pendingData=[],this.state=Ge.PARSED):(this.state=Ge.IDLE,this.fragPrevious=null,this.tick())},Be(e,[{key:"state",set:function(t){if(this.state!==t){var e=this.state;this._state=t,Dt.b.log("audio stream:"+e+"->"+t)}},get:function(){return this._state}}]),e}(Ct),Ke=je,He=function(){function t(t){if("string"!=typeof t)return!1;var e=n[t.toLowerCase()];return!!e&&t.toLowerCase()}function e(t){if("string"!=typeof t)return!1;var e=o[t.toLowerCase()];return!!e&&t.toLowerCase()}function r(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)t[i]=r[i]}return t}function i(i,n,o){var s=this,l=function(){if("undefined"!=typeof navigator)return/MSIE\s8\.0/.test(navigator.userAgent)}(),u={};l?s=document.createElement("custom"):u.enumerable=!0,s.hasBeenReset=!1;var d="",c=!1,f=i,h=n,p=o,g=null,v="",m=!0,y="auto",b="start",E=50,T="middle",R=50,S="middle";if(Object.defineProperty(s,"id",r({},u,{get:function(){return d},set:function(t){d=""+t}})),Object.defineProperty(s,"pauseOnExit",r({},u,{get:function(){return c},set:function(t){c=!!t}})),Object.defineProperty(s,"startTime",r({},u,{get:function(){return f},set:function(t){if("number"!=typeof t)throw new TypeError("Start time must be set to a number.");f=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"endTime",r({},u,{get:function(){return h},set:function(t){if("number"!=typeof t)throw new TypeError("End time must be set to a number.");h=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"text",r({},u,{get:function(){return p},set:function(t){p=""+t,this.hasBeenReset=!0}})),Object.defineProperty(s,"region",r({},u,{get:function(){return g},set:function(t){g=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"vertical",r({},u,{get:function(){return v},set:function(e){var r=t(e);if(r===!1)throw new SyntaxError("An invalid or illegal string was specified.");v=r,this.hasBeenReset=!0}})),Object.defineProperty(s,"snapToLines",r({},u,{get:function(){return m},set:function(t){m=!!t,this.hasBeenReset=!0}})),Object.defineProperty(s,"line",r({},u,{get:function(){return y},set:function(t){if("number"!=typeof t&&t!==a)throw new SyntaxError("An invalid number or illegal string was specified.");y=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"lineAlign",r({},u,{get:function(){return b},set:function(t){var r=e(t);if(!r)throw new SyntaxError("An invalid or illegal string was specified.");b=r,this.hasBeenReset=!0}})),Object.defineProperty(s,"position",r({},u,{get:function(){return E},set:function(t){if(t<0||t>100)throw new Error("Position must be between 0 and 100.");E=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"positionAlign",r({},u,{get:function(){return T},set:function(t){var r=e(t);if(!r)throw new SyntaxError("An invalid or illegal string was specified.");T=r,this.hasBeenReset=!0}})),Object.defineProperty(s,"size",r({},u,{get:function(){return R},set:function(t){if(t<0||t>100)throw new Error("Size must be between 0 and 100.");R=t,this.hasBeenReset=!0}})),Object.defineProperty(s,"align",r({},u,{get:function(){return S},set:function(t){var r=e(t);if(!r)throw new SyntaxError("An invalid or illegal string was specified.");S=r,this.hasBeenReset=!0}})),s.displayState=void 0,l)return s}if("undefined"!=typeof window&&window.VTTCue)return window.VTTCue;var a="auto",n={"":!0,lr:!0,rl:!0},o={start:!0,middle:!0,end:!0,left:!0,right:!0};return i.prototype.getCueAsHTML=function(){var t=window.WebVTT;return t.convertCueToDOMTree(window,this.text)},i}(),We=function(){return{decode:function(t){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))}}};at.prototype={set:function(t,e){this.get(t)||""===e||(this.values[t]=e)},get:function(t,e,r){return r?this.has(t)?this.values[t]:e[r]:this.has(t)?this.values[t]:e},has:function(t){return t in this.values},alt:function(t,e,r){for(var i=0;i<r.length;++i)if(e===r[i]){this.set(t,e);break}},integer:function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},percent:function(t,e){var r;return!!((r=e.match(/^([\d]{1,3})(\.[\d]*)?%$/))&&(e=parseFloat(e),e>=0&&e<=100))&&(this.set(t,e),!0)}};var Ve=new He(0,0,0),qe="middle"===Ve.align?"middle":"center";rt.prototype={parse:function(t){function e(){var t=i.buffer,e=0;for(t=st(t);e<t.length&&"\r"!==t[e]&&"\n"!==t[e];)++e;var r=t.substr(0,e);return"\r"===t[e]&&++e,"\n"===t[e]&&++e,i.buffer=t.substr(e),r}function r(t){nt(t,function(t,e){switch(t){case"Region":console.log("parse region",e)}},/:/)}var i=this;t&&(i.buffer+=i.decoder.decode(t,{stream:!0}));try{var a;if("INITIAL"===i.state){if(!/\r\n|\n/.test(i.buffer))return this;a=e();var n=a.match(/^(Ã¯Â»Â¿)?WEBVTT([ \t].*)?$/);if(!n||!n[0])throw new Error("Malformed WebVTT signature.");i.state="HEADER"}for(var o=!1;i.buffer;){if(!/\r\n|\n/.test(i.buffer))return this;switch(o?o=!1:a=e(),i.state){case"HEADER":/:/.test(a)?r(a):a||(i.state="ID");continue;case"NOTE":a||(i.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(a)){i.state="NOTE";break}if(!a)continue;if(i.cue=new He(0,0,""),i.state="CUE",a.indexOf("-->")===-1){i.cue.id=a;continue}case"CUE":try{ot(a,i.cue,i.regionList)}catch(t){i.cue=null,i.state="BADCUE";continue}i.state="CUETEXT";continue;case"CUETEXT":var s=a.indexOf("-->")!==-1;if(!a||s&&(o=!0)){i.oncue&&i.oncue(i.cue),i.cue=null,i.state="ID";continue}i.cue.text&&(i.cue.text+="\n"),i.cue.text+=a;continue;case"BADCUE":a||(i.state="ID");continue}}}catch(t){"CUETEXT"===i.state&&i.cue&&i.oncue&&i.oncue(i.cue),i.cue=null,i.state="INITIAL"===i.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var t=this;try{if(t.buffer+=t.decoder.decode(),(t.cue||"HEADER"===t.state)&&(t.buffer+="\n\n",t.parse()),"INITIAL"===t.state)throw new Error("Malformed WebVTT signature.")}catch(t){throw t}return t.onflush&&t.onflush(),this}};var Ye=rt,ze={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,128:174,129:176,130:189,131:191,132:8482,133:162,134:163,135:9834,136:224,137:32,138:232,139:226,140:234,141:238,142:244,143:251,144:193,145:201,146:211,147:218,148:220,149:252,150:8216,151:161,152:42,153:8217,154:9473,155:169,156:8480,157:8226,158:8220,159:8221,160:192,161:194,162:199,163:200,164:202,165:203,166:235,167:206,168:207,169:239,170:212,171:217,172:249,173:219,174:171,175:187,176:195,177:227,178:205,179:204,180:236,181:210,182:242,183:213,184:245,185:123,186:125,187:92,188:94,189:95,190:124,191:8764,192:196,193:228,194:214,195:246,196:223,197:165,198:164,199:9475,200:197,201:229,202:216,203:248,204:9487,205:9491,206:9495,207:9499},Xe=function(t){var e=t;return ze.hasOwnProperty(t)&&(e=ze[t]),String.fromCharCode(e)},Qe=15,Je=100,$e={17:1,18:3,21:5,22:7,23:9,16:11,19:12,20:14},Ze={17:2,18:4,21:6,22:8,23:10,19:13,20:15},tr={25:1,26:3,29:5,30:7,31:9,24:11,27:12,28:14},er={25:2,26:4,29:6,30:8,31:10,27:13,28:15},rr=["white","green","blue","cyan","red","yellow","magenta","black","transparent"],ir={verboseFilter:{DATA:3,DEBUG:3,INFO:2,WARNING:2,TEXT:1,ERROR:0},time:null,verboseLevel:0,setTime:function(t){this.time=t},log:function(t,e){var r=this.verboseFilter[t];this.verboseLevel>=r&&console.log(this.time+" ["+t+"] "+e)}},ar=function(t){for(var e=[],r=0;r<t.length;r++)e.push(t[r].toString(16));return e},nr=function(){function t(e,r,i,a,n){ut(this,t),this.foreground=e||"white",this.underline=r||!1,this.italics=i||!1,this.background=a||"black",this.flash=n||!1}return t.prototype.reset=function(){this.foreground="white",this.underline=!1,this.italics=!1,this.background="black",this.flash=!1},t.prototype.setStyles=function(t){for(var e=["foreground","underline","italics","background","flash"],r=0;r<e.length;r++){var i=e[r];t.hasOwnProperty(i)&&(this[i]=t[i])}},t.prototype.isDefault=function(){return"white"===this.foreground&&!this.underline&&!this.italics&&"black"===this.background&&!this.flash},t.prototype.equals=function(t){return this.foreground===t.foreground&&this.underline===t.underline&&this.italics===t.italics&&this.background===t.background&&this.flash===t.flash},t.prototype.copy=function(t){this.foreground=t.foreground,this.underline=t.underline,this.italics=t.italics,this.background=t.background,this.flash=t.flash},t.prototype.toString=function(){return"color="+this.foreground+", underline="+this.underline+", italics="+this.italics+", background="+this.background+", flash="+this.flash},t}(),or=function(){function t(e,r,i,a,n,o){ut(this,t),this.uchar=e||" ",this.penState=new nr(r,i,a,n,o)}return t.prototype.reset=function(){this.uchar=" ",this.penState.reset()},t.prototype.setChar=function(t,e){this.uchar=t,this.penState.copy(e)},t.prototype.setPenState=function(t){this.penState.copy(t)},t.prototype.equals=function(t){return this.uchar===t.uchar&&this.penState.equals(t.penState)},t.prototype.copy=function(t){this.uchar=t.uchar,this.penState.copy(t.penState)},t.prototype.isEmpty=function(){return" "===this.uchar&&this.penState.isDefault();
},t}(),sr=function(){function t(){ut(this,t),this.chars=[];for(var e=0;e<Je;e++)this.chars.push(new or);this.pos=0,this.currPenState=new nr}return t.prototype.equals=function(t){for(var e=!0,r=0;r<Je;r++)if(!this.chars[r].equals(t.chars[r])){e=!1;break}return e},t.prototype.copy=function(t){for(var e=0;e<Je;e++)this.chars[e].copy(t.chars[e])},t.prototype.isEmpty=function(){for(var t=!0,e=0;e<Je;e++)if(!this.chars[e].isEmpty()){t=!1;break}return t},t.prototype.setCursor=function(t){this.pos!==t&&(this.pos=t),this.pos<0?(ir.log("ERROR","Negative cursor position "+this.pos),this.pos=0):this.pos>Je&&(ir.log("ERROR","Too large cursor position "+this.pos),this.pos=Je)},t.prototype.moveCursor=function(t){var e=this.pos+t;if(t>1)for(var r=this.pos+1;r<e+1;r++)this.chars[r].setPenState(this.currPenState);this.setCursor(e)},t.prototype.backSpace=function(){this.moveCursor(-1),this.chars[this.pos].setChar(" ",this.currPenState)},t.prototype.insertChar=function(t){t>=144&&this.backSpace();var e=Xe(t);return this.pos>=Je?void ir.log("ERROR","Cannot insert "+t.toString(16)+" ("+e+") at position "+this.pos+". Skipping it!"):(this.chars[this.pos].setChar(e,this.currPenState),void this.moveCursor(1))},t.prototype.clearFromPos=function(t){var e;for(e=t;e<Je;e++)this.chars[e].reset()},t.prototype.clear=function(){this.clearFromPos(0),this.pos=0,this.currPenState.reset()},t.prototype.clearToEndOfRow=function(){this.clearFromPos(this.pos)},t.prototype.getTextString=function(){for(var t=[],e=!0,r=0;r<Je;r++){var i=this.chars[r].uchar;" "!==i&&(e=!1),t.push(i)}return e?"":t.join("")},t.prototype.setPenStyles=function(t){this.currPenState.setStyles(t);var e=this.chars[this.pos];e.setPenState(this.currPenState)},t}(),lr=function(){function t(){ut(this,t),this.rows=[];for(var e=0;e<Qe;e++)this.rows.push(new sr);this.currRow=Qe-1,this.nrRollUpRows=null,this.reset()}return t.prototype.reset=function(){for(var t=0;t<Qe;t++)this.rows[t].clear();this.currRow=Qe-1},t.prototype.equals=function(t){for(var e=!0,r=0;r<Qe;r++)if(!this.rows[r].equals(t.rows[r])){e=!1;break}return e},t.prototype.copy=function(t){for(var e=0;e<Qe;e++)this.rows[e].copy(t.rows[e])},t.prototype.isEmpty=function(){for(var t=!0,e=0;e<Qe;e++)if(!this.rows[e].isEmpty()){t=!1;break}return t},t.prototype.backSpace=function(){var t=this.rows[this.currRow];t.backSpace()},t.prototype.clearToEndOfRow=function(){var t=this.rows[this.currRow];t.clearToEndOfRow()},t.prototype.insertChar=function(t){var e=this.rows[this.currRow];e.insertChar(t)},t.prototype.setPen=function(t){var e=this.rows[this.currRow];e.setPenStyles(t)},t.prototype.moveCursor=function(t){var e=this.rows[this.currRow];e.moveCursor(t)},t.prototype.setCursor=function(t){ir.log("INFO","setCursor: "+t);var e=this.rows[this.currRow];e.setCursor(t)},t.prototype.setPAC=function(t){ir.log("INFO","pacData = "+JSON.stringify(t));var e=t.row-1;if(this.nrRollUpRows&&e<this.nrRollUpRows-1&&(e=this.nrRollUpRows-1),this.nrRollUpRows&&this.currRow!==e){for(var r=0;r<Qe;r++)this.rows[r].clear();var i=this.currRow+1-this.nrRollUpRows,a=this.lastOutputScreen;if(a){var n=a.rows[i].cueStartTime;if(n&&n<ir.time)for(var o=0;o<this.nrRollUpRows;o++)this.rows[e-this.nrRollUpRows+o+1].copy(a.rows[i+o])}}this.currRow=e;var s=this.rows[this.currRow];if(null!==t.indent){var l=t.indent,u=Math.max(l-1,0);s.setCursor(t.indent),t.color=s.chars[u].penState.foreground}var d={foreground:t.color,underline:t.underline,italics:t.italics,background:"black",flash:!1};this.setPen(d)},t.prototype.setBkgData=function(t){ir.log("INFO","bkgData = "+JSON.stringify(t)),this.backSpace(),this.setPen(t),this.insertChar(32)},t.prototype.setRollUpRows=function(t){this.nrRollUpRows=t},t.prototype.rollUp=function(){if(null===this.nrRollUpRows)return void ir.log("DEBUG","roll_up but nrRollUpRows not set yet");ir.log("TEXT",this.getDisplayText());var t=this.currRow+1-this.nrRollUpRows,e=this.rows.splice(t,1)[0];e.clear(),this.rows.splice(this.currRow,0,e),ir.log("INFO","Rolling up")},t.prototype.getDisplayText=function(t){t=t||!1;for(var e=[],r="",i=-1,a=0;a<Qe;a++){var n=this.rows[a].getTextString();n&&(i=a+1,t?e.push("Row "+i+": '"+n+"'"):e.push(n.trim()))}return e.length>0&&(r=t?"["+e.join(" | ")+"]":e.join("\n")),r},t.prototype.getTextAndFormat=function(){return this.rows},t}(),ur=function(){function t(e,r){ut(this,t),this.chNr=e,this.outputFilter=r,this.mode=null,this.verbose=0,this.displayedMemory=new lr,this.nonDisplayedMemory=new lr,this.lastOutputScreen=new lr,this.currRollUpRow=this.displayedMemory.rows[Qe-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null}return t.prototype.reset=function(){this.mode=null,this.displayedMemory.reset(),this.nonDisplayedMemory.reset(),this.lastOutputScreen.reset(),this.currRollUpRow=this.displayedMemory.rows[Qe-1],this.writeScreen=this.displayedMemory,this.mode=null,this.cueStartTime=null,this.lastCueEndTime=null},t.prototype.getHandler=function(){return this.outputFilter},t.prototype.setHandler=function(t){this.outputFilter=t},t.prototype.setPAC=function(t){this.writeScreen.setPAC(t)},t.prototype.setBkgData=function(t){this.writeScreen.setBkgData(t)},t.prototype.setMode=function(t){t!==this.mode&&(this.mode=t,ir.log("INFO","MODE="+t),"MODE_POP-ON"===this.mode?this.writeScreen=this.nonDisplayedMemory:(this.writeScreen=this.displayedMemory,this.writeScreen.reset()),"MODE_ROLL-UP"!==this.mode&&(this.displayedMemory.nrRollUpRows=null,this.nonDisplayedMemory.nrRollUpRows=null),this.mode=t)},t.prototype.insertChars=function(t){for(var e=0;e<t.length;e++)this.writeScreen.insertChar(t[e]);var r=this.writeScreen===this.displayedMemory?"DISP":"NON_DISP";ir.log("INFO",r+": "+this.writeScreen.getDisplayText(!0)),"MODE_PAINT-ON"!==this.mode&&"MODE_ROLL-UP"!==this.mode||(ir.log("TEXT","DISPLAYED: "+this.displayedMemory.getDisplayText(!0)),this.outputDataUpdate())},t.prototype.ccRCL=function(){ir.log("INFO","RCL - Resume Caption Loading"),this.setMode("MODE_POP-ON")},t.prototype.ccBS=function(){ir.log("INFO","BS - BackSpace"),"MODE_TEXT"!==this.mode&&(this.writeScreen.backSpace(),this.writeScreen===this.displayedMemory&&this.outputDataUpdate())},t.prototype.ccAOF=function(){},t.prototype.ccAON=function(){},t.prototype.ccDER=function(){ir.log("INFO","DER- Delete to End of Row"),this.writeScreen.clearToEndOfRow(),this.outputDataUpdate()},t.prototype.ccRU=function(t){ir.log("INFO","RU("+t+") - Roll Up"),this.writeScreen=this.displayedMemory,this.setMode("MODE_ROLL-UP"),this.writeScreen.setRollUpRows(t)},t.prototype.ccFON=function(){ir.log("INFO","FON - Flash On"),this.writeScreen.setPen({flash:!0})},t.prototype.ccRDC=function(){ir.log("INFO","RDC - Resume Direct Captioning"),this.setMode("MODE_PAINT-ON")},t.prototype.ccTR=function(){ir.log("INFO","TR"),this.setMode("MODE_TEXT")},t.prototype.ccRTD=function(){ir.log("INFO","RTD"),this.setMode("MODE_TEXT")},t.prototype.ccEDM=function(){ir.log("INFO","EDM - Erase Displayed Memory"),this.displayedMemory.reset(),this.outputDataUpdate()},t.prototype.ccCR=function(){ir.log("CR - Carriage Return"),this.writeScreen.rollUp(),this.outputDataUpdate()},t.prototype.ccENM=function(){ir.log("INFO","ENM - Erase Non-displayed Memory"),this.nonDisplayedMemory.reset()},t.prototype.ccEOC=function(){if(ir.log("INFO","EOC - End Of Caption"),"MODE_POP-ON"===this.mode){var t=this.displayedMemory;this.displayedMemory=this.nonDisplayedMemory,this.nonDisplayedMemory=t,this.writeScreen=this.nonDisplayedMemory,ir.log("TEXT","DISP: "+this.displayedMemory.getDisplayText())}this.outputDataUpdate()},t.prototype.ccTO=function(t){ir.log("INFO","TO("+t+") - Tab Offset"),this.writeScreen.moveCursor(t)},t.prototype.ccMIDROW=function(t){var e={flash:!1};if(e.underline=t%2===1,e.italics=t>=46,e.italics)e.foreground="white";else{var r=Math.floor(t/2)-16,i=["white","green","blue","cyan","red","yellow","magenta"];e.foreground=i[r]}ir.log("INFO","MIDROW: "+JSON.stringify(e)),this.writeScreen.setPen(e)},t.prototype.outputDataUpdate=function(){var t=ir.time;null!==t&&this.outputFilter&&(this.outputFilter.updateData&&this.outputFilter.updateData(t,this.displayedMemory),null!==this.cueStartTime||this.displayedMemory.isEmpty()?this.displayedMemory.equals(this.lastOutputScreen)||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,t,this.lastOutputScreen),this.cueStartTime=this.displayedMemory.isEmpty()?null:t):this.cueStartTime=t,this.lastOutputScreen.copy(this.displayedMemory))},t.prototype.cueSplitAtTime=function(t){this.outputFilter&&(this.displayedMemory.isEmpty()||(this.outputFilter.newCue&&this.outputFilter.newCue(this.cueStartTime,t,this.displayedMemory),this.cueStartTime=t))},t}(),dr=function(){function t(e,r,i){ut(this,t),this.field=e||1,this.outputs=[r,i],this.channels=[new ur(1,r),new ur(2,i)],this.currChNr=-1,this.lastCmdA=null,this.lastCmdB=null,this.bufferedData=[],this.startTime=null,this.lastTime=null,this.dataCounters={padding:0,char:0,cmd:0,other:0}}return t.prototype.getHandler=function(t){return this.channels[t].getHandler()},t.prototype.setHandler=function(t,e){this.channels[t].setHandler(e)},t.prototype.addData=function(t,e){var r,i,a,n=!1;this.lastTime=t,ir.setTime(t);for(var o=0;o<e.length;o+=2)if(i=127&e[o],a=127&e[o+1],0!==i||0!==a){if(ir.log("DATA","["+ar([e[o],e[o+1]])+"] -> ("+ar([i,a])+")"),r=this.parseCmd(i,a),r||(r=this.parseMidrow(i,a)),r||(r=this.parsePAC(i,a)),r||(r=this.parseBackgroundAttributes(i,a)),!r&&(n=this.parseChars(i,a)))if(this.currChNr&&this.currChNr>=0){var s=this.channels[this.currChNr-1];s.insertChars(n)}else ir.log("WARNING","No channel found yet. TEXT-MODE?");r?this.dataCounters.cmd+=2:n?this.dataCounters.char+=2:(this.dataCounters.other+=2,ir.log("WARNING","Couldn't parse cleaned data "+ar([i,a])+" orig: "+ar([e[o],e[o+1]])))}else this.dataCounters.padding+=2},t.prototype.parseCmd=function(t,e){var r=null,i=(20===t||28===t)&&32<=e&&e<=47,a=(23===t||31===t)&&33<=e&&e<=35;if(!i&&!a)return!1;if(t===this.lastCmdA&&e===this.lastCmdB)return this.lastCmdA=null,this.lastCmdB=null,ir.log("DEBUG","Repeated command ("+ar([t,e])+") is dropped"),!0;r=20===t||23===t?1:2;var n=this.channels[r-1];return 20===t||28===t?32===e?n.ccRCL():33===e?n.ccBS():34===e?n.ccAOF():35===e?n.ccAON():36===e?n.ccDER():37===e?n.ccRU(2):38===e?n.ccRU(3):39===e?n.ccRU(4):40===e?n.ccFON():41===e?n.ccRDC():42===e?n.ccTR():43===e?n.ccRTD():44===e?n.ccEDM():45===e?n.ccCR():46===e?n.ccENM():47===e&&n.ccEOC():n.ccTO(e-32),this.lastCmdA=t,this.lastCmdB=e,this.currChNr=r,!0},t.prototype.parseMidrow=function(t,e){var r=null;if((17===t||25===t)&&32<=e&&e<=47){if(r=17===t?1:2,r!==this.currChNr)return ir.log("ERROR","Mismatch channel in midrow parsing"),!1;var i=this.channels[r-1];return i.ccMIDROW(e),ir.log("DEBUG","MIDROW ("+ar([t,e])+")"),!0}return!1},t.prototype.parsePAC=function(t,e){var r=null,i=null,a=(17<=t&&t<=23||25<=t&&t<=31)&&64<=e&&e<=127,n=(16===t||24===t)&&64<=e&&e<=95;if(!a&&!n)return!1;if(t===this.lastCmdA&&e===this.lastCmdB)return this.lastCmdA=null,this.lastCmdB=null,!0;r=t<=23?1:2,i=64<=e&&e<=95?1===r?$e[t]:tr[t]:1===r?Ze[t]:er[t];var o=this.interpretPAC(i,e),s=this.channels[r-1];return s.setPAC(o),this.lastCmdA=t,this.lastCmdB=e,this.currChNr=r,!0},t.prototype.interpretPAC=function(t,e){var r=e,i={color:null,italics:!1,indent:null,underline:!1,row:t};return r=e>95?e-96:e-64,i.underline=1===(1&r),r<=13?i.color=["white","green","blue","cyan","red","yellow","magenta","white"][Math.floor(r/2)]:r<=15?(i.italics=!0,i.color="white"):i.indent=4*Math.floor((r-16)/2),i},t.prototype.parseChars=function(t,e){var r=null,i=null,a=null;if(t>=25?(r=2,a=t-8):(r=1,a=t),17<=a&&a<=19){var n=e;n=17===a?e+80:18===a?e+112:e+144,ir.log("INFO","Special char '"+Xe(n)+"' in channel "+r),i=[n]}else 32<=t&&t<=127&&(i=0===e?[t]:[t,e]);if(i){var o=ar(i);ir.log("DEBUG","Char codes =  "+o.join(",")),this.lastCmdA=null,this.lastCmdB=null}return i},t.prototype.parseBackgroundAttributes=function(t,e){var r,i,a,n,o=(16===t||24===t)&&32<=e&&e<=47,s=(23===t||31===t)&&45<=e&&e<=47;return!(!o&&!s)&&(r={},16===t||24===t?(i=Math.floor((e-32)/2),r.background=rr[i],e%2===1&&(r.background=r.background+"_semi")):45===e?r.background="transparent":(r.foreground="black",47===e&&(r.underline=!0)),a=t<24?1:2,n=this.channels[a-1],n.setBkgData(r),this.lastCmdA=null,this.lastCmdB=null,!0)},t.prototype.reset=function(){for(var t=0;t<this.channels.length;t++)this.channels[t]&&this.channels[t].reset();this.lastCmdA=null,this.lastCmdB=null},t.prototype.cueSplitAtTime=function(t){for(var e=0;e<this.channels.length;e++)this.channels[e]&&this.channels[e].cueSplitAtTime(t)},t}(),cr=dr,fr=function(t,e,r){return t.substr(r||0,e.length)===e},hr=function(t){var e=parseInt(t.substr(-3)),r=parseInt(t.substr(-6,2)),i=parseInt(t.substr(-9,2)),a=t.length>9?parseInt(t.substr(0,t.indexOf(":"))):0;return isNaN(e)||isNaN(r)||isNaN(i)||isNaN(a)?-1:(e+=1e3*r,e+=6e4*i,e+=36e5*a)},pr=function t(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return(t>>>0).toString()},gr=function(t,e,r){var i=t[e],a=t[i.prevCC];if(!a||!a.new&&i.new)return t.ccOffset=t.presentationOffset=i.start,void(i.new=!1);for(;a&&a.new;)t.ccOffset+=i.start-a.start,i.new=!1,i=a,a=t[i.prevCC];t.presentationOffset=r},vr={parse:function(t,e,r,i,a,n){var o=/\r\n|\n\r|\n|\r/g,s=String.fromCharCode.apply(null,new Uint8Array(t)).trim().replace(o,"\n").split("\n"),l="00:00.000",u=0,d=0,c=0,f=[],h=void 0,p=!0,g=new Ye;g.oncue=function(t){var e=r[i],a=r.ccOffset;e&&e.new&&(void 0!==d?a=r.ccOffset=e.start:gr(r,i,c)),c&&(a=c+r.ccOffset-r.presentationOffset),t.startTime+=a-d,t.endTime+=a-d,t.id=pr(t.startTime)+pr(t.endTime)+pr(t.text),t.text=decodeURIComponent(escape(t.text)),t.endTime>0&&f.push(t)},g.onparsingerror=function(t){h=t},g.onflush=function(){return h&&n?void n(h):void a(f)},s.forEach(function(t){if(p){if(fr(t,"X-TIMESTAMP-MAP=")){p=!1,t.substr(16).split(",").forEach(function(t){fr(t,"LOCAL:")?l=t.substr(6):fr(t,"MPEGTS:")&&(u=parseInt(t.substr(7)))});try{e=e<0?e+8589934592:e,u-=e,d=hr(l)/1e3,c=u/9e4,d===-1&&(h=new Error("Malformed X-TIMESTAMP-MAP: "+t))}catch(e){h=new Error("Malformed X-TIMESTAMP-MAP: "+t)}return}""===t&&(p=!1)}g.parse(t+"\n")}),g.flush()}},mr=vr,yr=function(t){function e(r){dt(this,e);var i=ct(this,t.call(this,r,Lt.a.MEDIA_ATTACHING,Lt.a.MEDIA_DETACHING,Lt.a.FRAG_PARSING_USERDATA,Lt.a.MANIFEST_LOADING,Lt.a.MANIFEST_LOADED,Lt.a.FRAG_LOADED,Lt.a.LEVEL_SWITCHING,Lt.a.INIT_PTS_FOUND));if(i.hls=r,i.config=r.config,i.enabled=!0,i.Cues=r.config.cueHandler,i.textTracks=[],i.tracks=[],i.unparsedVttFrags=[],i.initPTS=void 0,i.cueRanges=[],i.config.enableCEA708Captions){var a=i,n=function(t,e){var r=null;try{r=new window.Event("addtrack")}catch(t){r=document.createEvent("Event"),r.initEvent("addtrack",!1,!1)}r.track=t,e.dispatchEvent(r)},o={newCue:function(t,e,r){if(!a.textTrack1){var i=a.getExistingTrack("1");if(i)a.textTrack1=i,ht(a.textTrack1),n(a.textTrack1,a.media);else{var o=a.createTextTrack("captions",a.config.captionsTextTrack1Label,a.config.captionsTextTrack1LanguageCode);o&&(o.textTrack1=!0,a.textTrack1=o)}}a.addCues("textTrack1",t,e,r)}},s={newCue:function(t,e,r){if(!a.textTrack2){var i=a.getExistingTrack("2");if(i)a.textTrack2=i,ht(a.textTrack2),n(a.textTrack2,a.media);else{var o=a.createTextTrack("captions",a.config.captionsTextTrack2Label,a.config.captionsTextTrack1LanguageCode);o&&(o.textTrack2=!0,a.textTrack2=o)}}a.addCues("textTrack2",t,e,r)}};i.cea608Parser=new cr(0,o,s)}return i}return ft(e,t),e.prototype.addCues=function(t,e,r,i){for(var a=this.cueRanges,n=!1,o=a.length;o--;){var s=a[o],l=gt(s[0],s[1],e,r);if(l>=0&&(s[0]=Math.min(s[0],e),s[1]=Math.max(s[1],r),n=!0,l/(r-e)>.5))return}n||a.push([e,r]),this.Cues.newCue(this[t],e,r,i)},e.prototype.onInitPtsFound=function(t){var e=this;"undefined"==typeof this.initPTS&&(this.initPTS=t.initPTS),this.unparsedVttFrags.length&&(this.unparsedVttFrags.forEach(function(t){e.onFragLoaded(t)}),this.unparsedVttFrags=[])},e.prototype.getExistingTrack=function(t){var e=this.media;if(e)for(var r=0;r<e.textTracks.length;r++){var i=e.textTracks[r],a="textTrack"+t;if(i[a]===!0)return i}return null},e.prototype.createTextTrack=function(t,e,r){var i=this.media;if(i)return i.addTextTrack(t,e,r)},e.prototype.destroy=function(){Ct.prototype.destroy.call(this)},e.prototype.onMediaAttaching=function(t){this.media=t.media},e.prototype.onMediaDetaching=function(){ht(this.textTrack1),ht(this.textTrack2)},e.prototype.onManifestLoading=function(){this.lastSn=-1,this.prevCC=-1,this.vttCCs={ccOffset:0,presentationOffset:0};var t=this.media;if(t){var e=t.textTracks;if(e)for(var r=0;r<e.length;r++)ht(e[r])}},e.prototype.onManifestLoaded=function(t){var e=this;if(this.textTracks=[],this.unparsedVttFrags=this.unparsedVttFrags||[],this.initPTS=void 0,this.cueRanges=[],this.config.enableWebVTT){this.tracks=t.subtitles||[];var r=this.media?this.media.textTracks:[];this.tracks.forEach(function(t,i){var a=void 0;if(i<r.length){var n=r[i];pt(n,t)&&(a=n)}a||(a=e.createTextTrack("subtitles",t.name,t.lang)),a.mode=t.default?"showing":"hidden",e.textTracks.push(a)})}},e.prototype.onLevelSwitching=function(){this.enabled="NONE"!==this.hls.currentLevel.closedCaptions},e.prototype.onFragLoaded=function(t){var e=t.frag,r=t.payload;if("main"===e.type){var i=e.sn;if(i!==this.lastSn+1){var a=this.cea608Parser;a&&a.reset()}this.lastSn=i}else if("subtitle"===e.type)if(r.byteLength){if("undefined"==typeof this.initPTS)return void this.unparsedVttFrags.push(t);var n=this.vttCCs;n[e.cc]||(n[e.cc]={start:e.start,prevCC:this.prevCC,new:!0},this.prevCC=e.cc);var o=this.textTracks,s=this.hls;mr.parse(r,this.initPTS,n,e.cc,function(t){var r=o[e.trackId];t.forEach(function(t){if(!r.cues.getCueById(t.id))try{r.addCue(t)}catch(i){var e=new window.TextTrackCue(t.startTime,t.endTime,t.text);e.id=t.id,r.addCue(e)}}),s.trigger(Lt.a.SUBTITLE_FRAG_PROCESSED,{success:!0,frag:e})},function(t){Dt.b.log("Failed to parse VTT cue: "+t),s.trigger(Lt.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e})})}else this.hls.trigger(Lt.a.SUBTITLE_FRAG_PROCESSED,{success:!1,frag:e})},e.prototype.onFragParsingUserdata=function(t){if(this.enabled&&this.config.enableCEA708Captions)for(var e=0;e<t.samples.length;e++){var r=this.extractCea608Data(t.samples[e].bytes);this.cea608Parser.addData(t.samples[e].pts,r)}},e.prototype.extractCea608Data=function(t){for(var e,r,i,a,n,o=31&t[0],s=2,l=[],u=0;u<o;u++)e=t[s++],r=127&t[s++],i=127&t[s++],a=0!==(4&e),n=3&e,0===r&&0===i||a&&0===n&&(l.push(r),l.push(i));return l},e}(Ct),br=yr,Er=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),Tr=function(t){function e(r){vt(this,e);var i=mt(this,t.call(this,r,Lt.a.MEDIA_ATTACHED,Lt.a.MEDIA_DETACHING,Lt.a.MANIFEST_LOADING,Lt.a.MANIFEST_LOADED,Lt.a.SUBTITLE_TRACK_LOADED));return i.tracks=[],i.trackId=-1,i.media=void 0,i}return yt(e,t),e.prototype._onTextTracksChanged=function(){if(this.media){for(var t=-1,e=bt(this.media.textTracks),r=0;r<e.length;r++)"showing"===e[r].mode&&(t=r);this.subtitleTrack=t}},e.prototype.destroy=function(){Ct.prototype.destroy.call(this)},e.prototype.onMediaAttached=function(t){var e=this;this.media=t.media,this.media&&(this.trackChangeListener=this._onTextTracksChanged.bind(this),this.useTextTrackPolling=!(this.media.textTracks&&"onchange"in this.media.textTracks),this.useTextTrackPolling?this.subtitlePollingInterval=setInterval(function(){e.trackChangeListener()},500):this.media.textTracks.addEventListener("change",this.trackChangeListener))},e.prototype.onMediaDetaching=function(){this.media&&(this.useTextTrackPolling?clearInterval(this.subtitlePollingInterval):this.media.textTracks.removeEventListener("change",this.trackChangeListener),this.media=void 0)},e.prototype.onManifestLoading=function(){this.tracks=[],this.trackId=-1},e.prototype.onManifestLoaded=function(t){var e=this,r=t.subtitles||[],i=!1;this.tracks=r,this.trackId=-1,this.hls.trigger(Lt.a.SUBTITLE_TRACKS_UPDATED,{subtitleTracks:r}),r.forEach(function(t){t.default&&(e.subtitleTrack=t.id,i=!0)})},e.prototype.onTick=function(){var t=this.trackId,e=this.tracks[t];if(e){var r=e.details;void 0!==r&&r.live!==!0||(Dt.b.log("(re)loading playlist for subtitle track "+t),this.hls.trigger(Lt.a.SUBTITLE_TRACK_LOADING,{url:e.url,id:t}))}},e.prototype.onSubtitleTrackLoaded=function(t){var e=this;t.id<this.tracks.length&&(Dt.b.log("subtitle track "+t.id+" loaded"),this.tracks[t.id].details=t.details,t.details.live&&!this.timer&&(this.timer=setInterval(function(){e.onTick()},1e3*t.details.targetduration,this)),!t.details.live&&this.timer&&(clearInterval(this.timer),this.timer=null))},e.prototype.setSubtitleTrackInternal=function(t){if(t>=0&&t<this.tracks.length){this.timer&&(clearInterval(this.timer),this.timer=null),this.trackId=t,Dt.b.log("switching to subtitle track "+t);var e=this.tracks[t];this.hls.trigger(Lt.a.SUBTITLE_TRACK_SWITCH,{id:t});var r=e.details;void 0!==r&&r.live!==!0||(Dt.b.log("(re)loading playlist for subtitle track "+t),this.hls.trigger(Lt.a.SUBTITLE_TRACK_LOADING,{url:e.url,id:t}))}},Er(e,[{key:"subtitleTracks",get:function(){return this.tracks}},{key:"subtitleTrack",get:function(){return this.trackId},set:function(t){this.trackId!==t&&this.setSubtitleTrackInternal(t)}}]),e}(Ct),Rr=Tr,Sr=function(t){function e(r){Et(this,e);var i=Tt(this,t.call(this,r,Lt.a.ERROR,Lt.a.SUBTITLE_TRACKS_UPDATED,Lt.a.SUBTITLE_TRACK_SWITCH,Lt.a.SUBTITLE_TRACK_LOADED,Lt.a.SUBTITLE_FRAG_PROCESSED));return i.config=r.config,i.vttFragSNsProcessed={},i.vttFragQueues=void 0,i.currentlyProcessing=null,i.currentTrackId=-1,i}return Rt(e,t),e.prototype.destroy=function(){Ct.prototype.destroy.call(this)},e.prototype.clearVttFragQueues=function(){var t=this;this.vttFragQueues={},this.tracks.forEach(function(e){t.vttFragQueues[e.id]=[]})},e.prototype.nextFrag=function(){if(null===this.currentlyProcessing&&this.currentTrackId>-1&&this.vttFragQueues[this.currentTrackId].length){var t=this.currentlyProcessing=this.vttFragQueues[this.currentTrackId].shift();this.hls.trigger(Lt.a.FRAG_LOADING,{frag:t})}},e.prototype.onSubtitleFragProcessed=function(t){t.success&&this.vttFragSNsProcessed[t.frag.trackId].push(t.frag.sn),this.currentlyProcessing=null,this.nextFrag()},e.prototype.onError=function(t){var e=t.frag;e&&"subtitle"!==e.type||this.currentlyProcessing&&(this.currentlyProcessing=null,this.nextFrag())},e.prototype.onSubtitleTracksUpdated=function(t){var e=this;Dt.b.log("subtitle tracks updated"),this.tracks=t.subtitleTracks,this.clearVttFragQueues(),this.vttFragSNsProcessed={},this.tracks.forEach(function(t){e.vttFragSNsProcessed[t.id]=[]})},e.prototype.onSubtitleTrackSwitch=function(t){this.currentTrackId=t.id,this.clearVttFragQueues()},e.prototype.onSubtitleTrackLoaded=function(t){var e=this.vttFragSNsProcessed[t.id],r=this.vttFragQueues[t.id],i=this.currentlyProcessing?this.currentlyProcessing.sn:-1,a=function(t){return e.indexOf(t.sn)>-1},n=function(t){return r.some(function(e){return e.sn===t.sn})};t.details.fragments.forEach(function(e){a(e)||e.sn===i||n(e)||(e.trackId=t.id,r.push(e))}),this.nextFrag()},e}(Ct),Ar=Sr,wr={autoStartLoad:!0,startPosition:-1,defaultAudioCodec:void 0,debug:!1,capLevelOnFPSDrop:!1,capLevelToPlayerSize:!1,initialLiveManifestSize:1,maxBufferLength:30,maxBufferSize:6e7,maxBufferHole:.5,maxSeekHole:2,lowBufferWatchdogPeriod:.5,highBufferWatchdogPeriod:3,nudgeOffset:.1,nudgeMaxRetry:3,maxFragLookUpTolerance:.2,liveSyncDurationCount:3,liveMaxLatencyDurationCount:1/0,liveSyncDuration:void 0,liveMaxLatencyDuration:void 0,maxMaxBufferLength:600,enableWorker:!0,enableSoftwareAES:!0,manifestLoadingTimeOut:1e4,manifestLoadingMaxRetry:1,manifestLoadingRetryDelay:1e3,manifestLoadingMaxRetryTimeout:64e3,startLevel:void 0,levelLoadingTimeOut:1e4,levelLoadingMaxRetry:4,levelLoadingRetryDelay:1e3,levelLoadingMaxRetryTimeout:64e3,fragLoadingTimeOut:2e4,fragLoadingMaxRetry:6,fragLoadingRetryDelay:1e3,fragLoadingMaxRetryTimeout:64e3,fragLoadingLoopThreshold:3,startFragPrefetch:!1,fpsDroppedMonitoringPeriod:5e3,fpsDroppedMonitoringThreshold:.2,appendErrorMaxRetry:3,loader:Fe,fLoader:void 0,pLoader:void 0,xhrSetup:void 0,fetchSetup:void 0,abrController:_e,bufferController:ke,capLevelController:Oe,fpsController:xe,stretchShortVideoTrack:!1,maxAudioFramesDrift:1,forceKeyFrameOnDiscontinuity:!0,abrEwmaFastLive:3,abrEwmaSlowLive:9,abrEwmaFastVoD:3,abrEwmaSlowVoD:9,abrEwmaDefaultEstimate:5e5,abrBandWidthFactor:.95,abrBandWidthUpFactor:.7,abrMaxWithRealBitrate:!1,maxStarvationDelay:4,maxLoadingDelay:4,minAutoBitrate:0};wr.subtitleStreamController=Ar,wr.subtitleTrackController=Rr,wr.timelineController=br,wr.cueHandler=At,wr.enableCEA708Captions=!0,wr.enableWebVTT=!0,wr.captionsTextTrack1Label="English",wr.captionsTextTrack1LanguageCode="en",wr.captionsTextTrack2Label="Spanish",wr.captionsTextTrack2LanguageCode="es",wr.audioStreamController=Ke,wr.audioTrackController=Ue;var _r=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,r,i){return r&&t(e.prototype,r),i&&t(e,i),e}}(),Lr=function(){function t(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};St(this,t);var i=t.DefaultConfig;if((r.liveSyncDurationCount||r.liveMaxLatencyDurationCount)&&(r.liveSyncDuration||r.liveMaxLatencyDuration))throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");for(var a in i)a in r||(r[a]=i[a]);if(void 0!==r.liveMaxLatencyDurationCount&&r.liveMaxLatencyDurationCount<=r.liveSyncDurationCount)throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');if(void 0!==r.liveMaxLatencyDuration&&(r.liveMaxLatencyDuration<=r.liveSyncDuration||void 0===r.liveSyncDuration))throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');Object(Dt.a)(r.debug),this.config=r,this._autoLevelCapping=-1;var n=this.observer=new ie.a;n.trigger=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];n.emit.apply(n,[t,t].concat(r))},n.off=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];n.removeListener.apply(n,[t].concat(r))},this.on=n.on.bind(n),this.off=n.off.bind(n),this.trigger=n.trigger.bind(n);var o=this.abrController=new r.abrController(this),s=new r.bufferController(this),l=new r.capLevelController(this),u=new r.fpsController(this),d=new qt(this),c=new zt(this),f=new Qt(this),h=new be(this),p=this.levelController=new ve(this),g=this.streamController=new he(this),v=[p,g],m=r.audioStreamController;m&&v.push(new m(this)),this.networkControllers=v;var y=[d,c,f,o,s,l,u,h];if(m=r.audioTrackController){var b=new m(this);this.audioTrackController=b,y.push(b)}if(m=r.subtitleTrackController){var E=new m(this);this.subtitleTrackController=E,y.push(E)}[r.subtitleStreamController,r.timelineController].forEach(function(t){t&&y.push(new t(e))}),this.coreComponents=y}return t.isSupported=function(){var t=window.MediaSource=window.MediaSource||window.WebKitMediaSource,e=window.SourceBuffer=window.SourceBuffer||window.WebKitSourceBuffer,r=t&&"function"==typeof t.isTypeSupported&&t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),i=!e||e.prototype&&"function"==typeof e.prototype.appendBuffer&&"function"==typeof e.prototype.remove;return r&&i},_r(t,null,[{key:"version",get:function(){return"0.8.4"}},{key:"Events",get:function(){return Lt.a}},{key:"ErrorTypes",get:function(){return kt.b}},{key:"ErrorDetails",get:function(){return kt.a}},{key:"DefaultConfig",get:function(){return t.defaultConfig?t.defaultConfig:wr},set:function(e){t.defaultConfig=e}}]),t.prototype.destroy=function(){Dt.b.log("destroy"),this.trigger(Lt.a.DESTROYING),this.detachMedia(),this.coreComponents.concat(this.networkControllers).forEach(function(t){t.destroy()}),this.url=null,this.observer.removeAllListeners(),this._autoLevelCapping=-1},t.prototype.attachMedia=function(t){Dt.b.log("attachMedia"),this.media=t,this.trigger(Lt.a.MEDIA_ATTACHING,{media:t})},t.prototype.detachMedia=function(){Dt.b.log("detachMedia"),this.trigger(Lt.a.MEDIA_DETACHING),this.media=null},t.prototype.loadSource=function(t){t=_t.a.buildAbsoluteURL(window.location.href,t,{alwaysNormalize:!0}),Dt.b.log("loadSource:"+t),this.url=t,this.trigger(Lt.a.MANIFEST_LOADING,{url:t})},t.prototype.startLoad=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1;Dt.b.log("startLoad("+t+")"),this.networkControllers.forEach(function(e){e.startLoad(t)})},t.prototype.stopLoad=function(){Dt.b.log("stopLoad"),this.networkControllers.forEach(function(t){t.stopLoad()})},t.prototype.swapAudioCodec=function(){Dt.b.log("swapAudioCodec"),this.streamController.swapAudioCodec()},t.prototype.recoverMediaError=function(){Dt.b.log("recoverMediaError");var t=this.media;this.detachMedia(),this.attachMedia(t)},_r(t,[{key:"levels",get:function(){return this.levelController.levels}},{key:"currentLevel",get:function(){return this.streamController.currentLevel},set:function(t){Dt.b.log("set currentLevel:"+t),this.loadLevel=t,this.streamController.immediateLevelSwitch()}},{key:"nextLevel",get:function(){return this.streamController.nextLevel},set:function(t){Dt.b.log("set nextLevel:"+t),this.levelController.manualLevel=t,this.streamController.nextLevelSwitch()}},{key:"loadLevel",get:function(){return this.levelController.level},set:function(t){Dt.b.log("set loadLevel:"+t),this.levelController.manualLevel=t}},{key:"nextLoadLevel",get:function(){return this.levelController.nextLoadLevel},set:function(t){this.levelController.nextLoadLevel=t}},{key:"firstLevel",get:function(){return Math.max(this.levelController.firstLevel,this.minAutoLevel)},set:function(t){Dt.b.log("set firstLevel:"+t),this.levelController.firstLevel=t}},{key:"startLevel",get:function(){return this.levelController.startLevel},set:function(t){Dt.b.log("set startLevel:"+t);var e=this;t!==-1&&(t=Math.max(t,e.minAutoLevel)),e.levelController.startLevel=t}},{key:"autoLevelCapping",get:function(){return this._autoLevelCapping},set:function(t){Dt.b.log("set autoLevelCapping:"+t),this._autoLevelCapping=t}},{key:"autoLevelEnabled",get:function(){return this.levelController.manualLevel===-1}},{key:"manualLevel",get:function(){return this.levelController.manualLevel}},{key:"minAutoLevel",get:function(){for(var t=this,e=t.levels,r=t.config.minAutoBitrate,i=e?e.length:0,a=0;a<i;a++){var n=e[a].realBitrate?Math.max(e[a].realBitrate,e[a].bitrate):e[a].bitrate;if(n>r)return a}return 0}},{key:"maxAutoLevel",get:function(){var t=this,e=t.levels,r=t.autoLevelCapping,i=void 0;return i=r===-1&&e&&e.length?e.length-1:r}},{key:"nextAutoLevel",get:function(){var t=this;return Math.min(Math.max(t.abrController.nextAutoLevel,t.minAutoLevel),t.maxAutoLevel)},set:function(t){var e=this;e.abrController.nextAutoLevel=Math.max(e.minAutoLevel,t)}},{key:"audioTracks",get:function(){var t=this.audioTrackController;return t?t.audioTracks:[]}},{key:"audioTrack",get:function(){var t=this.audioTrackController;return t?t.audioTrack:-1},set:function(t){var e=this.audioTrackController;e&&(e.audioTrack=t)}},{key:"liveSyncPosition",get:function(){return this.streamController.liveSyncPosition}},{key:"subtitleTracks",get:function(){var t=this.subtitleTrackController;return t?t.subtitleTracks:[]}},{key:"subtitleTrack",get:function(){var t=this.subtitleTrackController;return t?t.subtitleTrack:-1},set:function(t){var e=this.subtitleTrackController;e&&(e.subtitleTrack=t)}}]),t}();e.default=Lr},function(t,e,r){function i(t){function e(i){if(r[i])return r[i].exports;var a=r[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,i){e.o(t,r)||Object.defineProperty(t,r,{
configurable:!1,enumerable:!0,get:i})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e.oe=function(t){throw console.error(t),t};var i=e(e.s=ENTRY_MODULE);return i.default||i}function a(t){return(t+"").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}function n(t){var e=[],r=t.toString(),i=r.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);if(!i)return e;for(var n,o=i[1],s=new RegExp("(\\\\n|\\W)"+a(o)+"\\((/\\*.*?\\*/)?s?.*?([\\.|\\-|\\w|/|@]+).*?\\)","g");n=s.exec(r);)e.push(n[3]);return e}function o(t,e){for(var r=[e],i=[],a={};r.length;){var o=r.pop();if(!a[o]&&t[o]){a[o]=!0,i.push(o);var s=n(t[o]);r=r.concat(s)}}return i}t.exports=function(t,e){e=e||{};var a=r.m,n=e.all?Object.keys(a):o(a,t),s="("+i.toString().replace("ENTRY_MODULE",JSON.stringify(t))+")({"+n.map(function(t){return""+JSON.stringify(t)+": "+a[t].toString()}).join(",")+"})(self);",l=new window.Blob([s],{type:"text/javascript"});if(e.bare)return l;var u=window.URL||window.webkitURL||window.mozURL||window.msURL,d=u.createObjectURL(l),c=new window.Worker(d);return c.objectURL=d,c}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=r(6),a=r(1),n=r(0),o=r(4),s=r.n(o),l=function(t){var e=new s.a;e.trigger=function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];e.emit.apply(e,[t,t].concat(i))},e.off=function(t){for(var r=arguments.length,i=Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];e.removeListener.apply(e,[t].concat(i))};var r=function(e,r){t.postMessage({event:e,data:r})};t.addEventListener("message",function(a){var o=a.data;switch(o.cmd){case"init":var s=JSON.parse(o.config);t.demuxer=new i.a(e,o.typeSupported,s,o.vendor);try{Object(n.a)(s.debug===!0)}catch(t){console.warn("demuxerWorker: unable to enable logs")}r("init",null);break;case"demux":t.demuxer.push(o.data,o.decryptdata,o.initSegment,o.audioCodec,o.videoCodec,o.timeOffset,o.discontinuity,o.trackSwitch,o.contiguous,o.duration,o.accurateTimeOffset,o.defaultInitPTS)}}),e.on(a.a.FRAG_DECRYPTED,r),e.on(a.a.FRAG_PARSING_INIT_SEGMENT,r),e.on(a.a.FRAG_PARSED,r),e.on(a.a.ERROR,r),e.on(a.a.FRAG_PARSING_METADATA,r),e.on(a.a.FRAG_PARSING_USERDATA,r),e.on(a.a.INIT_PTS_FOUND,r),e.on(a.a.FRAG_PARSING_DATA,function(e,r){var i=[],a={event:e,data:r};r.data1&&(a.data1=r.data1.buffer,i.push(r.data1.buffer),delete r.data1),r.data2&&(a.data2=r.data2.buffer,i.push(r.data2.buffer),delete r.data2),t.postMessage(a,i)})};e.default=l}]).default})},function(t,e,r){var i=r(4);t.exports={TextEncoder:i.TextEncoder,TextDecoder:i.TextDecoder}},function(t,e){!function(e){"use strict";function r(t,e,r){return e<=t&&t<=r}function i(t,e){return t.indexOf(e)!==-1}function a(t){if(void 0===t)return{};if(t===Object(t))return t;throw TypeError("Could not convert argument to dictionary")}function n(t){for(var e=String(t),r=e.length,i=0,a=[];i<r;){var n=e.charCodeAt(i);if(n<55296||n>57343)a.push(n);else if(56320<=n&&n<=57343)a.push(65533);else if(55296<=n&&n<=56319)if(i===r-1)a.push(65533);else{var o=e.charCodeAt(i+1);if(56320<=o&&o<=57343){var s=1023&n,l=1023&o;a.push(65536+(s<<10)+l),i+=1}else a.push(65533)}i+=1}return a}function o(t){for(var e="",r=0;r<t.length;++r){var i=t[r];i<=65535?e+=String.fromCharCode(i):(i-=65536,e+=String.fromCharCode((i>>10)+55296,(1023&i)+56320))}return e}function s(t){return 0<=t&&t<=127}function l(t){this.tokens=[].slice.call(t),this.tokens.reverse()}function u(t,e){if(t)throw TypeError("Decoder error");return e||65533}function d(t){throw TypeError("The code point "+t+" could not be encoded.")}function c(){}function f(){}function h(t){return t=String(t).trim().toLowerCase(),Object.prototype.hasOwnProperty.call(X,t)?X[t]:null}function p(t,e){return e?e[t]||null:null}function g(t,e){var r=e.indexOf(t);return r===-1?null:r}function v(t){if(!("encoding-indexes"in e))throw Error("Indexes missing. Did you forget to include encoding-indexes.js first?");return e["encoding-indexes"][t]}function m(t){if(t>39419&&t<189e3||t>1237575)return null;if(7457===t)return 59335;var e,r=0,i=0,a=v("gb18030-ranges");for(e=0;e<a.length;++e){var n=a[e];if(!(n[0]<=t))break;r=n[0],i=n[1]}return i+t-r}function y(t){if(59335===t)return 7457;var e,r=0,i=0,a=v("gb18030-ranges");for(e=0;e<a.length;++e){var n=a[e];if(!(n[1]<=t))break;r=n[1],i=n[0]}return i+t-r}function b(t){Q=Q||v("jis0208").map(function(t,e){return r(e,8272,8835)?null:t});var e=Q;return e.indexOf(t)}function E(t){J=J||v("big5").map(function(t,e){return e<5024?null:t});var e=J;return 9552===t||9566===t||9569===t||9578===t||21313===t||21317===t?e.lastIndexOf(t):g(t,e)}function T(t,e){if(!(this instanceof T))throw TypeError("Called as a function. Did you forget 'new'?");t=void 0!==t?String(t):tt,e=a(e),this._encoding=null,this._decoder=null,this._ignoreBOM=!1,this._BOMseen=!1,this._error_mode="replacement",this._do_not_flush=!1;var r=h(t);if(null===r||"replacement"===r.name)throw RangeError("Unknown encoding: "+t);if(!Z[r.name])throw Error("Decoder not present. Did you forget to include encoding-indexes.js first?");var i=this;return i._encoding=r,Boolean(e.fatal)&&(i._error_mode="fatal"),Boolean(e.ignoreBOM)&&(i._ignoreBOM=!0),Object.defineProperty||(this.encoding=i._encoding.name.toLowerCase(),this.fatal="fatal"===i._error_mode,this.ignoreBOM=i._ignoreBOM),i}function R(t,r){if(!(this instanceof R))throw TypeError("Called as a function. Did you forget 'new'?");r=a(r),this._encoding=null,this._encoder=null,this._do_not_flush=!1,this._fatal=Boolean(r.fatal)?"fatal":"replacement";var i=this;if(Boolean(r.NONSTANDARD_allowLegacyEncoding)){t=void 0!==t?String(t):tt;var n=h(t);if(null===n||"replacement"===n.name)throw RangeError("Unknown encoding: "+t);if(!$[n.name])throw Error("Encoder not present. Did you forget to include encoding-indexes.js first?");i._encoding=n}else i._encoding=h("utf-8"),void 0!==t&&"console"in e&&console.warn("TextEncoder constructor called with encoding label, which is ignored.");return Object.defineProperty||(this.encoding=i._encoding.name.toLowerCase()),i}function S(t){var e=t.fatal,i=0,a=0,n=0,o=128,s=191;this.handler=function(t,l){if(l===q&&0!==n)return n=0,u(e);if(l===q)return Y;if(0===n){if(r(l,0,127))return l;if(r(l,194,223))n=1,i=31&l;else if(r(l,224,239))224===l&&(o=160),237===l&&(s=159),n=2,i=15&l;else{if(!r(l,240,244))return u(e);240===l&&(o=144),244===l&&(s=143),n=3,i=7&l}return null}if(!r(l,o,s))return i=n=a=0,o=128,s=191,t.prepend(l),u(e);if(o=128,s=191,i=i<<6|63&l,a+=1,a!==n)return null;var d=i;return i=n=a=0,d}}function A(t){t.fatal;this.handler=function(t,e){if(e===q)return Y;if(V(e))return e;var i,a;r(e,128,2047)?(i=1,a=192):r(e,2048,65535)?(i=2,a=224):r(e,65536,1114111)&&(i=3,a=240);for(var n=[(e>>6*i)+a];i>0;){var o=e>>6*(i-1);n.push(128|63&o),i-=1}return n}}function w(t,e){var r=e.fatal;this.handler=function(e,i){if(i===q)return Y;if(s(i))return i;var a=t[i-128];return null===a?u(r):a}}function _(t,e){e.fatal;this.handler=function(e,r){if(r===q)return Y;if(V(r))return r;var i=g(r,t);return null===i&&d(r),i+128}}function L(t){var e=t.fatal,i=0,a=0,n=0;this.handler=function(t,o){if(o===q&&0===i&&0===a&&0===n)return Y;o!==q||0===i&&0===a&&0===n||(i=0,a=0,n=0,u(e));var l;if(0!==n){l=null,r(o,48,57)&&(l=m(10*(126*(10*(i-129)+a-48)+n-129)+o-48));var d=[a,n,o];return i=0,a=0,n=0,null===l?(t.prepend(d),u(e)):l}if(0!==a)return r(o,129,254)?(n=o,null):(t.prepend([a,o]),i=0,a=0,u(e));if(0!==i){if(r(o,48,57))return a=o,null;var c=i,f=null;i=0;var h=o<127?64:65;return(r(o,64,126)||r(o,128,254))&&(f=190*(c-129)+(o-h)),l=null===f?null:p(f,v("gb18030")),null===l&&s(o)&&t.prepend(o),null===l?u(e):l}return s(o)?o:128===o?8364:r(o,129,254)?(i=o,null):u(e)}}function k(t,e){t.fatal;this.handler=function(t,r){if(r===q)return Y;if(V(r))return r;if(58853===r)return d(r);if(e&&8364===r)return 128;var i=g(r,v("gb18030"));if(null!==i){var a=W(i/190)+129,n=i%190,o=n<63?64:65;return[a,n+o]}if(e)return d(r);i=y(r);var s=W(i/10/126/10);i-=10*s*126*10;var l=W(i/10/126);i-=10*l*126;var u=W(i/10),c=i-10*u;return[s+129,l+48,u+129,c+48]}}function D(t){var e=t.fatal,i=0;this.handler=function(t,a){if(a===q&&0!==i)return i=0,u(e);if(a===q&&0===i)return Y;if(0!==i){var n=i,o=null;i=0;var l=a<127?64:98;switch((r(a,64,126)||r(a,161,254))&&(o=157*(n-129)+(a-l)),o){case 1133:return[202,772];case 1135:return[202,780];case 1164:return[234,772];case 1166:return[234,780]}var d=null===o?null:p(o,v("big5"));return null===d&&s(a)&&t.prepend(a),null===d?u(e):d}return s(a)?a:r(a,129,254)?(i=a,null):u(e)}}function I(t){t.fatal;this.handler=function(t,e){if(e===q)return Y;if(V(e))return e;var r=E(e);if(null===r)return d(e);var i=W(r/157)+129;if(i<161)return d(e);var a=r%157,n=a<63?64:98;return[i,a+n]}}function O(t){var e=t.fatal,i=!1,a=0;this.handler=function(t,n){if(n===q&&0!==a)return a=0,u(e);if(n===q&&0===a)return Y;if(142===a&&r(n,161,223))return a=0,65216+n;if(143===a&&r(n,161,254))return i=!0,a=n,null;if(0!==a){var o=a;a=0;var l=null;return r(o,161,254)&&r(n,161,254)&&(l=p(94*(o-161)+(n-161),v(i?"jis0212":"jis0208"))),i=!1,r(n,161,254)||t.prepend(n),null===l?u(e):l}return s(n)?n:142===n||143===n||r(n,161,254)?(a=n,null):u(e)}}function C(t){t.fatal;this.handler=function(t,e){if(e===q)return Y;if(V(e))return e;if(165===e)return 92;if(8254===e)return 126;if(r(e,65377,65439))return[142,e-65377+161];8722===e&&(e=65293);var i=g(e,v("jis0208"));if(null===i)return d(e);var a=W(i/94)+161,n=i%94+161;return[a,n]}}function x(t){var e=t.fatal,i={ASCII:0,Roman:1,Katakana:2,LeadByte:3,TrailByte:4,EscapeStart:5,Escape:6},a=i.ASCII,n=i.ASCII,o=0,s=!1;this.handler=function(t,l){switch(a){default:case i.ASCII:return 27===l?(a=i.EscapeStart,null):r(l,0,127)&&14!==l&&15!==l&&27!==l?(s=!1,l):l===q?Y:(s=!1,u(e));case i.Roman:return 27===l?(a=i.EscapeStart,null):92===l?(s=!1,165):126===l?(s=!1,8254):r(l,0,127)&&14!==l&&15!==l&&27!==l&&92!==l&&126!==l?(s=!1,l):l===q?Y:(s=!1,u(e));case i.Katakana:return 27===l?(a=i.EscapeStart,null):r(l,33,95)?(s=!1,65344+l):l===q?Y:(s=!1,u(e));case i.LeadByte:return 27===l?(a=i.EscapeStart,null):r(l,33,126)?(s=!1,o=l,a=i.TrailByte,null):l===q?Y:(s=!1,u(e));case i.TrailByte:if(27===l)return a=i.EscapeStart,u(e);if(r(l,33,126)){a=i.LeadByte;var d=94*(o-33)+l-33,c=p(d,v("jis0208"));return null===c?u(e):c}return l===q?(a=i.LeadByte,t.prepend(l),u(e)):(a=i.LeadByte,u(e));case i.EscapeStart:return 36===l||40===l?(o=l,a=i.Escape,null):(t.prepend(l),s=!1,a=n,u(e));case i.Escape:var f=o;o=0;var h=null;if(40===f&&66===l&&(h=i.ASCII),40===f&&74===l&&(h=i.Roman),40===f&&73===l&&(h=i.Katakana),36!==f||64!==l&&66!==l||(h=i.LeadByte),null!==h){a=a=h;var g=s;return s=!0,g?u(e):null}return t.prepend([f,l]),s=!1,a=n,u(e)}}}function P(t){var e=(t.fatal,{ASCII:0,Roman:1,jis0208:2}),r=e.ASCII;this.handler=function(t,i){if(i===q&&r!==e.ASCII)return t.prepend(i),r=e.ASCII,[27,40,66];if(i===q&&r===e.ASCII)return Y;if(!(r!==e.ASCII&&r!==e.Roman||14!==i&&15!==i&&27!==i))return d(65533);if(r===e.ASCII&&V(i))return i;if(r===e.Roman&&(V(i)&&92!==i&&126!==i||165==i||8254==i)){if(V(i))return i;if(165===i)return 92;if(8254===i)return 126}if(V(i)&&r!==e.ASCII)return t.prepend(i),r=e.ASCII,[27,40,66];if((165===i||8254===i)&&r!==e.Roman)return t.prepend(i),r=e.Roman,[27,40,74];8722===i&&(i=65293);var a=g(i,v("jis0208"));if(null===a)return d(i);if(r!==e.jis0208)return t.prepend(i),r=e.jis0208,[27,36,66];var n=W(a/94)+33,o=a%94+33;return[n,o]}}function F(t){var e=t.fatal,i=0;this.handler=function(t,a){if(a===q&&0!==i)return i=0,u(e);if(a===q&&0===i)return Y;if(0!==i){var n=i,o=null;i=0;var l=a<127?64:65,d=n<160?129:193;if((r(a,64,126)||r(a,128,252))&&(o=188*(n-d)+a-l),r(o,8836,10715))return 48508+o;var c=null===o?null:p(o,v("jis0208"));return null===c&&s(a)&&t.prepend(a),null===c?u(e):c}return s(a)||128===a?a:r(a,161,223)?65216+a:r(a,129,159)||r(a,224,252)?(i=a,null):u(e)}}function N(t){t.fatal;this.handler=function(t,e){if(e===q)return Y;if(V(e)||128===e)return e;if(165===e)return 92;if(8254===e)return 126;if(r(e,65377,65439))return e-65377+161;8722===e&&(e=65293);var i=b(e);if(null===i)return d(e);var a=W(i/188),n=a<31?129:193,o=i%188,s=o<63?64:65;return[a+n,o+s]}}function M(t){var e=t.fatal,i=0;this.handler=function(t,a){if(a===q&&0!==i)return i=0,u(e);if(a===q&&0===i)return Y;if(0!==i){var n=i,o=null;i=0,r(a,65,254)&&(o=190*(n-129)+(a-65));var l=null===o?null:p(o,v("euc-kr"));return null===o&&s(a)&&t.prepend(a),null===l?u(e):l}return s(a)?a:r(a,129,254)?(i=a,null):u(e)}}function U(t){t.fatal;this.handler=function(t,e){if(e===q)return Y;if(V(e))return e;var r=g(e,v("euc-kr"));if(null===r)return d(e);var i=W(r/190)+129,a=r%190+65;return[i,a]}}function B(t,e){var r=t>>8,i=255&t;return e?[r,i]:[i,r]}function G(t,e){var i=e.fatal,a=null,n=null;this.handler=function(e,o){if(o===q&&(null!==a||null!==n))return u(i);if(o===q&&null===a&&null===n)return Y;if(null===a)return a=o,null;var s;if(s=t?(a<<8)+o:(o<<8)+a,a=null,null!==n){var l=n;return n=null,r(s,56320,57343)?65536+1024*(l-55296)+(s-56320):(e.prepend(B(s,t)),u(i))}return r(s,55296,56319)?(n=s,null):r(s,56320,57343)?u(i):s}}function j(t,e){e.fatal;this.handler=function(e,i){if(i===q)return Y;if(r(i,0,65535))return B(i,t);var a=B((i-65536>>10)+55296,t),n=B((i-65536&1023)+56320,t);return a.concat(n)}}function K(t){t.fatal;this.handler=function(t,e){return e===q?Y:s(e)?e:63360+e-128}}function H(t){t.fatal;this.handler=function(t,e){return e===q?Y:V(e)?e:r(e,63360,63487)?e-63360+128:d(e)}}var W=Math.floor,V=s,q=-1;l.prototype={endOfStream:function(){return!this.tokens.length},read:function(){return this.tokens.length?this.tokens.pop():q},prepend:function(t){if(Array.isArray(t))for(var e=t;e.length;)this.tokens.push(e.pop());else this.tokens.push(t)},push:function(t){if(Array.isArray(t))for(var e=t;e.length;)this.tokens.unshift(e.shift());else this.tokens.unshift(t)}};var Y=-1;c.prototype={handler:function(t,e){}},f.prototype={handler:function(t,e){}};var z=[{encodings:[{labels:["unicode-1-1-utf-8","utf-8","utf8"],name:"UTF-8"}],heading:"The Encoding"},{encodings:[{labels:["866","cp866","csibm866","ibm866"],name:"IBM866"},{labels:["csisolatin2","iso-8859-2","iso-ir-101","iso8859-2","iso88592","iso_8859-2","iso_8859-2:1987","l2","latin2"],name:"ISO-8859-2"},{labels:["csisolatin3","iso-8859-3","iso-ir-109","iso8859-3","iso88593","iso_8859-3","iso_8859-3:1988","l3","latin3"],name:"ISO-8859-3"},{labels:["csisolatin4","iso-8859-4","iso-ir-110","iso8859-4","iso88594","iso_8859-4","iso_8859-4:1988","l4","latin4"],name:"ISO-8859-4"},{labels:["csisolatincyrillic","cyrillic","iso-8859-5","iso-ir-144","iso8859-5","iso88595","iso_8859-5","iso_8859-5:1988"],name:"ISO-8859-5"},{labels:["arabic","asmo-708","csiso88596e","csiso88596i","csisolatinarabic","ecma-114","iso-8859-6","iso-8859-6-e","iso-8859-6-i","iso-ir-127","iso8859-6","iso88596","iso_8859-6","iso_8859-6:1987"],name:"ISO-8859-6"},{labels:["csisolatingreek","ecma-118","elot_928","greek","greek8","iso-8859-7","iso-ir-126","iso8859-7","iso88597","iso_8859-7","iso_8859-7:1987","sun_eu_greek"],name:"ISO-8859-7"},{labels:["csiso88598e","csisolatinhebrew","hebrew","iso-8859-8","iso-8859-8-e","iso-ir-138","iso8859-8","iso88598","iso_8859-8","iso_8859-8:1988","visual"],name:"ISO-8859-8"},{labels:["csiso88598i","iso-8859-8-i","logical"],name:"ISO-8859-8-I"},{labels:["csisolatin6","iso-8859-10","iso-ir-157","iso8859-10","iso885910","l6","latin6"],name:"ISO-8859-10"},{labels:["iso-8859-13","iso8859-13","iso885913"],name:"ISO-8859-13"},{labels:["iso-8859-14","iso8859-14","iso885914"],name:"ISO-8859-14"},{labels:["csisolatin9","iso-8859-15","iso8859-15","iso885915","iso_8859-15","l9"],name:"ISO-8859-15"},{labels:["iso-8859-16"],name:"ISO-8859-16"},{labels:["cskoi8r","koi","koi8","koi8-r","koi8_r"],name:"KOI8-R"},{labels:["koi8-ru","koi8-u"],name:"KOI8-U"},{labels:["csmacintosh","mac","macintosh","x-mac-roman"],name:"macintosh"},{labels:["dos-874","iso-8859-11","iso8859-11","iso885911","tis-620","windows-874"],name:"windows-874"},{labels:["cp1250","windows-1250","x-cp1250"],name:"windows-1250"},{labels:["cp1251","windows-1251","x-cp1251"],name:"windows-1251"},{labels:["ansi_x3.4-1968","ascii","cp1252","cp819","csisolatin1","ibm819","iso-8859-1","iso-ir-100","iso8859-1","iso88591","iso_8859-1","iso_8859-1:1987","l1","latin1","us-ascii","windows-1252","x-cp1252"],name:"windows-1252"},{labels:["cp1253","windows-1253","x-cp1253"],name:"windows-1253"},{labels:["cp1254","csisolatin5","iso-8859-9","iso-ir-148","iso8859-9","iso88599","iso_8859-9","iso_8859-9:1989","l5","latin5","windows-1254","x-cp1254"],name:"windows-1254"},{labels:["cp1255","windows-1255","x-cp1255"],name:"windows-1255"},{labels:["cp1256","windows-1256","x-cp1256"],name:"windows-1256"},{labels:["cp1257","windows-1257","x-cp1257"],name:"windows-1257"},{labels:["cp1258","windows-1258","x-cp1258"],name:"windows-1258"},{labels:["x-mac-cyrillic","x-mac-ukrainian"],name:"x-mac-cyrillic"}],heading:"Legacy single-byte encodings"},{encodings:[{labels:["chinese","csgb2312","csiso58gb231280","gb2312","gb_2312","gb_2312-80","gbk","iso-ir-58","x-gbk"],name:"GBK"},{labels:["gb18030"],name:"gb18030"}],heading:"Legacy multi-byte Chinese (simplified) encodings"},{encodings:[{labels:["big5","big5-hkscs","cn-big5","csbig5","x-x-big5"],name:"Big5"}],heading:"Legacy multi-byte Chinese (traditional) encodings"},{encodings:[{labels:["cseucpkdfmtjapanese","euc-jp","x-euc-jp"],name:"EUC-JP"},{labels:["csiso2022jp","iso-2022-jp"],name:"ISO-2022-JP"},{labels:["csshiftjis","ms932","ms_kanji","shift-jis","shift_jis","sjis","windows-31j","x-sjis"],name:"Shift_JIS"}],heading:"Legacy multi-byte Japanese encodings"},{encodings:[{labels:["cseuckr","csksc56011987","euc-kr","iso-ir-149","korean","ks_c_5601-1987","ks_c_5601-1989","ksc5601","ksc_5601","windows-949"],name:"EUC-KR"}],heading:"Legacy multi-byte Korean encodings"},{encodings:[{labels:["csiso2022kr","hz-gb-2312","iso-2022-cn","iso-2022-cn-ext","iso-2022-kr"],name:"replacement"},{labels:["utf-16be"],name:"UTF-16BE"},{labels:["utf-16","utf-16le"],name:"UTF-16LE"},{labels:["x-user-defined"],name:"x-user-defined"}],heading:"Legacy miscellaneous encodings"}],X={};z.forEach(function(t){t.encodings.forEach(function(t){t.labels.forEach(function(e){X[e]=t})})});var Q,J,$={},Z={},tt="utf-8";Object.defineProperty&&(Object.defineProperty(T.prototype,"encoding",{get:function(){return this._encoding.name.toLowerCase()}}),Object.defineProperty(T.prototype,"fatal",{get:function(){return"fatal"===this._error_mode}}),Object.defineProperty(T.prototype,"ignoreBOM",{get:function(){return this._ignoreBOM}})),T.prototype.decode=function(t,e){function r(t){return!i(["UTF-8","UTF-16LE","UTF-16BE"],this._encoding.name)||this._ignoreBOM||this._BOMseen||(t.length>0&&65279===t[0]?(this._BOMseen=!0,t.shift()):t.length>0&&(this._BOMseen=!0)),o(t)}var n;n="object"==typeof t&&t instanceof ArrayBuffer?new Uint8Array(t):"object"==typeof t&&"buffer"in t&&t.buffer instanceof ArrayBuffer?new Uint8Array(t.buffer,t.byteOffset,t.byteLength):new Uint8Array(0),e=a(e),this._do_not_flush||(this._decoder=Z[this._encoding.name]({fatal:"fatal"===this._error_mode}),this._BOMseen=!1),this._do_not_flush=Boolean(e.stream);for(var s,u=new l(n),d=[];;){var c=u.read();if(c===q)break;if(s=this._decoder.handler(u,c),s===Y)break;null!==s&&(Array.isArray(s)?d.push.apply(d,s):d.push(s))}if(!this._do_not_flush){do{if(s=this._decoder.handler(u,u.read()),s===Y)break;null!==s&&(Array.isArray(s)?d.push.apply(d,s):d.push(s))}while(!u.endOfStream());this._decoder=null}return r.call(this,d)},Object.defineProperty&&Object.defineProperty(R.prototype,"encoding",{get:function(){return this._encoding.name.toLowerCase()}}),R.prototype.encode=function(t,e){t=void 0===t?"":String(t),e=a(e),this._do_not_flush||(this._encoder=$[this._encoding.name]({fatal:"fatal"===this._fatal})),this._do_not_flush=Boolean(e.stream);for(var r,i=new l(n(t)),o=[];;){var s=i.read();if(s===q)break;if(r=this._encoder.handler(i,s),r===Y)break;Array.isArray(r)?o.push.apply(o,r):o.push(r)}if(!this._do_not_flush){for(;;){if(r=this._encoder.handler(i,i.read()),r===Y)break;Array.isArray(r)?o.push.apply(o,r):o.push(r)}this._encoder=null}return new Uint8Array(o)},$["UTF-8"]=function(t){return new A(t)},Z["UTF-8"]=function(t){return new S(t)},function(){"encoding-indexes"in e&&z.forEach(function(t){"Legacy single-byte encodings"===t.heading&&t.encodings.forEach(function(t){var e=t.name,r=v(e.toLowerCase());Z[e]=function(t){return new w(r,t)},$[e]=function(t){return new _(r,t)}})})}(),Z.GBK=function(t){return new L(t)},$.GBK=function(t){return new k(t,!0)},$.gb18030=function(t){return new k(t)},Z.gb18030=function(t){return new L(t)},$.Big5=function(t){return new I(t)},Z.Big5=function(t){return new D(t)},$["EUC-JP"]=function(t){return new C(t)},Z["EUC-JP"]=function(t){return new O(t)},$["ISO-2022-JP"]=function(t){return new P(t)},Z["ISO-2022-JP"]=function(t){return new x(t)},$.Shift_JIS=function(t){return new N(t)},Z.Shift_JIS=function(t){return new F(t)},$["EUC-KR"]=function(t){return new U(t)},Z["EUC-KR"]=function(t){return new M(t)},$["UTF-16BE"]=function(t){return new j(!0,t)},Z["UTF-16BE"]=function(t){return new G(!0,t)},$["UTF-16LE"]=function(t){return new j(!1,t)},Z["UTF-16LE"]=function(t){return new G(!1,t)},$["x-user-defined"]=function(t){return new H(t)},Z["x-user-defined"]=function(t){return new K(t)},e.TextEncoder||(e.TextEncoder=R),e.TextDecoder||(e.TextDecoder=T),"undefined"!=typeof t&&t.exports&&(t.exports={TextEncoder:e.TextEncoder,TextDecoder:e.TextDecoder,EncodingIndexes:e["encoding-indexes"]})}(this||{})},function(t,e,r){var i=r(1);i(flowplayer)}]);
/*@
  @end
@*/

