
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
			"click #createBtn": "handleCreateClass"
		},
		handleCreateClass:function(e) {
			var classTemplate = Number($('#templateCombo').val()),
				teacherTemplate = Number($('#instructorCombo').val());

			this.trigger("managerView:createClass", {classTemplate:classTemplate, teacherTemplate:teacherTemplate});
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