
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
let isDev = process.env.NODE_ENV === 'develop'; // 是否是开发环境

module.exports = {
  entry: {
    vendor: ['babel-polyfill', 'react', 'react-dom', 'redux', 'react-redux', 'react-router-dom'],
    main: './main/main.js',
    fullPage: './template/fullPage/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/',
    publicPath: isDev ? 'http://localhost:13333/' : '/',
    filename: 'js/[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: path.resolve(__dirname, '../node_modules/'),
        use: 'babel-loader'
      },
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.join(__dirname)
    },
    extensions: ['.js', '.jsx']
  },
  devtool: isDev ? 'cheap-module-eval-source-map' : '',
  context: __dirname,
  devServer: {
    hot: true,
    port: 13333,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    proxy: {
      '/api': {
        target: 'http://localhost:19999/api',
        pathRewrite: {"^/api" : ""}
      },
      '/login': {
        target: 'http://localhost:19999/login',
        pathRewrite: {"^/login" : ""}
      }
    }
  },
  plugins: [
    new OpenBrowserPlugin({ url: `http://${"localhost"}:13333/` }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV':
        isDev ? JSON.stringify('develop') : JSON.stringify('production')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/[name].bundle.js',
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({
      template: './template/index.html',
      filename: 'index.html',
      chunks: ['vendor', 'main'],
      inject: true,
      miniify:{
        collapseWhitespace:true
      }
    }),
  ]
};















