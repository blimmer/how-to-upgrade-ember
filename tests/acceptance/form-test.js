import { test } from 'qunit';
import testSelector from 'ember-test-selectors';
import moduleForAcceptance from 'how-to-upgrade-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | form');

let formButtonSelector = `${testSelector('form')} button`;

test('it can visit the route directly', function(assert) {
  visit('/form');

  andThen(function() {
    assert.equal(currentURL(), '/form');
  });
});

test('it has the expected form content', function(assert) {
  assert.expect(0); // will throw from `find`s to fail test if needed

  visit('/form');

  andThen(function() {
    findWithAssert(testSelector('form'));
    findWithAssert(testSelector('input-for', 'name'));
    findWithAssert(testSelector('input-for', 'email'));
    findWithAssert(testSelector('input-for', 'password'));
    findWithAssert(formButtonSelector);
  });
});

test('it shows invalid reason below the input', function(assert) {
  visit('/form');
  fillIn(`${testSelector('input-for', 'email')} input`, 'hello@fake.');
  andThen(function() {
    assert.equal(
      find(`${testSelector('input-for', 'email')} ${testSelector('invalid')}`).text().trim(),
      'This field must be a valid email address'
    );
  });
});

test('it shows a checkmark next to valid inputs', function(assert) {
  assert.expect(0); // will throw from `find`s to fail test if needed

  visit('/form');
  fillIn(`${testSelector('input-for', 'email')} input`, 'hello@real.com');
  andThen(function() {
    findWithAssert(`${testSelector('input-for', 'email')} ${testSelector('valid')}.fa-check`);
  });
});

test('it enables the button when all inputs are valid', function(assert) {
  assert.expect(0); // will throw from `find`s to fail test if needed

  visit('/form');
  assertButtonEnabled(formButtonSelector, false);
  fillIn(`${testSelector('input-for', 'name')} input`, 'Ben');
  assertButtonEnabled(formButtonSelector, false);
  fillIn(`${testSelector('input-for', 'email')} input`, 'hello@benlimmer.com');
  assertButtonEnabled(formButtonSelector, false);
  fillIn(`${testSelector('input-for', 'password')} input`, 'AbC123');
  assertButtonEnabled(formButtonSelector);
});

test('it shows a success flash message when the button is clicked', function(assert) {
  visit('/form');

  fillIn(`${testSelector('input-for', 'name')} input`, 'Ben');
  fillIn(`${testSelector('input-for', 'email')} input`, 'hello@benlimmer.com');
  fillIn(`${testSelector('input-for', 'password')} input`, 'AbC123');
  click(formButtonSelector);

  andThen(function() {
    assert.equal(find('.alert-success').text().trim(), 'You did it!');
  });
});
