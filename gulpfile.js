var gulp = require('gulp');
var uglify = require('gulp-uglify');
var inlinecss = require('gulp-inline-css');
var htmlmin = require('gulp-htmlmin');
var jshint = require('gulp-jshint');

// Note: the '**/' is needed as a prefix to
// preserve the directory structure.


// To move and minify JS assests.
var DEST = 'dist/';
gulp.task('js', function() {
  return gulp.src(['**/js/*.js', '!node_modules/', '!node_modules/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(gulp.dest(DEST));
});

gulp.task('img', function() {
  return gulp.src(['**/images/*.png', '**/images/*.jpg', '**/images/*.gif', '!node_modules/', '!node_modules/**'])
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