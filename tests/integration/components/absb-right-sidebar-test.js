import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('absb-right-sidebar', 'Integration | Component | absb right sidebar', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{absb-right-sidebar}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#absb-right-sidebar}}
      template block text
    {{/absb-right-sidebar}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
