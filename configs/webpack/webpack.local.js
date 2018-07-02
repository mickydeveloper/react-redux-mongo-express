const merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  devtool: "inline-source-map",
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/app/index.tsx"
  ],
  // configure the output directory and publicPath for the devServer
  output: {
    publicPath: "/dist"
  },
  module: {
    loaders: [
      // .ts(x) files should first pass through the Typescript loader, and then through babel
      {
        test: /\.tsx?$/,
        loaders: [
          "react-hot-loader/webpack",
          "babel-loader",
          "awesome-typescript-loader"
        ],
        include: path.resolve("src/app")
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        loader: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            },
            {
              loader: "postcss-loader"
            }
          ],
          fallback: "style-loader"
        }))
      }
    ]
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    inline: true,
    open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("handover.css")
  ]
});
