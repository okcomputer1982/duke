DukeApp.module("Home.Login", function(Login, DukeApp, Backbone, Marionette, $, _){
	Login.LayoutView = Marionette.Layout.extend({
		template:templates['home/login/layout'],
		className:"loginView",
		regions: {
			footer: "#footer",
			content: "#content"
		},
		events:{
			'click #submitResetBtn': 	"handleSubmitPasswordReset"
		},
		handleSubmitPasswordReset:function(e) {
			var email = $("#email").val();

			if (!email) {
				alert("Please enter email of account needed to reset.");
			} else {
				this.trigger("loginView:doPasswordReset", {email:email});
				$("#resetModal").modal('hide');	
			}
		}
	});

	Login.ContentView = Marionette.ItemView.extend({
		template:templates["home/login/content"],
		
		events:{
			'click #user_login': 		"clickLogin",
			'click #guest_login': 		"clickGuest",
			'click #passReset': 		"handlePasswordReset"
		},

		onShow:function() {
			var that = this;

			$(document).keypress(function(event) {
			    var keycode = (event.keyCode ? event.keyCode : event.which);
			    if (keycode == '13') {
					that.clickLogin();    	
			    }
			});
		},

		clickLogin:function(e) {
			var user = $("#username_input").val();
			var password = $("#password_input").val();

			this.trigger("loginView:doLogin", {username:user, password:password});
		},

		clickGuest:function(e) {
			var user = $("#username_input").val();
			var password = $("#password_input").val();
			
			this.trigger("loginView:doGuestLogin", {username:user, password:password});
		},

		showAlert:function(e) {
			$("#login_alert").fadeIn(1000);
		},

		handlePasswordReset:function(e) {
			e.preventDefault();
			$("#resetModal").modal();
		}
	});
});