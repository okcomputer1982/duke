DukeApp.module("Profile", function(Profile, DukeApp, Backbone, Marionette, $, _){
	Profile.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"profile/student": "initStudent"
		}
	});

	var API = {
		initStudent: function(){
			DukeApp.Profile.Student.Controller.init();
		}
	};

	DukeApp.on("profile:student", function(){
		DukeApp.navigate("profile/student");
		API.initStudent();
	});

	DukeApp.addInitializer(function() {
		new Profile.Router({
			controller: API
		});
	});
});