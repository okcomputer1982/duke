DukeApp.module("Profile.Student", function(Student, DukeApp, Backbone, Marionette, $, _){
	Student.Controller = {
		init:function() {
			var that = this;

			DukeApp.utils.getCurrentAccount().done(function(obj){
				var currentClass;

				if (DukeApp.utils.isGuest()) {
					currentClass = obj.get("class");
				} else {
					currentClass = obj.get('currentClass');
				}

				Student.Controller.currentClass = currentClass;

				//get student Account
				var studentObjectPromise = DukeApp.request("user:studentObject:entities"),
					journalObjectPromise = DukeApp.request("journals:entities", DukeApp.utils.getCurrentUser().id),
					assignmentObjectPromise = DukeApp.request("assignments:entities", DukeApp.utils.getCurrentUser().id),
					quizObjectPromise = DukeApp.request("quizes:entities", DukeApp.utils.getCurrentUser().id);

				//load all student related data objects for display
				$.when(studentObjectPromise, journalObjectPromise, assignmentObjectPromise, quizObjectPromise).done(function(studentObject, journals, assignments, quizes) {
					studentObject.journals = journals;
					studentObject.assignments = assignments;
					studentObject.quizes = quizes;

					that.loadDisplay(studentObject);
				});
			});
		},

		loadDisplay:function(studentObject) {
			DukeApp.utils.setCurrentView("student-profile-view", Student.Controller);
			DukeApp.utils.loadCommonViews();

			var ProfileItem = Backbone.Model.extend({});
			var ProfileCollection = Backbone.Collection.extend({
				model: ProfileItem
			});

			var profileItems = new ProfileCollection([
				{index:0, type:"profile", 		name:"basic info", 		glyph:"profile", userData: studentObject},
				{index:1, type:"progress", 		name:"progress", 		glyph:"chart2", userData: studentObject},
				{index:2, type:"badge", 		name:"badges", 			glyph:"badge2", userData: studentObject},
				{index:3, type:"attribute", 	name:"attributes", 		glyph:"badge2", userData: studentObject},
				{index:4, type:"journals", 		name:"journals", 		glyph:"wallet", userData: studentObject}
			]);

			var layout = new Student.LayoutView();
			var header = DukeApp.commonViews.header;
			var sidebar = new Student.SidebarListView({
				collection:profileItems
			});

			var content = new Student.ContentListView({
				collection:profileItems,
			});

			DukeApp.content.show(layout);
			layout.header.show(header);

			layout.sidebar.show(sidebar);
			layout.content.show(content);

			DukeApp.commonViews.header.setUserName(DukeApp.utils.getCurrentUsername());

			sidebar.init();

			//load indivisual profile items
			this.loadJournals(studentObject.journals);
			this.loadGrades(studentObject.assignments, studentObject.quizes);

			Student.Controller.layout = layout;
			Student.Controller.sidebar = sidebar;
			Student.Controller.content = content;

			this.scrollToFrame({linkId:0});
			
			sidebar.on("studentProfile:scrollto", Student.Controller.scrollToFrame);

			content.on("studentProfile:showAssignment", Student.Controller.handleAssignmentModal);
			content.on("studentProfile:setActiveLink", Student.Controller.setActiveLink);
		},

		scrollToFrame:function(obj){
			Student.Controller.sidebar.setActiveFrame(obj.linkId);
			Student.Controller.content.scrollToFrame(obj.linkId);
		},

		setActiveLink:function(obj){
 			Student.Controller.sidebar.setActiveFrame(obj.linkId);
		},

		//***************Frame Helper functions***************//
		getFrameReferences:function(itemList) {
			//must get a list of items that includes frameID that refers to the Frame Table
			var def = $.Deferred(),
				framePromises = [];

			_.map(itemList, function(obj, idx){
				framePromises.push(DukeApp.request("frameByIndex:entities", obj.frameIndex));
			});

			$.when.apply($, framePromises).then(function(){
				var frames = arguments;
				def.resolve(frames);
			});

			return(def.promise());
		},

		createWeekList:function(itemList, frameList, objectItemMap, type) {
			var weekList = {};

			_.each(itemList, function(obj, idx) {
				var that = this;

				obj.type = type;

				if (!weekList[frameList[idx].week]){
					weekList[frameList[idx].week] = [];
				}

				_.each(objectItemMap, function(mapObj, key){
					if (frameList[idx].content[mapObj]) {
						obj[key] = frameList[idx].content[mapObj];
					}
				});

				weekList[frameList[idx].week].push(obj);
			});

			return(weekList);
		},

		getMinWeek:function(list) {
			return(_.min(_.keys(list)));
		},

		getGrades:function(quizes) {
			_.each(quizes, function(obj, idx){
				var responses = obj.response,
					questions = obj.questions,
					correct = 0;
					total = responses.length;

				_.each(questions, function(obj, idx){
					if (obj.correct === responses[idx]) {
						correct += 1;
					}
				});

				obj.grade = Math.round(correct/total*100);
			});

			return(quizes);
		},

		//***************Journal Frame***************//
		loadJournals:function(journals){
			var that = this,
				journalPromises = [];

			if (!journals || journals.length === 0)
				return;

			this.getFrameReferences(journals).done(function(frames) {
				var journalList = {},
					contentView = Student.Controller.content;

				journalList = that.createWeekList(journals, frames, {heading:"heading", instructions:"instructions"}, "journal");

				var minWeek = that.getMinWeek(journalList);

				Student.Controller.journalList = journalList;
  				Student.Controller.currentJournalIndex = 0;
  				Student.Controller.currentJournalWeekIndex = Number(minWeek);
				Student.Controller.maxJournalIndex = journalList[Student.Controller.currentJournalWeekIndex].length;

				//set and init week index
				contentView.setWeekIndex(Student.Controller.currentJournalWeekIndex, "journals");

				//set and init journal index
				contentView.setJournalIndex(Student.Controller.currentJournalIndex, Student.Controller.maxJournalIndex);

				//display current journal
				contentView.showJournal(Student.Controller.journalList[Student.Controller.currentJournalWeekIndex][Student.Controller.currentJournalIndex]);

				contentView.on("studentProfile:incrementJournal", Student.Controller.incrementJournal);
				contentView.on("studentProfile:incrementWeek", that.incrementWeek);
			});
		},

		incrementJournal:function(direction) {
			var contentView = Student.Controller.content;
		
			if (direction === "right") {
				Student.Controller.currentJournalIndex ++;
			} else if (direction === "left") {
				Student.Controller.currentJournalIndex --;
			}

			if (Student.Controller.currentJournalIndex > Student.Controller.maxJournalIndex-1) {
				Student.Controller.currentJournalIndex = 0;
			} else if (Student.Controller.currentJournalIndex < 0) {
				Student.Controller.currentJournalIndex = Student.Controller.maxJournalIndex-1;
			}

			contentView.setJournalIndex(Student.Controller.currentJournalIndex, Student.Controller.maxJournalIndex);
			contentView.showJournal(Student.Controller.journalList[Student.Controller.currentJournalWeekIndex][Student.Controller.currentJournalIndex]);
		},

		incrementWeek:function(direction, type) {
			var contentView = Student.Controller.content,
				that = this,
				weeks = _.map(_.keys((type==="journals")?Student.Controller.journalList:Student.Controller.gradeList), function(s){return(Number(s));}).sort(),
				index = weeks.indexOf((type==="journals")?Student.Controller.currentJournalWeekIndex:Student.Controller.currentGradeWeekIndex);

		
			if (direction === "right") {
				index ++;
				if (type === "journals") 
					Student.Controller.currentJournalIndex = 0;
			} else if (direction === "left") {
				index --;
				if (type === "journals") 
					Student.Controller.currentJournalIndex = 0;	
			}

			if (index > weeks.length -1) {
				index = 0;
			} else if (index < 0) {
				index = weeks.length-1;
			}

			switch (type){
				case("journals"):
						Student.Controller.currentJournalWeekIndex = weeks[index];
						Student.Controller.maxJournalIndex = Student.Controller.journalList[Student.Controller.currentJournalWeekIndex].length;

						contentView.setWeekIndex(Student.Controller.currentJournalWeekIndex, type);
						contentView.setJournalIndex(Student.Controller.currentJournalIndex, Student.Controller.maxJournalIndex);
						contentView.showJournal(Student.Controller.journalList[Student.Controller.currentJournalWeekIndex][Student.Controller.currentJournalIndex]);
						break;
					case("grades"):
						Student.Controller.currentGradeWeekIndex = weeks[index];
						contentView.setWeekIndex(Student.Controller.currentGradeWeekIndex, type);
						Student.Controller.displayGrades();
						break;
					case("progress"):
						Student.Controller.currentGradeWeekIndex = weeks[index];
						contentView.setWeekIndex(Student.Controller.currentGradeWeekIndex, type);
						Student.Controller.displayProgress();
						break;
			}
		},

		//***************Grade Frame***************//
		loadGrades:function(assignments, quizes){
			var that = this,
				assignmentPromises = [],
				quizPromises = [],
				assignmentComplete = $.Deferred(),
				gradeComplete = $.Deferred(),
				gradeList = {};
      
	  		//let's do assignments first
	  		if (assignments && assignments.length > 0) {
				//grab all the frame referenced within this users journals
	  			this.getFrameReferences(assignments).done(function(frames) {
	  				var assignmentList = {},
	  					contentView = Student.Controller.content;

	  				assignmentList = that.createWeekList(assignments, frames, {heading:"instructionHeader", instructions:"instructionList", title:"subHeading"}, "assignment");
	  				assignmentComplete.resolve(assignmentList);
	  			});
	  		} else {
				assignmentComplete.resolve();
	      	}

	  		//then quizes
	  		if (quizes && quizes.length > 0) {
	  			this.getFrameReferences(quizes).done(function(frames) {
	  				var quizList = {},
	  					contentView = Student.Controller.content;

	  				quizList = that.createWeekList(quizes, frames, {title:"title", questions:"questions"}, "quiz");
	  				gradeComplete.resolve(quizList);
	  			});
	  		} else {
	          gradeComplete.resolve();
	      	}

  			$.when(assignmentComplete, gradeComplete).done(function(assignmentList, quizList){
  			//create a week list of both after processing

	  			_.each([assignmentList, quizList], function(list) {
	  				_.each(list, function(obj, key) {
	  					if (!gradeList[key]) {
	  						gradeList[key] = obj;
	  					} else {
	  						gradeList[key] = _.union(obj, gradeList[key]);
	  					}
	  				});
  				});

	        	var minWeek = _.min(_.keys(gradeList));
	        	Student.Controller.gradeList = gradeList;
	        	Student.Controller.currentGradeWeekIndex = Number(minWeek);

	        	var contentView = Student.Controller.content;
	        	that.displayGrades();
  			});
		},

		displayGrades:function() {
			var curWeek = Student.Controller.currentGradeWeekIndex,
				currentGrades = Student.Controller.gradeList[curWeek],
				currentAssignments = _.where(currentGrades, {type:"assignment"}),
				currentQuizes = _.where(currentGrades, {type:"quiz"});
				currentQuizes = this.getGrades(currentQuizes);

			//so assignments first
	      	if (_.isEmpty(currentAssignments)) {
	        	$("#assignments").html("<p class='heading'>Assignments</p> <p class='heading'>You have no assignments saved for this week.</p>");
	      	} else {
	        	var AssignmentModel = Backbone.Model.extend({}),
	          		AssignmentCollection = Backbone.Collection.extend({
	            		model:AssignmentModel
	          		}),
	          		assignments = new AssignmentCollection(currentAssignments);

	        	var aListView = new Student.GradesAssignmentListView({
	          		collection:assignments
	        	});

	        	aListView.render();
	        	$("#assignments").html(aListView.el);
	        	$(".feedback_button").popover();
	      	}
				
			//then quizes
	      	if (_.isEmpty(currentQuizes)){
	        	$("#quizes").html("<p class='heading'>Quizes</p> <p class='heading'>You have no quizes saved for this week.</p>");
	      	} else {
	        	var QuizModel = Backbone.Model.extend({}),
	          		QuizCollection = Backbone.Collection.extend({
	            		model:QuizModel
	          		}),
	          		quizes = new QuizCollection(currentQuizes);

	        	var qListView = new Student.GradesQuizListView({
	          		collection:quizes
	        	});
	        
	        	qListView.render();
	        	$("#quizes").html(qListView.el);
	      }
		},

		displayProgress:function() {
			console.log("display Progress");
		},

		toggleHelp:function() {
			$("#welcome-window").slideToggle();
		},

		handleAssignmentModal:function(data) {
			var assignModal = new Student.AssignmentModalView();
			var layout = Student.Controller.layout;
			layout.assignmentModal.show(assignModal);

			$("#assignment_modal").modal({
	    		backdrop: "static",
	    		show:true
	    	});
		}
	};
});