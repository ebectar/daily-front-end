const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')

gulp.task('pug:build', function(){
  return gulp.src('./*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./public'))
});

gulp.task('sass:build', function(){
  return gulp.src('./scss/*.scss')
    .pipe(sass()).on('error', sass.logError)
    .pipe(gulp.dest('./public/css'))
});

gulp.task('pug:watch', () => {
  return gulp
      .watch('./src/html/*.pug', ['pug']);
});

gulp.task('sass:watch', function(){
  gulp.watch('./scss/**/*.scss', ['sass']); 
})

gulp.task('pug', ['pug:watch', 'pug:build']);
gulp.task('sass', ['sass:watch', 'sass:build']);