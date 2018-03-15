import Component from '@ember/component';
import { computed, observer } from '@ember/object';
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

  innerValueChanged:observer('_value', function(){
    if(this.get('changeset')){
        if(this.get('changeset').get(this.get('property')) !== this.get('_value')){
            this.get('changeset').set(this.get('property'), this.get('_value'));
        }
    }else{
      if(this.get('value') !== this.get('_value')){
        this.sendAction('onChange', this.get('_value'));
      }
    }
  }),

  valueChanged:observer('value', function(){
    this.set('_value', this.get('value'));
  }),

  init() {
    this._super(...arguments);
    if(this.get('changeset')){
      this.addObserver(`changeset.${this.get('property')}`,this, 'changeSetChanged');
    }
  },

  changeSetChanged(){
    this.set('_value', this.get('changeset').get(this.get('property')));
  },



  changeset:null,
  property:null,



});
