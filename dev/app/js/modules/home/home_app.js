DukeApp.module("Home", function(Home, DukeApp, Backbone, Marionette, $, _){
	Home.Router = Marionette.AppRouter.extend({
		"": "init"
	});

	var API = {
		init:function() {
			DukeApp.Home.Login.Controller.init();
		}
	};

	DukeApp.on("home:login", function(){
		API.init();
	});

	DukeApp.addInitializer(function(){
		new Home.Router({
			controller:API
		});
	});
});