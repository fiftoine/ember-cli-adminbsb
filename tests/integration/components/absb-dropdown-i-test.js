import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('absb-dropdown-i', 'Integration | Component | absb dropdown i', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{absb-dropdown-i}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#absb-dropdown-i}}
      template block text
    {{/absb-dropdown-i}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
