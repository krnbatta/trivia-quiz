import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),
  user: null,
  validateEmail() {
    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.get('user.email'))) {
      return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
  },
  validatePhone(){
    if (/^\d{10}$/.test(this.get('user.phone'))){
      return true;
    }
    else{
      alert("Please enter a 10 digit phone number");
      return false;
    }
  },
  init() {
    this._super(...arguments);
    let user = this.get('store').createRecord('user', {
      id: 1
    });
    this.set('user', user);
  },
  actions: {
    setQuiz: function() {
      if(this.validateEmail() && this.validatePhone()){
        this.sendAction('switchPage', 'quizDetailsPage');
      }
    }
  }
});
