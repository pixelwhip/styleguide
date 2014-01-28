// Validates files with JsHint.
module.exports = {
  options: {
    jshintrc: '.jshintrc'
  },
  all: [
    'Gruntfile.js',
    '<%= yeoman.core %>/scripts/{,*/}*.js',
    '!<%= yeoman.core %>/scripts/vendor/*',
    'test/spec/{,*/}*.js'
  ]
};
