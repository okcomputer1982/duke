Handlebars.registerHelper('getAttribute', function(id) {
  	return this.userData.attributes[id];
});

Handlebars.registerHelper('getAttributeName', function(id) {
  	return DukeApp.utils.Attributes[id].name;
});

Handlebars.registerHelper('getAttributeDesc', function(id) {
  	return DukeApp.utils.Attributes[id].desc;
});

Handlebars.registerHelper('getWeekLabel', function() {
  	return this + 1;
});
