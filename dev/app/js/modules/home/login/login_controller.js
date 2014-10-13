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
			loginView.on("loginView:doPasswordReset", this.doPasswordReset);
		},

		doGuestLogin:function(obj){
			DukeApp.utils.loginAsGuest(obj).done(function(pass){
				if (pass) {
					DukeApp.trigger("weekExplorer:week", 1, true);
				} else {
					Login.Controller.contentView.showAlert();
				}
			});
		},

		doLogin:function(obj){	
			DukeApp.utils.login(obj).done(function(pass){
				if (pass) {
					switch(DukeApp.utils.getCurrentAdminType()){
						case("student"):
							DukeApp.trigger("profile:student");
							break;
						default:
							DukeApp.trigger("admin:dashboard");
							break;
					}
				} else {
					Login.Controller.contentView.showAlert();
				}
			});
		},

		doPasswordReset:function(obj){	
			DukeApp.utils.passwordReset(obj.email).done(function(result){
				if (result.status) {
					alert("Reset instructions have been sent to your email account.");
				} else {
					alert(result.e.message);
				}
			});
		}
	};
});