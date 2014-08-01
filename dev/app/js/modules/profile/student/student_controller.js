DukeApp.module("Profile.Student", function(Student, DukeApp, Backbone, Marionette, $, _){
	Student.Controller = {
		init:function() {
			DukeApp.utils.setCurrentView("student-profile-view", Student.Controller);
			DukeApp.utils.loadCommonViews();

			var ProfileItem = Backbone.Model.extend({});
			var ProfileCollection = Backbone.Collection.extend({
				model: ProfileItem
			});

			var profileItems = new ProfileCollection([
				{index:0, type:"help", 			name:"help", 			glyph:"health"},
				{index:1, type:"profile", 		name:"basic info", 		glyph:"profile"},
				{index:2, type:"progress", 		name:"progress", 		glyph:"chart2"},
				{index:3, type:"badge", 		name:"badges", 			glyph:"badge2"},
				{index:4, type:"attribute", 	name:"attribute", 		glyph:"badge2"},
				{index:5, type:"grades", 		name:"grades", 			glyph:"file"},
				{index:6, type:"journals", 		name:"journals", 		glyph:"wallet"}
			]);

			var layout = new Student.LayoutView();
			var header = DukeApp.commonViews.header;
			var sidebar = new Student.SidebarListView({
				collection:profileItems
			});
			var content = new Student.ContentListView({
				collection:profileItems
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
		},

		scrollToFrame:function(obj){
			Student.Controller.sidebar.setActiveFrame(obj.linkId);
			Student.Controller.content.scrollToFrame(obj.linkId);
		},

		setActiveLink:function(obj){
 			Student.Controller.sidebar.setActiveFrame(obj.linkId);
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