import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),
  didInsertElement(){
    this._super(...arguments);
    this.set('user', this.get('store').peekRecord('user', 1));
  },
  actions: {
    startOver(){
      location.reload();
    }
  }
});
