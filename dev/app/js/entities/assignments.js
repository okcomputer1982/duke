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
						"frameIndex":obj.get('frameIndex'),
						"text":obj.get('text'),
						"isGraded":obj.get('isGraded'),
						"grade":obj.get('grade'),
						"feedback":obj.get('feedback'),
						"classIndex":obj.get('classIndex')
					});
				});

				def.resolve(assignments);
			});

			return(def.promise());
		},

		setAssignment:function(assignmentObj) {
			var def = $.Deferred(),
				AssignmentTable = Parse.Object.extend("Assignments"),
				query = new Parse.Query(AssignmentTable);

			assignmentObj.isGraded = false;
			
			query.equalTo("frameIndex", assignmentObj.frameIndex);
			query.equalTo("userID", 	assignmentObj.userID);
			query.equalTo("classIndex", assignmentObj.classIndex);

			query.find(function(results){
				var assignment;
				
				if (results.length === 0) {
					assignment = new AssignmentTable();
					
					assignment.save(assignmentObj,{
						success:function(journal) {
							def.resolve({success:true});
						},
						error:function(journal, error) {
							def.resolve({success:false, error:error});
						}
					});
				} else {
					alert("Assignment already submitted.");
					def.response({success:false});
				}
			});

			return(def.promise());
		}
	};

	DukeApp.reqres.setHandler("assignments:entities", function(userID) {
		return API.getAssignments(userID);
	});

	DukeApp.reqres.setHandler("save:assignments:entities", function(assignmentObj) {
		return API.setAssignment(assignmentObj);
	});
});