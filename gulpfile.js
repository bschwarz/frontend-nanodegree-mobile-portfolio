var gulp = require('gulp');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var inlinecss = require('gulp-inline-css');
var htmlmin = require('gulp-htmlmin');

// For the index page and assets
var DEST = 'dist/';
gulp.task('main-js', function() {
  return gulp.src(['js/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest(DEST + '/js/'));
});

gulp.task('main-css', function() {
  return gulp.src(['css/*.css'])
    .pipe(csso())
    .pipe(gulp.dest(DEST + '/css/'));
});

gulp.task('main-html', function() {
  return gulp.src(['*.html'])
    .pipe(htmlmin())
    .pipe(gulp.dest(DEST));
});


// for the pizza page and assets
gulp.task('pizza-js', function() {
  return gulp.src(['js/*.js', 'views/js/*.js'])
    .pipe(gulp.dest(DEST))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest(DEST));
});

gulp.task('pizza-css', function() {
  return gulp.src(['css/*.css', 'views/css/*.css'])
    .pipe(gulp.dest(DEST))
    .pipe(csso())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest(DEST));
});


gulp.task('main', ['main-html', 'main-js', 'main-css']);