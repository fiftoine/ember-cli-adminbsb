import Component from '@ember/component';
import {
  observer
} from '@ember/object';

export default Component.extend({


  didInsertElement() {
    this._super(...arguments);
    if(this.get('height')){
        this.slimScroll();
    }

  },

  heighChanged:observer('height', function() {
    // deal with the change
    this.slimScroll();
  }),

  slimScroll(){
    let options = {

        color: 'rgba(0,0,0,0.5)',
        size: '4px',
        alwaysVisible: false,
        borderRadius: '0',
        railBorderRadius: '0',

    };
    if(this.get('height')){
      options.height =  this.get('height') + "px";
    }
    this.$().slimscroll(options);
    console.log('slimscrolled',options.height,  this);
  }
});
