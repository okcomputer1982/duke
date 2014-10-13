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

Handlebars.counter = 0;
Handlebars.registerHelper('resetCounter', function() {
    Handlebars.counter = 0;
});

Handlebars.registerHelper('incCounter', function() {
    Handlebars.counter += 1;
});

Handlebars.registerHelper('getCounter', function(add) {
    return Handlebars.counter;
});

Handlebars.registerHelper('getWeekLabel', function() { 
  	return this.index + 1;
});

Handlebars.registerHelper('isActiveWeekCheckBox', function(context) {
    return ((String(this) === "true")?"checked":"");
});

//week explorer
Handlebars.registerHelper('isActiveWeek', function(context, options) {
    if (this.active) {
      return options.fn(this);
    } else {
      return options.inverse(this);
    }
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

Handlebars.registerHelper('inClass', function() {
  quizResponseIndex += 1;
  return(quizResponseIndex);
});