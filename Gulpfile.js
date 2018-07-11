'use strict';
var gulp = require('gulp');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var typescript = require('gulp-typescript');
var tslint = require('gulp-tslint');
var mocha = require('gulp-mocha');

gulp.task('clean', function () {
    return del('dist/**');
});

gulp.task('test', ['typescript'], function() {
    return gulp.src('dist/tests/*Test*.js', {read: false})
        .pipe(mocha())
});

gulp.task('typescript', function () {
    return gulp.src('src/**/*.ts')
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report())
        .pipe(sourcemaps.init())
        .pipe(typescript())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/'))
});

gulp.task('default', ['clean', 'typescript', 'test'])