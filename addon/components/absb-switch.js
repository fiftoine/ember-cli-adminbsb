import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames:['switch'],

  checked:false,
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


});
