this["templates"] = this["templates"] || {};

this["templates"]["_components/footer/footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"footer\" class=\"navbar navbar-fixed-bottom\">\n  <div class=\"navbar-inner\">\n    <div class=\"container\">\n      <h2>footer</h2>\n    </div>\n  </div>\n</div>";
  });

this["templates"]["_components/header/footer"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"navbar navbar-default navbar-fixed-bottom\" id=\"footer\">\n  <div class=\"navbar-inner\">\n    <div class=\"container\">\n      <h2>footer</h2>\n    </div>\n  </div>\n</div>";
  });

this["templates"]["_components/header/header"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container-fluid inner-wrap\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle pull-right\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-haspopup=\"true\" aria-hidden=\"true\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <a class=\"navbar-brand logo replace hidden-phone\" href=\"#\">Duke University</a>\n      \n    </div>\n\n    <div class=\"navbar-collapse collapse\" role=\"navigation\">\n      \n      <div id=\"user_id\">\n        Welcome\n        <span id=\"username\">\n          <a href=\"#profile/student\"></a>\n        </span>\n      </div>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a id=\"dashboard_link\" class=\"header_link\" href=\"#profile/student\">Dashboard</a></li>\n        <li><a id=\"admin_link\" class=\"header_link\" href=\"#admin/teacher\">Dashboard</a></li>\n        <li><a id=\"coursework_link\" class=\"header_link\" href=\"#week\">Coursework</a></li>\n        <li><a id=\"logout_link\" class=\"header_link\" href=\"#\" class=\"logout_button\">Logout</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</div>";
  });

this["templates"]["admin/manager/editClasses"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <option value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n      ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <option value=\""
    + escapeExpression(((stack1 = (depth0 && depth0.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = (depth0 && depth0.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ", "
    + escapeExpression(((stack1 = (depth0 && depth0.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n      ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <option value=\"this.index\">"
    + escapeExpression(((stack1 = (depth0 && depth0.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " - "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.template)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</option>\n    ";
  return buffer;
  }

  buffer += "<div class=\"container-fluid\">\n  <h4>Manage Classes</h4>\n\n  <hr/>\n  <h4>Create A Class</h4>\n  <div class=\"admin-top\">\n    <input type=\"text\" placeholder=\"Class Name\">\n    \n    <select class=\"combobox\">\n      <option>Select Class Template</option>\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.classTemplates), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n\n    <select class=\"combobox\">\n      <option>Select A Instructor</option>\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.teachers), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </select>\n\n    <button type=\"submit\" name=\"add\">Create</button>\n  </div>\n  \n  <hr/>\n  <h4>Edit Classes</h4>\n  <select class=\"combobox\">\n    <option>Select A Class</option>\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.classes), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </select>\n  <h5>Class Created:       <span>------</span><h5>\n  <h5>Class Last Viewed:   <span>------</span><h5>\n  <h5>Total Instructors:   <span>-</span><h5>\n  <h5>Total Students:      <span>-</span><h5>\n  <h5>Current Module:      <span>-</span><h5>\n\n  <button type=\"submit\" name=\"add\">Delete Class</button>\n\n  <hr/>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <h4>Edit Teachers</h4>\n      <table id=\"admin-students\" class=\"table table-responsive table-bordered table-striped\">\n        <tbody>\n          <tr>\n            <th>Name</th><th>Class Assignments</th><th>Actions</th>\n          </tr>\n          <tr>\n            <td>Teacher 1</td>\n            <td>0,1,2</td>\n            <td><button>Add to Class</button><button>Remove from Class</button></td>\n          </tr>\n          <tr>\n            <td>Teacher 2</td>\n            <td>0,1,2</td>\n            <td><button>Add to Class</button><button>Remove from Class</button></td>\n          </tr>\n          <tr>\n            <td>Teacher 3</td>\n            <td>0,1,2</td>\n            <td><button>Add to Class</button><button>Remove from Class</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"col-md-6\">\n      <h4>Edit Students</h4>\n      <table id=\"admin-students\" class=\"table table-responsive table-bordered table-striped\">\n        <tbody>\n          <tr>\n            <th>Name</th><th>Class Assignments</th><th>Actions</th>\n          </tr>\n          <tr>\n            <td>Student 1</td>\n            <td>0,1,2</td>\n            <td><button>Add to Class</button><button>Remove from Class</button></td>\n          </tr>\n          <tr>\n            <td>Student 2</td>\n            <td>0,1,2</td>\n            <td><button>Add to Class</button><button>Remove from Class</button></td>\n          </tr>\n          <tr>\n            <td>Student 3</td>\n            <td>0,1,2</td>\n            <td><button>Add to Class</button><button>Remove from Class</button></td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>";
  return buffer;
  });

this["templates"]["admin/manager/editGuests"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n  <h4>Manage Guests</h4>\n\n  <hr/>\n  <h4>Add Guest</h4>\n  <div class=\"admin-top\">\n    <input type=\"text\" placeholder=\"First Name\">\n    <input type=\"text\" placeholder=\"Last Name\">\n    <input type=\"text\" placeholder=\"Username\">\n    <input type=\"text\" placeholder=\"Email\">\n    <select class=\"combobox\">\n      <option>Select Class</option>\n      <option value=\"0\">A Student's Journey: Semester 1</option>\n      <option value=\"1\">A Student's Journey: Semester 2</option>\n    </select>\n    <br/>\n    <button type=\"submit\" name=\"add\">Add</button>\n  </div>\n\n  <hr/>\n  <h4>Edit Guests</h4>\n  <table id=\"admin-students\" class=\"table table-responsive table-bordered table-striped\">\n    <tbody>\n      <tr>\n        <th>Name</th><th>Email Address</th><th>Class</th><th>Actions</th>\n      </tr>\n      <tr>\n        <td>Student 1</td>\n        <td>student1@school.edu</td>\n        <td>Math 101</td>\n        <td><button>Edit</button><button>Reset Password</button><button>Delete</button></td>\n      </tr>\n      <tr>\n        <td>Student 2</td>\n        <td>student2@school.edu</td>\n        <td>Math 103</td>\n        <td><button>Edit</button><button>Reset Password</button><button>Delete</button></td>\n      </tr>\n      <tr>\n        <td>Student 3</td>\n        <td>student3@school.edu</td>\n        <td>Math 102</td>\n        <td><button>Edit</button><button>Reset Password</button><button>Delete</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>";
  });

this["templates"]["admin/manager/editStudents"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n  <h4>Manage Students</h4>\n\n  <hr/>\n  <h4>Add Student</h4>\n  <div class=\"admin-top\">\n    <input type=\"text\" placeholder=\"First Name\">\n    <input type=\"text\" placeholder=\"Last Name\">\n    <input type=\"text\" placeholder=\"Username\">\n    <input type=\"text\" placeholder=\"Email\">\n    <select class=\"combobox\">\n      <option>Select Class</option>\n      <option value=\"0\">A Student's Journey: Semester 1</option>\n      <option value=\"1\">A Student's Journey: Semester 2</option>\n    </select>\n    <br/>\n    <button type=\"submit\" name=\"add\">Add</button>\n  </div>\n\n  <hr/>\n  <h4>Edit Students</h4>\n  <table id=\"admin-students\" class=\"table table-responsive table-bordered table-striped\">\n    <tbody>\n      <tr>\n        <th>Name</th><th>Email Address</th><th>Class</th><th>Actions</th>\n      </tr>\n      <tr>\n        <td>Student 1</td>\n        <td>student1@school.edu</td>\n        <td>Math 101</td>\n        <td><button>Edit</button><button>Reset Password</button><button>Delete</button></td>\n      </tr>\n      <tr>\n        <td>Student 2</td>\n        <td>student2@school.edu</td>\n        <td>Math 103</td>\n        <td><button>Edit</button><button>Reset Password</button><button>Delete</button></td>\n      </tr>\n      <tr>\n        <td>Student 3</td>\n        <td>student3@school.edu</td>\n        <td>Math 102</td>\n        <td><button>Edit</button><button>Reset Password</button><button>Delete</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>";
  });

this["templates"]["admin/manager/editTeachers"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n  <h4>Manage Teachers</h4>\n\n  <hr/>\n  <h4>Add Teacher</h4>\n  <div class=\"admin-top\">\n    <input type=\"text\" placeholder=\"First Name\">\n    <input type=\"text\" placeholder=\"Last Name\">\n    <input type=\"text\" placeholder=\"Username\">\n    <input type=\"text\" placeholder=\"Email\">\n    <select class=\"combobox\">\n      <option>Select Class</option>\n      <option value=\"0\">A Student's Journey: Semester 1</option>\n      <option value=\"1\">A Student's Journey: Semester 2</option>\n    </select>\n    <br/>\n    <button type=\"submit\" name=\"add\">Add</button>\n  </div>\n\n  <hr/>\n  <h4>Edit Teachers</h4>\n  <table id=\"admin-students\" class=\"table table-responsive table-bordered table-striped\">\n    <tbody>\n      <tr>\n        <th>Name</th><th>Email Address</th><th>Class</th><th>Actions</th>\n      </tr>\n      <tr>\n        <td>Student 1</td>\n        <td>student1@school.edu</td>\n        <td>Math 101</td>\n        <td><button>Edit</button><button>Reset Password</button><button>Delete</button></td>\n      </tr>\n      <tr>\n        <td>Student 2</td>\n        <td>student2@school.edu</td>\n        <td>Math 103</td>\n        <td><button>Edit</button><button>Reset Password</button><button>Delete</button></td>\n      </tr>\n      <tr>\n        <td>Student 3</td>\n        <td>student3@school.edu</td>\n        <td>Math 102</td>\n        <td><button>Edit</button><button>Reset Password</button><button>Delete</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>";
  });

this["templates"]["admin/manager/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"header\"></div>\n<div class=\"container-fluid\">\n	<nav id=\"admin-nav\">\n		<a data-link=\"classes\" class=\"nav-link manage-classes\">Manage Classes</a>\n		<a data-link=\"teachers\" class=\"nav-link manage-instructors\">Manage Teachers</a>\n	    <a data-link=\"students\" class=\"nav-link manage-students\">Manage Students</a>\n	    <a data-link=\"guests\" class=\"nav-link manage-guests\">Manage Guests</a>\n	</nav>\n\n	<div id=\"content\">\n	</div>\n\n</div>";
  });

this["templates"]["admin/teacher/editClass"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n	<hr/>\n	<h4>Manage Classes</h4>\n	<div class=\"admin-top\">\n	    <select class=\"combobox\">\n	      <option>Select Class</option>\n	      <option value=\"0\">A Student's Journey: Semester 1</option>\n	      <option value=\"1\">A Student's Journey: Semester 2</option>\n	    </select>\n		\n		<h5>Class Created:       <span>March 3rd 2015</span><h5>\n		<h5>Class Last Viewed:   <span>March 3rd 2015</span><h5>\n		<h5>Total Students:      <span>5</span><h5>\n		<h5>Current Module:      <span>5</span><h5>\n		\n		<hr/>\n		<h4>Edit Students</h4>\n		<div class=\"row\">\n			<div class=\"col-md-6\">\n			      <table id=\"admin-students\" class=\"table table-responsive table-bordered table-striped\">\n			        <tbody>\n			          <tr>\n			            <th>Name</th><th>Actions</th>\n			          </tr>\n			          <tr>\n			            <td>Student 1</td>\n			            <td><button>Add to Class</button><button>Remove from Class</button></td>\n			          </tr>\n			          <tr>\n			            <td>Student 2</td>\n			            <td><button>Add to Class</button><button>Remove from Class</button></td>\n			          </tr>\n			          <tr>\n			            <td>Student 3</td>\n			            <td><button>Add to Class</button><button>Remove from Class</button></td>\n		    	      </tr>\n		    	    </tbody>\n		      	</table>\n			</div>\n			<div class=\"col-md-6\">\n			\n			</div>\n\n		</div>\n	</div>\n\n</div>";
  });

this["templates"]["admin/teacher/editSchedule"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n  <h2>Edit Schedule</h2>\n  \n</div>";
  });

this["templates"]["admin/teacher/editStudent"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n	<hr/>\n  	<h4>Manage Students</h4>\n	<div class=\"admin-top\">\n	    <select class=\"combobox\">\n	      <option>Select Student</option>\n	      <option value=\"0\">Student One</option>\n	      <option value=\"1\">Student Two</option>\n	      <option value=\"1\">Student There</option>\n	      <option value=\"1\">Student Four</option>\n	    </select>\n	</div>  \n	<div class=\"row\">\n		<div class=\"col-md-3\">\n			<img src=\"../images/avatars/avatar.png\" class=\"avatar\">\n		</div>\n		<div class=\"col-md-9\">\n			<h5>Name:      				<span>Student One</span><h5>\n		  	<h5>Myers Brigs:      		<span>INTJ</span><h5>\n		  	<h5>Last Accessed:       	<span>March 3rd 2015</span><h5>\n		  	<h5>Last Module Visited:    <span><a html=\"#\">Week 4</a></span><h5>\n		  	<h5>Last Frame Visited:    	<span>Video</span><h5>\n			<h5>Completion:   			<span>96%</span><h5>\n			<h5>Total Students:      	<span>5</span><h5>\n			<h5>Current Module:      <span>5</span><h5>\n		</div>\n	</div>\n  	\n  	<nav id=\"admin-nav\">\n    	<a data-link=\"assignments\" class=\"grade-link manage-assignments\">Assignments</a>\n    	<a data-link=\"journal\" class=\"grade-link manage-journal\">Journals</a>\n      	<a data-link=\"quizes\" class=\"grade-link manage-quizes\">Quizes</a>\n  	</nav>\n\n  <div class=\"grading\"></div>\n</div>";
  });

this["templates"]["admin/teacher/gradeAssignments"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n	<h4>Grade Assignments</h4>\n\n    <select class=\"combobox\">\n      	<option>Select Module</option>\n      	<option value=\"0\">Week 1</option>\n      	<option value=\"1\">Week 2</option>\n      	<option value=\"2\">Week 3</option>\n      	<option value=\"3\">Week 4</option>\n    	<option value=\"4\">Week 5</option>\n      	<option value=\"5\">Week 6</option>\n      	<option value=\"6\">Week 7</option>\n      	<option value=\"7\">Week 8</option>\n    </select>\n	\n	<div class=\"assigment_entry\">\n		<h5>Title: Title of Assignment</h5>\n		<h6>Instructions: Lorem Ipsum lorem Ipsum</h6>\n		<h6>Date Submitted: March 14 2015 4:30pm</h6>\n		<textarea name=\"\" id=\"userData\" cols=\"30\" rows=\"10\" readonly>\n			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n		</textarea>\n\n		<h6>Input Grade (0-100) <input type=\"text\"/></h6> \n		<textarea name=\"\" id=\"feedback\" cols=\"30\" rows=\"10\">\n		</textarea>    \n		<br/>\n		<button>Submit</button>\n\n		<hr/>\n	</div>\n\n	<div class=\"assigment_entry\">\n		<h5>Title: Title of Journal</h5>\n		<h6>Instructions: Lorem Ipsum lorem Ipsum</h6>\n		<h6>Date Submitted: March 14 2015 4:30pm</h6>\n		<textarea name=\"\" id=\"userData\" cols=\"30\" rows=\"10\" readonly>\n			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n		</textarea>\n\n		<h6>Input Grade (0-100) <input type=\"text\"/></h6> \n		<textarea name=\"\" id=\"feedback\" cols=\"30\" rows=\"5\">\n		</textarea>\n		<br/>\n		<button>Submit</button>\n\n		<hr/>\n	</div>\n</div>";
  });

this["templates"]["admin/teacher/gradeJournals"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n	<select class=\"combobox\">\n	  	<option>Select Module</option>\n	  	<option value=\"0\">Week 1</option>\n	  	<option value=\"1\">Week 2</option>\n	  	<option value=\"2\">Week 3</option>\n	  	<option value=\"3\">Week 4</option>\n		<option value=\"4\">Week 5</option>\n	  	<option value=\"5\">Week 6</option>\n	  	<option value=\"6\">Week 7</option>\n	  	<option value=\"7\">Week 8</option>\n	</select>\n\n	<div class=\"assigment_entry\">\n		<h5>Title: Title of Journal</h5>\n		<h6>Instructions: Lorem Ipsum lorem Ipsum</h6>\n		<h6>Date Submitted: March 14 2015 4:30pm</h6>\n		<textarea name=\"\" id=\"userData\" cols=\"30\" rows=\"10\" readonly>\n			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n		</textarea>\n		<hr/>\n	</div>\n</div>";
  });

this["templates"]["admin/teacher/gradeQuizes"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n  <h2>Grade Quizes</h2>\n</div>";
  });

this["templates"]["admin/teacher/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"header\"></div>\n<div class=\"container-fluid\">\n	<nav id=\"admin-nav\">\n		<a data-link=\"class\" class=\"nav-link manage-instructors\">Edit Class</a>\n	    <a data-link=\"students\" class=\"nav-link manage-students\">Edit Students</a>\n	    <a data-link=\"schedule\" class=\"nav-link manage-guests\">Edit Schedule</a>\n	</nav>\n	\n	<div id=\"content\">\n	</div>\n	\n	<div id=\"grading\">\n	</div>\n</div>";
  });

this["templates"]["comic/show/comicItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<img id=\"comic_img\" src=\"../images/comic_panels/comic";
  if (helper = helpers.seriesId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.seriesId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/comic";
  if (helper = helpers.seriesId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.seriesId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  if (helper = helpers.panelId) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.panelId); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".png\">";
  return buffer;
  });

this["templates"]["comic/show/comicList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"comic_panels\"></div>\n";
  });

this["templates"]["comic/show/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<div class=\"modal fade\" id=\"comic_modal\">\n  <a href=\"\" data-dismiss=\"modal\" class=\"modal_close\"><span aria-hidden=\n  \"true\">&times;</span></a>\n	\n	<h1 id=\"comic_title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n\n	<div class=\"container\" style=\"height:100%\">		\n		<div class=\"row\">\n			<div class=\"col-md-8\">\n				<div class=\"col-md-12\" id=\"comicBook\"></div>\n\n				<div id=\"navigation\">\n					<a href=\"#\" class=\"comic-sliders inactive\" id=\"slide-left\" data-direction=\"left\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a>\n\n					<a href=\"#\" class=\"comic-refresh\"><span class=\"icomoon icon-refresh\"></span></a>\n\n					<a href=\"#\" class=\"comic-sliders inactive\" id=\"slide-right\" data-direction=\"right\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>\n				</div>\n			</div>\n\n			<div class=\"col-md-4\">\n				<div id=\"response_panel\"></div>\n			</div>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["templates"]["comic/show/questionItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"question_test\">This is where the question goes?</div>\n<button>Answer 1</button>\n<button>Answer 2</button>\n<button>Answer </button>";
  });

