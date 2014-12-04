'use strict';

module.exports = function(gulp, plugins) {

    // Watch /watch/
    // Plugin creates watcher that will spy on files for changes and call certain tasks when it happens.
    // $ gulp watch
    //
    gulp.task('watch', function () {
        // demo
        gulp.watch(['./demo/src/jade/**/*.jade'], ['jade:demo']);
        gulp.watch(['./demo/src/sass/**/*.scss', './demo/src/sass/**/*.sass'], ['sass:demo']);
        gulp.watch(['./demo/src/js/**/*.js'], ['js:demo']);
        // dist
        gulp.watch(['./src/sass/**/*.scss', './src/sass/**/*.sass'], ['sass:dist']);
        gulp.watch(['./src/js/**/*.js'], ['js:dist']);
    });

};
