const path = require('path')
const paths = require('./paths')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const pxtorem = require('postcss-pxtorem')

module.exports = {
  entry: {
    index: path.resolve(paths.PATH_SRC, 'index'),
  },
  output: {
    path: path.resolve(paths.PATH_DIST),
    publicPath: '/',
    filename: path.join('js', '[name].js'),
    chunkFilename: path.join('js', '[name]-chunk.js'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          'css-loader?importLoaders=1',
          'postcss-loader'
        ],
        include: paths.PATH_SRC,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          'css-loader'
        ],
        include: [
          path.join(paths.PATH_NODE_MODULES, 'normalize.css'),
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          'css-loader',
          'postcss-loader',
          `less-loader?{"sourceMap":true,"javascriptEnabled":true}`
        ],
        include: paths.PATH_NODE_MODULES,
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../',
            }
          },
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ],
        include: [
          path.resolve(paths.PATH_SRC, 'common'),
        ],
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                pxtorem({
                  rootValue: 100,
                  unitPrecision: 5,
                  mediaQuery: false,
                  minPixelValue: 0,
                  propList: [
                    '*background*', '*padding*', '*margin*',
                    'letter-spacing', '*width',
                    'left', 'right', 'top', 'bottom',
                  ],
                }),
              ],
            },
          },
          {
            loader: 'stylus-loader',
            options: {
              paths: [path.join(paths.PATH_NODE_MODULES, 'src')],
            }
          },
        ],
        include: [
          path.join(paths.PATH_NODE_MODULES),
        ],
      },
      {
        test: /\.styl/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'stylus-loader',
            options: {
              paths: [
                path.join(paths.PATH_NODE_MODULES, 'src'),
              ],
            },
          },
        ],
        include: [
          path.join(paths.PATH_NODE_MODULES, 'src'),
        ],
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        include: [
          paths.PATH_SRC,
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(?:png|jpe?g|gif|svg|woff|eot|ttf)\??.*$/,
        use: [
          'url-loader?limit=10000&name=img/[name]-[sha512:hash:base64:7].[ext]',
        ],
        include: [
          paths.PATH_SRC
        ],
      },
    ],
  },
  optimization: {
    // 暂时不需要拆分 vendor chunks
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       chunks: 'all',
    //       name: 'vendor',
    //       // enforce: true
    //     }
    //   }
    // },
  },
  plugins: [
    new CircularDependencyPlugin({
      exclude: /node_modules/,
      failOnError: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    modules: [
      path.resolve(paths.PATH_SRC),
      'node_modules',
    ],
    alias: {
      
    },
  },
}
