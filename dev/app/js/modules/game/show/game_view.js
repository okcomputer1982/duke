DukeApp.module("Game.Show", function(Show, DukeApp, Backbone, Marionette, $, _) {	
    Show.GameLayoutView = Marionette.Layout.extend({
    	template:templates['game/show/layout'],
		regions: {
            gameContainer: "#gameContainer",
            interviewScroller: "#interviewScroller"
		}
    });

    Show.InterviewScrollerView = Marionette.ItemView.extend({
    	template:templates['game/show/interviewScroller']
    });


});