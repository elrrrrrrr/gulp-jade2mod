'use strict';

var gulp = require('gulp');
var jade = require('./gulp/index');

gulp.task('test', function(){
  gulp.src(['test.jade'])
    .pipe(jade({
    }))
    .pipe( gulp.dest('./js') );
})
    

