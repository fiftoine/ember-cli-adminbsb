import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('absb-slimscrolled', 'Integration | Component | absb slimscrolled', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{absb-slimscrolled}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#absb-slimscrolled}}
      template block text
    {{/absb-slimscrolled}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
