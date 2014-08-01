DukeApp.module("Components.Header", function(Header, DukeApp, Backbone, Marionette, $, _) {

  Header.HeaderView = Marionette.ItemView.extend({
    template: templates['_components/header/header'],
    events:{
    	"click .logout_button":"logoutRedirect",
    	"click .help_button":"helpHandler",
    },

    initialize:function(){
    },

    logoutRedirect:function(e){
    	e.preventDefault();
    	DukeApp.trigger("home:login");
    },

    helpHandler:function(e) {
    	if ("toggleHelp" in DukeApp.currentController) {
            DukeApp.currentController.toggleHelp();
        } else {
            console.log("help not defined for this screen");
        }
    }
  });
});