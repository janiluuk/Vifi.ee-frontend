const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
require('dotenv').config();

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  // Define environment variables to inject into the application
  const envVars = {
    'process.env.MAIN_DOMAIN': JSON.stringify(process.env.MAIN_DOMAIN || 'example.com'),
    'process.env.WWW_DOMAIN': JSON.stringify(process.env.WWW_DOMAIN || 'www.example.com'),
    'process.env.COOKIE_DOMAIN': JSON.stringify(process.env.COOKIE_DOMAIN || '.example.com'),
    'process.env.API_DOMAIN': JSON.stringify(process.env.API_DOMAIN || 'api.example.com'),
    'process.env.API_URL': JSON.stringify(process.env.API_URL || '//api.example.com/api/'),
    'process.env.MEDIA_DOMAIN': JSON.stringify(process.env.MEDIA_DOMAIN || 'media.example.com'),
    'process.env.CDN_DOMAIN': JSON.stringify(process.env.CDN_DOMAIN || 'cdn.example.com'),
    'process.env.HLS_URL': JSON.stringify(process.env.HLS_URL || 'https://media.example.com/vod/vod'),
    'process.env.MP4_URL': JSON.stringify(process.env.MP4_URL || '//cdn.example.com/zsf/'),
    'process.env.RTMP_URL': JSON.stringify(process.env.RTMP_URL || 'rtmp://media.example.com/vod'),
    'process.env.IMAGE_OPTIMIZER_URL': JSON.stringify(process.env.IMAGE_OPTIMIZER_URL || '//cdn.example.com/files/images/image.php'),
    'process.env.SPEEDTEST_URL': JSON.stringify(process.env.SPEEDTEST_URL || '//cdn.example.com/files/bwtest.jpg'),
    'process.env.SUBTITLES_URL': JSON.stringify(process.env.SUBTITLES_URL || '//beta.example.com/subs/'),
    'process.env.CHANNEL_URL': JSON.stringify(process.env.CHANNEL_URL || '//beta.example.com/channel.html'),
    'process.env.CACHED_INIT_URL': JSON.stringify(process.env.CACHED_INIT_URL || '//www.example.com/init.json'),
    'process.env.ANONYMOUS_USERNAME': JSON.stringify(process.env.ANONYMOUS_USERNAME || 'anonymous@example.com'),
    'process.env.SITE_NAME': JSON.stringify(process.env.SITE_NAME || 'Vifi'),
    'process.env.DISQUS_SHORTNAME': JSON.stringify(process.env.DISQUS_SHORTNAME || 'vifi'),
    'process.env.FACEBOOK_APP_ID': JSON.stringify(process.env.FACEBOOK_APP_ID || ''),
    'process.env.GOOGLE_ANALYTICS_CODE': JSON.stringify(process.env.GOOGLE_ANALYTICS_CODE || 'UA-XXXXX-1'),
    'process.env.SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN || ''),
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || ''),
  };

  return {
    entry: {
      app: './src/js/init.js',
    },
    output: {
      filename: isProduction ? '[name].bundle.min.js' : '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    mode: argv.mode || 'development',
    devtool: isProduction ? 'source-map' : 'eval-source-map',
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true,
              drop_debugger: true,
            },
            format: {
              comments: false,
            },
          },
          extractComments: false,
        }),
      ],
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]src[\\/]js[\\/]vendor[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          backbone: {
            test: /backbone|underscore/i,
            name: 'backbone',
            chunks: 'all',
            priority: 5,
          },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin(envVars),
      new CopyPlugin({
        patterns: [
          { from: 'src/index.html', to: 'index.html' },
          { from: 'src/channel.html', to: 'channel.html' },
          { from: 'src/style', to: 'style' },
          { from: 'src/inc', to: 'inc' },
          { from: 'src/tpl', to: 'tpl' },
          { from: 'src/swf', to: 'swf' },
          { from: 'src/favicon.ico', to: 'favicon.ico' },
          { from: 'src/favicon.png', to: 'favicon.png' },
        ],
      }),
    ],
    externals: {
      jquery: 'jQuery',
      backbone: 'Backbone',
      underscore: '_',
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@models': path.resolve(__dirname, 'src/js/models'),
        '@views': path.resolve(__dirname, 'src/js/views'),
        '@collections': path.resolve(__dirname, 'src/js/collections'),
      },
    },
    performance: {
      hints: isProduction ? 'warning' : false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
