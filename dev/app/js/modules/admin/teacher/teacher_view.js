DukeApp.module("Admin.Teacher", function(Teacher, DukeApp, Backbone, Marionette, $, _){
	Teacher.LayoutView = Marionette.Layout.extend({
		template:templates['admin/teacher/layout'],
		className:"teacherProfileView",
		regions: {
			header: "#header",
			footer: "#footer",
			infoPanel: "#infoPanel",
			classPanel: "#classPanel"
		}
	});

	Teacher.InfoPanelView = Marionette.ItemView.extend({
		template:templates["admin/teacher/infoPanel"],
		events:{
			'click .classButton':'handleClassClick'
		},

		setClassIndicator:function(index) {
			$(".classButton[data-index='" + Teacher.Controller.currentClass + "']").removeClass('active');
			$(".classButton[data-index='" + index + "']").addClass('active');
			Teacher.Controller.currentClass = index;
		},

		handleClassClick:function(e) {
			var index = Number(e.currentTarget.getAttribute("data-index"));
			this.setClassIndicator(index);
			this.trigger("teacherView:changeClass", {classId:index});
		}
	});


	Teacher.ClassPanelView = Marionette.ItemView.extend({
		template:templates["admin/teacher/classPanel"]
	});
});