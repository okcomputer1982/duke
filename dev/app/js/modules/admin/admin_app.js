DukeApp.module("Admin", function(Admin, DukeApp, Backbone, Marionette, $, _){
	Admin.Router = Marionette.AppRouter.extend({
		appRoutes: {
			"admin": "init",
		}
	});

	var API = {
		init: function(){
			var currentUserType = DukeApp.utils.getCurrentAdminType();

			if (currentUserType === "teacher") {
				DukeApp.Admin.Teacher.Controller.init();
			} else if (currentUserType === "admin") {
				DukeApp.Admin.Manager.Controller.init();
			}
		}
	};

	DukeApp.on("admin:dashboard", function(){
		DukeApp.navigate("admin");
		API.init();
	});

	DukeApp.addInitializer(function() {
		new Admin.Router({
			controller: API
		});
	});
});