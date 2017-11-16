import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),
  currentQuestion: null,
  currentIndex: 0,
  lastIndex: 19,
  questions: null,
  count: 60,
  timer(){
    this.set('count', this.get('count')-1);
    if(this.get('count') == 0) {
      clearInterval(this.get('timerInterval'));
      Ember.run.next(this, () => {
        this.send('showResults');
        this.set('timeUp', true);
      });
    };
  },
  processTimer(){
    Ember.run.later(this, function(){
      this.set('timerInterval', setInterval(this.timer.bind(this), 1000));
    }, 1000);
  },
  didInsertElement(){
    this.set('questions', this.get('store').peekAll('question'));
    this.set('currentQuestion', this.get('questions').objectAt(0));
    this.processTimer();
  },
  isLastQuestion: Ember.computed('currentIndex', 'lastIndex', function(){
    return this.get('currentIndex')==this.get('lastIndex');
  }),
  actions: {
    nextAction: function(){
      if(this.get('currentIndex')==19){
        clearInterval(this.get('timerInterval'));
        this.send('showResults');
      }
      else{
        this.send('nextQuestion');
      }
    },
    nextQuestion: function(){
      let index = this.get('currentIndex')+1;
      let currentQuestion = this.get('questions').objectAt(index);
      this.set('currentIndex', index);
      this.set('currentQuestion', currentQuestion);
    },
    showResults: function(){
      this.sendAction('switchPage', 'resultsPage');
    }
  }
});
