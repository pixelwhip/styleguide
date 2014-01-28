var project = {
  options: {
    // flatten: true,
    // assets: '<%= yeoman.dist %>/assets',
    // layoutdir: '<%= yeoman.app %>/templates/layouts/',
    // layout: 'default.hbs',
    // helpers: ['<%= yeoman.app %>/helpers/**/*.js' ],
    // data: '<%= yeoman.app %>/data/*.{json,yml}',
    // partials: '<%= yeoman.app %>/templates/partials/*.hbs'
  },
  files: [
    {
      layout: 'item.hbs',
      dest: '<%= yeoman.dist %>/',
      src: 'project/content/*.hbs'
    },
  ],
  css: [
    {
      // Assume an absolute path if dest is not defined.
      // dest: '<%= yeoman.dist %>/',
      src: 'http://wri-embarq.loc/sites/all/themes/wri/css/screen.css'
    },
  ],
  js: [
    {
      // Assume an absolute path if dest is not defined.
      // dest: '<%= yeoman.dist %>/',
      src: 'project/content/*.js'
    },
  ],
  assets: [
    {
      // Assume an absolute path if dest is not defined.
      // dest: '<%= yeoman.dist %>/',
      src: 'project/content/*.{png,jpg,svg}'
    },
  ],
};

module.exports = project;

// When working locally, the styleguide should be able to reference
// another project, either through relative or absolute paths.

// When deployed, all assets should be copied into the styleguide or referenced
// absolutely.

// Handling CSS referenced image paths.
//  -- Absolute?
//  -- Relative?

// Core styleguide should provide
//  -- the engine to create styleguides
//  -- partials
//  -- layouts
//  -- pages
//  -- minimal css
//  -- minimal js
//  -- minimal elements and components
//  -- default tags
//  -- default menu structure

// Project specific styleguides
//  -- add, override and disable components
//  -- add, override and disable stylesheets
//  -- add, override and disable scripts
//  -- add, override and disable partials
//  -- add, override and disable layouts
//  -- add, override and disable tags
//  -- override menu structure

// When assembled, core and project files get aggregated into a temp
// directory. Project files should overwrite core files of the same name.
// Disabling could possibly be handled by a list of file basenames.

// Need to add project to the watch directory.
