var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var production = process.env.NODE_ENV === 'production'
exports.assetsPath = function (_path) {
  var assetsSubDirectory = production
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      modules: true,
      minimize: production,
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }
    return loaders
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}
function devAndProLoaders(production, loader){
  if( production ){
    return ExtractTextPlugin.extract({
      fallback:[{
        loader: 'style-loader'
      }],
      use: loader
    })
  }else{
    loader.unshift({
      loader: "style-loader"
    })
    return loader
  }
}
// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]    
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      // use: ExtractTextPlugin.extract(loader)
      use: devAndProLoaders( production, loader )
    })
  }
  return output
}
