import Ember from 'ember';

export default Ember.Test.registerAsyncHelper('assertButtonEnabled', function(app, selector, isEnabled = true) {
  let metaSelector = isEnabled ? 'enabled' : 'disabled';
  findWithAssert(`${selector}:${metaSelector}`);
});
