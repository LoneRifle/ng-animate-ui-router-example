const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = [
  // Javascript
  {
    entry: path.resolve(__dirname, './index.js'),
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            compact: false,
          },
        },
        {
          test: /\.vue$/,
          use: 'vue-loader',
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin()
    ],
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js',
    },
    devtool: 'source-map',
  }
]