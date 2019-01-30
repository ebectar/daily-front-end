const gulp = require('gulp')
const pug = require('gulp-pug')
const sass = require('gulp-sass')

function html() {
  return (
    gulp.src('./*.pug')
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('./public'))
  )
}

function css() {
  return (
    gulp.src("scss/*.scss")
    .pipe(sass()).on("error", sass.logError)
    .pipe(gulp.dest("./public/css/"))
  );
}

function watch() {
  gulp.watch('./*.pug', html);
  gulp.watch('./scss/**/*.scss', css);
}

exports.html = html;
exports.css = css;
exports.watch = watch;