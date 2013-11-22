// Compiles Sass files with Compass.
module.exports = {
  options: {
    sassDir: '<%= yeoman.app %>/styles',
    cssDir: '<%= yeoman.tmp %>/styles',
    generatedImagesDir: '<%= yeoman.tmp %>/images/generated',
    imagesDir: '<%= yeoman.app %>/images',
    javascriptsDir: '<%= yeoman.app %>/scripts',
    fontsDir: '<%= yeoman.app %>/styles/fonts',
    importPath: '<%= yeoman.app %>/bower_components',
    httpImagesPath: '/images',
    httpGeneratedImagesPath: '/images/generated',
    httpFontsPath: '/styles/fonts',
    relativeAssets: false,
    bundleExec: true
  },
  dist: {
    options: {
      generatedImagesDir: '<%= yeoman.dist %>/images/generated'
    }
  },
  server: {
    options: {
      debugInfo: true
    }
  }
};
