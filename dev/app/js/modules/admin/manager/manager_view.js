
DukeApp.module("Admin.Manager", function(Manager, DukeApp, Backbone, Marionette, $, _){
	Manager.LayoutView = Marionette.Layout.extend({
		template:templates['admin/manager/layout'],
		className:"managerProfileView",
		regions: {
			header: "#header",
			footer: "#footer",
			content:"#content"
		},
		events:{
			"click .nav-link": "handleMenuLinks"
		},

		handleMenuLinks:function(e) {
			var linkType = e.currentTarget.getAttribute("data-link");
			this.trigger("managerView:clickLink", linkType);
		},

		handleMessage:function(e) {
			alert(e.msg);
		}
	});

	Manager.EditClassesView = Marionette.ItemView.extend({
		template:templates["admin/manager/editClasses"],
		events:{
			"click #createBtn": "handleCreateClass",
			"click #deleteBtn": "handleDeleteClass",
			"change #classCombo": "handleChangeClass",
			"click .addToClassBtn": "handleAddToClass",
			"click .removeFromClassBtn": "handleRemoveFromClass",
			"click .defaultClassBtn": "handleDefaultClass",
			"click #import": "handleImport"
		},

		handleCreateClass:function(e) {
			var dataObj = {
				classTemplate:Number($('#templateCombo').val()),
				teacherTemplate:Number($('#instructorCombo').val()),
				name:$('#name').val()
			};

			Manager.Controller.layout.trigger("managerView:createClass", dataObj);
		},

		handleDeleteClass:function(e) {
			var classIndex = Number($('#classCombo').val());
			Manager.Controller.layout.trigger("managerView:deleteClass", {classIndex:classIndex});
		},

		handleChangeClass:function(e) {
			var classVal = Number($("#classCombo").val());
			Manager.Controller.layout.trigger("managerView:changeSelectedClass", {index:classVal});
		},

		handleDefaultClass:function(e) {
			var classIndex = Number($("#classCombo").val()),
				target = $(e.currentTarget),
				row = target.closest("tr"),
				type = (row.hasClass("studentRow")?"student":"teacher"),
				index = Number(row.attr("data-index"));

			Manager.Controller.layout.trigger("managerView:changeDefaultClass", {index:index, type:type, classIndex:classIndex});
		},

		updateClassData:function(classObj, teachers, students, classes){
			$("#classCreatedField").html(moment(classObj.createdAt).fromNow());
			$("#classEditedField").html(moment(classObj.lastEdited).fromNow());
			$("#instructorsField").html(((classObj.teachers)?classObj.teachers.length:0));
			$("#studentsField").html(((classObj.students)?classObj.students.length:0));
			var currentClass = _.where(teachers, {index:classObj.index});

			$(".teacherRow").each(function() {
				var index = Number(this.getAttribute("data-index")),
					inClassField = $(this).find(".inClass"),
					inClass = (classObj.teachers && classObj.teachers.indexOf(index) >= 0),					
					addButton = $(this).find(".addToClassBtn"),
					removeButton = $(this).find(".removeFromClassBtn"),
					defaultButton = $(this).find(".defaultClassBtn"),
					currentClassField = $(this).find(".isCurrentClass");

				inClassField.html( (inClass?"yes":"no") );

				if (inClass) {
					addButton.hide();
					removeButton.show();
					defaultButton.show();
				} else {
					addButton.show();
					removeButton.hide();
					defaultButton.hide();
				}
			});

			$(".studentRow").each(function(obj, idx) {
				var index = Number(this.getAttribute("data-index")),
					inClassField = $(this).find(".inClass"),
					inClass = (classObj.students && classObj.students.indexOf(index) >= 0),
					addButton = $(this).find(".addToClassBtn"),
					removeButton = $(this).find(".removeFromClassBtn"),
					defaultButton = $(this).find(".defaultClassBtn"),
					currentClassField = $(this).find(".isCurrentClass");

				var currentStudent = _.where(students, {index:index})[0];
				var studentClass = _.where(classes, {index:currentStudent.currentClass})[0];

				currentClassField.html(studentClass.name);
				inClassField.html( (inClass?"yes":"no") );

				if (inClass) {
					addButton.hide();
					defaultButton.show();
					removeButton.show();
				} else {
					addButton.show();
					removeButton.hide();
					defaultButton.hide();
				}
			});
		},

		handleAddToClass:function(e) {
			var target = $(e.currentTarget),
				row = target.closest("tr"),
				type = (row.hasClass("studentRow")?"student":"teacher"),
				index = Number(row.attr("data-index"));

			Manager.Controller.layout.trigger("managerView:editClassList", {action:"add", type:type, index:index});
		},

		handleRemoveFromClass:function(e) {
			var target = $(e.currentTarget),
				row = target.closest("tr"),
				type = (row.hasClass("studentRow")?"student":"teacher"),
				index = Number(row.attr("data-index"));

			Manager.Controller.layout.trigger("managerView:editClassList", {action:"remove", type:type, index:index});
		}
	});

	Manager.EditTeachersView = Marionette.ItemView.extend({
		template:templates["admin/manager/editTeachers"],
		events:{
			"click #createTeacher": "handleTeacherAdd",
			"click #deleteTeacher": "handleTeacherDelete",
			"click #editTeacher": 	"handleTeacherModal",
			"click #submitEditBtn": "handleSubmitTeacherEdit"
		},

		handleTeacherAdd:function(e) {
			var dataObj = {
					firstname: $("#firstName").val(),
					lastname: $("#lastName").val(),
					username: $("#userName").val(),
					email: $("#email").val(),
					password: $('#password').val(),
					classIndex: Number($('#classIdx').val())
			};

			Manager.Controller.layout.trigger("managerView:addTeacher", dataObj);
		},

		handleTeacherDelete:function(e) {
			var target = $(e.currentTarget),
				row = target.closest("tr"),
				index = Number(row.attr("data-index"));

			Manager.Controller.layout.trigger("managerView:deleteTeacher", {index:index});
		},

		handleTeacherModal:function(e){
			var target = $(e.currentTarget),
				row = target.closest("tr"),
				index = Number(row.attr("data-index"));

			$('#teacherIdx_edit').val(index);
			$("#editModal").modal();
		},

		handleSubmitTeacherEdit:function(e){
			var dataObj = {
				teacherIndex: Number($('#teacherIdx_edit').val()),
				classIndex: Number($('#classIdx_edit').val())
			};

			$("#editModal").modal('hide');
			
			Manager.Controller.layout.trigger("managerView:editTeacher", dataObj);
		}
	});

	Manager.EditStudentsView = Marionette.ItemView.extend({
		template:templates["admin/manager/editStudents"],
		events:{
			"click #createStudent": "handleStudentAdd",
			"click #deleteStudent": "handleStudentDelete",
			"click #editStudent": 	"handleStudentModal",
			"click #submitEditBtn": "handleSubmitStudentEdit",
			"click #import": 		"handleImport"
		},
		
		handleImport:function() {
			
			var that = this;

			_.each(students, function(obj){
				console.log("sent");
				that.addStudent(obj);
			});
		},

		handleStudentAdd:function(e) {
			var dataObj = {
					firstname: $("#firstName").val(),
					lastname: $("#lastName").val(),
					username: $("#userName").val(),
					email: $("#email").val(),
					password: $('#password').val(),
					classIndex: Number($('#classIdx').val())
			};

			this.addStudent(dataObj);
		},

		addStudent:function(obj) {
			Manager.Controller.layout.trigger("managerView:addStudent", obj);
		},

		handleStudentDelete:function(e) {
			var target = $(e.currentTarget),
				row = target.closest("tr"),
				index = Number(row.attr("data-index"));

			Manager.Controller.layout.trigger("managerView:deleteStudent", {index:index});
		},

		handleStudentModal:function(e){
			var target = $(e.currentTarget),
				row = target.closest("tr"),
				index = Number(row.attr("data-index"));

			$('#studentIdx_edit').val(index);
			$("#editModal").modal();
		},

		handleSubmitStudentEdit:function(e){
			var dataObj = {
				studentIndex: Number($('#studentIdx_edit').val()),
				classIndex: Number($('#classIdx_edit').val())
			};

			$("#editModal").modal('hide');
			Manager.Controller.layout.trigger("managerView:editStudent", dataObj);
		}
	});

	Manager.EditGuestsView = Marionette.ItemView.extend({
		template:templates["admin/manager/editGuests"],
		events:{
			"click #createGuest": "handleGuestAdd",
			"click #deleteGuest": "handleGuestDelete",
			"click #editGuest": 	"handleGuestModal",
			"click #submitEditBtn": "handleSubmitGuestEdit"
		},

		handleGuestAdd:function(e) {
			var dataObj = {
					username: $("#userName").val(),
					email: $("#email").val(),
					password: $('#password').val(),
					classIndex: Number($('#classIndex').val())
			};

			Manager.Controller.layout.trigger("managerView:addGuest", dataObj);
		},

		handleGuestDelete:function(e) {
			var target = $(e.currentTarget),
				row = target.closest("tr"),
				index = Number(row.attr("data-index"));

			Manager.Controller.layout.trigger("managerView:deleteGuest", {index:index});
		},

		handleGuestModal:function(e){
			var target = $(e.currentTarget),
				row = target.closest("tr"),
				index = Number(row.attr("data-index"));

			$('#guestIdx_edit').val(index);
			$("#editModal").modal();
		},

		handleSubmitGuestEdit:function(e){
			var dataObj = {
				guestIndex: Number($('#guestIdx_edit').val()),
				classIndex: Number($('#classIdx_edit').val()),
			};

			$("#editModal").modal('hide');
			Manager.Controller.layout.trigger("managerView:editGuest", dataObj);
		}

	});


});