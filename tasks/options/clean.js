// Cleans out files and directories.
module.exports = {
  dist: {
    files: [{
      dot: true,
      src: [
        '<%= yeoman.tmp %>',
        '<%= yeoman.dist %>/*',
        '!<%= yeoman.dist %>/.git*'
      ]
    }]
  },
  server: '<%= yeoman.tmp %>'
};
