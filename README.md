# Stubbleman
## A Middleman Project Template with Stubble Integration.

This is an opinionated [Middleman](http://middlemanapp.com) template to get the team at [Bearded](http://bearded.com) building static sites quickly.

It encourages third-party asset management via [Bower](http://bower.io), and includes a default `bower.json` file.

It also enables Bearded's [Middleman Patterns](https://github.com/beardedstudio/middleman-patterns) by default.

### Features
* Sass
* Haml
* Bower for package management
* Modernizr
* Middleman Patterns
* LiveReload
* A `Procfile`, `Rakefile`, and `config.ru` for easy deployment to [Heroku](http://heroku.com)

### Installation
1. Clone (or download) this repository to: `~/.middleman/stubbleman`

	`git clone git@github.com:beardedstudio/stubbleman ~/.middleman/stubbleman`
2. Initialize a new Middleman project with the Stubbleman project template:

	`middleman init my_project --template=stubbleman`
3. You'll need to have [NPM](https://www.npmjs.com/) & [Bower](http://bower.io) installed to grab the third party asset packages. Then, run `npm install` and then `bower install`.

### Updating
Once Stubbleman is in your `~/.middleman` directory, you can just pull the repository periodically to stay up-to-date!
```
cd ~/.middleman/stubbleman
git pull
```

### NPM Scripts Usage
#### Modernizr
To generate Modernizr, on the command line, type `npm run modernizr`. This will run generate a build of the latest version of Modernizr based on the feature detects listed in [modernizr.config.json](https://github.com/beardedstudio/stubbleman/blob/master/modernizr.config.json), and drop that compiled (not minified) file into `source/assets/javascripts/vendor/`.

#### Grunticon
To use Grunticon, drop some SVGs into `source/assets/grunticon/dev`, and then on the command line run `npm run icons`. This will generate all of the necessary Grunticon-related files for you and drop them into `source/assets/grunticon/production` 

#### Rimraf
Rimraf is set up as part of both of the Modernizr & Grunticon tasks to clean any previously generated files and prepare the directories for the newly generated files.
