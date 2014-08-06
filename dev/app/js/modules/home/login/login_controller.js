DukeApp.module("Home.Login", function(Login, DukeApp, Backbone, Marionette, $, _){
	Login.Controller = {
		init:function() {
			DukeApp.utils.setCurrentView("home-login-view", Login.Controller);
			DukeApp.utils.loadCommonViews();

			var loginView = new Login.LayoutView(),
				footer = new DukeApp.Components.Footer.FooterView(),
				content = new Login.ContentView();

			Login.Controller.contentView = content;

			DukeApp.content.show(loginView);
			loginView.content.show(content);

			content.on("loginView:doLogin", this.doLogin);
			content.on("loginView:doGuestLogin", this.doGuestLogin);
		},

		doGuestLogin:function(){
			console.log("here");
			
			DukeApp.utils.loginAsGuest();
			DukeApp.trigger("profile:student");
		},

		doLogin:function(obj){	
			DukeApp.utils.login(obj).done(function(pass){
				if (pass) {
					DukeApp.trigger("profile:student");
				} else {
					Login.Controller.contentView.showAlert();
				}
			});

		}
	};
});