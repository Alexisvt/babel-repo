var path = require('path');

module.exports = {
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
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }
    ]
  },
  watch: true
};
