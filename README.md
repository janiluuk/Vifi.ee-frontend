# Vifi.ee Frontend

[![Version](https://img.shields.io/badge/version-2020.5.2-blue.svg)](https://github.com/janiluuk/Vifi.ee-frontend)
[![License](https://img.shields.io/badge/license-ISC-green.svg)](LICENSE)

Vifi.ee is an online video streaming service frontend application built with Backbone.js. This application provides a modern interface for browsing, purchasing, and watching video content.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Configuration](#configuration)
- [Building for Production](#building-for-production)
- [Testing](#testing)
- [Development](#development)
- [Project Structure](#project-structure)
- [Supported Technologies](#supported-technologies)
- [Documentation](#documentation)
- [Troubleshooting](#troubleshooting)

## Features

- **Video Streaming**: Watch video content with adaptive streaming (HLS) and progressive download (MP4)
- **Video Player**: Powered by Flowplayer 6/7 with quality selection and subtitle support
- **Search & Discovery**: Advanced search with genre, period, and duration filters
- **User Management**: Registration, login, and Facebook authentication
- **Purchase System**: Multiple payment methods (code, mobile, card)
- **Responsive Design**: Works on desktop and mobile devices
- **Resume Playback**: Automatically resume watching from where you left off
- **Multilingual Support**: Currently supports Estonian (est)

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v16.x or higher (recommended: v18.x or later)
- **npm**: v8.x or higher (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

You can verify your installations by running:

```bash
node --version
npm --version
```

## Installation

1. **Clone the repository**:

```bash
git clone https://github.com/janiluuk/Vifi.ee-frontend.git
cd Vifi.ee-frontend
```

2. **Install dependencies**:

```bash
npm install
```

This will install all the necessary packages defined in `package.json`, including:
- Webpack and Babel for building and transpiling
- ESLint for code linting
- Jest for testing
- Backbone.js, jQuery, and Lodash for the application

## Running the Application

### Development Mode

For development with auto-rebuild on file changes:

```bash
npm run watch
```

This will:
- Start webpack in watch mode
- Automatically rebuild when you change files
- Generate source maps for debugging
- Output files to the `dist/` directory

To view the application, open `dist/index.html` in your web browser, or serve the `dist/` directory with a local web server:

```bash
# Using Python 3
cd dist && python3 -m http.server 8000

# Using Node.js (if you have http-server installed globally)
cd dist && npx http-server -p 8000
```

Then navigate to `http://localhost:8000` in your browser.

### Development Build (One-time)

For a single development build without watching:

```bash
npm run build:dev
```

### Production Build

For an optimized production build:

```bash
npm run build
```

This will:
- Minify JavaScript code
- Remove console.log statements and debuggers
- Generate optimized bundles
- Create source maps for debugging
- Output files to the `dist/` directory

## Configuration

The application is configured through the `src/js/settings.js` file. All settings are defined in the `App.Settings` object.

### Settings Reference Table

Below is a comprehensive table of all available settings and their descriptions:

#### Basic Settings

| Setting | Type | Default Value | Description |
|---------|------|---------------|-------------|
| `version` | String | `'2020-05.2'` | Application version number |
| `debug` | Boolean | `false` | Enable debug mode for additional logging |
| `language` | String | `'est'` | Default language code (Estonian) |
| `sitename` | String | `'Vifi'` | Site name displayed in the application |
| `skin` | String | `'vifi'` | UI theme/skin identifier |
| `anonymous_username` | String | `'anonymous@vifi.ee'` | Default username for anonymous users |
| `sortingEnabled` | Boolean | `true` | Enable/disable sorting functionality in UI |
| `loginEnabled` | Boolean | `true` | Enable/disable user login and registration |
| `commentsEnabled` | Boolean | `true` | Enable/disable Disqus comments on videos |
| `disqus_shortname` | String | `'vifi'` | Disqus shortname for comments integration |

#### API Settings (`Api` object)

| Setting | Type | Default Value | Description |
|---------|------|---------------|-------------|
| `Api.url` | String | `'//dev.vifi.ee/api/'` | Backend API endpoint URL |
| `Api.key` | String | `''` | API authentication key (required for API access) |

**Important**: You must set `Api.key` to your API key for the application to work properly.

#### Cookie Settings (`Cookies` object)

| Setting | Type | Default Value | Description |
|---------|------|---------------|-------------|
| `Cookies.cookie_name` | String | `'vifi_session'` | Name of the session cookie |
| `Cookies.cookie_options.path` | String | `'/'` | Cookie path scope |
| `Cookies.cookie_options.domain` | String | `'.vifi.ee'` | Cookie domain scope (adjust for your domain) |
| `Cookies.purchase_cookie_name` | String | `'film'` | Name of the purchase tracking cookie |

#### Image Settings (`Images` object)

| Setting | Type | Default Value | Description |
|---------|------|---------------|-------------|
| `Images.image_optimizer_enabled` | Boolean | `true` | Enable/disable image optimization service |
| `Images.image_optimizer_url` | String | `'//gonzales.vifi.ee/files/images/image.php'` | URL of the image optimization service |
| `Images.image_optimizer_default_preset` | String | `'w780'` | Default image width preset for optimization |

#### Featured Content Settings (`Featured` object)

| Setting | Type | Default Value | Description |
|---------|------|---------------|-------------|
| `Featured.featured_slides_limit` | Number | `8` | Maximum number of featured slides to display |
| `Featured.featured_slides_randomize` | Boolean | `true` | Randomize the order of featured slides |
| `Featured.featured_slides_autoplay_interval` | Number | `6000` | Autoplay interval in milliseconds (6 seconds) |

#### Payment Settings (`Payment` object)

| Setting | Type | Default Value | Description |
|---------|------|---------------|-------------|
| `Payment.default_method` | String | `'code'` | Default payment method (code, mobile, or card) |
| `Payment.mobile.autostart` | Boolean | `false` | Automatically start mobile payment flow |
| `Payment.allowFreeProducts` | Boolean | `true` | Allow access to free content without payment |

#### Player Settings (`Player` object)

| Setting | Type | Default Value | Description |
|---------|------|---------------|-------------|
| `Player.defaultMediaPlayer` | String | `'fp7'` | Default video player version (fp6 or fp7) |
| `Player.flowplayer_fp6_key` | String | `'$202296466927761'` | Flowplayer 6 license key |
| `Player.flowplayer_flash_key` | String | `'#$05466e2f492e2ca07a3'` | Flowplayer Flash license key (legacy) |
| `Player.flowplayer_html5_key` | String | `'$202296466927761'` | Flowplayer HTML5 license key |
| `Player.flowplayer_fp7_token` | String | (JWT token string) | Flowplayer 7 JWT license token - replace with your token |
| `Player.hls_url` | String | `'https://media.vifi.ee/vod/vod'` | Base URL for HLS adaptive streaming |
| `Player.mp4_url` | String | `'//gonzales.vifi.ee/zsf/'` | Base URL for MP4 progressive download |
| `Player.rtmp_url` | String | `'rtmp://media.vifi.ee/vod'` | Base URL for RTMP streaming (legacy) |
| `Player.speedtest_url` | String | `'//gonzales.vifi.ee/files/bwtest.jpg'` | URL for bandwidth speed testing |
| `Player.subtitles_url` | String | `'//beta.vifi.ee/subs/'` | Base URL for subtitle files |
| `Player.enable_legacy_subtitles` | Boolean | `false` | Enable legacy subtitle format support |
| `Player.convert_srt_to_vtt` | Boolean | `true` | Auto-convert SRT subtitles to WebVTT format |

#### Search Settings (`Search` object)

| Setting | Type | Default Value | Description |
|---------|------|---------------|-------------|
| `Search.initial_film_amount` | Number | `300` | Number of films to load on initial page load |
| `Search.default_query_params.totalPages` | Number | `null` | Total pages in search results (calculated) |
| `Search.default_query_params.totalRecords` | Number | `null` | Total records in search results (calculated) |
| `Search.default_query_params.sortKey` | String | `'sort'` | Query parameter name for sorting |
| `Search.default_query_params.limit` | Number | `400` | Maximum number of results per API request |
| `Search.default_search_state.q` | String | `''` | Default search query string |
| `Search.default_search_state.genres` | Array\|undefined | `undefined` | Default genre filter (array of genre IDs) |
| `Search.default_search_state.periods` | Array\|undefined | `undefined` | Default period/year filter (array of year ranges) |
| `Search.default_search_state.durations` | Array\|undefined | `undefined` | Default duration filter (array of duration ranges) |
| `Search.default_pagination_state.pageSize` | Number | `12` | Number of results to display per page |
| `Search.default_pagination_state.sortKey` | String | `'updated_at'` | Default field to sort results by |
| `Search.default_pagination_state.order` | Number | `0` | Sort order (0 = descending, 1 = ascending) |

#### Analytics & Monitoring Settings

| Setting | Type | Default Value | Description |
|---------|------|---------------|-------------|
| `google_analytics_enabled` | Boolean | `true` | Enable/disable Google Analytics tracking |
| `google_analytics_code` | String | `'UA-XXXXX-1'` | Google Analytics tracking ID (replace with yours) |
| `sentry_enabled` | Boolean | `true` | Enable/disable Sentry error monitoring |
| `sentry_dsn` | String | `''` | Sentry DSN (Data Source Name) for error reporting |
| `rt_api_key` | String | `''` | Runtime API key (if applicable) |
| `facebook_app_id` | String | `''` | Facebook App ID for OAuth login integration |

#### Callback Functions

| Setting | Type | Default Value | Description |
|---------|------|---------------|-------------|
| `page_change_callback` | Function | `function(title, parameters) {}` | Callback executed when page/route changes |

### Configuration Examples

#### Minimal Required Configuration

```javascript
// src/js/settings.js
App.Settings = {
    Api: {
        url: '//your-api-domain.com/api/',
        key: 'your-api-key-here'  // Required!
    },
    Cookies: {
        cookie_options: {
            domain: '.your-domain.com'  // Update to your domain
        }
    }
}
```

#### Development vs Production

```javascript
// Development
App.Settings = {
    debug: true,
    Api: {
        url: '//dev.vifi.ee/api/',
        key: 'dev-api-key'
    }
}

// Production
App.Settings = {
    debug: false,
    Api: {
        url: '//api.vifi.ee/api/',
        key: 'prod-api-key'
    },
    google_analytics_enabled: true,
    google_analytics_code: 'UA-12345678-1'
}
```

#### Customizing Video Player

```javascript
App.Settings = {
    Player: {
        defaultMediaPlayer: 'fp7',
        flowplayer_fp7_token: 'your-flowplayer-token',
        hls_url: 'https://your-cdn.com/vod',
        mp4_url: '//your-cdn.com/videos/',
        enable_legacy_subtitles: false,
        convert_srt_to_vtt: true
    }
}
```

## Building for Production

### Standard Build

```bash
npm run build
```

This creates optimized bundles in the `dist/` directory.

### Build Output

After building, the `dist/` directory will contain:

```
dist/
├── app.bundle.min.js         # Main application bundle
├── vendors.bundle.min.js     # Vendor libraries bundle
├── index.html                # Main HTML file
├── channel.html              # Channel page
├── style/                    # CSS files
├── tpl/                      # Mustache templates
├── inc/                      # Include files
├── swf/                      # Flash files (legacy)
└── favicon.ico               # Favicon
```

### Deployment

To deploy the application:

1. Build the production bundle:
   ```bash
   npm run build
   ```

2. Copy the entire `dist/` directory to your web server

3. Configure your web server to:
   - Serve `index.html` as the default document
   - Enable gzip compression for JavaScript and CSS files
   - Set appropriate cache headers for static assets
   - Redirect all routes to `index.html` (for client-side routing)

**Example Nginx configuration**:

```nginx
server {
    listen 80;
    server_name vifi.ee;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/css application/javascript application/json;
}
```

## Testing

The project includes a comprehensive test suite using Jest.

### Run Tests

```bash
npm test
```

### Run Tests in Watch Mode

For continuous testing during development:

```bash
npm run test:watch
```

### Generate Coverage Report

```bash
npm run test:coverage
```

Coverage reports are generated in the `coverage/` directory and include:
- HTML report: Open `coverage/index.html` in your browser
- LCOV format for CI/CD integration

### Test Structure

Tests are located in the `tests/` directory:

```
tests/
├── utils.test.js          # Utility function tests
├── user.test.js           # User/cookie function tests
├── facebook.test.js       # Facebook integration tests
├── iteration.test.js      # Safe property iteration tests
└── README.md              # Test documentation
```

See [tests/README.md](tests/README.md) for more details about the test suite.

## Development

### Code Linting

Check code style and potential errors:

```bash
npm run lint
```

Auto-fix linting issues:

```bash
npm run lint:fix
```

### Development Workflow

1. **Start watch mode**:
   ```bash
   npm run watch
   ```

2. **Make changes** to files in the `src/` directory

3. **Webpack automatically rebuilds** the application

4. **Refresh your browser** to see changes

5. **Run tests** to ensure nothing broke:
   ```bash
   npm test
   ```

6. **Lint your code** before committing:
   ```bash
   npm run lint:fix
   ```

### Webpack Configuration

The build process is configured in `webpack.config.js`:

- **Entry point**: `src/js/init.js`
- **Output**: `dist/` directory
- **Babel transpilation**: Converts modern JavaScript to ES5
- **Code splitting**: Separates vendor libraries for better caching
- **Asset copying**: Copies HTML, CSS, templates, and static files
- **Source maps**: Generated for debugging

### Browser Compatibility

The application supports:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome for Android)

Legacy browsers (IE11 and below) may require additional polyfills.

## Project Structure

```
Vifi.ee-frontend/
├── .github/              # GitHub Actions workflows
├── src/                  # Source files
│   ├── js/              # JavaScript source
│   │   ├── collections/ # Backbone collections
│   │   ├── models/      # Backbone models
│   │   ├── views/       # Backbone views
│   │   ├── platforms/   # Platform-specific code
│   │   ├── vendor/      # Third-party libraries
│   │   ├── init.js      # Application entry point
│   │   ├── router.js    # URL routing
│   │   └── settings.js  # Configuration
│   ├── style/           # CSS files
│   ├── tpl/             # Mustache templates
│   ├── inc/             # Include files
│   ├── swf/             # Flash files (legacy)
│   ├── index.html       # Main HTML file
│   └── channel.html     # Channel page
├── tests/               # Test files
├── dist/                # Build output (generated)
├── coverage/            # Test coverage (generated)
├── package.json         # NPM dependencies
├── webpack.config.js    # Webpack configuration
├── babel.config.js      # Babel configuration
├── eslint.config.js     # ESLint configuration
├── API_DOCUMENTATION.md # API documentation
└── README.md           # This file
```

### Key Files

- **src/js/init.js**: Application initialization and setup
- **src/js/router.js**: URL routing and navigation
- **src/js/settings.js**: Application configuration
- **webpack.config.js**: Build configuration
- **package.json**: Dependencies and scripts

## Supported Technologies

### Frontend Framework

- **Backbone.js**: MVC framework for application structure
- **jQuery**: DOM manipulation and AJAX
- **Underscore.js/Lodash**: Utility functions
- **ICanHaz.js**: Mustache templating

### Video Player

- **Flowplayer 6/7**: HTML5 video player
- **HLS**: Adaptive streaming for modern browsers
- **MP4**: Progressive download fallback
- **Subtitles**: VTT and SRT format support

### Build Tools

- **Webpack 5**: Module bundler
- **Babel**: JavaScript transpiler
- **Terser**: JavaScript minifier

### Testing

- **Jest**: Testing framework
- **jsdom**: DOM environment for tests
- **Babel Jest**: Transpile tests with Babel

### Code Quality

- **ESLint**: JavaScript linting
- **Prettier**: Code formatting (via ESLint plugins)

### Authentication

- **Session-based**: Cookie-based authentication
- **Facebook Login**: OAuth integration
- **Multi-device**: Session pairing support

### Payment Methods

- **Code-based**: Voucher/code redemption
- **Mobile**: SMS premium payment
- **Card**: Credit/debit card payment

### Analytics & Monitoring

- **Google Analytics**: Usage tracking
- **Sentry**: Error monitoring
- **Custom events**: User interaction tracking

## Documentation

- **[API_DOCUMENTATION.md](API_DOCUMENTATION.md)**: Complete API reference, data flows, and integration guide
- **[tests/README.md](tests/README.md)**: Test suite documentation
- **[apiary.apib](apiary.apib)**: Full API specification in API Blueprint format

## Troubleshooting

### Build Errors

**Problem**: `npm install` fails with permission errors

**Solution**: Use `npm install --no-optional` or run with `sudo` (not recommended), or fix npm permissions:
```bash
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

**Problem**: Webpack build fails with memory errors

**Solution**: Increase Node.js memory limit:
```bash
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Runtime Errors

**Problem**: API requests fail with CORS errors

**Solution**: Ensure the API server has proper CORS headers configured, or use a development proxy.

**Problem**: Video player doesn't load

**Solution**: 
- Check that Flowplayer license token is valid
- Verify video URLs are accessible
- Check browser console for errors
- Ensure HLS is supported or MP4 fallback is available

**Problem**: Facebook login doesn't work

**Solution**: 
- Set `facebook_app_id` in `settings.js`
- Ensure your domain is whitelisted in Facebook app settings
- Check browser console for Facebook SDK errors

### Configuration Issues

**Problem**: Application shows "API key required" error

**Solution**: Set `Api.key` in `src/js/settings.js`:
```javascript
Api: {
    url: '//dev.vifi.ee/api/',
    key: 'your-api-key-here'
}
```

**Problem**: Cookies not persisting

**Solution**: Update `cookie_options.domain` in `settings.js` to match your domain:
```javascript
Cookies: {
    cookie_name: 'vifi_session',
    cookie_options: {
        path: '/',
        domain: '.yourdomain.com'  // Update this
    }
}
```

### Testing Issues

**Problem**: Tests fail with "Cannot find module" errors

**Solution**: Ensure all dependencies are installed:
```bash
rm -rf node_modules package-lock.json
npm install
```

**Problem**: Tests timeout

**Solution**: Increase Jest timeout in `package.json`:
```json
"jest": {
    "testTimeout": 10000
}
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Make your changes
4. Run tests: `npm test`
5. Run linter: `npm run lint:fix`
6. Commit your changes: `git commit -am 'Add my feature'`
7. Push to the branch: `git push origin feature/my-feature`
8. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For questions or issues:
- Open an issue on [GitHub](https://github.com/janiluuk/Vifi.ee-frontend/issues)
- Check existing [API documentation](API_DOCUMENTATION.md)
- Review [test documentation](tests/README.md)

## Author

**Jani Luukkanen**

---

**Version**: 2020.5.2  
**Last Updated**: December 10, 2024
