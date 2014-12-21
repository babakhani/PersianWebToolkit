module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: [
                    {
                        'src/css/pwt-datepicker.css': 'src/sass/pwt-datepicker.scss'
                    }
                ]
            }
        },
        jade: {
            compile: {
                files: {
                    "doc/datepicker/<%= pkg.datepickerVersion %>/index.html": 'jade/page/datepicker-<%= pkg.datepickerVersion %>.jade',
                    "doc/datepicker/<%= pkg.datepickerVersion %>/demo.html": 'jade/page/datepicker-demo-<%= pkg.datepickerVersion %>.jade',

                    "doc/persiandate/<%= pkg.persiandateVersion %>/index.html": 'jade/page/persiandate-<%= pkg.persiandateVersion %>.jade',

                    "index.html": 'jade/page/index.jade'
                }

            }
        },
        watch: {
            scripts: {
                files: ['jade/page/*', 'jade/includes/*'],
                tasks: ['jade']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['jade', 'watch']);
};