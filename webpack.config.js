const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

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
