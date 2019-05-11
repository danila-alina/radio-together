const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: `${__dirname}/src/static/`,
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: './src/static',
    historyApiFallback: true,
  },

  devtool: 'source-map',

  context: path.resolve(__dirname, './'),

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(css|pcss)$/,
        loaders: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.pcss', '.css', '.js', '.jsx'],
  },
};
