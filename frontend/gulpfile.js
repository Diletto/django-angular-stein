const gulp = require('gulp');
const clean = require('gulp-clean');
const pug = require('gulp-pug'); 
const rename    = require('gulp-rename');
     
const sassMonster = require('gulp-sass-monster');

const browserify = require('browserify');
const browserSync = require('browser-sync').create();

const csso      = require('gulp-csso');    // минимизирует CSS

const gutil = require('gulp-util');

const options = {};
const isSync = true;

const isPROD =  true;



var paths = {
        dist: './dist/',
        sass: './src/sass/',
        css: './dist/css/',
        htmlDist: './dist/',
  };           

gulp.task('cleanOldPugGeneration', function () {
    return gulp.src(paths.htmlDist, {read: false})
      .pipe(clean());
  });
  
gulp.task('pug', function () {
    return gulp.src(['./src/pug/**/*.pug','!./src/pug/**/_*.pug'])
      .pipe(pug({
        pretty: true
      }))
      .on('error',
       function (err) {
        console.log(err.message ,'\n');
        this.emit('end');
      }
      )
      .pipe(gulp.dest(paths.htmlDist));
  });
  
          


gulp.task('compressJs', function () {
  return gulp.src(paths.jsWatch)
    .pipe(rename({                        
      suffix: '.min',            
    }))
    .pipe(gulp.dest(paths.jsDist));
  
});



gulp.task('cleanCss', function () {
  return gulp.src(paths.css + '*', {read: false})
        .pipe(clean());
});


gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
      .pipe(sassMonster(options, isSync).on('error', sassMonster.logError))
      .pipe(gulp.dest(paths.css));
});

gulp.task('CssMin', function () {
  return gulp.src('dist/css/*.css')
      .pipe(csso())
      .pipe(rename({
          suffix: ".min"
        }))
      .pipe(gulp.dest('./dist/css'));
});


//browser Sync

gulp.task('browserSyncInit', function() {
  browserSync.init({
    server: {
      baseDir: './dist/'
    }
  })
});

gulp.task('browserReload',  function (done) {
  browserSync.reload();
  done();
});

/**
 * Watch scss files for changes & recompile
 * Watch .pug files run pug-rebuild then reload BrowserSync
 */
gulp.task('watch', function () {
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
    
    gulp.watch(['./src/sass/**/*.scss'], gulp.series(['cleanCss', 'sass', 'browserReload']));
    gulp.watch(['./src/pug/**/*.pug'], gulp.series(['pug', 'browserReload']));
});

gulp.task('build',  gulp.series(['cleanCss', 'cleanOldPugGeneration','sass', 'CssMin',  'pug']) ,function(){
  console.log("building");
});


