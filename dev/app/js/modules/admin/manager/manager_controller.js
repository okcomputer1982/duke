DukeApp.module("Admin.Manager", function(Manager, DukeApp, Backbone, Marionette, $, _){
	Manager.Controller = {
		init:function() {
			var that = this;

			DukeApp.utils.setCurrentView("admin-teacher-view", Manager.Controller);
			DukeApp.utils.loadCommonViews();

						//get data
			var classesPromise = DukeApp.request("all:class:entities"),
				classTemplatePromise = DukeApp.request("all:classTemplates:entities"),
				teacherPromise = DukeApp.request("all:user:teacherModel:entities"),
				studentPromise = DukeApp.request("all:user:studentModel:entities"),
				guestPromise = DukeApp.request("all:user:guestModel:entities");		
				
			$.when(classesPromise, classTemplatePromise, teacherPromise, studentPromise, guestPromise).done(function(cResults, ctResults, tResults, sResults, gResults) {
				Manager.Controller.data = {}; 
				Manager.Controller.data.classes = cResults;
				Manager.Controller.data.classTemplates = ctResults;
				Manager.Controller.data.teachers = tResults;
				Manager.Controller.data.students = sResults;
				Manager.Controller.data.guests = gResults;

				that.loadDisplay();
			});
			
		},

		loadDisplay:function() {
			var layout = new Manager.LayoutView();
			
			DukeApp.content.show(layout);
			layout.header.show(DukeApp.commonViews.header);
			DukeApp.commonViews.header.setUserName(DukeApp.utils.getCurrentUsername());

			Manager.Controller.layout = layout;

			this.handleMenuClick("classes");

			layout.on("managerView:clickLink", this.handleMenuClick);
		},

		handleMenuClick:function(type) {
			var contentViewMap = {
					"classes": Manager.EditClassesView,
					"teachers": Manager.EditTeachersView,
					"students": Manager.EditStudentsView,
					"guests": Manager.EditGuestsView
				},
				layout = Manager.Controller.layout,
				ManageModelTable = Backbone.Model.extend({}),
				manageModel = new ManageModelTable(Manager.Controller.data),
				contentView = new contentViewMap[type]({
					model:manageModel
				});

			contentView.on("managerView:createClass", this.handleCreateClass);
			contentView.on("managerView:changeSelectedClass", this.handleChangeClass);
			
			Manager.Controller.content = contentView;

			layout.content.show(contentView);
		},

		handleCreateClass:function(obj) {
			if (obj.classTemplate === -99) {
				Manager.Controller.layout.handleMessage({msg:"Please select a class template."});
			} else if (obj.teacherTemplate === -99) {
				Manager.Controller.layout.handleMessage({msg:"Please select an instructor for the class."});
			} else {
				DukeApp.request("create:class:entities", obj).done(function(){
					alert("Created New Class");
					location.reload();
					this.handleMenuClick("classes");
				});
			}
		},

		handleChangeClass:function(obj) {
			DukeApp.request("classByIndex:entities", obj).done(function(classObj){
				Manager.Controller.content.updateClassData(classObj);
			});
		}
	};
});