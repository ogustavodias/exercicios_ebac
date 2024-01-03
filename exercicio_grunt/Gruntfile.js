module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-text-replace");

  grunt.initConfig({
    // LESS CONFIG
    less: {
      development: {
        options: {
          paths: ["./src/styles"],
        },
        files: {
          "./build/styles/main.css": "./src/styles/main.less",
        },
      },
    },

    // WATCH CONFIG
    watch: {
      styles: {
        files: ["./src/**/*.less"],
        tasks: ["less"],
        options: {
          span: false,
        },
      },
    },
  });

  grunt.registerTask('default', ['watch']);
};
