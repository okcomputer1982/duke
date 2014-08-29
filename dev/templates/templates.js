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
  


  return "<div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container-fluid inner-wrap\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle pull-right\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-haspopup=\"true\" aria-hidden=\"true\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <a class=\"navbar-brand logo replace hidden-phone\" href=\"#\">Duke University</a>\n      \n    </div>\n\n    <div class=\"navbar-collapse collapse\" role=\"navigation\">\n      \n      <div id=\"user_id\">\n        Welcome\n        <span id=\"username\">\n          <a href=\"#profile/student\"></a>\n        </span>\n      </div>\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a id=\"dashboard_link\" class=\"header_link\" href=\"#profile/student\">Dashboard</a></li>\n        <li><a id=\"coursework_link\" class=\"header_link\" href=\"#week\">Coursework</a></li>\n        <li><a id=\"admin_link\" class=\"header_link\" href=\"#admin/teacher\">Admin</a></li>\n        <li><a id=\"logout_link\" class=\"header_link\" href=\"#\" class=\"logout_button\">Logout</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</div>";
  });

this["templates"]["admin/teacher/content"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n  <nav id=\"admin-nav\">\n    <a class=\"manage-instructors\">Manage Instructors</a>\n    <a class=\"manage-students\">Manage Students</a>\n    <a class=\"manage-guests\">Manage Guests</a>\n    <a class=\"manage-classes\">Manage Classes</a>  \n  </nav>\n  <div class=\"admin-top\">\n    <input type=\"text\" placeholder=\"student name\">\n    <input type=\"text\" placeholder=\"email address\">\n    <input type=\"text\" placeholder=\"select a class\">\n    <button type=\"submit\" name=\"add\">Add</button>\n    <input type=\"search\" value=\"class/student search\">\n    <input type=\"submit\" value=\"search\">\n  </div>\n\n  <table id=\"admin-students\" class=\"table table-responsive table-bordered table-striped\">\n    <tbody>\n      <tr>\n        <th>Name</th><th>Email Address</th><th>Class</th><th>Edit</th>\n      </tr>\n      <tr>\n        <td>Student 1</td>\n        <td>student1@school.edu</td>\n        <td>Math 101</td>\n        <td><button>Edit</button><button>Reset Password</button></td>\n      </tr>\n      <tr>\n        <td>Student 2</td>\n        <td>student2@school.edu</td>\n        <td>Math 103</td>\n        <td><button>Edit</button><button>Reset Password</button></td>\n      </tr>\n      <tr>\n        <td>Student 3</td>\n        <td>student3@school.edu</td>\n        <td>Math 102</td>\n        <td><button>Edit</button><button>Reset Password</button></td>\n      </tr>\n    </tbody>\n  </table>\n\n  <a href=\"#week\">Return to Week View</a>\n</div>";
  });

