# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build arguments for environment variables
ARG MAIN_DOMAIN=example.com
ARG WWW_DOMAIN=www.example.com
ARG COOKIE_DOMAIN=.example.com
ARG API_DOMAIN=api.example.com
ARG API_URL=//api.example.com/api/
ARG MEDIA_DOMAIN=media.example.com
ARG CDN_DOMAIN=cdn.example.com
ARG HLS_URL=https://media.example.com/vod/vod
ARG MP4_URL=//cdn.example.com/zsf/
ARG RTMP_URL=rtmp://media.example.com/vod
ARG IMAGE_OPTIMIZER_URL=//cdn.example.com/files/images/image.php
ARG SPEEDTEST_URL=//cdn.example.com/files/bwtest.jpg
ARG SUBTITLES_URL=//beta.example.com/subs/
ARG CHANNEL_URL=//beta.example.com/channel.html
ARG CACHED_INIT_URL=//www.example.com/init.json
ARG ANONYMOUS_USERNAME=anonymous@example.com
ARG SITE_NAME=Vifi
ARG DISQUS_SHORTNAME=vifi
ARG FACEBOOK_APP_ID=
ARG GOOGLE_ANALYTICS_CODE=UA-XXXXX-1
ARG SENTRY_DSN=
ARG API_KEY=

# Set environment variables for build
ENV MAIN_DOMAIN=${MAIN_DOMAIN}
ENV WWW_DOMAIN=${WWW_DOMAIN}
ENV COOKIE_DOMAIN=${COOKIE_DOMAIN}
ENV API_DOMAIN=${API_DOMAIN}
ENV API_URL=${API_URL}
ENV MEDIA_DOMAIN=${MEDIA_DOMAIN}
ENV CDN_DOMAIN=${CDN_DOMAIN}
ENV HLS_URL=${HLS_URL}
ENV MP4_URL=${MP4_URL}
ENV RTMP_URL=${RTMP_URL}
ENV IMAGE_OPTIMIZER_URL=${IMAGE_OPTIMIZER_URL}
ENV SPEEDTEST_URL=${SPEEDTEST_URL}
ENV SUBTITLES_URL=${SUBTITLES_URL}
ENV CHANNEL_URL=${CHANNEL_URL}
ENV CACHED_INIT_URL=${CACHED_INIT_URL}
ENV ANONYMOUS_USERNAME=${ANONYMOUS_USERNAME}
ENV SITE_NAME=${SITE_NAME}
ENV DISQUS_SHORTNAME=${DISQUS_SHORTNAME}
ENV FACEBOOK_APP_ID=${FACEBOOK_APP_ID}
ENV GOOGLE_ANALYTICS_CODE=${GOOGLE_ANALYTICS_CODE}
ENV SENTRY_DSN=${SENTRY_DSN}
ENV API_KEY=${API_KEY}

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
