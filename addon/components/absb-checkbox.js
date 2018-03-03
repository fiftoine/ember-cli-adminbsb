import Component from '@ember/component';
import { computed, observer } from '@ember/object';

export default Component.extend({

  classNames:['cb-group'],
  classNameBindings:['clear:cb-group-clear'],
  checked:false,
  disabled:false,
  tabindex:null,
  indeterminate:null,
  name:null,
  autofocus:null,
  form:null,

  filled:false,
  clear:false,
  type:null,

  cbClass:computed('filled', function(){
    let filled =  this.get('filled')?'filled-in ':'';
    let color = this.get('type')?'chk-col-'+this.get('type')+' ':'';
    return filled+color;
  }),

  didInsertElement(){
    this._super(...arguments);

  }

});
