import Ember from 'ember';
export default Ember.Component.extend({
  store: Ember.inject.service(),
  ajax: Ember.inject.service(),
  quiz: null,
  init(){
    this._super(...arguments);
    let quiz = this.get('store').createRecord('quiz', {
      id: 1
    });
    this.set('categories', this.get('store').peekAll('category'));
    this.set('difficulties', this.get('store').peekAll('difficulty'));
    this.set('quizTypes', this.get('store').peekAll('quizType'));
    this.set('quiz', quiz);
  },
  actions: {
    fetchQuestions(){
      this.set('loading', true);
      let amount=20;
      let category = $("#category").val();
      let quizType = $("#quizType").val();
      let difficulty = $("#difficulty").val();
      let query = `amount=${amount}&type=${quizType}&difficulty=${difficulty}`;
      if(category!="any"){
        query+=`&category=${category}`
      }
      this.get('ajax').request(`https://opentdb.com/api.php?${query}`).then((response) => {
        let id = 1;
        let quiz = this.get('store').peekRecord('quiz', 1);
        let user = this.get('store').peekRecord('user', 1);
        response.results.forEach((record) => {
          let question = this.get('store').createRecord('question', {
            category: record.category,
            correctAnswer: record.correct_answer,
            difficulty: record.difficulty,
            incorrectAnswers: record.incorrect_answers,
            question: record.question,
            questionType: record.type,
            quiz: quiz,
            user: user,
            id: id++
          });
          let answer = this.get('store').createRecord('answer', {
            id: id,
            question: question,
            user: user
          });
        });
        Ember.run.later(this, function(){
          this.set('loading', false);
          this.send('startQuiz');
        }, 2000);
      });
    },
    startQuiz: function(){
      this.sendAction('switchPage', 'questionsPage');
    },
    selectCategory: function(x){
      console.log(x);
    }
  }
});
