var webpack = require('webpack'),
  config = require('./webpack.base.config'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
  // SOURCE_MAP = true; // 大多数情况下用不到
  SOURCE_MAP = false;

var path = require('path')
var rootPath = path.resolve(__dirname, '..'), // 项目根目录
  src = path.join(rootPath, 'src'); // 开发源码目录
var commonPath = {
  rootPath: rootPath,
  dist: path.join(rootPath, 'dist'), // build 后输出目录
  indexHTML: path.join(src, 'index.html'), // 入口基页
  staticDir: path.join(rootPath, 'static') // 无需处理的静态资源目录
};



config.output.filename = '[name].js';
config.output.chunkFilename = '[id].js';

config.devtool = SOURCE_MAP ? 'eval-source-map' : false;

// add hot-reload related code to entry chunk
config.entry.app = [
  'eventsource-polyfill',
  'webpack-hot-middleware/client?reload=true',
  'webpack/hot/only-dev-server',
  config.entry.app
];

config.output.publicPath = '/';

// 开发环境下直接内嵌 CSS 以支持热替换
config.module.loaders.push({
  test: /\.css$/,
  loader: 'style-loader!css-loader'
}, {
  test: /\.less$/,
  loader: 'style-loader!css-loader!less-loader'
}, {
  test: /\.scss$/,
  loader: 'style-loader!css-loader!sass-loader'
});

config.plugins.push(
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new ExtractTextPlugin('[name].css'),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: commonPath.indexHTML,
    chunksSortMode: 'none'
  }),
  new BrowserSyncPlugin({
    host: '127.0.0.1',
    port: 9090,
    proxy: 'http://127.0.0.1:9000/',
    logConnections: false,
    notify: false
  }, {
    reload: false
  })
);

module.exports = config;