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
					journalObjectPromise = DukeApp.request("journals:entities", {id:DukeApp.utils.getCurrentUser().id, classId:currentClass}),
					assignmentObjectPromise = DukeApp.request("assignments:entities", {id:DukeApp.utils.getCurrentUser().id, classId:currentClass}),
					quizObjectPromise = DukeApp.request("quizes:entities", {id:DukeApp.utils.getCurrentUser().id, classId:currentClass}),
					eventLogPromise = DukeApp.request("eventLogs:entities", {studentId:DukeApp.utils.getCurrentUserID(), classIndex:currentClass, eventType:"attribute"});

				//load all student related data objects for display
				$.when(studentObjectPromise, journalObjectPromise, assignmentObjectPromise, quizObjectPromise, eventLogPromise).done(function(studentObject, journals, assignments, quizes, eventLogs) {
					studentObject.journals = journals;
					studentObject.assignments = assignments;
					studentObject.quizes = quizes;
					studentObject.attributeEvents = eventLogs;

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

			Student.Controller.studentObject = studentObject;

			DukeApp.content.show(layout);
			layout.header.show(header);

			layout.sidebar.show(sidebar);
			layout.content.show(content);

			DukeApp.commonViews.header.setUserName(DukeApp.utils.getCurrentUsername());

			sidebar.init();

			//load indivisual profile items
			this.loadJournals(studentObject.journals);
			this.loadGrades(studentObject.assignments, studentObject.quizes, studentObject.attributeEvents);

			Student.Controller.layout = layout;
			Student.Controller.sidebar = sidebar;
			Student.Controller.content = content;

			this.scrollToFrame({linkId:0});
			
			sidebar.on("studentProfile:scrollto", Student.Controller.scrollToFrame);

			content.on("studentProfile:showAssignment", Student.Controller.handleAssignmentModal);
			content.on("studentProfile:setActiveLink", Student.Controller.setActiveLink);
			content.on("studentProfile:setMB", Student.Controller.handleMBChange);
			content.on("studentProfile:setAvatar", Student.Controller.handleAvatarChange);
		},

		handleMBChange:function(mb){
			
			DukeApp.request("edit:user:student:entities", {mb:mb, studentIndex:Student.Controller.studentObject.index}).done(function(){
				location.reload();
			});
		},

		handleAvatarChange:function(avatarIdx){
			DukeApp.request("edit:user:student:entities", {profileImage:avatarIdx, studentIndex:Student.Controller.studentObject.index}).done(function(){
				location.reload();
			});
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
		
		getAttrWeekTotals:function(attrEventsList){
			var attrWeekTotals = {};

			_.each(attrEventsList, function(objList, weekIdx){
				attrWeekTotals[weekIdx] = {};
				var attr = {};
				_.each(objList, function(eventObj){
					_.each(eventObj.data.attributes, function(attrValue) {
						if (attrValue in attrWeekTotals[weekIdx]) {
							attr[attrValue] ++;
							attrWeekTotals[weekIdx][attrValue] ++;
						} else {
							attr[attrValue] = 1;
							attrWeekTotals[weekIdx][attrValue] = 1;
						}
					});
				});

				attrWeekTotals[weekIdx] = {};
				attrWeekTotals[weekIdx].attr = attr;
				attrWeekTotals[weekIdx].type = "attributes";
			});

			return(attrWeekTotals);
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
		loadGrades:function(assignments, quizes, attrEvents){
			var that = this,
				assignmentPromises = [],
				quizPromises = [],
				assignmentComplete = $.Deferred(),
				gradeComplete = $.Deferred(),
				attributeEventComplete = $.Deferred();
				gradeList = {};

	      	//then attributes
	      	if (attrEvents && attrEvents.length > 0){
	      		this.getFrameReferences(attrEvents).done(function(frames) {
	      			var attrEventsList = {};
	      			attrEventsList = that.createWeekList(attrEvents, frames, {}, "attributeEvent");

	      			var weekTotals = that.getAttrWeekTotals(attrEventsList);
	      			attributeEventComplete.resolve(weekTotals);
	      			
	      		});
	      	} else {
	      		attributeEventComplete.resolve();
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

  			$.when(gradeComplete, attributeEventComplete).done(function(quizList, attrEventList){
  			//create a week list of both after processing

	  			_.each([quizList, attrEventList], function(list) {
	  				_.each(list, function(obj, key) {
	  					if (!gradeList[key]) {
	  						gradeList[key] = obj;
	  					} else {
	  						gradeList[key].push(obj);
	  					}
	  				});
  				});

	  			_.each(gradeList, function(obj, key){
	  				if(!_.isArray(obj)) {
	  					gradeList[key] = [obj];
	  				}
	  			});

	        	var minWeek = _.min(_.keys(gradeList));
	        	Student.Controller.gradeList = gradeList;
	        	Student.Controller.currentGradeWeekIndex = Number(minWeek);

	        	var contentView = Student.Controller.content;
	        	
	        	that.displayProgress();
	        	that.displayOverall();
  			});
		},

		displayGrades:function() {
			var curWeek = Student.Controller.currentGradeWeekIndex,
				currentGrades = Student.Controller.gradeList[curWeek],
				currentAssignments = _.where(currentGrades, {type:"assignment"}),
				currentQuizes = _.where(currentGrades, {type:"quiz"});
				currentQuizes = this.getGrades(currentQuizes);

		},

		displayProgress:function() {
			var curWeek = Student.Controller.currentGradeWeekIndex,
				currentGrades = Student.Controller.gradeList[curWeek],
				currentQuizes = _.where(currentGrades, {type:"quiz"}),
				currentAttrs = _.where(currentGrades, {type:"attributes"});
				
			currentQuizes = this.getGrades(currentQuizes);


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
	      
	      	//then attributes
			if (_.isEmpty(currentAttrs)){
	        	$("#attributes").html("<p class='heading'>Attributes</p> <p class='heading'>You have no attribute saved for this week.</p>");
	      	} else {
	      		//so I need to make a new array of stuff now...
	      		var attrList = [];
	      		_.each(currentAttrs[0].attr, function(amount, idx){
	      			var obj = {};
	      			obj.name = 		DukeApp.utils.Attributes[idx].name;
	      			obj.amount = 	amount;
	      			obj.total = 	DukeApp.utils.AttributeTotals[idx].week[curWeek];

	      			attrList.push(obj);
	      		});
	      		
	        	var AttributeModel = Backbone.Model.extend({}),
	          		AttributeCollection = Backbone.Collection.extend({
	            		model:AttributeModel
	          		}),
	          		attributes = new AttributeCollection(attrList);

	        	var attrListView = new Student.AttributesListView({
	          		collection:attributes
	        	});
	        
	        	attrListView.render();
	        	$("#attributes").html(attrListView.el);
	      	}

		},

		displayOverall:function() {

			var gradeList = Student.Controller.gradeList,
				quizOverall = [],
				attrOverall = [],
				attrTotal = 0;

			//so let's loop through each week
			_.each(gradeList, function(week, idx){
				//then loop through each object, depositing it in the correct bin
				attrTotal += DukeApp.utils.AttributeWeekTotals[idx];

				_.each(week, function(obj){
					switch(obj.type) {
						case("quiz"):
							quizOverall.push(obj);
							break;
						case("attributes"):
							attrOverall.push(obj);
							break;
					}
				});
			});


			//make sure all quizes are graded
			var currentQuizes = this.getGrades(quizOverall);
			var quizSum = 0, quizAvg;

			_.each(quizOverall, function(obj) {		
				quizSum += obj.grade;
			});

			quizAvg = Math.round(quizSum/currentQuizes.length);
			$(".grade_label .number").html(quizAvg + "%");

			//make sure all quizes are graded
			var attrSum = 0, attrAvg;

			_.each(attrOverall, function(obj){
				_.each(obj.attr, function(a) {
					attrSum += a;
				});
			});

			attrAvg = Math.round(attrSum/attrTotal*100);
			$(".attr_label .number").html(attrAvg + "%");

			//now what about that bar graph... how about out of all weeks
			//how many are open?

			DukeApp.request("classByIndex:entities", Student.Controller.currentClass).done(function(c){
				totalClasses = c.scheduling.length;
				classesTouched = _.keys(gradeList).length;
				progressAmt = Math.round(classesTouched/totalClasses *100);
				$("#weekProgress").css('width', progressAmt+'%').attr('aria-valuenow', progressAmt); 
			});
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