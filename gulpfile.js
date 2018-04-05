var gulp = require('gulp');
// var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
// var csso = require('gulp-csso');
// var cleancss = require('gulp-clean-css');
var inlinecss = require('gulp-inline-css');
var htmlmin = require('gulp-htmlmin');

// Note: the '**/' is needed as a prefix to
// preserve the directory structure.

// To move and minify JS assests.
var DEST = 'dist/';
gulp.task('js', function() {
  return gulp.src(['**/js/*.js'])
    .pipe(uglify())
    .pipe(gulp.dest(DEST));
});

// gulp.task('css', function() {
//   return gulp.src(['**/css/*.css'])
//     .pipe(cleancss())
//     .pipe(gulp.dest(DEST));
// });

gulp.task('img', function() {
  return gulp.src(['**/images/*.png', '**/images/*.jpg', '**/images/*.gif'])
    .pipe(gulp.dest(DEST));
});

gulp.task('html', function() {
  // return gulp.src(['**/*.html', '!node_modules/', '!node_modules/**'])
  return gulp.src(['index.html', 'project-*.html', '**/views/pizza.html'])
    .pipe(inlinecss())
    .pipe(htmlmin({collapseWhitespace: true,minifyJS:true,minifyCSS:true,removeComments:true}))
    .pipe(gulp.dest(DEST));
});


gulp.task('main', ['html', 'js', 'img']);