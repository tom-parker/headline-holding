/* global module:false */
module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib');
    grunt.loadNpmTasks('grunt-spritesmith');
    // ==========================================================================
    // TASKS
    // ==========================================================================

    grunt.initConfig({


        // tasks to be executed and files
        // to be watched for changes
        watch: {
            scripts: {
                files: ['static/css/less/styles.less'],
                tasks: ['less']
            }
        },

        less: {
            compile: {
                options: {
                    paths: ["static/css/less"]
                },
                files: {
                    "static/css/styles.css": "static/css/less/styles.less",
                }
            }
        },

        sprite: {
            all: {
                src: ['static/images/sprites/*.png'],
                destImg: 'static/images/sprite.png',
                destCSS: 'static/css/less/sprite.less',
                imgPath: '../images/sprite.png',
                algorithm: 'top-down',
                engine: 'canvas'
            }
        }

    });

    // launch node server to view the projct
    grunt.registerTask('default', ['watch']);

};
