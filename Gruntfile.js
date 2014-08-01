module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: true,
          yuicompress: true,
          optimization: 2
        },
        files: {
          //"dev/css/app.css":'dev/**/css/less/*.less'
          "dev/css/app.css":"dev/css/less/app.less"
        }
      }
    },

    handlebars: {
      compile: {
        options: {
          namespace:"templates",
          processName: function(filePath) {
            //console.log(filePath);
            var fileSegs = filePath.split("/")
              file = fileSegs[4] + "/" + fileSegs[5] + "/";

            for (var i = 7; i<fileSegs.length; i++) {
              var f = fileSegs[i];
              file += ((i === fileSegs.length - 1)?f.replace(".hbs", ""):(f + "/"));
            }

            console.log(file);

            return(file);
          }
        },
        files: {
          "dev/templates/templates.js": 'dev/**/js/modules/**/templates/*.hbs',
          "dev/templates/templates.js": 'dev/**/js/modules/**/templates/**/*.hbs'
        }
      }
    },

    jshint: {
        files: 'dev/app/js/**/*.js'
    },

    watch: {
      styles: {
        files: ['dev/**/css/less/*.less', 'dev/**/js/modules/**/templates/*.hbs'],
        tasks: ['less', 'handlebars'],
        options: {
          nospawn:false
        }
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
 
  // grunt.registerTask('default', ['watch']);
  grunt.registerTask('default', ['less', 'handlebars', 'jshint']);
};