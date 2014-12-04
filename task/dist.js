'use strict';

module.exports = function(gulp, plugins) {

    // Distribution /task/
    // Distribute a plugin source data to a Dist folder.
    // $ gulp dist
    //
    gulp.task('dist', ['clean:dist', 'sass:dist', 'js:dist']);

    // Clean:dist /clean/
    // Clean task remove all files and folders from the Dist build folder.
    // $ gulp clean:dist
    gulp.task('clean:dist', function (done) {
        plugins.del([
            './dist/*',
            '!./dist/.gitignore'
        ], { dot : true }, done);
    });

};
