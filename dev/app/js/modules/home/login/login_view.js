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
			'click #user_login':"clickLogin",
			'click #guest_login':"clickGuest",
		},

		clickLogin:function(e) {
			var user = $("#username_input").val();
			var password = $("#password_input").val();

			this.trigger("loginView:doLogin", {username:user, password:password});
		},

		clickGuest:function(e) {
			this.trigger("loginView:doGuestLogin");
		},

		showAlert:function(e) {
			$("#login_alert").fadeIn(1000);
		}
	});
});