import Component from '@ember/component';

import FormControlMixin from 'ember-adminbsb/mixins/form-control-mixin';
export default Component.extend(FormControlMixin,{
  float:false,

  resize:false,

  name:null,
  rows:null,
  cols:null,
  maxlength:null,
  tabindex:null,
  selectionEnd:null,
  selectionStart:null,
  selectionDirection:null,
  wrap:null,
  readonly:null,
  autofocus:null,
  form:null,
  spellcheck:null,
  required:null,




  _removeAutosize: Ember.on('willDestroyElement', function () {
    if(this.get('resize')){
        autosize.destroy(this.$());
    }

  }),
  /**
   * Once this textarea is inserted in the DOM initialize on autosize.
   * @see https://github.com/jackmoore/autosize
   */
  _initializeAutosize: Ember.on('didInsertElement', function () {
    if(this.get('resize')){
      autosize(this.$('textarea'));
    }
  }),
});
