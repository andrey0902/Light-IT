var gulp        =require('gulp'),
    notify      =require('gulp-notify'),
    minCss      =require('gulp-minify-css'),
    imagemin    =require('gulp-imagemin'),
    imgPng      =require('imagemin-pngquant'),
    minhtml     =require('gulp-html-minifier'),
    minifyInline = require('gulp-minify-inline')

gulp.task('cssmin',function () {
    return gulp.src('./css/*.css')
    .pipe(minCss({KeepBreaks:false}))
        .pipe(gulp.dest('./app/css/'))
        .pipe(notify('success!'))
});
gulp.task('imgmin',function () {
    return gulp.src('./img/*')
        .pipe(imagemin({
            interlaced:true,
            progressive:true,
            svgoPlugins:[{removeViewBox:false}],
            une:[imgPng]
        }))
        .pipe(gulp.dest('./app/img/'))
        .pipe(notify('success!'))
});
gulp.task('htmlmin',function () {
    return gulp.src('./tpl/*.html')
        .pipe(minhtml({collapseWhitespace: true}))
        .pipe(gulp.dest('./app/tpl/'))
        .pipe(notify('success!'))
});
var options = {
    js: {
        output: {
            comments: true
        }
    }
}
gulp.task('jsmin',function () {
    return gulp.src('./js/**/*')
        .pipe(minifyInline(options))
        .pipe(gulp.dest('./app/js/'))
        .pipe(notify('success!'))
});