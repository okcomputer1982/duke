DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _) {
	var badges = {
		group1:[
			{name:"accuracy",  active:true, popupname:"All Accuracy", popupdesc:"To complete this badge you must earn 90% of the Accuracy attribute."},
			{name:"analysis",  active:true, popupname:"All Analysis", popupdesc:"To complete this badge you must earn 90% of the Analysis attribute."},
			{name:"application",  active:false, popupname:"All Application", popupdesc:"To complete this badge you must earn 90% of the Application attribute."},
			{name:"comprehension",  active:false, popupname:"All Comprehension", popupdesc:"To complete this badge you must earn 90% of the Comprehension attribute."}
		],

		group2:[
			{name:"exploration",  active:false, popupname:"All Exploration", popupdesc:"To complete this badge you must earn 90% of the Exploration attribute."},
			{name:"intercultural",  active:false, popupname:"Intercultural Competence", popupdesc:"To complete this badge you must earn 90% of the Intercultural Competence attribute."},
			{name:"introspection",  active:true, popupname:"All Introspection", popupdesc:"To complete this badge you must earn 90% of the Introspection attribute."},
			{name:"knowledge",  active:false, popupname:"All Knowledge", popupdesc:"To complete this badge you must earn 90% of the Knowledge attribute."}
		], 
		
		group3:[
			{name:"reflection",  active:false, popupname:"All Reflection", popupdesc:"To complete this badge you must earn 90% of the Reflection attribute."},
			{name:"thoroughness",  active:false, popupname:"All Thoroughness", popupdesc:"To complete this badge you must earn 90% of the Thoroughness attribute."},
			{name:"quiz",  active:false, popupname:"All Quizes", popupdesc:"To complete this badge you must earn 90% of all Quizes."},
			{name:"attribute",  active:true, popupname:"All Attributes", popupdesc:"To complete this badge you must earn 90% of all Attributes."}
		]
	};

	var API = {
		getBadges:function() {
			var def = $.Deferred();

			def.resolve(badges);

			return(def.promise());
		}
	};


	DukeApp.reqres.setHandler("badges:entities", function() {
		return API.getBadges();
	});
});