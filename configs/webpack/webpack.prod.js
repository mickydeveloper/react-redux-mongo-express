const merge = require('webpack-merge');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: false,
    entry: {
        handover: './src/app/index.tsx'
    },
    output: {
        filename: '[name]-[hash].js',
        path: path.resolve('dist'),
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: '/'
    },
    module: {
        loaders: [
        // .ts(x) files should first pass through the Typescript loader, and then through babel
            { 
                test: /\.tsx?$/, 
                loaders: [
                    'babel-loader', 
                    'awesome-typescript-loader'
                ],
                include: path.resolve('src/app') 
            },{
                test: /\.scss$/,
                exclude: [/node_modules/],
                loader: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true,
                            sourceMaps: false
                        }
                    }, {
                        loader: "sass-loader"
                    }, {
                        loader: "postcss-loader"
                    }],
                    fallback: "style-loader"
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("handover.css?cachebust=[hash]"),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({ resource }) => /node_modules/.test(resource),
        })
        
    ]
});