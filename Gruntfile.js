module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    serve: {
      options: {
          port: 9000
      }
  }
  });

  // Load the plugin that provides the "uglify" task.
grunt.loadNpmTasks('grunt-serve');

  // Default task(s).
  grunt.registerTask('default', ['serve']);

};
