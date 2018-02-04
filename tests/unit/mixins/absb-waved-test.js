import EmberObject from '@ember/object';
import AbsbWavedMixin from 'ember-adminbsb/mixins/absb-waved';
import { module, test } from 'qunit';

module('Unit | Mixin | absb waved');

// Replace this with your real tests.
test('it works', function(assert) {
  let AbsbWavedObject = EmberObject.extend(AbsbWavedMixin);
  let subject = AbsbWavedObject.create();
  assert.ok(subject);
});
