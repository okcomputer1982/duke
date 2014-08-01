DukeApp.module("Admin.Teacher", function(Teacher, DukeApp, Backbone, Marionette, $, _){
	Teacher.Controller = {
		init:function() {
			DukeApp.utils.setCurrentView("admin-teacher-view", Teacher.Controller);
			DukeApp.utils.loadCommonViews();

			var layout = new Teacher.LayoutView(),
				content = new Teacher.ContentView();
			
			DukeApp.content.show(layout);
			layout.header.show(DukeApp.commonViews.header);
			layout.content.show(content);
		}
	};
});