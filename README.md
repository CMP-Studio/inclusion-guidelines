# Carnegie Museums of Pittsburgh 

## Inclusion Guidelines

Carnegie Museums of Pittsburgh welcomes all visitors, both on-site and online. We work to assist visitors with disabilities in obtaining reasonable and appropriate accommodations, and in supporting equal access to services, programs, and activities.

This [web accessibility guide](http://studio.carnegiemuseums.org/web-accessibility) includes best practices, resources, and practical advice about how to ensure all users have equal access to information and functionality. These best practices are targeted at helping the Carnegie Museums of Pittsburgh web team meet WCAG A & AA level standards on all future website creation.

This project is a collaboration between the [Innovation Studio](http://studio.carnegiemuseums.org) at Carnegie Museums of Pittsburgh and [Bearded](http://bearded.com), and it is our goal to scale these formalized web accessibility guidelines outward to become the comprehensive inclusion handbook for our museums.

## A Middleman Project Template with Stubble Integration.

This is an opinionated [Middleman](http://middlemanapp.com) template to get the team at Bearded building static sites quickly.

It encourages third-party asset management via [Bower](http://bower.io), and includes a default `bower.json` file.

### Features
* Sass
* Haml
* Bower for package management
* Modernizr
* LiveReload
* A `Procfile`, `Rakefile`, and `config.ru` for easy deployment to [Heroku](http://heroku.com)

### Getting Started

You'll need to be running a newer version of [Ruby](https://www.ruby-lang.org/en/downloads/) with the [Bundler gem](http://bundler.io/) installed.

1. Clone the repository to your local machine.
2. In the project's root directory, run `bundle install` to install the necessary Ruby Gems.
3. Run `npm install && bower install` to install the project's NPM & Bower dependencies.
4. Run `middleman`, and navigate to `http://localhost:4567` in your browser.

### Building the Project

To build static (HTML) pages from Middleman, run `middleman build` on the command line. The generated files will be placed into a `build` directory. [See the Middleman docs](https://middlemanapp.com/basics/build_and_deploy/) for more information.

### NPM Scripts Usage
#### Modernizr
To generate Modernizr, on the command line, type `npm run modernizr`. This will run generate a build of the latest version of Modernizr based on the feature detects listed in [modernizr.config.json](https://github.com/beardedstudio/stubbleman/blob/master/modernizr.config.json), and drop that compiled (not minified) file into `source/assets/javascripts/vendor/`.

#### Grunticon
To use Grunticon, drop some SVGs into `source/assets/grunticon/dev`, and then on the command line run `npm run icons`. This will generate all of the necessary Grunticon-related files for you and drop them into `source/assets/grunticon/production`

#### Rimraf
Rimraf is set up as part of both of the Modernizr & Grunticon tasks to clean any previously generated files and prepare the directories for the newly generated files.
