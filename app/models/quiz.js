import DS from 'ember-data';
export default DS.Model.extend({
  user: DS.belongsTo('user'),
  questions: DS.hasMany('question'),
  category: DS.attr('string'),
  difficulty: DS.attr('string'),
  quizType: DS.attr('string')
});