this["templates"]["comic/show/responseItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<button class=\"answer\" data-ansIndex=\"0\" id=\"answer_0\">";
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.question)),stack1 == null || stack1 === false ? stack1 : stack1.choice_0)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<button class=\"answer\" data-ansIndex=\"1\" id=\"answer_1\">";
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.question)),stack1 == null || stack1 === false ? stack1 : stack1.choice_1)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n	";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<button class=\"answer\" data-ansIndex=\"2\" id=\"answer_2\">";
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.question)),stack1 == null || stack1 === false ? stack1 : stack1.choice_2)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n	";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<button class=\"answer\" data-ansIndex=\"3\" id=\"answer_3\">";
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.question)),stack1 == null || stack1 === false ? stack1 : stack1.choice_3)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n	";
  return buffer;
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "s\n		<button class=\"answer\" data-ansIndex=\"4\" id=\"answer_4\">";
  stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.question)),stack1 == null || stack1 === false ? stack1 : stack1.choice_4)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</button>\n	";
  return buffer;
  }

  buffer += "<div id=\"question_panel\">\n	<div class=\"question_test\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.question)),stack1 == null || stack1 === false ? stack1 : stack1.prompt)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.question)),stack1 == null || stack1 === false ? stack1 : stack1.choice_0), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.question)),stack1 == null || stack1 === false ? stack1 : stack1.choice_1), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.question)),stack1 == null || stack1 === false ? stack1 : stack1.choice_2), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.question)),stack1 == null || stack1 === false ? stack1 : stack1.choice_3), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.question)),stack1 == null || stack1 === false ? stack1 : stack1.choice_4), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div id=\"continue_panel\">\n	<button id=\"continue\">Click to Continue</button>\n</div>\n\n\n<div id=\"close_panel\">\n	<button id=\"close\" data-dismiss=\"modal\" >Click to Close</button>\n</div>";
  return buffer;
  });

this["templates"]["game/show/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<div class=\"modal fade\" id=\"game_modal\">\n  <a href=\"\" data-dismiss=\"modal\" class=\"modal_close\"><span aria-hidden=\n  \"true\">&times;</span></a>\n	\n	<div id=\"game_wrapper\">\n		<h1 id=\"game_title\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n	\n		<canvas id=\"game_container\"></canvas>\n	</div>\n</div>";
  return buffer;
  });

this["templates"]["home/login/content"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"content\">\n    \n	<div class=\"container-fluid\">\n\n		<div class=\"login-logo\">\n	        <a href=\"\" class=\"logo replace\">Duke University Summer Session</a>\n	        <p class=\"tagline\">A Student's Journey</p>\n\n\n    	    <div id=\"login_alert\">Not a correct username/password combination.</div>\n      	</div>\n\n	    <div class=\"username\">\n	        <input type=\"text\" id=\"username_input\" placeholder=\"username\" aria-label=\"user name\" aria-required=\"true\" required autofocus>\n	    </div>\n	    <div class=\"password\">\n	        <input type=\"password\" id=\"password_input\" placeholder=\"password\" aria-label=\"password\" aria-required=\"true\" required>\n	    </div>\n	\n		<div id=\"login_group\">\n	    	<button type=\"submit\" class=\"btn btn-primary btn-login\" id=\"user_login\"type=\"submit\">Log In</button>\n	    	<button class =\"btn btn-primary btn-login\" id=\"guest_login\" type=\"submit\">Log In As Guest</button>\n		</div>\n		\n	</div>\n</div>";
  });

this["templates"]["home/login/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"header\"></div>\n<div id=\"content\"></div>\n<div id=\"footer\"></div>";
  });

this["templates"]["profile/student/assignModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"modal fade\" id=\"assignment_modal\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Close</span></button>\n        <h4 class=\"modal-title\">Assignment Modal</h4>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"assignment-record col-md-6\">\n          <h2 class=\"assignment-title\">The U.S. vs China</h2>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptatibus, dolorum, mollitia provident voluptate maiores voluptas autem natus, harum quam eius hic, consectetur cumque eligendi ut odit numquam facere saepe!</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque veniam, nobis soluta. Voluptate ullam beatae sit sint dignissimos quia dolorem, sapiente nihil aliquam enim veniam, modi quisquam consequatur eum ipsum?</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam illum placeat dolorum repudiandae provident. Quisquam nostrum, consequatur ad veritatis voluptatibus autem, magni tenetur et quo, consequuntur omnis. Porro, reprehenderit, eligendi.</p>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione velit harum, quidem libero voluptas incidunt dolore nemo natus eos. Nam cum alias ipsa a nihil placeat delectus sit laboriosam nisi.</p>\n        </div>\n        <div class=\"feedback-container col-md-6\" data-number=\"1\">\n            <h3 class=\"feedback-title\">Feedback from <span class=\"teacher-name\">Teacher</span></h3>\n            <div class=\"assignment-record feedback active\">\n                <p>Great Job.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis ipsum, vulputate at tristique vel, dictum id ligula. Proin ac ornare ipsum. Sed hendrerit varius elementum. Praesent eu nulla in tortor dignissim eleifend vitae sed tellus. Nullam luctus sem eros, eu sodales dolor commodo ac. Sed lorem lectus, mattis nec augue placerat, convallis placerat neque. In nulla massa, condimentum a condimentum eu, iaculis suscipit est. Etiam molestie urna eu augue feugiat hendrerit. Suspendisse potenti. Mauris consectetur felis nec nisi fringilla, non malesuada augue placerat. Quisque ac mi orci.</p>\n            </div>\n            <div class=\"assignment-record feedback\">\n              <p>No feedbck for this item.</p>\n            </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->";
  });

this["templates"]["profile/student/assignment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n	<div class=\"assignment-record\">\n		<h2 class=\"assignment-title\">The U.S. vs China</h2>\n		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptatibus, dolorum, mollitia provident voluptate maiores voluptas autem natus, harum quam eius hic, consectetur cumque eligendi ut odit numquam facere saepe!</p>\n		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque veniam, nobis soluta. Voluptate ullam beatae sit sint dignissimos quia dolorem, sapiente nihil aliquam enim veniam, modi quisquam consequatur eum ipsum?</p>\n		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam illum placeat dolorum repudiandae provident. Quisquam nostrum, consequatur ad veritatis voluptatibus autem, magni tenetur et quo, consequuntur omnis. Porro, reprehenderit, eligendi.</p>\n		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione velit harum, quidem libero voluptas incidunt dolore nemo natus eos. Nam cum alias ipsa a nihil placeat delectus sit laboriosam nisi.</p>\n	</div>\n	<div class=\"feedback-container col-md-6\" data-number=\"1\">\n	    <h3 class=\"feedback-title\">Feedback from <span class=\"teacher-name\">Teacher</span></h3>\n	    <div class=\"assignment-record feedback active\">\n	        <p>Great Job.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis ipsum, vulputate at tristique vel, dictum id ligula. Proin ac ornare ipsum. Sed hendrerit varius elementum. Praesent eu nulla in tortor dignissim eleifend vitae sed tellus. Nullam luctus sem eros, eu sodales dolor commodo ac. Sed lorem lectus, mattis nec augue placerat, convallis placerat neque. In nulla massa, condimentum a condimentum eu, iaculis suscipit est. Etiam molestie urna eu augue feugiat hendrerit. Suspendisse potenti. Mauris consectetur felis nec nisi fringilla, non malesuada augue placerat. Quisque ac mi orci.</p>\n	    </div>\n	    <div class=\"assignment-record feedback\">\n	      <p>No feedbck for this item.</p>\n	    </div>\n	</div>\n</div>";
  });

this["templates"]["profile/student/content"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "<div id=\"sidebar\">\n  <div class=\"sidebar\" aria-expanded=\"true\">\n    <div class=\"container-fluid\">\n      <nav id=\"sidetop\">\n        <h2>Dashboard</h2>\n      </nav>\n\n      <ul id=\"section_nav\" class=\"hidden-phone\" role=\"navigation\">\n        <li class=\"gone\">\n        <a class=\"profileItemLink overview\" data-weekItem=\"0\" data-type=\"welcome\" href=\"#profileItem0\" aria-label=\"profile Item 1: welcome\">\n          <span class=\"item-icon icomoon icon-eye3\"></span><span class=\"hoverover\">welcome</span>\n        </a>\n        </li>\n\n        <li><a class=\"weekItemLink profile\" data-weekItem=\"1\" data-type=\"article\" href=\"#weekItem1\" aria-label=\"week item 2: article\">\n          <span class=\"item-icon icomoon icon-profile\"></span><span class=\"hoverover\">basic info</span></a>\n        </li>\n        \n        <li><a class=\"weekItemLink progress\" data-weekItem=\"1\" data-type=\"progress\" href=\"#weekItem2\" aria-label=\"week item 2: article\">\n          <span class=\"item-icon icomoon icon-chart2\"></span><span class=\"hoverover\">progress</span></a>\n        </li>\n\n        <li>\n          <a class=\"weekItemLink badge\" data-weekItem=\"2\" data-type=\"article\" href=\"#weekItem3\" aria-label=\"week item 3: article\">\n            <span class=\"item-icon icomoon icon-badge2\"></span><span class=\"hoverover\">badges</span>\n          </a>\n        </li>\n        \n        <li>\n          <a class=\"weekItemLink grades\" data-weekItem=\"3\" data-type=\"links\" href=\"#weekItem3\" aria-label=\"week item 4: important links\">\n            <span class=\"item-icon icomoon icon-file\"></span><span class=\"hoverover\">grades</span>\n          </a>\n        </li>\n\n        <li>\n          <a class=\"weekItemLink journals\" data-weekItem=\"4\" data-type=\"game\" href=\"#weekItem4\" aria-label=\"week item 5: important links\">\n            <span class=\"item-icon icomoon icon-wallet\"></span><span class=\"hoverover\">journals</span>\n          </a>\n        </li>\n\n       \n      </ul>\n    </div>\n  </div>\n</div>\n\n<div id=\"main-content\">\n  <div class=\"container-fluid\">\n    <section id=\"welcome-window\" class=\"row-fluid section gone\">\n      <div class=\"inner-wrap\">\n        <div class=\"profile-welcome\">\n          <h1>Welcome to \"A Student's Journey\"!</h1> \n          <p class=\"intro\">Every week, you'll be given a mixture of articles, multimedia, and interactive games which will help guide you through understanding college life in America.  Throughout, you will develop attributes and achieve badges which will factor into your total grade.  In addition, you'll be given grades on assignments, class participation, and your achievements.</p>\n        </div>\n        <div class=\"content col-md-4\">\n          <h3>Content-types</h3>\n            <ul id=\"section_nav\" class=\"hidden-phone\">\n              <li>\n                <a class=\"weekItemLink assignment active\" data-weekitem=\"0\" data-type=\"overview\" href=\"#weekItem0\">\n                  <span class=\"item-icon icomoon icon-file activity\"></span><span class=\"hoverover\">assignment</span>\n                </a>\n              </li>\n              <li>\n                <a class=\"weekItemLink  article active\" data-weekitem=\"1\" data-type=\"article\" href=\"#weekItem1\">\n                  <span class=\"item-icon icomoon icon-book2 article\"></span><span class=\"hoverover\">article</span>\n                </a>\n              </li>\n              <li>\n                <a class=\"weekItemLink game active\" href=\"#weekItem2\">\n                  <span class=\"item-icon icomoon icon-gamepad game\"></span><span class=\"hoverover\">game</span>\n                </a>\n              </li>\n              <li></li>\n          </ul>\n          <a class=\"welcome-link clear\">view all content types</a>\n        </div>\n\n        <div class=\"attributes col-md-4\">\n          <h3>Attributes</h3>\n          <ul>\n            <li><span class=\"pie\" data-value=\"4\"><span class=\"attr-value\">4</span></span><span class=\"pie-mask\"></span>Self-Awareness</li>\n            <li><span class=\"pie\" data-value=\"1\"><span class=\"attr-value\">1</span></span><span class=\"pie-mask\"></span>Adaptation</li>\n            <li><span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span><span class=\"pie-mask\"></span>Attention to Detail</li>\n            \n          </ul>\n          <a class=\"welcome-link clear\">view all available attributes</a>\n        </div>\n\n        <div class=\"badges col-md-4\">\n          <h3>Badges</h3>\n          <ul>\n            <li class=\"code\"></li>\n            <li class=\"cool\"></li>\n            <li class=\"foxy\"></li>\n            <li class=\"hive\"></li>\n            <li class=\"thread\"></li>\n            <li class=\"fest\"></li>\n            <li class=\"network\"></li>\n            <li class=\"olympics\"></li>\n            <li class=\"thimble\"></li>\n          </ul>\n          <p class=\"clear welcome-link\"><a>view all available badges</a></p>\n        </div>\n        <div class=\"set-up-profile clear\">\n          <p>Next: <a>Set-up your Profile</a></p>\n        </div>\n        <div class=\"full-width center profile-link moreButton\"><span class=\"clear glyphicon glyphicon-arrow-down\"></span></div>\n      </div>\n    </section>\n    <section id=\"profile-top\" class=\"row-fluid section\">\n      <div class=\"inner-wrap\">\n            <h1 class=\"profile-welcome\">Student Profile</h1>\n            \n            <div class=\"profile-categories student-progress col-md-4\">\n              <h3>Progress</h3>\n              <div class=\"progress-wrap\">\n                <div class=\"progress\">\n                  <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"21\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 21%;\">\n                    <span class=\"sr-only\">21%</span>\n                  </div>\n                  <span class=\"glyphicon glyphicon-bell\"></span>\n                </div>\n                <p class=\"current-week\">You are currently in <label for=\"student-progress\">Week 3</label> of 15</p>\n                <a href=\"\" class=\"moreButton\">Proceed to Week 3<span class=\"glyphicon glyphicon-play\"></span></a>\n                \n                <div class=\"last-lesson clear\">\n                  <label for=\"last-lesson\">Last Lesson Completed</label>\n                  <ul id=\"section_nav\" class=\"hidden-phone\">\n                  <li class=\"game clear\">\n                    <a href=\"\"><span class=\"icomoon icon-gamepad clear\"></span><span class=\"hoverover\">game: Let's go to school!</span></a>\n                  </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"profile-pic col-md-4\">\n              <h3>Warren Longmire</h3>\n              <div class=\"avatar\">\n                <div class=\"avatar-container\">\n                </div>\n                <a class=\"edit-avatar\">Change Avatar</a>\n                <img src=\"../images/avatar.png\" class=\"avatar\">\n              </div>\n              \n              <div class=\"myers-briggs\"><h4>Myers-Briggs:</h4><h4>INTJ</h4></div>\n            </div>\n            <div class=\"profile-categories attributes col-md-4\">\n              <h3>Attributes</h3>\n                <div class=\"progress-wrap\">\n                  <div class=\"attr-item\">\n                    <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"process of learning something: the fact or process of finding out about something for the first time\">Exploration</h4> \n                    <div class=\"col-md-2\">\n                      <span class=\"pie\" data-value=\"4\"><span class=\"attr-value\">4</span></span>\n                      <div class=\"clear\">\n                        <strong class=\"fraction\"><span data-value=\"4\">4</span>/5</strong>\n                      </div>\n                    </div>\n                    <p class=\"description col-md-10\">Made some real effort to learn about searching for colleges but could have been a bit more thorough.</p>\n                  </div>\n                  <div class=\"attr-item\">\n                    <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the ability to be precise and avoid errors\">Accuracy</h4>\n                    <div class=\"col-md-2\">\n                      <span class=\"pie\" data-value=\"1\"><span class=\"attr-value\">1</span></span>\n                      <div class=\"clear\">\n                        <strong class=\"fraction\"><span data-value=\"1\">1</span>/5</strong>\n                      </div>\n                    </div>\n                    <p class=\"description col-md-10\">Did not perform the task or performed it inadequately.</p>\n                  </div>\n                  <div class=\"attr-item\">\n                    <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"careful thought, especially the process of reconsidering previous actions, events, or decisions\">Reflection</h4>\n                    <div class=\"col-md-2\">\n                      <span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n                      <div class=\"clear\">\n                        <strong class=\"fraction\" ><span data-value=\"3\">3</span>/5</strong>\n                      </div>\n                    </div>\n                    <p class=\"description col-md-10\">Showed a reasonable careful reconsideration of previous actions, events or decisions.</p>\n                  </div>\n                  <div class=\"attr-item\">\n                      <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the examination of something in detail in order to understand it better or draw conclusions from it\">Analysis</h4>\n                      <div class=\"col-md-2\">\n                        <span class=\"pie\" data-value=\"2\"><span class=\"attr-value\">2</span></span>\n                        <div class=\"clear\">\n                          <strong class=\"fraction\" ><span data-value=\"2\">2</span>/5</strong>\n                        </div>\n                      </div>\n                     <p class=\"description col-md-10\">Examined the article or assignment in very little detail and drew a few conclusions from it.</p>\n                  </div>\n                  <div class=\"attr-item\">\n                      <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"The ability to understand a concept and apply it to a real world example.\">Application</h4>\n                      <div class=\"col-md-2\">\n                        <span class=\"pie\" data-value=\"5\"><span class=\"attr-value\">5</span></span>\n                        <div class=\"clear\">\n                          <strong class=\"fraction\" ><span data-value=\"5\">5</span>/5</strong>\n                        </div>\n                      </div>\n                     <p class=\"description col-md-10\">Completely understood the concept and effectively applied it to the real world example.</p>\n                  </div>\n                  <div class=\"attr-item\">\n                      <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"general awareness or possession of information, facts, and ideas\">Knowledge</h4>\n                      <div class=\"col-md-2\">\n                        <span class=\"pie\" data-value=\"4\"><span class=\"attr-value\">4</span></span>\n                        <div class=\"clear\">\n                          <strong class=\"fraction\" ><span data-value=\"4\">4</span>/5</strong>\n                        </div>\n                      </div>\n                     <p class=\"description col-md-10\">Indicated knowledge about the “Best-Fit” College for the student.</p>\n                  </div>\n                  <div class=\"attr-item\">\n                      <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"extremely attentive to accuracy and detail\">Thoroughness</h4>\n                      <div class=\"col-md-2\">\n                        <span class=\"pie\" data-value=\"1\"><span class=\"attr-value\">1</span></span>\n                        <div class=\"clear\">\n                          <strong class=\"fraction\" ><span data-value=\"1\">1</span>/5</strong>\n                        </div>\n                      </div>\n                     <p class=\"description col-md-10\">Not completed</p>\n                  </div>\n                  <div class=\"attr-item\">\n                      <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the capacity for understanding information fully.\">Comprehension</h4>\n                      <div class=\"col-md-2\">\n                        <span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n                        <div class=\"clear\">\n                          <strong class=\"fraction\" ><span data-value=\"3\">3</span>/5</strong>\n                        </div>\n                      </div>\n                     <p class=\"description col-md-10\">Completely understood the concept and effectively applied it to the real world example.</p>\n                  </div>\n                  <div class=\"attr-item\">\n                      <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the ability to communicate effectively and appropriately with people of other cultures.\">Intercultural Competence</h4>\n                      <div class=\"col-md-2\">\n                        <span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n                        <div class=\"clear\">\n                          <strong class=\"fraction\" ><span data-value=\"3\">3</span>/5</strong>\n                        </div>\n                      </div>\n                     <p class=\"description col-md-10\">Showed a fair grasp of the ability to communicate effectively and appropriately with people of other cultures</p>\n                  </div>\n                  <div class=\"attr-item\">\n                      <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the detailed mental examination of your own feelings, thoughts, and motives.\">Introspection</h4>\n                      <div class=\"col-md-2\">\n                        <span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n                        <div class=\"clear\">\n                          <strong class=\"fraction\" ><span data-value=\"3\">3</span>/5</strong>\n                        </div>\n                      </div>\n                     <p class=\"description col-md-10\">Had a fairly good understanding of your own feelings, thoughts, and motives.</p>\n                  </div>\n                  \n                </div>\n              </div>\n            </div>\n          </div>\n        </section>\n        <section class=\"progress section\">\n          <div class=\"inner-wrap\">\n            <h1>Progress</h1>\n            <div class=\"profile-categories badges\">\n              <div class=\"content-week-nav\">\n                  <a class=\"arrow-left-grade\"><span class=\"icomoon icon-arrow-left\"></span></a>\n                  <a class=\"arrow-right-grade\"><span class=\"icomoon icon-arrow-right\"></span></a>\n                </div>\n              <div class=\"week-progress\">\n                <h2>Week 1</h2>\n                <div class=\"completed circle\">\n                  <p class=\"big\">9/10</p>\n                  <p>items complete</p>\n                </div>\n                <a href=\"\" class=\"moreButton\">go to week 1</a>\n              </div>\n              <div class=\"week-progress\">\n                <h2>Week 2</h2>\n                <div class=\"completed circle active\">\n                  <p class=\"big\">2/10</p>\n                  <p>items complete</p>\n                </div>\n                <a href=\"\" class=\"moreButton\">go to week 2</a>\n              </div>\n              <div class=\"week-progress\">\n                <h2>Week 3</h2>\n                <div class=\"completed circle\">\n                  <p class=\"big\">0/10</p>\n                  <p>items complete</p>\n                </div>\n                <a href=\"\" class=\"moreButton\">go to week 3</a>\n              </div>\n\n            </div>\n          </div>\n        </section>\n        <section class=\"badge section\">\n          <div class=\"inner-wrap\">\n            <div class=\"profile-categories badges\">\n              <h1>Badges Earned:</h1>\n              <ul>\n                <li class=\"code\"></li>\n                <li class=\"cool\"></li>\n                <li class=\"foxy\"></li>\n                <li class=\"hive\"></li>\n                <li class=\"thread\"></li>\n                <li class=\"fest\"></li>\n                <li class=\"network\"></li>\n                <li class=\"olympics\"></li>\n                <li class=\"thimble\"></li>\n              </ul>\n            </div>\n          </div>\n        </section>\n        <section class=\"section assignment grades \">\n            <div class=\"inner-wrap\">\n              <h1>Grades</h1>\n              <div class=\"content-week-nav\">\n                  <a class=\"arrow-left-grade\"><span class=\"icomoon icon-arrow-left\"></span></a>\n                  <a class=\"arrow-right-grade\"><span class=\"icomoon icon-arrow-right\"></span></a>\n                </div>\n              <div class=\"weekly-content\">\n                \n                <div class=\"wrap active\">\n                  <div class=\"assignment-container active\">\n                    <h2 class=\"active\">Week 1</h2>\n                    <div class=\"grade-container\" data-number=\"1\">\n                      <h3 class=\"assignment-title\">Assignment 1: U.S. vs. China</h3>\n                      <p class=\"assignment-description\">Write a one page essay about the differences between U.S. and Chinese School Systems.</p>\n                      <p class=\"uploaded-assignment\"><strong>Your submission: </strong><a href=\"\"> US-vs-China.doc</a></p>\n                      <p class=\"grade-display\"><span class=\"grade-label\">grade:</span> <span class=\"student-grade\">20/20</span></p>\n                      <a href=\"#\" class=\"assignment_link\" data-assignId=\"0\" data-assignType=\"assignment\">view assignment</a>\n\n                    </div>\n                    <div class=\"grade-container\" data-number=\"2\">\n                      <h3 class=\"Quiz-title\">Quiz 1</h3>\n                      <p class=\"grade-display\"><span class=\"grade-label\">grade:</span> <span class=\"student-grade\">20/20</span></p>\n                      <a href=\"#\" data-assignId=\"0\" data-assignType=\"quiz\">review quiz</a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"wrap\">\n                  <div class=\"assignment-container active\">\n                    <h2 class=\"active\">Week 2</h2>\n                    <div class=\"grade-container\" data-number=\"1\">\n                      <h3 class=\"assignment-title\">Assignment 2: Looking at Colleges</h3>\n                      <p class=\"assignment-description\">Write a one page essay about the differences between U.S. and Chinese School Systems.</p>\n                      <p class=\"uploaded-assignment\"><strong>Your submission: </strong><a href=\"\"> US-vs-China.doc</a></p>\n                      <p class=\"grade-display\"><span class=\"grade-label\">grade:</span> <span class=\"student-grade\">20/20</span></p>\n                      <a href=\"#\" class=\"assignment_link\" data-assignId=\"1\" data-assignType=\"assignment\">view assignment</a>\n                    </div>\n                    <div class=\"grade-container\" data-number=\"2\">\n                      <h3 class=\"Quiz-title\">Quiz 2</h3>\n                      <p class=\"grade-display\"><span class=\"grade-label\">grade:</span> <span class=\"student-grade\">20/20</span></p>\n                      <a href=\"\" class=\"quiz-link\">review quiz</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n        </section>\n        <section class=\"section journal\">\n          <div class=\"inner-wrap\">\n            <h1>Journals</h1>\n            <div class=\"journal-entry paper\" data-entry-number=\"1\">\n              <time>01.23.2014</time>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum amet esse blanditiis illum debitis rem in libero laudantium, delectus alias autem deserunt possimus animi voluptate, exercitationem! Cumque in reiciendis illo!  sLorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tenetur doloribus minima rem ab id dolorum neque expedita nostrum dignissimos fugiat fuga quia repellat perferendis dicta, dolores corporis laborum aspernatur.</p>\n            </div>\n            <div class=\"journal-entry paper\" data-entry-number=\"2\">\n              <time>02.21.2014</time>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum amet esse blanditiis illum debitis rem in libero laudantium, delectus alias autem deserunt possimus animi voluptate, exercitationem! Cumque in reiciendis illo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consequuntur officia officiis nam nihil numquam eos fugit ab vitae inventore? Illum consequuntur obcaecati explicabo tenetur laudantium, praesentium, et magnam aut.</p>\n            </div>\n            <div class=\"journal-entry paper\" data-entry-number=\"3\">\n              <time>03.03.2014</time>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum amet esse blanditiis illum debitis rem in libero laudantium, delectus alias autem deserunt possimus animi voluptate, exercitationem! Cumque in reiciendis illo!  sLorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tenetur doloribus minima rem ab id dolorum neque expedita nostrum dignissimos fugiat fuga quia repellat perferendis dicta, dolores corporis laborum aspernatur.</p>\n            </div>\n            <a href=\"\"><span class=\"reload\">Reload Journals</span></a>\n          </div>\n        </section>\n        \n  </div>\n</div>";
  return buffer;
  });

