var gulp = require("gulp"),
  gutil = require("gulp-util"),
  sass = require("gulp-sass"),
  browserSync = require("browser-sync"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify"),
  cleancss = require("gulp-clean-css"),
  rename = require("gulp-rename"),
  autoprefixer = require("gulp-autoprefixer"),
  notify = require("gulp-notify"),
  sourcemaps = require("gulp-sourcemaps"),
  moduleImporter = require("sass-module-importer"),
  pxtorem = require("gulp-pxtorem");

gulp.task("browser-sync", function() {
  browserSync({
    server: {},
    notify: false
    // open: false,
    // online: false, // Work Offline Without Internet Connection
    // tunnel: true, tunnel: "projectname", // Demonstration page: http://projectname.localtunnel.me
  });
});

gulp.task("styles", function() {
  return (
    gulp
      .src("css/main.scss")
      .pipe(sourcemaps.init())
      .pipe(sass({
          outputStyle: "expanded",
          importer: moduleImporter()
        }).on("error", notify.onError()))
      /* .pipe(
        pxtorem({
          propList: ["*"]
        })
      ) */
      //.pipe(autoprefixer({ browsers: ["last 15 versions"], cascade: false }))
      //.pipe(cleancss({ level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("css"))
      .pipe(browserSync.stream())
  );
});

gulp.task("js", function() {
  return (
    gulp
      .src([
        "js/main.js" // Always at the end
      ])
      .pipe(concat("scripts.min.js"))
      // .pipe(uglify()) // Mifify js (opt.)
      .pipe(gulp.dest("js"))
      .pipe(browserSync.reload({ stream: true }))
  );
});

gulp.task("watch", ["styles", "js", "browser-sync"], function() {
  gulp.watch("css/" + "/**/*.scss", ["styles"]);
  gulp.watch(["libs/**/*.js", "js/main.js", "js/**.js"], ["js"]);
  gulp.watch("*.html", browserSync.reload);
});

gulp.task("default", ["watch"]);
