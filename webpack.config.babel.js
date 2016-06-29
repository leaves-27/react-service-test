var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './client/containers/index'
  ],
  output: {
    path: path.join(__dirname, './build/'),
    filename: 'bundle.js',
    publicPath: '/static'
  },
  plugins:[
    new HtmlwebpackPlugin({
      filename: 'index.html',
      template: './client/index.html'
    })
  ],
  module: {
    loaders:[{
      test:/\.css$/, 
      loader:"style-loader!css-loader?modules&localIdentName=[name]_[local]-[hash:base64:5]"
    },{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      query:{
        presets:['react','es2015']
      }
    }]
  }
}
