// Injects bower components into the default template.
module.exports = {
  app: {
    html: '<%= yeoman.app %>/templates/layouts/default.hbs',
    ignorePath: '<%= yeoman.app %>/',
    cssPattern: '<link href="/assets/{{filePath}}" rel="stylesheet">',
    jsPattern: '<script type="text/javascript" src="/assets/{{filePath}}"></script>'
  }
};
