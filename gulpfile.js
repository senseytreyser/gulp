'use strict'

const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const del = require('del');

gulp.task("css",function(){
    return gulp.src('frontend/**/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('product'));
});

gulp.task("clear", function(){
    return del('product');
});

gulp.task("assets", function(){
    return gulp.src('frontend/assets/**')
        .pipe(gulp.dest('product'));
});

gulp.task('build', gulp.series('clear', gulp.parallel('css','assets')))