this["templates"]["profile/student/contentList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n  <div id=\"main-content\" data-spy=\"scroll\" data-target=\"#section_nav\">\n  </div>\n</div>";
  });

this["templates"]["profile/student/frames/attribute"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing;


  buffer += "<h1 class=\"clearfix subtitle\">Attributes</h1>\n\n<div class=\"inner-wrap\">\n<ul>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 0, options) : helperMissing.call(depth0, "getAttributeName", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 0, options) : helperMissing.call(depth0, "getAttributeDesc", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 0, options) : helperMissing.call(depth0, "getAttributeVal", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-valuemin=\"0\" aria-valuemax=\"10\" style=\"width: ";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 0, options) : helperMissing.call(depth0, "getAttributeVal", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%;\">\n        </div>\n\n      </span>\n    </div>\n  </li>\n\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 1, options) : helperMissing.call(depth0, "getAttributeName", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 1, options) : helperMissing.call(depth0, "getAttributeDesc", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 1, options) : helperMissing.call(depth0, "getAttributeVal", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-valuemin=\"0\" aria-valuemax=\"10\" style=\"width: ";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 1, options) : helperMissing.call(depth0, "getAttributeVal", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%;\">\n        </div>\n      </span>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 2, options) : helperMissing.call(depth0, "getAttributeName", 2, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 2, options) : helperMissing.call(depth0, "getAttributeDesc", 2, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 2, options) : helperMissing.call(depth0, "getAttributeVal", 2, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-valuemin=\"0\" aria-valuemax=\"10\" style=\"width: ";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 2, options) : helperMissing.call(depth0, "getAttributeVal", 2, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%;\">\n        </div>\n      </span>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 3, options) : helperMissing.call(depth0, "getAttributeName", 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 3, options) : helperMissing.call(depth0, "getAttributeDesc", 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 3, options) : helperMissing.call(depth0, "getAttributeVal", 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-valuemin=\"0\" aria-valuemax=\"10\" style=\"width: ";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 3, options) : helperMissing.call(depth0, "getAttributeVal", 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%;\">\n        </div>\n      </span>\n    </div>\n  </li>\n  \n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 4, options) : helperMissing.call(depth0, "getAttributeName", 4, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 4, options) : helperMissing.call(depth0, "getAttributeDesc", 4, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 4, options) : helperMissing.call(depth0, "getAttributeVal", 4, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-valuemin=\"0\" aria-valuemax=\"10\" style=\"width: ";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 4, options) : helperMissing.call(depth0, "getAttributeVal", 4, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%;\">\n        </div>\n      </span>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 5, options) : helperMissing.call(depth0, "getAttributeName", 5, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 5, options) : helperMissing.call(depth0, "getAttributeDesc", 5, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 5, options) : helperMissing.call(depth0, "getAttributeVal", 5, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-valuemin=\"0\" aria-valuemax=\"10\" style=\"width: ";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 5, options) : helperMissing.call(depth0, "getAttributeVal", 5, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%;\">\n        </div>\n      </span>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 6, options) : helperMissing.call(depth0, "getAttributeName", 6, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 6, options) : helperMissing.call(depth0, "getAttributeDesc", 6, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 6, options) : helperMissing.call(depth0, "getAttributeVal", 6, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-valuemin=\"0\" aria-valuemax=\"10\" style=\"width: ";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 6, options) : helperMissing.call(depth0, "getAttributeVal", 6, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%;\">\n        </div>\n      </span>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 7, options) : helperMissing.call(depth0, "getAttributeName", 7, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 7, options) : helperMissing.call(depth0, "getAttributeDesc", 7, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 7, options) : helperMissing.call(depth0, "getAttributeVal", 7, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-valuemin=\"0\" aria-valuemax=\"10\" style=\"width: ";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 7, options) : helperMissing.call(depth0, "getAttributeVal", 7, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%;\">\n        </div>\n      </span>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 8, options) : helperMissing.call(depth0, "getAttributeName", 8, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 8, options) : helperMissing.call(depth0, "getAttributeDesc", 8, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 8, options) : helperMissing.call(depth0, "getAttributeVal", 8, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-valuemin=\"0\" aria-valuemax=\"10\" style=\"width: ";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 8, options) : helperMissing.call(depth0, "getAttributeVal", 8, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%;\">\n        </div>\n      </span>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 9, options) : helperMissing.call(depth0, "getAttributeName", 9, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 9, options) : helperMissing.call(depth0, "getAttributeDesc", 9, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 9, options) : helperMissing.call(depth0, "getAttributeVal", 9, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" aria-valuemin=\"0\" aria-valuemax=\"10\" style=\"width: ";
  stack1 = (helper = helpers.getAttributeVal || (depth0 && depth0.getAttributeVal),options={hash:{},data:data},helper ? helper.call(depth0, 9, options) : helperMissing.call(depth0, "getAttributeVal", 9, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "%;\">\n        </div>\n      </span>\n    </div>\n  </li>\n\n</ul>\n</div>";
  return buffer;
  });

this["templates"]["profile/student/frames/badge"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"subtitle\">Badges</h1>\n\n<div class=\"inner-wrap\">\n  <div class=\"profile-categories badges\">\n    <ul>\n      <li class=\"code\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Exploration\" data-content=\"To complete this badge you must earn 90% of the Exploration attribute.\"></a></li>\n      \n      <li class=\"cool\"><a href=\"\" class=\"bbadge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Accuracy\" data-content=\"To complete this badge you must earn 90% of the Accuracy attribute.\"></a></li>\n\n      <li class=\"foxy\"><a href=\"\" class=\"bbadge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Thoroughness\" data-content=\"To complete this badge you must earn 90% of the Thoroughness attribute.\"></a></li>\n\n      <li class=\"hive\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Comprehension\" data-content=\"To complete this badge you must earn 90% of the Comprehension attribute.\"></a></li>\n\n      <li class=\"thread\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Knowledge\" data-content=\"To complete this badge you must earn 90% of the Knowledge attribute.\"></a></li>\n\n      <li class=\"fest\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Reflection\" data-content=\"To complete this badge you must earn 90% of the Reflection attribute.\"></a></li>\n\n      <li class=\"karaoke\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Analysis\" data-content=\"To complete this badge you must earn 90% of the Analysis attribute.\"></a></li>\n\n      <li class=\"network\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Introspection\" data-content=\"To complete this badge you must earn 90% of the Introspection attribute. \"></a></li>\n\n      <li class=\"olympics\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"Intercultural competence\" data-content=\"To complete this badge you must earn 90% of the Intercultural competence attribute.  \"></a></li>\n\n      <li class=\"thimble\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Application\" data-content=\"To complete this badge you must earn 90% of the Application attribute.  \"></a></li>\n\n      <li class=\"karaoke\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"Quizz Completion\" data-content=\"To complete this badge you must earn 80% on all quizzes.\"></a></li>\n\n      <li class=\"network\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"Frame Completion\" data-content=\"See every frame in a single semester.\"></a></li>\n\n      <li class=\"olympics\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"Attribute Complestion\" data-content=\"To complete this badge you must earn 90% on all attributes.\"></a></li>\n\n      <li class=\"thimble\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"Discussion Complestion\" data-content=\"To complete this badge you must participate in 80% of discussions.\"></a>\n      </li>\n    </ul>\n  </div>\n</div>";
  });

this["templates"]["profile/student/frames/grades"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"subtitle\">Grades</h1>\n\n<div class=\"inner-wrap\">\n  <div class=\"week_title_box\">\n      <p></p>\n\n      <div class=\"week_object\">\n        <a href=\"#\" class=\"arrow\" data-direction=\"left\"><i class=\"fa fa-caret-left\"></i></a>\n          Week <span class=\"week_number\">1</span>\n        <a href=\"#\" class=\"arrow\" data-direction=\"right\"><i class=\"fa fa-caret-right\"></i></a>\n      </div>\n      \n  </div>\n\n  <div class=\"col-md-4 assignment_section dashboard_long_box\">\n    <div id=\"assignments\"></div>\n  </div>\n\n  <div class=\"col-md-4 quiz_section dashboard_box\">\n    <div id=\"quizes\"></div>\n  </div>\n</div>";
  });

this["templates"]["profile/student/frames/gradesAssignItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n   		<span class=\"assign_score\">";
  if (helper = helpers.grade) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.grade); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/100</span>\n   	";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\n   		<span class=\"assign_score\">Not Graded</span>\n   	";
  }

function program5(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n      <span class=\"assign_link\"><a class=\"feedback_button\" data-toggle=\"popover\" title=\"Teacher Feedback\" data-container=\".grades\" data-placement=\"right\" data-content=\"";
  if (helper = helpers.feedback) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.feedback); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">See Feedback</a></span>\n    ";
  return buffer;
  }

  buffer += "<div class=\"row assign_container\">\n  <div class=\"col-md-8\">\n    <span class=\"assign_name\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><br/>\n    <!-- <span class=\"assign_desc\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><br/> -->\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.grade), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n\n  <div class=\"col-md-4\">\n    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.grade), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>";
  return buffer;
  });

this["templates"]["profile/student/frames/gradesAssignList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p class=\"heading\">Assignments</p>\n<ul id=\"assignmentList\">\n	\n</ul>";
  });

this["templates"]["profile/student/frames/gradesQuizItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<span class=\"content_name\">";
  if (helper = helpers.title) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.title); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span> \n<span class=\"content_amount\">";
  if (helper = helpers.grade) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.grade); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "/100</span>";
  return buffer;
  });

this["templates"]["profile/student/frames/gradesQuizList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<p class=\"heading\">Quizes</p>\n<ul id=\"quizList\">\n	\n</ul>";
  });

this["templates"]["profile/student/frames/help"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"subtitle clearfix\">Welcome</h1> \n<div class=\"inner-wrap\">\n  <div class=\"another-wrapper\">\n    <div class=\"profile-welcome\">\n      \n      <p class=\"intro\">Every week, you'll be given a mixture of articles, multimedia, and interactive games which will help guide you through understanding college life in America.  Throughout, you will develop attributes and achieve badges which will factor into your total grade.  In addition, you'll be given grades on assignments, class participation, and your achievements.</p>\n    </div>\n\n    <div class=\"content col-md-3 box\">\n      <h3>Content-types</h3>\n        <ul id=\"section_nav\" class=\"hidden-phone\">\n          <li>\n            <a class=\"weekItemLink assignment\" data-weekitem=\"0\" data-type=\"overview\" href=\"#weekItem0\">\n              <span class=\"item-icon icomoon icon-file activity\"></span><span class=\"hoverover\">assignment</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"weekItemLink article\" data-weekitem=\"1\" data-type=\"article\" href=\"#weekItem1\">\n              <span class=\"item-icon icomoon icon-book2 article\"></span><span class=\"hoverover\">article</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"weekItemLink game\" href=\"#weekItem2\">\n              <span class=\"item-icon icomoon icon-gamepad game\"></span><span class=\"hoverover\">game</span>\n            </a>\n          </li>\n          <li></li>\n      </ul>\n      <a class=\"welcome-link clear\">view all content types</a>\n    </div>\n\n    <div class=\"attributes col-md-3 col-md-offset-1 box\">\n      <h3>Attributes</h3>\n      <ul>\n        <li><span class=\"pie col-md-4\" data-value=\"4\"><span class=\"attr-value\">4</span></span>Self-Awareness</li>\n        <li><span class=\"pie col-md-4\" data-value=\"1\"><span class=\"attr-value\">1</span></span>Adaptation</li>\n        <li><span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>Attention to Detail</li>\n        \n      </ul>\n      <a class=\"welcome-link clear\">view all available attributes</a>\n    </div>\n\n    <div class=\"badges col-md-3 col-md-offset-1 box\">\n      <h3>Badges</h3>\n      <ul>\n        <li class=\"code\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"cool\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"foxy\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"hive clear\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"thread\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"fest\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"karaoke\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"network\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"olympics\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"thimble\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n      </ul>\n      <p class=\"clear welcome-link\"><a>view all available badges</a></p>\n    </div>\n    \n    <div class=\"set-up-profile clear\">\n      <p>Next: <a>Set-up your Profile</a></p>\n    </div>\n\n    <div class=\"full-width center profile-link\">\n      <a href=\"#\" id=\"dock_button\"><span class=\"clear glyphicon glyphicon-arrow-down\"></span></a>\n    </div>\n  </div>\n</div>";
  });

this["templates"]["profile/student/frames/journal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  
  return "\n\n      <div class=\"journal_object\">\n        <a href=\"#\" class=\"arrow\" data-direction=\"left\"><i class=\"fa fa-caret-left\"></i></a>\n        Journal <span class=\"journal_number\">1</span> / <span class=\"max_journal_number\">1</span>\n        <a href=\"#\" class=\"arrow\" data-direction=\"right\"><i class=\"fa fa-caret-right\"></i></a>\n      </div>\n    \n      <p class=\"heading\"></p>\n    \n      <div class=\"text\"></div>\n    ";
  }

