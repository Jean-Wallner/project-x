var gulp      = require('gulp'),
    less      = require('gulp-less'),
    rename    = require('gulp-rename'),
    cleancss  = require('gulp-clean-css');

gulp.task('less', function () {
  return gulp.src([
    './rcs/less/pages/*.less'
  ])
  .pipe( less() )
  .pipe( gulp.dest('./.tmp/css') )
  .pipe( cleancss() )
  .pipe( rename({
    extname: '.min.css'
  }))
  .pipe( gulp.dest('./dist/css') );
});

gulp.task('watch', function () {
  gulp.watch('./rcs/less/**/*.less', ['less']);
});

gulp.task('default', ['watch', 'less']);
