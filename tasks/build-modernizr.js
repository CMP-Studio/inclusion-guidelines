var modernizr = require("modernizr"),
    fs = require("fs-extra"),
    config = JSON.parse(fs.readFileSync('modernizr.config.json', 'utf8')),
    outputDir = 'source/assets/javascripts/vendor/modernizr.js';

modernizr.build(config, function(result) {
    fs.outputFileSync(outputDir, result);
    console.log("Modernizr built to: ", outputDir);
});
