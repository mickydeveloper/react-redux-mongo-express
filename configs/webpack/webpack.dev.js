const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    
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
                        loader: "css-loader"
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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: ({ resource }) => /node_modules/.test(resource),
        })
    ]
});