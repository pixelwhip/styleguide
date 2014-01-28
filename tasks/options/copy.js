module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= yeoman.core %>',
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
    cwd: '<%= yeoman.tmp %>/assets/styles/',
    dest: '<%= yeoman.dist %>/assets/styles/',
    src: '{,*/}*.css'
  },
  styles_core: {
    expand: true,
    dot: true,
    cwd: '<%= yeoman.core %>/styles/css',
    dest: '<%= yeoman.tmp %>/assets/styles/',
    src: '{,*/}*.css'
  },
  styles_project: {
    expand: true,
    dot: true,
    cwd: '<%= yeoman.project %>/styles/css',
    dest: '<%= yeoman.tmp %>/assets/styles/',
    src: '{,*/}*.css'
  },
  scripts: {
    expand: true,
    dot: true,
    cwd: '<%= yeoman.tmp %>/assets/scripts',
    dest: '<%= yeoman.dist %>/assets/scripts/',
    src: '**/*.js'
  },
  scripts_core: {
    expand: true,
    dot: true,
    cwd: '<%= yeoman.core %>/scripts',
    dest: '<%= yeoman.dist %>/assets/scripts/',
    src: '**/*.js'
  },
  scripts_project: {
    expand: true,
    dot: true,
    cwd: '<%= yeoman.project %>/scripts',
    dest: '<%= yeoman.dist %>/assets/scripts/',
    src: '**/*.js'
  },
  core: {
    expand: true,
    dot: true,
    cwd: '<%= yeoman.core %>',
    dest: '<%= yeoman.tmp %>',
    src: ['**/*', '!styles/**/*'] // Exclude styles, they are handled elsewhere.
  },
  project: {
    expand: true,
    dot: true,
    cwd: 'project',
    dest: '<%= yeoman.tmp %>',
    src: ['**/*', '!styles/**/*'] // Exclude styles, they are handled elsewhere.
  }
};
