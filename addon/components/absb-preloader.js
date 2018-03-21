import Component from '@ember/component';
import { computed, observer } from '@ember/object';

export default Component.extend({
  color:'red',

  size:null,

  sizeClass:computed('size', function(){
    return this.get('size')!= null?'pl-size-'+this.get('size'):'';
  }),

  colorClass:computed('color', function(){
    return this.get('color')!= null?'pl-'+this.get('color'):'';
  }),


});
