module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext')({
      warnForDuplicates: false,
      browsers: ['last 2 versions', '> 5%']
    }),
    require('precss')
  ]
}
