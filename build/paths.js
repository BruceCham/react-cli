const path = require('path')

const PATH_ROOT = path.resolve(__dirname, '..')
const PATH_SRC = path.join(PATH_ROOT, 'src')
const PATH_DIST = path.join(PATH_ROOT, 'dist')
const PATH_PKG = path.join(PATH_ROOT, 'package.json')
const PATH_NODE_MODULES = path.join(PATH_ROOT, 'node_modules')

module.exports = {
  PATH_ROOT,
  PATH_SRC,
  PATH_DIST,
  PATH_PKG,
  PATH_NODE_MODULES,
}
