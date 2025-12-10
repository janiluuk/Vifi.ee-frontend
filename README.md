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

- **Node.js**: v14.x or higher (recommended: v18.x or later)
- **npm**: v6.x or higher (comes with Node.js)
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

The application is configured through the `src/js/settings.js` file. Here are the key configuration sections:

### Basic Settings

```javascript
// src/js/settings.js
App.Settings = {
    version: '2020-05.2',
    debug: false,                    // Enable debug mode
    language: 'est',                  // Language (Estonian)
    sitename: 'Vifi',
    skin: 'vifi',                     // UI theme/skin
    // ...
}
```

### API Configuration

Configure the backend API connection:

```javascript
Api: {
    url: '//dev.vifi.ee/api/',       // API endpoint URL
    key: ''                           // Your API key
}
```

**Important**: You need to set the `Api.key` value to your API key for the application to work properly.

### Cookie Configuration

Session and purchase cookies:

```javascript
Cookies: {
    cookie_name: 'vifi_session',
    cookie_options: {
        path: '/',
        domain: '.vifi.ee'           // Adjust for your domain
    },
    purchase_cookie_name: 'film',
}
```

### Player Settings

Configure the video player:

```javascript
Player: {
    defaultMediaPlayer: 'fp7',        // Flowplayer version (fp6 or fp7)
    flowplayer_fp7_token: 'YOUR_TOKEN', // Flowplayer 7 license token
    hls_url: 'https://media.vifi.ee/vod/vod',  // HLS streaming URL
    mp4_url: '//gonzales.vifi.ee/zsf/',        // MP4 progressive download URL
    rtmp_url: 'rtmp://media.vifi.ee/vod',      // RTMP streaming URL (legacy)
    subtitles_url: '//beta.vifi.ee/subs/',
    enable_legacy_subtitles: false,
    convert_srt_to_vtt: true
}
```

### Payment Settings

Configure payment methods:

```javascript
Payment: {
    'default_method': 'code',         // Default payment method
    'mobile': {
        'autostart': false            // Auto-start mobile payment flow
    },
    'allowFreeProducts': true         // Allow free content
}
```

### Search Settings

Configure search and filtering:

```javascript
Search: {
    initial_film_amount: 300,         // Initial films to load
    default_query_params: {
        sortKey: 'sort',
        limit: 400                    // Max results per request
    },
    default_pagination_state: {
        pageSize: 12,                 // Results per page
        sortKey: 'updated_at',
        order: 0,                     // 0=desc, 1=asc
    }
}
```

### Image Optimization

Configure image processing:

```javascript
Images: {
    image_optimizer_enabled: true,
    image_optimizer_url: '//gonzales.vifi.ee/files/images/image.php',
    image_optimizer_default_preset: 'w780',  // Default image width
}
```

### Analytics & Monitoring

Configure external services:

```javascript
google_analytics_enabled: true,
google_analytics_code: 'UA-XXXXX-1',  // Replace with your GA code

sentry_enabled: true,                 // Error tracking
sentry_dsn: '',                       // Your Sentry DSN

facebook_app_id: '',                  // Facebook app ID for login
```

### Feature Flags

Enable or disable features:

```javascript
sortingEnabled: true,                 // Enable sorting UI
loginEnabled: true,                   // Enable login/registration
commentsEnabled: true,                // Enable comments (Disqus)
disqus_shortname: 'vifi',            // Disqus shortname
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
**Last Updated**: December 2024
