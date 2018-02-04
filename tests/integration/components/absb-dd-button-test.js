import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('absb-dd-button', 'Integration | Component | absb dd button', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{absb-dd-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#absb-dd-button}}
      template block text
    {{/absb-dd-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
