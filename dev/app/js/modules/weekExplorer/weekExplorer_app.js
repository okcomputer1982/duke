DukeApp.module("WeekExplorer", function(WeekExplorer, DukeApp, Backbone, Marionette, $, _){
	//routes
	WeekExplorer.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"week/:id": "init",
			"week":"init"
		}
	});

	//contoller functions for triggering parts of week interface
	var API = {
		init: function(id){
			if (!id) {
				id = 1;
				DukeApp.navigate("week/"+id);
			}
			DukeApp.WeekExplorer.Week.Controller.init(id-1);
		}
	};

	//events for triggering navigation
	DukeApp.on("weekExplorer:week", function(id, reRender) {
		if (!id) {
			id = 1;
		}
		
		DukeApp.navigate("week/"+id);

		if (reRender) {
			API.init(id);
		}
	});

//initializer
	DukeApp.addInitializer(function() {
		var r = new WeekExplorer.Router({
			controller: API
		});
	});
});