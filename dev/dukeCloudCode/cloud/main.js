Parse.Cloud.define("deleteUser", function(request, response) {
	var query = new Parse.Query(Parse.User);
	query.equalTo("objectId", request.params.id);
	query.first({
		success:function(result){
			Parse.Cloud.useMasterKey();
			result.destroy({
				success:function(){
					response.success({result:true, obj:result});
				},
				error:function(){
					response.error();	
				}
			});
		},
		error:function(){
			response.error();
		}
	});
	
});