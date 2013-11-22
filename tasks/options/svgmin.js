// Creates a custom modernizr build based on what modernizr features are in use.
module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= yeoman.app %>/images',
      src: '{,*/}*.svg',
      dest: '<%= yeoman.dist %>/images'
    }]
  }
};
