// Generated on 2013-11-14 using generator-webapp 0.4.1
'use strict';
var LIVERELOAD_PORT = 35728;
var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
var mountFolder = function (connect, dir) {
  return connect.static(require('path').resolve(dir));
};

module.exports = function (grunt) {
  // show elapsed time at the end
  require('time-grunt')(grunt);
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // Include project specific configuration. See project.js
  var project = require('./project');
  // Allow configuration to be distributed across files.
  function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
      key = option.replace(/\.js$/,'');
      object[key] = require(path + option);
    });

    return object;
  }

  // configurable paths
  var yeomanConfig = {
    core: 'core',
    dist: 'dist',
    project: 'project',
    tmp: '.tmp'
  };

  var config = {
    yeoman: yeomanConfig,
    pkg: grunt.file.readJSON('package.json'),
    env: process.env,
    watch: {
      compass_core: {
        files: ['<%= yeoman.core %>/styles/sass/{,*/}*.{scss,sass}'],
        tasks: ['compass:core']
      },
      compass_project: {
        files: ['<%= yeoman.project %>/styles/sass/{,*/}*.{scss,sass}'],
        tasks: ['compass:project']
      },
      styles: {
        files: ['<%= yeoman.tmp %>/assets/styles/**/*.css'],
        tasks: ['autoprefixer']
      },
      styles_core: {
        files: ['<%= yeoman.core %>/styles/{,*/}*.css'],
        tasks: ['copy:styles_core']
      },
      styles_project: {
        files: ['<%= yeoman.project %>/styles/**/*.css'],
        tasks: ['copy:styles_project']
      },
      scripts: {
        files: ['<%= yeoman.tmp %>/scripts/{,*/}*.js'],
        tasks: ['copy:scripts']
      },
      scripts_core: {
        files: ['<%= yeoman.core %>/scripts/{,*/}*.js'],
        tasks: ['copy:scripts_core']
      },
      scripts_project: {
        files: ['<%= yeoman.project %>/scripts/{,*/}*.js'],
        tasks: ['copy:scripts_project']
      },
      copy_core: {
        files: [
          '<%= yeoman.core %>/**/*.{hbs,json,yml,md}',
          '<%= yeoman.core %>/helpers/**/*.js'
        ],
        tasks: ['copy:core', 'copy:project']
      },
      copy_project: {
        files: [
          '<%= yeoman.project %>/**/*.{hbs,json,yml,md}',
          '<%= yeoman.project %>/helpers/**/*.js'
        ],
        tasks: ['copy:project']
      },
      assemble: {
        files: [
          '<%= yeoman.tmp %>/**/*.{hbs,json,yml,md}',
          '<%= yeoman.tmp %>/helpers/**/*.js'
        ],
        tasks: ['injector', 'assemble']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= yeoman.dist %>/*.html',
          '<%= yeoman.dist %>/assets/styles/{,*/}*.css',
          '<%= yeoman.dist %>/assets/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9002,
        // change this to '0.0.0.0' to access the server from outside
        hostname: '0.0.0.0'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              lrSnippet,
              mountFolder(connect, 'dist'),
              mountFolder(connect, yeomanConfig.core)
            ];
          }
        }
      },
      dist: {
        options: {
          middleware: function (connect) {
            return [
              mountFolder(connect, yeomanConfig.dist)
            ];
          }
        }
      }
    },
    concurrent: {
      core: [
        'compass:core',
        'copy:styles_core',
        'copy:scripts_core',
        'copy:core'
      ],
      project: [
        'compass:project',
        'copy:styles_project',
        'copy:scripts_project',
        'copy:project'
      ],
      server: [
        'autoprefixer',
        'injector',
        'copy:scripts'
      ],
      dist: [
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    }
  };

  // Merge task configuration from ./tasks/options
  grunt.util._.extend(config, loadConfig('./tasks/options/'));

  grunt.loadTasks('tasks'); // Loads tasks in `tasks/` folder
  grunt.initConfig(config);

  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:core',
      'concurrent:project',
      'concurrent:server',
      'connect:livereload',
      'assemble',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'concurrent:core',
    'concurrent:project',
    'concurrent:server',
    'assemble',
    'useminPrepare',
    'concurrent:dist',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('project_styles', [
    'copy:project_styles',
    'compass:project',
  ]);

  grunt.registerTask('core_styles', [
    'copy:core_styles',
    'compass:core',
  ]);

  grunt.registerTask('sg', [
    'copy:core',
    'copy:project',
    'injector',
    'assemble',
  ]);

  grunt.registerTask('default', [
    'jshint',
    'build'
  ]);
};
