/* eslint-env node */
module.exports = {
  description: '',
  normalizeEntityName: function() {},
  afterInstall(options) {
    return this.addPackagesToProject([
        {name: 'ember-cli-sass', target: 'latest'}
    ]).then(()=>{
      return this.addAddonsToProject({

        packages: [
          {name: 'ember-bootstrap', target: '1.0.0'},
          {name: 'ember-power-select', target: '1.10.4'},
          {name: 'ember-composable-helpers', target: '2.1.0'},
          {name: 'ember-math-helpers', target: '2.4.0'},
          {name: 'ember-cli-string-helpers', target: '1.6.0'},
          {name: 'ember-truth-helpers', target: '2.0.0'},

          {name: 'ember-toggle-helper', target: '0.1.1'},
          {name: 'ember-cli-range-slider', target: '0.2.7'},
          {name: 'ember-cli-bootstrap-colorpicker', target: '2.5.1'},
          {name: 'ember-changeset-validations', target:'1.2.11'},
          {name: 'ember-i18n-changeset-validations', target:'1.1.0'},
          {name: "ember-window-resize", target: "^1.0.1"},
          {name: "ember-cli-active-link-wrapper", target:"^0.3.2"}

        ]
      })
    });
  }
};
