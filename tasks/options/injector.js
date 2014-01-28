// Adds CSS && JS.
module.exports = {
  options: {
    ignorePath: '.tmp'
  },
  local_dependencies: {
    files: {
      '<%= yeoman.tmp %>/templates/layouts/default.hbs': [
        '<%= yeoman.tmp %>/assets/scripts/**/*.js',
        '<%= yeoman.tmp %>/assets/styles/**/*.css']
    }
  }
};
