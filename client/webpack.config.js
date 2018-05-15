var path = require('path');

module.exports = {
  // entry file - starting point for the app
  entry: './src',

  // where to dump the output of a production build
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?/i,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },

  // enable Source Maps
  devtool: 'source-map',

  devServer: {
    // serve up any static files from src/
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true,
  },
};
