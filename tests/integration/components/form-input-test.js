import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

/*
  If you're in here, yes you should usually test this kind of stuff :-)
  I stole this from Offir and he is immune from bugs!
  (really, I'm just being lazy, integration testing isn't the point of this talk)
*/

moduleForComponent('form-input', 'Integration | Component | form input', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{form-input}}`);
  assert.equal(this.$().text().trim(), '');
});
