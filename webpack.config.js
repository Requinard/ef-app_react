var webpack = require('webpack')
var path = require('path')
const pkg = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'build')
var APP_DIR = path.resolve(__dirname, 'src')

var config = {
  entry:path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: pkg.name
    })
  ]
}

module.exports = config
