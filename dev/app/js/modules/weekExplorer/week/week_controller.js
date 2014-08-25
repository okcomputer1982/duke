DukeApp.module("WeekExplorer.Week", function(Week, DukeApp, Backbone, Marionette, $, _) {
	Week.Controller = {
		init:function(id) {
			var startingClass = 0,
				that = this;

			//load initial class stuff
			DukeApp.utils.setCurrentView("week-view", Week.Controller);
			DukeApp.utils.loadCommonViews();

			//get data
			var classPromise = DukeApp.request("class:entities", startingClass),
				weeksPromise = DukeApp.request("week:entities");

			$.when(classPromise, weeksPromise).done(function(cResults, wResults){
				that.loadDisplay(cResults, wResults, id);
			});
		},

		loadDisplay:function(classResults, weekResults, weekId) {
			Week.Controller.curweek = weekId;
			Week.Controller.weeks = weekResults;
			Week.Controller.curclass = classResults;
			
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

			top.init();
			
			//may need to get cleaned up on destruction
			//there is a better way to do this
			Week.Controller.views = {
				weekView:weekView,
				sidebar:sidebar,
				content:content,
				top:top
			};

			this.refreshWeek(Week.Controller.curclass.get('weeks')[Week.Controller.curweek]);

			//set events
			top.on("weekView:loadWeek", Week.Controller.setWeekContent);
		},
		
		refreshWeek:function(id) {
			var that = this;

			if (id < 0 || id > Week.Controller.curclass.get('weeks').length)
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
			});
		},

		scrollToFrame:function(obj){
			var views = Week.Controller.views;

			views.sidebar.setActiveFrame(obj.linkId);
			views.content.scrollToFrame(obj.linkId);
		},

		setWeekContent:function(obj){
			var views = Week.Controller.views;
			Week.Controller.refreshWeek(obj.weekId);
		},

		setActiveLink:function(obj){
 			var views = Week.Controller.views;
 			views.sidebar.setActiveFrame(obj.linkId);
  		},

  		setComic:function(options) {
  			DukeApp.Comic.Show.Controller.init(options);
  		},

  		setGame:function(options) {
  			DukeApp.Game.Show.Controller.init(options);
  		},

  		saveJournal:function(options) {
  			var frameID = Week.Controller.frames.models[options.id].id;

  			var saveJournalPromise = DukeApp.request("save:journals:entities", {
  				frameID:frameID,
  				userID:DukeApp.utils.getCurrentUserID(),
  				text:options.text
  			}).done(function() {
  				alert("Journal Saved.");
  			});
  		}
	};
});