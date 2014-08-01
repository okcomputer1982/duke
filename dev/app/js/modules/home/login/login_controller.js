DukeApp.module("Home.Login", function(Login, DukeApp, Backbone, Marionette, $, _){
	Login.Controller = {
		init:function() {
			DukeApp.utils.setCurrentView("home-login-view", Login.Controller);
			DukeApp.utils.loadCommonViews();

			var loginView = new Login.LayoutView(),
				footer = new DukeApp.Components.Footer.FooterView(),
				content = new Login.ContentView();

			DukeApp.content.show(loginView);
			loginView.content.show(content);
		}
	};
});