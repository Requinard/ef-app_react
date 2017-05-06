const webpack = require('webpack')
const path = require('path')
const pkg = require('./package.json')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OfflinePlugin = require('offline-plugin')

const BUILD_DIR = path.resolve(__dirname, 'build')
const APP_DIR = path.resolve(__dirname, 'src')

const API_URL  = "https://app.eurofurence.org/Api/v2/"

const enviroment = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const config = {
  entry: path.resolve(__dirname, './src/index.jsx'),
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
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css?/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: {
    // Workaround for https://github.com/airbnb/enzyme/issues/47
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: pkg.name
    }),
    new webpack.DefinePlugin({
      'API_URL': JSON.stringify(API_URL),
      'NODE_ENV': JSON.stringify(enviroment)
    })
  ]
}

module.exports = config