this["templates"]["admin/teacher/layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div id=\"header\"></div>\n<div id=\"content\"></div>\n<div id=\"footer\"></div>";
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
  


  return "<div class=\"content\">\n    \n	<div class=\"container-fluid\">\n\n		<div class=\"login-logo\">\n	        <a href=\"\" class=\"logo replace\">Duke University Summer Session</a>\n	        <p class=\"tagline\">A Student's Journey</p>\n\n\n    	    <div id=\"login_alert\">Not a correct username/password combination.</div>\n      	</div>\n\n	    <div class=\"username\">\n	        <input type=\"text\" id=\"username_input\" placeholder=\"username\" aria-label=\"user name\" aria-required=\"true\" required autofocus>\n	    </div>\n	    <div class=\"password\">\n	        <input type=\"password\" id=\"password_input\" placeholder=\"password\" aria-label=\"password\" aria-required=\"true\" required>\n	    </div>\n	\n		<div id=\"login_group\">\n	    	<button class =\"btn btn-primary btn-login\" id=\"user_login\"type=\"submit\">Log In</button>\n	    	<button class =\"btn btn-primary btn-login\" id=\"guest_login\" type=\"submit\">Log In As Guest</button>\n		</div>\n		\n	</div>\n</div>";
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


  buffer += "<h1 class=\"clearfix\">Attributes</h1>\n<div class=\"inner-wrap\">\n<ul>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 0, options) : helperMissing.call(depth0, "getAttributeName", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 0, options) : helperMissing.call(depth0, "getAttributeDesc", 0, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"active progress\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          </div>\n        </div>\n      </span>\n    </div>\n  </li>\n\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 1, options) : helperMissing.call(depth0, "getAttributeName", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 1, options) : helperMissing.call(depth0, "getAttributeDesc", 1, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"active progress\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          </div>\n        </div>\n      </span>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 2, options) : helperMissing.call(depth0, "getAttributeName", 2, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 2, options) : helperMissing.call(depth0, "getAttributeDesc", 2, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"active progress\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          </div>\n        </div>\n      </span>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 3, options) : helperMissing.call(depth0, "getAttributeName", 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 3, options) : helperMissing.call(depth0, "getAttributeDesc", 3, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"active progress\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          </div>\n        </div>\n      </span>\n    </div>\n  </li>\n  \n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 4, options) : helperMissing.call(depth0, "getAttributeName", 4, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 4, options) : helperMissing.call(depth0, "getAttributeDesc", 4, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"active progress\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          </div>\n        </div>\n      </span>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 5, options) : helperMissing.call(depth0, "getAttributeName", 5, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 5, options) : helperMissing.call(depth0, "getAttributeDesc", 5, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"active progress\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          </div>\n        </div>\n      </span>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 6, options) : helperMissing.call(depth0, "getAttributeName", 6, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 6, options) : helperMissing.call(depth0, "getAttributeDesc", 6, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"active progress\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          </div>\n        </div>\n      </span>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 7, options) : helperMissing.call(depth0, "getAttributeName", 7, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 7, options) : helperMissing.call(depth0, "getAttributeDesc", 7, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"active progress\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          </div>\n        </div>\n      </span>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 8, options) : helperMissing.call(depth0, "getAttributeName", 8, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 8, options) : helperMissing.call(depth0, "getAttributeDesc", 8, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"active progress\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          </div>\n        </div>\n      </span>\n    </div>\n  </li>\n\n  <li>\n    <div class=\"attr_container\">\n      <img class=\"attr_img\" src=\"../images/attrs/attr1.png\" alt=\"\">\n      <span class=\"attr_name\">";
  stack1 = (helper = helpers.getAttributeName || (depth0 && depth0.getAttributeName),options={hash:{},data:data},helper ? helper.call(depth0, 9, options) : helperMissing.call(depth0, "getAttributeName", 9, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</span>\n      <span class=\"attr_desc\">";
  stack1 = (helper = helpers.getAttributeDesc || (depth0 && depth0.getAttributeDesc),options={hash:{},data:data},helper ? helper.call(depth0, 9, options) : helperMissing.call(depth0, "getAttributeDesc", 9, options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ".</span>\n      <span class=\"attr_progress\">\n        <div class=\"progress\">\n          <div class=\"active progress\" role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          </div>\n        </div>\n      </span>\n    </div>\n  </li>\n\n</ul>\n</div>";
  return buffer;
  });

this["templates"]["profile/student/frames/badge"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"clearfix\">Badges</h1>\n<div class=\"inner-wrap\">\n  <div class=\"profile-categories badges\">\n    <ul>\n      <li class=\"code\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Exploration\" data-content=\"To complete this badge you must earn 90% of the Exploration attribute.\"></a></li>\n      \n      <li class=\"cool\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Accuracy\" data-content=\"To complete this badge you must earn 90% of the Accuracy attribute.\"></a></li>\n\n      <li class=\"foxy\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Thoroughness\" data-content=\"To complete this badge you must earn 90% of the Thoroughness attribute.\"></a></li>\n\n      <li class=\"hive clear\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Comprehension\" data-content=\"To complete this badge you must earn 90% of the Comprehension attribute.\"></a></li>\n\n      <li class=\"thread\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Knowledge\" data-content=\"To complete this badge you must earn 90% of the Knowledge attribute.\"></a></li>\n\n      <li class=\"fest\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Reflection\" data-content=\"To complete this badge you must earn 90% of the Reflection attribute.\"></a></li>\n\n      <li class=\"karaoke\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Analysis\" data-content=\"To complete this badge you must earn 90% of the Analysis attribute.\"></a></li>\n\n      <li class=\"network\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Introspection\" data-content=\"To complete this badge you must earn 90% of the Introspection attribute. \"></a></li>\n\n      <li class=\"olympics\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"Intercultural competence\" data-content=\"To complete this badge you must earn 90% of the Intercultural competence attribute.  \"></a></li>\n\n      <li class=\"thimble\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"All Application\" data-content=\"To complete this badge you must earn 90% of the Application attribute.  \"></a></li>\n\n      <li class=\"karaoke\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"Quizz Completion\" data-content=\"To complete this badge you must earn 80% on all quizzes.\"></a></li>\n\n      <li class=\"network\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"Frame Completion\" data-content=\"See every frame in a single semester.\"></a></li>\n\n      <li class=\"olympics\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"Attribute Complestion\" data-content=\"To complete this badge you must earn 90% on all attributes.\"></a></li>\n\n      <li class=\"thimble\"><a href=\"\" class=\"badge\" data-toggle=\"popover\" data-placement=\"right\" title=\"Discussion Complestion\" data-content=\"To complete this badge you must participate in 80% of discussions.\"></a></li>\n    </ul>\n  </div>\n</div>";
  });

this["templates"]["profile/student/frames/grades"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"inner-wrap\">\n  <div class=\"week_title_box\">\n      <p>Grades</p>\n\n      <div class=\"week_object\">\n        <a href=\"#\" class=\"arrow\" data-direction=\"left\"><i class=\"fa fa-caret-left\"></i></a>\n          Week <span class=\"week_number\">1</span>\n        <a href=\"#\" class=\"arrow\" data-direction=\"right\"><i class=\"fa fa-caret-right\"></i></a>\n      </div>\n      \n  </div>\n\n  <div class=\"col-md-4 assignment_section dashboard_long_box\">\n    <div id=\"assignments\"></div>\n  </div>\n\n  <div class=\"col-md-4 quiz_section dashboard_box\">\n    <div id=\"quizes\"></div>\n  </div>\n</div>";
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
  


  return "<h1 class=\"clearfix\">Welcome</h1> \n<div class=\"inner-wrap\">\n  <div class=\"another-wrapper\">\n    <div class=\"profile-welcome\">\n      \n      <p class=\"intro\">Every week, you'll be given a mixture of articles, multimedia, and interactive games which will help guide you through understanding college life in America.  Throughout, you will develop attributes and achieve badges which will factor into your total grade.  In addition, you'll be given grades on assignments, class participation, and your achievements.</p>\n    </div>\n\n    <div class=\"content col-md-3 box\">\n      <h3>Content-types</h3>\n        <ul id=\"section_nav\" class=\"hidden-phone\">\n          <li>\n            <a class=\"weekItemLink assignment\" data-weekitem=\"0\" data-type=\"overview\" href=\"#weekItem0\">\n              <span class=\"item-icon icomoon icon-file activity\"></span><span class=\"hoverover\">assignment</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"weekItemLink article\" data-weekitem=\"1\" data-type=\"article\" href=\"#weekItem1\">\n              <span class=\"item-icon icomoon icon-book2 article\"></span><span class=\"hoverover\">article</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"weekItemLink game\" href=\"#weekItem2\">\n              <span class=\"item-icon icomoon icon-gamepad game\"></span><span class=\"hoverover\">game</span>\n            </a>\n          </li>\n          <li></li>\n      </ul>\n      <a class=\"welcome-link clear\">view all content types</a>\n    </div>\n\n    <div class=\"attributes col-md-3 col-md-offset-1 box\">\n      <h3>Attributes</h3>\n      <ul>\n        <li><span class=\"pie col-md-4\" data-value=\"4\"><span class=\"attr-value\">4</span></span>Self-Awareness</li>\n        <li><span class=\"pie col-md-4\" data-value=\"1\"><span class=\"attr-value\">1</span></span>Adaptation</li>\n        <li><span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>Attention to Detail</li>\n        \n      </ul>\n      <a class=\"welcome-link clear\">view all available attributes</a>\n    </div>\n\n    <div class=\"badges col-md-3 col-md-offset-1 box\">\n      <h3>Badges</h3>\n      <ul>\n        <li class=\"code\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"cool\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"foxy\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"hive clear\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"thread\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"fest\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"karaoke\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"network\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"olympics\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"thimble\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n      </ul>\n      <p class=\"clear welcome-link\"><a>view all available badges</a></p>\n    </div>\n    \n    <div class=\"set-up-profile clear\">\n      <p>Next: <a>Set-up your Profile</a></p>\n    </div>\n\n    <div class=\"full-width center profile-link\">\n      <a href=\"#\" id=\"dock_button\"><span class=\"clear glyphicon glyphicon-arrow-down\"></span></a>\n    </div>\n  </div>\n</div>";
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

  buffer += "<div class=\"inner-wrap\">\n  <div class=\"week_title_box\">\n    <p>Journals</p>\n\n    <div class=\"week_object\">\n      <a href=\"#\" class=\"arrow\" data-direction=\"left\"><i class=\"fa fa-caret-left\"></i></a>\n        Week <span class=\"week_number\"></span>\n      <a href=\"#\" class=\"arrow\" data-direction=\"right\"><i class=\"fa fa-caret-right\"></i></a>\n    </div>\n    \n  </div>\n\n  <div class=\"journal_container\">\n    ";
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


  buffer += "<h1 class=\"profile-welcome clearfix\">Student Profile</h1>\n<div class=\"inner-wrap\">\n  <div class=\"col-md-4 profile_section\">\n    <div class=\"profile_pic\">\n      <img src=\"../images/avatars/avatar";
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
  buffer += "\">Go to Class <i class=\"fa fa-caret-right\"></i></a>\n    </div>\n  </div>\n\n  <div class=\"col-md-4 progress_section dashboard_box\">\n      <div class=\"title_box\">\n          <p>Progress</p>\n      </div>\n  \n      <div class=\"progress_copy\">\n        <p class=\"semester_label\">SEMESTER <span class=\"class_number\">1</span></p>\n        <p class=\"week_label\">Week <span class=\"class_number\">1</span></p>\n\n        <div class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped active\"  role=\"progressbar\" aria-valuenow=\"45\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 45%\">\n          </div>\n        </div>\n\n        <p class=\"time_label\">Time Spent: <span class=\"class_number\">4:00:00</span></p>\n      </div>\n  </div>\n\n  <div class=\"col-md-4 metrics_section dashboard_box\">\n      <div class=\"title_box\">\n          <p>Metrics</p>\n      </div>\n\n      <div class=\"metrics_copy\">\n        <hr/>\n        <p class=\"grade_label\"><span class=\"l\">GRADES:</span> <span class=\"number\">80%</span></p>\n        <hr/>\n        <p class=\"badge_label\"><span class=\"l\">BADGES:</span> <span class=\"number\">6/10</span></p>\n        <hr/>\n        <p class=\"badge_label\"><span class=\"l\">ATTRIBUTES:</span> <span class=\"number\">34%</span></p>\n        <hr/>\n      </div>\n  </div>\n  </div>\n</div>";
  return buffer;
  });

this["templates"]["profile/student/frames/progress"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"inner-wrap\">\n  <div class=\"week_title_box\">\n      <p>Progress</p>\n\n      <div class=\"week_object\">\n        <a href=\"#\" class=\"arrow\" data-direction=\"left\"><i class=\"fa fa-caret-left\"></i></a>\n          Week <span class=\"week_number\">1</span>\n        <a href=\"#\" class=\"arrow\" data-direction=\"right\"><i class=\"fa fa-caret-right\"></i></a>\n      </div>\n      \n  </div>\n  \n  <div class=\"col-md-4 content_section\">\n    <div class=\"progress_container\">\n      <p class=\"progress_amount\">30% Complete</p>\n\n      <img src=\"../images/progress_chart.png\" alt=\"\">\n    </div>\n  </div>\n\n  <div class=\"col-md-4 attribute_section dashboard_box\">\n    <p class=\"heading\">Attributes</p>\n    <ul>\n      <li><span class=\"attr_icon\"><img src=\"../images/attrs/attr1.png\" alt=\"\"></span> <span class=\"attr_name\">Accuracy:</span> <span class=\"attr_amount\">50/100</span></li>\n\n      <li><span class=\"attr_icon\"><img src=\"../images/attrs/attr1.png\" alt=\"\"></span> <span class=\"attr_name\">Knowledge:</span> <span class=\"attr_amount\">30/100</span></li>\n    </ul>\n  </div>\n\n  <div class=\"col-md-4 other_section dashboard_box\">\n    <ul>\n      <li><span class=\"content_name\">Journal:</span> <span class=\"content_amount\">2/5</span></li>\n\n      <li> <span class=\"content_name\">Comic:</span> <span class=\"content_amount\"><img src=\"../images/check_circle.png\" alt=\"\"></span></li>\n\n\n      <li> <span class=\"content_name\">Game Score:</span> <span class=\"content_amount\">30/100</span></li>\n\n    </ul>\n  </div>\n</div>\n";
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
  buffer += "\n		 		<li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n		 	";
  return buffer;
  }

  buffer += "<h1>Activity</h1>\n\n<div class=\"inner-wrap\">\n	<div class=\"another-wrapper box\">\n		 <h2 class=\"subHeading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n		 \n		 <p class=\"instructions\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instuctionsHeader)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n		 \n		 <ul>\n		 	";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		 </ul>\n	</div>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/article"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Article</h1>\n<div class=\"inner-wrap\">\n\n<div class=\"articleItem another-wrapper box\" data-id=\"0\">\n<p>\nEnrollment at American colleges is sliding, but competition for spots at top universities is more cutthroat and anxiety-inducing than ever. In the just-completed admissions season, Stanford University accepted only 5 percent of applicants, a new low among the most prestigious schools, with the odds nearly as bad at its elite rivals.\nDeluged by more applications than ever, the most selective colleges are, inevitably, rejecting a vast majority, including legions of students they once would have accepted. Admissions directors at these institutions say that most of the students they turn down are such strong candidates that many are indistinguishable from those who get in.\n</p>\n\n\n<p>\nIsaac Madrid applied to 11 colleges, a scattershot approach that he said is fairly typical at his private high school, Bellarmine College Preparatory in San Jose, Calif. Students there are all too aware of the long odds against getting into any particular elite university. “It was a crazy amount of work and stress doing all those essays by the deadline and keeping up my schoolwork, and waiting on the responses, and we had more than $800 in application fees,” he said.\n</p>\n\n<p>\nMr. Madrid, 18, got a taste of how random the results can seem. He was among the 95 percent turned away by Stanford, but he got into Yale, which he plans to attend, and he admitted having no real insight into the reasons for either decision.\nBruce Poch, a former admissions dean at Pomona College in Claremont, Calif., said he saw “the opposite of a virtuous cycle at work” in admissions. “Kids see that the admit rates are brutal and dropping, and it looks more like a crapshoot,” he said. “So they send more apps, which forces the colleges to lower their admit rates, which spurs the kids next year to send even more apps.”\n</p>\n\n<p>\nFor most of the past six decades, overall enrollment boomed, while the number of seats at elite colleges and universities grew much more slowly, making them steadily more selective. Enrollment peaked in 2011, and it has dropped a bit each year since then, prompting speculation that entry to competitive colleges would become marginally easier. Instead, counselors and admissions officers say, the pool of high-achieving applicants continues to grow, fed partly by a rising number from overseas.\n</p>\n\n<p>\nAt the same time, students send more applications than they once did, abetted by the electronic forms that have become nearly universal and uniform applications that can make adding one more college to the list just a matter of a click. Seven years ago, 315 colleges and universities accepted the most widely used form, the Common Application; this year, 517 did.\n</p>\n\n<p>\nStudents applying to seven or more colleges made up just 9 percent of the applicant pool in 1990, but accounted for 29 percent in 2011, according to surveys by the National Association for College Admission Counseling, and counselors and admissions officers say they think the figure has gone higher still. While people have lavished attention on a Long Island teenager who was accepted by all eight Ivy League colleges, admissions professionals say it is remarkable that anyone would apply to all eight.\n</p>\n\n<p>\nThe University of California, Los Angeles, the national leader in applications, had more than 86,000 requests — twice as many as in 2005 — for space in a first-year class of about 6,000, and it also received 19,000 applications to transfer from other colleges and universities. This year, for the first time, the admission rate for first-year applicants at U.C.L.A. and the University of California, Berkeley, could drop below 20 percent.\n</p>\n\n<p>\nStudents at Yale University last spring. A generation ago, it was rare for even highly competitive colleges to offer places to fewer than 20 percent of their applicants. CreditChristopher Capozziello for The New York Times\n“For most kids, this really used to be a regional process, but they have access to so much information online now, so every school seems local,” said Richard H. Shaw, the dean of undergraduate admission at Stanford. Admissions directors at several top Eastern colleges agreed, saying that they now received more applications from California than any other state, which would have been unthinkable a few years ago.\n</p>\n\n<p>\n“One of the ways that colleges are measured is by the number of applicants and their admit rate, and some colleges do things simply to increase their applicant pool and manipulate those numbers,” said Christoph Guttentag, the dean of undergraduate admission at Duke.\n</p>\n\n<p>\nA generation ago, it was rare for even highly competitive colleges to offer places to fewer than 20 percent of their applicants. In 2003, Harvard and Princeton drew exclamations of dismay (from prospective applicants), envy (from other colleges) and satisfaction (from those they accepted) when they became the first top universities to have their admission rates dip below 10 percent. Since then, at least a dozen have gone below that threshold.\n</p>\n\n<p>\nThis was the second year in a row that Stanford had the worst odds of admission among top colleges, a title that in previous years was usually claimed by Harvard. This year, by the April 1 deadline for most colleges to send admission notices, Harvard and Yale had accepted about 6 percent of applicants, Columbia and Princeton about 7 percent, and the Massachusetts Institute of Technology and the University of Chicago about 8 percent. (Some rates will increase by a few tenths of a percentage point as colleges accept small numbers of applicants from waiting lists.)\n</p>\n\n<p>\nSeveral universities, including Stanford, Duke, Northwestern, Cornell and the University of Pennsylvania, had admission rates this year that were less than half of those from a decade ago. The University of Chicago’s rate plummeted to a little over 8 percent, from more than 40 percent.\n</p>\n\n<p>The most competitive small colleges draw comparably accomplished applicants, but far fewer of them relative to their size, so their admission rates are higher. Even so, the acceptance rates at Pomona, Amherst, Harvey Mudd, Bowdoin, Claremont McKenna, Swarthmore, Middlebury, Williams and others were between 10 and 20 percent this year.\nMr. Shaw, the Stanford dean, said he could not predict where the rates would bottom out — in fact, he never expected them to go as low as they have. “Honestly,” he said, “I’m sort of in shock.”</p>\n\n</div>\n\n<div class=\"articleItem another-wrapper box\" data-id=\"1\">\n<p>Picking the Right School</p>\n \n<p>What is the point of going to a very expensive Ivy League school to get your undergraduate degree when you know that you are going to get your master's degree when you're done? I would like to go to Dartmouth, but I have a full scholarship to the University of Florida, so maybe I should go there and go to Dartmouth for my MBA. What is your opinion?</p>\n\n<p>Ivy League schools offer students great education and prestige. Many students find these schools attractive because they are selective, and because a degree from such a school is impressive on a job application. Yet there are great schools all over the country that offer a wonderful education and are easier to get into. And, as you know, public schools such as the University of Florida are more affordable.</p>\n\n<p>The best way to decide what school is best for you is to consider all the angles. Ask yourself: \"What schools offer strong programs in my major? How important is cost and will this scholarship make life easier for me in the future? Do I want to be close to home or further away on my own? What kind of college life is there?\"</p>\n\n<p>Do you prefer a large or small school? Would you be more comfortable in a traditional campus not close to a major city, or do you prefer to be in a large city? Are you looking for a certain student mix in terms of gender, religion, race, etc.? All of these questions play a major role in the college decision. You are right—if you choose to attend the University of Florida, you can always pursue a master's degree at Dartmouth or at another big-name school. But try not to think too far ahead. Base your decision on what each school can do for you right now as you pursue your bachelor’s degree.</p>\n\n<p>I'm interested in a lot of different colleges and don't know which one I want to choose. Please help.</p>\n<p>The best way to narrow down which colleges are best for you is to first ask yourself several general questions about college:</p>\n\n<ul>\n	<li>What am I interested in pursuing as a major?</li>\n	<li>What schools offer strong programs in my major?</li>\n	<li>How important is cost, and will scholarships be available at this school?</li>\n	<li>Do I want to live at home or on campus?</li>\n	<li>Do I want to be close to home or further away on my own?</li>\n	<li>Will I be more comfortable at a large university or a small private college?</li>\n	<li>Are my grades and test scores sufficient for acceptance?</li>\n</ul>\n\n<p>Once you’ve answered each of these questions, make a list of the colleges you are considering and decide which ones best fit the criteria set by your answers.</p>\n\n<p>The next step is to get specific information from each school left on the list. You may contact the schools directly or visit their websites to request catalogs, viewbooks, brochures, and anything else you think might aid the decision-making process.</p>\n\n<p>Finally, once you’ve narrowed the list down again, schedule campus visits to the schools you are still interested in. You can schedule a tour, see a dorm room, and perhaps even sit on a class. Many students base their final decision on a really good a campus visit. Then, once you’ve chosen the perfect school, begin the admissions process. Follow this process and you should have no trouble (or at least less trouble!) choosing the right school for you.</p>\n\n<p>I am a junior. I eventually want to attend Harvard Medical School, and a friend of the family (a physician) said I should definitely try to get into Harvard for undergraduate work because those students have a better chance of being accepted into the med school. Is that true (not only for Harvard but for most med schools)? My high school counselor says if my grades, activities and MCAT scores are great in college, it won't matter where I get my undergrad degree.\nTo a certain degree, both your counselor and your family friend are correct. Schools like Harvard do always select a few of their own schools for their graduate programs, but to be one of the students their medical school takes, you’ll need to be one of the top students in your college class.</p>\n\n<p>Your counselor is correct, because if you work hard and excel at any school, medical schools will want you in their incoming class. So, if you want to be a doctor, don’t worry too much about whether you get into Harvard for undergraduate work. There are many fine schools...and in determining the right place for you, you should take into account not only academic reputation, but also factors such as financial aid availability, size, location, student body mix, social life and clubs and activities. Ultimately, the school where you are the happiest is the one that will give you the most satisfying college experience...and will also be the one where you’re most likely to excel well enough to get into medical school.</p>\n\n<p>Ultimately, both are correct, because both are saying that medical schools like Harvard want the best students. However, don’t get too hung up on going just to Harvard Medical School, as there are many other excellent medical schools and you’ll become a doctor if you go through any of them. So apply to a wide range to colleges, Harvard included, and work really hard in college. Then, whether you go to Harvard or somewhere else, you should be in a good position to get into a great medical school. Good luck!</p>\n\n<p>My son is awaiting  decisions on colleges he has applied to. In addition, he has wanted to go on to medical school for years now. So far he has heard early from two schools: University of Connecticut, where he has received a very nice scholarship, and Brandeis, but with no scholarship. Assuming we may see a mix of acceptances, with and without scholarship, from other private and public schools of different rankings, is it worth the higher cost for the higher-ranked schools vs. accepting (happily on our part) the scholarship at the other schools? It has been my contention that one is better off doing well in whatever school you attend, including on the MCAT, and that the pressure may be less in some of the \"less competitive\" schools (the big fish, small pond theory), especially when we are talking about all respectable schools. Do you agree, or am I letting the dollars sway my thinking? Thanks very much for your thoughts!\nFirst, congratulations on your son’s acceptances. You should be very proud. </p>\n\n<p>Personal finances and your ability and willingness to pay more for a school are subjective and something I can’t fairly comment on. That said, while it probably isn’t worth going to the higher ranked school just to get your son into medical school (since that decision won’t be based necessarily on tougher competition), you should consider factors other than rankings when helping your son choose a school: among these: the school’s strength in your son’s intended major, the strength of the school’s premed program (if they have one, and if not, the quality of their science offerings), financial aid/scholarships (I know your son has gotten a scholarship from UConn, but he may get similar offers from other schools as well), student life (such as clubs, activities, athletics, etc.), the student mix (such as male/female ratio, religious and political leanings and socioeconomics of the student body), location, and size.</p>\n\n<p>Your son may also want to consider the breadth and quality of other majors offered at the school just in case he decides not to go to medical school or if he decides to major in something considered “nontraditional” for premed students.</p>\n\n<p>So what you need to figure out is what, if anything, you’re willing and able to pay for your son’s education and finding a school within these financial means where your son is going to be happy. After all, if he’s happy, he’s more likely to do well in school. Good luck!</p>\n\n<p>I have recently been admitted to Mississippi State University and to the University of Tennessee at Chattanooga. Right now I would like to study meteorology. Mississippi State has a great meteorology program, and it's the closest meteorology school to my home. I have been on campus, and I really love the atmosphere there. However, all of my best friends that I've known my entire life are going to Chattanooga. I can't imagine life without them, and I know we would have an amazing college experience together. I figure if I go to UT-Chatt, then I could study something in the medical field, since I am also interested in this. Both scholarship amounts I would receive from each school are about the same. </p>\n\n<p>So I really don't know which to choose. Can you help me?</p>\n\n<p>Thanks for this question. I have been thinking about it for a little while, and I have decided that instead of giving you an answer, I'm going to ask you two questions in return.</p>\n\n<ol>\n	<li>If you decide to go to Chattanooga with your friends, it's possible that your group will start to drift apart a little (after all, the college atmosphere is different, and young adults tend to change the most in college). Will you still feel as though you will have a good college experience there, or will you feel resentful for going there and wish you had gone to Mississippi State? </li>\n\n	<li>How much do you care about studying meteorology? Do you believe it is something you are completely passionate about, or do you feel about the same about it as you might a different program of study?</li>\n</ol>\n\n<p>I encourage you to think about these questions, think about what your expectations are at present for college, think about what you value most, and talk to your friends and adult mentors about this dilemma. I wish you wisdom in your decision-making.</p>\n\n<p>My son is a senior far away from his family at boarding school. Working in an architectural office this summer made him interested in architecture and industrial design. The problem is that all his art classes from middle school on had to do with music, and he has no works for his portfolio. He signed up for a drawing class now and his art teacher seems excited by his work. Will he be effected with a sort of \"thin\" portfolio? Secondly, he and his adviser put some schools on his list like Virginia Tech in Blacksburg. We decided that because of his limited preparation in arts, but also as a practical advantage in the job world, he should go for schools with a technical approach and not completely arty. Would Virginia Tech be recommended? What sites are available that give you insights to colleges (other than the facts on schools own websites)? Thank you very much for your help.\nIf you want more recommendations, I'd suggest you seek information from objective resources like architectural firms themselves. If you know of architects, ask them from which schools their firms frequently pull graduates. Also check outArchitect Magazine online. It offers a wide variety of resources to aspiring architects, including its ranking of best architecture schools.</p>\n\n<p>Also check with your son to see what aspects of architecture he is specifically loving. Is it the artistic aspect of creating something original in 3-dimensional form? Or is he more drawn to the technical and mathematical aspects of architecture? It doesn't hurt to keep the options open; an art school isn't out of the question quite yet just because of his \"limited preparation\" as you mentioned.</p>\n\n<p>In addition, find out what specific kind of architecture your son likes. There are so many branches of architecture (for example, you mentioned Virginia Tech--it's actually ranked number 1 currently in landscape architecture). Does your son like modern architecture? restoration architecture of old buildings? garden and outdoor parks architecture? Do a little research. Google is going to be your best friend on this journey.</p>\n\n<p>Also, I wouldn't worry about your son's \"thin\" portfolio just yet. But make sure to gather what you've got. Be absolutely sure to mention his work in an architectural office when he starts applying to schools.</p>\n\n<p>And I would bet he still has time to put together some quality pieces, artistic or otherwise. He should talk to the industrial tech and art teachers at his schools to see whether he could work on some specialized architectural design pieces on an independent basis. Or he could ask the firm he worked at to help in more depth with some of their projects on an apprentice sort of basis. Chances are, if he really does want to do this, he'll love putting together that kind of work for his portfolio anyway.</p>\n\n</div>\n\n<div class=\"articleItem another-wrapper box\" data-id=\"2\">\n\n	<h2 class=\"subheading\">These are the instructions for you to register with CFNC and access the Learn About Yourself page:</h2>\n	<ul>\n		<li>Go to: <a href=\"https://www.cfnc.org/index.jsp\">here</a></li>\n		<li>Create your own CFNC Account: <a href=\"https://www1.cfnc.org/Home/Create_an_Account/Create_an_Account.aspx\">here</a></li>\n		<li>Create your own CFNC Account: <a href=\"https://www1.cfnc.org/Home/\"></a></li>\n		<li>Create_an_Account/Create_an_Account.aspx</li>\n		<li>Create your own CFNC Account: <a href=\"https://www1.cfnc.org/Home/Create_an_Account/Create_an_Account.aspx\">here</a></li>\n		<li>Follow the instructions. Once logged in, click on Plan: <a href=\"https://www1.cfnc.org/Plan/_default.aspx\">here</a></li>\n		<li>Scroll down and click on Learn About Yourself: <a href=\"https://www1.cfnc.org/Plan/For_A_Career/Learn_About_Yourself/_default.aspx\"></a></li>\n		<li>Complete the surveys by creating an AchieveWorks login: <a href=\"https://www.humanesources.com/happ/login.php?url=218919\">here</a></li>\n	</ul>\n</div>\n\n<div class=\"articleItem another-wrapper box\" data-id=\"3\">\n<h2 class=\"subheading\">The Myth of the Ivy League</h2>\n\n<p>She won the golden ticket: admission to one of the nation's top colleges. She soon found that too many students choose \"the best,\" rather than \"the right\" school.</p>\n\nBy Eileen Torrez\n<p>My first day of college felt like a dream. I stepped wide-eyed through the black iron gates into a paradise of manicured lawns and towering stone buildings, exhilarated at the chance to attend an Ivy League school. Everything looked just as beautiful as it did in the brochure, and I felt sure that I would soon be as happy and fulfilled as the students I'd seen smiling on the cover.</p>\n\n<p>But within a few weeks, I encountered the unpleasant reality beneath my school's surface. The incessant competition. The endless work-filled days and tense, sleepless nights. The tremendous pressure to perform brilliantly in every capacity: academics, extracurricular activities, social life, physical fitness, and career. I felt like I was juggling bowling balls. But I couldn’t slow down, because no matter how well I did, it seemed the person next to me was doing better.</p>\n\n<p>Then one night while my roommate and I sat in the common room bemoaning our crunched schedules and heavy workloads, she broke into tears. “I don’t know why they let me in,” she said. “I’m just not good enough.”\nHer words caught me off guard. Until that day, I had thought that such feelings of inadequacy were mine alone. But I soon found they pervaded the whole campus. As I began my sophomore year, more and more of my fellow students admitted to feeling constantly overwhelmed. “I feel so worthless,” one confessed to me. “I would transfer, but my parents would never understand,\" lamented another. And the one that hurt the most: \"Sometimes I think I’m going to have a breakdown.\"</p>\n\n<p>Unfortunately, these complaints are all too common across college\ncampuses today. According to the American College Health Association’s 2012 National College Health Assessment, within the last year 86 percent of college students felt overwhelmed by all they had to do, and 45 percent felt that things were hopeless. More than 50 percent reported feeling overwhelming anxiety, and about a third reported feeling so depressed it was difficult to function.\nNot to be outdone, students at Ivy League schools seem to be having an even rougher time than other college students. Rates of attempted suicide at Harvard College are almost twice the national rate. And 35 percent of Princeton students said that they developed a mental health issue after coming to campus. What’s going on here?  Is this information to dire? too real?</p>\n\n<p>The blight of the promised land</p>\n\n<p>Every year, U.S. News and World Report publishes a list of the “best colleges in the nation.” Parents, students, teachers, and guidance counselors devour the rankings, yearning to garner acceptance to institutions as high up on the list as possible. Any school in the top 50 is painted as a golden realm of milk and honey, and high-achieving students are encouraged to set their sights on the promised land: the Ivy League.</p>\n\n<p>But the practice of glorifying schools does more harm than good. It may boost the status of select universities, but it has disastrous side effects on students: those who aren't accepted often see themselves as failures, and those who are often feel so much pressure to prove themselves that they do, in fact, break down. I had friends who fell weeks behind in their school work from relentless stress, stayed locked in their rooms for days at a time, and even overworked themselves to the point of hospitalization. Some ultimately dropped out or took leaves of absence once finals period hit, reckoning it’d be impossible to both pass and maintain their health. For every horror story I heard, I knew two more friends who were one late paper away from falling through the cracks.</p>\n\n<p>As a symptom of our larger culture, this dysfunctional level of stress exemplifies our destructive tendency to value productivity over health. But it’s also exacerbated by the traditional narrative that equates graduation from a top-tier university with success, and, by proxy, well-being. Parents and guidance counselors unwittingly perpetuate this myth by emphasizing high standards while overlooking another essential component of a great education: choosing an environment that supports the student.</p>\n\n<p>Toddling towards Harvard, no matter what</p>\n\n<p>Whether it’s first grade or freshman year, finding a school that fits is more difficult than simply aiming for “the best.” In terms of college, there's only so much research one can do, and as of yet U.S. News doesn’t issue personalized rankings. In the end, it’s often subjective ideas about education that determine whether we prioritize finding a school that offers not only strong academics but also the right culture and community.\nI knew so many students at both my school and similar schools who struggled, like me, to find a sense of purpose and individuality within the context of a prominent (and rather traditional) institution. The problem wasn't necessarily the institution, nor was it our lack of intelligence or ability. Instead, it was the mindset we'd been cultivating since kindergarten.</p>\n\n<p>My peers and I had been raised by parents who taught us to try our hardest and do our best, so we knew very well how to push ourselves to earn the highest grades and exceed expectations. But we didn’t know how to take a step back and examine whether our educational environment was actually supporting our development as human beings. Once we had been welcomed into the ranks of “the best and the brightest,” we couldn’t dream of relinquishing the title we had struggled to earn.</p>\n\n<p>The burden of expectation lay especially heavy on students from low-income backgrounds like me. Though I considered taking time off several times, I stuck around because I knew everyone back home was counting on me to stay. My teachers had put in long hours reviewing essays and writing recommendations. My parents had spent countless weekends helping me research programs and plan visits. And I myself had worked tirelessly throughout high school to build the perfect profile for college acceptance. After all of that, I thought leaving campus would mean giving up.</p>\n\n<p>Caught in the perfection trap</p>\n\n<p>High standards are important. Aspirations can make the difference between a student floundering or reaching her full potential. The trouble with high-achieving students is that their broad range of abilities can crowd out the unique interests that drive individuals toward passionate, fulfilling lives. Students themselves can get caught in a praise-seeking trap, especially if they're consistently rewarded for right answers rather than genuine interest or hard work. But just because a student has the perfect grades or a profile studded with stellar achievements doesn’t mean an elite university is the best place for them. If anything, it means the opposite: that they have the drive to succeed anywhere, and that if placed in an environment that suits them, they’ll be both happy and successful.</p>\n\n<p>My conversations with roommates and friends over the course of my time in college reminded me how important it is to measure success with the right metrics. Even talking to my peers who were the most “successful” by all external standards — snagging scholarships, winning awards, landing coveted jobs — I heard undertones of emptiness and sadness that suggested they weren’t truly fulfilled.</p>\n\n<p>A different measure of success</p>\n\n<p>At the start of my freshman year, my guiding questions were centered on achievement: am I pushing myself hard enough? Am I doing as much as I can be doing? By junior year, I had a flourishing schedule that could’ve been featured in the university prospectus. But then, one by one, the bowling balls I was juggling came crashing down. Between researching materials for my thesis, directing a singing group, coordinating events for three different clubs, applying to summer internships, picking up extra work shifts at the library, and running to the gym between classes, I had no time to breathe, much less contain my acute levels of anxiety.</p>\n\n<p>The night before midterms found me weeping deliriously on my dorm bed, calling my old roommate to come over now because I didn’t know where else to turn. With lots of support from my friends and parents, I quit everything except for my classes and my federal work-study job, got a few C’s (The horror!) on exams, and curtailed my internship search in favor of more sleep. After that experience, I gradually learned to measure my success in broader ways: am I taking care of my physical and mental health? Am I pursuing goals that seem right to me? By focusing on what mattered most, I made it through senior year the happiest I’d ever been.</p>\n\n<p>Asking these more nuanced questions is something every child should learn to do as part of growing up. But parents are the ones who sow the seeds for these thoughts. More than just motivating their children to achieve, parents need to instill values of health, passion, and integrity. It’s not about lowering your expectations — it's about tempering them with a knowledge of your child.</p>\n\n<p>It's not just Tiger moms</p>\n\n<p>For many parents, this may seem redundant. We think that as long as we don’t resort to “extreme parenting,” monitoring our child’s every move, they’ll do okay. But it’s important to remember how easily children internalize expectations. They observe what the adults in their life pay attention to most, and from there infer where their values lie. For their part, my parents never insisted that I make perfect grades or finish high school at the top of my class. But with every 'A' I brought home from school, I noticed the smiles on their faces and heard their words of praise.</p>\n\n<p>I learned quickly that if good grades were the way to win their approval, all I had to do was work hard in school and everything would be all right. Turns out, that's not the case; but from my parents’ behavior, I would never have known.</p>\n\n<p>Parents of high achievers need to make especially sure to be vocal about how much their children’s overall health matters to them. Most parents understand this intuitively, but they may not speak up when they notice an imbalance in their kids’ behavior. For example, by sixth grade, I had developed a habit of finishing each homework assignment to a T, which my teachers loved. But it started off a pattern of constant lack of sleep that affects me to this day.</p>\n\n<p>My parents noticed, but they assumed that my high-level functioning meant I was doing well. I wish they would have sat me down then and said, “We see that you're working hard to finish all your homework. But it's more important to us that you get enough rest than that you get perfect grades. Why don't you go to bed early tonight?” If your child fights back, you might need to be more aggressive. To kids who have learned to play the system of evaluation to their advantage, this ultimatum is just as important as “No, you cannot have another soda.”</p>\n\n<p>Focusing on an individual child's definition of success</p>\n\n<p>Every parent wants to see their child thrive. So understandably, many parents dream of taking that photo with their son or daughter, beaming in front of ivy-laced brick buildings, diploma in hand.</p>\n\n<p>But I have that photo. And it isn’t worth nearly as much to me as my understanding of my own talents and skills, and the knowledge that my parents support them. It took me a long time to realize that my success is based on my drive and not the name of my alma mater. This is something all students should be raised to believe.</p>\n\n<p>How much happier would our kids be if we gave them the space to succeed in ways that make sense to them? The more we can do so, the more we'll empower our children to truly reach their full potential. If you teach your child to find inspiration everywhere, to work hard on the things they love, and to keep trying despite obstacles, they will not fail. Their success may look a bit different from what you pictured, but it will be your child's own.</p>\n\n</div>\n\n<div class=\"articleItem another-wrapper box\" data-id=\"4\">\n<p>Many colleges allow you to interview with an admissions representative, either on campus or in your hometown.</p>\n\n<p>Not all schools grant interviews, and you shouldn't freak out if your local admissions rep is too busy to interview you. It doesn't mean you won't be admitted!</p>\n\n<p>If you do score an interview, take it seriously. But rest assured that it will not make or break you. Admissions officers will consider it when evaluating your application, although they'll be much more interested in your grades, test scores and essays.</p>\n\n<p>Prepare specific questions.</p>\n\n<p>Your interviewer will expect you to ask some questions about the school and talk about why you want to go there.</p>\n\n<p>Think about why the school appeals to you, what you want to study and what you might do after graduation (you don't need a fifty-year plan). Challenge yourself to come up with creative questions the answers to which cannot be easily found on the college's website. Bizarre or obvious questions will not impress the interviewer; thoughtful and specific inquiries will.</p>\n\n<p>Practice like a prizefighter.</p>\n\n<p>Being interviewed is a skill, and it requires practice. Sit down with one of your parents, a teacher or a friend and have him or her ask you questions. Answer them honestly and seriously. Then ask your \"interviewer\" how you came across.</p>\n\n<p>The practice interview is a great way to become aware of little things you might not have known you were doing. Do you talk like a stuttering valley girl? If so, cut down on \"ums\" and \"likes\" and make sure to answer in complete sentences.</p>\n\n<p>Be yourself.</p>\n\n<p>Don't pretend to be someone you're not. Remember, the key to getting admitted (and being happy at college) is matchmaking. You want to be yourself so that the person interviewing you can discern if you would be a good fit.</p>\n\n<p>But remember that you have many sides. Don't show up looking like you peeled yourself off the couch, brushed the crumbs off your belly and rolled on in. Showcase the side of yourself that is professional, mature and confident. Smile, use your sense of humor and remember your interviewer wants the interview to go well too! They'll feel comfortable if you are comfortable.</p>\n\n<p>Schedule wisely.</p>\n\n<p>You'll get better each time you interview. Try to arrange your schedule so that your first interviews are with the schools you care about least (or those most likely to accept you). You can even schedule interviews at schools in which you have no interest at all, just for the practice. You'll be much more comfortable with the process by the time you get to your top choice schools.</p>\n\n<p>Stop looking at the clock.</p>\n\n<p>Most interviews last approximately 30 minutes. Occasionally they'll run as long as an hour.</p>\n\n<p>Students are sometimes told that the sign of a good interview is a long one. But most colleges schedule interviews back-to-back, so your interviewer is likely on a tight schedule. If you notice them checking the time, it's not (necessarily) because they think you're boring.\nBe thankful.</p>\n\n<p>Send a thank-you note. If there's something about the interview that was helpful to you, let your interviewer know. If you connected with your interviewer over a book, common experience, band you're both into, etc., then mention it!</p>\n\n<p>Otherwise, simply express your continued interest in the school and thank your interviewer for taking the time to meet with you.</p>\n</div>\n\n<div class=\"articleItem another-wrapper box\" data-id=\"5\">\n<h2>Forged Transcripts and Fake Essays: How Unscrupulous Agents Get Chinese Students into U.S. Schools</h2>\n\n<p>\nBecause many Chinese students have trouble making sense of the American admissions process, a huge industry of education agents has arisen in China to help guide them — and, in some cases, to do whatever it takes to get them accepted.</p>\n \n<p>This fall, David Zhu will join an exodus of Chinese students boarding planes for the leafy, beer-soaked campuses of American colleges and universities. Zhu, currently a university student in Shanghai, will be enrolling at Oregon State University to pursue a bachelor’s degree in business — a dream his parents have had since they started saving a $157,000 nest egg for his education. But like many Chinese students who don’t speak English fluently, Zhu might not have been accepted without a little help. The 21-year-old hired an education agent in China to clean up and “elaborate” on the essay he submitted as part of his application. “Actually, the agency helped my application to some extent,” he says.\nStories like Zhu’s are becoming increasingly common as the ranks of Chinese students going abroad for college continue to swell. Because many Chinese students have only basic knowledge of foreign universities and have trouble making sense of complicated applications, a huge industry of education agents has arisen in the country to help guide them — and, in some cases, to do whatever it takes to get them accepted. This has created a thorny ethical dilemma in the U.S. While many American schools are elated by the influx of Chinese students as they’ve scrimped and saved to make ends meet in the economic downturn, some educators worry that the reliance of Chinese students on agents has led to some unintended — and troubling — consequences.</p>\n\n<p>Although Chinese students have been going to America to study for decades, their numbers have spiked dramatically in the past few years. In the 2010–11 school year, more than 157,000 Chinese students were enrolled at institutions of higher learning in the U.S. — a 22% increase over the previous year and tops among all countries. (Second-place India had just 104,000.) The largest increase has been among undergrads: China sent nearly 57,000 to the U.S. in 2010–11, up from 10,000 five years earlier. For the wealthy, an overseas education is becoming almost standard. A survey conducted by China’s Hurun Report found that 85% of rich Chinese parents planned to send their kids abroad to study. The U.S. is their preferred destination, followed by the U.K. and Canada.\nWhile there are a host of reasons for this explosion, money and prestige appear to be the most important factors. Not only can more Chinese families now afford to pay the tuition at a foreign university, they also view it as a better investment in their children’s future. Universities in the West are revered in China, and homegrown schools — even the best ones — fail to measure up. “I think the college education in China is not very practical,” says Vincent Sun, another Fudan student who will be enrolling at MIT this fall to pursue a master’s degree in finance. “When I will be searching for a job, I think a degree from a very famous [foreign] university is a huge thing I think that will put me into a very good place.” Ironically, a foreign university can also be a fallback for Chinese students who don’t do well enough on the national exam, the gaokao, to get into a Chinese school — there’s always an American college willing to take their tuition dollars.</p>\n\n<p>But many of these students would probably never make it to America without a middleman to pave the way. According to a 2010 report by Zinch China, a consultancy that advises U.S. colleges and universities on China, 8 out of every 10 Chinese undergraduate students use an agent to file their applications. And with such intense competition among agents — not to mention ambitious students and their overzealous parents — cheating is rampant, the group says. It estimates that 90% of recommendation letters from Chinese students are fake, 70% of college application essays are not written by the students, and half of all high school transcripts are falsified. “The world of higher education is becoming extremely competitive, much more so than it was even 10 years ago, and I think the kids are looking for an edge,” says Tom Melcher, chairman of Zinch China. “Everyone is looking around and saying, ‘Well, everyone else is cheating, why shouldn’t I?’</p>\n\n<p>Another issue that concerns some admissions officers in the U.S. is where the money is coming from. Not only are agents paid by families in China — up to $10,000 before bonuses, according to Zinch — some American schools also have contracts with agents that guarantee them a commission for each student they enroll. This practice constitutes a potential conflict of interest, says Philip Ballinger, head of a commission launched by the Washington-based National Association for College Admission Counseling (NACAC) to study the issue of foreign recruiting. “If money is first, then perhaps the interest of student or the person that’s involved is not first,” he says.</p>\n\n<p>What’s desperately needed is greater oversight in China and the U.S. — something both sides are now trying to address. The Chinese government realizes that doctored transcripts are a problem: earlier this year, it launched a new service to verify students’ high school grades for foreign universities. But because there are literally thousands of agents operating in China, cheating will persist. “The Chinese kids, when I talk to them, they sort of think it’s the schools’ fault. The schools will say you have to have a recommendation letter from a guidance counselor, and Chinese kids don’t have guidance counselors,” Melcher says. Zhu, the student enrolling at Oregon State, says his agent didn’t falsify documents beyond the “elaborated” essay, but he believes doing so is sometimes a necessary evil. “Some schools in China test students by very hard questions beyond their abilities, so the scores students get are very low. So the students who want to go to the USA, they had to change their scores,” he says. “But the students are still very good students because they’re in the best schools in Shanghai.”\nIn the U.S., there are hopes that the NACAC committee investigating overseas recruiting practices will bring much needed clarity to a situation that has been a relative free-for-all in recent years. While federal law prohibits colleges and universities from paying commissions to recruit students in the U.S., there is no statute against doing it internationally. NACAC has a policy against it, but enforcement has been put on hold while its investigation is continuing. The group’s second meeting is set for this fall; recommendations are expected to come in 2013.</p>\n\n<p>Although it acknowledges that fraud is a major concern, NACAC is focusing initially on the question of whether universities should be permitted to pay overseas recruiters commissions. Mitch Leventhal, vice chancellor for global affairs at the State University of New York (SUNY) and an outspoken pro-recruiter advocate, argues that agents can provide a legitimate and useful service for foreign students, provided they operate in a professional and transparent way. He says it’s ridiculous to suggest that universities should stop using agents. “That’s sticking your head in a hole. They’re not going to go away because market demand is there, so the best way to address it is to engage them and identify the good ones.”</p>\n\n<p>Leventhal believes he’s found a way to do that. He’s founder of an organization called the American International Recruitment Council, which has developed a rigorous process for certifying international agents. Agents must volunteer and pay a fee for the service, which involves a third-party investigation of their business, an external review by two members of U.S. universities and a confidential complaint system. So far, the group has certified about 45 agents, who benefit, Leventhal says, from having increased access to U.S. schools. And after agents are thoroughly vetted, he sees nothing wrong with paying them commissions, so long as the schools are also transparent about it. At SUNY, the fee is 10% of the student’s first-year tuition. “No one likes to pay a commission to a real estate broker when we buy a house because it’s another expense,” he says. “But we don’t deny the fact that a real estate broker works on commission and deserves to earn something for their effort.”</p>\n\n<p>This sentiment isn’t shared by everyone. Mark Sklarow, head of the Washington-based Independent Educational Consultants Association (IECA), says students in China are better served by so-called educational consultants, who are paid solely by families (not by U.S. universities) to find the best educational match for students. Dozens of consultants in China have applied to become IECA members, but the organization must first ensure they’ve never accepted money from a college or university and they’ve never engaged in fraudulent practices. He believes that as Chinese students become more familiar with the U.S. application process, they’ll increasingly turn to consultants like these to help them make decisions about colleges rather than put all their trust in agents.\nSklarow says the U.S. is at a turning point too. For the past five years, colleges and universities were “balancing their budgets on Chinese students,” but he thinks the pressure is now on them to find a way to regulate the system. “I think until American colleges stand up and say we need a way to guarantee that the students we accept, that the records we’re looking at are whole, complete and legitimate, the problem continues to grow.</p>\n</div>\n\n<div class=\"articleItem another-wrapper box\" data-id=\"6\">\n<p>Involvement in extracurricular activities allows students opportunities to develop skills in areas of their individual talents or interests. It also provides a new avenue to meet classmates with similar interests. Participation in extracurricular activities increases self-esteem, promotes responsibility, assists students with time management skills, builds socialization skills and is favorable to college entrance committees. Many students participate in several different extracurricular activities throughout the school year.</p>\n\n<p>Extracurricular activities that focus on academic areas include the school newspaper, quiz team, science club, school government, debate team or journalism club. Each of these activities promotes academic excellence and provides students with an opportunity to expand their content knowledge outside the classroom. While building leadership skills, students will also learn the benefits of technical writing, keeping and meeting deadlines and public speaking. Students will also have opportunities to broaden their content knowledge about unfamiliar subjects by conducting research in preparation for debates or academic competitions.</p>\n\n<p>Athletic Focused Activities</p>\n\n<p>Extracurricular activities that focus on athletics include sports such as basketball, volleyball, baseball, track, softball, cheerleading, football and soccer. Some schools offer even more sports teams to join, and some students play a different sport each season. Being part of an athletic team allows students to learn important life skills such as cooperation, sportsmanship, respect, responsibility, leadership and dedication. Students learn the importance of working together, and many stereotypes and barriers are broken on the field. Participation in sports often results in lifelong friendships.</p>\n\n<p>Interest Focused Activities</p>\n<p>Extracurricular activities that focus on individual interests include the technology club, chess club, yearbook staff, photography club, dance club, 4-H club, drama club, band and chorus. Participation in these activities allows students to showcase their skills in areas of their interests while forming new friendships with peers who are like-minded. Some possible school activities might include performing help-desk duties for educators in the building, photographing school events, participating in plays and skits, playing a variety of musical instruments, performing in concerts and running school news programs.</p>\n\n</div>\n\n<div class=\"articleItem another-wrapper box\" data-id=\"7\">\n<p>Most private and public school applications (including the Common Application) include a section in which you list and describe all of your extracurricular activities and honors awarded throughout high school. The purpose of this section is to provide the admission offices with a quantified perspective of how you choose to spend your time outside of the classroom and during the summer, and your level of commitment to these endeavors. Often, this section poses a dilemma for students, “Why does a college provide me with such a small amount of space for all of this important information?” The answer is that they actually glean all that they need from this abbreviated space. Choose your descriptive words carefully, list your activities in order of importance, and answer honestly.</p>\n\n<p>The Activities portion of most applications (including the Common App) is divided into five principal areas:</p>\n\n<p>1. Grade level of participation. Colleges are only interested in activities since 9th grade; however if you have been doing an activity consistently since, say, the 7th grade or 3rd grade (like a musical instrument) feel free to indicate that.</p>\n\n<p>2. Activity. List activities both in and out of school in order of their importance to you, including summer activities – unless there is a specific space for summer involvements.</p>\n\n<p>3. Approximate time spent. Estimate as accurately as you can. Application readers will add up your total hours per week listed. Overestimations in this category will be a discredit to you and undermine your credibility. If you are misrepresenting your time commitments what else are you misrepresenting in your application?</p>\n\n<p>4. Positions held, honors won, or letters earned. If you are a team captain, a publication editor (newspaper, literary magazine, etc.), or hold any kind of leadership position, this is the place to indicate that. If you have won awards for your participation in any of these activities, list them here.</p>\n\n<p>5. Do you plan to participate in college? To get a better handle on where you might fit into their community, schools are interested in knowing whether you plan to continue participating in the listed activities while in college. If you think you will look into it, check YES. If you are absolutely certain you will not look into it, check NO.</p>\n</div>\n\n<div class=\"articleItem another-wrapper box\" data-id=\"8\">\n<p>Extracurricular activities are simply anything you do that is not a high school course or paid employment (but note that paid work experience is of interest to colleges and can substitute for some extracurricular activities). You should define your extracurricular activities in broad terms -- many applicants make the mistake of thinking of them solely as school-sponsored groups such as yearbook, band or football. Not so. Most community and family activities are also \"extracurricular.\"</p>\n\n<p>The Common Application as well as many individual college applications group together extracurricular activities with community service, volunteer work, family activities and hobbies. The list below provides some examples of activities that would be considered \"extracurricular\" (note that many of the categories below overlap):</p>\n\n<p>Arts: theater, music, dance, painting, photography, creative writing and other creative endeavors.</p>\n \n<p>Church activity: community outreach, helping the elderly, event planning, community suppers, church-sponsored music and athletic programs, teaching or organizing for summer camps and retreats, missionary work, and any other activity run through the church.</p>\n \n<p>Clubs: Chess club, mathletes, mock trial, debate, animé club, role playing club, language clubs, film club, skateboarding club, diversity/minority groups and so on.</p>\n \n<p>Community activity: community theater, event organizing, festival staff, and many other activities that are organized through the community, not the school.</p>\n \n<p>Governance: Student government, student council, prom committee, community youth board (see Sophie's essay), advisory boards and so on.</p>\n \n<p>Hobbies: Be creative here. Read these articles on how Rubik's Cube or Collecting Free Stuffcan be transformed into an extracurricular activity. Also, colleges are interested in your passion whether it be rocketry, model railroads, collecting, blogging or quilting. These interests show that you have interests outside of the classroom.</p>\n \n<p>Media: local television, school radio or television, yearbook staff, school newspaper, literary journal, blogging and online journaling, local newspaper, and any other work that leads to a television show, movie or publication (online or print).</p>\n \n<p>Military: Junior ROTC, drill teams and related activities.</p>\n \n<p>Music: Chorus, band (marching, jazz, symphonic, concert, pep...), orchestra, ensembles and solo. These musical groups could be through school, church, the community or your personal group or solo efforts.</p>\n \n<p>Sports: Football, baseball, hockey, track, gymnastics, dance, lacrosse, swimming, soccer, skiing, cheerleading and so on.</p>\n \n<p>Volunteer Work and Community Service: Key Club, Habitat for Humanity, tutoring and mentoring, community fund-raising, Rotary, church outreach, hospital work (candy striping), animal rescue, nursing home work, poll worker, volunteer fire department, creating hiking trails, Adopt-a-Highway, and any other work that helps the world and is not for pay.</p>\n</div>\n\n<div class=\"articleItem another-wrapper box\" data-id=\"9\">\n<p>This section keeps track of the essays you need to write to apply to college. You will write one main essay to apply to college, and you will send this essay to most of your colleges. Additionally you will send your resume to any colleges who allow you to upload it in their supplement pages. In the supplement pages for each college, many colleges also require that you write about 150-200 words on your most meaningful extracurricular activity. Many schools ask that you tell them why you chose to apply to their school, so it is a good idea to have this piece ready as well. Since colleges also ask for their own small (or not so small) supplemental questions, you can keep track of all essays you need to write here. Recycle wherever you can, but always proofread to change the names!</p>\n\n<p>When</p>\n\n<p>Start writing these essays during the second semester of Junior year, lightly. Hit it hard in the summer before Senior year and try to have as many of them as possible finalized before Senior year starts. Plan to edit each piece 5-10 times. Get outside editing help; no one can be their own editor!</p>\n\n<p>Guidelines for Main Essay</p>\n\n<p>1 page single spaced; aim for 500-650 words. You will need a 500 word and probably a longer version of the same essay.</p>\n\n<p>Any topic from your life: favorite memory, a conquest, risk you took, a passion, memorable learning experience</p>\n\n<p>Tell a personal story from your life; this is not a 5 paragraph essay</p>\n\n<p>Still, have one point to the story--a central thesis</p>\n\n<p>Write about just one thing--not your life story</p>\n<p>Opening sentence/paragraph needs to \"hook\" reader; high interest</p>\n<p>Slightly formal; don't use profanity</p>\n<p>Not pretentious or forced; natural--DO NOT restate your resume. This is not about bragging at all.</p>\n<p>Avoid politics, travel, resume/greatness, community service, sports, Mexico missions trip, religion.</p>\n<p>*Let your personality shine through*--they need to hear your voice and spirit. ENTERTAIN.</p>\n<p>No complaining; no whining; no blaming</p>\n<p>You can discuss a negative topic but you must do so in a positive, strong, uplifting way, focusing on what you learned</p>\n<p>This is not a journal entry, not a confession, and NOT philosophical creative writing</p>\n<p>Show commitment/passion to/for something: hobby, family, sport</p>\n<p>This is a draft and you will revise it many times; don't worry about making it perfect.</p>\n<p>It is also OK to say, \"Let's just start over.\"</p>\n<p>Tell a story about something to show your point; don't tell what your point is</p>\n<p>You want the essay to be memorable--ENTERTAIN!</p>\n<p>Don't try to be unique or radical: don't feel pressured to write something AMAZING.</p>\n<p>All you're doing is telling a story from your life; have fun and don't worry.</p>\n<p>It's ok to use humor and it is GOOD to poke fun at yourself a little bit. Show yourself in a silly light, not as the smartest person ever or the savior of humanity... In NO way can you sound conceited.</p>\n<p>Ideas for Main College Essay</p>\n<p>First part-time job mishaps</p>\n<p>How I learned to relax and laugh at myself</p>\n<p>Favorite hotdog in Chicago</p>\n<p>A random tv show changed my life</p>\n<p>Teaching myself to cook--secretly</p>\n<p>How NPR made me who I am</p>\n<p>Overcoming a disability</p>\n<p>My brother's music and struggles shaped me</p>\n<p>How my summer cabin made me who I am</p>\n<p>Walking in Tokyo</p>\n<p>My role model--a biography I read changed my life</p>\n<p>Five airports on my own--a calamitous event</p>\n<p>How I fought to be able to read</p>\n<p>Jumping off that cliff</p>\n<p>Starting my business</p>\n<p>I got a tattoo in France</p>\n<p>Guidelines for Small Activity Paragraph</p>\n<p>These essays are usually about 200 words</p>\n<p>Start with a hook, like an action shot of you actually doing the activity</p>\n<p>If your sport is really your main passion, go ahead and write about it if you want to, but is very difficult to make sports essays sound unique</p>\n<p>If your sport is not your main passion, then choose a brainy or cultural or volunteer event</p>\n<p>Don't focus on what you did (we all know what someone on the track team does)</p>\n<p>DO focus on what you learned and how you grew and changed</p>\n\n<p>Talk about what the activity meant to you and how it changed you\nConclude with maybe saying something about how this will affect your future</p>\n\n</div>\n\n<div class=\"articleItem another-wrapper box\" data-id=\"10\">\n<p>There are several options to consider when scheduling your college visits; let me stress that there is no wrong choice, and each option has its merit.</p>\n\n<p>Spring Visits: Spring Break can be an opportune time to visit colleges. Hopefully, your spring break does not coincide with all colleges or universities, so you will have a chance to experience most schools in action. Be aware that admissions officers are in the height of the application reading at this time of the year and are for the most part unavailable. Student led tours will be in full swing, though.</p>\n\n<p>Summer Visits: Although the campus will be sparse of students, both you and the admissions office have more time to devote to your visit. In the summer, admissions offices are generally more relaxed and willing to spend time with you. It is easier to schedule an interview with an admissions officer in the summer. Be wary though; if winter weather is a major factor in your decision process, know that the beautiful green lawns and shrubs are not a realistic taste of what life from fall to spring feels like.</p>\n\n<p>Fall Visits: Many families prefer fall campus visits senior year when college is in session and the student’s college list is close to finalized. Admissions offices may be understaffed in the fall because officers are on the road recruiting.</p>\n\n<p>Visits after being accepted: Some students visit campuses after they have received all of their admissions decisions, which can be a good strategy because in the spring many colleges offer special admitted student weekend programs. They may provide you with the opportunity to stay overnight in a residence hall, eat the school’s food, attend a class or two, and get to know some of the people who might also be attending the school as a first year student.</p>\n\n<p>Make the Most of Your Visit:</p>\n\n<p>Discuss your itinerary with your College Counselor. S/he can help you map out your visit and suggest other schools to visit.</p>\n\n<p>Anticipate your absence. If you will miss school, notify your teachers in advance.</p>\n\n<p>Review the college website and any information the school has sent. Develop a list of questions to ask the admission officers and current students. These questions are particularly important if you have scheduled an interview. Also, read a description of the college from one of the narrative guidebooks. Based on your interests, try to arrange a meeting with a coach or professor (but don’t be discouraged if you can’t—remember they’re busy people, too). Prepare a separate list of questions for those meetings.</p>\n\n<p>Do not visit too many colleges within a short amount of time. I recommend no more than two colleges in a day, or seven‐eight on one trip. College visits require your full attention and focus.</p>\n\n<p>Make your efforts worthwhile by not over scheduling yourself.</p>\n\n<p>Arrange your schedule so that you can fit everything in i.e. the information session, tour, class visit, interview (if applicable), and a meal. Most schools offer information sessions twice a day, six days a week. These sessions are typically followed by a student‐led tour of the campus. The college admissions website is likely to provide you with their information session and tour schedules and may even allow you to register for them online. If not, call the admissions office and reserve your spots in advance. </p>\n\n<p>Observe classes. Many admissions offices are happy to provide a list of classes pre‐approved for visitors. Observe class sizes, facilities and teaching styles. Ask about the accessibility of faculty. Try to visit the same type of class at each school you visit (such as psychology, freshman humanities, biology, etc.). This will provide you with a more consistent means of comparison.</p>\n\n<p>Get good directions. Check the school’s website for directions to the campus and the admissions office.</p>\n\n</div>\n\n<div class=\"articleItem another-wrapper box\" data-id=\"11\">\n<p>Interview Do’s</p>\n\n<p>Be yourself.</p>\n<p>Maintain good eye contact.</p>\n<p>Dress well and neatly.</p>\n<p>Be positive, smile!</p>\n<p>Try to avoid one sentence or one‐word answers. Remember, each question is an invitation for a conversation. Keep it going.</p>\n<p>Show interest. Be engaging. Pay attention to both the questions being asked and the answers your interviewer gives.</p>\n<p>Be honest.</p>\n<p>Prepare a few questions about the school ahead of time.</p>\n<p>Relax, have fun! Remember the interviewer is looking for reasons to like you and to find ways in which the college is a good fit for you just as you are trying to sell yourself to the college.</p>\n<p>Send a thank you note—everyone likes to be appreciated.</p>\n\n\n<p>Interview Don’ts</p>\n\n<p>Do not be late for your appointment.</p>\n<p>Do not ask the interviewer to compare colleges.</p>\n<p>Do not make excuses or blame others for any blemish on your record.</p>\n<p>Offer concise explanations that indicate a sense of personal responsibility and/or lesson learned.</p>\n<p>Do not provide academic materials unless they are requested. Admission counselors will review your transcript at another time; they prefer to use the interview to get to know you personally.</p>\n<p>Don't argue with your parents during the campus visit. They will have questions that might be different from yours—let them ask. An argument will only reflect poorly on you.</p>\n</div>\n\n<div class=\"articleItem another-wrapper box\" data-id=\"12\">\n<p>There is no magic to composing the final list of colleges of which to apply. Ideally, the list comes to fruition early in the senior year and is the product of consistent effort and research by the student. The ultimate goal is to comprise a balanced list of schools based on the guiding criteria the student has laid out as his/her desired schools’ characteristics (location, size, academic offerings, cost, instinctive reaction, social fabric, etc.). A typical list ranges from a couple to a dozen, and varies in admissibility rates.</p>\n\n<p>There are two tenets of your final college list: 1) finding schools that you (the student) would be thrilled to attend and 2) understanding your ability to gain admission to each one of those schools i.e. admissibility. Up to this point the Handbook has addressed how to get to the first point, composing the list. The next step is to understand your admissibility.</p>\n\n<p>As your research and college list evolve you will find that schools should fit so neatly into four categories that college counselors use to describe a student’s chances of admission: MOST LIKELY, LIKELY, 50/50, and REACH (which include Highly Selective and Most Selective schools). It is expected that every 14 student will include at least one “Likely” and one “Most Likely” college on the final list of schools fall of senior year. Get familiar with these categories!</p>\n\n<p>Most Likely : This group includes colleges at which you are most likely to be admitted; most applicants with profiles similar to yours have been admitted to these colleges and universities.</p>\n<p>Selective/Likely : This group includes colleges at which you are likely to be admitted, where the odds of admission are in your favor. Applicants with profiles similar to yours have a good chance of being admitted to these colleges and universities/</p>\n<p>Very Selective/50‐50 : This group includes colleges where the chances of admission are probably no better than 50 percent. In some years, applicants with profiles similar to yours are admitted to these colleges; in other years, they are not admitted.</p>\n<p>Reach : This group includes schools for which you will have to stretch for admission, where the chances of being admitted are at least less than one in three. This group includes—but is not limited to—the nation’s most selective colleges and universities, where admission rates fall below 12 or 8 percent. These schools are a reach for even the most accomplished applicants (with the highest GPAs and highest standardized test scores).\nNote: These groupings are not a precise science. Schools’ admissibility rates may change notably from one year to the next, meaning that a student admitted one year may not guarantee admission for a similar student the next year. It is important that a final college</p>\n</div>\n\n";
  });

