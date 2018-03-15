import Component from '@ember/component';
import { computed, observer } from '@ember/object';
import FormControlMixin from 'ember-adminbsb/mixins/form-control-mixin';

export default Component.extend(FormControlMixin, {

  type:"text",

  readonly:null,
  required:null,
  autofocus:null,
  size:null,
  tabindex:null,
  maxlength:null,
  name:null,
  min:null,
  max:null,
  pattern:null,
  accept:null,
  autocomplete:null,
  autosave:null,
  formaction:null,
  formenctype:null,
  formmethod:null,
  formnovalidate:null,
  formtarget:null,
  height:null,
  inputmode:null,
  multiple:null,
  step:null,
  width:null,
  form:null,
  selectionDirection:null,
  spellcheck:null,

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
