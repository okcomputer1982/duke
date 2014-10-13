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
		className:function() {
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

		onShow:function() {
			var id = this.model.get('content').id;
			var weekitem = ".weekitem" + this.model.get("weekItem");
			
			$("section" + weekitem +  " .articleItem").hide();
			$("section" + weekitem +  " .articleItem[data-id=" + id + "]").show();
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
		tagName:"section"
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
			"click .arrow":"arrow"
		},

		init:function(id) {
			this.active = $('.weekItemLink[data-weekItem="0"]');
			 $('.weekItemLink[data-weekItem="0"]').addClass("active");
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
			var target = $('.weekItemLink[data-weekItem=' + linkId + "]"),
				scrollLink,
				scrollLimit = 4;

			this.active.removeClass('active');
		 	target.addClass('active');
		 	this.active = target;

		 	if (linkId >= scrollLimit) {
		 		scrollLink = $('.weekItemLink[data-weekItem=' + (linkId - scrollLimit) + ']');
		 	} else if (this.active !== $(".weekItemLink[data-weekItem=0]")) {
		 		scrollLink = $('.weekItemLink[data-weekItem=0]');
		 	}

		 	$("#section_nav").scrollTo(scrollLink, {
		    	duration:200,
		    });

		}
	});

	Week.ContentView = Marionette.CompositeView.extend({
		template:templates["weekExplorer/week/content"],
	});

	Week.TopView = Marionette.ItemView.extend({
		template:templates["weekExplorer/week/weekTop"],
		events:{
			"click a.week-link":"handleWeekLink"
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
	    	"click .cycle-up": 					"cycleHandler",
	    	"click .cycle-down": 				"cycleHandler",
	    	"click .show-comic": 				"handleComic",
	    	"click .show-game": 				"handleGame",
	    	"click .journal .submitbtn": 		"handleJournalSubmit",
	    	"click .assignment .submitbtn": 	"handleAssignmentSubmit",
	    	"click .quiz .submitbtn": 			"handleQuizSubmit",
	    	"click .quiz .response": 			"handleQuizResponse",
	    	"click .eventTarget":				"handleEvents",
	    },
	   	/******************SCROLLING EVENTS***********************/
	    //handles frame cycle arrow buttons
	    cycleHandler:function(e) {
	    	e.preventDefault();
	    	var that = this;
			
			if (!this.cycle) {
				this.cycle = true;

	    		var type = $(e.currentTarget).attr('class').split(" ")[1],
		    		currentScrollPos = $(window).scrollTop(),
		    		linkId,
		    		scrollPos = Week.scrollPos;

		    	
		    	if (type === "cycle-down") {
		    		linkId = Week.Controller.currentFrame + 1;
		    	} else {
		    		linkId = Week.Controller.currentFrame - 1;
		    	}

		    	if (linkId < 0) {
		    		linkId = scrollPos.length-1;
		    	} else if (linkId >= scrollPos.length) {
		    		linkId = 0;
		    	}

			    _.debounce(function(){that.cycle = false;}, 350)();
		    	this.trigger("weekView:scrollto", {linkId:linkId});
		    }
    	
	    },

	    //scrolls to a particuler frame
	    scrollToFrame:function(linkId) {
	    	var that = this,
	    		deferred = $.Deferred();

	    	$(window).unbind('scroll');
	    	var offset = ((linkId === 0)?100:50);

		    $(window).scrollTo(".weekitem" + linkId, {
		    	duration:300,
		    	offset:-110,
		    	onAfter:function(){
		    		$(window).scroll(function(){
		    			that.scrollHandler.apply(that);
		    		});

		    		deferred.resolve();
		    	}
		    });

		    return(deferred.promise());
	    },

	    //finds the active frame current scrolled to
	    scrollHandler: function(e) {
	    	var that = this;
	    	var currentPos = $(window).scrollTop();

	    	if (!this.isScrolling && currentPos !== this.lastPos) {
	    		this.isScrolling = true;
	    		this.scrollCheck = setInterval(this.checkForChange.bind(this), 5);
	    	}

	    	this.lastPos = currentPos;
	    },

	    checkForChange: function(e) {
	    	var that = this;
	    	var currentScrollPos = $(window).scrollTop();
	    	
	    	if (currentScrollPos === this.lastPos) {
	    		this.isScrolling = false;
	    		clearInterval(that.scrollCheck);

	    		this.setScrollPosition();
	    	}

	    	this.lastPos = currentScrollPos;
	    },

	    setScrollPosition:function() {
	    	var currentScrollPos = $(window).scrollTop(),
    			scrollPos = Week.scrollPos;

	    	for (var linkId = 0; linkId < scrollPos.length -1; linkId++){
	    		if (currentScrollPos + 110 >= scrollPos[linkId].pos && currentScrollPos + 110 < scrollPos[linkId+1].pos){
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

	    	this.isScrolling = false;
	    	this.cycle = false;

	    	//cache scroll positions of all frames
	    	var frames = $('section');
	    	Week.scrollPos = [];
	    	
	    	tinymce.init({
	    		selector:'textarea',
	    		theme_advanced_statusbar_location : "none",
	    		plugins: [
				     "advlist autolink link image lists charmap print preview hr anchor pagebreak",
				     "visualblocks visualchars",
				     "table contextmenu directionality emoticons template paste textcolor"
				],
	    		toolbar: "undo redo | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l"
	    	});

	    	_.map(frames, function(frame, idx){
	    		var itemClass = $(frame).attr('class').split(' ')[2],
	    			linkId = Number(itemClass.replace("weekitem", ""));

	    		frame.setAttribute('data-index', idx);

	    		Week.scrollPos.push({linkId:linkId, classes:$(frame).attr('class').split(' '), pos:$(frame).offset().top});
	    	});

    		// var heading = $($('.headingContainer')[0]);
    		// heading.scrollToFixed({
      //       	marginTop: 110,
      //       	limit:200,
      //       	zIndex: 999
      //   	});
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

	    /******************Frame Items***********************/
	    //show comic backdrop
	    handleComic: function(e){
	    	e.preventDefault();
	    	var seriesId = $(e.currentTarget).data("id");
	    	this.trigger("weekView:loadComic", {seriesId:seriesId});
	    },

	    //show game backdrop
	    handleGame: function(e) {
	    	e.preventDefault();
	    	var gameId = $(e.currentTarget).data("id");
	    	this.trigger("weekView:loadGame", {gameId:gameId});
	    },

	    handleJournalSubmit:function(e) {
	    	e.preventDefault();
	    	
	    	var target = $(e.currentTarget);
	    	tinyMCE.triggerSave();
	    	this.trigger("weekView:saveJournal", {id:target.closest("section").attr("data-index"), text:target.prev().val()});
	    },

	    handleAssignmentSubmit:function(e) {
	    	e.preventDefault();
			
	    	var target = $(e.currentTarget);
	    	tinyMCE.triggerSave();
	    	this.trigger("weekView:saveAssignment", {id:target.closest("section").attr("data-index"), text:target.prev().val()});
	    },

	    handleQuizSubmit:function(e) {
	    	e.preventDefault();
	    	var target = $(e.currentTarget),
	    		quizItems = target.parent().find(".quizItem"),
	    		responseItems = target.parent().find("input:checked"),
	    		responses = [];

	    	if (quizItems.length !== responseItems.length) {
	    		alert("Please complete all the quiz items to submit.");
	    	} else {
	    		_.each(responseItems, function(obj, idx){
	    			responses.push(Number(obj.getAttribute("data-index")) - 1);
	    		});

	    		this.trigger("weekView:saveQuiz", {id:target.closest("section").attr("data-index"), response:responses});
	    	}
	    },

	    handleQuizResponse:function(e) {
	    	var target = $(e.currentTarget),
	    		responseIdx = Number(target.attr("data-index")) - 1,
	    		quizQuestionIdx = Number(target.closest(".quizItem").attr("data-index")),
	    		quizFrameIdx = Number(target.closest(".section").attr("data-index"));

	    	this.trigger("weekView:checkQuizAnswer", {questionIdx:quizQuestionIdx, frameIndex:quizFrameIdx, responseIdx:responseIdx});
	    },

	    handleIncorrectResponse:function(obj) {
	    	alert("Incorrect Answer. Try Again?");
	    	var quiz = $(".quiz[data-index=" + obj.frameIndex + "]"),
	    		quizItem = quiz.find(".quizItem[data-index=" + obj.questionIdx + "] .textblock");
	    		quizAns = quizItem.find(".response:checked");

	    	quizAns.attr('checked', false);

	    },

	   	handleEvents:function(e) {
			var target = $(e.currentTarget),
	    		frameIndex = target.closest("section").attr("data-index");

	    	if (target.hasClass("attributeTarget")) {
	    		this.trigger("weekView:logAttributeEvent", {id:frameIndex, status:"added"});
	    	}

	    	this.trigger("weekView:logFrameEvent", {id:frameIndex, status:"clicked"});
	    }
	});
});