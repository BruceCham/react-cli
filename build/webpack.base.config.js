var path = require('path'),
  webpack = require('webpack'),
  NyanProgressPlugin = require('nyan-progress-webpack-plugin');

var rootPath = path.resolve(__dirname, '..'), // 项目根目录
  src = path.join(rootPath, 'src'), // 开发源码目录
  env = process.env.NODE_ENV.trim(); // 当前环境
var commonPath = {
  rootPath: rootPath,
  dist: path.join(rootPath, 'dist'), // build 后输出目录
  indexHTML: path.join(src, 'index.html'), // 入口基页
  staticDir: path.join(rootPath, 'static') // 无需处理的静态资源目录
};

module.exports = {
  entry: {
    app: path.join(src, 'app.js'),

    // ================================
    // 框架 / 类库 分离打包
    // ================================
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-dom',
      'redux',
      'redux-saga'
    ]
  },
  output: {
    path: path.join(commonPath.dist, 'static'),
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: [
      'node_modules'
    ],
    alias: {
      // ================================
      // 自定义路径别名
      // ================================
      ASSET: path.join(src, 'assets'),
      COMPONENT: path.join(src, 'components'),
      ACTION: path.join(src, 'redux/actions'),
      REDUCER: path.join(src, 'redux/reducers'),
      STORE: path.join(src, 'redux/store'),
      ROUTE: path.join(src, 'routes'),
      SERVICE: path.join(src, 'services'),
      UTIL: path.join(src, 'utils'),
      HOC: path.join(src, 'utils/HoC'),
      MIXIN: path.join(src, 'utils/mixins'),
      VIEW: path.join(src, 'views')
    }
  },
  module: {
    loaders: [{
      test: /\.(js|jsx)$/,
      loaders: (function() {
        var _loaders = ['babel-loader'];
        if (env === 'development') {
          _loaders.unshift('react-hot-loader');
        }
        return _loaders;
      })(),
      include: src,
      exclude: /node_modules/
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }, {
      test: /\.(png|jpe?g|gif|svg)$/,
      loader: 'url-loader',
      query: {
        limit: 10240, // 10KB 以下使用 base64
        name: 'img/[name]-[hash:6].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)$/,
      loader: 'url-loader?limit=10240&name=fonts/[name]-[hash:6].[ext]'
    }]
  },
  plugins: [
    new NyanProgressPlugin(), // 进度条
    new webpack.DefinePlugin({
      'process.env': { // 这是给 React / Redux 打包用的
        NODE_ENV: JSON.stringify('production')
      },
      // ================================
      // 配置开发全局常量
      // ================================
      __DEV__: env === 'development',
      __PROD__: env === 'production',
      __COMPONENT_DEVTOOLS__: false, // 是否使用组件形式的 Redux DevTools
      __WHY_DID_YOU_UPDATE__: false // 是否检测不必要的组件重渲染
    })
  ]
};