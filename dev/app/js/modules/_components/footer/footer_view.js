DukeApp.module("Components.Footer", function(Footer, DukeApp, Backbone, Marionette, $, _){

	Footer.FooterView = Marionette.ItemView.extend({
		template: templates['_components/footer/footer']
	});

});