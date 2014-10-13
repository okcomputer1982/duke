DukeApp.module("Profile.Student", function(Student, DukeApp, Backbone, Marionette, $, _){
	//layout
	Student.LayoutView = Marionette.Layout.extend({
		template:templates['profile/student/layout'],
		className:"studentProfileView",
		regions: {
			header: "#header",
			footer: "#footer",
			sidebar: "#sidebar",
			content: "#content",
			assignmentModal: "#assignmentModal"
		}
	});

	//frames
	Student.HelpItemView = Marionette.ItemView.extend({
		template:templates['profile/student/frames/help'],
		className:function(){
			return("row-fluid section help " + this.options.profileitemClass);
		},
		id: "welcome-window",
		tagName:"section"
	});

	Student.ProfileItemView = Marionette.ItemView.extend({
		template:templates['profile/student/frames/profile'],
		className:function(){
			return("row-fluid section profile " + this.options.profileitemClass);
		},
		id: 'profile-top',
		tagName:"section",
		events:{
			"click .profile_button": 		"handleContentClick",
			"click .edit-avatar": 			"handleAvatarSelect",
			"click .edit-mb": 				"handleMBSelect",
			"click #submitMBBtn": 			"handleMBSave",
			"click .avatarLink": 			"handleAvatarItemSelect"
		},

		handleContentClick:function(e){
			e.preventDefault();
			DukeApp.trigger("weekExplorer:week", this.model.get('userData').currentWeek, true);
		},

		handleAvatarSelect:function(e){
			$('#avatarModal').modal();
			$('a.avatarLink img[data-index=' + this.model.get('userData').profileImage + ']').addClass('active');
		},

		handleMBSelect:function(e){
			$('#mbModal').modal();
		},

	    handleMBSave:function(e) {
	    	var mb = $("#mbCombo").val();
	    	
	    	if (mb !== -99) {
	    		Student.Controller.content.trigger("studentProfile:setMB", mb);
	    	}

	    	$('#mbModal').modal('hide');
	    },

	    handleAvatarItemSelect:function(e) {
	    	e.preventDefault();

	    	var target = $(e.currentTarget),
	    		index = Number(target.find('img').attr('data-index'));

	    	Student.Controller.content.trigger("studentProfile:setAvatar", index);
	    	$('#avatarModal').modal('hide');
	    }

	});

	Student.ProgressItemView = Marionette.ItemView.extend({
		template:templates['profile/student/frames/progress'],
		className:function(){
			return("row-fluid section progress " + this.options.profileitemClass);
		},
		tagName:"section"
	});

	Student.BadgeItemView = Marionette.ItemView.extend({
		template:templates['profile/student/frames/badge'],
		className:function(){
			return("row-fluid section badge " + this.options.profileitemClass);
		},
		tagName:"section"
	});

	Student.AttributeItemView = Marionette.ItemView.extend({
		template:templates['profile/student/frames/attribute'],
		className:function(){
			return("row-fluid section attribute " + this.options.profileitemClass);
		},
		tagName:"section"
	});

	Student.GradesItemView = Marionette.ItemView.extend({
		template:templates['profile/student/frames/grades'],
		className:function(){
			return("row-fluid section assignment grades " + this.options.profileitemClass);
		},
		tagName:"section"
	});

	Student.AttributesItemView = Marionette.ItemView.extend({
		template:templates['profile/student/frames/attributeItem'],
		tagName: 'li'
	});

	Student.AttributesListView = Marionette.CompositeView.extend({
		template:templates['profile/student/frames/attributeList'],
		itemViewContainer:"#attributeList",
		itemView:Student.AttributesItemView
	});

	Student.GradesAssignmentItemView = Marionette.ItemView.extend({
		template:templates['profile/student/frames/gradesAssignItem'],
		tagName: 'li'
	});

	Student.GradesAssignmentListView = Marionette.CompositeView.extend({
		template:templates['profile/student/frames/gradesAssignList'],
		itemViewContainer:"#assignmentList",
		itemView:Student.GradesAssignmentItemView
	});

	
	Student.GradesQuizItemView = Marionette.ItemView.extend({
		template:templates['profile/student/frames/gradesQuizItem'],
		tagName: 'li'
	});

	Student.GradesQuizListView = Marionette.CompositeView.extend({
		template:templates['profile/student/frames/gradesQuizList'],
		itemViewContainer:"#quizList",
		itemView:Student.GradesQuizItemView
	});
	

	Student.JournalItemView = Marionette.ItemView.extend({
		template:templates['profile/student/frames/journal'],
		className:function(){
			return("row-fluid section journal " + this.options.profileitemClass);
		},
		tagName:"section",
		onShow:function() {
			var userData = this.model.get('userData'),
				journals = userData.journals;
		}
	});

	//Sidebar
	Student.SidebarItemView = Marionette.ItemView.extend({
		template:templates["profile/student/sidebarItem"],
		tagName: "li",

	});

	Student.SidebarListView = Marionette.CompositeView.extend({
		template:templates["profile/student/sidebarList"],
		id: "sidebar",
		itemViewContainer:"#section_nav",
		itemView:Student.SidebarItemView,
		events: {
			"click .profileItemLink":"clickProfileItemLink"
		},

		init:function() {
			this.active = $('.profileItemLink[data-profileItem="0"]');
		},

		clickProfileItemLink:function(e) {
			e.preventDefault();

	        var target = $(e.currentTarget),
	        	linkId = $(e.currentTarget).data('profileitem');

		    this.trigger("studentProfile:scrollto", {linkId:linkId});
		},

		setActiveFrame:function(linkId) {
			var target = $('.profileItemLink[data-profileItem=' + linkId + "]");
			this.active.removeClass('active');
		 	target.addClass('active');
		 	this.active = target;
		}
	});

	//Main Content
	Student.ContentListView = Marionette.CompositeView.extend({
		template:templates["profile/student/contentList"],
		className:"contentList",
		itemViewContainer: "#main-content",
		itemViews: {
			help: 		Student.HelpItemView,
			profile: 	Student.ProfileItemView,
			progress: 	Student.ProgressItemView,
			grades: 	Student.GradesItemView,
			badge: 		Student.BadgeItemView,
			attribute: 	Student.AttributeItemView,
			journals: 	Student.JournalItemView,
		},

		events:{
			"click .journal_object .arrow": "handleJournalClick",
			"click .week_object .arrow": 	"handleWeekClick"
		},

	    scrollHandler: function(e) {
	    	var currentScrollPos = $(window).scrollTop(),
	    		scrollPos = Student.scrollPos;

	    	for (var linkId = 0; linkId < scrollPos.length -1; linkId++){
	    		if (currentScrollPos + 100 >= scrollPos[linkId].pos && currentScrollPos + 100 < scrollPos[linkId+1].pos){
	    			break;
	    		}
	    	}

	    	this.trigger("studentProfile:setActiveLink", {linkId:linkId});
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
	    	Student.scrollPos = [];

	    	_.map(frames, function(frame){
	    		var itemClass = $(frame).attr('class').split(' ')[2],
	    			linkId = Number(itemClass.replace("profileitem", ""));

	    		Student.scrollPos.push({linkId:linkId, classes:$(frame).attr('class').split(' '), pos:$(frame).offset().top});
	    	});

	    	$('.badge').popover({
				trigger: 'hover',
				delay: {show:0,hide:50}
			});
	    },

	    //scrolls to a particuler frame
	    scrollToFrame:function(linkId) {
	    	var that = this;

	    	$(window).unbind('scroll');

	    	var offset = ((linkId === 0)?100:60);

		    $(window).scrollTo(".profileitem" + linkId, {
		    	duration:300,
		    	offset:-60,
		    	onAfter:function(){
		    		$(window).scroll(function(){
		    			that.scrollHandler.apply(that);
		    		});
		    	}
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
			return({profileitemClass: "profileitem" + index});
	    },

		/******************JOURNAL FRAMES***********************/
	    setWeekIndex:function(week, type) {
	    	switch(type){
	    		case("journals"):
	    			$(".journal .week_number").text(week + 1);
	    			break;
	    		case("grades"):
	    			$(".grades .week_number").text(week + 1);
	    			break;
	    		case("progress"):
	    			$(".progress .week_number").text(week + 1);
	    			break;
	    	} 
	    	
	    },

	    setJournalIndex:function(current, max) {
	    	$(".journal .journal_number").text(current + 1);
	    	$(".journal .max_journal_number").text(max);
	    },

	    showJournal:function(journal) {
	    	$(".journal_container .heading").html((journal.heading)?journal.heading:"");
	    	$(".journal_container .text").html(journal.text);
	    },

	    handleJournalClick:function(e) {
	    	e.preventDefault();

	    	var direction = e.currentTarget.getAttribute("data-direction");
			this.trigger("studentProfile:incrementJournal", direction);
	    },

	    handleWeekClick:function(e) {
	    	e.preventDefault();
	    	var direction = e.currentTarget.getAttribute("data-direction");
	    	var t = $(e.currentTarget).parent().parent().parent().prev().text().toLowerCase();


	    	this.trigger("studentProfile:incrementWeek", direction, t);
	    }
	});

	//Other	
	Student.AssignmentModalView = Marionette.ItemView.extend({
		template:templates['profile/student/assignModal']
	});

});