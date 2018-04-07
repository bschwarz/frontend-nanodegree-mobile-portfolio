var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var jshint = require('gulp-jshint');
var inlinesrc = require('gulp-inline-source');
var csslint = require('gulp-csslint');

// Note: the '**/' is needed as a prefix to
// preserve the directory structure.


// To move and minify JS assests.
var DEST = 'dist/';
gulp.task('js', function() {
  return gulp.src(['**/js/*.js', '!node_modules/', '!node_modules/**', '!dist/', '!dist/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(gulp.dest(DEST));
});

gulp.task('img', function() {
  return gulp.src(['**/images/*.png', '**/images/*.jpg', '**/images/*.gif', '!node_modules/', '!node_modules/**', '!dist/', '!dist/**'])
    .pipe(gulp.dest(DEST));
});

// just to run csslint, since CSS gets inlined in HTML, and copy over bootstrap
gulp.task('csslint', function() {
  return gulp.src(['**/css/*.css', '!node_modules/', '!node_modules/**', '!dist/', '!dist/**'])
    .pipe(csslint())
    .pipe(csslint.formatter());
});

// just to run csslint, since CSS gets inlined in HTML, and copy over bootstrap
gulp.task('css', ['csslint'], function() {
  return gulp.src(['**/css/boot*.css', '!node_modules/', '!node_modules/**', '!dist/', '!dist/**'])
    .pipe(gulp.dest(DEST));
});

gulp.task('html', ['css'], function() {
  return gulp.src(['index.html', 'project-*.html', '**/views/pizza.html'])
    .pipe(inlinesrc())
    .pipe(htmlmin({collapseWhitespace: true,minifyJS:true,minifyCSS:false,removeComments:true}))
    .pipe(gulp.dest(DEST));
});


gulp.task('main', ['html', 'js', 'img']);