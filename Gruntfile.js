module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('./package.json'),

    /* TASK: GRUNTICON
      Take the following SVG and PNG files from a source destination, and output them as data URIs in CSS files.
      Additionally, if SVGs are provided, PNG fallbacks will be generated from those files.
    */

    grunticon: {
      icons: {
        files: [
          {
            expand: true,
            cwd: 'source/assets/grunticon',
            src: ['*.svg', '*.png'],
            dest: 'source/assets/grunticon/production'
          }
        ],
        options: {
          // https://github.com/filamentgroup/grunticon#version-20-is-out---heres-whats-new
          enhanceSVG: true
        }
      }
    }
  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['grunticon:icons']);
};
