DukeApp.module("Profile.Student", function(Student, DukeApp, Backbone, Marionette, $, _){
	Student.Controller = {
		init:function() {
			var that = this;

			//get student Account
			var studentObjectPromise = DukeApp.request("user:studentObject:entities"),
				journalObjectPromise = DukeApp.request("journals:entities", DukeApp.utils.getCurrentUser().id);

			$.when(studentObjectPromise, journalObjectPromise).done(function(studentObject, journals) {
				studentObject.journals = journals;

				that.loadDisplay(studentObject);
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
				{index:4, type:"grades", 		name:"grades", 			glyph:"file", userData: studentObject},
				{index:5, type:"journals", 		name:"journals", 		glyph:"wallet", userData: studentObject}
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

			sidebar.init();

			//load indivisual profile items
			this.loadJournals(studentObject.journals);

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

  		loadJournals:function(journals){
  			var that = this,
  				currentJournal = 0,
  				currentWeek = 0,
  				journalPromises = [];

  			if (!journals || journals.length === 0)
  				return;

  			//grab all the frame referenced within this users journals
  			_.map(journals, function(obj, idx){
  				journalPromises.push(DukeApp.request("frameById:entities", obj.frameID));
  			});

  			$.when.apply($, journalPromises).then(function(){
  				//when retieved, order all journals by week for easy scrolling
  				var weekItems = arguments,
  					journalList = {},
  					contentView = Student.Controller.content;

  				_.map(journals, function(obj, idx) {
  					if (!journalList[weekItems[idx].week]) {
  						journalList[weekItems[idx].week] = [];
  					}

  					obj.heading = weekItems[idx].content.heading;
  					obj.instructions = weekItems[idx].content.instructions;
  					journalList[weekItems[idx].week].push(obj);
  				 });

  				var minWeek = _.min(_.keys(journalList));
  				Student.Controller.journalList = journalList;
	  			Student.Controller.currentWeekIndex = Number(minWeek);
  				Student.Controller.currentJournalIndex = 0;
  				Student.Controller.maxJournalIndex = journalList[Student.Controller.currentWeekIndex].length;

  				//set and init week index
  				contentView.setWeekIndex(Student.Controller.currentWeekIndex);

  				//set and init journal index
  				contentView.setJournalIndex(Student.Controller.currentJournalIndex, Student.Controller.maxJournalIndex);

  				//display current journal
				contentView.showJournal(Student.Controller.journalList[Student.Controller.currentWeekIndex][Student.Controller.currentJournalIndex]);

				contentView.on("studentProfile:incrementJournal", Student.Controller.incrementJournal);
				contentView.on("studentProfile:incrementWeek", that.incrementWeek);
  			});
  		},

  		getMinWeek:function() {
  			return(_.min(_.keys(Student.Controller.journalList)));
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
  			contentView.showJournal(Student.Controller.journalList[Student.Controller.currentWeekIndex][Student.Controller.currentJournalIndex]);
  		},

  		incrementWeek:function(direction) {
  			var contentView = Student.Controller.content,
  				weeks = _.map(_.keys(Student.Controller.journalList), function(s){return(Number(s));}).sort(),
  				index = weeks.indexOf(Student.Controller.currentWeekIndex);

			if (direction === "right"){
				index ++;
				Student.Controller.currentJournalIndex = 0;
			} else if (direction === "left") {
				index --;
				Student.Controller.currentJournalIndex = 0;	
			}

			if (index > weeks.length -1) {
				index = 0;
			} else if (index < 0) {
				index = weeks.length-1;
			}

  			
  			Student.Controller.currentWeekIndex = weeks[index];
  			Student.Controller.maxJournalIndex = Student.Controller.journalList[Student.Controller.currentWeekIndex].length;

  			contentView.setWeekIndex(Student.Controller.currentWeekIndex);
  			contentView.setJournalIndex(Student.Controller.currentJournalIndex, Student.Controller.maxJournalIndex);
  			contentView.showJournal(Student.Controller.journalList[Student.Controller.currentWeekIndex][Student.Controller.currentJournalIndex]);	
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