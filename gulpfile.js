const { src, dest, watch, series, parallel } = require('gulp');
const loadPlugins = require('gulp-load-plugins');
const $ = loadPlugins();
const pkg = require('./package.json');
const conf = pkg["gulp-config"];
const sizes = conf.sizes;
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync');
const server = browserSync.create();
const isProd = process.env.NODE_ENV === "production";

function images(done) {
    for(let size of sizes) {
        let width = size[0];
        let height = size[1];
        src('./src/images/icon/favicon.png')
        .pipe($.imageResize({
            width: width,
            height: height,
            crop: true,
            upscale: false
        }))
        .pipe($.imagemin())
        .pipe($.rename(`favicon-${width}x${height}.png`))
        .pipe(dest('./dist/images/icon'));
    }
    done();
}

function styles() {
    return src('./src/styles/style.scss')
        .pipe($.if(!isProd, $.sourcemaps.init()))
        .pipe($.sass())
        .pipe($.postcss([
            autoprefixer({
                grid: true,
                cascde: false
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
