DukeApp.module("Home.Login", function(Login, DukeApp, Backbone, Marionette, $, _){
	Login.LayoutView = Marionette.Layout.extend({
		template:templates['home/login/layout'],
		className:"loginView",
		regions: {
			footer: "#footer",
			content: "#content"
		}
	});

	Login.ContentView = Marionette.ItemView.extend({
		template:templates["home/login/content"],
		events:{
			'click .btn-login':"clickLogin"
		},

		clickLogin:function(e){
			DukeApp.trigger("profile:student");
		}
	});
});