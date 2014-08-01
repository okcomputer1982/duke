DukeApp.module("Admin", function(Admin, DukeApp, Backbone, Marionette, $, _){
	Admin.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"admin/teacher": "initTeacher"
		}
	});

	var API = {
		initTeacher: function(){
			DukeApp.Admin.Teacher.Controller.init();
		}
	};

	DukeApp.on("admin:teacher", function(){
		DukeApp.navigate("admin/teacher");
		API.init();
	});

	DukeApp.addInitializer(function() {
		new Admin.Router({
			controller: API
		});
	});
});