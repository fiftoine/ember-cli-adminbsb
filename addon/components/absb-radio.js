import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  classNames:['rb'],
  classNameBindings:['clear:cb-group-clear'],
  clear:false,
  gap:false,
  type:null,



  riClass:computed('gap', 'type',function(){
    let gap = this.get('gap')?'with-gap ':'';
    let color = this.get('type')?'radio-col-'+this.get('type')+' ':'';
    return gap+color;
  }),

  actions:{
    rbChanged(){
      this.sendAction("onClick", this.get('value'));
    }
  }

});
