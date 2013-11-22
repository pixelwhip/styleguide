// Adds browser prefixes to CSS based on caniuse.com.
module.exports = {
  options: {
    browsers: ['last 1 version']
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= yeoman.tmp %>/styles/',
      src: '{,*/}*.css',
      dest: '<%= yeoman.dist %>/assets/styles/'
    }]
  }
};
