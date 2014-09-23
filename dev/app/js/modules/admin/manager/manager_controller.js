DukeApp.module("Admin.Manager", function(Manager, DukeApp, Backbone, Marionette, $, _){
	Manager.Controller = {
		init:function() {
			var that = this;

			DukeApp.utils.setCurrentView("admin-teacher-view", Manager.Controller);
			DukeApp.utils.loadCommonViews();

						//get data
			var classesPromise = DukeApp.request("all:class:entities");
			var classTemplatePromise = DukeApp.request("all:classTemplates:entities");
			var teacherPromise = DukeApp.request("all:user:teacherModel:entities");
			
				
			$.when(classesPromise, classTemplatePromise, teacherPromise).done(function(cResults, ctResults, tResults){
				Manager.Controller.data = {}; 
				Manager.Controller.data.classes = cResults;
				Manager.Controller.data.classTemplates = ctResults;
				Manager.Controller.data.teachers = tResults;

				that.loadDisplay(cResults, ctResults, tResults);
			});
			
		},

		loadDisplay:function(cResults, ctResults, tResults) {
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
				M = Backbone.Model.extend({}),
				m = new M(Manager.Controller.data),
				contentView = new contentViewMap[type]({
					model:m
				});

			layout.content.show(contentView);
		}
	};
});