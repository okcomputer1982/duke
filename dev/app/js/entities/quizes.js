DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _) {
	var API = {
		
		getQuizes: function(userID){
			var def = $.Deferred();

			var QuizTable = Parse.Object.extend("Quizes"),
				query = new Parse.Query(QuizTable);

			query.equalTo("userID", userID);

			query.find(function(results) {
				var quizes = [];
				_.map(results, function(obj, id) {
					quizes.push({
						"frameID":obj.get('frameID'),
						"response":obj.get('response')
					});
				});

				def.resolve(quizes);
			});

			return(def.promise());
		}

		// getAssignment:function(journalObj) {
		// 	var def = $.Deferred(),
		// 		JournalTable = Parse.Object.extend("Journals"),
		// 		query = new Parse.Query(JournalTable);

		// 	query.equalTo("frameID", journalObj.frameID);
		// 	query.equalTo("userID", journalObj.userID);

		// 	query.find(function(results){
		// 		var journal;
				
		// 		if (results.length === 0) {
		// 			journal = new JournalTable();
		// 		} else {
		// 			journal = results[0];
		// 		}

		// 		journal.save(journalObj,{
		// 			success:function(journal) {
		// 				def.resolve({success:true});
		// 			},
		// 			error:function(journal, error) {
		// 				def.resolve({success:false, error:error});
		// 			}
		// 		});
		// 	});
		// 	return(def.promise());
		// }
	};

	DukeApp.reqres.setHandler("quizes:entities", function(userID) {
		return API.getQuizes(userID);
	});

	// DukeApp.reqres.setHandler("save:assignments:entities", function(assignmentObj) {
	// 	return API.setAssignment(assignmentObj);
	// });

	// DukeApp.reqres.setHandler("save:assignmentGrade:entities", function(assignmentObj) {
	// 	return API.setAssignmentGrade(assignmentObj);
	// });
});