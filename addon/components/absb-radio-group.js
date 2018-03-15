import Component from '@ember/component';
import { computed, observer } from '@ember/object';
import { copy } from '@ember/object/internals';

export default Component.extend({

  classNames:[ 'form-group'],

  _value:null,

  onChange() {},

  actions: {
    radioPressed(pressedValue) {
      if(this.get('changeset')){
          if(this.get('changeset').get(this.get('property')) !== this.get('_value')){
              this.get('changeset').set(this.get('property'), this.get('_value'));
          }
      }else{
        if(this.get('value') !== this.get('_value')){
          this.sendAction('onChange', this.get('_value'));
        }
      }
    }
  },

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
