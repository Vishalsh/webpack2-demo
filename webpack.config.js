const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('[name]-[hash:8].css');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  context: path.resolve(__dirname, 'src'),
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name]-[hash:8].js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['es2015', {modules: false}]
          ]
        }
      }]
    }, {
      test: /\.scss$/,
      loader: extractCSS.extract(['css-loader', 'sass-loader'])
    }]
  },
  plugins: [
    extractCSS,
    new HtmlWebpackPlugin({
      template: '../index.html'
    })
  ],
  devServer: {
    stats: {
      assets: false,
      children: false,
      chunks: false,
      chunkModules: false,
      colors: true,
    },
  }
};

module.exports = config;

