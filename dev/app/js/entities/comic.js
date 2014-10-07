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
			title:"Introduction to Xin Xin",
			numPanels: 19
		},
		{
			seriesId:1,
			title:"Temperary title for thing 2",
			numPanels: 5
		},
		{
			seriesId:2,
			title:"Geography of the United States",
			numPanels: 5
		},
		{
			seriesId:3,
			title:"Finding The Right School",
			numPanels: 5
		},
		{
			seriesId:4,
			title:"Temperary title for thing 5",
			numPanels: 5
		},
		{
			seriesId:5,
			title:"Temperary title for thing 6",
			numPanels: 5
		}
		]);
	};

	var initializePanels = function() {
		panels = new Entities.PanelCollection([
			{seriesId:0, panelId:0, display:false, question:{show:false, 	nextSlide:1}},
			{seriesId:0, panelId:1, display:false, question:{show:false, 	nextSlide:2}},
			{seriesId:0, panelId:2, display:false, question:{show:false, 	nextSlide:3}},
			{seriesId:0, panelId:3, display:false, question:{show:true, 	prompt:"What do you think Xin Xin, do you want to attend college/university in U.S.?", choice_0:{text:"Yes I am totally sure.", nextSlide:4}, choice_1:{text:"Yes but I want to learn more.", nextSlide:5}, choice_2:{text:"I am having second thoughts but need more info", nextSlide:6}}},
			{seriesId:0, panelId:4, display:false, question:{show:false, 	nextSlide:7}},
			{seriesId:0, panelId:5, display:false, question:{show:false, 	nextSlide:7}},
			{seriesId:0, panelId:6, display:false, question:{show:false, 	nextSlide:7}},
			{seriesId:0, panelId:7, display:false, question:{show:true, 	prompt:"How would you like to complete your degree? In U.S., you can either choose to arrange your own schedule or follow a designated schedule by discussing with your academic advisor.", choice_0:{text:"Arrange my own schedule, choose courses to take for each semester on my own.", nextSlide:8}, choice_1:{text:"Follow the designated schedule and take four years to complete the degree.", nextSlide:9}}},
			{seriesId:0, panelId:8, display:false, question:{show:false, 	nextSlide:10}},
			{seriesId:0, panelId:9, display:false, question:{show:false, 	nextSlide:10}},
			{seriesId:0, panelId:10, display:false, question:{show:false, 	nextSlide:11}},
			{seriesId:0, panelId:11, display:false, question:{show:false, 	nextSlide:12}},
			{seriesId:0, panelId:12, display:false, question:{show:false, 	nextSlide:13}},
			{seriesId:0, panelId:13, display:false, question:{show:false, 	nextSlide:14}},
			{seriesId:0, panelId:14, display:false, question:{show:true, 	prompt:"How strong do you feel that you want to go to an elite U.S. school?", choice_0:{text:"Very strong", nextSlide:15}, choice_1:{text:"Strong", nextSlide:15}, choice_2:{text:"Not strong.", nextSlide:15}, choice_3:{text:"Not interested", nextSlide:15}}},
			{seriesId:0, panelId:15, display:false, question:{show:false, 	nextSlide:16}},
			{seriesId:0, panelId:16, display:false, question:{show:false, 	nextSlide:17}},
			{seriesId:0, panelId:17, display:false, question:{show:false, 	close:true}},

			{seriesId:1, panelId:0, display:false, question:{show:false, nextSlide:1}},
			{seriesId:1, panelId:1, display:false, question:{show:true, prompt:"this 2 is where the prompt goes", choice_0:{text:"first choice", nextSlide:3}, choice_1:{text:"second choice", nextSlide:4}}},
			{seriesId:1, panelId:2, display:false, question:{show:false, nextSlide:3}},
			{seriesId:1, panelId:3, display:false, question:{show:false, nextSlide:4}},
			{seriesId:1, panelId:4, display:false, question:{show:false, close:true}},

			{seriesId:2, panelId:0, display:false, question:{show:false, nextSlide:1}},
			{seriesId:2, panelId:1, display:false, question:{show:true, prompt:"this 3 is where the prompt goes", choice_0:{text:"first choice", nextSlide:3}, choice_1:{text:"second choice", nextSlide:4}}},
			{seriesId:2, panelId:2, display:false, question:{show:false, nextSlide:3}},
			{seriesId:2, panelId:3, display:false, question:{show:false, nextSlide:4}},
			{seriesId:2, panelId:4, display:false, question:{show:false, close:true}},

			{seriesId:3, panelId:0, display:false, question:{show:false, nextSlide:1}},
			{seriesId:3, panelId:1, display:false, question:{show:true, prompt:"this 4 is where the prompt goes", choice_0:{text:"first choice", nextSlide:3}, choice_1:{text:"second choice", nextSlide:4}}},
			{seriesId:3, panelId:2, display:false, question:{show:false, nextSlide:3}},
			{seriesId:3, panelId:3, display:false, question:{show:false, nextSlide:4}},
			{seriesId:3, panelId:4, display:false, question:{show:false, close:true}},

			{seriesId:4, panelId:0, display:false, question:{show:false, nextSlide:1}},
			{seriesId:4, panelId:1, display:false, question:{show:true, prompt:"this 5 is where the prompt goes", choice_0:{text:"first choice", nextSlide:3}, choice_1:{text:"second choice", nextSlide:4}}},
			{seriesId:4, panelId:2, display:false, question:{show:false, nextSlide:3}},
			{seriesId:4, panelId:3, display:false, question:{show:false, nextSlide:4}},
			{seriesId:4, panelId:4, display:false, question:{show:false, close:true}},

			{seriesId:5, panelId:0, display:false, question:{show:false, nextSlide:1}},
			{seriesId:5, panelId:1, display:false, question:{show:true, prompt:"this 6 is where the prompt goes", choice_0:{text:"first choice", nextSlide:3}, choice_1:{text:"second choice", nextSlide:4}}},
			{seriesId:5, panelId:2, display:false, question:{show:false, nextSlide:3}},
			{seriesId:5, panelId:3, display:false, question:{show:false, nextSlide:4}},
			{seriesId:5, panelId:4, display:false, question:{show:false, close:true}}
		]);
	};

	var API = {
		getComicEntities: function(id) {
			if (comics === undefined){
				initializeComics();
			}

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