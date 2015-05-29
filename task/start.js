'use strict';

module.exports = function(gulp, plugins) {

    // Start /task/
    // Gulp start sets to run a Gulp webserver with Gulp watches.
    // $ gulp
    //
    gulp.task('start', function(done) {
        plugins.runSequence('dist', 'demo', 'connect', 'watch', done);
    });

};
