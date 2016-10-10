/* jshint node: true*/

"use strict";

// gulp requires
var gulp = require('gulp');

var del = require('del');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

// build configuration variables
var sourceDirectory = 'src';
var outputDirectory = 'dist';

// default job
gulp.task('default', ['html', 'css']);

// HTML transformation
gulp.task('html', function() {
    return gulp.src(sourceDirectory + '/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest(outputDirectory));
});

// CSS generation
gulp.task('css', function() {
    return gulp.src(sourceDirectory + '/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest(outputDirectory));
});

// cleaning job
gulp.task('clean', function() {
    return del(outputDirectory);
});