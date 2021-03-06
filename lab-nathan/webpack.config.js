'use strict';

const HtmlPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

let webConfig = {
  devtool: 'cheap-module-source-eval-map',
  devServer: {
    historyApiFallback: true
  },
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-[hash].js',
    publicPath: '/'
  },
  plugins: [
    new HtmlPlugin({ template: `${__dirname}/src/index.html` }),
    new ExtractPlugin('bundle-[hash].css')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  }
};

let electronConfig = {
  devtool: 'cheap-module-source-eval-map',
  devServer: {
    historyApiFallback: true
  },
  entry: `${__dirname}/src/main.js`,
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle-electron-[hash].js',
    publicPath: './'
  },
  plugins: [
    new HtmlPlugin({ 
      template: `${__dirname}/src/index.html`,
      filename: 'electron.html'
    }),
    new ExtractPlugin('bundle-[hash].css')
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  }
};

module.exports = [ webConfig, electronConfig ];
