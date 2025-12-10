const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: {
      app: './js/init.js',
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
            test: /[\\/]js[\\/]vendor[\\/]/,
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
      new CopyPlugin({
        patterns: [
          { from: 'index.html', to: 'index.html' },
          { from: 'channel.html', to: 'channel.html' },
          { from: 'style', to: 'style' },
          { from: 'inc', to: 'inc' },
          { from: 'tpl', to: 'tpl' },
          { from: 'swf', to: 'swf' },
          { from: 'favicon.ico', to: 'favicon.ico' },
          { from: 'favicon.png', to: 'favicon.png' },
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
        '@models': path.resolve(__dirname, 'js/models'),
        '@views': path.resolve(__dirname, 'js/views'),
        '@collections': path.resolve(__dirname, 'js/collections'),
      },
    },
    performance: {
      hints: isProduction ? 'warning' : false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  };
};
