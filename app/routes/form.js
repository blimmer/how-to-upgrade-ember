import Ember from 'ember';

export default Ember.Route.extend({
  flashMessages: Ember.inject.service(),

  model() {
    return this.store.createRecord('user');
  },

  actions: {
    showSuccessFlash() {
      this.get('flashMessages').success('You did it!');
    }
  }
});
