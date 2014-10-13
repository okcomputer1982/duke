DukeApp.module("Admin.Teacher", function(Teacher, DukeApp, Backbone, Marionette, $, _){
	Teacher.Controller = {
		init:function() {
			var that = this;

			DukeApp.utils.setCurrentView("admin-teacher-view", Teacher.Controller);
			DukeApp.utils.loadCommonViews();

			var classPromise = DukeApp.request("all:class:entities"),
				teacherAccountPromise = DukeApp.utils.getCurrentTeacherAccount();

			$.when(classPromise, teacherAccountPromise).done(function(cResults, tAccount) {
				var enrolledClasses = tAccount.get('classes'),
					enrolledClassObjects = [];

				_.each(cResults, function(obj){
					if (_.contains(enrolledClasses, obj.index)){
						enrolledClassObjects.push(obj);
					}
				});

				Teacher.Controller.data = {};
				Teacher.Controller.data.classes = enrolledClassObjects;
				

				that.loadDisplay(cResults);
			});
		},

		loadDisplay:function(classResults) {
			var layout = new Teacher.LayoutView();
			Teacher.Controller.layout = layout;

			DukeApp.content.show(layout);
			layout.header.show(DukeApp.commonViews.header);			
			DukeApp.commonViews.header.setUserName(DukeApp.utils.getCurrentUsername());
			
			this.handleMenuClick("schedule");

			layout.on("teacherView:clickLink", this.handleMenuClick);
			layout.on("teacherView:changeScheduleCombo", this.handleChangeScheduleClass);
			layout.on("teacherView:changeScheduleCheckbox", this.handleChangeScheduleDay);
			
		},

		handleMenuClick:function(type) {
			var contentViewMap = {
					"class": Teacher.EditClassView,
					"students": Teacher.EditStudentView,
					"schedule": Teacher.EditScheduleView
				},

				layout = Teacher.Controller.layout,
				TeacherModelTable = Backbone.Model.extend({}),
				teacherModel = new TeacherModelTable(Teacher.Controller.data),
				contentView = new contentViewMap[type]({
					model:teacherModel
				});

			
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
		},

		handleChangeScheduleClass:function(classIdx) {
			var classPromise = DukeApp.request("class:entities", classIdx).done(function(cResult){

				var layout = Teacher.Controller.layout,
				classView = new Teacher.EditScheduleClassView({
					model:cResult
				});

				$("#grading").show();
				layout.grading.show(classView);
			});
		},

		handleChangeScheduleDay:function(obj) {
			var classPromise = DukeApp.request("set:scheduleDay:class:entities", obj).done(function(status){
				console.log("updated");
			});
		},
			
	};
});