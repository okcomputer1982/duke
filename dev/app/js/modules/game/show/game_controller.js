DukeApp.module("Game.Show", function(Show, DukeApp, Backbone, Marionette, $, _) {
	Show.Controller = {
		init:function(options) {
			var gameModel = DukeApp.request("game:entities", options.gameId);

			var layoutView = new Show.GameLayoutView({
					model: gameModel
				});

	    	Show.Controller.layoutView = layoutView;

	    	DukeApp.modal.show(layoutView);

	    	$("#game_modal").modal({
	    		backdrop: "static",
	    		show:true
	    	});

	    	var gameController;
	    	switch(options.gameId) {
	    		case(0):
	    			gameController = DukeApp.Game.Show.Geography.Controller;
	    			break;
	    		case(1):
	    			gameController = DukeApp.Game.Show.Interview.Controller;
	    			break;
	    	}

	    	gameController.init();
	    }
	};
});