let path = require('path')
let utils = require('./utils')
let config = require('../config')
let isProd = process.env.NODE_ENV === 'production'
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/entry.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: isProd?config.build.assetsPublicPath:config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      resolve('src'),
      resolve('node_modules')
    ],
    alias: {
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: (function(){
          let _loader = [
            'babel-loader'
          ]
          return _loader
        })(),
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
