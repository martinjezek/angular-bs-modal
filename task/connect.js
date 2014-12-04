'use strict';

module.exports = function(gulp, plugins) {

    // Connect /server/
    // Plugin to run a webserver (with LiveReload).
    // $ gulp connect
    //
    gulp.task('connect', function() {
        plugins.connect.server({
            root: ['./demo/build', './dist'],
            port: 9001,
            livereload: true
        });
    });

};
