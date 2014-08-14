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
		tagName:"section"
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

	Student.JournalItemView = Marionette.ItemView.extend({
		template:templates['profile/student/frames/journal'],
		className:function(){
			return("row-fluid section journal " + this.options.profileitemClass);
		},
		tagName:"section"
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
			"click .assignment_link": "handleAssignmentPopup",
			"click .journal-entry": "removeJournalEntry",
			"click .reload": "reloadJournals",
			"click #dock_button": "handleDockButton"
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
	    },

	    //scrolls to a particuler frame
	    scrollToFrame:function(linkId) {
	    	var that = this;

	    	Student.current_frame = linkId;

	    	$(window).unbind('scroll');

	    	var offset = ((linkId === 0)?100:60);

		    $(window).scrollTo(".profileitem" + linkId, {
		    	duration:0,
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

		handleAssignmentPopup:function(e){
			e.preventDefault();
			var t = $(e.currentTarget);
			var assignType = t.attr("data-assignType");
			var assignId = t.attr("data-assignId");

			this.trigger("studentProfile:showAssignment", {id:assignId, type:assignType});
		},

		handleContentClick:function(e){
			e.preventDefault();
			DukeApp.trigger("weekExplorer:week");
		},

		removeJournalEntry:function(e){
			e.preventDefault();
			var t = $(e.currentTarget);
			t.hide();
		},

		reloadJournals:function(e){
			e.preventDefault();
			$('.journal-entry').show();
		},

		handleDockButton:function(e){
			e.preventDefault();
			$("#welcome-window").slideToggle();
		}
	});

	//Other	
	Student.AssignmentModalView = Marionette.ItemView.extend({
		template:templates['profile/student/assignModal']
	});

});