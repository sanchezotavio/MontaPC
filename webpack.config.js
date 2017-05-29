const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')
const VENDOR_LIBS = ['react', 'react-dom']
const HtmlWebPackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

var API_URL = {
  production: JSON.stringify('http://montapc.herokuapp.com'),
  development: JSON.stringify('http://localhost:5000')
}

var environment = process.env.NODE_ENV.trim() === 'development'
  ? 'development' 
  : 'production';

const config = {
  entry: {
    bundle: './src/index.js',
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
        test: /\.(eot|woff|woff2|svg|ttf|png)([\?]?.*)$/,
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
    new HtmlWebPackPlugin({template: './src/index.html'}),
    new FaviconsWebpackPlugin('./styles/img/favicon/favicon-main.png'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack
      .optimize
      .UglifyJsPlugin({
        debug: false,
        minimize: true,
        sourceMap: false,
        output: {
          comments: false
        },
        compressor: {
          warnings: false,
          unused: true,
          dead_code: true
        },
        mangle: false
      }),
    new webpack.DefinePlugin({'API_URL': API_URL[environment]})

  ],
  devServer: {
    historyApiFallback: true,
    port: 8080
  }
}

module.exports = config
