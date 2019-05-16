const path = require('path')

module.exports = [
  // Javascript
  {
    entry: path.resolve(__dirname, './index.js'),
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            compact: false,
          },
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    devtool: 'source-map',
  }
]