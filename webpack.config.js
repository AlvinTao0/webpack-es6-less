const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
module.exports = {
    entry: './es6/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: [
                      {
                          loader: 'css-loader',
                          options: {
                              minimize: true
                          }
                      },
                      {
                          loader: 'less-loader'
                      }
                  ]
                })
            },
            {
                test: path.join(__dirname, 'es6'),
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin(
            {template: './src/index.html'}
        ),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: true,
            sourceMap: true, // 没有的话，sourceMap无效
        }),
        new ExtractTextPlugin("style.css")
    ]
}