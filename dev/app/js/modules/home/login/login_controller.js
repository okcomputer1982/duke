DukeApp.module("Home.Login", function(Login, DukeApp, Backbone, Marionette, $, _){
	Login.Controller = {
		init:function() {
			DukeApp.utils.setCurrentView("home-login-view", Login.Controller);
			DukeApp.utils.loadCommonViews();

			var loginView = new Login.LayoutView(),
				content = new Login.ContentView();

			Login.Controller.contentView = content;

			DukeApp.content.show(loginView);
			loginView.content.show(content);

			content.on("loginView:doLogin", this.doLogin);
			content.on("loginView:doGuestLogin", this.doGuestLogin);
		},

		doGuestLogin:function(){
			DukeApp.utils.loginAsGuest();
			DukeApp.trigger("weekExplorer:week", 1, true);
		},

		doLogin:function(obj){	
			DukeApp.utils.login(obj).done(function(pass){
				if (pass) {
					switch(DukeApp.utils.getCurrentAdminType()){
						case("student"):
							DukeApp.trigger("profile:student");
							break;
						case("teacher"):
							DukeApp.trigger("admin:teacher");
							break;
					}
				} else {
					Login.Controller.contentView.showAlert();
				}
			});

		}
	};
});