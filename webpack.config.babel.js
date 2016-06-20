var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry:{
    client:[
      './client/components/signin/index.jsx'
    ]
  },
  output: {
    path: `${__dirname}/build`,
    filename: 'bundle.js',
    publicPath: '/rst',
  },
  module: {
    loaders:[{
      test: /\.js$/,
      loader: 'babel-loader',
      include: [path.join(__dirname, 'client')]
    }, {
      test: /\.jsx$/,
      loader: 'babel-loader!jsx-loader?harmony',
      include: [path.join(__dirname, 'client')]
    },{
      test: /\.styl$/,
      loader: 'style-loader!css-loader!autoprefixer-loader!stylus-loader',
      include: [path.join(__dirname, 'client')]
    },{ 
      test: /\.png$/, 
      loader: "url-loader?mimetype=image/png",
      include: [path.join(__dirname, 'client')] 
    }]
  }
};
