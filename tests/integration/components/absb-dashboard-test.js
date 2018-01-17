import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('absb-dashboard', 'Integration | Component | absb dashboard', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{absb-dashboard}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#absb-dashboard}}
      template block text
    {{/absb-dashboard}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
