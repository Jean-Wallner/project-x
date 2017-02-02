var gulp       = require('gulp'),
    less       = require('gulp-less'),
    rename     = require('gulp-rename'),
    cleancss   = require('gulp-clean-css'),
    livereload = require('gulp-livereload');

gulp.task('less', function () {
  return gulp.src([
    './rcs/less/pages/*.less'
  ])
  .pipe( less() )
  .pipe( gulp.dest('./.tmp/css') )
  .pipe( cleancss() )
  .pipe( rename({
    suffix: '.min'
  }))
  .pipe( gulp.dest('./dist/css') )
  .pipe(livereload());
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./*.php', livereload.reload);
  gulp.watch('./rcs/less/**/*.less', ['less']);
});

gulp.task('default', ['watch', 'less']);
