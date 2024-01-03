module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-text-replace");

  grunt.initConfig({
    // LESS CONFIG -- PLUGIN
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
          paths: ["./prebuild/styles/"],
        },
        files: {
          "./dist/styles/main.css": "./prebuild/styles/main.css",
        },
      },
    },

    // UGLIFY CONFIG -- PLUGIN
    uglify: {
      options: {
        mangle: true, // Minificar nomes de variáveis
        compress: true, // Habilitar compressão
      },
      my_target: {
        files: {
          "./dist/scripts/main.min.js": ["./src/scripts/main.js"],
        },
      },
    },

    // HTMLMIN CONFIG -- PLUGIN
    htmlmin: {
      options: {
        removeComments: true, // Remover comentários HTML
        collapseWhitespace: true, // Colapsar espaços em branco
      },
      my_target: {
        files: {
          "./prebuild/index.html": "./src/index.html",
        },
      },
    },

    // REPLACE CONFIG -- PLUGIN

    replace: {
      css: {
        src: ["./prebuild/index.html"],
        dest: "./dist/index.html",
        replacements: [
          {
            from: "../prebuild/styles/main.css",
            to: "./styles/main.css",
          },
          {
            from: "./scripts/main.js",
            to: "./scripts/main.min.js",
          }
        ],
      },
    },

    // WATCH CONFIG -- PLUGIN
    watch: {
      styles: {
        files: ["./src/**/*.less"],
        tasks: ["less:development"],
        options: {
          spawn: false,
        },
      },
      html: {
        files: ["./src/index.html"],
        tasks: ["htmlmin"],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("build", ["less:build", "uglify", "replace"]);
};
