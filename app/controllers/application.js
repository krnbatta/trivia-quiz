import Ember from 'ember';
export default Ember.Controller.extend({
  timeUp: false,
  init() {
    this._super(...arguments);
    this.get('categories').forEach((category) => {
      this.get('store').createRecord('category', {
        id: category.id,
        name: category.name
      });
    });
    this.get('quizTypes').forEach((quizType) => {
      this.get('store').createRecord('quizType', {
        id: quizType.id,
        name: quizType.name
      });
    });
    this.get('difficulties').forEach((difficulty) => {
      this.get('store').createRecord('difficulty', {
        id: difficulty.id,
        name: difficulty.name
      });
    });

  },
  loginPage: true,
  quizDetailsPage: false,
  questionsPage: false,
  resultsPage: false,
  actions: {
    switchPage(nextPage) {
      ["loginPage", "quizDetailsPage", "questionsPage", "resultsPage"].forEach((page) => {
        if (page != nextPage) {
          this.set(page, false);
        } else {
          this.set(page, true);
        }
      })
    }
  },
  difficulties: [{
    id: "easy",
    name: "Easy"
  }, {
    id: "medium",
    name: "Medium"
  }, {
    id: "hard",
    name: "Hard"
  }],
  quizTypes: [{
    id: "multiple",
    name: "Multiple Choice"
  }, {
    id: "boolean",
    name: "True/False"
  }],
  categories: [{
    id: "any",
    name: "Any Category"
  }, {
    id: "9",
    name: "General Knowledge"
  }, {
    id: "10",
    name: "Entertainment: Books"
  }, {
    id: "11",
    name: "Entertainment: Film"
  }, {
    id: "12",
    name: "Entertainment: Music"
  }, {
    id: "13",
    name: "Entertainment: Musicals & Theatres"
  }, {
    id: "14",
    name: "Entertainment: Television"
  }, {
    id: "15",
    name: "Entertainment: Video Games"
  }, {
    id: "16",
    name: "Entertainment: Board Games"
  }, {
    id: "17",
    name: "Science & Nature"
  }, {
    id: "18",
    name: "Science: Computers"
  }, {
    id: "19",
    name: "Science: Mathematics"
  }, {
    id: "20",
    name: "Mythology"
  }, {
    id: "21",
    name: "Sports"
  }, {
    id: "22",
    name: "Geography"
  }, {
    id: "23",
    name: "History"
  }, {
    id: "24",
    name: "Politics"
  }, {
    id: "25",
    name: "Art"
  }, {
    id: "26",
    name: "Celebrities"
  }, {
    id: "27",
    name: "Animals"
  }, {
    id: "28",
    name: "Vehicles"
  }, {
    id: "29",
    name: "Entertainment: Comics"
  }, {
    id: "30",
    name: "Science: Gadgets"
  }, {
    id: "31",
    name: "Entertainment: Japanese Anime & Manga"
  }, {
    id: "32",
    name: "Entertainment: Cartoon & Animations"
  }]
});
