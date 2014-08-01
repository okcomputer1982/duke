DukeApp.module("Admin.Teacher", function(Teacher, DukeApp, Backbone, Marionette, $, _){
	Teacher.LayoutView = Marionette.Layout.extend({
		template:templates['admin/teacher/layout'],
		className:"teacherProfileView",
		regions: {
			header: "#header",
			footer: "#footer",
			content: "#content"
		}
	});

	Teacher.ContentView = Marionette.ItemView.extend({
		template:templates["admin/teacher/content"]
	});
});