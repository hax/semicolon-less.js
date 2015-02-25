'use strict'

var gulp = require('gulp')
var less = require('..')

gulp.task('test', function () {

	gulp.src(';-itis/*.js').pipe(less()).pipe(gulp.dest(';-less'))

})
