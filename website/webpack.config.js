const path = require('path');

const webpackConfig = {
  mode: 'development',
  entry: './assets/js/app/index.js',
  output: {
    filename: 'webpack.js',
    path: path.resolve(__dirname, 'static'),
  },
  // plugins: [
  //   new CopyWebpackPlugin([
  //     {
  //       from: './src/index.html',
  //       to: 'index.html',
  //     },
  //   ]),
  // ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
  },
};

module.exports = webpackConfig;

