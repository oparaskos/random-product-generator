'use strict';
var gulp = require('gulp');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');

gulp.task('clean', function () {
    gulp.src('dist/**')
        .pipe(clean())
});

gulp.task('typescript', function () {
    gulp.src('src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(typescript())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/'))
});

gulp.task('default', ['typescript'])