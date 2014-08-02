DukeApp.module("Game.Show", function(Show, DukeApp, Backbone, Marionette, $, _) {	
    Show.GameLayout = Marionette.Layout.extend({
    	template:templates['game/show/layout'],
		regions: {
            gameContainer: "#gameContainer"
		}
    });
});