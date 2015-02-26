'use strict'

var gulp = require('gulp')
var less = require('../gulp-plugin')

gulp.task('default', function () {
	return gulp.src(';-itis/*.js').pipe(less()).pipe(gulp.dest(';-less'))
})
