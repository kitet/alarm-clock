var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utitlities = require('gulp-util');
var del = require('del');
var jshint = require('gulp-util');
var buildProduction = utitlities.env.production;

var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});

var browserSync = require('browser-sync');

gulp.task('jshint', function () {
	return gulp.src(['js/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('bowerJS', function () {
	return gulp.src(lib.ext('js').files)
	.pipe(concat('vendor.min.js'))
	.pipe(gulp.dest('./build/js'));
});

gulp.task('bowerCSS', function () {
	return gulp.src(lib.ext('css').files)
	.pipe(concat('vendor.css'))
	.pipe(gulp.dest('./build/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task('jsB')