# Environment Variables Reference

This document provides a comprehensive guide to configuring the Vifi.ee frontend application using environment variables.

## Quick Start

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` with your values:**
   ```bash
   # Minimum required configuration
   API_URL=//api.yourdomain.com/api/
   API_KEY=your-api-key-here
   COOKIE_DOMAIN=.yourdomain.com
   ```

3. **Build the application:**
   ```bash
   npm run build
   ```

## All Environment Variables

### Domain Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `MAIN_DOMAIN` | `example.com` | Main domain name for your site |
| `WWW_DOMAIN` | `www.example.com` | WWW subdomain (used in meta tags and links) |
| `COOKIE_DOMAIN` | `.example.com` | Domain for cookies (must start with a dot for subdomains) |

### API Configuration

| Variable | Default | Required | Description |
|----------|---------|----------|-------------|
| `API_DOMAIN` | `api.example.com` | No | API server domain name |
| `API_URL` | `//api.example.com/api/` | Yes | Full API endpoint URL |
| `API_KEY` | (empty) | **Yes** | API authentication key |

### Media & CDN Configuration

| Variable | Default | Description |
|----------|---------|-------------|
| `MEDIA_DOMAIN` | `media.example.com` | Domain for media streaming services |
| `CDN_DOMAIN` | `cdn.example.com` | Domain for CDN and static assets |

### Streaming URLs

| Variable | Default | Description |
|----------|---------|-------------|
| `HLS_URL` | `https://media.example.com/vod/vod` | Base URL for HLS adaptive streaming |
| `MP4_URL` | `//cdn.example.com/zsf/` | Base URL for MP4 progressive download |
| `RTMP_URL` | `rtmp://media.example.com/vod` | Base URL for RTMP streaming (legacy) |

### Asset URLs

| Variable | Default | Description |
|----------|---------|-------------|
| `IMAGE_OPTIMIZER_URL` | `//cdn.example.com/files/images/image.php` | URL for image optimization service |
| `SPEEDTEST_URL` | `//cdn.example.com/files/bwtest.jpg` | URL for bandwidth speed testing |

### Service URLs

| Variable | Default | Description |
|----------|---------|-------------|
| `SUBTITLES_URL` | `//beta.example.com/subs/` | Base URL for subtitle files |
| `CHANNEL_URL` | `//beta.example.com/channel.html` | Facebook channel file URL |
| `CACHED_INIT_URL` | `//www.example.com/init.json` | URL for cached initialization data |

### Application Settings

| Variable | Default | Description |
|----------|---------|-------------|
| `ANONYMOUS_USERNAME` | `anonymous@example.com` | Email address for anonymous users |
| `SITE_NAME` | `Vifi` | Site name displayed in the application |
| `DISQUS_SHORTNAME` | `vifi` | Disqus shortname for comments integration |

### Optional Integration Settings

| Variable | Default | Description |
|----------|---------|-------------|
| `FACEBOOK_APP_ID` | (empty) | Facebook App ID for OAuth login (leave empty to disable) |
| `GOOGLE_ANALYTICS_CODE` | `UA-XXXXX-1` | Google Analytics tracking ID (leave empty to disable) |
| `SENTRY_DSN` | (empty) | Sentry DSN for error reporting (leave empty to disable) |

## Example Configurations

### Development Environment

```bash
# .env.development
MAIN_DOMAIN=dev.mysite.com
WWW_DOMAIN=dev.mysite.com
COOKIE_DOMAIN=.dev.mysite.com
API_URL=//api.dev.mysite.com/api/
API_KEY=dev-api-key-here
HLS_URL=https://media.dev.mysite.com/vod/vod
MP4_URL=//cdn.dev.mysite.com/zsf/
GOOGLE_ANALYTICS_CODE=
SENTRY_DSN=
```

### Staging Environment

```bash
# .env.staging
MAIN_DOMAIN=staging.mysite.com
WWW_DOMAIN=staging.mysite.com
COOKIE_DOMAIN=.staging.mysite.com
API_URL=//api.staging.mysite.com/api/
API_KEY=staging-api-key-here
HLS_URL=https://media.staging.mysite.com/vod/vod
MP4_URL=//cdn.staging.mysite.com/zsf/
GOOGLE_ANALYTICS_CODE=UA-XXXXX-1
SENTRY_DSN=https://...@sentry.io/...
```

### Production Environment

```bash
# .env.production
MAIN_DOMAIN=mysite.com
WWW_DOMAIN=www.mysite.com
COOKIE_DOMAIN=.mysite.com
API_URL=//api.mysite.com/api/
API_KEY=production-api-key-here
HLS_URL=https://media.mysite.com/vod/vod
MP4_URL=//cdn.mysite.com/zsf/
IMAGE_OPTIMIZER_URL=//cdn.mysite.com/files/images/image.php
SUBTITLES_URL=//cdn.mysite.com/subs/
FACEBOOK_APP_ID=123456789
GOOGLE_ANALYTICS_CODE=UA-12345678-1
SENTRY_DSN=https://...@sentry.io/...
```

### Using Original Vifi.ee Domains

```bash
# Copy the pre-configured Vifi.ee settings
cp .env.vifi .env

# Then add your API key
echo "API_KEY=your-api-key-here" >> .env
```

## Important Notes

### Build Time vs Runtime

**Important:** Environment variables are injected at **build time** by webpack, not at runtime. This means:

1. You must rebuild the application whenever you change environment variables
2. Environment variables are baked into the JavaScript bundle
3. The same build cannot be used for different environments

### Switching Between Environments

To switch between environments, use different .env files:

```bash
# For development
cp .env.development .env
npm run build:dev

# For production
cp .env.production .env
npm run build
```

### Docker Deployments

For Docker deployments, environment variables can be passed as build arguments:

```bash
docker build -f Dockerfile.build \
  --build-arg API_URL=//api.mysite.com/api/ \
  --build-arg API_KEY=my-secret-key \
  --build-arg MAIN_DOMAIN=mysite.com \
  -t vifi-frontend .
```

Or use docker-compose with a .env file:

```bash
# Create .env with your values
cp .env.example .env

# Build and run
docker-compose up -d
```

### Security Considerations

1. **Never commit `.env` files** to version control (they're in .gitignore)
2. **Protect your API_KEY** - it should be kept secret
3. **Use HTTPS** for all production domains
4. **Different keys** for different environments (dev, staging, prod)

## Troubleshooting

### Variables Not Being Replaced

If environment variables aren't being replaced in your build:

1. Check that `.env` file exists and is in the project root
2. Ensure the variable name is correct (case-sensitive)
3. Rebuild the application: `npm run build`
4. Clear webpack cache: `rm -rf node_modules/.cache`

### Environment File Not Found

If you see ".env file not found or invalid" during build:

- This is just a warning - the build will use system environment variables or defaults
- To create a .env file: `cp .env.example .env`

### Build Failing

If the build fails after adding environment variables:

1. Check for syntax errors in your .env file
2. Ensure no quotes around values (unless the value itself contains spaces)
3. Verify all required variables are set (especially `API_KEY`)

## Migration from Hardcoded Values

If you're migrating from a version with hardcoded domains:

1. **Backup your current settings.js** (if you modified it)
2. **Create a .env file** with your domains
3. **Rebuild the application**
4. **Test thoroughly** in a non-production environment first

Old hardcoded values in `settings.js` will be replaced by environment variables. If you have custom values that aren't domains, those will still work.

## Support

For issues or questions:
- Check the main [README.md](README.md) for general documentation
- Review [API_DOCUMENTATION.md](API_DOCUMENTATION.md) for API details
- Open an issue on GitHub if you encounter problems
