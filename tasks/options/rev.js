// Prefix filenames with a cache-busting hash.
// Used in conjunction with usemin.
module.exports = {
  dist: {
    files: {
      src: [
        '<%= yeoman.dist %>/scripts/{,*/}*.js',
        '<%= yeoman.dist %>/styles/{,*/}*.css',
        '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
        '<%= yeoman.dist %>/styles/fonts/{,*/}*.*'
      ]
    }
  }
};
