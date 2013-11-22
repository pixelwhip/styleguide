module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= yeoman.app %>',
      dest: '<%= yeoman.dist %>',
      src: [
        '*.{ico,png,txt}',
        '.htaccess',
        'images/{,*/}*.{webp,gif}',
        'styles/fonts/{,*/}*.*'
      ]
    }]
  },
  styles: {
    expand: true,
    dot: true,
    cwd: '<%= yeoman.app %>/styles',
    dest: '<%= yeoman.dist %>/assets/styles/',
    src: '{,*/}*.css'
  },
  scripts: {
    expand: true,
    dot: true,
    cwd: '<%= yeoman.app %>/scripts',
    dest: '<%= yeoman.dist %>/assets/scripts/',
    src: '**/*.js'
  },
  bower: {
    expand: true,
    dot: true,
    cwd: '<%= yeoman.app %>/bower_components',
    dest: '<%= yeoman.dist %>/bower_components/',
    src: '**/*.{js,css}'
  }
};
