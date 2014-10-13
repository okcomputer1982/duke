DukeApp.module("Admin.Teacher", function(Teacher, DukeApp, Backbone, Marionette, $, _){
	Teacher.LayoutView = Marionette.Layout.extend({
		template:templates['admin/teacher/layout'],
		regions: {
			header: "#header",
			content:"#content",
			grading:"#grading"
		},
		events:{
			"click .nav-link":"handleMenuLinks"
		},

		handleMenuLinks:function(e) {
			var linkType = e.currentTarget.getAttribute("data-link");
			this.trigger("teacherView:clickLink", linkType);
		}
	});

	Teacher.EditStudentView = Marionette.Layout.extend({
		template:templates['admin/teacher/editStudent'],
		regions: {
			grading: "#grading"
		},
		events:{
			"click .grade-link":"handleGradeLinks"
		},
		handleGradeLinks:function(e){
			var linkType = e.currentTarget.getAttribute("data-link");
			this.trigger("teacherView:clickGradeLink", linkType);
		}
	});

	Teacher.EditClassView = Marionette.Layout.extend({
		template:templates['admin/teacher/editClass']
	});

	Teacher.EditScheduleView = Marionette.Layout.extend({
		template:templates['admin/teacher/editSchedule'],
		regions: {
			classContainer: "#class"
		},
		events:{
			'change #classCombo': "handleClassCombo"
		},

		handleClassCombo:function(e){
			var classVal = Number($(e.currentTarget).val());
			Teacher.Controller.layout.trigger("teacherView:changeScheduleCombo", classVal);
		}
	});

	Teacher.EditScheduleClassView = Marionette.ItemView.extend({
		template:templates['admin/teacher/editScheduleClass'],
		events:{
			"click .scheduleCheckbox": "handleScheduleClick"
		},

		handleScheduleClick:function(e) {
			var target = $(e.currentTarget),
				classIdx = Number($("#classCombo").val()),
				index = Number(target.attr("data-index")),
				status = (target.is(":checked") === true);

			Teacher.Controller.layout.trigger("teacherView:changeScheduleCheckbox", {classIdx:classIdx, dayIdx:index, status:status});
		}
	});

	Teacher.GradeJournalView = Marionette.ItemView.extend({
		template:templates['admin/teacher/gradeJournals']
	});

	Teacher.GradeAssignmentView = Marionette.ItemView.extend({
		template:templates['admin/teacher/gradeAssignments'],
	});

	Teacher.GradeQuizesView = Marionette.ItemView.extend({
		template:templates['admin/teacher/gradeQuizes'],
	});
});