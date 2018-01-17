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
    let adminBsbScssFiles = [
      'style.scss',
      '_alerts.scss',
      '_badgelistgroupitem.scss',
      '_bootstrapnotify.scss',
      '_bootstrapselect.scss',
      '_breadcrumbs.scss',
      '_buttons.scss',
      '_card.scss',
      '_charts.scss',
      '_checkboxradio.scss',
      '_collapse.scss',
      '_colorpicker.scss',
      '_customanimate.scss',
      '_dashboard.scss',
      '_datetimepicker.scss',
      '_demo.scss',
      '_dialogs.scss',
      '_dropdownmenu.scss',
      '_dropzone.scss',
      '_formwizard.scss',
      '_general.scss',
      '_helpers.scss',
      '_infobox.scss',
      '_inputformgroup.scss',
      '_ionrangeslider.scss',
      '_jquerydatatable.scss',
      '_jquerynestable.scss',
      '_labels.scss',
      '_leftsidebaroverlay.scss',
      '_lightgallery.scss',
      '_maps.scss',
      '_materialicons.scss',
      '_media.scss',
      '_mediaobject.scss',
      '_mixins.scss',
      '_modals.scss',
      '_multiselect.scss',
      '_navbar.scss',
      '_navtabs.scss',
      '_noUISlider.scss',
      '_pageloader.scss',
      '_pagination.scss',
      '_panels.scss',
      '_preloaders.scss',
      '_progressbars.scss',
      '_searchbar.scss',
      '_switch.scss',
      '_tables.scss',
      '_tagsinput.scss',
      '_thumbnails.scss',
      '_tooltippopovers.scss',
      '_variables.scss',
      '_waveseffect.scss',

      'browser-support/_ie10.scss',
      'browser-support/_ie11.scss',
      'pages/_404.scss',
      'pages/_500.scss',
      'pages/_forgotpasswordpage.scss',
      'pages/_loginpage.scss',
      'pages/_signuppage.scss',
      'themes/theme-amber.scss',
      'themes/theme-black.scss',
      'themes/theme-blue-grey.scss',
      'themes/theme-blue.scss',
      'themes/theme-brown.scss',
      'themes/theme-cyan.scss',
      'themes/theme-deep-orange.scss',
      'themes/theme-deep-purple.scss',
      'themes/theme-green.scss',
      'themes/theme-grey.scss',
      'themes/theme-indigo.scss',
      'themes/theme-light-blue.scss',
      'themes/theme-light-green.scss',
      'themes/theme-lime.scss',
      'themes/theme-orange.scss',
      'themes/theme-pink.scss',
      'themes/theme-purple.scss',
      'themes/theme-red.scss',
      'themes/theme-teal.scss',
      'themes/theme-yellow.scss',
      'themes/_all-themes.scss',
      'themes/_theme-color-variables.scss',
    ];

    let scssFiles = new Funnel('node_modules/adminbsb-materialdesign', {
      files:adminBsbScssFiles ,
      srcDir: '/scss',
      destDir: 'adminbsb-materialdesign',
      annotation: 'AdminBsbMaterialDesign'
    });


    let materializeScssFiles = [
        'materialize.css'
    ];

    let materializeFiles = new Funnel('node_modules/adminbsb-materialdesign', {
      files:materializeScssFiles ,
      srcDir: '/css',
      destDir: 'adminbsb-materialdesign',
      annotation: 'AdminBsbMaterialDesign-bootstrap'
    });

    let bootstrapScssFiles = [
        'bootstrap.css'
    ];

    let bootstrapFiles = new Funnel('node_modules/adminbsb-materialdesign', {
      files:bootstrapScssFiles ,
      srcDir: '/plugins/bootstrap/css',
      destDir: 'adminbsb-materialdesign',
      annotation: 'AdminBsbMaterialDesign-bootstrap'
    });


    let wavesScssFiles = [
        'waves.css'
    ];

    let wavesFiles = new Funnel('node_modules/adminbsb-materialdesign', {
      files:wavesScssFiles ,
      srcDir: '/plugins/node-waves',
      destDir: 'adminbsb-materialdesign',
      annotation: 'AdminBsbMaterialDesign-waves'
    });

    let animateScssFiles = [
        'animate.css'
    ];

    let animateFiles = new Funnel('node_modules/adminbsb-materialdesign', {
      files:animateScssFiles ,
      srcDir: '/plugins/animate-css',
      destDir: 'adminbsb-materialdesign',
      annotation: 'AdminBsbMaterialDesign-animate'
    });

    let morrisScssFiles = [
        'morris.css'
    ];

    let morrisFiles = new Funnel('node_modules/adminbsb-materialdesign', {
      files:morrisScssFiles ,
      srcDir: '/plugins/morrisjs',
      destDir: 'adminbsb-materialdesign',
      annotation: 'AdminBsbMaterialDesign-morris'
    });


   return this._super.treeForStyles(mergeTrees([scssFiles,materializeFiles, bootstrapFiles, wavesFiles,animateFiles,morrisFiles, tree], { overwrite: true }));
 },

 pathBase(packageName) {
   return path.dirname(resolve.sync(`${packageName}/package.json`, { basedir: __dirname }));
 },

 postprocessTree(type, tree) {
   if (type === 'all' || type === 'styles') {
     tree = autoprefixer(tree, this.app.options.autoprefixer || { browsers: ['last 2 versions'] });
   }
   return tree;
 }

};
