import webpack from 'webpack';

export default {
  entry: {
    client: [
      './client/index.jsx'
    ]
  },
  output: {
    path: `${__dirname}/public/assets`,
    filename: '[name].js',
    publicPath: '/assets',
  },
  module: {
    loaders:[{
        test: /\.jsx?$/,
        loader: `babel?cacheDirectory`,
        include: [`${__dirname}/client`
    }],
  }
};
