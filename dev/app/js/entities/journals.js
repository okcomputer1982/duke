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
						"frameIndex":obj.get('frameIndex'),
						"text":obj.get('text')
					});
				});

				def.resolve(journals);
			});

			return(def.promise());
		},

		setJournal:function(journalObj) {
			var def = $.Deferred(),
				JournalTable = Parse.Object.extend("Journals"),
				query = new Parse.Query(JournalTable);

			query.equalTo("frameIndex", journalObj.frameIndex);
			query.equalTo("userID", journalObj.userID);

			query.find(function(results){
				var journal;
				
				if (results.length === 0) {
					journal = new JournalTable();
				} else {
					journal = results[0];
				}

				journal.save(journalObj,{
					success:function(journal) {
						def.resolve({success:true});
					},
					error:function(journal, error) {
						def.resolve({success:false, error:error});
					}
				});
			});
			return(def.promise());
		}
	};

	DukeApp.reqres.setHandler("journals:entities", function(userID) {
		return API.getJournals(userID);
	});

	DukeApp.reqres.setHandler("save:journals:entities", function(journalObj) {
		return API.setJournal(journalObj);
	});
});