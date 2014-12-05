'use strict';

module.exports = function(gulp, plugins) {

    // Copy:demo-data /task/
    // copy the data folder with all files to the distribution
    // $ gulp copy:demo-data
    //
    gulp.task('copy:demo-data', ['clean:demo-data'], function(done) {
        plugins.copy('./demo/src/data', './demo/build/data', function (err) {
            if (err) return console.error(err);
            done();
        });
    });

    // Clean:demo-data /clean/
    // Clean task remove all DATA files from the Demo build folder.
    // $ gulp clean:demo-data
    gulp.task('clean:demo-data', function (done) {
        plugins.del([
            './demo/build/data'
        ], done);
    });

};
