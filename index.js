/* eslint-env node */
'use strict';

const path = require('path');
const resolve = require('resolve');
const version = require('./package.json').version;
const autoprefixer = require('broccoli-autoprefixer');
const mergeTrees = require('broccoli-merge-trees');
const writeFile = require('broccoli-file-creator');
const Funnel = require('broccoli-funnel');

const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-adminbsb',





  contentFor(type, config) {
    if (type === 'head') {
      if (config['ember-adminbsb'].insertFontLinks) {
        return '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700&subset=latin,cyrillic-ext">'
          + '<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">';
      }
    } else if (type === 'body-footer') {
      /*let response = null;
      let emberPowerSelect = this.addons.filter(function(addon) {
        return addon.name === 'ember-power-select';
      })[0];
      response = emberPowerSelect.contentFor(type, config);
      if (config.environment !== 'test' &&  !config._emberPaperContentForInvoked) {
        config._emberPaperContentForInvoked = true;
        response = `
          ${response || ''}
          <div id="paper-wormhole"></div>
          <div id="paper-toast-fab-wormhole"></div>
        `;
      }
      return response;*/
    }
  },
  config() {
    return { 'ember-adminbsb': { insertFontLinks: true } };
  },


  treeForStyles(tree) {



   return this._super.treeForStyles(mergeTrees([angularScssFiles, tree], { overwrite: true }));
 },

};
