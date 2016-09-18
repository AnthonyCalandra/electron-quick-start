var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');
var dir_build = path.resolve(__dirname, 'build');
var dir_html = path.resolve(__dirname, 'html');
var dir_js = path.resolve(__dirname, 'app');

module.exports = {
  entry: {
    app: path.resolve(dir_js, 'App.jsx')
  },

  output: {
    path: dir_build,
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/build/'
  },

  devServer: {
    contentBase: dir_build,
    publicPath: 'http://localhost:8080/build/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}
    ]
  },

  plugins: [
    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.IgnorePlugin(new RegExp("^(fs|ipc)$"))
  ]
}
