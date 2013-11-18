# Styleguide

> Styleguide is a static site generator for creating... wait for it... Styleguides!



## Getting started

### Dependencies

Styleguide is built with [Assemble](http://assemble.io), [Grunt](http://gruntjs.com/) and uses the [Handlebars](http://handlebarsjs.com/) templating language.

In order to use it, you will need to have Node.js installed.  If you don't have it yet, I recommend downloading the latest binary from [nodejs.org](http://nodejs.org/).  If you install node using homebrew, you'll probably run into issues. I did.

Once node is installed, you'll need to install the Grunt command line interface by typing the following.

```
$ npm install -g grunt-cli
```

The ```-g``` flag installs the grunt command line interface node package globally.  For the most other packages, you'll want to leave out the ```-g``` and install them locally (to your current project) on a per project basis.

### Firing up styleguide

#### Download or checkout this repo

Do it.

#### Run the grunt server

Type the following

```
$ grunt server
```

This does a few things.  First it creates a fresh styleguide.  It then starts a local webserver for your styleguiide and opens up a browser window so you can view it.  Grunt will watch your project's ```/src``` directory for any changes to your content or templates.  When it detects a change, it rebuilds the site and refreshes the browser.  This also has livereload built-in so your css gets refreshed as well.

## Editing the styleguide

All source files are located in the ```/src``` directory.  The actual content and styleguide elements are located in ```/src/content```.
