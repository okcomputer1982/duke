DukeApp.module("Components.Header", function(Header, DukeApp, Backbone, Marionette, $, _) {

  Header.HeaderView = Marionette.ItemView.extend({
    template: templates['_components/header/header'],

    onShow:function() {
        $('.header_link').click(this.handleHeaderLink);

        var adminType = DukeApp.utils.getCurrentAdminType();

        //check for current admin setting
        if (adminType === DukeApp.utils.AdminTypes.student || DukeApp.utils.isGuest()) {
            $("#admin_link").hide();
        }

        if (adminType !== DukeApp.utils.AdminTypes.student) {
            $("#dashboard_link").hide();
        }

    },

    setUserName:function(name) {
        $('#user_id #username a').text(name);
    },

    handleHeaderLink:function(e){
        e.preventDefault();
        var type = $(e.currentTarget).attr('id');

        var links = {
            "coursework_link":"weekExplorer:week",
            "dashboard_link":"profile:student",
            "logout_link":"home:login",
            "admin_link":"admin:teacher",
        };

        if (type === "coursework_link")
            DukeApp.trigger(links[type], 1, true);
        else
            DukeApp.trigger(links[type]);
    }
  });
});