const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackDevServer = require('webpack-dev-server');
const WebpackNotifierPlugin = require('webpack-notifier');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const environment = process.env.NODE_ENV;

module.exports = {
    output: {
        filename: 'handover.js',
        path: path.resolve('dist')
    },

  // tell Webpack to load TypeScript files
  resolve: {
    // Look for modules in .ts(x) files first, then .js
    extensions: ['.ts', '.tsx', '.js'],

    // add 'src' to the modules, so that when you import files you can do so with 'src' as the relative route
    modules: ['src/app', 'node_modules'],
  },

  module: {
    loaders: [
      // .ts(x) files should first pass through the Typescript loader, and then through babel
      {
        enforce: 'pre',
        test: /\.tsx$/,
        exclude: "/node_modules/",
        loader: 'tslint-loader',
        options: {
            configFile: "./configs/tslint/tslint-dev.json",
            emitErrors: false,
            failOnHint: false
        }
      },{
        test: /\.scss$/,
        enforce: 'pre',
        loader: 'import-glob-loader'
      },{
        test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
        loader: 'file-loader'
      },{
          test: /\.(jpe?g|png|gif|svg)$/i,
          loader: "file-loader"
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new HtmlWebpackPlugin({
      title: environment !== 'prod' ? environment+' - handover' : 'handover',
      template: 'index.html'
    }),
    new webpack.EnvironmentPlugin([
      "NODE_ENV"
    ])
  ]
}
