var express = require('express'),
  webpack = require('webpack'),
  // favicon = require('express-favicon'),
  config = require('./webpack.dev.config'),
  app = express();

var compiler = webpack(config);

var path = require('path')
var rootPath = path.resolve(__dirname, '..'), // 项目根目录
  src = path.join(rootPath, 'src'); // 开发源码目录
var commonPath = {
  staticDir: path.join(rootPath, 'static') // 无需处理的静态资源目录
};


// for highly stable resources
app.use('/static', express.static(commonPath.staticDir));

// app.use(favicon(path.join(__dirname, '../favicon.ico')));

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// enable hot-reload and state-preserving
// compilation error display
app.use(require('webpack-hot-middleware')(compiler));

app.listen(9000, '127.0.0.1', function(err) {
  err && console.log(err);
});