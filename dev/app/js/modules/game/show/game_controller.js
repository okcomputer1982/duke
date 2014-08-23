DukeApp.module("Game.Show", function(Show, DukeApp, Backbone, Marionette, $, _) {
	Show.Controller = {
		init:function(options) {
			var gameModel = DukeApp.request("game:entities", options.gameId);

			var layoutView = new Show.GameLayout({
					model: gameModel
				});

	    	Show.Controller.layoutView = layoutView;

	    	DukeApp.modal.show(layoutView);

	    	$("#game_modal").modal({
	    		backdrop: "static",
	    		show:true
	    	});
		},

		restart:function(init) {
			
		}
	};
});