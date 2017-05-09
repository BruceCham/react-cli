var webpack = require('webpack'),
  config = require('./webpack.base.config'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  SOURCE_MAP = false;


var path = require('path')
var rootPath = path.resolve(__dirname, '..'), // 项目根目录
  src = path.join(rootPath, 'src'), // 开发源码目录
var commonPath = {
  rootPath: rootPath,
  dist: path.join(rootPath, 'dist'), // build 后输出目录
  indexHTML: path.join(src, 'index.html'), // 入口基页
  staticDir: path.join(rootPath, 'static') // 无需处理的静态资源目录
};


config.output.filename = '[name].[chunkhash:6].js';
config.output.chunkFilename = '[id].[chunkhash:6].js';

config.devtool = SOURCE_MAP ? 'source-map' : false;

// 生产环境下分离出 CSS 文件
config.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style', 'css')
}, {
  test: /\.less$/,
  loader: ExtractTextPlugin.extract('style', 'css!less')
}, {
  test: /\.scss$/,
  loader: ExtractTextPlugin.extract('style', 'css!sass')
});

config.plugins.push(
  new CleanWebpackPlugin('dist', {
    root: commonPath.rootPath,
    verbose: false
  }),
  new CopyWebpackPlugin([ // 复制高度静态资源
    {
      context: commonPath.staticDir,
      from: '**/*',
      ignore: ['*.md']
    }
  ]),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    // 公共代码分离打包
    names: ['vendor', 'mainifest']
  }),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.MinChunkSizePlugin({
    minChunkSize: 30000
  }),
  new ExtractTextPlugin('[name].[contenthash:6].css', {
    allChunks : true // 若要按需加载 CSS 则请注释掉该行
  }),
  new HtmlWebpackPlugin({
    filename: '../index.html',
    template: commonPath.indexHTML,
    chunksSortMode: 'none'
  })
);

module.exports = config;