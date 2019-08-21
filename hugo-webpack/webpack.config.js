const path = require('path');

const webpackConfig = {
  mode: 'development',
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
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

// module.exports = {
//   entry: ['./src/sass/main.scss', './src/js/app.js'],
//   watch: true,
//   mode: 'production',
//   module: {
//     rules: [
//       {
//         test: /\.scss$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {
//               name: '[name].css',
//               outputPath: '../css/'
//             }
//           },
//           {
//             loader: 'sass-loader',
//             options: {
//               outputStyle: 'compressed'
//             }
//           }
//         ]
//       }
//     ]
//   },
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'static/js')
//   }
// };
