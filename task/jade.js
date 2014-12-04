'use strict';

module.exports = function(gulp, plugins) {

    // Jade /compiler/
    // Compile all source Jade templates files as HTML files to the Demo build folder.
    // $ gulp jade:demo
    //
    gulp.task('jade:demo', ['clean:demo-html'], function() {
        return gulp.src([
            './demo/src/jade/**/*.jade',
            '!./demo/src/jade/partials/*.jade'
        ])
        .pipe(plugins.jade())
        .pipe(gulp.dest('./demo/build/'))
        .pipe(plugins.connect.reload());
    });

    // Clean:demo-html /clean/
    // Clean task remove all HTML files from the Demo build folder.
    // $ gulp clean:demo-html
    gulp.task('clean:demo-html', function (done) {
        plugins.del([
            './demo/build/**/*.html'
        ], done);
    });

};
