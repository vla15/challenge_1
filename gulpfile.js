const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump')


gulp.task('default', function() {
  console.log('gulp is running...');
});

gulp.task('minify', function(cb) {
  pump([
    gulp.src('public/*.js'),
    uglify(),
    gulp.dest('dist')
    ],
    cb
  );
});