DukeApp.module("Admin.Teacher", function(Teacher, DukeApp, Backbone, Marionette, $, _){
	Teacher.Controller = {
		init:function() {
			DukeApp.utils.setCurrentView("admin-teacher-view", Teacher.Controller);
			DukeApp.utils.loadCommonViews();
			this.loadDisplay();
			//DukeApp.request("user:teacherModel:entities").done(this.loadDisplay);
		},

		loadDisplay:function(teacherModel) {	
			var layout = new Teacher.LayoutView();
			Teacher.Controller.layout = layout;

			DukeApp.content.show(layout);
			layout.header.show(DukeApp.commonViews.header);			
			DukeApp.commonViews.header.setUserName(DukeApp.utils.getCurrentUsername());
			
			this.handleMenuClick("class");

			layout.on("teacherView:clickLink", this.handleMenuClick);
		},

		handleMenuClick:function(type) {
			var contentViewMap = {
					"class": Teacher.EditClassView,
					"students": Teacher.EditStudentView,
					"schedule": Teacher.EditScheduleView
				},

				layout = Teacher.Controller.layout,
				contentView = new contentViewMap[type]();

			console.log(type);
			Teacher.Controller.content = contentView;
			layout.content.show(contentView);

			if (type === "students") {
				contentView.on("teacherView:clickGradeLink", Teacher.Controller.handleGradeMenuClick);
				Teacher.Controller.handleGradeMenuClick("assignments");
			} else {
				$("#grading").hide();
			}
		},

		handleGradeMenuClick:function(type) {
			var gradeViewMap = {
					"assignments": Teacher.GradeAssignmentView,
					"journal": Teacher.GradeJournalView,
					"quizes": Teacher.GradeQuizesView
				},
				layout = Teacher.Controller.layout,
				gradeView = new gradeViewMap[type]();

			$("#grading").show();
			layout.grading.show(gradeView);
		}
	};
});