this["templates"]["weekExplorer/week/frames/articleLink"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	        <li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n	      ";
  return buffer;
  }

  buffer += "<h1>Article</h1>\n<div class=\"inner-wrap\">\n	<div class=\"another-wrapper\">\n		<h2 class=\"subheading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n		<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructions)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n		<ol class=\"objectives\">\n	      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	    </ol>\n		<a class=\"moreButton\" href=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" target=\"_blank\">Read More</a>\n	</div>\n</div>";
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

  buffer += "<h1>Assignment</h1>\n<div class=\"inner-wrap\">\n	<div class=\"another-wrapper\">\n		<h2 class=\"subHeading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.subHeading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n		<p class=\"instructions\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instuctionsHeader)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n		 \n		 <ul>\n		 	";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		 </ul>\n		 \n	    <textarea placeholder=\"\"></textarea>\n\n	    <button type=\"submit\" class=\"submit btn btn-large btn-primary\">Submit</button>\n    </div>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/assignmentUpload"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Assignment #1</h1>\n<div class=\"inner-wrap\">\n	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>\n\n	<a href=\"\" class=\"upload\">Upload a text file</a>\n</div>";
  });

this["templates"]["weekExplorer/week/frames/comic"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<h1>Comic</h1>\n<div class=\"inner-wrap\">\n	<div class=\"comic-wrap\">\n		<h2 class=\"subheading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.synopsis)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n		<h2 class=\"instructions\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructions)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n		\n		<a class=\"moreButton show-comic\" data-id=\"";
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
  buffer += "\n	        <li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n	      ";
  return buffer;
  }

  buffer += "<h1>Discussion</h1>\n<div class=\"inner-wrap\">\n	<div class=\"another-wrapper\">\n		<h2>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n		\n		<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructions)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n		<ol class=\"objectives\">\n	      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	    </ol>\n\n	    <textarea class=\"journal_text\" placeholder=\"\"></textarea>\n    </div>\n	\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/frame"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<h1 class=\"weekHeading\">Week 1 ";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ":</h1>\n<div class=\"inner-wrap\">\n  <h2 class=\"subHeading\"> What are US Universities like?</h2>\n  \n  <p> <strong>Welcome to our course.</strong></p>\n  <p>This week we will start at the basics, <strong>what are the differences between the Chinese and US educational systems.</strong> The admission's landscape is vast and competitive, esp. among elite U.S. colleges and universities. <strong>How do you find the school that \"best-fits\" you?</strong> </p>\n\n  <p>Following along with these links, videos and reading materials to find out. <strong>Comment on the items underneight to interact with your fellow students.</strong></p>\n  <h3>Badges Available:</h3>\n\n  <div class=\"badges\">\n    <ul>\n      <li><a href=\"\">A</a></li>\n      <li><a href=\"\">B</a></li>\n      <li><a href=\"\">C</a></li>\n    </ul>\n  </div>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/game"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<h1>Game</h1>\n<div class=\"inner-wrap\">\n	<div class=\"another-wrapper\">\n		<div class=\"game-wrap\">\n			<h2 class=\"subheading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n			<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n			<a class=\"game-play\" data-id=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\">Play</a>\n		</div>\n	</div>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1>Big Image:</h1>\n<div class=\"inner-wrap\">\n	<h2 class=\"subHeading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n	<img src=\""
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
  buffer += "\n	        <li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n	      ";
  return buffer;
  }

  buffer += "<h1>Journal</h1>\n<div class=\"inner-wrap\">\n	<div class=\"another-wrapper\">\n\n		<h2 class=\"subHeading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n\n		<p class=\"instructions\">Instructions: ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructions)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n		\n		<ol class=\"objectives\">\n	      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	    </ol>\n	    \n		<textarea name=\"\" id=\"\" cols=\"20\" rows=\"13\"></textarea>\n		<button type=\"submit\" class=\"submit btn btn-large btn-primary\">Submit</button>\n	</div>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/lectureAudio"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Lecture With Text</h1>\n<div class=\"inner-wrap\">\n	 <p class=\"instructions\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, fuga aspernatur molestias id laboriosam soluta earum ea alias doloremque vel quae reprehenderit debitis placeat harum delectus obcaecati doloribus illum iste.</p>\n	 \n	 <div class=\"activity-wrapper\">\n	</div>\n</div>";
  });

