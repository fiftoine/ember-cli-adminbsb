import Component from '@ember/component';
import { copy } from '@ember/object/internals';

export default Component.extend({

  value:null,

  onChange() {},

  actions: {
    radioPressed(pressedValue) {
      let newValue = copy(this.get('value'));


      if (newValue !== pressedValue) {
        newValue = pressedValue;
      }

      this.get('onChange')(newValue);

    }
  }

});