function program3(depth0,data) {
  
  
  return "\n      <p class=\"heading\">You do not have any journals currently saved.</p>\n    ";
  }

  buffer += "<h1 class=\"subtitle\">Journals</h1>\n\n<div class=\"inner-wrap\">\n  <div class=\"week_title_box\">\n    <p></p>\n\n    <div class=\"week_object\">\n      <a href=\"#\" class=\"arrow\" data-direction=\"left\"><i class=\"fa fa-caret-left\"></i></a>\n        Week <span class=\"week_number\"></span>\n      <a href=\"#\" class=\"arrow\" data-direction=\"right\"><i class=\"fa fa-caret-right\"></i></a>\n    </div>\n    \n  </div>\n\n  <div class=\"journal_container\">\n    ";
  options={hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}
  if (helper = helpers.hasJournals) { stack1 = helper.call(depth0, options); }
  else { helper = (depth0 && depth0.hasJournals); stack1 = typeof helper === functionType ? helper.call(depth0, options) : helper; }
  if (!helpers.hasJournals) { stack1 = blockHelperMissing.call(depth0, stack1, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data}); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>";
  return buffer;
  });

this["templates"]["profile/student/frames/profile"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<h1 class=\"profile-welcome clearfix subtitle\">Student Profile</h1>\n\n<div class=\"inner-wrap\">\n  <div class=\"col-md-4 profile_section\">\n    <div class=\"profile_pic\">\n      <img src=\"../images/avatars/avatar";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.userData)),stack1 == null || stack1 === false ? stack1 : stack1.profileImage)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".png\" alt=\"\">\n      \n      <a class=\"edit-icon\" html=\"#\"><i class=\"fa fa-pencil-square-o\"></i></a>\n\n      <p class=\"name\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.userData)),stack1 == null || stack1 === false ? stack1 : stack1.first)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.userData)),stack1 == null || stack1 === false ? stack1 : stack1.last)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n      <p class=\"mb\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.userData)),stack1 == null || stack1 === false ? stack1 : stack1.mb)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " <a html=\"#\"><i class=\"fa fa-pencil-square-o\"></i></a></p>\n\n      <a class=\"profile_button\" href=\"#week/";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.userData)),stack1 == null || stack1 === false ? stack1 : stack1.currentWeek)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">Go to Class <i class=\"fa fa-caret-right\"></i></a>\n    </div>\n  </div>\n\n  <div class=\"col-md-4 progress_section dashboard_box\">\n      <div class=\"title_box\">\n          <p>Progress</p>\n      </div>\n  \n      <div class=\"progress_copy\">\n        <p class=\"semester_label\">SEMESTER <span class=\"class_number\">1</span></p>\n        <p class=\"week_label\">Week <span class=\"class_number\">1</span></p>\n\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped active\"  role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%\">\n          </div>\n        </div>\n\n        <p class=\"time_label\">Time Spent: <span class=\"class_number\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.userData)),stack1 == null || stack1 === false ? stack1 : stack1.daysCreated)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span></p>\n      </div>\n  </div>\n\n  <div class=\"col-md-4 metrics_section dashboard_box\">\n      <div class=\"title_box\">\n          <p>Metrics</p>\n      </div>\n\n      <div class=\"metrics_copy\">\n        <hr/>\n        <p class=\"grade_label\"><span class=\"l\">GRADES:</span> <span class=\"number\">80%</span></p>\n        <hr/>\n        <p class=\"badge_label\"><span class=\"l\">BADGES:</span> <span class=\"number\">6/10</span></p>\n        <hr/>\n        <p class=\"badge_label\"><span class=\"l\">ATTRIBUTES:</span> <span class=\"number\">34%</span></p>\n        <hr/>\n      </div>\n  </div>\n  </div>\n</div>";
  return buffer;
  });

this["templates"]["profile/student/frames/progress"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"subtitle\">Progress</h1>\n\n<div class=\"inner-wrap\">\n  <div class=\"week_title_box\">\n      <p></p>\n\n      <div class=\"week_object\">\n        <a href=\"#\" class=\"arrow\" data-direction=\"left\"><i class=\"fa fa-caret-left\"></i></a>\n          Week <span class=\"week_number\">1</span>\n        <a href=\"#\" class=\"arrow\" data-direction=\"right\"><i class=\"fa fa-caret-right\"></i></a>\n      </div>\n      \n  </div>\n  \n  <div class=\"col-md-4 content_section\">\n    <div class=\"progress_container\">\n      <p class=\"progress_amount\">30% Complete</p>\n\n      <img src=\"../images/progress_chart.png\" alt=\"\">\n    </div>\n  </div>\n\n  <div class=\"col-md-4 attribute_section dashboard_box\">\n    <p class=\"heading\">Attributes</p>\n    <ul>\n      <li><span class=\"attr_icon\"><img src=\"../images/attrs/attr1.png\" alt=\"\"></span> <span class=\"attr_name\">Accuracy:</span> <span class=\"attr_amount\">50/100</span></li>\n\n      <li><span class=\"attr_icon\"><img src=\"../images/attrs/attr1.png\" alt=\"\"></span> <span class=\"attr_name\">Knowledge:</span> <span class=\"attr_amount\">30/100</span></li>\n    </ul>\n  </div>\n\n  <div class=\"col-md-4 other_section dashboard_box\">\n    <ul>\n      <li><span class=\"content_name\">Journal:</span> <span class=\"content_amount\">2/5</span></li>\n\n      <li> <span class=\"content_name\">Comic:</span> <span class=\"content_amount\"><img src=\"../images/check_circle.png\" alt=\"\"></span></li>\n\n\n      <li> <span class=\"content_name\">Game Score:</span> <span class=\"content_amount\">30/100</span></li>\n\n    </ul>\n  </div>\n</div>\n";
  });

this["templates"]["profile/student/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"header\"></div>\n<div id=\"sidebar\"></div>\n<div id=\"content\"></div>\n<div id=\"footer\"></div>\n<div id=\"assignmentModal\"></div>";
  });

this["templates"]["profile/student/sidebar"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "";


  buffer += "  <div class=\"sidebar\" aria-expanded=\"true\">\n    <div class=\"container-fluid\">\n      <nav id=\"sidetop\">\n        <h2>Dashboard</h2>\n      </nav>\n\n      <ul id=\"section_nav\" class=\"hidden-phone\" role=\"navigation\">\n        <li class=\"gone\">\n        <a class=\"profileItemLink overview\" data-weekItem=\"0\" data-type=\"welcome\" href=\"#profileItem0\" aria-label=\"profile Item 1: welcome\">\n          <span class=\"item-icon icomoon icon-eye3\"></span><span class=\"hoverover\">welcome</span>\n        </a>\n        </li>\n\n        <li><a class=\"weekItemLink profile\" data-weekItem=\"1\" data-type=\"article\" href=\"#weekItem1\" aria-label=\"week item 2: article\">\n          <span class=\"item-icon icomoon icon-profile\"></span><span class=\"hoverover\">basic info</span></a>\n        </li>\n        \n        <li><a class=\"weekItemLink progress\" data-weekItem=\"1\" data-type=\"progress\" href=\"#weekItem2\" aria-label=\"week item 2: article\">\n          <span class=\"item-icon icomoon icon-chart2\"></span><span class=\"hoverover\">progress</span></a>\n        </li>\n\n        <li>\n          <a class=\"weekItemLink badge\" data-weekItem=\"2\" data-type=\"article\" href=\"#weekItem3\" aria-label=\"week item 3: article\">\n            <span class=\"item-icon icomoon icon-badge2\"></span><span class=\"hoverover\">badges</span>\n          </a>\n        </li>\n        \n        <li>\n          <a class=\"weekItemLink grades\" data-weekItem=\"3\" data-type=\"links\" href=\"#weekItem3\" aria-label=\"week item 4: important links\">\n            <span class=\"item-icon icomoon icon-file\"></span><span class=\"hoverover\">grades</span>\n          </a>\n        </li>\n\n        <li>\n          <a class=\"weekItemLink journals\" data-weekItem=\"4\" data-type=\"game\" href=\"#weekItem4\" aria-label=\"week item 5: important links\">\n            <span class=\"item-icon icomoon icon-wallet\"></span><span class=\"hoverover\">journals</span>\n          </a>\n        </li>\n\n       \n      </ul>\n    </div>\n  </div>";
  return buffer;
  });

this["templates"]["profile/student/sidebarItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<a class=\"profileItemLink profile\" data-profileItem=\"";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-type=\"";
  if (helper = helpers.type) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.type); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#profileItem";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n	<span class=\"hoverover\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n</a>";
  return buffer;
  });

this["templates"]["profile/student/sidebarList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"sidebar\" aria-expanded=\"true\">\n  <div class=\"container-fluid\">\n    <nav id=\"sidetop\">\n      <h2>Dashboard</h2>\n    </nav>\n\n    <ul id=\"section_nav\" class=\"hidden-phone\" role=\"navigation\">\n    </ul>\n  </div>\n</div>";
  });

this["templates"]["weekExplorer/week/contentList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n  <div id=\"main-content\" data-spy=\"scroll\" data-target=\"#section_nav\">\n  	\n  </div>\n  <nav id=\"content-cycle\">\n        <ul>\n          <li><a href=\"\" class=\"cycle cycle-up\"><i class=\"fa fa-caret-square-o-up\"></a></i></li>\n          <li><a href=\"\" class=\"cycle cycle-down\"><i class=\"fa fa-caret-square-o-down\"></i></a></li>\n        </ul>\n      </nav>\n</div>";
  });

