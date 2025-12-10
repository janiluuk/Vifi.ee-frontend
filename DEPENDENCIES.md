# Dependencies Documentation

## Current Frontend Dependencies

### Core Libraries (Vendor Directory)

#### jQuery
- **Current Version**: 2.1.0
- **File**: `js/vendor/jquery-2.1.0.min.js`
- **Status**: ⚠️ Outdated (Latest stable: 3.7.1)
- **Recommendation**: Update to jQuery 3.x for security patches and performance improvements
- **Breaking Changes**: Migration guide available at https://jquery.com/upgrade-guide/3.0/

#### Backbone.js
- **Current Version**: Unknown (appears to be an older version)
- **File**: `js/vendor/backbone-min.js`
- **Status**: ⚠️ Needs version identification and possible update
- **Recommendation**: Update to latest stable version (1.4.1+)

#### Underscore.js
- **Current Version**: Unknown
- **File**: `js/vendor/underscore-min.js`
- **Status**: ⚠️ Needs version identification
- **Recommendation**: Consider updating or migrating to Lodash for better performance

### Backbone Plugins

1. **backbone.paginator.js** - Pagination support
2. **backbone.stickit.min.js** - Two-way data binding
3. **backbone.localstorage.min.js** - LocalStorage sync
4. **backbone.validation.js** - Form validation
5. **backbone-polling.min.js** - Polling support

### UI/UX Libraries

1. **Flowplayer** (Multiple versions)
   - flowplayer.fp6.js
   - flowplayer.fp7.js
   - flowplayer.html5.js
   - flowplayer.flash.js
   - flowplayer.hls.js
   - **Status**: ⚠️ Multiple versions suggest migration in progress

2. **Swiper** (idangerous.swiper.js)
   - **Status**: ⚠️ "idangerous.swiper" is deprecated, should use Swiper.js

3. **Isotope** (isotope.js) - Grid layout

4. **Magnific Popup** (jquery.magnific-popup.min.js) - Modal/lightbox

5. **Blazy** (blazy.js) - Lazy loading images

6. **LazyLoad XT** (lazyloadxt.min.js) - Alternative lazy loading

7. **ImagesLoaded** (imagesloaded.min.js) - Image loading detection

8. **Snap.js** (snap.min.js) - Mobile drawer menu

9. **StickUp** (stickUp.js) - Sticky navigation

10. **Enquire.js** (enquire.js) - Media query listener

### jQuery Plugins

1. **jQuery Cookie** (jquery.cookie.min.js)
   - **Status**: ⚠️ Consider migrating to js-cookie (vanilla JS)

2. **jQuery Velocity** (jquery.velocity.min.js) - Animation

3. **jQuery ScrollTo** (jquery.scrollTo.min.js) - Smooth scrolling

4. **jQuery LazyLoad** (jquery.lazyload.min.js)

5. **jQuery TubePlayer** (jquery.tubeplayer.min.js) - YouTube player

6. **jQuery Mobile Detect** (jquery.mobiledetect.js)

7. **jQuery Fancy Select** (jquery.fancyselect.min.js)

8. **jQuery SerializeObject** (jquery.serializeobject.js)

9. **Rating** (rating.min.js)

### Template Engine

- **ICanHaz** (icanhaz.min.js)
  - **Status**: ⚠️ Deprecated, consider Handlebars or Mustache directly

### External CDN Dependencies

#### Sentry (Error Tracking)
- **Old**: Raven.js 3.26.4 + Sentry 5.15.5
- **New**: Sentry 7.91.0 ✅ Updated
- **Status**: ✅ Updated to latest version

#### Google Fonts
- **Open Sans** - Multiple weights
- **Status**: ✅ OK (CDN loaded)

#### Leaflet (Maps)
- **Version**: 1.6.0
- **Status**: ⚠️ Check for updates (Latest: 1.9.x)
- **Loading**: Dynamic (loaded when needed)

#### Facebook SDK
- **Status**: ✅ OK (v4.0 specified)

## Recommendations

### High Priority Updates

1. **jQuery**: Update from 2.1.0 to 3.7.1
   - Security fixes
   - Performance improvements
   - Better modern browser support

2. **Sentry**: ✅ Already updated to 7.91.0

3. **Identify and update Backbone.js and Underscore.js versions**

### Medium Priority

1. **Replace deprecated ICanHaz** with Handlebars or another modern template engine

2. **Consolidate lazy loading** - Currently using 3 different libraries (Blazy, LazyLoad, LazyLoadXT)

3. **Update Flowplayer** - Standardize on single version (preferably fp7)

4. **Migrate from idangerous.swiper** to modern Swiper.js

5. **Update Leaflet** to latest version

### Low Priority

1. **Consider migrating from Backbone to modern framework** (long-term)
   - Vue.js, React, or Svelte would provide better maintainability
   - But this is a major refactor

2. **Reduce jQuery dependencies** where possible
   - Many jQuery operations can now be done with vanilla JS
   - But compatibility with Backbone may require jQuery

## Security Considerations

1. All API keys and credentials are properly redacted in settings.js ✅
2. Update all outdated dependencies for security patches
3. Review and update Flowplayer versions (some may have known vulnerabilities)
4. Ensure all external CDN resources use HTTPS and SRI where possible

## Performance Considerations

1. Consider bundling vendor files instead of loading 30+ separate files
2. Implement code splitting for better initial load times
3. Remove unused vendor libraries
4. Minify and concatenate custom JavaScript files

## Package Management

Currently, there is no package.json or dependency management system. Consider:

1. Adding npm/yarn for dependency management
2. Using webpack or Parcel for bundling
3. Implementing a build process for development/production
