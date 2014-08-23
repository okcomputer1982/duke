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

			Student.Controller.layout = layout;
			Student.Controller.sidebar = sidebar;
			Student.Controller.content = content;

			this.scrollToFrame({linkId:0});
			
			sidebar.on("studentProfile:scrollto", Student.Controller.scrollToFrame);

			content.on("studentProfile:showAssignment", Student.Controller.handleAssignmentModal);
			content.on("studentProfile:setActiveLink", Student.Controller.setActiveLink);
			content.con("studentProfile:getJournal", StudentController.getJournal);
		},

		scrollToFrame:function(obj){
			Student.Controller.sidebar.setActiveFrame(obj.linkId);
			Student.Controller.content.scrollToFrame(obj.linkId);
		},

		setActiveLink:function(obj){
 			Student.Controller.sidebar.setActiveFrame(obj.linkId);
  		},

  		getJournal:function(){
  			var currentJournal = ;
  				currentWeek = 0;

  			//lets say this is a one time thing...caches the current list of journals in the form of
  				//week
  					//journal 1, journal 2, journal 3
  			//and it also sets the current WeekIndex to the lowest week of all saved journals
  			//sets the display of weeks to this value (call to the view)
  			//the of scrollable journals to 1/max journals for this week (call to the view)
  			//and displays the journal for week 1, journal 1 (call to view)

  			//all other calls grab these values and increment from the interface
  			//will probally need to set those event handler here as well
  			
  			Student.Controller.currentWeekIndex = currentWeek;
  			Student.Controller.currentJournalIndex = currentIndex;
  		}

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