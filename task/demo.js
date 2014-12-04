'use strict';

module.exports = function(gulp, plugins) {

    // Demo /task/
    // Compile a source demo data to a Demo build folder.
    // $ gulp demo
    //
    gulp.task('demo', ['clean:demo', 'jade:demo', 'sass:demo', 'js:demo']);

    // Clean:demo /clean/
    // Clean task remove all files and folders from the Demo build folder.
    // $ gulp clean:demo
    gulp.task('clean:demo', function (done) {
        plugins.del([
            './demo/build/*',
            '!./demo/build/.gitignore',
            '!./demo/build/bower_components'
        ], { dot : true }, done);
    });

};
