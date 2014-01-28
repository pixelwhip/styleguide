module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= yeoman.core %>/images',
      src: '{,*/}*.{png,jpg,jpeg}',
      dest: '<%= yeoman.dist %>/images'
    }]
  }
};
