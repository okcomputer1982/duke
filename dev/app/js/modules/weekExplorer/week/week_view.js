DukeApp.module("WeekExplorer.Week", function(Week, DukeApp, Backbone, Marionette, $, _) {
	
	// layout
	Week.WeekLayoutView = Marionette.Layout.extend({
		template:templates['weekExplorer/week/layout'],
		regions: {
			header: "#header",
			top: "#weektop",
			sidebar: "#sidebar",
			content: "#content",
			footer: "#footer"
		}
	});

	//frames
	Week.OverviewView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/overview"],
		className:function(){
			return("section overview " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.ArticleView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/article"],
		className:function(){
			return("section article " + this.options.weekitemClass);
		},
		tagName:"section",

		onShow:function(){
			$(".articleItem").hide();
			$(".articleItem[data-id=" +  this.model.get('content').id + "]").show();
		}
	});

	Week.ArticleLinkView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/articleLink"],
		className:function(){
			return("section articleLink " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.LinksView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/links"],
		className:function(){
			return("section links " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.GameView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/game"],
		className:function(){
			return("section game " + this.options.weekitemClass);
		},
		tagName:"section"
	});
	
	Week.VideoView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/video"],
		className:function(){
			return("section video " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.VideoLinkView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/videoLink"],
		className:function(){
			return("section videoLink " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.ComicView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/comic"],
		className:function(){
			return("section comic " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.ImageView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/image"],
		className:function(){
			return("section image " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.ActivityView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/activity"],
		className:function(){
			return("section activity " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.AssignmentView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/assignment"],
		className:function(){
			return("section assignment " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.AssignmentUploadView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/assignmentUpload"],
		className:function(){
			return("section assignment " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.DiscussionView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/discussion"],
		className:function(){
			return("section discussion " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.JournalView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/journal"],
		className:function(){
			return("section journal " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.LectureTextView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/lectureText"],
		className:function(){
			return("section lectureText " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.LectureVideoView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/lectureVideo"],
		className:function(){
			return("section lectureVideo " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.LectureAudioView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/lectureAudio"],
		className:function(){
			return("section lectureAudio " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	Week.QuizView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/quiz"],
		className:function(){
			return("section quiz " + this.options.weekitemClass);
		},
		tagName:"section",

		onShow:function() {
			$(".quizItem").hide();
			$(".quizItem[data-id=" +  this.model.get('content').id + "]").show();
		}
	});

	Week.WrapupView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/frames/wrapup"],
		className:function(){
			return("section wrapup " + this.options.weekitemClass);
		},
		tagName:"section"
	});

	// and the regions
	Week.SidebarItemView = Marionette.ItemView.extend({
		tagName: "li",
		template:templates["weekExplorer/week/sidebarItem"]
	});

	Week.SidebarListView = Marionette.CompositeView.extend({
		template:templates["weekExplorer/week/sidebarList"],
		className:"sidebar",
		itemViewContainer:"#section_nav",
		itemView:Week.SidebarItemView,
		events: {
			"click .weekItemLink":"clickWeekItemLink",
			"click .arrow":"clickWeekArrow"
		},

		init:function(id) {
			this.active = $('.weekItemLink[data-weekItem="0"]');
			$("#week_number").text(id + 1);
		},

		clickWeekItemLink:function(e) {
			e.preventDefault();

	        var target = $(e.currentTarget),
	        	linkId = $(e.currentTarget).data('weekitem');
		    
		    this.trigger("weekView:scrollto", {linkId:linkId});
		},

		clickWeekArrow:function(e){
			e.preventDefault();
			weekId = Week.Controller.curweek + (($(e.currentTarget).attr("data-direction") === "left")?-1:1);
			this.trigger("weekView:loadWeek", {weekId:weekId});
		},

		setActiveFrame:function(linkId) {
			var target = $('.weekItemLink[data-weekItem=' + linkId + "]");
			this.active.removeClass('active');
		 	target.addClass('active');
		 	this.active = target;
		}
	});

	Week.ContentView = Marionette.CompositeView.extend({
		template:templates["weekExplorer/week/content"],
	});

	Week.TopView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/weekTop"],
		events:{
			"click .week-link":"handleWeekLink"
		},
		
		init:function(w){
			this.active = $('.week-link-listitem[data-weekId="1"]');
		},

		handleWeekLink:function(e){
			e.preventDefault();

			var weekId = $(e.currentTarget).data('week');
			this.trigger("weekView:loadWeek", {weekId:weekId});

			this.setWeekLink(weekId);
		},

		setWeekLink:function(weekId) {
			this.active.removeClass('active');
			this.active = $('.week-link-listitem[data-weekId="' + (weekId+1) + '"]');			
			this.active.addClass('active');
		}

	});

	Week.ContentListView = Marionette.CompositeView.extend({
		template:templates["weekExplorer/week/contentList"],
		className:"contentList",
		itemViewContainer: "#main-content",
		itemViews: {
	        overview: 			Week.OverviewView,
	        article: 			Week.ArticleView,
	        articleLink: 		Week.ArticleLinkView,
	        links: 				Week.LinksView,
	        game: 				Week.GameView,
	        video: 				Week.VideoView,
	        videoLink: 			Week.VideoLinkView,
	        image: 				Week.ImageView,
	        comic: 				Week.ComicView,
	        activity: 			Week.ActivityView,
	        assignment: 		Week.AssignmentView,	        
	        assignmentUpload: 	Week.AssignmentUploadView,
	        quiz: 				Week.QuizView,
	        lectureText: 		Week.LectureTextView,
	        lectureVideo: 		Week.LectureVideoView,
	        lectureAudio: 		Week.LectureAudioView,
	        discussion: 		Week.DiscussionView,
	        journal: 			Week.JournalView,
	        wrapup: 			Week.WrapupView
	    },
	    events:{
	    	"click .cycle-up": 		"cycleHandler",
	    	"click .cycle-down": 	"cycleHandler",
	    	"click .show-comic": 	"handleComic",
	    	"click .show-game": 	"handleGame"
	    },
	   	/******************SCROLLING EVENTS***********************/
	    //handles frame cycle arrow buttons
	    cycleHandler:function(e) {
	    	e.preventDefault();

	    	var type = $(e.currentTarget).attr('class'),
	    		currentScrollPos = $(window).scrollTop(),
	    		linkId,
	    		scrollPos = Week.scrollPos;

	    	if (type === "cycle-down") {
	    		for (linkId = 0; linkId < scrollPos.length && (scrollPos[linkId].pos-100) <= currentScrollPos; linkId++);
	    		if (linkId === Week.Controller.views.weekView.current_frame) {
	    			linkId ++;
	    		}
	    	} else {
	    		for (linkId = scrollPos.length-1; linkId > 0 && (scrollPos[linkId].pos-100) >= currentScrollPos; linkId--);
	    		if (linkId === Week.Controller.views.weekView.current_frame) {
	    			linkId --;
	    		}
	    	}

	    	this.trigger("weekView:scrollto", {linkId:linkId});
	    },

	    //scrolls to a particuler frame
	    scrollToFrame:function(linkId) {
	    	var that = this;

	    	$(window).unbind('scroll');

	    	Week.current_frame = linkId;

	    	var offset = ((linkId === 0)?100:60);

		    $(window).scrollTo(".weekitem" + linkId, {
		    	duration:0,
		    	offset:-100,
		    	onAfter:function(){
		    		$(window).scroll(function(){
		    			that.scrollHandler.apply(that);
		    		});
		    	}
		    });
	    },

	    //finds the active frame current scrolled to
	    scrollHandler: function(e) {
	    	var currentScrollPos = $(window).scrollTop(),
	    		scrollPos = Week.scrollPos;

	    	for (var linkId = 0; linkId < scrollPos.length -1; linkId++){
	    		if (currentScrollPos + 130 >= scrollPos[linkId].pos && currentScrollPos + 130 < scrollPos[linkId+1].pos){
	    			break;
	    		}
	    	}

	    	this.trigger("weekView:setActiveLink", {linkId:linkId});
	    },

	    /******************RESIZING**********************/
	    //handles resizing of the window
	    resizeHandler:function() {
      		var vpw = $(window).width(),
          		vph = $(window).height();
          	
          	$('.section').css('min-height', vph);
    	},

    	/******************DISPlAY***********************/
	    onShow:function() {
	    	var that = this;

	    	this.resizeHandler();
	    	$(window).resize(this.resizeHandler);
	    	$(window).scroll(function(){
	    		that.scrollHandler.apply(that);
	    	});

	    	//cache scroll positions of all frames
	    	var frames = $('section');
	    	
	    	Week.scrollPos = [];

	    	_.map(frames, function(frame){
	    		var itemClass = $(frame).attr('class').split(' ')[2],
	    			linkId = Number(itemClass.replace("weekitem", ""));

	    		Week.scrollPos.push({linkId:linkId, classes:$(frame).attr('class').split(' '), pos:$(frame).offset().top});
	    	});
	    },
    	
    	//retrieves the itemView related to the frame
	    getItemView: function( item ) {
	    	var viewId = item.get('type');
	        var itemViewObject = Marionette.getOption(this, "itemViews");
	        var itemView = itemViewObject[viewId];

	        if (!itemView){
	            throwError("An `itemView` must be specified", "NoItemViewError");
	        }
	        return itemView;
	    },

	    //retrieves the itemViewOptions for an itemview class
	    itemViewOptions: function(model, index) {
			return({weekitemClass: "weekitem" + index});
	    },

	    //show comic backdrop
	    handleComic: function(e){
	    	e.preventDefault();
	    	var seriesId = $(e.currentTarget).data("id");
	    	this.trigger("weekView:loadComic", {seriesId:seriesId});
	    },

	    //show game backdrop
	    handleGame: function(e){
	    	e.preventDefault();
	    	var gameId = $(e.currentTarget).data("id");
	    	this.trigger("weekView:loadGame", {gameId:gameId});
	    }
	});
});