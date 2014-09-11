
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
		}
	});

	Manager.EditClassesView = Marionette.ItemView.extend({
		template:templates["admin/manager/editClasses"]
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