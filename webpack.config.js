module.exports = {
  devtool: 'sourcemap',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.styl$/, loader: 'style!css!stylus'},
      {test: /\.html$/, loader: 'raw'},
      {test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: 'url'}
    ]
  }
}
