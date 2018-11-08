var gulp = require('gulp');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var tsProject = require('gulp-typescript');
var tslint = require('gulp-tslint');
var mocha = require('gulp-mocha');

function clean() {
    return del('dist/**');
}

function templates() {
    return gulp.src('src/**/*.hbs')
        .pipe(gulp.dest('dist/'))
}

function mochaTest() {
    return gulp.src('dist/tests/*Test*.js', { read: false })
        .pipe(mocha())
}

function typescript() {
    return gulp.src('src/**/*.ts')
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report())
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/'))
}

const build = gulp.series(clean, gulp.parallel(templates, typescript));
const test = gulp.series(build, mochaTest);

gulp.task('test', test);
gulp.task('build', build);
gulp.task('default', test);