this["templates"]["weekExplorer/week/frames/activity"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	 		<li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n	 	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<h2 class=\"heading\">Keep in the Mind the Following Questions:</h2>\n	<ul class=\"textblock\">\n	 	";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.questions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n	";
  return buffer;
  }

  buffer += "<div class=\"headingContainer\">\n	<h1 class=\"title\">Activity</h1>\n	<h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n</div>\n\n<div class=\"inner-wrap attributeTarget\">\n	<h2 class=\"heading\">Summary:</h2>\n	<div class=\"textblock\">\n		";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instuctionsHeader)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n	 \n	<h2 class=\"heading\">Instructions:</h2>\n	<ul class=\"textblock\">\n	 	";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionsList), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n	\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.questions), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/article"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<div class=\"headingContainer\">\n	<h1 class=\"title\">article</h1>\n	<h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n</div>\n\n<div class=\"inner-wrap attributeTarget\">\n\n<div class=\"highlightblock textblock\">\n    ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.synopsis)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"0\">\n<h4>OVERVIEW</h4>\n<p>\nThe Multimedia College Preparation Program is entitled “A STUDENT’S JOURNEY: TO COLLEGE AND BEYOND” and is an interactive learning environment that combines course materials, interactive tools and narrative, instructional videos, comics, educational games, activities, journals, quizzes and facilitates discussions through asynchronous and synchronous instructional support.\n </p>\n\n<p>\nA STUDENT’S JOURNEY will act as an interactive guide to facilitate an existing college admissions counseling program, or can stand-alone if you do not have access to a college admissions counselor.  You will fully engage with the learning environment three hours a week for 15 weeks each semester for a total of 90 academic hours.</p>\n\n<p>\n<em>Semester One:</em> The first semester of A STUDENT’S JOURNEY (mid-October through mid-January) will focus on helping you understand the US educational system, learning about yourself, and finding the college or university that is the best fit for you.  You will interactively navigate through the U.S. college admissions process and learn how to successfully utilize sources at your disposal such as The College Board and CFNS (College Foundation of North Carolina).\n</p>\n\n<p>\n<em>Semester Two:</em> Many international students only worry about getting into a good college and spend little time preparing for the transition to and success in college once they arrive. Unfortunately, this can result in a student dropping out due to a difficult transition into the U.S. culture and lack of preparation for the first year of college. Therefore, the second semester of A STUDENT’S JOURNEY (mid-February through mid-May) will provide strategies for you to succeed in your first year of college and provide valuable insight regarding your successful cultural integration into the U.S.\n</p>\n \n\n<h4>WEEKLY LEARNING OBJECTIVES:</h4>\n<p>\nEach week you will be given a series of learning objectives which will be accomplished through a variety of activities.  \n</p>\n\n<h4>ASSESSMENT:</h4>\n<p>A STUDENT’S JOURNEY is designed to help you gain knowledge and comprehension as well as increase your competency in various attributes which we believe you will need to have in order to succeed in the applying to and attending a U.S. college.  These attributes include Intercultural Competence, Exploration, Reflection, Introspection, Thoroughness, Accuracy, Application, and Analysis.  Using a variety of assessment techniques such as quizzes, journals, discussion forums, and your successful completion of tasks, we will determine the level to which you are increasing these important characteristics or “attributes” and completing tasks.  A STUDENT’S JOURNEY will help you check your progress along the way as you improve in these areas and you will also have the opportunity to earn “badges” along the way upon completing tasks.  Students who successfully complete the program will receive a CERTIFICATE OF COMPLETION.</p>\n\n<h4>ASSESSMENT:</h4>\n<p>\nA STUDENT’S JOURNEY is designed to help you gain knowledge and comprehension as well as increase your competency in various attributes which we believe you will need to have in order to succeed in the applying to and attending a U.S. college.  These attributes include Intercultural Competence, Exploration, Reflection, Introspection, Thoroughness, Accuracy, Application, and Analysis.  Using a variety of assessment techniques such as quizzes, journals, discussion forums, and your successful completion of tasks, we will determine the level to which you are increasing these important characteristics or “attributes” and completing tasks.  A STUDENT’S JOURNEY will help you check your progress along the way as you improve in these areas and you will also have the opportunity to earn “badges” along the way upon completing tasks.  Students who successfully complete the program will receive a CERTIFICATE OF COMPLETION.\n</p>\n \n \n<h4>SEMESTER ONE: SUCCESSFULLY APPLYING TO COLLEGE</h4>\n<ul>\n<li>Week One: 		<em>WHO and WHAT You Are</em></li>\n<li>Week Two: 		<em>U.S. vs Chinese Educational Systems and the “BEST FIT” Concept</em></li>\n<li>Week Three: 	<em>REALITY of College Admissions in the US</em></li>\n<li>Week Four: 		<em>Getting to Know the United States and Different U.S. Colleges and Universities</em></li>\n<li>Week Five: 		<em>The College Search: Looking for the Right School for You, Including Great Schools You’ve Never Heard Of</em></li>\n<li>Week Six: 		<em>Learning about the Colleges on Your List</em></li>\n<li>Week Seven: 	<em>The College Admissions Process</em></li>\n<li>Week Eight: 	<em>Using Your High School Years Wisely: How to Build Your Personal Resume</em></li>\n<li>Week Nine: 		<em>The College Essay</em></li>\n<li>Week Ten: 		<em>The Recommendation Letter</em></li>\n<li>Week Eleven: 	<em>The College Interview: How to Prepare and Practice</em></li>\n<li>Week Twelve: 	<em>The Role of Standardized Testing in the College Admissions Process</em></li>\n<li>Week Thirteen: 	<em>The College Admissions Committee</em></li>\n<li>Week Fourteen: 	<em>Visiting College Campuses: How, When and Why to Plan Your School Tour</em></li>\n<li>Week Fifteen:	<em>Common Myths and Wrap Up</em></li>\n</ul>\n\n<h4>SEMESTER TWO: YOU ARE ON YOUR WAY TO COLLEGE: WHAT NOW? STRATEGIES FOR COLLEGE SUCCESS</h4>\n<ul>\n<li>Week One:		<em>Adjusting to College in the U.S.</em></li>\n<li>Week Two: 		<em>Managing Stress, Finances, and Handling Social Situations</em></li>\n<li>Week Three: 	<em>Behaviors for Success</em></li>\n<li>Week Four: 		<em>Common First Year Pitfalls</em></li>\n<li>Week Five: 		<em>Plagiarism and How to Avoid It</em></li>\n<li>Week Six: 		<em>Academic Writing</em></li>\n<li>Week Seven: 	<em>Active Reading Strategies</em></li>\n<li>Week Eight: 	<em>Getting the Most out of Class</em></li>\n<li>Week Nine: 		<em>Your Learning Style and How to Communicate with Professors</em></li>\n<li>Week Ten: 		<em>THE COLLEGE COMMUNITY: What is Your New College Like?</em></li>\n<li>Week Eleven: 	<em>THE COLLEGE COMMUNITY: What Campus Resources are Available to You?</em></li>\n<li>Week Twelve: 	<em>Cultural Awareness: Holidays in the U.S.</em></li>\n<li>Week Thirteen: 	<em>The Importance of College Sports in America</em></li>\n<li>Week Fourteen: 	<em>Travel in the U.S. During Your College Holidays</em></li>\n<li>Week Fifteen: 	 <em>Review and Wrap Up</em></li>\n</ul>\n\n<h4>ATTRIBUTES:</h4>\n<ul>\n<li>Exploration: The process of learning something: The fact or process of finding out about something for the first time.</li>\n<li>Accuracy: The ability to be precise and avoid errors.</li>\n<li>Thoroughness: Be extremely attentive to accuracy and detail. Have they completed the assignment given to them?.</li>\n<li>Comprehension: The capacity for understanding information fully.</li>\n<li>Knowledge: General awareness or possession of information, facts, ideas.</li>\n<li>Reflection: Careful thought, especially the process of reconsidering previous actions, events, or decisions.</li>\n<li>Analysis: The examination of something in detail in order to understand it better or draw conclusions from it.</li>\n<li>Introspection: The detailed mental examination of your own feelings, thoughts, and motives.</li>\n<li>Intercultural competence: Is the ability to communicate effectively and appropriately with people of other cultures.</li>\n<li>Application: The ability to understand a concept and apply it to a real world example.</li>\n</ul>\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"1\">\n<h4>Picking the Right School</h4>\n \n<p>What is the point of going to a very expensive Ivy League school to get your undergraduate degree when you know that you are going to get your master's degree when you're done? I would like to go to Dartmouth, but I have a full scholarship to the University of Florida, so maybe I should go there and go to Dartmouth for my MBA. What is your opinion?\nIvy League schools offer students great education and prestige. Many students find these schools attractive because they are selective, and because a degree from such a school is impressive on a job application. Yet there are great schools all over the country that offer a wonderful education and are easier to get into. And, as you know, public schools such as the University of Florida are more affordable. \nThe best way to decide what school is best for you is to consider all the angles. Ask yourself: \"What schools offer strong programs in my major? How important is cost and will this scholarship make life easier for me in the future? Do I want to be close to home or further away on my own? What kind of college life is there?\"</p>\n\n<p>Do you prefer a large or small school? Would you be more comfortable in a traditional campus not close to a major city, or do you prefer to be in a large city? Are you looking for a certain student mix in terms of gender, religion, race, etc.? All of these questions play a major role in the college decision. You are right—if you choose to attend the University of Florida, you can always pursue a master's degree at Dartmouth or at another big-name school. But try not to think too far ahead. Base your decision on what each school can do for you right now as you pursue your bachelor’s degree.</p>\n\n<p>I'm interested in a lot of different colleges and don't know which one I want to choose. Please help.</p>\n\n<p>The best way to narrow down which colleges are best for you is to first ask yourself several general questions about college:</p>\n\n<ul>\n	<li>-What am I interested in pursuing as a major?</li>\n	<li>-What schools offer strong programs in my major?</li>\n	<li>-How important is cost, and will scholarships be available at this school?</li>\n	<li>-Do I want to live at home or on campus?</li>\n	<li>-Do I want to be close to home or further away on my own?</li>\n	<li>-Will I be more comfortable at a large university or a small private college?</li>\n	<li>-Are my grades and test scores sufficient for acceptance?</li>\n</ul>\n\n<p>Once you’ve answered each of these questions, make a list of the colleges you are considering and decide which ones best fit the criteria set by your answers.</p>\n\n<p>The next step is to get specific information from each school left on the list. You may contact the schools directly or visit their websites to request catalogs, viewbooks, brochures, and anything else you think might aid the decision-making process.</p>\n\n<p>Finally, once you’ve narrowed the list down again, schedule campus visits to the schools you are still interested in. You can schedule a tour, see a dorm room, and perhaps even sit on a class. Many students base their final decision on a really good a campus visit. Then, once you’ve chosen the perfect school, begin the admissions process.\nFollow this process and you should have no trouble (or at least less trouble!) choosing the right school for you.</p>\n\n<p>I am a junior. I eventually want to attend Harvard Medical School, and a friend of the family (a physician) said I should definitely try to get into Harvard for undergraduate work because those students have a better chance of being accepted into the med school. Is that true (not only for Harvard but for most med schools)? My high school counselor says if my grades, activities and MCAT scores are great in college, it won't matter where I get my undergrad degree.</p>\n\n<p>To a certain degree, both your counselor and your family friend are correct. Schools like Harvard do always select a few of their own schools for their graduate programs, but to be one of the students their medical school takes, you’ll need to be one of the top students in your college class.</p>\n\n<p>Your counselor is correct, because if you work hard and excel at any school, medical schools will want you in their incoming class. So, if you want to be a doctor, don’t worry too much about whether you get into Harvard for undergraduate work. There are many fine schools...and in determining the right place for you, you should take into account not only academic reputation, but also factors such as financial aid availability, size, location, student body mix, social life and clubs and activities. Ultimately, the school where you are the happiest is the one that will give you the most satisfying college experience...and will also be the one where you’re most likely to excel well enough to get into medical school.</p>\n\n<p>Ultimately, both are correct, because both are saying that medical schools like Harvard want the best students. However, don’t get too hung up on going just to Harvard Medical School, as there are many other excellent medical schools and you’ll become a doctor if you go through any of them. So apply to a wide range to colleges, Harvard included, and work really hard in college. Then, whether you go to Harvard or somewhere else, you should be in a good position to get into a great medical school. Good luck!</p>\n\n<p>My son is awaiting  decisions on colleges he has applied to. In addition, he has wanted to go on to medical school for years now. So far he has heard early from two schools: University of Connecticut, where he has received a very nice scholarship, and Brandeis, but with no scholarship. Assuming we may see a mix of acceptances, with and without scholarship, from other private and public schools of different rankings, is it worth the higher cost for the higher-ranked schools vs. accepting (happily on our part) the scholarship at the other schools? It has been my contention that one is better off doing well in whatever school you attend, including on the MCAT, and that the pressure may be less in some of the \"less competitive\" schools (the big fish, small pond theory), especially when we are talking about all respectable schools. Do you agree, or am I letting the dollars sway my thinking? Thanks very much for your thoughts!</p>\n\n<p>First, congratulations on your son’s acceptances. You should be very proud.</p>\n\n<p>Personal finances and your ability and willingness to pay more for a school are subjective and something I can’t fairly comment on. That said, while it probably isn’t worth going to the higher ranked school just to get your son into medical school (since that decision won’t be based necessarily on tougher competition), you should consider factors other than rankings when helping your son choose a school: among these: the school’s strength in your son’s intended major, the strength of the school’s premed program (if they have one, and if not, the quality of their science offerings), financial aid/scholarships (I know your son has gotten a scholarship from UConn, but he may get similar offers from other schools as well), student life (such as clubs, activities, athletics, etc.), the student mix (such as male/female ratio, religious and political leanings and socioeconomics of the student body), location, and size.</p>\n\n<p>Your son may also want to consider the breadth and quality of other majors offered at the school just in case he decides not to go to medical school or if he decides to major in something considered “nontraditional” for premed students.</p>\n\n<p>So what you need to figure out is what, if anything, you’re willing and able to pay for your son’s education and finding a school within these financial means where your son is going to be happy. After all, if he’s happy, he’s more likely to do well in school. Good luck!</p>\n\n<p>I have recently been admitted to Mississippi State University and to the University of Tennessee at Chattanooga. Right now I would like to study meteorology. Mississippi State has a great meteorology program, and it's the closest meteorology school to my home. I have been on campus, and I really love the atmosphere there. However, all of my best friends that I've known my entire life are going to Chattanooga. I can't imagine life without them, and I know we would have an amazing college experience together. I figure if I go to UT-Chatt, then I could study something in the medical field, since I am also interested in this. Both scholarship amounts I would receive from each school are about the same. </p>\n\n<p>So I really don't know which to choose. Can you help me?</p>\n\n<p>Thanks for this question. I have been thinking about it for a little while, and I have decided that instead of giving you an answer, I'm going to ask you two questions in return.</p>\n\n<ul>\n	<li>\n	<p>1) If you decide to go to Chattanooga with your friends, it's possible that your group will start to drift apart a little (after all, the college atmosphere is different, and young adults tend to change the most in college). Will you still feel as though you will have a good college experience there, or will you feel resentful for going there and wish you had gone to Mississippi State? </p>\n	</li>\n	<li>\n	<p>2) How much do you care about studying meteorology? Do you believe it is something you are completely passionate about, or do you feel about the same about it as you might a different program of study?</p>\n	</li>\n</ul>\n\n\n<p>I encourage you to think about these questions, think about what your expectations are at present for college, think about what you value most, and talk to your friends and adult mentors about this dilemma. I wish you wisdom in your decision-making.</p>\n\n<p>My son is a senior far away from his family at boarding school. Working in an architectural office this summer made him interested in architecture and industrial design. The problem is that all his art classes from middle school on had to do with music, and he has no works for his portfolio. He signed up for a drawing class now and his art teacher seems excited by his work. Will he be effected with a sort of \"thin\" portfolio? Secondly, he and his adviser put some schools on his list like Virginia Tech in Blacksburg. We decided that because of his limited preparation in arts, but also as a practical advantage in the job world, he should go for schools with a technical approach and not completely arty. Would Virginia Tech be recommended? What sites are available that give you insights to colleges (other than the facts on schools own websites)? Thank you very much for your help.</p>\n\n<p>If you want more recommendations, I'd suggest you seek information from objective resources like architectural firms themselves. If you know of architects, ask them from which schools their firms frequently pull graduates. Also check outArchitect Magazine online. It offers a wide variety of resources to aspiring architects, including its ranking of best architecture schools.</p>\n\n<p>Also check with your son to see what aspects of architecture he is specifically loving. Is it the artistic aspect of creating something original in 3-dimensional form? Or is he more drawn to the technical and mathematical aspects of architecture? It doesn't hurt to keep the options open; an art school isn't out of the question quite yet just because of his \"limited preparation\" as you mentioned.</p>\n\n<p>In addition, find out what specific kind of architecture your son likes. There are so many branches of architecture (for example, you mentioned Virginia Tech--it's actually ranked number 1 currently in landscape architecture). Does your son like modern architecture? restoration architecture of old buildings? garden and outdoor parks architecture? Do a little research. Google is going to be your best friend on this journey.</p>\n\n<p>Also, I wouldn't worry about your son's \"thin\" portfolio just yet. But make sure to gather what you've got. Be absolutely sure to mention his work in an architectural office when he starts applying to schools.</p>\n\n<p>And I would bet he still has time to put together some quality pieces, artistic or otherwise. He should talk to the industrial tech and art teachers at his schools to see whether he could work on some specialized architectural design pieces on an independent basis. Or he could ask the firm he worked at to help in more depth with some of their projects on an apprentice sort of basis. Chances are, if he really does want to do this, he'll love putting together that kind of work for his portfolio anyway.</p>\n\n<p>Citation: <a href=\"http://mycollegeguide.org/guru/19/picking-the-right-school\">mycollegeguide.org</a></p>\n\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"2\">\n\n<p>Enrollment at American colleges is sliding, but competition for spots at top universities is more cutthroat and anxiety-inducing than ever. In the just-completed admissions season, Stanford University accepted only 5 percent of applicants, a new low among the most prestigious schools, with the odds nearly as bad at its elite rivals.</p>\n\n<p>Deluged by more applications than ever, the most selective colleges are, inevitably, rejecting a vast majority, including legions of students they once would have accepted. Admissions directors at these institutions say that most of the students they turn down are such strong candidates that many are indistinguishable from those who get in.</p>\n\n<p>Isaac Madrid applied to 11 colleges, a scattershot approach that he said is fairly typical at his private high school, Bellarmine College Preparatory in San Jose, Calif. Students there are all too aware of the long odds against getting into any particular elite university. “It was a crazy amount of work and stress doing all those essays by the deadline and keeping up my schoolwork, and waiting on the responses, and we had more than $800 in application fees,” he said.</p>\n\n<p>Isaac Madrid, who attends a private high school in San Jose, Calif., applied to 11 colleges and was accepted at Yale. Credit Thor Swift for The New York Times Mr. Madrid, 18, got a taste of how random the results can seem. He was among the 95 percent turned away by Stanford, but he got into Yale, which he plans to attend, and he admitted having no real insight into the reasons for either decision.</p>\n\n<p>Bruce Poch, a former admissions dean at Pomona College in Claremont, Calif., said he saw “the opposite of a virtuous cycle at work” in admissions. “Kids see that the admit rates are brutal and dropping, and it looks more like a crapshoot,” he said. “So they send more apps, which forces the colleges to lower their admit rates, which spurs the kids next year to send even more apps.”</p>\n\n<p>For most of the past six decades, overall enrollment boomed, while the number of seats at elite colleges and universities grew much more slowly, making them steadily more selective. Enrollment peaked in 2011, and it has dropped a bit each year since then, prompting speculation that entry to competitive colleges would become marginally easier. Instead, counselors and admissions officers say, the pool of high-achieving applicants continues to grow, fed partly by a rising number from overseas.</p>\n\n<p>At the same time, students send more applications than they once did, abetted by the electronic forms that have become nearly universal and uniform applications that can make adding one more college to the list just a matter of a click. Seven years ago, 315 colleges and universities accepted the most widely used form, the Common Application; this year, 517 did.</p>\n\n<p>Students applying to seven or more colleges made up just 9 percent of the applicant pool in 1990, but accounted for 29 percent in 2011, according to surveys by the National Association for College Admission Counseling, and counselors and admissions officers say they think the figure has gone higher still. While people have lavished attention on a Long Island teenager who was accepted by all eight Ivy League colleges, admissions professionals say it is remarkable that anyone would apply to all eight.</p>\n\n<p>Stanford received 42,167 applications for the class of 2018 and sent 2,138 acceptance notices, for a first-year class that, ultimately, will number about 1,700.</p>\n\n<p>The University of California, Los Angeles, the national leader in applications, had more than 86,000 requests — twice as many as in 2005 — for space in a first-year class of about 6,000, and it also received 19,000 applications to transfer from other colleges and universities. This year, for the first time, the admission rate for first-year applicants at U.C.L.A. and the University of California, Berkeley, could drop below 20 percent.</p>\n\n<p>Students at Yale University last spring. A generation ago, it was rare for even highly competitive colleges to offer places to fewer than 20 percent of their applicants. Credit Christopher Capozziello for The New York Times “For most kids, this really used to be a regional process, but they have access to so much information online now, so every school seems local,” said Richard H. Shaw, the dean of undergraduate admission at Stanford. Admissions directors at several top Eastern colleges agreed, saying that they now received more applications from California than any other state, which would have been unthinkable a few years ago.</p>\n\n<p>Some of them also pointed to colleges’ increasingly aggressive outreach to prospective students, with mailings, emails and advertising — some of it well intentioned, and some of it more cynical.</p>\n\n<p>“One of the ways that colleges are measured is by the number of applicants and their admit rate, and some colleges do things simply to increase their applicant pool and manipulate those numbers,” said Christoph Guttentag, the dean of undergraduate admission at Duke.</p>\n\n<p>A generation ago, it was rare for even highly competitive colleges to offer places to fewer than 20 percent of their applicants. In 2003, Harvard and Princeton drew exclamations of dismay (from prospective applicants), envy (from other colleges) and satisfaction (from those they accepted) when they became the first top universities to have their admission rates dip below 10 percent. Since then, at least a dozen have gone below that threshold.\nThis was the second year in a row that Stanford had the worst odds of admission among top colleges, a title that in previous years was usually claimed by Harvard. This year, by the April 1 deadline for most colleges to send admission notices, Harvard and Yale had accepted about 6 percent of applicants, Columbia and Princeton about 7 percent, and the Massachusetts Institute of Technology and the University of Chicago about 8 percent. (Some rates will increase by a few tenths of a percentage point as colleges accept small numbers of applicants from waiting lists.)</p>\n\n<p>Several universities, including Stanford, Duke, Northwestern, Cornell and the University of Pennsylvania, had admission rates this year that were less than half of those from a decade ago. The University of Chicago’s rate plummeted to a little over 8 percent, from more than 40 percent.</p>\n\n<p>The most competitive small colleges draw comparably accomplished applicants, but far fewer of them relative to their size, so their admission rates are higher. Even so, the acceptance rates at Pomona, Amherst, Harvey Mudd, Bowdoin, Claremont McKenna, Swarthmore, Middlebury, Williams and others were between 10 and 20 percent this year.</p>\n\n<p>Mr. Shaw, the Stanford dean, said he could not predict where the rates would bottom out — in fact, he never expected them to go as low as they have.</p>\n\n<p>“Honestly,” he said, “I’m sort of in shock.”</p>\n\n<p>A version of this article appears in print on April 9, 2014, on page A1 of the New York edition with the headline: Best, Brightest and Rejected: Elite Colleges Turn Away Up to 95%.</p>\n\n<p>Citation: <a href=\"http://www.nytimes.com/2014/04/09/us/led-by-stanfords-5-top-colleges-acceptance-rates-hit-new-lows.html?_r=0\">The New York Times</a></p>\n\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"3\">\n<p>Ashley Koski, Durham, NC, ranked third in the senior class at Thomas Dale High School in Chester, Va., has wanted to attend Duke University since she was 12.Prospective applicants visited Duke, which has a waiting list of more than 3,000 this year.</p>\n\n<p>Late last month, she learned that Duke had neither accepted nor rejected her. It had offered her a spot on the waiting list — along with 3,382 other applicants. That is almost twice the size of the incoming freshman class.</p>\n\n<p>“I kind of just went quiet the rest of the day,” Ms. Koski said. “I’d rather have a yes or no. I can’t make plans and be excited like the rest of my friends.”</p>\n\n<p>Duke, which had a record 27,000 freshman applicants, has placed 856 more on its waiting list than a year ago. The reasons include the uncertain economy, which makes it hard for Duke to estimate how many of the 4,000 it has accepted will say yes.</p>\n\n<p>If Duke’s best guess holds, no more than 60 will be admitted through the narrow gate of what is essentially a giant holding pen.</p>\n\n<p>Other schools are also hedging their bets this spring. Most Ivy League colleges had sharp jumps in applications, as did similarly selective colleges like the University of Chicago, Northwestern, Stanford and the Massachusetts Institute of Technology. Many students hedged bets of their own, and submitted more applications — in some instances 15 or more.</p>\n\n<p>The admission process is a complicated dance of supply and demand for colleges. And this spring, many institutions have accepted fewer applicants, and placed more on waiting lists, until it becomes clear over the next few weeks how many spots remain.</p>\n\n<p>M.I.T., which had a 6 percent increase in applicants, increased its waiting list by more than half, to 722. Last year, it accepted fewer than 80 from that list. Yale, which had a slight dip in applications this year yet still admitted fewer than 8 percent of applicants, placed nearly 1,000 others on its waiting list, an increase of more than 150. Dartmouth increased its list by about 80, to 1,740.</p>\n\n<p>No selective college, though — at least none that makes its figures public — has placed as many applicants in a holding pattern this spring as Duke, which has seen applications surge by 30 percent over the last two years. And those applications were filed long before its men’s basketball team won this year’s national collegiate championship, a victory that could prompt more students to say yes to Duke’s offer of admission, and thus leave fewer slots for those in waiting.</p>\n\n<p>In an interview on a recent morning on Duke’s Gothic-style campus, which was mostly built in the 1930’s but looks centuries older, Christoph Guttentag, the dean of undergraduate admissions, likened his task to that of a sculptor finishing a work of art — and the waiting list to his last palette of materials.</p>\n\n<p>“I have no idea what I’m going to need to finish sculpting the class,” he said, his voice echoing off walls of native knotty pine. “From an institutional perspective, it’s important that I have some flexibility.” \nLike its competitors, Duke does not rank students on its waiting list. Instead, decisions about who will rise to the top are often a function of what the admissions office perceives as deficiencies in the next freshman class. There might be, for example, a surplus of aspiring engineers and not enough potential English majors, or too few students from Florida. Or there might be an unexpected shortage of oboe players. \nWhile Mr. Guttentag encourages students on the waiting list to send him a one-page letter — or a video of 60 seconds or less — letting him know how strongly they wish to attend, and why, they can do little to improve their chances.</p>\n\n<p>“The student can’t know, ‘Gee, did all the violinists decide to turn us down?’ ” he said. “They can’t affect this very much at this point.”</p>\n\n<p>Since waiting list offers went out in late March, Mr. Guttentag and his colleagues have been deliberating whether to end the suspense for at least several hundred who are on it — those who probably have little hope of coming off.</p>\n\n<p>Another reason the list is so long this year, he said, is that he and his colleagues were so overwhelmed by the volume of applicants that they ran out of time.</p>\n\n<p>Citation: <a href=\"http://www.nytimes.com/2010/04/14/education/14waitlist.html?pagewanted=all&_r=0\">Travis Dove for The New York Times</a></p>\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"4\">\n<p>Of all college statistics, the admission rate might be the most misleading. Which is saying something because there are other strong candidates for that title. Graduation rates, for instance.\nThe admission rate looks straightforward enough: Admission offers divided by applications. But what is an offer, and what is an application?</p>\n\n<p>At the end of the recruiting cycle, a waiting list might be wholly converted to admission offers. Those don’t get included in the calculations in the initial flurry of news releases as colleges issue decisions.</p>\n\n<p>Various colleges define applications in various ways. Some are quite strict about only counting apps that have all required elements in a file — essays, test scores, transcripts, letters of recommendation, etc. Others essentially count anyone who starts the process and pays a fee.\nVolume of applications can rise or fall based on whether a college asks for a supplemental essay, whether it just joined the Common Application or some other collective online portal, or whether the Common App itself changes its format.</p>\n\n<p>It also matters a great deal how many applicants are accepted through binding early decision programs that require students to enroll if given an offer. A college might load up on ED admits and then deny admission to a huge number of regular-cycle applicants.</p>\n\n<p>Bottom line: Admission rates are volatile from year to year, and comparing rates from one college to another is a precarious business.\nStill, these rates are closely watched and impossible to ignore. Every student wants to know: What are my chances? Admission rates don’t really convey what the chances are for an individual applicant, but they usually reflect something about a college’s position in the hotly competitive market. So here is a sampling of rates for colleges and universities for students who applied to enter as freshmen in the fall for the Class of 2018. The figures combine all early and regular admission offers.</p>\n\n<p>We’re expanding on a list we put together last week for the Ivy League. The first portion of this list is drawn from the top 20 schools on each of two sets of the U.S. News & World Report rankings, for liberal arts colleges and national universities. The second portion is comprised of selected schools in Maryland, Washington and the District of Columbia (some of which are also in the top 20). We’ll update this file as we get more information.</p>\n\n<p>One more caveat: All of this is preliminary. There will be many changes before and after the May 1 deadline for admitted students to decide which offer to accept.</p>\n\n<ul>\n	<li>Amherst College: 1,103 admission offers out of 8,468 applications, 13 percent.</li>\n	<li>Bowdoin College: 1,032 offers out of 6,935 apps, 15 percent.</li>\n	<li>Brown University: 2,619 offers out of 30,432 apps, 9 percent.</li>\n	<li>California Institute of Technology: 529 offers out of 6,524 apps, 8 percent.</li>\n	<li>Carleton College: 1,446 offers out of 6,293 apps, 23 percent.</li>\n	<li>Claremont McKenna College: 613 offers out of 6,043 apps, 10 percent.</li>\n	<li>Colgate University: 2,224 offers out of 8,713 apps, 26 percent.</li>\n	<li>Columbia University: 2,291 offers out of 32,967 apps, 7 percent.</li>\n	<li>Cornell University: 6,014 offers out of 43,041 apps, 14 percent.</li>\n	<li>Dartmouth College: 2,220 offers out of 19,296 apps, 12 percent.</li>\n	<li>Davidson College: 1,169 offers out of 5,558 apps, 21 percent.</li>\n	<li>Duke University: 3,499 offers out of 32,506 apps, 11 percent.</li>\n	<li>Emory University: 4,616 offers out of 17,797 apps, 26 percent.</li>\n	<li>Grinnell College: 1,626 offers out of 6,056 apps, 27 percent.</li>\n	<li>Hamilton College: 1,312 offers out of 5,071 apps, 26 percent.</li>\n	<li>Harvard University: 2,023 offers out of 34,295 apps, 6 percent.</li>\n	<li>Harvey Mudd College: 510 offers out of 3,678 apps, 14 percent. Note: Harvey Mudd’s figures are based on what it labels “actionable” applications, meaning those that are complete enough for the college to make a decision. Separately, it reports a higher figure for total apps. If that higher figure were used, its admission rate would be a percentage point lower.</li>\n	<li>Haverford College: no figures available yet.</li>\n	<li>Massachusetts Institute of Technology:1,419 offers out of 18,357 apps, 8 percent.</li>\n	<li>Middlebury College: 1,422 offers out of 8,196 apps, 17 percent.</li>\n	<li>Northwestern University: 4,349 offers out of 33,673 apps, 13 percent.</li>\n	<li>Pomona College: 938 offers out of 7,727 apps, 12 percent.</li>\n	<li>Princeton University: 1,939 offers out of 26,641 apps, 7 percent.</li>\n	<li>Rice University: 2,498 offers out of 17,720 apps, 14 percent.</li>\n	<li>Smith College: 1,802 offers out of 4,461 apps, 40 percent.</li>\n	<li>Stanford University: 2,138 offers out of 42,167 apps, 5 percent.</li>\n	<li>Swarthmore College: 930 offers out of 5,540 apps, 17 percent.</li>\n	<li>University of California at Berkeley: no figures available until April 18.</li>\n	<li>University of Chicago: 2,304 offers out of 27,503 apps, 8 percent.</li>\n	<li>University of Notre Dame: 3,720 offers out of 17,897 apps, 21 percent.</li>\n	<li>University of Pennsylvania: 3,583 offers out of 35,868 apps, 10 percent.</li>\n	<li>U.S. Military Academy: no figures available yet.</li>\n	<li>U.S. Naval Academy: no figures available yet.</li>\n<ul>\n\n<p>Citation: <a href=\"http://www.washingtonpost.com/local/education/college-admission-rates-for-class-of-2018-an-imperfect-but-closely-watched-metric/2014/04/03/820ff578-b6af-11e3-8cc3-d4bf596577eb_story.html\">The Washington Post</a></p>\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"5\">\n<h4>Admissions Statistics</h4>\n\n<p>The admissions process, while time-consuming and complex, is also fun and fascinating. Below, we've included some important facts and figures that will help you understand the trends in admission over the past 5-10 years.</p>\n\n<h4>College Acceptance Rates</h4>\n<p>In 2014, college acceptance rates dropped as low as 5.07% for the first time ever. Some of the most selective schools were Harvard University (5.9%) in Cambridge, MA, Stanford University (5.07%) in Palo Alto, CA, Yale University (6.26%) in New Haven, CT, and Columbia University (6.94%) in New York, NY.</p>\n\n<ul>\n	<li>School 		2014 2013 2012 2005 </li>\n	<li>Amherst College 1	3% 13.67% 11.92% 18% </li>\n	<li>Babson College 	TBA 28.18% 29.0% 37% </li>\n	<li>Bard College 		TBA 34.75% 35.20% 38% </li>\n	<li>Boston College 	33.6% 32% 28.82% 38%</li>\n	<li>Brown University 	8.6% 9.2% 9.60% 16%</li>\n	<li>Columbia University 	6.94% 6.89% 7.42% 12%</li>\n	<li>Cooper Union 	TBA 7.27% 6.33% 13% </li>\n	<li>Cornell University 	14% 15.2% 16.19% 31% </li>\n	<li>Dartmouth College 	11.5% 10% 9.43% 18% </li>\n	<li>Duke University 	10.7% 11.6% 11.87% 23% </li>\n	<li>George Washington 	43.3% 33.4% 32.7% 39% </li>\n	<li>Georgetown University 	16.6% 16.6% 16.50% 23% </li>\n	<li>Harvard University 	5.9% 5.79% 5.92% 11% </li>\n	<li>Massachusetts Institute of Technology 	7.7% 8.2% 8.95% 16% </li>\n	<li>Middlebury College 	17.3% 19.21% 18.48% 23% </li>\n	<li>New York University 	33.6% 30.3% 35.03% 32% </li>\n	<li>Northwestern University 	12.9% 13.9% 15.27% 33% </li>\n	<li>Pomona College 	12.14% 12.89% 12.82% 19% </li>\n	<li>Princeton University 	7.28% 7.29% 7.86% 10% </li>\n	<li>Stanford University 	5.07% 5.69% 6.63% 13% </li>\n	<li>Swarthmore College 	16.79 14.05% 14.10% 25% </li>\n	<li>University of California - Berkeley 17.3% 20.8% 21.1% 27% </li>\n	<li>University of Michigan 	32% 33% 36.55% 63% </li>\n	<li>University of Notre Dame 	20.79% 22.3% 22.71% 29% </li>\n	<li>University of Pennsylvania 	9.9% 12.10% 12.30% 29% </li>\n	<li>University of Southern California 17.8% 19.68% 18.20% 27% </li>\n	<li>University of Virginia 	28.9% 29% 27.44% 39% </li>\n	<li>Vanderbilt University 	12.5% 12.7% 14.1% 40% </li>\n	<li>Washington University in St. Louis 17.12% 15.01% 15.40% 20% </li>\n	<li>Wesleyan University 	23.2% 19.37% 19.74% 28% </li>\n	<li>Williams College 	18.2% 16.88% 16.73% 21% </li>\n	<li>Yale University 	6.26% 6.72% 6.82% 11% </li>\n</ul>\n\n<h4>Fun Facts for Applicants</h4>\n<p>You may think you have heard or read all there is to know about the applications, numbers, and statistics, but there are many schools that deviate from the norm. At IvyWise, we keep our fingers on the pulse of education; here are some colleges and universities that are setting themselves apart from other institutions.</p>\n\n<p>Some schools are more selective than the ones listed above. For example, the Curtis Institute of Music admitted just 2.94% of graduates for the class of 2015. That's even lower than Harvard University, which admitted 5.9% of applicants for the class of 2016. </p>\n\n<p>Many selective colleges encourage art, music, and dance submissions as part of their undergraduate application process. In 2009, Tufts University in Medford, MA encouraged students to submit a one-minute YouTube video. Since then, schools like Chapman University and Michigan State University have followed suit.</p>\n\n<p>For the Fall 2008 entering class, the United States Naval Academy in Annapolis, MD had the highest yield rate (percentage of students who attended compared to the number accepted) of any liberal arts college. Second place went to the United States Military Academy in West Point, NY.</p>\n\n<p>Georgetown University in Washington, DC, is one of the few schools to require an interview for undergraduate admissions. </p>\n\n<p>The smallest college in the country is Alaska Bible College, with 38 students. They admit 100% of their applicants. </p>\n\n<p>Antioch College in Ohio is the only liberal arts college to require an off-campus, co-operative work program of all of its students. \nOf the class of 2013 at Hampshire College, in Amherst, MA, one in seven students founded at least one new organization during their high school careers.</p>\n\n<p>In 2012, the University of California, Berkeley was the most selective public university in the U.S., admitting 21.13% of applicants. Previously, the title was held by University of California, Los Angeles, which in 2012 admitted 21.27%.</p>\n\n<p>The average student uses 400 sheets of paper during the college application process. Currently, over 200 colleges and universities have gone paperless. IvyWise went paperless in the summer of 2010 (spurred by a suggestion from IvyWise interns, one of whom was a former IvyWise student).</p>\n\n<p>In 2014, it was reported that public high school college counselors spend 23% of their time on college advising. According to NACAC, in 2010-11, the national public school student-to-counselor ratio was 473:1.\nLebanon Valley College in Pennsylvania offers the Vickroy Scholarship, which is half-off tuition, to all prospective students who graduate in the top 10% of their high school class. </p>\n\n<p>Every year, the University of Chicago challenges applicants to create a unique admissions essay question. The best questions are featured on the following year's application. </p>\n\n<p>High school students may not take the SATand SAT Subject Tests on the same day. If they were allowed to, students would be testing for approximately seven hours.</p>\n\n<p>At over $61,236 per year (including cost of living), Sarah Lawrence College in Bronxville, NY is the most expensive school in the U.S. \nAt the University of Pennsylvania in Philadelphia, 3,000 applicants to the class of 2014 were waitlisted. The school admitted 3,847 applicants. Even if every admitted student chose another school, Penn still had enough waitlisted students to fill its freshman class (2,501 students in 2009).</p>\n\n<p>In 2012, MIT in Boston, MA, waitlisted 849 students compared to 455 in 2009, an 86% increase. </p>\n\n<p>All 4-year colleges and universities in the United States accept the ACT.</p>\n\n<p>With more than 50 colleges and universities within 50 square miles, Boston is the metropolitan area with the most accredited higher education institutions.</p>\n\n<p>In 2013, business was the most popular undergraduate major for both men and women.</p>\n\n<p>Though the number of women applying to college exceeds the number of men by a ratio of 60:40, the United States Air Force Academy (79% male), the California Maritime Academy (80% male), and the Berklee College of Music (71% male) all boast large male student populations.</p>\n<p>Citation: <a href=\"http://www.ivywise.com/admission_statistics.html\">ivywise</a></p>\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"5\">\n<p>Involvement in extracurricular activities allows students opportunities to develop skills in areas of their individual talents or interests. It also provides a new avenue to meet classmates with similar interests. Participation in extracurricular activities increases self-esteem, promotes responsibility, assists students with time management skills, builds socialization skills and is favorable to college entrance committees. Many students participate in several different extracurricular activities throughout the school year.</p>\n\n<p>Extracurricular activities that focus on academic areas include the school newspaper, quiz team, science club, school government, debate team or journalism club. Each of these activities promotes academic excellence and provides students with an opportunity to expand their content knowledge outside the classroom. While building leadership skills, students will also learn the benefits of technical writing, keeping and meeting deadlines and public speaking. Students will also have opportunities to broaden their content knowledge about unfamiliar subjects by conducting research in preparation for debates or academic competitions.</p>\n\n<p>Athletic Focused Activities</p>\n\n<p>Extracurricular activities that focus on athletics include sports such as basketball, volleyball, baseball, track, softball, cheerleading, football and soccer. Some schools offer even more sports teams to join, and some students play a different sport each season. Being part of an athletic team allows students to learn important life skills such as cooperation, sportsmanship, respect, responsibility, leadership and dedication. Students learn the importance of working together, and many stereotypes and barriers are broken on the field. Participation in sports often results in lifelong friendships.</p>\n\n<p>Interest Focused Activities</p>\n<p>Extracurricular activities that focus on individual interests include the technology club, chess club, yearbook staff, photography club, dance club, 4-H club, drama club, band and chorus. Participation in these activities allows students to showcase their skills in areas of their interests while forming new friendships with peers who are like-minded. Some possible school activities might include performing help-desk duties for educators in the building, photographing school events, participating in plays and skits, playing a variety of musical instruments, performing in concerts and running school news programs.</p>\n\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"6\">\n	<p><img src=\"http://cdn.citylab.com/media/img/citylab/2012/04/25/bordersmain/lead_large.jpg\" alt=\"\"></p>\n\n	<p>When we think about borders, we tend to think of administrative boundaries. Those demarcating lines, often grown out of rivers and mountain ranges or diplomatic quirks, govern our daily lives, and that’s doubly so if we live near a neighboring country or state.</p>\n\n	<p>We know that these boundaries are on some level unnatural. Driving around Kansas City, where I live, makes this abundantly clear. Gas price differences aside, it can be difficult to tell which state you’re in, Missouri or Kansas, and the small street of State Line Road does nothing to make it clearer.</p>\n\n	<p>But are there more organic borders, brought to life by our own actions and activities? I recently set out, along with a team from MIT and AT&T, to see if I could find an answer. Previously, members of our group had collaborated to use mobile phone call and text message records to determine how tightly connected different counties are to each other. But communication is far from the only way in which we are connected or separated. We can be connected based on where we move, how we speak, and even what sports teams we root for.</p>\n\n	<p>Citation: <a href=\"http://www.citylab.com/politics/2012/04/invisible-borders-define-american-culture/1839/\">citylab</a></p>\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"7\">\n	<p><img src=\"http://cdn.citylab.com/media/img/citylab/legacy/2012/04/24/map1.jpg\" alt=\"\"></p>\n	\n	<p>So our research team, consisting of DeDe Paul of AT&T, Vincent Blondel of Belgium’s Université catholique de Louvain, IBM's Dominik Dahlem*, and myself, set out to understand how a variety of cultural and social properties create borders, and whether or not these borders actually overlap. Are there in fact natural boundaries to the borders that we create as social creatures?</p>\n\n	<p>Let’s first examine the different borders we can define. We first have communication, from cell phone data. The map below, based on aggregated phone calls between counties, makes use of an algorithm we developed that detects communities within networks. The result is a visualization of highly connected counties, grouped together by color. These clusters of connected places sometimes coincide with political boundaries, but in many other cases do not.</p>\n\n\n	<p>Citation: <a href=\"http://www.citylab.com/politics/2012/04/invisible-borders-define-american-culture/1839/\">citylab</a></p>\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"8\">\n	<p><img src=\"http://cdn.citylab.com/media/img/citylab/legacy/2012/04/24/map2.jpg\" alt=\"\"></p>\n	\n	<p>Historically, communication and mobility were closely tied together; you could only interact directly with people in person. But with the advent of the telephone and the Internet, these two parts of human behavior have become disentangled. So, does mobility affect the borders we find?</p>\n\n	<p>Using data from IRS migration records—where people relocate to—we constructed a similar map, but this time based on mobility. In this case, we connected and grouped counties based on where people moved, rather than to whom they spoke. Instead of showing the different groupings, we have this time highlighted the borders between these regions.</p>\n\n	<p>What we found is that, for the most part, there is a great deal of overlap between communication and mobility. This is especially clear in the South, where the border between Mississippi and Arkansas is present for all of the data. In other words, people in Mississippi (or Arkansas) primarily interact with others in their own state, and even tend to move only within the state. Despite all the technology at our disposal, in many ways we are still products of place.</p>\n\n	<p>Citation: <a href=\"http://www.citylab.com/politics/2012/04/invisible-borders-define-american-culture/1839/\">citylab</a></p>\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"9\">\n	<p><img src=\"http://cdn.citylab.com/media/img/citylab/legacy/2012/04/24/map4.jpg\" alt=\"\"></p>\n	\n	<p>One of the clearest regional differences in the U.S. can found by tracking the words people use to refer to soft drinks, which is in fact the map you saw at the top of this story. Pop or soda, or even Coke, these small linguistic differences are not as small as we might think. While “soda” commands the Northeast and West Coast (green) and “pop” is in between (black), “Coke” reigns in the south (turquoise). These small distinctions can often act as touchstones for larger cultural differences.</p>\n\n	<p>Citation: <a href=\"http://www.citylab.com/politics/2012/04/invisible-borders-define-american-culture/1839/\">citylab</a></p>\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"10\">\n	<p><img src=\"http://cdn.citylab.com/media/img/citylab/2012/04/25/bordersmain/lead_large.jpg\" alt=\"\"></p>\n	\n	<p>We can also look at how different counties voted in the last presidential election (blue is Democratic and green is Republican, with Purple as missing data).</p>\n\n	<p>Citation: <a href=\"http://www.citylab.com/politics/2012/04/invisible-borders-define-american-culture/1839/\">citylab</a></p>\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"11\">\n	<p><img src=\"http://cdn.citylab.com/media/img/citylab/legacy/2012/04/24/map6.jpg\" alt=\"\"></p>\n	\n	<p>And we can even do sports! Below is a map of baseball blackout regions, the parts of the country where a team’s games are considered a local market and are subject to certain broadcasting conditions.</p>\n\n	<p>Citation: <a href=\"http://www.citylab.com/politics/2012/04/invisible-borders-define-american-culture/1839/\">citylab</a></p>\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"12\">\n	<p><img src=\"http://cdn.citylab.com/media/img/citylab/legacy/2012/04/24/map6.jpg\" alt=\"\"></p>\n	\n	<p>While we as humans are incredibly complicated organisms, there are a few simple rules to how we behave. We sort ourselves based on cultural similarities, and these in turn are related to how we choose to move from place to place, and even with whom we communicate. A lot of these boundaries are porous and messy, allowing for a rich diversity of cultural flow. But knowing how we interact as part of a complex society, instead of only looking at political borders, can explain a lot more than we might have imagined.</p>\n\n	<p>Citation: <a href=\"http://www.citylab.com/politics/2012/04/invisible-borders-define-american-culture/1839/\">citylab</a></p>\n</div>\n\n<div class=\"articleItem textblock\" data-id=\"13\">\n<h4>U.S. Higher Education Glossary</h4>\n\n<strong>International students: Your search for the best U.S. university for you starts here.</strong>\n<p>What's the difference between a college and a university? Who are undergraduate students versus graduate students? What's the FAFSA? Studying in the United States can be confusing if you don't fully understand the words used in U.S. higher education. With that in mind, U.S. News has compiled a glossary of important terms specifically for international students and parents. While this list is not exhaustive, it offers a key starting point as you explore the best U.S. universities for you.</p>\n\n<p><strong>Academic adviser: </strong> A member of a school's faculty who provides advice and guidance to students on academic matters, such as course selections.</p>\n\n<p><strong>Academic year: </strong> Annual period during which a student attends and receives formal instruction at a college or university, typically from August or September to May or June. The academic year may be divided into semesters, trimesters, quarters, or other calendars.</p>\n\n<p><strong>Accredited: </strong> Official recognition that a college or university meets the standards of a regional or national association. Although international students are not required to attend an accredited college or university in the United States, employers, other schools, and governments worldwide often only recognize degrees from accredited schools.</p>\n\n<p><strong>ACT (American College Test): </strong> A standardized college entrance exam administered by the American College Testing Program. Four separate, multiple-choice tests measure knowledge of English, math, reading, and science, and one optional writing test measures essay planning and writing skills. Most students take the ACT during their junior or senior year of high school, and most colleges and universities accept scores from either the ACT or SAT. Some schools may recommend, but not require, international students to take the ACT or SAT. (See the U.S. News college test prep guide for more information.)</p>\n\n<p><strong>Affidavit of Support: </strong> An official document proving adequate funding from an individual or organization to cover an international student's educational and living expenses while enrolled at a U.S. college or university.</p>\n\n<p><strong>AP (Advanced Placement program): </strong> A program offered by the College Board, a U.S.-based nonprofit educational organization, that allows students to take college-level courses while in high school. Students can then take standardized AP exams; those with qualifying scores can earn credit at certain colleges and universities.</p>\n\n<p><strong>Assistantship: </strong> A financial aid award granted to a graduate student to help pay for tuition that is offered in return for certain services, such as serving as a teaching assistant or research assistant.\nAssociate's: An undergraduate degree awarded by a college or university upon successful completion of a program of study, usually requiring two years of full-time study. An associate's is typically awarded by community colleges; it may be a career or technical degree, or it may be a transfer degree, allowing students to transfer those credits to a four-year bachelor's degree-granting school.\n\n<p><strong>Audit: </strong> To take a class to gain knowledge about a subject, but without receiving credit toward a degree.</p>\n\n<p><strong>Bachelor's: </strong> An undergraduate degree awarded by a college or university upon successful completion of a program of study, typically requiring at least four years (or the equivalent) of full-time study. Common degree types include bachelor of arts (B.A. or A.B.), which refers to the liberal arts, and bachelor of science (B.S.). A bachelor's is required before starting graduate studies.</p>\n\n<p><strong>Campus: </strong> The grounds and buildings where a college or university is located.</p>\n\n<p><strong>Coed: </strong> Open to both men and women (often used to describe a school that admits both sexes and a dormitory that houses both genders).</p>\n\n<p><strong>College: </strong> A postsecondary institution that typically provides only an undergraduate education, but in some cases, also graduate degrees. \"College\" is often used interchangeably with \"university\" and \"school.\" Separately, \"college\" can refer to an academic division of a university, such as College of Business. (See U.S. News's rankings of Best Colleges.)\n\n<p><strong>Commencement: </strong> A graduation ceremony where students officially receive their degrees, typically held in May or June at the end of the academic year, though some colleges and universities also hold August and December ceremonies.</p>\n\n<p><strong>Common Application: </strong>A standard application form that is accepted by more than 450 member colleges and universities for admissions. Students can complete the form online or in print and submit copies to any of the participating colleges, rather than filling out individual forms for each school. However, international students will typically need to submit additional application materials unique to each college.</p>\n\n<p><strong>Community college: </strong>A public, two-year postsecondary institution that offers the associate degree. Also known as a \"junior college.\" Community colleges typically provide a transfer program, allowing students to transfer to a four-year school to complete their bachelor's degree, and a career program, which provides students with a vocational degree.</p>\n\n<p><strong>Conditional admission: </strong>An acceptance to a college or university that is dependent on the student first completing coursework or meeting specific criteria before enrollment. For an international student, this can include a requirement to attain a certain level of English-language proficiency if the student's TOEFL score doesn't meet the minimum required.</p>\n\n<p><strong>Core requirements: </strong>Mandatory courses that students are required to complete to earn a degree.</p>\n\n<p><strong>Course: </strong>A regularly scheduled class on a particular subject. Each college or university offers degree programs that consist of a specific number of required and elective courses.</p>\n\n<p><strong>Course load: </strong>The number of courses or credits a student takes during a specific term.</p>\n\n<p><strong>Credits: </strong>Units that a school uses to indicate that a student has completed and passed courses that are required for a degree. Each school defines the total number and types of credits necessary for degree completion, with every course being assigned a value in terms of \"credits,\" \"credit hours,\" or \"units.\"</p>\n\n<p><strong>Culture shock: </strong>Feelings of uncertainty, confusion, or anxiety that can occur when adjusting to a new country and culture that may be very different from your own. International students may also experience \"reverse culture shock\" upon returning to their home country, after they have become accustomed to the new country and culture.</p>\n\n<p><strong>Curriculum: </strong>A program of study made up of a set of courses offered by a school.</p>\n\n<p><strong>Dean: </strong>The head of a division of a college or university.</p>\n\n<p><strong>Deferral / Deferred admission: </strong>A school’s act of postponing a student's application for early decision or early action, so that it will be considered along with the rest of the regular applicant group. A \"deferral\" can also refer to a student's act of postponing enrollment for one year, if the school agrees.</p>\n\n<p><strong>Degree: </strong>A diploma or title awarded to students by a college or university after successful completion of a program of study.</p>\n\n<p><strong>Department: </strong>A division of a school, made up of faculty and support staff, that gives instruction in a particular field of study, such as the history department.</p>\n\n<p><strong>Discipline: </strong>An area of academic study.</p>\n\n<p><strong>Dissertation: </strong>An in-depth, formal writing requirement on an original topic of research that is typically submitted in the final stages before earning a doctorate (Ph.D.).</p>\n\n<p><strong>Doctorate (Ph.D.): </strong>The highest academic degree awarded by a university upon successful completion of an advanced program of study, typically requiring at least three years of graduate study beyond the master's degree (which may have been earned at a different university). Ph.D. candidates must demonstrate their mastery of a subject through oral and written exams and original, scholarly research presented in a dissertation.</p>\n\n<p><strong>Dormitories (dorms): </strong>Student housing provided by a college or university, also known as \"residence halls,\" which typically includes rooms, bathrooms, common areas, and possibly a kitchen or cafeteria.</p>\n\n<p><strong>Double major: </strong>A program of study that allows a student to complete the course requirements for two majors at the same time.</p>\n\n<p><strong>Drop: </strong>To withdraw from a course. A college or university typically has a period of time at the beginning of a term during which students can add or drop courses.</p>\n\n<p><strong>Dual degree: </strong>Program of study that allows a student to receive two degrees from the same college or university.</p>\n\n<p><strong>Early action: </strong>A program offered by some colleges and universities that allows students to submit their applications early, typically in November or December, and receive decisions early, usually in mid- or late December. Students are not required to accept the admissions offer and have until May 1 to decide. Although some schools allow international students to apply via early action, applicants who request financial aid may not receive a decision any earlier than those who apply through the regular decision process.</p>\n\n<p><strong>Early decision: </strong>A program offered by some colleges and universities that allows students to submit an application to their top-choice school early, typically in November or December, and receive the decision early, usually in mid- or late December. If accepted, students are required to enroll at that school and withdraw all applications to other schools. Although some schools allow international students to apply via early decision, applicants who apply for financial aid may not receive a decision any earlier than those who apply through the regular decision process.</p>\n\n<p><strong>Electives: </strong>Courses that students can choose to take for credit toward a degree, but are not required.</p>\n\n<p><strong>English as a Second Language (ESL): </strong>A course or program of study used to teach English to non-native English speakers.</p>\n\n<p><strong>Enroll: </strong>To register or enter a school or course as a participant.</p>\n\n<p><strong>Exempt: </strong>Not required to do something that other students may be required to do. For example, a school may require all students to take a freshman English course, but some students may be exempt based on their high scores on a college entrance exam or their previous coursework.\nExtracurricular activities: </strong>Optional activities, such as sports, that students can participate in outside of academic classes.</p>\n\n<p><strong>Faculty: </strong>A school's teaching and administrative staff who is responsible for designing programs of study.\nFAFSA (Free Application for Federal Student Aid): </strong>Application used by U.S. citizens and permanent residents to apply for financial aid from U.S. federal and state governments. International students are not eligible for U.S. government aid, but schools may ask international students to submit a FAFSA to determine financial need. (Note: </strong>A social security number is required to complete the FAFSA.)</p>\n\n<p><strong>Fees: </strong>An amount of money charged by colleges and universities, in addition to their tuition, to cover costs of services such as libraries and computer technology.</p>\n\n<p><strong>Fellowship: </strong>An amount of money awarded by a college or university, usually to graduate students and generally based on academic achievement.\nFinancial aid: </strong>All types of money offered to a student to help pay tuition, fees, and other educational expenses. This can include loans, grants, scholarships, assistantships, fellowships, and work-study jobs. (See the U.S. News paying for college and paying for grad school guides for more information.)</p>\n\n<p><strong>Fraternity: </strong>A student organization, typically for men, formed for social, academic, community service, or professional purposes. A fraternity is part of a college or university's Greek system. Some fraternities, such as those with an academic or community service focus, may be coed.</p>\n\n<p><strong>Freshman: </strong>A student in the first year of high school or college / university.</p>\n\n<p><strong>Full-time student: </strong>A student who is enrolled at a college or university and is taking at least the minimum number of credits required by the school for a full course load.</p>\n\n<p><strong>GMAT (Graduate Management Admission Test): </strong>A standardized graduate business school entrance exam administered by the nonprofit Graduate Management Admission Council, which measures verbal, quantitative, and analytical writing skills. Some business schools accept either the GMAT or GRE. In June 2012, the GMAT will incorporate an integrated reasoning section designed to assess how applicants analyze different types of information at once. (See the U.S. News business school test prep guide for more information.)</p>\n\n<p><strong>Grade: </strong>A score or mark indicating a student's academic performance on an exam, paper, or in a course. A \"grade\" can also refer to which year a student is in while at elementary, middle, or high school, but that usage typically does not apply at the college or university level.\nGrade point average (GPA): </strong>A student's overall academic performance, which is calculated as a numerical average of grades earned in all courses. The GPA is determined after each term, typically on a 4.0 scale, and upon graduation, students receive an overall GPA for their studies.</p>\n\n<p><strong>Graduate school: </strong>The division of a college or university, or an independent postsecondary institution, which administers graduate studies and awards master's degrees, doctorates, or graduate certificates. (See U.S. News's rankings of Best Graduate Schools.)\nGraduate student / graduate studies: </strong>A student who already holds an undergraduate degree and is pursuing advanced studies at a graduate school, leading to a master's, doctorate, or graduate certificate. A \"graduate\" can also refer to any student who has successfully completed a program of study and earned a degree.</p>\n\n<p><strong>Grant: </strong>A type of financial aid that consists of an amount of free money given to a student, often by the federal or a state government, a company, a school, or a charity. A grant does not have to be repaid. \"Grant\" is often used interchangeably with \"scholarship.\"</p>\n\n<p><strong>GRE (Graduate Record Examination): </strong>A standardized graduate school entrance exam administered by the nonprofit Educational Testing Service (ETS), which measures verbal, quantitative, and analytical writing skills. The exam is generally required by graduate schools, which use it to assess applicants of master's and Ph.D. programs. Some business schools accept either the GMAT or GRE; law schools generally require the LSAT; and medical schools typically require the MCAT. Effective August 2011, the GRE will incorporate key changes in the content, length, and style of the exam. (See the U.S. News GRE guide for more information.)</p>\n\n<p><strong>Greek life / Greek system: </strong>A college or university’s collection of fraternities and sororities on campus, whose names originate from letters in the ancient Greek alphabet.</p>\n\n<p><strong>High school: </strong>A secondary school that offers grades 9 to 12.\nHumanities: </strong>Academic courses focused on human life and ideas, including history, philosophy, foreign languages, religion, art, music, and literature.</p>\n\n<p><strong>Independent study: </strong>An academic course that allows students to earn credit for work done outside of the normal classroom setting. The reading or research assignment is usually designed by the students themselves or with the help of a faculty member, who monitors the progress.</p>\n\n<p><strong>Institute: </strong>An organization created for a specific purpose, usually for research, that may be located on a college or university's campus.\nInternal Revenue Service (IRS): </strong>The U.S. government agency that collects income taxes. International students who work on or off campus or receive taxable scholarships must pay taxes. A college or university's international student adviser can provide further information, including on relevant tax treaties between the United States and specific countries that may allow certain benefits.</p>\n\n<p><strong>International student adviser: </strong>A school official who assists international students, scholars, and faculty with matters including orientation, visas, income taxes, insurance, and academic and government rules, among other areas.</p>\n\n<p><strong>Internship: </strong>An experience that allows students to work in a professional environment to gain training and skills. Internships may be paid or unpaid and can be of varying lengths during or after the academic year.</p>\n\n<p><strong>Ivy League: </strong>An association of eight private universities located in the northeastern United States, originally formed as an athletic conference. Today, the term is associated with universities that are considered highly competitive and prestigious. The Ivy League consists of the highly ranked Brown University, Columbia University, Cornell University, Dartmouth College, Harvard University, Princeton University, University of Pennsylvania, and Yale University.</p>\n\n<p><strong>Junior: </strong>A student in the third year of high school or college / university.</p>\n\n<p><strong>Junior college: </strong>A two-year postsecondary institution that offers the associate degree. (See \"community college.\")</p>\n\n<p><strong>Letter of recommendation: </strong>A letter written by a student's teacher, counselor, coach, or mentor that assesses his or her qualifications and skills. Colleges, universities, and graduate schools generally require recommendation letters as part of the application process.</p>\n\n<p><strong>Liberal arts: </strong>Academic studies of subjects in the humanities, social sciences, and the sciences, with a focus on general knowledge, in contrast to a professional or technical emphasis. \"Liberal arts\" is often used interchangeably with \"liberal arts and sciences\" or \"arts and sciences.\"</p>\n\n<p><strong>Liberal arts college: </strong>A postsecondary institution that emphasizes an undergraduate education in liberal arts. The majority of liberal arts colleges have small student bodies, do not offer graduate studies, and focus on faculty teaching rather than research. (See U.S. News's rankings of Best Liberal Arts Colleges.)</p>\n\n<p><strong>Loan: </strong>A type of financial aid that consists of an amount of money that is given to someone for a period of time, with an agreement that it will be repaid later. International students are generally not eligible for U.S. federal government loans and will typically require an American cosigner to apply for a private bank loan.</p>\n\n<p><strong>LSAT (Law School Admission Test): </strong>A standardized law school entrance exam administered by the nonprofit Law School Admission Council, which measures reading comprehension, analytical reasoning, and logical reasoning skills. There is also a writing section; although it is not scored, it is sent to each law school to which a student applies. (See the U.S. News LSAT test prep guide for more information.)</p>\n\n<p><strong>Major: </strong>The academic subject area that a student chooses to focus on during his or her undergraduate studies. Students typically must officially choose their major by the end of their sophomore year, allowing them to take a number of courses in the chosen area during their junior and senior years.</p>\n\n<p><strong>Master's: </strong>A graduate degree awarded by a college or university upon successful completion of an advanced program of study, typically requiring one or two years of full-time study beyond the bachelor's degree. Common degree types include master of arts (M.A.), which refers to the liberal arts; master of science (M.S.); and master of business administration (M.B.A.).</p>\n\n<p><strong>Matriculate: </strong>To enroll in a program of study at a college or university, with the intention of earning a degree.</p>\n\n<p><strong>M.B.A.: </strong>A master of business administration degree.</p>\n\n<p><strong>MCAT (Medical College Admission Test): </strong>A standardized U.S. medical school entrance exam administered by the nonprofit Association of American Medical Colleges, which measures verbal reasoning and writing skills and physical and biological sciences knowledge. The MCAT will likely undergo significant changes in 2015, with new areas added, such as genetics, cell and molecular biology, psychology, and sociology.</p>\n\n<p><strong>Merit aid / merit scholarships: </strong>A type of financial aid awarded by a college or university to students who have demonstrated special academic ability or talents, regardless of their financial need. Most merit aid has specific requirements if students want to continue to receive it, such as maintaining a certain GPA.</p>\n\n<p><strong>Midterm exam: </strong>An exam given after half of the academic term has passed and that covers all material studied in a particular course until that point. Not all courses have midterm exams.</p>\n\n<p><strong>Minor: </strong>An academic subject area that a student chooses to have a secondary focus on during their undergraduate studies. Unlike a major, a minor is typically not required, but it allows a student to take a few additional courses in a subject different from his or her major.</p>P>\n\n<p>Need-based financial aid: </strong>Financial aid that is awarded to students due to their financial inability to pay the full cost of attending a specific college or university, rather than specifically because of their grades or other merit.</p>\n\n<p><strong>Need-blind admissions: </strong>A college or university’s policy of accepting or declining applications without considering an applicant's financial circumstances. This policy does not necessarily mean that these schools will offer enough financial aid to meet a student's full need. Only a handful of U.S. colleges or universities offer need-blind admissions to international students.</p>\n\n<p><strong>Net price calculator: </strong>An online tool that allows students and families to calculate a personalized estimate of the cost of a specific college or university, after taking into account any scholarships or need-based financial aid that an applicant would receive. By Oct. 29, 2011, each higher education institution in the United States is required by law to post a net price calculator on its respective website.</p>\n\n<p><strong>Nonmatriculated: </strong>Enrolled in a college or university's courses, but not in a program of study leading to a degree.</p>\n\n<p><strong>Nonresident: </strong>A student who does not meet a state's residence requirements. A college or university may have different tuition costs and admissions policies for residents versus nonresidents. In most cases, international students are considered nonresidents. A \"nonresident alien\" is a person who is not a U.S. citizen and is in the country on a temporary basis.</p>\n\n<p><strong>Notarized: </strong>Certified as authentic by a public official, lawyer, or bank. Colleges and universities often require international students to submit notarized documents, such as the Affidavit of Support or high school transcripts.</p>\n\n<p><strong>Open admissions: </strong>A college or university's policy of accepting all students who have completed high school, regardless of their grades or test scores, until all spaces are filled. Most community colleges have an open admissions policy, including for international students.</p>\n\n<p><strong>Orientation: </strong>A college or university's official process of welcoming new, accepted students to campus and providing them with information and policies before classes begin, usually in a half-day or full-day event. Many colleges and graduate schools offer a separate orientation just for international students to cover topics such as how to follow immigration and visa regulations, set up a U.S. bank account, and handle culture shock.</p>\n\n<p><strong>Part-time student: </strong>A student who is enrolled at a college or university but is not taking the minimum number of credits required for a full course load.</p>\n\n<p><strong>Pass-fail: </strong>A grading system in which students receive either a \"pass\" or \"fail\" grade, rather than a specific score or letter grade. Certain college or university courses can be taken pass-fail, but these typically don't include ones taken to fulfill major or minor requirements.</p>\n\n<p><strong>Ph.D.: </strong>A doctor of philosophy degree. (See \"doctorate.\")</p>\n\n<p><strong>Plagiarism: </strong>The use of another person's words or ideas as your own, without acknowledging that person. Schools have different policies and punishments for students caught plagiarizing, which tends to occur with research papers and other written assignments.</p>\n\n<p><strong>Postdoctorate: </strong>Academic studies or research for those who have completed a doctorate. A \"postdoc\" can refer both to a person who is pursuing a postdoctorate and to the postdoctorate itself.\nPrerequisite: </strong>A required course that must be completed before a student is allowed to enroll in a more advanced one.</p>\n\n<p><strong>Priority date: </strong>The date by which an application must be received in order to be given full consideration. This can apply to admissions, financial aid, and on-campus housing. After the priority date passes, applications may be considered on a case-by-case or first-come-first-served basis.</p>\n\n<p><strong>Private school: </strong>A postsecondary institution controlled by a private individual(s) or a nongovernmental agency. A private institution is usually not supported primarily by public funds and its programs are not operated by publicly elected or appointed officials. Stanford University, for example, is a private school.</p>\n\n<p><strong>Probation: </strong>A status or period of time in which students with very low GPAs, or whose academic work is unsatisfactory according to the school, must improve their performance. If they are unable to do so, they may be dismissed from the school. Students may also face \"disciplinary probation\" for nonacademic reasons, such as behavioral problems in the dorms.</p>\n\n<p><strong>Professional school: </strong>A higher education institution for students who have already received their undergraduate degree to gain training in specific professions, such as law, medicine, and pharmacy.</p>\n\n<p><strong>Provost: </strong>The senior academic officer of a college or university who typically oversees all academic policies and curriculum-related matters.</p>\n\n<p><strong>PSAT: </strong>The Preliminary SAT, a standardized practice test cosponsored by the nonprofit College Board and the National Merit Scholarship Corp., which measures reading, writing, and math skills, giving students experience with the SAT. Students usually take the PSAT in their junior year of high school, and U.S. citizens and permanent residents can submit their scores to qualify for National Merit scholarships. (See the U.S. News college tes prep guide for more information.)</p>\n\n<p><strong>Public school: </strong>A postsecondary institution that is supported mainly by public funds and whose programs are operated by publicly elected or appointed officials. The University of California—Berkeley, for example, is a public school.</p>\n\n<p><strong>Quarters: </strong>Periods of study that divide the academic year into four equal segments of approximately 12 weeks each, typically including the summer.</p>\n\n<p><strong>Registrar: </strong>The college or university official who is responsible for registering students and keeping their academic records, such as transcripts.</p>\n\n<p><strong>Registration: </strong>The process in which students choose and enroll in courses to be taken during the academic year or in summer sessions.</p>\n\n<p><strong>Regular decision: </strong>An admissions process used by colleges and universities that typically requires applicants to submit their materials by January 1; an admissions decision is generally received by April 1, and if admitted, students usually have until May 1 to respond to the offer. The majority of applicants are evaluated during regular decision, rather than early action and early decision.</p>\n\n<p><strong>Resident assistant (RA): </strong>A student leader who works in campus dormitories and supervises issues and activities related to dorm life. RAs often receive free housing in the dorm in return for their services.</p>\n\n<p><strong>Rolling admissions: </strong>An admissions process used by some colleges and universities in which each application is considered as soon as all the required materials have been received, rather than by a specific deadline. Colleges and universities with this policy will make decisions as applications are received until all spaces are filled.</p>\n\n<p><strong>Room and board: </strong>Housing and meals. \"Room and board\" is typically one of the costs that colleges and universities will list in their annual estimated cost of attendance, in addition to tuition, fees, and textbooks and supplies. If students choose to live in dormitories, they may be required to buy into a meal plan to use on-campus dining facilities.</p>\n\n<p><strong>SAT: </strong>A standardized college entrance exam administered by the Educational Testing Service (ETS) on behalf of the nonprofit College Board, which measures reading, writing, and math skills. Most students take the SAT during their junior or senior year of high school, and most colleges and universities accept scores from either the SAT or ACT. In addition, students may choose to take the SAT Subject Tests in English, history, languages, math, and science to demonstrate their knowledge in specific academic areas. Some schools may recommend, but not require, international students to take the SAT or ACT. (See the U.S. News college test prep guide for more information.)</p>\n\n<p><strong>Scholarship: </strong>A type of financial aid that consists of an amount of free money given to a student by a school, individual, organization, company, charity, or federal or state government. \"Scholarship\" is often used interchangeably with \"grant.\" (See the U.S. News scholarship guide for more information.)</p>\n\n<p><strong>School: </strong>Any educational institution, including those that provide elementary, secondary, and postsecondary education. In the latter case, \"school\" is often used interchangeably with \"college\" and \"university.\"\nSemesters: </strong>Periods of study that divide the academic year into two equal segments of approximately 15 to 18 weeks each. Some schools also offer a shorter summer semester, beyond the traditional academic year.</p>\n\n<p><strong>Seminar: </strong>A course offered to a small group of students who are typically more advanced and who meet with a professor to discuss specialized topics.</p>\n\n<p><strong>Senior: </strong>A student in the fourth year of high school or college / university.</p>\n\n<p><strong>SEVIS (Student and Exchange Visitor Information System): </strong>A computerized U.S. government database used to track international students and scholars in the United States. Once an international student is accepted by a U.S. college or university, the school is required to mail the student a Form I-20, which is a paper record of the student's information in SEVIS. A student must pay a SEVIS fee and use the payment receipt and I-20 to apply for a visa.</p>\n\n<p><strong>Social Security number: </strong>A nine-digit number issued by the U.S. government to people who are authorized to work in the United States and collect certain government benefits. Many colleges and universities use the Social Security number as the student identification number.</p>\n\n<p><strong>International students who are in the United States and are authorized to work either on or off campus must apply for and obtain a Social Security number, which is then used to report their wages to the government.</p>\n\n<p><strong>Sophomore: </strong>A student in the second year of high school or college / university.</p>\n\n<p><strong>Sorority: </strong>A student organization for women formed for social, academic, community service, or professional purposes. A sorority is part of a college or university's Greek system.</p>\n\n<p><strong>Standardized tests: </strong>Exams, such as the SAT, ACT, and GRE, which measure knowledge and skills and are designed to be consistent in how they are administered and scored. Standardized tests are intended to help admissions officials compare students who come from different backgrounds. </p>\n\n<p><strong>Teaching assistant (TA): </strong>A graduate student who assists a professor with teaching an undergraduate course, usually within his or her field, as part of an assistantship.</p>\n\n<p><strong>Tenure: </strong>A status offered to high-level faculty members at a college or university that allows them to stay permanently in their positions, after demonstrating a strong record of teaching and published research.</p>\n\n<p><strong>Term: </strong>Periods of study, which can include semesters, quarters, trimesters, or summer sessions.</p>\n\n<p><strong>Thesis: </strong>A formal piece of writing on a specific subject, which may be required to earn a bachelor's or master's degree.</p>\n\n<p><strong>TOEFL (Test of English as a Foreign Language): </strong>A standardized exam administered by the nonprofit Educational Testing Service (ETS), which measures English-language proficiency in reading, listening, speaking, and writing. Many U.S. colleges and universities require non-native English speakers to take the TOEFL and submit their scores as part of the admissions process.</p>\n\n<p><strong>Transcript: </strong>An official record of a student's coursework and grades at a high school, college, or university. A high school transcript is usually one of the required components of the college application process.</p>\n\n<p><strong>Transfer credit: </strong>Credit granted toward a degree on the basis of studies completed at another college or university. For instance, students who transfer from a community college to a four-year college may earn some transfer credit.</p>\n\n<p><strong>Trimesters: </strong>Periods of study that divide the academic year into three equal segments of approximately 10 to 12 weeks each.</p>\n\n<p><strong>Tuition: </strong>An amount of money charged by a school per term, per course, or per credit, in exchange for instruction and training. Tuition generally does not include the cost of textbooks, room and board, and other fees.</p>\n\n<p><strong>Undergraduate student / undergraduate studies: </strong> A student enrolled in a two-year or four-year study program at a college or university after graduation from high school, leading to an associate or bachelor's degree.</p>\n\n<p><strong>University: </strong> A postsecondary institution that typically offers both undergraduate and graduate degree programs. \"University\" is often used interchangeably with \"college\" and \"school.\" </p>\n\n<p><strong>Visa: </strong> An official mark or stamp in a passport that allows someone to enter a country for a particular amount of time. Common visa types for international students and scholars in the United States include the F-1 (student visa) and J-1 (exchange visitor visa). To apply for a U.S. visa, student applicants must first receive a Form I-20 from the college or university they plan to attend, which is created by the U.S. government's SEVIS database. </p>\n\n<p><strong>Wait list: </strong> A list of qualified applicants to a school who may be offered admission if there is space available after all admitted students have made their decisions. Being on a wait list does not guarantee eventual admission, so some students may choose not to remain on the list, particularly if the school is not their first choice.</p>\n\n<p>Withdraw: </strong>To formally stop participating in a course or attending a university.</p>\n\n<p><strong>Work-study: </strong> A financial aid program funded by the U.S. federal government that allows undergraduate or graduate students to work part time on campus or with approved off-campus employers. To participate in work-study, students must complete the FAFSA. In general, international students are not eligible for work-study positions.</p>\n\n<p>Citation: <a href=\":http://www.usnews.com/education/best-colleges/articles/2011/08/15/us-higher-education-glossary#top\">US News & World Report</a></p>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/articleLink"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<h2 class=\"subheading\">Instructions:</h2>\n	<div class=\"textblock\">\n		";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructions)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<h2 class=\"subheading\">Instructions:</h2>\n	<ol class=\"objectives\">\n      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ol>\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n      ";
  return buffer;
  }

  buffer += "<div class=\"headingContainer\">\n	<h1 class=\"title\">article</h1>\n	<h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n</div>\n\n<div class=\"inner-wrap\">\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	<a class=\"articlebtn btn btn-large btn-primary attributeTarget eventTarget\" target=\"_blank\" href=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">View Article</a\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/assignment"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		 		<li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n		 	";
  return buffer;
  }

  buffer += "<div class=\"headingContainer\">\n	<h1 class=\"title\">assignment</h1>\n	<h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.subHeading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n</div>\n\n<div class=\"inner-wrap\">\n	<div class=\"another-wrapper\">		\n		<p class=\"instructions\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instuctionsHeader)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n		 \n		 <ul>\n		 	";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		 </ul>\n		 \n	    <textarea placeholder=\"\"></textarea>\n\n	    <button type=\"submit attributeTarget eventTarget\" class=\"submit btn btn-large btn-primary\">Submit</button>\n    </div>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/comic"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<div class=\"headingContainer\">\n	<h1 class=\"title\">Comic</h1>\n	<h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n</div>\n\n<div class=\"inner-wrap\">\n	<div class=\"comic-wrap\">\n		<h2 class=\"subheading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.synopsis)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n		<h2 class=\"instructions\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructions)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n		\n		<a class=\"moreButton show-comic attributeTarget eventTarget\" data-id=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\">Read</a>\n	</div>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/discussion"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instruction)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n		";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<ul class=\"objectives\">\n	      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	    </ul>\n		";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	        <li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n	      ";
  return buffer;
  }

  buffer += "<div class=\"headingContainer\">\n	<!-- <h1 class=\"title\">Discussion</h1>\n	<h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1> -->\n	<h1 class=\"title\"> </h1>\n	<h1 class=\"subtitle\">Discussion</h1>\n</div>\n\n<div class=\"inner-wrap\">\n	<h2 class=\"subheading\">Instructions:</h2>\n	<div class=\"textblock\">\n		";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instruction), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n		";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n\n    <a href=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.forumLink)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" class=\"submitbtn btn btn-large btn-primary attributeTarget eventTarget\">Go To Fourm</a>\n\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/game"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<h1 class=\"title\">Game</h1>\n<h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n\n<div class=\"inner-wrap textblock\">\n		<h2 class=\"subheading\">Summary:</h2>\n		<div class=\"textblock\">\n			<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n		</div>\n\n		<h2 class=\"subheading\">Instructions:</h2>\n		<div class=\"textblock\">\n			<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructions)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n		</div>\n		\n		<a class=\"game-play submitbtn btn btn-large btn-primary attributeTarget eventTarget\" data-id=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\">Play</a>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"headingContainer\">\n	<h1 class=\"title\">Image</h1>\n	<h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n</div>\n\n<div class=\"inner-wrap attributeTarget\">\n	<img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.source)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n	<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.caption)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/journal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n				<h2 class=\"subheading\">Instructions:</h2>\n				";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructions)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n			<h2 class=\"subheading\">Address the following:</h2>\n			<ul class=\"objectives\">\n		  	";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</ul>\n			";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		    	<li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n		  	";
  return buffer;
  }

  buffer += "<div class=\"headingContainer\">\n	<!-- <h1 class=\"title\">Journal</h1>\n	<h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1> -->\n	<h1 class=\"title\"> </h1>\n	<h1 class=\"subtitle\">Journal</h1>\n</div>\n\n<div class=\"inner-wrap\">\n	\n	<div class=\"row\">\n		<div class=\"col-md-3 textblock\">\n			<h2 class=\"subheading\">\n				<h2 class=\"subheading\">Using Journals:</h2>\n				<p>\n				As a part of your learning experience, you are being asked to keep a learning journal. Share your opinions, reflect on what you have learned and answer the questions below. Your journal will be graded on a scale of 0-5. We will be looking for completeness, understanding of topic, self reflection and depth of thought when assessing your journal. It is expected that your journal entries are grammatically correct and contain no spelling errors. Your entries should be succinct and should be less than 4000 characters.\n				</p>\n			</h2>\n\n			";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n			";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "		\n		</div>\n		<div class=\"col-md-9\">\n			<textarea name=\"\" id=\"\" cols=\"20\" rows=\"13\"></textarea>\n			<a type=\"submit\" class=\"submitbtn btn btn-large btn-primary attributeTarget eventTarget\">Submit</a>\n		</div>\n	</div>\n\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/links"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<h2 class=\"heading\">Instructions:</h2>\n	<div class=\"textblock\">\n		";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructions)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<a class=\"articlebtn btn btn-large btn-primary attributeTarget eventTarget\" target=\"_blank\" href=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.singleLinkhref)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.singleLinkHeading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n	";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<ul class=\"linklist\">\n		";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.linkList), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</ul>\n	";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<li><a class=\"articlebtn btn btn-large btn-primary attributeTarget eventTarget\" target=\"_blank\" href=\"";
  stack1 = ((stack1 = (depth0 && depth0.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((stack1 = (depth0 && depth0.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a></li>\n		";
  return buffer;
  }

  buffer += "<div class=\"headingContainer\">\n	<h1 class=\"title\">Links</h1>\n	<h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n</div>\n\n<div class=\"inner-wrap attributeTarget\">\n	<h2 class=\"heading\">Summary:</h2>\n	<div class=\"textblock\">\n		";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.synopsis)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</div>\n	\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.singleLinkHeading), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.linkList), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/overview"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"textblock\">\n      ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.overview)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n        ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <h2 class=\"heading\">Attributes Available:</h2>\n  <p class=\"textblock\">\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.attributes), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </p>\n  ";
  return buffer;
  }
function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      ";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

  buffer += "<div class=\"headingContainer\">\n  <h1 class=\"title\">overview</h1>\n  <h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n</div> \n\n<div class=\"inner-wrap attributeTarget\">\n  \n  <h2 class=\"heading\">Overview:</h2>\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.overview), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n  <h2 class=\"heading\">You Will:</h2>\n    <div class=\"textblock\">\n      <ul class=\"objectives\">\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.objectives), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n\n    </div>\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.attributes), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/quiz"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n		";
  if (helper = helpers.setQuizIndex) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.setQuizIndex); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n\n		<div class=\"quizItem\" data-index=\"";
  if (helper = helpers.getQuizIndex) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.getQuizIndex); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n			<h2 class=\"subheading\">";
  stack1 = ((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n			";
  if (helper = helpers.setResponseIndex) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.setResponseIndex); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n			<div class=\"textblock\">\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.responses), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n			</div>\n		</div>\n		<hr/>\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n				<input type=\"radio\" class=\"response\" name=\"quiz";
  if (helper = helpers.getQuizIndex) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.getQuizIndex); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-index=\"";
  if (helper = helpers.getResponseIndex) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.getResponseIndex); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"this\"><span class=\"inputtext\">";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span><br>\n			";
  return buffer;
  }

  buffer += "<div class=\"headingContainer\">\n	<!-- <h1 class=\"title\">quiz</h1>\n	<h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1> -->\n	<h1 class=\"title\"> </h1>\n	<h1 class=\"subtitle\">Quiz</h1>\n</div>\n\n<div class=\"inner-wrap\">\n\n<div class=\"quiz\"></div>\n	";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.questions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	<a type=\"submit\" class=\"submitbtn btn btn-large btn-primary attributeTarget eventTarget\">Submit</a>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/video"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"headingContainer\">\n	<h1 class=\"title\">video</h1>\n	<h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n</div>\n\n<div class=\"inner-wrap\">\n\n	<div class=\"row\">\n		<div class=\"col-md-3 textblock\">\n			<h2 class=\"subheading\">Summary:</h2>\n			";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.synopsis)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n		<div class=\"col-md-9\">\n			<video id=\"video\" class=\"attributeTarget eventTarget\" controls>\n				<source src=\"videos/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.video)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".m4v\" type=\"video/m4v\">\n				<source src=\"videos/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.video)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".ogv\" type=\"video/ogv\">\n				<source src=\"videos/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.video)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".webm\" type=\"video/webm\">\n			</video>\n		</div>	\n	</div>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/videoLink"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  	<div class=\"textblock\">\n  		";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instruction)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  	</div>\n  	";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  	<ul class=\"objectives\">\n      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n      ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<a class=\"articlebtn btn btn-large btn-primary attributeTarget eventTarget\" target=\"_blank\" href=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">View Video</a>\n	";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<ul class=\"linklist\">\n      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.links), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n	";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li><a class=\"articlebtn btn btn-large btn-primary attributeTarget eventTarget\" target=\"_blank\" href=\"";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">View Video</a></li>\n      ";
  return buffer;
  }

  buffer += "<div class=\"headingContainer\">\n	<h1 class=\"title\">video</h1>\n	<h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n</div>\n\n<div class=\"inner-wrap\">\n	<h2 class=\"subheading\">Summary:</h2>\n	<div class=\"textblock\">\n      ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.synopsis)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n  	\n  	<h2 class=\"subheading\">Instructions:</h2>\n  	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instruction), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    \n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.link), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.links), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/wrapup"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    	<li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n    ";
  return buffer;
  }

  buffer += "<div class=\"headingContainer\">\n    <h1 class=\"title\">Wrap-Up</h1>\n    <h1 class=\"subtitle\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n</div>\n\n<div class=\"inner-wrap\">\n	<h2 class=\"heading\">Take Aways:</h2>	\n	<div class=\"textblock\">\n    	";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.synopsis)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <h2 class=\"heading\">In this lesson, you have learned:</h2>\n    <ul class=\"textblock\">\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.takeaways), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"header\"></div>\n<div id=\"weektop\" class=\"fixed\"></div>\n<div id=\"sidebar\"></div>\n<div id=\"content\"></div>\n<div id=\"footer\"></div>";
  });

