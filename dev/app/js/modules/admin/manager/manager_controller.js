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
				_.each(tResults, function(obj, idx) {
					var classNames = [];
					_.each(obj.classes, function(idx){
						classNames.push(_.where(cResults,{index:idx})[0].name);
					});
					
					tResults[idx].currentClassName = _.where(cResults,{index:obj.currentClass})[0].name;
					tResults[idx].classNames = classNames;
				});

				_.each(sResults, function(obj,idx){
					var classNames = [];
					_.each(obj.classes, function(idx){
						classNames.push(_.where(cResults,{index:idx})[0].name);
					});

					sResults[idx].currentClassName = _.where(cResults,{index:obj.currentClass})[0].name;
					sResults[idx].classNames = classNames;
				});

				_.each(gResults, function(obj,idx){
					gResults[idx].className = _.where(cResults, {index:obj.class})[0].name;
				});

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

			Manager.Controller.layout.on("managerView:createClass", this.handleCreateClass);
			Manager.Controller.layout.on("managerView:deleteClass", this.handleDeleteClass);
			Manager.Controller.layout.on("managerView:editClassList", this.handleEditClass);
			Manager.Controller.layout.on("managerView:changeSelectedClass", this.handleChangeClass);
			Manager.Controller.layout.on("managerView:changeDefaultClass", this.handleDefaultClass);

			Manager.Controller.layout.on("managerView:addTeacher", this.handleCreateTeacher);
			Manager.Controller.layout.on("managerView:deleteTeacher", this.handleDeleteTeacher);
			Manager.Controller.layout.on("managerView:editTeacher", this.handleEditTeacher);
			
			Manager.Controller.layout.on("managerView:addStudent", this.handleCreateStudent);
			Manager.Controller.layout.on("managerView:deleteStudent", this.handleDeleteStudent);
			Manager.Controller.layout.on("managerView:editStudent", this.handleEditStudent);

			Manager.Controller.layout.on("managerView:resetPassword", this.handleResetPassword);
			

			Manager.Controller.layout.on("managerView:addGuest", this.handleCreateGuest);
			Manager.Controller.layout.on("managerView:deleteGuest", this.handleDeleteGuest);
			Manager.Controller.layout.on("managerView:editGuest", this.handleEditGuest);


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

			Manager.Controller.content = contentView;

			layout.content.show(contentView);
			contentView.init();
		},

		//class methods
		updateClassData:function() {
			var classesPromise = DukeApp.request("all:class:entities");
			classesPromise.done(function(c) {
				Manager.Controller.data.classes = c;

				var ManageModelTable = Backbone.Model.extend({}),
					manageModel = new ManageModelTable(Manager.Controller.data);
				
				Manager.Controller.content.model = manageModel;

				Manager.Controller.content.render();	
			});
		},

		handleCreateClass:function(obj) {
			if (obj.name === "") {
				Manager.Controller.layout.handleMessage({msg:"Please enter a name for your class."});
			} else if (obj.classTemplate === -99) {
				Manager.Controller.layout.handleMessage({msg:"Please select a class template."});
			} else if (obj.teacherTemplate === -99) {
				Manager.Controller.layout.handleMessage({msg:"Please select an instructor for the class."});
			} else {

				DukeApp.request("create:class:entities", obj).done(function(){
					alert(obj.name + " has been created.");
					Manager.Controller.updateClassData();
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
					Manager.Controller.updateClassData();
				});
			}
		},

		handleChangeClass:function(obj) {
			var def = $.Deferred();

			DukeApp.request("classByIndex:entities", obj).done(function(classObj){
				Manager.Controller.currentClass = classObj;
				Manager.Controller.content.updateClassData(classObj, Manager.Controller.data.teachers, Manager.Controller.data.students, Manager.Controller.data.classes);
				def.resolve();
			});

			return(def.promise());
		},

		handleDefaultClass:function(obj){
			var endpoint = "set:defaultclass:" + obj.type + ":entities";
			
			DukeApp.request(endpoint, obj).done(function(classObj){
				Manager.Controller.layout.handleMessage({msg:obj.type + " " + obj.index + " default is set to class " + obj.classIndex});
				this.handleMenuClick("classes");
			});
		},

		handleEditClass:function(obj) {
			var eventTrigger = obj.action + ":class:" + obj.type + ":entities",
				that = this;
			
			obj = _.extend(obj, {classIndex:Manager.Controller.currentClass.index});
			
			$("#classCombo").val(Manager.Controller.currentClass.index);
			
			DukeApp.request(eventTrigger, obj).done(function(classObj) {
				Manager.Controller.layout.handleMessage({msg:obj.action + ((obj.action!=="remove")?"ed":"d") + " a " + obj.type + " to the current class"});
				Manager.Controller.content.render();
				Manager.Controller.handleChangeClass({index:Manager.Controller.currentClass.index});
			});
		},

		//teacher methods
		updateTeacherData:function() {
			var classesPromise = DukeApp.request("all:class:entities");
			var teacherPromise = DukeApp.request("all:user:teacherModel:entities");

			$.when(teacherPromise, classesPromise).done(function(tResults, cResults) {
				_.each(tResults, function(obj, idx) {
					var classNames = [];
					_.each(obj.classes, function(idx){
						classNames.push(_.where(cResults,{index:idx})[0].name);
					});

					tResults[idx].currentClassName = _.where(cResults,{index:obj.currentClass})[0].name;
					tResults[idx].classNames = classNames;
				});

				Manager.Controller.data.teachers = tResults;

				var ManageModelTable = Backbone.Model.extend({}),
					manageModel = new ManageModelTable(Manager.Controller.data);
				
				Manager.Controller.content.model = manageModel;
				Manager.Controller.content.render();	
			});
		},

		handleCreateTeacher:function(obj) {
			if (!obj.firstname) {
				Manager.Controller.layout.handleMessage({msg:"Please enter a first name."});
			} else if (!obj.lastname) {
				Manager.Controller.layout.handleMessage({msg:"Please select a last name."});
			} else if (!obj.email) {
				Manager.Controller.layout.handleMessage({msg:"Please select a email."});
			} else if (!obj.username) {
				Manager.Controller.layout.handleMessage({msg:"Please select a username."});
			} else if (!obj.password) {
				Manager.Controller.layout.handleMessage({msg:"Please select a password."});
			} else if (obj.classIndex === -99) {
				Manager.Controller.layout.handleMessage({msg:"Please select an initial class for the teacher."});
			} else {
				DukeApp.request("create:user:teacher:entities", obj).done(function(success, e){
					if (success) {
						Manager.Controller.layout.handleMessage({msg:"Created Teacher"});
						Manager.Controller.updateTeacherData();
					} else {
						Manager.Controller.layout.handleMessage({msg:e.message});
					}
				});
			}
		},

		handleDeleteTeacher:function(obj) {
			if (!confirm("Are you sure you want to delete teacher " + obj.name + "?"))
				return;

			DukeApp.request("delete:user:teacher:entities", obj).done(function(){
				Manager.Controller.layout.handleMessage({msg:"Deleted Teacher"});
				Manager.Controller.updateTeacherData();
			});
		},

		handleEditTeacher:function(obj) {
			DukeApp.request("edit:user:teacher:entities", obj).done(function(){
				Manager.Controller.layout.handleMessage({msg:"Edited Teacher " + obj.name});
				Manager.Controller.updateTeacherData();
			});
		},

		//student methods
		updateStudentData:function() {
			var classesPromise = DukeApp.request("all:class:entities");
			var studentPromise = DukeApp.request("all:user:studentModel:entities");

			$.when(studentPromise, classesPromise).done(function(sResults, cResults) {
				_.each(sResults, function(obj,idx){
					var classNames = [];
					_.each(obj.classes, function(idx){
						classNames.push(_.where(cResults,{index:idx})[0].name);
					});

					sResults[idx].currentClassName = _.where(cResults,{index:obj.currentClass})[0].name;
					sResults[idx].classNames = classNames;
				});

				Manager.Controller.data.students = sResults;

				var ManageModelTable = Backbone.Model.extend({}),
					manageModel = new ManageModelTable(Manager.Controller.data);
				
				Manager.Controller.content.model = manageModel;
				Manager.Controller.content.render();
			});
		},

		handleCreateStudent:function(obj) {
			var that = this;

			if (!obj.firstname) {
				Manager.Controller.layout.handleMessage({msg:"Please enter a first name."});
			} else if (!obj.lastname) {
				Manager.Controller.layout.handleMessage({msg:"Please select a last name."});
			} else if (!obj.email) {
				Manager.Controller.layout.handleMessage({msg:"Please select a email."});
			} else if (!obj.username) {
				Manager.Controller.layout.handleMessage({msg:"Please select a username."});
			} else if (!obj.password) {
				Manager.Controller.layout.handleMessage({msg:"Please select a password."});
			} else if (obj.classIndex === -99) {
				Manager.Controller.layout.handleMessage({msg:"Please select an initial class for the student."});
			} else {
				var promise = DukeApp.request("create:user:student:entities", obj);

				promise.done(function(success, e) {
					if (success) {
						Manager.Controller.layout.handleMessage({msg:"Created Student"});
						Manager.Controller.updateStudentData();
					} else {
						Manager.Controller.layout.handleMessage({msg:e.message});
						Manager.Controller.updateStudentData();
					}
					
				});
			}
		},

		handleDeleteStudent:function(obj) {			
			if (!confirm("Are you sure you want to delete student " + obj.index + "?"))
				return;

			DukeApp.request("delete:user:student:entities", obj).done(function(){
				Manager.Controller.layout.handleMessage({msg:"Deleted Student"});
				Manager.Controller.updateStudentData();
			});
		},

		handleEditStudent:function(obj) {
			var that = this;
			DukeApp.request("edit:user:student:entities", obj).done(function(){
				Manager.Controller.layout.handleMessage({msg:"Edited Student " + obj.studentIndex});
				Manager.Controller.updateStudentData();
			});
		},
		
		//student methods
		updateGuestData:function() {
			var classesPromise = DukeApp.request("all:class:entities");
			var guestPromise = DukeApp.request("all:user:guestModel:entities");

			$.when(guestPromise, classesPromise).done(function(gResults, cResults) {
				_.each(gResults, function(obj,idx){
					gResults[idx].className = _.where(cResults, {index:obj.class})[0].name;
				});

				Manager.Controller.data.guests = gResults;

				var ManageModelTable = Backbone.Model.extend({}),
					manageModel = new ManageModelTable(Manager.Controller.data);
				
				Manager.Controller.content.model = manageModel;
				Manager.Controller.content.render();
			});
		},

		handleCreateGuest:function(obj) {
			console.log(obj);

			if (!obj.email) {
				Manager.Controller.layout.handleMessage({msg:"Please select a email."});
			} else if (!obj.username) {
				Manager.Controller.layout.handleMessage({msg:"Please select a username."});
			} else if (!obj.password) {
				Manager.Controller.layout.handleMessage({msg:"Please select a password."});
			} else if (obj.classIndex === -99) {
				Manager.Controller.layout.handleMessage({msg:"Please select an viewible class for the guest."});
			} else {
				
				DukeApp.request("create:user:guest:entities", obj).done(function(success, e) {
					if (success) {
						Manager.Controller.layout.handleMessage({msg:"Created Guest"});
						Manager.Controller.updateGuestData();
					} else {
						Manager.Controller.layout.handleMessage({msg:e.message});
						Manager.Controller.updateGuestData();
					}
					
				});
			}
		},

		handleDeleteGuest:function(obj) {			
			if (!confirm("Are you sure you want to delete guest " + obj.index + "?"))
				return;

			DukeApp.request("delete:user:guest:entities", obj).done(function(){
				Manager.Controller.layout.handleMessage({msg:"Deleted Guest"});
				Manager.Controller.updateGuestData();
			});
		},

		handleEditGuest:function(obj) {
			DukeApp.request("edit:user:guest:entities", obj).done(function(){
				Manager.Controller.layout.handleMessage({msg:"Edited Guest " + obj.guestIndex});
				Manager.Controller.updateGuestData();
			});
		}
	};
});