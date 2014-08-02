DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _){
	Entities.GameModel = Backbone.Model.extend({});

	Entities.GameCollection = Backbone.Collection.extend({
		model:Entities.GameModel
	});

	var games;

	var initializeGames = function() {
		games = new Entities.ComicCollection([{
			id:0,
			title:"Finding the Perfect College"
		},
		{
			id:1,
			title:"Perfecting the College Interview"
		},
		{
			id:2,
			title:"Budget Master"
		}]);
	};

	var API = {
		getGameEntities: function(id) {
			if (games === undefined){
				initializeGames();
			}

			return(games.models[id]);
		}
	};

	DukeApp.reqres.setHandler("game:entities", function(id){
		return API.getGameEntities(id);
	});
});