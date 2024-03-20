'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');


gulp.task('sass', function () {
  return gulp.src('./themes/hugo-litecoin-theme/static/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./themes/hugo-litecoin-theme/static/css'));
});

gulp.task('config', function() {
  return gulp.src(['./config_partials/base.toml', './config_partials/*.toml'])
    .pipe(concat('config.toml'))
    .pipe(gulp.dest('.'));
});

gulp.task('sass:watch', function () {
  gulp.watch(['./themes/hugo-litecoin-theme/static/sass/*.sass',
              './themes/hugo-litecoin-theme/static/sass/*.scss'], gulp.series('sass'));
  gulp.watch('./config_partials/*.toml', gulp.series('config'));
});
