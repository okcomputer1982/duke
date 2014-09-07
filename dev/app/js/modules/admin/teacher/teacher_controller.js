DukeApp.module("Admin.Teacher", function(Teacher, DukeApp, Backbone, Marionette, $, _){
	Teacher.Controller = {
		init:function() {
			DukeApp.utils.setCurrentView("admin-teacher-view", Teacher.Controller);
			DukeApp.utils.loadCommonViews();

			DukeApp.request("user:teacherModel:entities").done(this.loadDisplay);
		},

		loadDisplay:function(teacherModel) {
			var layout = new Teacher.LayoutView(),
				infoPanel = new Teacher.InfoPanelView({
					model:teacherModel
				});
			
			DukeApp.content.show(layout);
			layout.header.show(DukeApp.commonViews.header);
			layout.infoPanel.show(infoPanel);


			Teacher.Controller.layout = layout;
			Teacher.Controller.infoPanel = infoPanel;

			$('.dropdown').dropdown();

			Teacher.Controller.currentClass = 0;

			var firstClass = teacherModel.get('classes')[Teacher.Controller.currentClass];

			infoPanel.setClassIndicator(Teacher.Controller.currentClass);
			Teacher.Controller.loadClass({classId:firstClass});

			infoPanel.on("teacherView:changeClass", Teacher.Controller.loadClass)
		},

		loadClass:function(obj) {
			DukeApp.request("class:entities", obj.classId).done(function(classModel) {
			
				Teacher.Controller.classPanel = new Teacher.ClassPanelView({
					model:classModel
				});

				console.log(obj);
				console.log(classModel.get('template').title);
				var layout = Teacher.Controller.layout;
				layout.classPanel.show(Teacher.Controller.classPanel);
			});
		}
	};
});