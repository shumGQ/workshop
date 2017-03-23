var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
  connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});
 
gulp.task('css', function () {
  gulp.src('./app/css/*.css')
    .pipe(connect.reload());
})

gulp.task('watch', function () {
  gulp.watch(['./app/*.html'], ['html']),
  gulp.watch(['./app/css/*.css'], ['css']);
});


gulp.task('default', ['connect', 'watch']);