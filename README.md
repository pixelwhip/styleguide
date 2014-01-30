# Styleguide

> Styleguide is a static site generator for creating... wait for it... Styleguides!

## Getting started

### Dependencies

Styleguide is built with [Assemble](http://assemble.io), [Grunt](http://gruntjs.com/), [Compass](http://copass-style.org) and uses the [Handlebars](http://handlebarsjs.com/) templating language.

In order to use it, you will need to have Node.js installed.  If you don't have it yet, I recommend downloading the latest binary from [nodejs.org](http://nodejs.org/).  If you install node using homebrew, you'll probably run into issues. I did.

Once node is installed, you'll need to install the Grunt command line interface by typing the following.

```
$ npm install -g grunt-cli
```

The ```-g``` flag installs the grunt command line interface globally and allows you to run grunt from the command line.  For the most other packages, you'll want to leave out the ```-g``` and install them locally (to your current project) on a per project basis.

### Before first run
You need to ```cd``` into your project directory and run the following commands.
NOTE: You only need to do this for the first time compiling.

```
$ npm install
```

And then

```
$ bundle install
```

Bundler is a package manager for ruby gems.  It will make sure your styles compile with the correct versions of ruby gems.

### Firing up styleguide

#### Download or checkout this repo

Do it.

#### Run the grunt server

Type the following

```
$ grunt server
```

This does a few things.  First it creates a fresh styleguide.  It then starts a local webserver for your styleguiide and opens up a browser window so you can view it.  Grunt will watch your project for any changes and depending on which files change, run the appropriate grunt tasks and refresh your browser.

## Styleguide Structure

There are a 3 main directories you need to worry about.

```
/core
/project
/temp
```

### /core

The core directory has contains all the files for the default styleguide that you get out of the box. You typically shouldn't need to directly edit any files in this directory.

### /project

The project directory mimics the structure of the core directory.  Any files you create in the project directory will override or be added to the default style guide.  The best way to learn is to copy files from the core directory and start editing away.

#### /project/content

This is where you put any styleguide components as handlebars templates.  Each handlebars template will be converted into an html page of the same name.

#### /project/data

This ss where you can store generic json data to be used in the syleguide such as global site variables like the site title and client name.  See [Assemble Data](http://assemble.io/docs/Data.html)

#### /project/templates/pages

This is where you can store generic site pages such as index.hbs, which would get compiled to index.html.  See [Assemble Pages](http://assemble.io/docs/Pages.html)

#### /project/templates/layouts

Layouts are reusable templates that you can run other templates through. See [Assemble Layouts](http://assemble.io/docs/Layouts.html)

#### /project/templates/partials

Partials are reusable chunks of content that can be included in other pages. See [Assemble Partials](http://assemble.io/docs/Partials.html)

#### /project/templates/scripts

Any .js files added to this folder will automatically be included in the footer of your styleguide pages.

#### /project/templates/styles

Any .css and .scss files added to this folder will automatically be compiled and included in the head of your styleguide pages.

### /dist

This is the directory where the compiled styleguide gets created and where your grunt server points to.  Never edit this directly as it gets completely wiped each time the styleguide gets recreated.

## Working with the Styleguide

### Adding components

Components are added as handlebars templates in /project/content.  It's easiest to copy .hbs files from /core/content into /project/content as a starting point for editing.

### Referencing stylesheets and scripts

Any .css or .scss in project/scripts files are automatically injected into the head of your stylesheets, as well as any .js files added to project/scripts.  However, any external files can be manually added to the site via /project/templates/layout/default.hbs file.
