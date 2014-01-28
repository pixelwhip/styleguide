// Compiles Sass files with Compass.
module.exports = {
  options: {
    sassDir: '<%= yeoman.core %>/styles',
    cssDir: '<%= yeoman.tmp %>/src/styles',
    //generatedImagesDir: '<%= yeoman.tmp %>/images/generated',
    imagesDir: '<%= yeoman.core %>/images',
    javascriptsDir: '<%= yeoman.core %>/scripts',
    fontsDir: '<%= yeoman.core %>/styles/fonts',
    //httpImagesPath: '/images',
    //httpGeneratedImagesPath: '/images/generated',
    //httpFontsPath: '/styles/fonts',
    relativeAssets: false,
    bundleExec: true
  },
  dist: {
    options: {
      generatedImagesDir: '<%= yeoman.dist %>/images/generated'
    }
  },
  core: {
    options: {
      sassDir: '<%= yeoman.core %>/styles/sass',
      cssDir: '<%= yeoman.tmp %>/assets/styles',
      generatedImagesDir: '<%= yeoman.dist %>/assets/images/generated'
    }
  },
  project: {
    options: {
      sassDir: '<%= yeoman.project %>/styles/sass',
      cssDir: '<%= yeoman.tmp %>/assets/styles',
      imagesDir: '<%= yeoman.project %>/images',
      config: '<%= yeoman.project %>/config.rb'
      //generatedImagesDir: '<%= yeoman.dist %>/assets/images/generated'
    }
  },
  server: {
    options: {
      debugInfo: true
    }
  }
};
