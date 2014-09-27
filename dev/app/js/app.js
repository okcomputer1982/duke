var DukeApp = new Marionette.Application();

DukeApp.addRegions({
	content:"#content",
	modal:"#modal"
});

DukeApp.navigate = function(route, options){
	options = options || (options = {});
	Backbone.history.navigate(route, options);
};

DukeApp.getCurrentRoute = function() {
	return Backbone.history.fragment;
};

//globals
DukeApp.currentViewName = "";
DukeApp.currentView = undefined;

//initializer
DukeApp.on("initialize:after", function() {
	var dbSetting = "production";
	var dbKeys = {
		"production":{		application:"oqfx3hFXuJLI1cUYva3GLZIp8WYCOaYbVoJSiEHq", javascript:"2XRJ21wm7o4BzWn0kCXjPr6ofHZtenPmPWwUaJD5"},
		"test":{			application:"0GUnrQeUHPGhfJNLDzssuTUqUbJtvk1bib3mbas0", javascript:"zV8yxUl1QUs1efsUbhOU2LLiwTIN2bWfTK7GlxPN"},
	};

	Parse.initialize(dbKeys[dbSetting].application, dbKeys[dbSetting].javascript);

	if (!DukeApp.utils.isLoggedIn) {
		DukeApp.utils.initUserSettings();
	}
	
	if(Backbone.history){
		Backbone.history.start();

		DukeApp.utils.loadCommonViews();

		if (this.getCurrentRoute() === "") {
			DukeApp.trigger("home:login");
		}
	}
});