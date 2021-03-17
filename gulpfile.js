const { src, dest, watch, series, parallel } = require('gulp');
const loadPlugins = require('gulp-load-plugins');
const $ = loadPlugins();
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const server = browserSync.create();
const isProd = process.env.NODE_ENV === "production";

function images() {
    return src('./src/images/*')
        // .pipe($.imageResize({
        //     width: 100,
        //     height: 100,
        //     crop: true,
        //     upscale: false
        // }))
        // .pipe($.rename({
        //     prefix: 'hello-'
        // }))
        .pipe($.imagemin())
        .pipe(dest('./dist/images'));
}

function styles() {
    return src('./src/styles/style.scss')
        .pipe($.if(!isProd, $.sourcemaps.init()))
        .pipe($.sass())
        .pipe($.postcss([
            autoprefixer({
                grid: true,
                // cascde: false
            })
        ]))
        .pipe($.if(!isProd, $.sourcemaps.write('.')))
        .pipe(dest('./dist/styles', styles));
}

function scripts() {
    return src('./src/scripts/**/*.js')
        .pipe($.babel())
        .pipe(dest('./dist/scripts'));
}

function lint() {
    return src('./src/scripts/libs/*.js')
        .pipe($.eslint({
            fix: true
        }))
        .pipe($.eslint.format())
        .pipe($.eslint.failAfterError())
        .pipe(dest('./src/scripts/libs'))
}

function startAppServer() {
    server.init({
        server: {
            baseDir: './dist',
        }
    });

    watch('./src/styles/modules/**/*.scss', styles);
    watch('./src/styles/modules/**/*.scss').on('change', server.reload);

}

const serve = series(parallel(styles, series(scripts)), startAppServer);

exports.images = images;
exports.styles = styles;
exports.scripts = scripts;
exports.lint = lint;
exports.serve = serve;
