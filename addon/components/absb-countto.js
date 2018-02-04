import Component from '@ember/component';
import {
  observer
} from '@ember/object';

import { next } from '@ember/runloop';

export default Component.extend({

  from:0,
  to:100,
  speed:1000,
  refreshInterval:100,
  decimals:0,

  didInsertElement(){
    this._super(...arguments);
    this.countTo();

  },


  valuesChanged:observer('to', function() {
    console.log("countto changed");
    next(this,() => {
        this.countTo();
    });

  }),

  countTo(){
    this.$().countTo({
      from:this.get('from'),
      to:this.get('to'),
      speed:this.get('speed'),
      refreshInterval:this.get('refreshInterval'),
      decimals:this.get('decimals'),
    })
  }





});
