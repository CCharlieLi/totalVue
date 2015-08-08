var gulp = require('gulp');
var compressor = require('yuicompressor');
var fs= require('fs');
var path = require('path');
var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");

gulp.task('default', function() {

	var myConfig = Object.create(webpackConfig);
	webpack(myConfig, function(err, stats) {
	    if (err) throw err;
	    console.log("webpack success!");

	    /*compressor.compress(path.join(__dirname, 'public/js/app.js'), {
	    charset: 'utf8',
	    type: 'js',
	    nomunge: true
		}, function(err, data, extra) {
			if (err) throw err;
			fs.writeFile(path.join(__dirname, 'public/js/app.js'), data, function (err) {
		        if (err) throw err;
		        console.log("app.js write success!");
		    });
		});*/
	});
});