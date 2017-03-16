const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const VENDOR_LIBS = ['react', 'react-dom']
const HtmlWebPackPlugin = require('html-webpack-plugin')

const config = {
  entry: {
    bundle: './app/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }, {
        test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
        loader: "file-loader"
      }, {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader', 'eslint-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack
      .optimize
      .CommonsChunkPlugin({
        name: ['vendor', 'manifest']
      }),
    new HtmlWebPackPlugin({template: './app/index.html'}),
  ]
}

module.exports = config
