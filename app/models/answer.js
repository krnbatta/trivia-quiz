import DS from 'ember-data';
export default DS.Model.extend({
  user: DS.belongsTo('user'),
  question: DS.belongsTo('question'),
  answer: DS.attr('string'),
  isCorrect: Ember.computed('answer', 'question.correctAnswer', function(){
    return this.get('answer')==this.get('question.correctAnswer');
  })
});
