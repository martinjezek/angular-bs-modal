'use strict';

module.exports = function(gulp, plugins) {

    // JS /compiler/
    // Beautify and Minify JS to the Demo folder.
    // $ gulp js:demo
    //
    gulp.task('js:demo', ['clean:demo-js'], function() {
        return gulp.src([
            './demo/src/js/**/*.js'
        ])
        .pipe(plugins.uglify({
            mangle: false,
            output: {
                beautify: false,
                comments: false
            }
        }))
        .pipe(gulp.dest('./demo/build/js/'))
        .pipe(plugins.connect.reload());
    });

    // Clean:demo-js /clean/
    // Clean task remove all JS files from the Demo build folder.
    // $ gulp clean:demo-js
    gulp.task('clean:demo-js', function (done) {
        plugins.del([
            './demo/build/js/*'
        ], done);
    });

    // JS /compiler/
    // Beautify and Minify JS to the Dist folder.
    // $ gulp js:dist
    //
    gulp.task('js:dist', ['clean:dist-js'], function() {
        var pkg = require('./../package.json');
        return gulp.src([
            './src/js/**/*.js'
        ])
        .pipe(plugins.uglify({
            mangle: false,
            output: {
                beautify: true,
                comments: /^!|@preserve|@license|@cc_on/i
            }
        }))
        .pipe(plugins.header(plugins.banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(plugins.uglify({
            mangle: false,
            output: {
                beautify: false,
                comments: false
            }
        }))
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(plugins.header(plugins.banner, { pkg : pkg } ))
        .pipe(gulp.dest('./dist/js/'))
        .pipe(plugins.connect.reload());
    });

    // Clean:dist-js /clean/
    // Clean task remove all JS files from the Dist folder.
    // $ gulp clean:dist-js
    gulp.task('clean:dist-js', function (done) {
        plugins.del([
            './dist/js/*'
        ], done);
    });

};
