import EmberObject from '@ember/object';
import FormControlMixinMixin from 'ember-adminbsb/mixins/form-control-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | form control mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  let FormControlMixinObject = EmberObject.extend(FormControlMixinMixin);
  let subject = FormControlMixinObject.create();
  assert.ok(subject);
});
