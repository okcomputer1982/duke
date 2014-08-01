DukeApp.module("Components.Header", function(Header, DukeApp, Backbone, Marionette, $, _) {

  Header.HeaderView = Marionette.ItemView.extend({
    template: templates['_components/header/header'],

    onShow:function() {
        $('.logout_button').click(this.logoutRedirect);
    },

    logoutRedirect:function(e){
    	e.preventDefault();
        console.log("hit");
    	DukeApp.trigger("home:login");
    }
  });
});