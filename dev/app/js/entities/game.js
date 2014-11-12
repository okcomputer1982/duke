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
							major:"Mechanical Engineering",
							cost:"$15000-$20000 /semester",
							extraCur:"Student Government",
							size:"Small",
							rep:"Highly ranked",
							job:"95%",
							grad:"Yes",
							location:"southeast"
						},
						schools:[
							{
								index:0,
								climate:"Hot",
								major:"Available",
								cost:"$18000 /semester",
								extraCur:"Available",
								size:"Medium",
								rep:"Highly ranked",
								job:"97%",
								grad:"Yes",
								location:"southeast",
								x:100,
								y:100,
								sidebarType:"lefttop",
								name:"School 1"
							},
							{
								index:1,
								climate: "Hot",
								major:"Available",
								cost:"$16000 /semester",
								extraCur: "Available",
								size:"Medium",
								rep:"Middle ranked",
								job:"95%",
								grad:"Yes",
								location:"southeast",
								x:200,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,
								climate: "Hot",
								major: "Available",
								cost: "$22000 /semester",
								extraCur: "Not available",
								size: "Small",
								rep: "Highly ranked",
								job: "95%",
								grad: "Yes",
								location:"southeast",
								x:300,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "8 out of 9 criteria."
						}
					},
					{	
						index:1,
						student:{
							avatar:0,
							climate:"Seasons",
							major:"Mathematics",
							cost: "$15000-$20000 /semester",
							extraCur: "Music",
							size:"Medium",
							rep:"Highly ranked",
							job:"95%",
							grad:"No",
							location:"northeast"
						},
						schools:[
							{
								index:0,
								climate: "Seasons",
								major:"Available",
								cost: "$17000 /semester",
								extraCur: "Available",
								size:"Medium",
								rep: "Highly ranked",
								job: "95%",
								grad:"Yes",
								location:"northeast",
								x:100,
								y:100,
								sidebarType:"righttop",
								name:"School 1"
							},
							{

								index:1,
								
								climate: "Seasons",
								major: "Available",
								cost: "$21000 /semester",
								extraCur: "Not Available",
								size: "Medium",
								rep:"Highly ranked",
								job:"92%",
								grad:"Yes",
								location:"northeast",

								x:200,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,

								climate: "Seasons",
								major: 	"Available",
								cost: 	"$18000 /semester",
								extraCur: "Not available",
								size: 	"Medium",
								rep: 	"Middle ranked",
								job:  	"95%",
								grad: 	"Yes",
								location:"northeast",


								x:300,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "9 out of 9 criteria."
						}
					},
					{	
						index:2,
						student:{
							avatar:3,
							
							climate: "Hot",
							major: 	"Biology",
							cost: "$15000-$20000 /semester",
							extraCur: "Clubs",
							size: "Small",
							rep: "Highly ranked",
							job: "95%",
							grad: "No",
							location: "southwest"
						},
						schools:[
							{
								index:0,
								climate: "Cold",
								major: "Available",
								cost: "$20000 /semester",
								extraCur: "Available",
								size: "Medium",
								rep: "Highly ranked",
								job: "100%",
								grad: "Yes",
								location: "midwest",
								x:150,
								y:250,
								sidebarType:"righttop",
								name:"School 1"
							},
							{
								index:1,

								climate: "Seasons",
								major:"Not available",
								cost: "$15000 /semester",
								extraCur: "Not available",
								size:"Large",
								rep:"Highly ranked",
								job:"85%",
								grad:"Yes",
								location:"midwest",

								x:300,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,

								climate: "Cold",
								major: "Available",
								cost: "$17000 /semester",
								extraCur: "Available",
								size:"Medium",
								rep: "Highly ranked",
								job: "90%",
								grad: "No",
								location:"midwest",

								x:200,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "8 out of 9 criteria."
						}
					},
					{	
						index:3,
						student:{
							avatar:3,
							climate: "Hot",
							major: "Biology",
							cost: "$15000-$20000 /semester",
							extraCur: "Clubs",
							size: "Small",
							rep: "Highly ranked",
							job: "95%",
							grad: "No",
							location: "southwest"
						},
						schools:[
							{
								index:0,

								climate: "Hot",
								major: "Available",
								cost: "$16000 /semester",
								extraCur: "Available",
								size: "Small",
								rep: "Highly ranked",
								job: "95%",
								grad: "Yes",
								location: "southwest",

								x:150,
								y:250,
								sidebarType:"righttop",
								name:"School 1"
							},
							{
								index:1,

								climate: "Hot",
								major: "Available",
								cost: "$22000 /semester",
								extraCur: "Available",
								size: "Large",
								rep: "Highly ranked",
								job: "98%",
								grad: "Yes",
								location: "southwest",


								x:300,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,

								climate: "Hot",
								major: "Available",
								cost: "$15000 /semester",
								extraCur: "Available",
								size: "Large",
								rep: "Middle ranked",
								job: "96%",
								grad: "Yes",
								location: "southwest",

								x:200,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "9 out of 9 criteria."
						}
					},
					{	
						index:4,
						student:{
							avatar:3,
							climate: "Seasons",
							major: "Chinese Language and Lit",
							cost: "$15000-$20000 /semester",
							extraCur: "Sports",
							size: "Medium",
							rep: "Highly ranked",
							job: "95%",
							grad: "Yes",
							location: "west coast"
						},
						schools:[
							{
								index:0,
								climate: "Seasons",
								major: "Available",
								cost:"$20000 /semester",
								extraCur: "Available",
								size: "Medium",
								rep:"Middle ranked",
								job:"95%",
								grad:"Yes",
								location:"west coast",

								x:150,
								y:250,
								sidebarType:"righttop",
								name:"School 1"
							},
							{
								index:1,
								climate: "Seasons",
								major: "Not available",
								cost: "$15000 /semester",
								extraCur: "Available",
								size: "Medium",
								rep: "Highly ranked",
								job: "95%",
								grad:"Yes",
								location:"west coast",

								x:300,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,

								climate: "Seasons",
								major:"Not available",
								cost: "$18000 /semester",
								extraCur: "Not available",
								size: "Medium",
								rep: "Highly ranked",
								job: "95%",
								grad: "Yes",
								location: "west coast",

								x:200,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "8 out of 9 criteria."
						}
					},
					{	
						index:5,
						student:{
							avatar:3,

							climate: "Seasons",
							major: "Computer science",
							cost: "$10000-$15000 /semester",
							extraCur: "Student Government",
							size: "Large",
							rep: "Middle ranked",
							job: "90%",
							grad: "No",
							location: "southeast",
						},
						schools:[
							{
								index:0,
								climate: "Seasons",
								major:"Available",
								cost:"$14000 /semester",
								extraCur: "Available",
								size:"Large",
								rep:"Middle ranked",
								job:"89%",
								grad:"Yes",
								location:"southeast",

								x:150,
								y:250,
								sidebarType:"righttop",
								name:"School 1"
							},
							{
								index:1,
								climate: "Hot",
								major:"Available",
								cost:"$8000 /semester",
								extraCur: "Available",
								size:"Small",
								rep:"Low ranked",
								job:"90%",
								grad:"Yes",
								location:"southeast",

								x:300,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,

								climate: "Hot",
								major: "Available",
								cost: "$16000 /semester",
								extraCur: "Available",
								size: "Medium",
								rep: "Middle ranked",
								job: "85%",
								grad: "Yes",
								location: "southeast",

								x:200,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "8 out of 9 criteria."
						}
					},
					{	
						index:6,
						student:{
							avatar:3,

							climate: "Hot",
							major: "Clinical Medicine",
							cost: "$10000-$15000 /semester",
							extraCur: "Music",
							size: "Small",
							rep: "Middle ranked",
							job: "90%",
							grad: "Yes",
							location: "northeast"
						},
						schools:[
							{
								index:0,

								climate: "Seasons",
								major: "Available",
								cost: "$15000 /semester",
								extraCur: "Available",
								size: "Small",
								rep: "Middle ranked",
								job: "90%",
								grad: "Yes",
								location: "northeast",

								x:150,
								y:250,
								sidebarType:"righttop",
								name:"School 1"
							},
							{
								index:1,

								climate: "Seasons",
								major: "Available",
								cost: "$11000 /semester",
								extraCur: "Not available",
								size: "Small",
								rep: "Middle ranked",
								job: "90%",
								grad: "No",
								location: "northeast",

								x:300,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,

								climate: "Seasons",
								major: "Not available",
								cost: "$12000/semester",
								extraCur: "Available",
								size: "Small",
								rep: "Middle ranked",
								job: "90%",
								grad: "Yes",
								location: "northeast",

								x:200,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "8 out of 9 criteria."
						}
					},
					{	
						index:7,
						student:{
							avatar:3,

							climate: "Seasons",
							major: "Economics",
							cost: "$10000-$15000 /semester",
							extraCur: "Volunteer Work",
							size: "Medium",
							rep: "Middle ranked",
							job: "90%",
							grad: "No",
							location: "midwest"
						},
						schools:[
							{
								index:0,

								climate: "Seasons",
								major: "Available",
								cost: "$15000 /semester",
								extraCur: "Available",
								size: "Medium",
								rep: "Middle ranked",
								job: "98%",
								grad: "Yes",
								location: "midwest",

								x:150,
								y:250,
								sidebarType:"righttop",
								name:"School 1"
							},
							{
								index:1,

								climate: "Seasons",
								major: "Available",
								cost: "$10000 /semester",
								extraCur: "Available",
								size: "Medium",
								rep: "Low ranked",
								job: "85%",
								grad: "Yes",
								location: "midwest",

								x:300,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,
								climate: "Seasons",
								major: "Not available",
								cost: "$10000-$15000 /semester",
								extraCur: "Available",
								size: "Large",
								rep: "Low ranked",
								job: "90%",
								grad: "Yes",
								location: "midwest",

								x:200,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "9 out of 9 criteria."
						}
					},
					{	
						index:8,
						student:{
							avatar:3,

							climate: "Hot",
							major: "Business Administration",
							cost: "$10000-$15000 /semester",
							extraCur: "Clubs",
							size:"Large",
							rep:"Middle ranked",
							job:"90%",
							grad:"Yes",
							location:"southwest"
						},
						schools:[
							{
								index:0,

								climate: "Seasons",
								major: "Available",
								cost: "$10500 /semester",
								extraCur: "Available",
								size:"Large",
								rep:"Middle ranked",
								job:"93%",
								grad:"Yes",
								location:"southwest",

								x:150,
								y:250,
								sidebarType:"righttop",
								name:"School 1"
							},
							{
								index:1,
								climate: "Hot",
								major: "Available",
								cost: "$10000 /semester",
								extraCur: "Available",
								size:"Small",
								rep:"Middle ranked",
								job:"95%",
								grad:"No",
								location:"southwest",

								x:300,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,
								climate: "Seasons",
								major: "Available",
								cost: "$11000 /semester",
								extraCur: "Available",
								size: "Large",
								rep: "Middle ranked",
								job: "90%",
								grad: "No",
								location: "southwest",
								
								x:200,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "8 out of 9 criteria."
						}
					},
					{	
						index:9,
						student:{
							avatar:3,

							climate: "Hot",
							major: "Civil Engineering",
							cost: "$10000-$15000 /semester",
							extraCur: "Sports",
							size: "Small",
							rep: "Middle ranked",
							job: "90%",
							grad: "No",
							location: "west coast",
						},
						schools:[
							{
								index:0,

								climate: "Seasons",
								major: "Available",
								cost: "$15000 /semester",
								extraCur: "Available",
								size: "Small",
								rep: "Middle ranked",
								job: "96%",
								grad: "Yes",
								location: "west coast",

								x:150,
								y:250,
								sidebarType:"righttop",
								name:"School 1"
							},
							{
								index:1,

								climate: "Seasons",
								major: "Available",
								cost: "$12000 /semester",
								extraCur: "Not available",
								size:"Small",
								rep:"Low ranked",
								job:"90%",
								grad:"Yes",
								location:"west coast",

								x:300,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,

								climate: "Cold",
								major: "Available",
								cost: "$11000 /semester",
								extraCur: "Available",
								size: "Small",
								rep: "Middle ranked",
								job: "90%",
								grad: "Yes",
								location: "west coast",
								
								x:200,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "8 out of 9 criteria."
						}
					},
					{	
						index:10,
						student:{
							avatar:3,

							climate: "Seasons",
							major: "Architecture",
							cost: "$5000-$10000 /semester",
							extraCur: "Student Government",
							size: "Medium",
							rep: "Low ranked",
							job: "85%",
							grad: "Yes",
							location: "southeast"
						},
						schools:[
							{
								index:0,
								climate: "Seasons",
								major: "Available",
								cost: "$10000 /semester",
								extraCur: "Available",
								size: "Medium",
								rep: "Low ranked",
								job: "85%",
								grad: "Yes",
								location: "southeast",

								x:150,
								y:250,
								sidebarType:"righttop",
								name:"School 1"
							},
							{
								index:1,
								
								climate: "Hot",
								major: "Available",
								cost: "$6000 /semester",
								extraCur: "Available",
								size: "Large",
								rep: "Low ranked",
								job: "85%",
								grad: "No",
								location: 'southeast',

								x:300,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,

								climate: "Seasons",
								major: "Not available",
								cost: "$12000 /semester",
								extraCur: "Available",
								size: "Medium",
								rep: "Low ranked",
								job: "85%",
								grad: "Yes",
								location: "southeast",
								x:200,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "9 out of 9 criteria."
						}
					},
					{	
						index:11,
						student:{
							avatar:3,

							climate: "Cold",
							major: "Law",
							cost: "$5000-$10000 /semester",
							extraCur: "Music",
							size: "Large",
							rep: "Low ranked",
							job: "85%",
							grad: "No",
							location: "northeast"
						},
						schools:[
							{
								index:0,

								climate: "Seasons",
								major: "Available",
								cost: "$10000 /semester",
								extraCur: "Available",
								size: "Large",
								rep: "Low ranked",
								job: "85%",
								grad: "Yes",
								location: "northeast",

								x:150,
								y:250,
								sidebarType:"righttop",
								name:"School 1"
							},
							{
								index:1,

								climate: "Seasons",
								major:"Available",
								cost:"$15000 /semester",
								extraCur: "Available",
								size:"Large",
								rep:"Low ranked",
								job:"80%",
								grad:"Yes",
								location:"northeast",

								x:300,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,

								climate: "Cold",
								major: "Not available",
								cost: "$10000 /semester",
								extraCur: "Available",
								size: "Large",
								rep: "Low ranked",
								job: "85%",
								grad: "Yes",
								location: "northeast",
								
								x:200,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "8 out of 9 criteria."
						}
					},
					{	
						index:12,
						student:{
							avatar:3,

							climate: "Hot",
							major: "Accounting",
							cost: "$5000-$10000 /semester",
							extraCur: "Volunteer Work",
							size: "Small",
							rep: "Low ranked",
							job: "85%",
							grad: "Yes",
							location: "midwest"
						},
						schools:[
							{
								index:0,

								climate: "Hot",
								major: "Available",
								cost: "$8000 /semester",
								extraCur: "Available",
								size: "Medium",
								rep: "Middle ranked",
								job: "85%",
								grad: "Yes",
								location: "midwest",

								x:150,
								y:250,
								sidebarType:"righttop",
								name:"School 1"
							},
							{
								index:1,

								climate: "Seasons",
								major: "Available",
								cost: "$10000 /semester",
								extraCur: "Available",
								size: "Small",
								rep: "Middle ranked",
								job: "85%",
								grad: "No",
								location: "midwest",

								x:300,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,

								climate: "Hot",
								major: "Available",
								cost: "$13000 /semester",
								extraCur: "Available",
								size: "Small",
								rep: "Low ranked",
								job: "85%",
								grad: "Yes",
								location: "midwest",
								
								x:200,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "8 out of 9 criteria."
						}
					},
					{	
						index:13,
						student:{
							avatar:3,

							climate: "Seasons",
							major: "Industrial engineering",
							cost: "$5000-$10000 /semester",
							extraCur: "Clubs",
							size: "Medium",
							rep: "Low ranked",
							job: "85%",
							grad: "No",
							location: "southwest"
						},
						schools:[
							{
								index:0,

								climate: "Hot",
								major: "Available",
								cost: "$10000 /semester",
								extraCur: "Available",
								size: "Medium",
								rep: "Middle ranked",
								job: "85%",
								grad: "Yes",
								location: "southwest",

								x:150,
								y:250,
								sidebarType:"righttop",
								name:"School 1"
							},
							{
								index:1,

								climate: "Hot",
								major: "Available",
								cost: "$5000 /semester",
								extraCur: "Available",
								size: "Medium",
								rep: "Low ranked",
								job: "80%",
								grad: "Yes",
								location: "southwest",

								x:300,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,

								climate: "Seasons",
								major:"Available",
								cost: "$6000 /semester",
								extraCur: "Available",
								size: "Large",
								rep: "Low ranked",
								job: "75%",
								grad: "Yes",
								location: "southwest",
								
								x:200,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "8 out of 9 criteria."
						}
					},
					{	
						index:14,
						student:{
							avatar:3,

							climate: "Cold",
							major: "Game Development",
							cost: "$5000-$10000 /semester",
							extraCur: "Sports",
							size: "Large",
							rep: "Low ranked",
							job:"85%",
							grad:"Yes",
							location:"west coast",
						},
						schools:[
							{
								index:0,

								climate: "Seasons",
								major: "Available",
								cost: "$8000 /semester",
								extraCur: "Available",
								size: "Large",
								rep: "Low ranked",
								job: "90%",
								grad: "Yes",
								location: "west coast",

								x:150,
								y:250,
								sidebarType:"righttop",
								name:"School 1"
							},
							{
								index:1,

								climate: "Seasons",
								major: "Available",
								cost: "$6500 /semester",
								extraCur: "Available",
								size: "Small",
								rep: "Low ranked",
								job: "87%",
								grad: "No",
								location: "west coast",

								x:300,
								y:300,
								sidebarType:"righttop",
								name:"School 2"
							},
							{
								index:2,

								climate: "Cold",
								major: "Not available",
								cost: "$7000 /semester",
								extraCur: "Available",
								size:"Large",
								rep:"Low ranked",
								job:"88%",
								grad:"Yes",
								location:"west coast",
								
								x:200,
								y:200,
								sidebarType:"righttop",
								name:"School 3"
							}
						],
						correct:{
							index:0,
							feedback: "8 out of 9 criteria."
						}
					}
				]
			}
		},
		{
			id:1,
			title:"Perfecting the College Interview",
			data:{
				questions:[
					{id:0, text:"What major are you interested in and why?"},
					{id:1, text:"Who has had the biggest influence on you and why?"},
					{id:2, text:"Identify your greatest weakness and how you are working to overcome it."},
					{id:3, text:"Identify your greatest asset and what you have done to make that possible."},
					{id:4, text:"If your friends were describing you what adjectives would they use and why?"},
					{id:5, text:"If your teachers were describing you what adjectives would they use and why?"},
					{id:6, text:"What is your favorite hobby and how has it improved your wellbeing?"},
					{id:7, text:"Have you ever had to be a leader?\n\nWhat was the outcome of that experience and what did you learn?"},
					{id:8, text:"What was the last book you read and how was it?"},
					{id:9, text:"Tell me something interesting about you that will set you apart from other students."},
					{id:10, text:"What about our university makes you interested in attending?"},
					{id:11, text:"What are your plans for after college?"},
					{id:12, text:"What would you like to improve about yourself while you are in college and why?"},
					{id:13, text:"Tell me about a challenging experience you have gone through and how you overcame it."},
					{id:14, text:"What has been your greatest achievement so far?"},
					{id:15, text:"What have you disliked about school so far?"},
					{id:16, text:"Who is your favorite teacher and why?"},
					{id:17, text:"What questions do you have for me about our university?"}
				]
			}
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