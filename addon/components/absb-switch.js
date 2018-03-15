import Component from '@ember/component';
import { computed, observer } from '@ember/object';

export default Component.extend({
  classNames:['switch'],

  checked:false,
  _checked:false,
  labelOff:null,
  labelOn:null,

  disabled:false,
  tabindex:null,
  indeterminate:null,
  name:null,
  autofocus:null,
  form:null,

  type:null,

  leverTypeClass:computed('type', function(){
    let color = this.get('type')?'switch-col-'+this.get('type')+' ':'';
    return color;
  }),

  innerValueChanged:observer('_checked', function(){
    if(this.get('checked') !== this.get('_checked')){
      this.sendAction('onChange', this.get('_checked'));
    }
  }),

  valueChanged:observer('checked', function(){
    this.set('_checked', this.get('checked'));
  }),



});
