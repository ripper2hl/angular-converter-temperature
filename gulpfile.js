// File: gulpfile.js
'use strict';
var gulp = require('gulp');
var coveralls = require('gulp-coveralls');

gulp.task( 'coveralls', function() {

  gulp.src( 'test/reports/coverage/**/lcov.info' )
  .pipe( coveralls( ) );

});