this["templates"]["weekExplorer/week/frames/lectureText"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Lecture With Text</h1>\n<div class=\"inner-wrap\">\n	 <p class=\"instructions\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, fuga aspernatur molestias id laboriosam soluta earum ea alias doloremque vel quae reprehenderit debitis placeat harum delectus obcaecati doloribus illum iste.</p>\n	 \n	 <div class=\"activity-wrapper\">\n	</div>\n</div>";
  });

this["templates"]["weekExplorer/week/frames/lectureVideo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Lecture With Video</h1>\n<div class=\"inner-wrap\">\n	 <p class=\"instructions\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, fuga aspernatur molestias id laboriosam soluta earum ea alias doloremque vel quae reprehenderit debitis placeat harum delectus obcaecati doloribus illum iste.</p>\n	 \n	 <div class=\"activity-wrapper\">\n	</div>\n</div>";
  });

this["templates"]["weekExplorer/week/frames/links"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  
  return "\n      <li><a href=\"this.href\">this.heading</a></li>\n    ";
  }

  buffer += "<h1>Links</h1>\n<div class=\"inner-wrap\">\n  <h2 class=\"subheading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n  <h3 class=\"instructions\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionHeader)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h3>\n  <a href=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.singleLinkhref)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.singleLinkHeading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n  <ol>\n    ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.linkList), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ol>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/overview"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <h2 class=\"subHeading\">Overview: ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.overview)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n    ";
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

  buffer += "<h1 class=\"weekHeading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h1>\n\n<div class=\"inner-wrap\">\n  <div class=\"another-wrapper\">\n    <h2 class=\"subHeading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.subTitle)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.overview), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <h3>You Will</h3>\n      <ol class=\"objectives\">\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.objectives), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ol>\n\n    <h3>Attributes Available:</h3>\n  </div>\n</div>";
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
    + "\">\n			<p>";
  stack1 = ((stack1 = (depth0 && depth0.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n			";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.responses), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n		</div>\n		<hr/>\n	";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n				<input type=\"radio\" name=\"quiz";
  if (helper = helpers.getQuizIndex) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.getQuizIndex); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" data-index=\"";
  if (helper = helpers.getQuizIndex) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.getQuizIndex); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" value=\"this\">";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "<br>\n			";
  return buffer;
  }

  buffer += "<h1>Quiz</h1>\n<div class=\"inner-wrap\">\n\n<h2 class=\"subHeading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n\n<div class=\"quiz\"></div>\n	";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.questions), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n	<button type=\"submit\" class=\"submit btn btn-large btn-primary\">Submit</button>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/video"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1>Video</h1>\n\n    <h2 class=\"sub\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n	<video id=\"video\" controls>\n    	<source src=\"videos/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.video)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".m4v\" type=\"video/m4v\">\n        <source src=\"videos/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.video)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".ogv\" type=\"video/ogv\">\n        <source src=\"videos/"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.video)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ".webm\" type=\"video/webm\">\n  </video>\n  <h2 class=\"subheading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.subheading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n\n";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/videoLink"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	        <li>";
  stack1 = (typeof depth0 === functionType ? depth0.apply(depth0) : depth0);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</li>\n	      ";
  return buffer;
  }

  buffer += "<h1>Video</h1>\n<div class=\"inner-wrap\">\n	<div class=\"another-wrapper\">\n	  	<h2 class=\"subheading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n	  	<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.synopsis)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n	  	<ol class=\"objectives\">\n	      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	    </ol>\n	    \n	  	<a class=\"moreButton\" href=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.link)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" target=\"_blank\">View Video</a>\n	  </div>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/wrapup"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Wrap-Up</h1>\n<div class=\"inner-wrap\">\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, aliquid, esse quae quasi reprehenderit pariatur minus neque perferendis ab eos ullam quidem necessitatibus eveniet quam itaque impedit laborum harum nesciunt.</p>\n    <a class=\"moreButton\" href=\"#\">Next Week &rarr;</a>\n</div>";
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
  stack1 = helpers.each.call(depth0, (depth0 && depth0.weeks), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n\n    <a class=\"expand-horiz\" aria-expanded=\"false\"></a>\n</div>";
  return buffer;
  });