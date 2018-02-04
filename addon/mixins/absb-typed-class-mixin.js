import Mixin from '@ember/object/mixin';
import {
  observer,
  computed
} from '@ember/object';

export default Mixin.create({

  typeClass: computed('type', function() {
    let prefix = this.get('classTypePrefix');
    let type = this.get('type') || 'default';
    return `${prefix}-${type} bg-${type}`;
  }),



});
