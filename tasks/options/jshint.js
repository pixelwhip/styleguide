// Validates files with JsHint.
module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },
  all: [
    'Gruntfile.js',
    '<%= yeoman.app %>/scripts/{,*/}*.js',
    '!<%= yeoman.app %>/scripts/vendor/*',
    'test/spec/{,*/}*.js'
  ]
};
