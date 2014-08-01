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
	if(Backbone.history){
		Backbone.history.start();

		DukeApp.utils.loadCommonViews();

		if (this.getCurrentRoute() === "") {
			DukeApp.trigger("home:login");
		}
	}
});