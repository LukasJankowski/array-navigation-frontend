/**
 * Gulpfile taken from:
 * https://github.com/vuejs/vueify
 */ 
var gulp = require('gulp');
var fs = require('fs');
var browserify = require('browserify');
var vueify = require('vueify');


gulp.task('default', function() {
	browserify('src/app.js')
		.transform(vueify)
		.bundle()
		.pipe(fs.createWriteStream('dist/bundle.js'));
});


