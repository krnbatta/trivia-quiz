import DS from 'ember-data';
export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  answers: DS.hasMany('answer'),
  score: Ember.computed('answers.@each.isCorrect', function(){
    return this.get('answers').filter((item, index) => item.get('isCorrect')).length;
  })
});
