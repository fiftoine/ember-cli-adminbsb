/* eslint-env node */
module.exports = {
  description: ''

  // locals(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall(){
    this.addAddonsToProject({
      // a packages array defines the addons to install
      packages: [
        // name is the addon name, and target (optional) is the version
        {name: 'ember-bootstrap', target: '1.0.0'},
        {name: 'ember-power-select', target: '1.10.4'},
        {name: 'ember-composable-helpers', target: '2.1.0'},
        {name: 'ember-math-helpers', target: '2.4.0'},
        {name: 'ember-cli-string-helpers', target: '1.6.0'},
        {name: 'ember-truth-helpers', target: '2.0.0'},
        {name: 'ember-toggle-helper', target: '0.1.1'},
        {name: 'ember-cli-range-slider', target: '0.2.7'},
        {name: 'ember-cli-bootstrap-colorpicker', target: '2.5.1'},


      ]
    })
  },

   afterInstall(options) {
     // Perform extra work here.
     var _this = this;
      return this.addPackagesToProject([
        {name: 'ember-cli-sass', target: 'latest'}
      ]).then(()=>{
        this.addAddonsToProject({
          // a packages array defines the addons to install
          packages: [
            // name is the addon name, and target (optional) is the version
            {name: 'ember-bootstrap', target: '1.0.0'},
            {name: 'ember-power-select', target: '1.10.4'},
            {name: 'ember-composable-helpers', target: '2.1.0'},
            {name: 'ember-math-helpers', target: '2.4.0'},
            {name: 'ember-cli-string-helpers', target: '1.6.0'},
            {name: 'ember-truth-helpers', target: '2.0.0'},
            {name: 'ember-get-helper', target: '1.1.0'},
            {name: 'ember-toggle-helper', target: '0.1.1'},
            {name: 'ember-cli-range-slider', target: '0.2.7'},
            {name: 'ember-power-select', target: '1.10.4'},

          ]
        })
      });





   }
};
