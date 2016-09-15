"use strict";
const path = require('path');
const config = {
    context: path.resolve('src'),
    entry: './main',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: 'dist',
        port: 3000,
        inline: true
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel']
            }
        ]
    },
    watch: true
};
module.exports = config;
