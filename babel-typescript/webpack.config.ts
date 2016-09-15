import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  context: path.resolve('src'),
  entry: ['babel-polyfill', './main'],
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

export = config;
