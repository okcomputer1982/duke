
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
			"change #classCombo": "handleChangeClass"
		},
		handleCreateClass:function(e) {
			var classTemplate = Number($('#templateCombo').val()),
				teacherTemplate = Number($('#instructorCombo').val());

			this.trigger("managerView:createClass", {classTemplate:classTemplate, teacherTemplate:teacherTemplate});
		},
		handleChangeClass:function(e) {
			var classVal = Number($("#classCombo").val());
			this.trigger("managerView:changeSelectedClass", {index:classVal});
		},

		updateClassData:function(classObj){
			$("#classCreatedField").html(moment(classObj.createdAt).fromNow());
			$("#classEditedField").html(moment(classObj.lastEdited).fromNow());
			$("#instructorsField").html(((classObj.teachers)?classObj.teachers.length:0));
			$("#studentsField").html(((classObj.students)?classObj.students.length:0));

			$(".teacherRow").each(function() {
				var index = Number(this.getAttribute("data-index")),
					inClassField = $(this).find(".inClass"),
					inClass = (classObj.teachers && classObj.teachers.indexOf(index) >= 0),
					addButton = $(this).find(".addToClassBtn"),
					removeButton = $(this).find(".removeFromClassBtn");

				inClassField.html( (inClass?"yes":"no") );
				if (inClass) {
					addButton.hide();
					removeButton.show();
				} else {
					addButton.show();
					removeButton.hide();
				}
			});

			$(".studentRow").each(function(obj, idx) {
				var index = Number(this.getAttribute("data-index")),
					inClassField = $(this).find(".inClass"),
					inClass = (classObj.students && classObj.students.indexOf(index) >= 0),
					addButton = $(this).find(".addToClassBtn"),
					removeButton = $(this).find(".removeFromClassBtn");

				inClassField.html( (inClass?"yes":"no") );
				if (inClass) {
					addButton.hide();
					removeButton.show();
				} else {
					addButton.show();
					removeButton.hide();
				}
			});
		}
	});

	Manager.EditGuestsView = Marionette.ItemView.extend({
		template:templates["admin/manager/editGuests"]
	});

	Manager.EditStudentsView = Marionette.ItemView.extend({
		template:templates["admin/manager/editStudents"]
	});

	Manager.EditTeachersView = Marionette.ItemView.extend({
		template:templates["admin/manager/editTeachers"]
	});
});