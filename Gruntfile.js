'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %> */\n'
            },
            build: {
                src: 'app/scripts/**/*.js',
                dest: 'dist/scripts/main.min.js'
            }
        },

        jshint: {
            files: ['gruntfile.js', 'app/scripts/**/*.js'],
            options: {
                jshintrc: true
            }
        },

        clean: ['dist'],

        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'app', src: ['bower_components/**', 'foundation/**', 'views/**'], dest: 'dist/' },
                    { expand: true, cwd: 'app', src: ['index.html'], dest: 'dist/' }
                ],

                options: {
                    process: function (content, srcpath) {
                        if (srcpath.indexOf('app/index.html') > -1) {
                            // replace references to minified files
                            return content.replace(/<!-- start main.min.js -->((.|[\r\n])*?)<!-- end main.min.js -->/, '<script src="scripts/main.min.js"></script>');
                        } else {
                            return content;
                        }
                    }
                }
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: [
                    { expand: true, cwd: 'app/styles', src: ['*.scss'], dest: 'dist/styles/', ext: '.css' }
                ]
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Setup tasks.
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['jshint', 'clean', 'uglify', 'sass', 'copy']);
};
