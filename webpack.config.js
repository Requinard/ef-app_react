var webpack = require('webpack')
var path = require('path')
const pkg = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var BUILD_DIR = path.resolve(__dirname, 'build')
var APP_DIR = path.resolve(__dirname, 'src')

var API_URL  = "https://app.eurofurence.org/api/"

var config = {
  entry:path.resolve(__dirname, './src/index.jsx'),
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css'],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader'
      },
      {
        test: /\.css?/,
        loader: ['style-loader','css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: pkg.name
    }),
    new webpack.DefinePlugin({
        'API_URL': JSON.stringify(API_URL)
    })
  ]
}

module.exports = config
