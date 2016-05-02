var icons = require("grunticon-lib"),
    globby = require("globby"),
    iconSrc = 'source/assets/grunticon/dev/*',
    iconDist = 'source/assets/grunticon/production';

var files = globby.sync(iconSrc);
var options = {
  enhanceSVG: true
};

var icon = new icons(files, iconDist, options);
icon.process();
