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
                    "doc/datepicker/<%= pkg.datepickerVersion %>/datepicker.html": 'jade/page/datepicker.jade',
                    "doc/persiandate/<%= pkg.persiandateVersion %>/persiandate.html": 'jade/page/persiandate.jade',
                    "index.html": 'jade/page/index.jade'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.registerTask('default', ['jade']);
};