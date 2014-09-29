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
			contentView.on("managerView:deleteClass", this.handleDeleteClass);
			contentView.on("managerView:changeSelectedClass", this.handleChangeClass);
			contentView.on("managerView:editClassList", this.handleEditClass);
			
			
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

		handleDeleteClass:function(obj) {
			if (!confirm("Are you sure you want to delete class " + obj.classIndex + "?"))
				return;

			if (obj.classIndex === -99) {
				Manager.Controller.layout.handleMessage({msg:"Please select a class."});
			} else {
				DukeApp.request("delete:class:entities", obj).done(function(){
					alert("Deleted Current Class");
					location.reload();
					this.handleMenuClick("classes");
				});
			}
		},

		handleChangeClass:function(obj) {
			DukeApp.request("classByIndex:entities", obj).done(function(classObj){
				Manager.Controller.currentClass = classObj;
				Manager.Controller.content.updateClassData(classObj);
			});
		},

		handleEditClass:function(obj) {
			var eventTrigger = obj.action + ":class:" + obj.type + ":entities";
			
			obj = _.extend(obj, {classIndex:Manager.Controller.currentClass.index});

			DukeApp.request(eventTrigger, obj).done(function(classObj) {
				Manager.Controller.layout.handleMessage({msg:obj.action + "ed a " + obj.type + " to the current class"});
				location.reload();
				this.handleMenuClick("classes");
				this.handleChangeClass(Manager.Controller.currentClass);
			});
		}
	};
});