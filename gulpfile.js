'use strict'

const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

gulp.task("css",function hello(callback){
    return gulp.src('frontend/**/*.scss')
        .pipe(sass())
        .pipe(concat('slyle.css'))
        .pipe(gulp.dest('product'));
});