// 網頁打包
// const path = require('path');

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//           options: {
//             presets: ['@babel/preset-env']
//           }
//         }
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       }
//     ]
//   }
// };

// JS模組打包
const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    module1: "./src/module1.js",
    module2: "./src/module2.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
