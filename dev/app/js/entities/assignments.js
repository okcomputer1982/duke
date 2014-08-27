DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _) {
	var API = {
		
		getAssignments: function(userID){
			var def = $.Deferred();

			var AssignmentTable = Parse.Object.extend("Assignments"),
				query = new Parse.Query(AssignmentTable);

			query.equalTo("userID", userID);

			query.find(function(results) {
				var assignments = [];
				_.map(results, function(obj, id) {
					assignments.push({
						"frameID":obj.get('frameID'),
						"text":obj.get('text'),
						"isGraded":obj.get('isGraded'),
						"grade":obj.get('grade'),
						"feedback":obj.get('grade')
					});
				});

				def.resolve(assignments);
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

	DukeApp.reqres.setHandler("assignments:entities", function(userID) {
		return API.getAssignments(userID);
	});

	// DukeApp.reqres.setHandler("save:assignments:entities", function(assignmentObj) {
	// 	return API.setAssignment(assignmentObj);
	// });

	// DukeApp.reqres.setHandler("save:assignmentGrade:entities", function(assignmentObj) {
	// 	return API.setAssignmentGrade(assignmentObj);
	// });
});