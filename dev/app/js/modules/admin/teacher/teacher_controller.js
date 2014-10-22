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
			
			Teacher.Controller.classes = classResults;
			//this.handleMenuClick("schedule");
			this.handleMenuClick("class");

			layout.on("teacherView:clickLink", this.handleMenuClick);
			layout.on("teacherView:changeScheduleCombo", this.handleChangeScheduleClass);
			layout.on("teacherView:changeScheduleCheckbox", this.handleChangeScheduleDay);

			layout.on("teacherView:showStudentDetails", this.showStudentDetails);

			layout.on("teacherView:changeClassEditCombo", this.handleChangeEditClass);
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

		handleChangeEditClass :function(classIdx) {
			var curClass = _.where(Teacher.Controller.classes, {index:classIdx})[0],
				lastViewedPromise = DukeApp.request("get:lastViewed:class:entities", {classIndex:classIdx}),
				studentPromise = DukeApp.request("all:user:studentModel:entities", {classes:classIdx}),
				that = this;

			curClass.numStudents = curClass.students.length;
			$.when(lastViewedPromise, studentPromise).done(function(lastViewedResult, studentResult){
				var studentDetailPromises = [];

				curClass.lastViewed = ((lastViewedResult.status)?lastViewedResult.data:"not viewed");
				curClass.students = studentResult;

				_.each(studentResult, function(s) {
					studentDetailPromises.push(Teacher.Controller.getStudentDetails(s, classIdx));
				});
				
				$.when.apply($, studentDetailPromises).done(function() {
					results = arguments;


					_.each(results, function(obj, idx) {
						console.log(obj);
						curClass.students[idx].quizTotal = obj.quizTotal;
						curClass.students[idx].quizComplete = obj.quizComplete;
						curClass.students[idx].badgeTotal = obj.badgeTotal;
						curClass.students[idx].badgeComplete = obj.badgeComplete;
						curClass.students[idx].attrPercentage = obj.attrPercentage;
					});

					

					var results = arguments,
						layout = Teacher.Controller.layout,
						ClassModel = Backbone.Model.extend({}),
						cModel = new ClassModel(curClass);
					classView = new Teacher.EditClassSingleView({
						model:cModel
					});

					$("#grading").show();
					layout.grading.show(classView);	
				});

			});
		},

		handleChangeScheduleDay:function(obj) {
			var classPromise = DukeApp.request("set:scheduleDay:class:entities", obj).done(function(status){
				console.log("updated");
			});
		},
		
		getStudentDetails:function(student, classIdx) {
			var def = $.Deferred();

			var quizPromise = DukeApp.request("quizes:entities", {id:student.userId, classId:classIdx});

			$.when(quizPromise).done(function(q){
				//quizes
				var quizComplete = 	q.length,
					quizTotal = DukeApp.utils.QuizTotals,
					attrTotal = 0,
					attributes = student.attributes;

				//attributes
				_.each(attributes, function(val){
					attrTotal += val;
				});


				var attrPercentage = Math.round(attrTotal/DukeApp.utils.AttributeTotal*100);
				
				//badges
				var numBadges = 0, 
					totalBadges = 12;

				_.each(_.range(totalBadges), function(idx){
					if (idx < 10) {
						numBadges += ((attributes[idx]/DukeApp.utils.AttributeTotals[idx].week.total) > 0.9)?1:0;
					} else if (idx === 10) {
						numBadges += ((quizComplete/DukeApp.utils.QuizTotals) > 0.9)?1:0;
					} else if (idx === 11) {
						numBadges += ((attrTotal/DukeApp.utils.AttributeTotal) > 0.9)?1:0;
					}
				});

				def.resolve({status:true, quizComplete:quizComplete, quizTotal:quizTotal, attrPercentage:attrPercentage, badgeComplete:numBadges, badgeTotal:totalBadges});

			});

			return(def.promise());
		}
	};
});