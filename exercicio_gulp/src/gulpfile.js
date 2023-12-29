const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");

function compile_sass() {
  return gulp
    .src("./sass/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("../build/css"));
}

function compress_imgs() {
  return gulp
  .src("./imgs/*")
  .pipe(imagemin())
  .pipe(gulp.dest("../build/imgs"));
}

function compress_js() {
  return gulp 
  .src("./js/*.js")
  .pipe(uglify())
  .pipe(gulp.dest("../build/js"));
}

exports.default = () => {
  gulp.watch("./sass/*.scss", {ignoreInitial: false} ,compile_sass);
  gulp.watch("./imgs/*", {ignoreInitial: false}, compress_imgs);
  gulp.watch("./js/*", {ignoreInitial: false}, compress_js);
};
