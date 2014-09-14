Handlebars.registerHelper('getAttribute', function(id) {
  	return this.userData.attributes[id];
});

Handlebars.registerHelper('getAttributeName', function(id) {
  	return DukeApp.utils.Attributes[id].name;
});

Handlebars.registerHelper('getAttributeDesc', function(id) {
  	return DukeApp.utils.Attributes[id].desc;
});

Handlebars.registerHelper('getAttributeVal', function(id) {
  return this.userData.attributes[Number(id)];
});

Handlebars.registerHelper('getWeekLabel', function() {
    console.log(this);
  	return this + 1;
});

//student dashboard
Handlebars.registerHelper('hasJournals', function(options) {
	if (this.userData.journals && this.userData.journals.length > 0) {
    	return options.fn(this);
  	} else {
    	return options.inverse(this);
  	}
});

Handlebars.quizQuestionIndex = 0;
Handlebars.registerHelper('setQuizIndex', function(options) {
	quizQuestionIndex = this.id;
});

Handlebars.registerHelper('getQuizIndex', function(options) {
	return(quizQuestionIndex);
});

Handlebars.quizResponseIndex = 0;
Handlebars.registerHelper('setResponseIndex', function(options) {
  quizResponseIndex = 0;
});

Handlebars.registerHelper('getResponseIndex', function(options) {
  quizResponseIndex += 1;
  return(quizResponseIndex);
});