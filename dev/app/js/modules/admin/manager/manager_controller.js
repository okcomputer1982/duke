DukeApp.module("Admin.Manager", function(Manager, DukeApp, Backbone, Marionette, $, _){
	Manager.Controller = {
		init:function() {
			DukeApp.utils.setCurrentView("admin-teacher-view", Manager.Controller);
			DukeApp.utils.loadCommonViews();

			this.loadDisplay();
		},

		loadDisplay:function(adminModel) {
			var layout = new Manager.LayoutView();

			DukeApp.content.show(layout);
			layout.header.show(DukeApp.commonViews.header);
			DukeApp.commonViews.header.setUserName(DukeApp.utils.getCurrentUsername());

			Manager.Controller.layout = layout;

			this.handleMenuClick("classes");

			layout.on("managerView:clickLink", this.handleMenuClick);
		},

		handleMenuClick:function(type) {
			var contentViewMap = {
					"classes": Manager.EditClassesView,
					"teachers": Manager.EditTeachersView,
					"students": Manager.EditStudentsView,
					"guests": Manager.EditGuestsView
				},
				layout = Manager.Controller.layout,
				contentView = new contentViewMap[type]();

			layout.content.show(contentView);
		}
	};
});