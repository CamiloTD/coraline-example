let gulp = require('gulp');
let download = require('gulp-download');
let stylus = require('gulp-stylus');
let watch  = require('gulp-watch');

gulp.task('build-lib', () => gulp.src('./src/lib/**/*.*').pipe(gulp.dest('./build/kmi_modules')));
gulp.task('build-lang', () => gulp.src('./src/lang/**/*.*').pipe(gulp.dest('./build/lang')));
gulp.task('build-images', () => gulp.src('./src/images/**/*.*').pipe(gulp.dest('./build/images')));
gulp.task('build-style', () => gulp.src('./src/style/**/*.styl').pipe(stylus({ include: 'src/style' })).pipe(gulp.dest('./build')));
gulp.task('build-index', () => gulp.src(['./src/**/*.js', '!./src/lib/**/*.*']).pipe(gulp.dest('build')));

gulp.task('get-require.kmi', () => download('https://raw.githubusercontent.com/camilotd/require.kmi/master/src/require.kmi.js').pipe(gulp.dest('src/lib')));
gulp.task('get-coraline-client', () => download('https://raw.githubusercontent.com/camilotd/coraline-client/master/src/coraline-client.js').pipe(gulp.dest('src/lib')));
gulp.task('get-jquery', () => download('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js').pipe(gulp.dest('src/lib')));
gulp.task('get-eventemitter', () => download('https://cdnjs.cloudflare.com/ajax/libs/EventEmitter/5.2.5/EventEmitter.min.js').pipe(gulp.dest('src/lib')));

gulp.task('init', ['get-require.kmi', 'get-coraline-client', 'get-jquery', 'get-eventemitter']);
gulp.task('build', ['build-lib', 'build-style', 'build-lang', 'build-images', 'build-index']);
gulp.task('watch', () => watch('./src/**/*.*', { ignoreInitial: false }, () => gulp.start('build')));