this["templates"]["weekExplorer/week/sidebarItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<a class=\"weekItemLink ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.template)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-weekItem=\"";
  if (helper = helpers.weekItem) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.weekItem); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-type=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.template)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#weekItem";
  if (helper = helpers.weekItem) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.weekItem); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n<span class=\"hoverover\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n</a>";
  return buffer;
  });

this["templates"]["weekExplorer/week/sidebarList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n	<nav id=\"sidetop\">\n		<div class=\"arrows\">\n	  		<a href=\"#\" class=\"arrow\" data-direction=\"left\"><i class=\"fa fa-caret-left\"></i></a>\n\n	  		<h2 id=\"label\">Week</h2>\n			<h2><span id=\"week_number\"></span></h2>\n\n	  		<a href=\"#\" class=\"arrow\" data-direction=\"right\"><i class=\"fa fa-caret-right\"></i></a>\n	  	</div>\n	</nav>\n\n	<ul id=\"section_nav\" class=\"hidden-phone\">\n	</ul>\n</div>";
  });

this["templates"]["weekExplorer/week/weekTop"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n        <li class=\"week-link-listitem\" data-weekId=\"";
  if (helper = helpers.getWeekLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.getWeekLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n          <a class=\"week-link\" data-week=\"";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\">";
  if (helper = helpers.getWeekLabel) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.getWeekLabel); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n        </li>\n      ";
  return buffer;
  }

  buffer += "<div class=\"topnav full\">\n    <ul class=\"horiz-nav\" role=\"navigation\" aria-label=\"week links\">\n      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.template)),stack1 == null || stack1 === false ? stack1 : stack1.weeks), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n\n    <a class=\"expand-horiz\" aria-expanded=\"false\"></a>\n</div>";
  return buffer;
  });