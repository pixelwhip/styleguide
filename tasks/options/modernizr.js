// Creates a custom modernizr build based on what modernizr features are in use.
module.exports = {
  devFile: '<%= yeoman.app %>/bower_components/modernizr/modernizr.js',
  outputFile: '<%= yeoman.dist %>/bower_components/modernizr/modernizr.js',
  files: [
    '<%= yeoman.dist %>/scripts/{,*/}*.js',
    '<%= yeoman.dist %>/styles/{,*/}*.css',
    '!<%= yeoman.dist %>/scripts/vendor/*'
  ],
  uglify: true
};
