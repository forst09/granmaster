const {
  src,
  dest,
  watch,
  parallel,
  series
} = require('gulp');

const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin = import('gulp-imagemin');
const del = import('del');

function browsersync() {
  browserSync.init({
    server: {
      baseDir: 'app/'
    },
    browser: 'chrome',
  });
}

function cleanDist() {
  return del('dist')
}

// на локалке рабоать с несжатыми, в конце перед выгрузкой не забыть вызвать функцию!!!
function images() {
  return src('app/images/**/*')
    .pipe(imagemin(
      [
        imagemin.gifsicle({
          interlaced: true
        }),
        imagemin.mozjpeg({
          quality: 75,
          progressive: true
        }),
        imagemin.optipng({
          optimizationLevel: 5
        }),
        imagemin.svgo({
          plugins: [{
            removeViewBox: true
          },
          {
            cleanupIDs: false
          }
          ]
        })
      ]
    ))
    .pipe(dest('dist/images'))
}

function scripts() {
  return src([
    // 'node_modules/jquery/dist/jquery.js',
    // 'node_modules/slick-slider/slick/slick.js',
    // 'app/js/jquery.fancybox.min.js',
    // 'app/js/simple-scrollbar.js',
    // 'app/js/inputmask.min.js',
    'app/js/main.js'
  ])
    .pipe(concat('full-main.js'))
    // .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}


function styles() {
  return src('app/scss/style.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    // .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 version'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}

function media() {
  return src('app/scss/media.scss')
    .pipe(sass({
      outputStyle: 'expanded'
    }))
    // .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 version'],
      grid: true
    }))
    .pipe(dest('app/css'))
    .pipe(browserSync.stream())
}



// Отдать готовый проект для проверку кому-то, в эту папку собирается готовые файлы!!!!! ИСПРАВИТЬ НАЗВАНИЕ ФАЙЛОВ
function build() {
  return src([
    'app/css/style.css',
    'app/css/media.css',
    'app/fonts/**/*',
    'app/js/full-main.js',
    'app/*.html'
  ], {
    base: 'app'
  })
    .pipe(dest('dist'))
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/scss/**/*.scss'], media);
  watch(['app/js/**/*.js', '!app/js/full-main.js'], scripts);
  watch(['app/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.media = media;

// автоматическое слежение за проектом
exports.watching = watching;

// обновление страницы при изменении html, css, js
exports.browsersync = browsersync;

exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;

// gulp build ---> запуск готовых файлов на проверку
exports.build = series(cleanDist, images, build);

// gulp ---> запуск проекта для работы на локалке и дальнейшей разработки
exports.default = parallel(styles, media, scripts, browsersync, watching);

// ДЛЯ ЗАПУСКА НОВОЙ РАЗРАБОТКИ НАПИШИ: npm i