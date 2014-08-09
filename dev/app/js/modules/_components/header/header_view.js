DukeApp.module("Components.Header", function(Header, DukeApp, Backbone, Marionette, $, _) {

  Header.HeaderView = Marionette.ItemView.extend({
    template: templates['_components/header/header'],

    onShow:function() {
        $('.logout_button').click(this.logoutRedirect);
        var adminType = DukeApp.utils.getCurrentAdminType();

        //check for current admin setting
        if (adminType === DukeApp.utils.AdminTypes.student || adminType === DukeApp.utils.AdminTypes.guest) {
            $("#admin_link").hide();
        }

    },

    logoutRedirect:function(e){
    	e.preventDefault();
    	DukeApp.trigger("home:login");
    }
  });
});