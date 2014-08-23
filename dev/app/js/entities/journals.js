DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _) {
	var API = {
		
		getJournals: function(userID){
			var def = $.Deferred();

			var JournalTable = Parse.Object.extend("Journals"),
				query = new Parse.Query(JournalTable);

			query.equalTo("userID", userID);

			query.find(function(results) {
				var journals = [];
				_.map(results, function(obj, id) {
					journals.push({
						"frameID":obj.get('frameID'),
						"text":obj.get('text')
					});
				});

				def.resolve(journals);
			});

			return(def.promise());
		}
	};

	DukeApp.reqres.setHandler("journals:entities", function(userID) {
		return API.getJournals(userID);
	});
});