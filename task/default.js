'use strict';

module.exports = function(gulp, plugins) {

    // Defaut /task/
    // Gulp default is set to run a Gulp webserver with Gulp watches.
    // $ gulp
    //
    gulp.task('default', function(done) {
        plugins.runSequence('dist', 'demo', 'connect', 'watch', done);
    });

};
