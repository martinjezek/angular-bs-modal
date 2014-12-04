'use strict';

module.exports = function(gulp, plugins) {

    // Sass /compiler/
    // Compile and minify Sass styles to the Demo folder.
    // $ gulp sass:demo
    //
    gulp.task('sass:demo', ['clean:demo-css'], function() {
        return gulp.src([
            './demo/src/sass/**/*.scss',
            './demo/src/sass/**/*.sass',
            '!./demo/src/saas/partials/*.*'
        ])
        .pipe(plugins.sass())
        .pipe(plugins.minifyCSS({ noAdvanced: true }))
        .pipe(gulp.dest('./demo/build/css/'))
        .pipe(plugins.connect.reload());
    });

    // Clean:demo-css /clean/
    // Clean task remove all CSS files from the Demo build folder.
    // $ gulp clean:demo-css
    gulp.task('clean:demo-css', function (done) {
        plugins.del([
            './demo/build/css/*'
        ], done);
    });

    // Sass /compiler/
    // Compile, concate and minify Sass styles to the Dist folder.
    // $ gulp sass:dist
    //
    gulp.task('sass:dist', ['clean:dist-css'], function() {
        var pkg = require('./../package.json');
        return gulp.src([
            './src/sass/**/*.scss',
            './src/sass/**/*.sass',
            '!./src/saas/partials/*.*'
        ])
        .pipe(plugins.sass())
        .pipe(plugins.concat(pkg.name + '.css'))
        .pipe(plugins.header(plugins.banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(plugins.minifyCSS({ noAdvanced: true, keepSpecialComments: 0 }))
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(plugins.header(plugins.banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(plugins.connect.reload());
    });

    // Clean:dist-css /clean/
    // Clean task remove all CSS files from the Dist folder.
    // $ gulp clean:dist-css
    gulp.task('clean:dist-css', function (done) {
        plugins.del([
            './dist/css/*'
        ], done);
    });

};
