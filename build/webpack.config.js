const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ApiMocker = require('webpack-api-mocker2')

const paths = require('./paths')
const baseConfig = require('./webpack.config.base.js')

const mockPath = path.resolve(__dirname, '../mock')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true,
              camelCase: true,
              localIdentName: '[name]_[local]_[hash:base64:5]'
            }
          },
          'postcss-loader',
          'stylus-loader'
        ],
        include: paths.PATH_SRC,
      },
    ],
  },
  plugins: [
    new webpack.WatchIgnorePlugin([/css\.d\.ts$/]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: true,
      template: 'index.html',
    }),
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
    new MiniCssExtractPlugin('css/[name].css'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {
    runtimeChunk: true,
  },
  devServer: {
    before(app) {
      ApiMocker(app, mockPath)
    },
    proxy: {
      '/webapi/github': {
        target: 'https://api.github.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/webapi/github': '/'
        },
        logLevel: 'debug',
      },
    },
    clientLogLevel: 'error',
    port: 8191,
    contentBase: paths.PATH_DIST,
    inline: true,
    hot: true,
    open: true,
    // host: '0.0.0.0',
    disableHostCheck: true,
    progress: true,
    historyApiFallback: true,
    // https: true,
  },
})
