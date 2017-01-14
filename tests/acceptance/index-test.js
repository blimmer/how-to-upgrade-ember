import { test } from 'qunit';
import testSelector from 'ember-test-selectors';
import moduleForAcceptance from 'how-to-upgrade-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('it can visit the route', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('it has an interesting intro message', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(
      find(testSelector('application-intro')).text(),
      'A Simple Registration App'
    );
  });
});

test('it can visit the form route by clicking the button', function(assert) {
  visit('/');
  click(`${testSelector('button-container')} a`);

  andThen(function() {
    assert.equal(currentURL(), '/form');
  });
});
