DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _){
	Entities.GameModel = Backbone.Model.extend({});

	Entities.GameCollection = Backbone.Collection.extend({
		model:Entities.GameModel
	});

	var games;

	var initializeGames = function() {
		games = new Entities.ComicCollection([{
			id:0,
			title:"Finding the Perfect College",
			data:{
				levels:[
					{	
						index:0,
						student:{
							avatar:0,
							climate:"Hot",
							major:"Engineering",
							cost:"$3500-$5000 semester",
							extraCur:"Clubs, Government",
							size:"25000",
							athletics:"Tennis",
							rep:"Ivy League",
							job:"90%",
							grad:"Yes"
						},
						schools:[
							{
								climate:"Hot",
								major:"Has Engineering",
								cost:"$5000",
								extraCur:"Clubs, Government",
								size:"24000",
								athletics:"Tennis",
								rep:"Ivy League",
								job:"95%",
								grad:"Yes",
								x:100,
								y:100,
								sidebarType:"righttop",
								name:"School 1"
							},
							{
								climate:"Cold",
								major:"Has Engineering",
								cost:"$3500",
								extraCur:"Clubs, Government",
								size:"25000",
								athletics:"Tennis",
								rep:"State",
								job:"80%",
								grad:"Yes",
								x:200,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								climate:"Mild",
								major:"Has Engineering",
								cost:"$4000",
								extraCur:"Clubs, Government",
								size:"25,000",
								athletics:"Tennis",
								rep:"State",
								job:"90%",
								grad:"Yes",
								x:300,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "School 1 is correct because it met 7 out of 9 criteria."
						}
					},
					{	
						index:1,
						student:{
							avatar:1,
							climate:"Cold",
							major:"Something",
							cost:"$3500 semester",
							extraCur:"Parting",
							size:"5000",
							athletics:"Basketball",
							rep:"Liberal Arts",
							job:"40%",
							grad:"No"
						},
						schools:[
							{
								climate:"Hot",
								major:"Has Engineering",
								cost:"$5000",
								extraCur:"Clubs, Government",
								size:"24000",
								athletics:"Tennis",
								rep:"Ivy League",
								job:"95%",
								grad:"Yes"
							},
							{
								climate:"Cold",
								major:"Has Engineering",
								cost:"$3500",
								extraCur:"Clubs, Government",
								size:"25000",
								athletics:"Tennis",
								rep:"State",
								job:"80%",
								grad:"Yes"
							},
							{
								climate:"Mild",
								major:"Has Engineering",
								cost:"$4000",
								extraCur:"Clubs, Government",
								size:"25,000",
								athletics:"Tennis",
								rep:"State",
								job:"90%",
								grad:"Yes"
							}
						],
						correct:{
							index:0,
							feedback: "School 1 is correct because it met 7 out of 9 criteria."
						}
					},
					{	
						index:2,
						student:{
							avatar:2,
							climate:"Mild",
							major:"Tap Dance",
							cost:"$300 semester",
							extraCur:"Lightwork",
							size:"300000",
							athletics:"Ping Pong",
							rep:"Cool",
							job:"200%",
							grad:"Sometimes"
						},
						schools:[
							{
								climate:"Hot",
								major:"Has Engineering",
								cost:"$5000",
								extraCur:"Clubs, Government",
								size:"24000",
								athletics:"Tennis",
								rep:"Ivy League",
								job:"95%",
								grad:"Yes"
							},
							{
								climate:"Cold",
								major:"Has Engineering",
								cost:"$3500",
								extraCur:"Clubs, Government",
								size:"25000",
								athletics:"Tennis",
								rep:"State",
								job:"80%",
								grad:"Yes"
							},
							{
								climate:"Mild",
								major:"Has Engineering",
								cost:"$4000",
								extraCur:"Clubs, Government",
								size:"25,000",
								athletics:"Tennis",
								rep:"State",
								job:"90%",
								grad:"Yes"
							}
						],
						correct:{
							index:0,
							feedback: "School 1 is correct because it met 7 out of 9 criteria."
						}
					}
				]
			}
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