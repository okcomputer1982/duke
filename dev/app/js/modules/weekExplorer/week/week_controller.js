DukeApp.module("WeekExplorer.Week", function(Week, DukeApp, Backbone, Marionette, $, _) {
	Week.Controller = {
		init:function(id) {
			var that = this;
			
			DukeApp.utils.getCurrentAccount().done(function(obj){
				var currentClass;

				if (DukeApp.utils.isGuest()) {
					currentClass = obj.get("class");
				} else {
					currentClass = obj.get('currentClass');
				}

				Week.Controller.currentClass = currentClass;

				var classPromise = DukeApp.request("class:entities", currentClass),
					weeksPromise = DukeApp.request("week:entities");

				$.when(classPromise, weeksPromise).done(function(cResults, wResults){
					that.loadDisplay(cResults, wResults, id);
				});
			});

		},

		loadDisplay:function(classResults, weekResults, weekId) {
			DukeApp.utils.setCurrentView("week-view", Week.Controller);
			DukeApp.utils.loadCommonViews();

			Week.Controller.curweek = weekId;
			Week.Controller.weeks = weekResults;
			Week.Controller.curclass = classResults;
			Week.Controller.currentFrame = 0;

			//initalize views
			var weekView = new Week.WeekLayoutView(),
				top = new Week.TopView({
					model: Week.Controller.curclass
				}),
				content = new Week.ContentListView(),
				sidebar = new Week.SidebarListView();


			//show views
			DukeApp.content.show(weekView);
			weekView.header.show(DukeApp.commonViews.header);
			weekView.top.show(top);
			DukeApp.commonViews.header.setUserName(DukeApp.utils.getCurrentUsername());
			
			top.init();
			
			//may need to get cleaned up on destruction
			//there is a better way to do this
			Week.Controller.views = {
				weekView:weekView,
				sidebar:sidebar,
				content:content,
				top:top
			};

			this.refreshWeek(Week.Controller.curclass.get('template').weeks[Week.Controller.curweek]);

			//set events
			top.on("weekView:loadWeek", Week.Controller.setWeekContent);
		},
		
		refreshWeek:function(id) {
			var that = this;

			if (id < 0 || id >= Week.Controller.curclass.get('template').weeks.length)
				return;

			Week.Controller.curweek = id;
			DukeApp.trigger("weekExplorer:week", id+1);

			var views = Week.Controller.views,
				weeks = Week.Controller.weeks;

			var frameIndex = weeks.at(id).get("id"),
				framesPromise = DukeApp.request("frameByWeek:entities", frameIndex);

			framesPromise.done(function(frames) {
				
				views.content = new Week.ContentListView({
					collection:frames
				});

				views.sidebar = new Week.SidebarListView({
					collection:frames
				});

				Week.Controller.frames = frames;

				views.weekView.content.show(views.content);
				views.weekView.sidebar.show(views.sidebar);
				views.sidebar.init(id);
				views.top.setWeekLink(id);

				that.scrollToFrame({linkId:0});

				views.sidebar.on("weekView:scrollto", Week.Controller.scrollToFrame);
				views.sidebar.on("weekView:loadWeek", Week.Controller.setWeekContent);

				views.content.on("weekView:scrollto", Week.Controller.scrollToFrame);
				views.content.on("weekView:setActiveLink", Week.Controller.setActiveLink);
				views.content.on("weekView:loadComic", Week.Controller.setComic);
				views.content.on("weekView:loadGame", Week.Controller.setGame);
				views.content.on("weekView:saveJournal", Week.Controller.saveJournal);
				views.content.on("weekView:saveAssignment", Week.Controller.saveAssignment);
				views.content.on("weekView:saveQuiz", Week.Controller.saveQuiz);

				views.content.on("weekView:logFrameEvent", Week.Controller.saveFrameEvent);
				views.content.on("weekView:logAttributeEvent", Week.Controller.saveAttributeEvent);
			});
		},

		scrollToFrame:function(obj){
			Week.Controller.views.content.scrollToFrame(obj.linkId);
			Week.Controller.setActiveLink(obj);
		},

		setWeekContent:function(obj){
			Week.Controller.refreshWeek(obj.weekId);
		},

		setActiveLink:function(obj){
			var views = Week.Controller.views;
 				
 			if (Week.Controller.currentFrame !== obj.linkId) {				
				views.sidebar.setActiveFrame(obj.linkId);

				//sends visitation event if active
				Week.Controller.currentFrame = obj.linkId;
				
 				Week.Controller.saveFrameEvent({id:Week.Controller.currentFrame, status:"visited", allowRepeat:false});
 				
 				var cframe = Week.Controller.frames.models[obj.linkId];

 				if(cframe.get('template').attrTarget === "visit") {
 					Week.Controller.saveAttributeEvent({id:Week.Controller.currentFrame, status:"added"});
 				}
			}
  		},

  		setComic:function(options) {
  			DukeApp.Comic.Show.Controller.init(options);
  		},

  		setGame:function(options) {
  			DukeApp.Game.Show.Controller.init(options);
  		},

  		saveJournal:function(options) {
  			if (DukeApp.utils.isGuest()) {
  				alert("Sorry, can't save journals as a guest.");
				return;
  			}

  			var frameIndex = Week.Controller.getFrameIndex(options.id);

  			var saveJournalPromise = DukeApp.request("save:journals:entities", {
  				frameIndex:frameIndex,
  				userID:DukeApp.utils.getCurrentUserID(),
  				text:options.text,
  				classIndex:Week.Controller.currentClass
  			}).done(function() {
  				alert("Journal Saved.");
  			});
  		},

  		saveAssignment:function(options) {
  			if (DukeApp.utils.isGuest()) {
  				alert("Sorry, can't save assignments as a guest.");
				return;
  			}

  			var frameIndex = Week.Controller.getFrameIndex(options.id);

  			var saveAssignmentPromise = DukeApp.request("save:assignments:entities", {
  				frameIndex:frameIndex,
  				userID:DukeApp.utils.getCurrentUserID(),
  				text:options.text,
  				classIndex:Week.Controller.currentClass
  			}).done(function() {
  				alert("Assignment Saved.");
  			});
  		},

  		saveQuiz:function(options) {
  			if (DukeApp.utils.isGuest()) {
  				alert("Sorry, can't save quiz as a guest.");
				return;
  			}
  			var frameIndex = Week.Controller.getFrameIndex(options.id);

  			var saveQuizPromise = DukeApp.request("save:quizes:entities", {
  				frameIndex:frameIndex,
  				userID:DukeApp.utils.getCurrentUserID(),
  				response:options.response,
  				classIndex:Week.Controller.currentClass
  			}).done(function() {
  				alert("Quiz Submitted.");
  			});
  		},

  		saveFrameEvent:function(options) {  	
  			if (!DukeApp.utils.isStudent())
  				return;

  			_.defaults(options, {allowRepeat:true});
  			var frameID = Week.Controller.getFrameIndex(options.id);

  			DukeApp.request("frameById:entities", frameID).done(function(frame) {  			

  				var eventLogData = {
  					studentId:DukeApp.utils.getCurrentUserID(),
  					eventType:frame.type,
  					contentIndex:frameID,
  					contentStatus:options.status,
  					contentData:options.data,
  					allowRepeat:options.allowRepeat,
  					classIndex:Week.Controller.currentClass
  				};

  				DukeApp.request("eventLog:entities", eventLogData);
  			});
  		},

		saveAttributeEvent:function(options) {  	
  			if (!DukeApp.utils.isStudent())
  				return;
  			
  			var frameID = Week.Controller.getFrameIndex(options.id);

  			DukeApp.request("frameById:entities", frameID).done(function(frame) {

  				var eventLogData = {
  					studentId:DukeApp.utils.getCurrentUserID(),
  					eventType:"attribute",
  					contentIndex:frameID,
  					contentStatus:"added",
  					contentData:{attributes:frame.attributes},
  					allowRepeat:false,
  					classIndex:Week.Controller.currentClass
  				};

  				console.log("********");
  				
  				DukeApp.request("eventLog:entities", eventLogData).done(function(resp) {
  					console.log(resp);

  					if (resp && !resp.hasOwnProperty("warning")) {
  						var attrs = frame.attributes;
  						DukeApp.request("user:saveAttributes:entities", attrs);
  					}
  				});
  			});
  		},

  		/*************Helper Functions**************/
  		getFrameId:function(index) {
  			return(Week.Controller.frames.models[index].get('id'));
  		},

  		getFrameIndex:function(index) {
  			return(Week.Controller.frames.models[Number(index)].get('index'));
  		}
	};
});