'use strict';
var gulp = require('gulp');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');
var tslint = require("gulp-tslint");

gulp.task('clean', function () {
    gulp.src('dist/**')
        .pipe(clean())
});

gulp.task('typescript', function () {
    gulp.src('src/**/*.ts')
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report())
        .pipe(sourcemaps.init())
        .pipe(typescript())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/'))
});

gulp.task('default', ['typescript'])