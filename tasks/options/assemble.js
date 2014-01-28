module.exports = {
  pages: {
    options: {
      flatten: true,
      assets: '<%= yeoman.dist %>/assets',
      layoutdir: '<%= yeoman.tmp %>/templates/layouts/',
      layout: 'default.hbs',
      helpers: ['<%= yeoman.tmp %>/helpers/**/*.js' ],
      data: '<%= yeoman.tmp %>/data/*.{json,yml}',
      partials: '<%= yeoman.tmp %>/templates/partials/*.hbs'
    },
    files: [
      {
        '<%= yeoman.dist %>/': ['<%= yeoman.tmp %>/templates/pages/*.hbs']
      },
      {
        layout: 'item.hbs',
        dest: '<%= yeoman.dist %>/',
        src: '<%= yeoman.tmp %>/content/*.hbs'
      },
    ]
  }
};
