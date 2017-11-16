import DS from 'ember-data';
export default DS.Model.extend({
  quiz: DS.belongsTo('quiz'),
  answer: DS.belongsTo('answer'),
  category: DS.attr('string'),
  difficulty: DS.attr('string'),
  questionType: DS.attr('string'),
  question: DS.attr('string'),
  correctAnswer: DS.attr('string'),
  incorrectAnswers: DS.attr(),
  answers: Ember.computed('correctAnswer', 'incorrectAnwers', function(){
    let answers = [];
    this.get('incorrectAnswers').forEach(function(answer){
      answers.push(answer);
    });
    answers.push(this.get('correctAnswer'));
    answers.sort();
    return answers;
  })
});
