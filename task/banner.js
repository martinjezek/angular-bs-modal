'use strict';

module.exports = function(gulp, plugins) {

    plugins.banner = ['/*!',
        ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)',
        ' * <%= pkg.author.name %> <<%= pkg.author.email %>>',
        ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)',
        ' */',
    ''].join('\n');

};
