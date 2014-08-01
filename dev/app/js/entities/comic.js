DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _){
	Entities.PanelModel = Backbone.Model.extend({});

	Entities.PanelCollection = Backbone.Collection.extend({
		model:Entities.PanelModel
	});

	Entities.SeriesCollection = Backbone.Collection.extend({
		model:Entities.PanelCollection
	});

	Entities.ComicModel = Backbone.Model.extend({});

	Entities.ComicCollection = Backbone.Collection.extend({
		model:Entities.ComicModel
	});

	var panels, comics;

	var initializeComics = function() {
		comics = new Entities.ComicCollection([{
			seriesId:0,
			title:"Temperary title for thing",
			numPanels: 5
		}]);
	};

	var initializePanels = function() {
		panels = new Entities.PanelCollection([
			{seriesId:0, panelId:0, display:false, question:{show:false, nextSlide:1}},
			{seriesId:0, panelId:1, display:false, question:{show:true, prompt:"this is where the prompt goes", choice_0:{text:"first choice", nextSlide:3}, choice_1:{text:"second choice", nextSlide:4}}},
			{seriesId:0, panelId:2, display:false, question:{show:false, nextSlide:3}},
			{seriesId:0, panelId:3, display:false, question:{show:false, nextSlide:4}},
			{seriesId:0, panelId:4, display:false, question:{show:false, close:true}}
		]);
	};

	var API = {
		getComicEntities: function(id) {
			if (comics === undefined){
				initializeComics();
			}
			
			console.log(comics);

			return(comics.models[id]);
		},

		getPanelEntities: function(){
			if (panels === undefined){
				initializePanels();
			}

			return panels;
		}
	};

	DukeApp.reqres.setHandler("comic:entities", function(id){
		return API.getComicEntities(id);
	});

	DukeApp.reqres.setHandler("panel:entities", function(id){
		return API.getPanelEntities();
	});
});