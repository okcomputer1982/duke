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

			content.on("loginView:checkLogin", this.checkLogin);
		},
		checkLogin:function(obj){
			
			Parse.User.logIn(obj.username, obj.password, {
  				success: function(user) {
  					DukeApp.trigger("profile:student");
    			},
  				error: function(user, error) {
    				Login.Controller.contentView.showAlert();
  					
  				}
			});
		}
	};
});