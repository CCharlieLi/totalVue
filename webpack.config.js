module.exports = {
  //  login.js
  entry: "./views/app.js",
  output: {
  	path: './public/js/',
    filename: "app.js"
  },

  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue-loader" },
      { test: /\.(jpe?g|png|gif|svg)$/i, loaders: [ 'url?limit=10000', 'img-loader?minimize' ] }
    ]
  }
}