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

		clickLogin:function(e) {
			var user = $("#username_input").val();
			var password = $("#password_input").val();

			this.trigger("loginView:checkLogin", {username:user, password:password});
		},

		showAlert:function(e) {
			console.log("here");
			$("#login_alert").fadeIn(1000);
		}
	});
});