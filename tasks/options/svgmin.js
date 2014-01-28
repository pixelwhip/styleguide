// Minifies SVG.
module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= yeoman.core %>/images',
      src: '{,*/}*.svg',
      dest: '<%= yeoman.dist %>/images'
    }]
  }
};
