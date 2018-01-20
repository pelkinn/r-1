var gulp = require('gulp'),
    less = require('gulp-less'),
    smartgrid = require('smart-grid'),
    watchLess = require('gulp-less-watcher'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps');
    autoprefixer = require('gulp-autoprefixer');

var smartgridSettings = {
    outputStyle: 'less', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '4px', /* gutter width px || % */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1200px', /* max-width оn very large screen */
        fields: '0px' /* side fields */
    },
    breakPoints: {
        lg: {
            width: '1200px' /* -> @media (max-width: 1100px) */
        },
        md: {
            width: '970px'
        },
        sm: {
            width: '750px',
            fields: '5px' /* set fields only if you want to change container.fields */
        },
        xs: {
            width: '425px'
        }
    }
};

gulp.task('default', function(done) {
    return gulp.src('style.less', { cwd: 'css/' })
        .pipe(plumber())
        .pipe(watchLess())
        .pipe(sourcemaps.init())
        .pipe(less().on('error', function(error) {
            done(error);
        }))
        .pipe(sourcemaps.write('css/', { includeContent: true }))
        .pipe(gulp.dest('css/'));
});

gulp.task('autoprefix', function () {
    return gulp.src('css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css/'));
});

/**
 * Генерация сетки less, вместо bootstrap.css
 */
gulp.task('smartgrid', function () {
    smartgrid('css', smartgridSettings);
});