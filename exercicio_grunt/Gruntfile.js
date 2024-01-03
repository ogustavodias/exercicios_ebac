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
          "./prebuild/styles/main.css": "./src/styles/main.less",
        },
      },
      build: {
        options: {
          paths: ["./src/styles"],
        },
        files: {
          "./dist/styles/main.css": "./prebuild/styles/main.css",
        },
      },
    },

    // WATCH CONFIG
    watch: {
      styles: {
        files: ["./src/**/*.less"],
        tasks: ["less:development"],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["less:build"]);
};
