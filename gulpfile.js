var gulp = require('gulp');
var fs= require('fs');
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var semi = require('semi');
var uglify = require('gulp-uglify');

gulp.task('default', function() {

  var myConfig = Object.create(webpackConfig);
  webpack(myConfig, function(err, stats) {
    if (err) throw err;
    console.log("webpack success!");

    fs.readFile(path.join(__dirname, 'public/js/app.js'), 'utf-8', function (err,data) {
      if (err) throw err;

      var jsWithSemicolons = semi.add(data);
      fs.writeFile(path.join(__dirname, 'public/js/app.js'), jsWithSemicolons, function (err) {
        if (err) throw err;
        // gulp.src('public/js/app.js')
        // .pipe(uglify())
        // .pipe(gulp.dest('public/js'));
        console.log("app.js write success!");
      });
    });
  });
});