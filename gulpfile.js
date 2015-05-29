'use strict';

var gulp            = require('gulp'),
    plugins         = {
        jshint      : require('gulp-jshint'),
        jade        : require('gulp-jade'),
        bump        : require('gulp-bump'),
        sass        : require('gulp-sass'),
        rename      : require('gulp-rename'),
        concat      : require('gulp-concat'),
        minifyCSS   : require('gulp-minify-css'),
        connect     : require('gulp-connect'),
        uglify      : require('gulp-uglify'),
        header      : require('gulp-header'),
        jasmine     : require('gulp-jasmine-phantom'),
        runSequence : require('run-sequence'),
        changelog   : require('conventional-changelog'),
        exec        : require('child_process').exec,
        argv        : require('yargs').argv,
        copy        : require('ncp').ncp,
        del         : require('del'),
        fs          : require('fs')
    };

require('./task/start')(gulp, plugins);
require('./task/test')(gulp, plugins);
require('./task/demo')(gulp, plugins);
require('./task/dist')(gulp, plugins);
require('./task/jade')(gulp, plugins);
require('./task/sass')(gulp, plugins);
require('./task/js')(gulp, plugins);
require('./task/copy')(gulp, plugins);
require('./task/watch')(gulp, plugins);
require('./task/banner')(gulp, plugins);
require('./task/connect')(gulp, plugins);
require('./task/release')(gulp, plugins);
