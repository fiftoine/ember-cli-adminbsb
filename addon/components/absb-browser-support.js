import Component from '@ember/component';

const edge = 'Microsoft Edge';
const ie10 = 'Internet Explorer 10';
const ie11 = 'Internet Explorer 11';
const opera = 'Opera';
const firefox = 'Mozilla Firefox';
const chrome = 'Google Chrome';
const safari = 'Safari';

export default Component.extend({

  didInsertElement() {
    this._super(...arguments);
    var className = this.getClassName();
    if (className !== ''){
      $('html').addClass(className);
    }
  },


  getBrowser() {
      var userAgent = navigator.userAgent.toLowerCase();

      if (/edge/i.test(userAgent)) {
          return edge;
      } else if (/rv:11/i.test(userAgent)) {
          return ie11;
      } else if (/msie 10/i.test(userAgent)) {
          return ie10;
      } else if (/opr/i.test(userAgent)) {
          return opera;
      } else if (/chrome/i.test(userAgent)) {
          return chrome;
      } else if (/firefox/i.test(userAgent)) {
          return firefox;
      } else if (!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)) {
          return safari;
      }

      return undefined;
  },
  getClassName() {
      var browser = this.getBrowser();

      if (browser === edge) {
          return 'edge';
      } else if (browser === ie11) {
          return 'ie11';
      } else if (browser === ie10) {
          return 'ie10';
      } else if (browser === opera) {
          return 'opera';
      } else if (browser === chrome) {
          return 'chrome';
      } else if (browser === firefox) {
          return 'firefox';
      } else if (browser === safari) {
          return 'safari';
      } else {
          return '';
      }
  }
});
