module.exports = {
  pages: {
    options: {
      flatten: true,
      assets: '<%= yeoman.dist %>/assets',
      layoutdir: '<%= yeoman.app %>/templates/layouts/',
      layout: 'default.hbs',
      helpers: ['<%= yeoman.app %>/helpers/**/*.js' ],
      data: '<%= yeoman.app %>/data/*.{json,yml}',
      partials: '<%= yeoman.app %>/templates/partials/*.hbs'
    },
    files: [
      {
        '<%= yeoman.dist %>/': ['<%= yeoman.app %>/templates/pages/*.hbs']
      },
      {
        layout: 'item.hbs',
        dest: '<%= yeoman.dist %>/',
        src: '<%= yeoman.app %>/content/*.hbs'
      },
    ]
  }
};
