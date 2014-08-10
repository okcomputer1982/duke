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
  


  return "<div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container-fluid inner-wrap\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle pull-right\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-haspopup=\"true\" aria-hidden=\"true\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <a class=\"navbar-brand logo replace hidden-phone\" href=\"#\">Duke University</a>\n      \n    </div>\n\n    <!-- <p class=\"tagline\">A Student's Journey</p> -->\n    <div class=\"navbar-collapse collapse\" role=\"navigation\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a id=\"dashboard_link\" href=\"#profile/student\">Dashboard</a></li>\n        <li><a id=\"coursework_link\" href=\"#week\">Coursework</a></li>\n        <li><a id=\"admin_link\" href=\"#admin/teacher\">Admin</a></li>\n        <li><a id=\"logout_link\"  href=\"#\" class=\"logout_button\">Logout</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</div>";
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
  


  return "<div class=\"content\">\n    \n	<div class=\"container-fluid\">\n\n		<div class=\"login-logo\">\n	        <a href=\"\" class=\"logo replace\">Duke University</a>\n	        <p class=\"tagline\">A Student's Journey</p>\n\n\n    	    <div id=\"login_alert\">Not a correct username/password combination.</div>\n      	</div>\n\n	    <div class=\"username\">\n	        <input type=\"text\" id=\"username_input\" placeholder=\"username\" aria-label=\"user name\" aria-required=\"true\" required autofocus>\n	    </div>\n	    <div class=\"password\">\n	        <input type=\"password\" id=\"password_input\" placeholder=\"password\" aria-label=\"password\" aria-required=\"true\" required>\n	    </div>\n	\n		<div id=\"login_group\">\n	    	<button class =\"btn btn-primary btn-login\" id=\"user_login\"type=\"submit\">Log In</button>\n	    	<button class =\"btn btn-primary btn-login\" id=\"guest_login\" type=\"submit\">Log In As Guest</button>\n		</div>\n		\n	</div>\n</div>";
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

this["templates"]["profile/student/content2"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n  <section id=\"welcome-window\" class=\"row-fluid section gone\">\n    <div class=\"inner-wrap\">\n      \n      <div class=\"profile-welcome\">\n        <h1>Welcome to \"A Student's Journey\"!</h1> \n        <p class=\"intro\">Every week, you'll be given a mixture of articles, multimedia, and interactive games which will help guide you through understanding college life in America.  Throughout, you will develop attributes and achieve badges which will factor into your total grade.  In addition, you'll be given grades on assignments, class participation, and your achievements.</p>\n      </div>\n\n      <div class=\"content col-md-4\">\n        <h3>Content-types</h3>\n          <ul id=\"section_nav\" class=\"hidden-phone\">\n            <li>\n              <a class=\"weekItemLink assignment active\" data-weekitem=\"0\" data-type=\"overview\" href=\"#weekItem0\">\n                <span class=\"item-icon icomoon icon-file activity\"></span><span class=\"hoverover\">assignment</span>\n              </a>\n            </li>\n            <li>\n              <a class=\"weekItemLink  article active\" data-weekitem=\"1\" data-type=\"article\" href=\"#weekItem1\">\n                <span class=\"item-icon icomoon icon-book2 article\"></span><span class=\"hoverover\">article</span>\n              </a>\n            </li>\n            <li>\n              <a class=\"weekItemLink game active\" href=\"#weekItem2\">\n                <span class=\"item-icon icomoon icon-gamepad game\"></span><span class=\"hoverover\">game</span>\n              </a>\n            </li>\n            <li></li>\n        </ul>\n        <a class=\"welcome-link clear\">view all content types</a>\n      </div>\n\n      <div class=\"attributes col-md-4\">\n        <h3>Attributes</h3>\n        <ul>\n          <li><span class=\"pie\" data-value=\"4\"><span class=\"attr-value\">4</span></span><span class=\"pie-mask\"></span>Self-Awareness</li>\n          <li><span class=\"pie\" data-value=\"1\"><span class=\"attr-value\">1</span></span><span class=\"pie-mask\"></span>Adaptation</li>\n          <li><span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span><span class=\"pie-mask\"></span>Attention to Detail</li>\n          \n        </ul>\n        <a class=\"welcome-link clear\">view all available attributes</a>\n      </div>\n\n      <div class=\"badges col-md-4\">\n        <h3>Badges</h3>\n        <ul>\n          <li class=\"code\"></li>\n          <li class=\"cool\"></li>\n          <li class=\"foxy\"></li>\n          <li class=\"hive\"></li>\n          <li class=\"thread\"></li>\n          <li class=\"fest\"></li>\n          <li class=\"network\"></li>\n          <li class=\"olympics\"></li>\n          <li class=\"thimble\"></li>\n        </ul>\n        <p class=\"clear welcome-link\"><a>view all available badges</a></p>\n      </div>\n      <div class=\"set-up-profile clear\">\n        <p>Next: <a>Set-up your Profile</a></p>\n      </div>\n      <div class=\"full-width center profile-link moreButton\"><span class=\"clear glyphicon glyphicon-arrow-down\"></span></div>\n    </div>\n  </section>\n\n  <section id=\"profile-top\" class=\"row-fluid section\">\n    <div class=\"inner-wrap\">\n      <h1 class=\"profile-welcome\">Student Profile</h1>\n        \n      <div class=\"profile-categories student-progress col-md-4\">\n        <h3>Progress</h3>\n        <div class=\"progress-wrap\">\n          <div class=\"progress\">\n            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"21\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 21%;\">\n              <span class=\"sr-only\">21%</span>\n            </div>\n            <span class=\"glyphicon glyphicon-bell\"></span>\n          </div>\n          <p class=\"current-week\">You are currently in <label for=\"student-progress\">Week 3</label> of 15</p>\n          <a href=\"\" class=\"moreButton\">Proceed to Week 3<span class=\"glyphicon glyphicon-play\"></span></a>\n          \n          <div class=\"last-lesson clear\">\n            <label for=\"last-lesson\">Last Lesson Completed</label>\n            <ul id=\"section_nav\" class=\"hidden-phone\">\n            <li class=\"game clear\">\n              <a href=\"\"><span class=\"icomoon icon-gamepad clear\"></span><span class=\"hoverover\">game: Let's go to school!</span></a>\n            </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"profile-pic col-md-4\">\n        <h3>Warren Longmire</h3>\n        <div class=\"avatar\">\n          <div class=\"avatar-container\">\n          </div>\n          <a class=\"edit-avatar\">Change Avatar</a>\n          <img src=\"../images/avatar.png\" class=\"avatar\">\n        </div>\n          \n        <div class=\"myers-briggs\"><h4>Myers-Briggs:</h4><h4>INTJ</h4></div>\n      </div>\n\n      <div class=\"profile-categories attributes col-md-4\">\n        <h3>Attributes</h3>\n          <div class=\"progress-wrap\">\n            <div class=\"attr-item\">\n              <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"process of learning something: the fact or process of finding out about something for the first time\">Exploration</h4> \n                \n              <div class=\"col-md-2\">\n                <span class=\"pie\" data-value=\"4\"><span class=\"attr-value\">4</span></span>\n                <div class=\"clear\">\n                  <strong class=\"fraction\"><span data-value=\"4\">4</span>/5</strong>\n                </div>\n              </div>\n\n              <p class=\"description col-md-10\">Made some real effort to learn about searching for colleges but could have been a bit more thorough.</p>\n            </div>\n\n            <div class=\"attr-item\">\n              <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the ability to be precise and avoid errors\">Accuracy</h4>\n              <div class=\"col-md-2\">\n                <span class=\"pie\" data-value=\"1\"><span class=\"attr-value\">1</span></span>\n                <div class=\"clear\">\n                  <strong class=\"fraction\"><span data-value=\"1\">1</span>/5</strong>\n                </div>\n              </div>\n              <p class=\"description col-md-10\">Did not perform the task or performed it inadequately.</p>\n            </div>\n            \n            <div class=\"attr-item\">\n              <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"careful thought, especially the process of reconsidering previous actions, events, or decisions\">Reflection</h4>\n                <div class=\"col-md-2\">\n                <span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n                <div class=\"clear\">\n                  <strong class=\"fraction\" ><span data-value=\"3\">3</span>/5</strong>\n                </div>\n              </div>\n              <p class=\"description col-md-10\">Showed a reasonable careful reconsideration of previous actions, events or decisions.</p>\n            </div>\n\n            <div class=\"attr-item\">\n              <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-  item\" title=\"the examination of something in detail in order to understand it better or draw conclusions from it\">Analysis</h4>\n                <div class=\"col-md-2\">\n                  <span class=\"pie\" data-value=\"2\"><span class=\"attr-value\">2</span></span>\n                  <div class=\"clear\">\n                    <strong class=\"fraction\" ><span data-value=\"2\">2</span>/5</strong>\n                  </div>\n                </div>\n               <p class=\"description col-md-10\">Examined the article or assignment in very little detail and drew a few conclusions from it.</p>\n            </div>\n\n              <div class=\"attr-item\">\n                <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"The ability to understand a concept and apply it to a real world example.\">Application</h4>\n                <div class=\"col-md-2\">\n                  <span class=\"pie\" data-value=\"5\"><span class=\"attr-value\">5</span></span>\n                  <div class=\"clear\">\n                    <strong class=\"fraction\" ><span data-value=\"5\">5</span>/5</strong>\n                  </div>\n                </div>\n                <p class=\"description col-md-10\">Completely understood the concept and effectively applied it to the real world example.</p>\n              </div>\n\n            <div class=\"attr-item\">\n              <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"general awareness or possession of information, facts, and ideas\">Knowledge</h4>\n              <div class=\"col-md-2\">\n                <span class=\"pie\" data-value=\"4\"><span class=\"attr-value\">4</span></span>\n                <div class=\"clear\">\n                  <strong class=\"fraction\" ><span data-value=\"4\">4</span>/5</strong>\n                </div>\n              </div>\n\n              <p class=\"description col-md-10\">Indicated knowledge about the “Best-Fit” College for the student.</p>\n            </div>\n\n            <div class=\"attr-item\">\n              <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"extremely attentive to accuracy and detail\">Thoroughness</h4>\n              <div class=\"col-md-2\">\n                <span class=\"pie\" data-value=\"1\"><span class=\"attr-value\">1</span></span>\n                <div class=\"clear\">\n                  <strong class=\"fraction\" ><span data-value=\"1\">1</span>/5</strong>\n                </div>\n              </div>\n\n              <p class=\"description col-md-10\">Not completed</p>\n            </div>\n\n            <div class=\"attr-item\">\n              <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the capacity for understanding information fully.\">Comprehension</h4>\n                \n              <div class=\"col-md-2\">\n                <span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n                <div class=\"clear\">\n                  <strong class=\"fraction\" ><span data-value=\"3\">3</span>/5</strong>\n                </div>\n              </div>\n\n              <p class=\"description col-md-10\">Completely understood the concept and effectively applied it to the real world example.</p>\n            </div>\n\n            <div class=\"attr-item\">\n              <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the ability to communicate effectively and appropriately with people of other cultures.\">Intercultural Competence</h4>\n              <div class=\"col-md-2\">\n                <span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n                <div class=\"clear\">\n                  <strong class=\"fraction\" ><span data-value=\"3\">3</span>/5</strong>\n                </div>\n              </div>\n\n              <p class=\"description col-md-10\">Showed a fair grasp of the ability to communicate effectively and appropriately with people of other cultures</p>\n            </div>\n\n            <div class=\"attr-item\">\n              <h4 href=\"#\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the detailed mental examination of your own feelings, thoughts, and motives.\">Introspection</h4>\n              <div class=\"col-md-2\">\n                <span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n                <div class=\"clear\">\n                  <strong class=\"fraction\" ><span data-value=\"3\">3</span>/5</strong>\n                </div>\n              </div>\n\n              <p class=\"description col-md-10\">Had a fairly good understanding of your own feelings, thoughts, and motives.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"progress section\">\n    <div class=\"inner-wrap\">\n      <h1>Progress</h1>\n      <div class=\"profile-categories badges\">\n        <div class=\"content-week-nav\">\n          <a class=\"arrow-left-grade\"><span class=\"icomoon icon-arrow-left\"></span></a>\n          <a class=\"arrow-right-grade\"><span class=\"icomoon icon-arrow-right\"></span></a>\n        </div>\n        <div class=\"week-progress\">\n          <h2>Week 1</h2>\n          <div class=\"completed circle\">\n            <p class=\"big\">9/10</p>\n            <p>items complete</p>\n          </div>\n          <a href=\"\" class=\"moreButton\">go to week 1</a>\n        </div>\n        <div class=\"week-progress\">\n          <h2>Week 2</h2>\n          <div class=\"completed circle active\">\n            <p class=\"big\">2/10</p>\n            <p>items complete</p>\n          </div>\n          <a href=\"\" class=\"moreButton\">go to week 2</a>\n        </div>\n        <div class=\"week-progress\">\n          <h2>Week 3</h2>\n          <div class=\"completed circle\">\n            <p class=\"big\">0/10</p>\n            <p>items complete</p>\n          </div>\n          <a href=\"\" class=\"moreButton\">go to week 3</a>\n        </div>\n\n      </div>\n    </div>\n  </section>\n\n  <section class=\"badge section\">\n    <div class=\"inner-wrap\">\n      <div class=\"profile-categories badges\">\n        <h1>Badges Earned:</h1>\n        <ul>\n          <li class=\"code\"></li>\n          <li class=\"cool\"></li>\n          <li class=\"foxy\"></li>\n          <li class=\"hive\"></li>\n          <li class=\"thread\"></li>\n          <li class=\"fest\"></li>\n          <li class=\"network\"></li>\n          <li class=\"olympics\"></li>\n          <li class=\"thimble\"></li>\n        </ul>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"section assignment grades \">\n    <div class=\"inner-wrap\">\n      <h1>Grades</h1>\n\n      <div class=\"content-week-nav\">\n        <a class=\"arrow-left-grade\"><span class=\"icomoon icon-arrow-left\"></span></a>\n        <a class=\"arrow-right-grade\"><span class=\"icomoon icon-arrow-right\"></span></a>\n      </div>\n\n      <div class=\"weekly-content\">              \n        <div class=\"wrap active\">\n          <div class=\"assignment-container active\">\n            <h2 class=\"active\">Week 1</h2>\n            <div class=\"grade-container\" data-number=\"1\">\n              <h3 class=\"assignment-title\">Assignment 1: U.S. vs. China</h3>\n              <p class=\"assignment-description\">Write a one page essay about the differences between U.S. and Chinese School Systems.</p>\n              <p class=\"uploaded-assignment\"><strong>Your submission: </strong><a href=\"\"> US-vs-China.doc</a></p>\n              <p class=\"grade-display\"><span class=\"grade-label\">grade:</span> <span class=\"student-grade\">20/20</span></p>\n              <a href=\"#\" class=\"assignment_link\" data-assignId=\"0\" data-assignType=\"assignment\">view assignment</a>\n            </div>\n            <div class=\"grade-container\" data-number=\"2\">\n              <h3 class=\"Quiz-title\">Quiz 1</h3>\n              <p class=\"grade-display\"><span class=\"grade-label\">grade:</span> <span class=\"student-grade\">20/20</span></p>\n              <a href=\"#\" data-assignId=\"0\" data-assignType=\"quiz\">review quiz</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"wrap\">\n          <div class=\"assignment-container active\">\n            <h2 class=\"active\">Week 2</h2>\n            <div class=\"grade-container\" data-number=\"1\">\n              <h3 class=\"assignment-title\">Assignment 2: Looking at Colleges</h3>\n              <p class=\"assignment-description\">Write a one page essay about the differences between U.S. and Chinese School Systems.</p>\n              <p class=\"uploaded-assignment\"><strong>Your submission: </strong><a href=\"\"> US-vs-China.doc</a>    </p>\n              <p class=\"grade-display\"><span class=\"grade-label\">grade:</span> <span class=\"student-grade\">20/20</span></p>\n              <a href=\"#\" class=\"assignment_link\" data-assignId=\"1\" data-assignType=\"assignment\">view assignment</a>\n            </div>\n            <div class=\"grade-container\" data-number=\"2\">\n              <h3 class=\"Quiz-title\">Quiz 2</h3>\n              <p class=\"grade-display\"><span class=\"grade-label\">grade:</span> <span class=\"student-grade\">20/20</span></p>\n              <a href=\"\" class=\"quiz-link\">review quiz</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <section class=\"section journal\">\n    <div class=\"inner-wrap\">\n      <h1>Journals</h1>\n      <div class=\"journal-entry paper\" data-entry-number=\"1\">\n        <time>01.23.2014</time>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum amet esse blanditiis illum debitis rem in libero laudantium, delectus alias autem deserunt possimus animi voluptate, exercitationem! Cumque in reiciendis illo!  sLorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tenetur doloribus minima rem ab id dolorum neque expedita nostrum dignissimos fugiat fuga quia repellat perferendis dicta, dolores corporis laborum aspernatur.</p>\n      </div>\n\n      <div class=\"journal-entry paper\" data-entry-number=\"2\">\n        <time>02.21.2014</time>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum amet esse blanditiis illum debitis rem in libero laudantium, delectus alias autem deserunt possimus animi voluptate, exercitationem! Cumque in reiciendis illo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consequuntur officia officiis nam nihil numquam eos fugit ab vitae inventore? Illum consequuntur obcaecati explicabo tenetur laudantium, praesentium, et magnam aut.</p>\n      </div>\n\n      <div class=\"journal-entry paper\" data-entry-number=\"3\">\n        <time>03.03.2014</time>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum amet esse blanditiis illum debitis rem in libero laudantium, delectus alias autem deserunt possimus animi voluptate, exercitationem! Cumque in reiciendis illo!  sLorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tenetur doloribus minima rem ab id dolorum neque expedita nostrum dignissimos fugiat fuga quia repellat perferendis dicta, dolores corporis laborum aspernatur.</p>\n      </div>\n      <a href=\"\"><span class=\"reload\">Reload Journals</span></a>\n    </div>\n  </section>\n</div>";
  });

this["templates"]["profile/student/contentList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n  <div id=\"main-content\" data-spy=\"scroll\" data-target=\"#section_nav\">\n  </div>\n</div>";
  });

this["templates"]["profile/student/frames/attribute"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"clearfix\">Attributes</h1>\n<div class=\"inner-wrap\">\n  <div class=\"profile-categories attributes\">\n      <div class=\"progress-wrap\">\n          <div class=\"attr-item \">\n            <div class=\"box\"  data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Process of learning something: the fact or process of finding out about something for the first time\">\n            <h4>Exploration</h4> \n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"4\"><span class=\"attr-value\">4</span></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"attr-item \">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the ability to be precise and avoid errors\">\n              <h4>Accuracy</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"1\"><span class=\"attr-value\">1</span></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"attr-item\">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"careful thought, especially the process of reconsidering previous actions, events, or decisions\">\n              <h4>Reflection</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"attr-item \">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-  item\" title=\"the examination of something in detail in order to understand it better or draw conclusions from it\">\n              <h4>Analysis</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"2\"><span class=\"attr-value\">2</span></span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"attr-item \">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"The ability to understand a concept and apply it to a real world example.\">\n            <h4>Application</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"5\"><span class=\"attr-value\">5</span></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"attr-item \">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"general awareness or possession of information, facts, and ideas\">\n              <h4>Knowledge</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"4\"><span class=\"attr-value\">4</span></span>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"attr-item \">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"extremely attentive to accuracy and detail\">\n              <h4>Thoroughness</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"1\"><span class=\"attr-value\">1</span></span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"attr-item \">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the capacity for understanding information fully.\">\n              <h4>Comprehension</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"attr-item\">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the ability to communicate effectively and appropriately with people of other cultures.\">\n              <h4 class=\"intercultural\">Intercultural Competence</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie intercultural\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"attr-item \">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the detailed mental examination of your own feelings, thoughts, and motives.\">\n              <h4>Introspection</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n              </div>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>";
  });

this["templates"]["profile/student/frames/badge"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"clearfix\">Badges</h1>\n<div class=\"inner-wrap\">\n  <div class=\"profile-categories badges\">\n    <ul>\n      <li class=\"code\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n      <li class=\"cool\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n      <li class=\"foxy\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n      <li class=\"hive clear\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n      <li class=\"thread\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n      <li class=\"fest\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n      <li class=\"karaoke\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n      <li class=\"network\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n      <li class=\"olympics\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n      <li class=\"thimble\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n    </ul>\n  </div>\n</div>";
  });

this["templates"]["profile/student/frames/grades"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"clearfix\">Grades</h1>\n<div class=\"inner-wrap\">\n  <div class=\"content-week-nav\">\n    <a class=\"arrow-left-grade\"><span class=\"icomoon icon-arrow-left\"></span></a>\n    <a class=\"arrow-right-grade\"><span class=\"icomoon icon-arrow-right\"></span></a>\n  </div>\n\n  <div class=\"weekly-content\">              \n    <div class=\"col-md-12\">\n      <div class=\"assignment-container active\">\n        <h2 class=\"active\">Week 1</h2>\n        <div class=\"grade-container col-md-6 box\" data-number=\"1\">\n          <h3 class=\"assignment-title\">Assignment 1: U.S. vs. China</h3>\n          <p class=\"assignment-description\">Write a one page essay about the differences between U.S. and Chinese School Systems.</p>\n          <p class=\"uplo4aded-assignment\"><strong>Your submission: </strong><a href=\"\"> US-vs-China.doc</a></p>\n          <p class=\"grade-display\"><span class=\"grade-label\">grade:</span> <span class=\"student-grade\">20/20</span></p>\n          <a href=\"#\" class=\"assignment_link block\" data-assignId=\"0\" data-assignType=\"assignment\">view assignment</a>\n        </div>\n        <div class=\"grade-container quiz col-md-6 box\" data-number=\"2\">\n          <h3 class=\"Quiz-title\">Quiz 1</h3>\n          <p class=\"grade-display\"><span class=\"grade-label\">grade:</span> <span class=\"student-grade\">20/20</span></p>\n          <a href=\"#\" data-assignId=\"0\" data-assignType=\"quiz\">review quiz</a>\n        </div>\n        <div class=\"clear\"></div>\n      </div>\n    </div>\n  </div>\n</div>";
  });

this["templates"]["profile/student/frames/help"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"clearfix\">Welcome</h1> \n<div class=\"inner-wrap\">\n  <div class=\"another-wrapper\">\n    <div class=\"profile-welcome\">\n      \n      <p class=\"intro\">Every week, you'll be given a mixture of articles, multimedia, and interactive games which will help guide you through understanding college life in America.  Throughout, you will develop attributes and achieve badges which will factor into your total grade.  In addition, you'll be given grades on assignments, class participation, and your achievements.</p>\n    </div>\n\n    <div class=\"content col-md-3 box\">\n      <h3>Content-types</h3>\n        <ul id=\"section_nav\" class=\"hidden-phone\">\n          <li>\n            <a class=\"weekItemLink assignment\" data-weekitem=\"0\" data-type=\"overview\" href=\"#weekItem0\">\n              <span class=\"item-icon icomoon icon-file activity\"></span><span class=\"hoverover\">assignment</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"weekItemLink article\" data-weekitem=\"1\" data-type=\"article\" href=\"#weekItem1\">\n              <span class=\"item-icon icomoon icon-book2 article\"></span><span class=\"hoverover\">article</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"weekItemLink game\" href=\"#weekItem2\">\n              <span class=\"item-icon icomoon icon-gamepad game\"></span><span class=\"hoverover\">game</span>\n            </a>\n          </li>\n          <li></li>\n      </ul>\n      <a class=\"welcome-link clear\">view all content types</a>\n    </div>\n\n    <div class=\"attributes col-md-3 col-md-offset-1 box\">\n      <h3>Attributes</h3>\n      <ul>\n        <li><span class=\"pie col-md-4\" data-value=\"4\"><span class=\"attr-value\">4</span></span>Self-Awareness</li>\n        <li><span class=\"pie col-md-4\" data-value=\"1\"><span class=\"attr-value\">1</span></span>Adaptation</li>\n        <li><span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>Attention to Detail</li>\n        \n      </ul>\n      <a class=\"welcome-link clear\">view all available attributes</a>\n    </div>\n\n    <div class=\"badges col-md-3 col-md-offset-1 box\">\n      <h3>Badges</h3>\n      <ul>\n        <li class=\"code\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"cool\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"foxy\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"hive clear\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"thread\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"fest\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"karaoke\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"network\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"olympics\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"thimble\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n      </ul>\n      <p class=\"clear welcome-link\"><a>view all available badges</a></p>\n    </div>\n    \n    <div class=\"set-up-profile clear\">\n      <p>Next: <a>Set-up your Profile</a></p>\n    </div>\n\n    <div class=\"full-width center profile-link\">\n      <a href=\"#\" id=\"dock_button\"><span class=\"clear glyphicon glyphicon-arrow-down\"></span></a>\n    </div>\n  </div>\n</div>";
  });

this["templates"]["profile/student/frames/journal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"clearfix\">Journals</h1>\n<div class=\"inner-wrap\">\n  <div class=\"another-wrapper\">\n    <div class=\"content-week-nav\">\n      <a class=\"arrow-left-grade\"><span class=\"icomoon icon-arrow-left\"></span></a>\n      <a class=\"arrow-right-grade\"><span class=\"icomoon icon-arrow-right\"></span></a>\n    </div>\n    <h2>Week 1</h2>\n    <div class=\"journal-entry paper\" data-entry-number=\"1\">\n      <time>01.23.2014</time>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum amet esse blanditiis illum debitis rem in libero laudantium, delectus alias autem deserunt possimus animi voluptate, exercitationem! Cumque in reiciendis illo!  sLorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tenetur doloribus minima rem ab id dolorum neque expedita nostrum dignissimos fugiat fuga quia repellat perferendis dicta, dolores corporis laborum aspernatur.</p>\n    </div>\n\n    <div class=\"journal-entry paper\" data-entry-number=\"2\">\n      <time>02.21.2014</time>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum amet esse blanditiis illum debitis rem in libero laudantium, delectus alias autem deserunt possimus animi voluptate, exercitationem! Cumque in reiciendis illo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa consequuntur officia officiis nam nihil numquam eos fugit ab vitae inventore? Illum consequuntur obcaecati explicabo tenetur laudantium, praesentium, et magnam aut.</p>\n    </div>\n\n    <div class=\"journal-entry paper\" data-entry-number=\"3\">\n      <time>03.03.2014</time>\n      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum amet esse blanditiis illum debitis rem in libero laudantium, delectus alias autem deserunt possimus animi voluptate, exercitationem! Cumque in reiciendis illo!  sLorem ipsum dolor sit amet, consectetur adipisicing elit. Ex tenetur doloribus minima rem ab id dolorum neque expedita nostrum dignissimos fugiat fuga quia repellat perferendis dicta, dolores corporis laborum aspernatur.</p>\n    </div>\n    <div class=\"reload-container\"><button class=\"btn btn-primary reload\"><span class=\"icon-refresh\"></span>Reload Journals</button></div>\n  </div>\n</div>";
  });

this["templates"]["profile/student/frames/profile"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"profile-welcome clearfix\">Student Profile</h1>\n<div class=\"inner-wrap\">\n  <div class=\"profile-pic col-md-3 box\">\n    <h3>Warren Longmire</h3>\n    <div class=\"avatar\">\n      <div class=\"avatar-container\">\n      </div>\n      <a class=\"edit-avatar\">Change Avatar</a>\n      <img src=\"../images/avatar.png\" class=\"avatar\">\n    </div>\n    <div class=\"myers-briggs\"><h4>Myers-Briggs:</h4><h4>INTJ</h4></div>\n  </div>\n\n  <div class=\"profile-categories student-progress col-md-9\">\n    \n    <div class=\"progress-wrap\">\n      <div id=\"calendar\">\n        <div id=\"calendar-inner\">\n          <h3 class=\"title\">Week</h3>\n          <span class=\"week\">3</span>\n        </div>\n      </div>\n      <div class=\"progress-box box col-md-8 pull-right\">\n        <h3>Percent Completed</h3>\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"21\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 21%;\">\n            <span class=\"sr-only\">21%</span>\n          </div>\n          <span class=\"glyphicon glyphicon-bell\"></span>\n        </div>\n      \n      <p class=\"current-week\">You are currently in <label for=\"student-progress\">Week 3</label> of 15</p>\n\n      <div class=\"last-lesson clear\">\n        <label for=\"last-lesson\">Last Lesson Completed</label>\n        <ul id=\"section_nav\" class=\"hidden-phone\">\n        <li class=\"game clear\">\n          <a href=\"\"><span class=\"icomoon icon-gamepad clear\"></span><span class=\"hoverover\">game: Let's go to school!</span></a>\n        </li>\n        </ul>\n      </div>\n    </div>\n      <a href=\"\" class=\"moreButton\">Proceed to Week 3<span class=\"glyphicon glyphicon-play\"></span></a>\n    </div>\n  </div>\n</div>";
  });

this["templates"]["profile/student/frames/progress"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1 class=\"clearfix\">Progress</h1>\n<div class=\"inner-wrap\">\n  <div class=\"profile-categories badges\">\n    <div class=\"content-week-nav\">\n      <a class=\"arrow-left-grade\"><span class=\"icomoon icon-arrow-left\"></span></a>\n      <a class=\"arrow-right-grade\"><span class=\"icomoon icon-arrow-right\"></span></a>\n    </div>\n    <div class=\"week-progress\">\n      <h2>Week 1</h2>\n      <div class=\"completed circle box\">\n        <p class=\"big\">9/10</p>\n        <p>items complete</p>\n      </div>\n      <a href=\"\" class=\"moreButton box\">go to week 1</a>\n    </div>\n    <div class=\"week-progress\">\n      <h2>Week 2</h2>\n      <div class=\"completed circle box active\">\n        <p class=\"big\">2/10</p>\n        <p>items complete</p>\n      </div>\n      <a href=\"\" class=\"moreButton box\">go to week 2</a>\n    </div>\n    <div class=\"week-progress\">\n      <h2>Week 3</h2>\n      <div class=\"completed circle box\">\n        <p class=\"big\">0/10</p>\n        <p>items complete</p>\n      </div>\n      <a href=\"\" class=\"moreButton box\">go to week 3</a>\n    </div>\n\n  </div>\n</div>";
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
  buffer += "\">\n	<span class=\"item-icon icomoon icon-";
  if (helper = helpers.glyph) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.glyph); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></span><span class=\"hoverover\">";
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
  


  return "<div class=\"container-fluid\">\n  <div id=\"main-content\" data-spy=\"scroll\" data-target=\"#section_nav\">\n  	\n  </div>\n  <nav id=\"content-cycle\">\n        <ul>\n          <li><a href=\"\" class=\"cycle-up\"></a></li>\n          <li><a href=\"\" class=\"cycle-down\"></a></li>\n        </ul>\n      </nav>\n</div>";
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
  


  return "<h1>Article</h1>\n<div class=\"inner-wrap\">\n\n<div class=\"articleItem another-wrapper box\" data-id=\"0\">\n<p>\nEnrollment at American colleges is sliding, but competition for spots at top universities is more cutthroat and anxiety-inducing than ever. In the just-completed admissions season, Stanford University accepted only 5 percent of applicants, a new low among the most prestigious schools, with the odds nearly as bad at its elite rivals.\nDeluged by more applications than ever, the most selective colleges are, inevitably, rejecting a vast majority, including legions of students they once would have accepted. Admissions directors at these institutions say that most of the students they turn down are such strong candidates that many are indistinguishable from those who get in.\n</p>\n\n\n<p>\nIsaac Madrid applied to 11 colleges, a scattershot approach that he said is fairly typical at his private high school, Bellarmine College Preparatory in San Jose, Calif. Students there are all too aware of the long odds against getting into any particular elite university. “It was a crazy amount of work and stress doing all those essays by the deadline and keeping up my schoolwork, and waiting on the responses, and we had more than $800 in application fees,” he said.\n</p>\n\n<p>\nMr. Madrid, 18, got a taste of how random the results can seem. He was among the 95 percent turned away by Stanford, but he got into Yale, which he plans to attend, and he admitted having no real insight into the reasons for either decision.\nBruce Poch, a former admissions dean at Pomona College in Claremont, Calif., said he saw “the opposite of a virtuous cycle at work” in admissions. “Kids see that the admit rates are brutal and dropping, and it looks more like a crapshoot,” he said. “So they send more apps, which forces the colleges to lower their admit rates, which spurs the kids next year to send even more apps.”\n</p>\n\n<p>\nFor most of the past six decades, overall enrollment boomed, while the number of seats at elite colleges and universities grew much more slowly, making them steadily more selective. Enrollment peaked in 2011, and it has dropped a bit each year since then, prompting speculation that entry to competitive colleges would become marginally easier. Instead, counselors and admissions officers say, the pool of high-achieving applicants continues to grow, fed partly by a rising number from overseas.\n</p>\n\n<p>\nAt the same time, students send more applications than they once did, abetted by the electronic forms that have become nearly universal and uniform applications that can make adding one more college to the list just a matter of a click. Seven years ago, 315 colleges and universities accepted the most widely used form, the Common Application; this year, 517 did.\n</p>\n\n<p>\nStudents applying to seven or more colleges made up just 9 percent of the applicant pool in 1990, but accounted for 29 percent in 2011, according to surveys by the National Association for College Admission Counseling, and counselors and admissions officers say they think the figure has gone higher still. While people have lavished attention on a Long Island teenager who was accepted by all eight Ivy League colleges, admissions professionals say it is remarkable that anyone would apply to all eight.\n</p>\n\n<p>\nThe University of California, Los Angeles, the national leader in applications, had more than 86,000 requests — twice as many as in 2005 — for space in a first-year class of about 6,000, and it also received 19,000 applications to transfer from other colleges and universities. This year, for the first time, the admission rate for first-year applicants at U.C.L.A. and the University of California, Berkeley, could drop below 20 percent.\n</p>\n\n<p>\nStudents at Yale University last spring. A generation ago, it was rare for even highly competitive colleges to offer places to fewer than 20 percent of their applicants. CreditChristopher Capozziello for The New York Times\n“For most kids, this really used to be a regional process, but they have access to so much information online now, so every school seems local,” said Richard H. Shaw, the dean of undergraduate admission at Stanford. Admissions directors at several top Eastern colleges agreed, saying that they now received more applications from California than any other state, which would have been unthinkable a few years ago.\n</p>\n\n<p>\n“One of the ways that colleges are measured is by the number of applicants and their admit rate, and some colleges do things simply to increase their applicant pool and manipulate those numbers,” said Christoph Guttentag, the dean of undergraduate admission at Duke.\n</p>\n\n<p>\nA generation ago, it was rare for even highly competitive colleges to offer places to fewer than 20 percent of their applicants. In 2003, Harvard and Princeton drew exclamations of dismay (from prospective applicants), envy (from other colleges) and satisfaction (from those they accepted) when they became the first top universities to have their admission rates dip below 10 percent. Since then, at least a dozen have gone below that threshold.\n</p>\n\n<p>\nThis was the second year in a row that Stanford had the worst odds of admission among top colleges, a title that in previous years was usually claimed by Harvard. This year, by the April 1 deadline for most colleges to send admission notices, Harvard and Yale had accepted about 6 percent of applicants, Columbia and Princeton about 7 percent, and the Massachusetts Institute of Technology and the University of Chicago about 8 percent. (Some rates will increase by a few tenths of a percentage point as colleges accept small numbers of applicants from waiting lists.)\n</p>\n\n<p>\nSeveral universities, including Stanford, Duke, Northwestern, Cornell and the University of Pennsylvania, had admission rates this year that were less than half of those from a decade ago. The University of Chicago’s rate plummeted to a little over 8 percent, from more than 40 percent.\n</p>\n\n<p>The most competitive small colleges draw comparably accomplished applicants, but far fewer of them relative to their size, so their admission rates are higher. Even so, the acceptance rates at Pomona, Amherst, Harvey Mudd, Bowdoin, Claremont McKenna, Swarthmore, Middlebury, Williams and others were between 10 and 20 percent this year.\nMr. Shaw, the Stanford dean, said he could not predict where the rates would bottom out — in fact, he never expected them to go as low as they have. “Honestly,” he said, “I’m sort of in shock.”</p>\n\n</div>\n\n<div class=\"articleItem another-wrapper box\" data-id=\"1\">\n<p>Picking the Right School</p>\n \n<p>What is the point of going to a very expensive Ivy League school to get your undergraduate degree when you know that you are going to get your master's degree when you're done? I would like to go to Dartmouth, but I have a full scholarship to the University of Florida, so maybe I should go there and go to Dartmouth for my MBA. What is your opinion?</p>\n\n<p>Ivy League schools offer students great education and prestige. Many students find these schools attractive because they are selective, and because a degree from such a school is impressive on a job application. Yet there are great schools all over the country that offer a wonderful education and are easier to get into. And, as you know, public schools such as the University of Florida are more affordable.</p>\n\n<p>The best way to decide what school is best for you is to consider all the angles. Ask yourself: \"What schools offer strong programs in my major? How important is cost and will this scholarship make life easier for me in the future? Do I want to be close to home or further away on my own? What kind of college life is there?\"</p>\n\n<p>Do you prefer a large or small school? Would you be more comfortable in a traditional campus not close to a major city, or do you prefer to be in a large city? Are you looking for a certain student mix in terms of gender, religion, race, etc.? All of these questions play a major role in the college decision. You are right—if you choose to attend the University of Florida, you can always pursue a master's degree at Dartmouth or at another big-name school. But try not to think too far ahead. Base your decision on what each school can do for you right now as you pursue your bachelor’s degree.</p>\n\n<p>I'm interested in a lot of different colleges and don't know which one I want to choose. Please help.</p>\n<p>The best way to narrow down which colleges are best for you is to first ask yourself several general questions about college:</p>\n\n<ul>\n<li>What am I interested in pursuing as a major?</li>\n<li>What schools offer strong programs in my major?</li>\n<li>How important is cost, and will scholarships be available at this school?</li>\n<li>Do I want to live at home or on campus?</li>\n<li>Do I want to be close to home or further away on my own?</li>\n<li>Will I be more comfortable at a large university or a small private college?</li>\n<li>Are my grades and test scores sufficient for acceptance?</li>\n\n<p>Once you’ve answered each of these questions, make a list of the colleges you are considering and decide which ones best fit the criteria set by your answers.</p>\n\n<p>The next step is to get specific information from each school left on the list. You may contact the schools directly or visit their websites to request catalogs, viewbooks, brochures, and anything else you think might aid the decision-making process.</p>\n\n<p>Finally, once you’ve narrowed the list down again, schedule campus visits to the schools you are still interested in. You can schedule a tour, see a dorm room, and perhaps even sit on a class. Many students base their final decision on a really good a campus visit. Then, once you’ve chosen the perfect school, begin the admissions process. Follow this process and you should have no trouble (or at least less trouble!) choosing the right school for you.</p>\n\n<p>I am a junior. I eventually want to attend Harvard Medical School, and a friend of the family (a physician) said I should definitely try to get into Harvard for undergraduate work because those students have a better chance of being accepted into the med school. Is that true (not only for Harvard but for most med schools)? My high school counselor says if my grades, activities and MCAT scores are great in college, it won't matter where I get my undergrad degree.\nTo a certain degree, both your counselor and your family friend are correct. Schools like Harvard do always select a few of their own schools for their graduate programs, but to be one of the students their medical school takes, you’ll need to be one of the top students in your college class.</p>\n\n<p>Your counselor is correct, because if you work hard and excel at any school, medical schools will want you in their incoming class. So, if you want to be a doctor, don’t worry too much about whether you get into Harvard for undergraduate work. There are many fine schools...and in determining the right place for you, you should take into account not only academic reputation, but also factors such as financial aid availability, size, location, student body mix, social life and clubs and activities. Ultimately, the school where you are the happiest is the one that will give you the most satisfying college experience...and will also be the one where you’re most likely to excel well enough to get into medical school.</p>\n\n<p>Ultimately, both are correct, because both are saying that medical schools like Harvard want the best students. However, don’t get too hung up on going just to Harvard Medical School, as there are many other excellent medical schools and you’ll become a doctor if you go through any of them. So apply to a wide range to colleges, Harvard included, and work really hard in college. Then, whether you go to Harvard or somewhere else, you should be in a good position to get into a great medical school. Good luck!</p>\n\n<p>My son is awaiting  decisions on colleges he has applied to. In addition, he has wanted to go on to medical school for years now. So far he has heard early from two schools: University of Connecticut, where he has received a very nice scholarship, and Brandeis, but with no scholarship. Assuming we may see a mix of acceptances, with and without scholarship, from other private and public schools of different rankings, is it worth the higher cost for the higher-ranked schools vs. accepting (happily on our part) the scholarship at the other schools? It has been my contention that one is better off doing well in whatever school you attend, including on the MCAT, and that the pressure may be less in some of the \"less competitive\" schools (the big fish, small pond theory), especially when we are talking about all respectable schools. Do you agree, or am I letting the dollars sway my thinking? Thanks very much for your thoughts!\nFirst, congratulations on your son’s acceptances. You should be very proud. </p>\n\n<p>Personal finances and your ability and willingness to pay more for a school are subjective and something I can’t fairly comment on. That said, while it probably isn’t worth going to the higher ranked school just to get your son into medical school (since that decision won’t be based necessarily on tougher competition), you should consider factors other than rankings when helping your son choose a school: among these: the school’s strength in your son’s intended major, the strength of the school’s premed program (if they have one, and if not, the quality of their science offerings), financial aid/scholarships (I know your son has gotten a scholarship from UConn, but he may get similar offers from other schools as well), student life (such as clubs, activities, athletics, etc.), the student mix (such as male/female ratio, religious and political leanings and socioeconomics of the student body), location, and size.</p>\n\n<p>Your son may also want to consider the breadth and quality of other majors offered at the school just in case he decides not to go to medical school or if he decides to major in something considered “nontraditional” for premed students.</p>\n\n<p>So what you need to figure out is what, if anything, you’re willing and able to pay for your son’s education and finding a school within these financial means where your son is going to be happy. After all, if he’s happy, he’s more likely to do well in school. Good luck!</p>\n\n<p>I have recently been admitted to Mississippi State University and to the University of Tennessee at Chattanooga. Right now I would like to study meteorology. Mississippi State has a great meteorology program, and it's the closest meteorology school to my home. I have been on campus, and I really love the atmosphere there. However, all of my best friends that I've known my entire life are going to Chattanooga. I can't imagine life without them, and I know we would have an amazing college experience together. I figure if I go to UT-Chatt, then I could study something in the medical field, since I am also interested in this. Both scholarship amounts I would receive from each school are about the same. </p>\n\n<p>So I really don't know which to choose. Can you help me?</p>\n\n<p>Thanks for this question. I have been thinking about it for a little while, and I have decided that instead of giving you an answer, I'm going to ask you two questions in return.</p>\n\n<ol>\n<li>If you decide to go to Chattanooga with your friends, it's possible that your group will start to drift apart a little (after all, the college atmosphere is different, and young adults tend to change the most in college). Will you still feel as though you will have a good college experience there, or will you feel resentful for going there and wish you had gone to Mississippi State? </li>\n\n<li>How much do you care about studying meteorology? Do you believe it is something you are completely passionate about, or do you feel about the same about it as you might a different program of study?</li>\n</ol>\n\n<p>I encourage you to think about these questions, think about what your expectations are at present for college, think about what you value most, and talk to your friends and adult mentors about this dilemma. I wish you wisdom in your decision-making.</p>\n\n<p>My son is a senior far away from his family at boarding school. Working in an architectural office this summer made him interested in architecture and industrial design. The problem is that all his art classes from middle school on had to do with music, and he has no works for his portfolio. He signed up for a drawing class now and his art teacher seems excited by his work. Will he be effected with a sort of \"thin\" portfolio? Secondly, he and his adviser put some schools on his list like Virginia Tech in Blacksburg. We decided that because of his limited preparation in arts, but also as a practical advantage in the job world, he should go for schools with a technical approach and not completely arty. Would Virginia Tech be recommended? What sites are available that give you insights to colleges (other than the facts on schools own websites)? Thank you very much for your help.\nIf you want more recommendations, I'd suggest you seek information from objective resources like architectural firms themselves. If you know of architects, ask them from which schools their firms frequently pull graduates. Also check outArchitect Magazine online. It offers a wide variety of resources to aspiring architects, including its ranking of best architecture schools.</p>\n\n<p>Also check with your son to see what aspects of architecture he is specifically loving. Is it the artistic aspect of creating something original in 3-dimensional form? Or is he more drawn to the technical and mathematical aspects of architecture? It doesn't hurt to keep the options open; an art school isn't out of the question quite yet just because of his \"limited preparation\" as you mentioned.</p>\n\n<p>In addition, find out what specific kind of architecture your son likes. There are so many branches of architecture (for example, you mentioned Virginia Tech--it's actually ranked number 1 currently in landscape architecture). Does your son like modern architecture? restoration architecture of old buildings? garden and outdoor parks architecture? Do a little research. Google is going to be your best friend on this journey.</p>\n\n<p>Also, I wouldn't worry about your son's \"thin\" portfolio just yet. But make sure to gather what you've got. Be absolutely sure to mention his work in an architectural office when he starts applying to schools.</p>\n\n<p>And I would bet he still has time to put together some quality pieces, artistic or otherwise. He should talk to the industrial tech and art teachers at his schools to see whether he could work on some specialized architectural design pieces on an independent basis. Or he could ask the firm he worked at to help in more depth with some of their projects on an apprentice sort of basis. Chances are, if he really does want to do this, he'll love putting together that kind of work for his portfolio anyway.</p>\n</div>\n\n</div>\n\n<div class=\"articleItem another-wrapper box\" data-id=\"2\">\n	<h2 class=\"subheading\">These are the instructions for you to register with CFNC and access the Learn About Yourself page:</h2>\n	<ul>\n		<li>Go to: https://www.cfnc.org/index.jsp</li>\n		<li>Create your own CFNC Account: https://www1.cfnc.org/Home/Create_an_Account/Create_an_Account.aspx</li>\n	</ul>\n	* \n	* Create your own CFNC Account: https://www1.cfnc.org/Home/Create_an_Account/Create_an_Account.aspx\n	* Follow the instructions. Once logged in, click on Plan: https://www1.cfnc.org/Plan/_default.aspx\n	* Scroll down and click on Learn About Yourself: https://www1.cfnc.org/Plan/For_A_Career/Learn_About_Yourself/_default.aspx\n	* Complete the surveys by creating an AchieveWorks login: https://www.humanesources.com/happ/login.php?url=218919\n</div>";
  });

this["templates"]["weekExplorer/week/frames/articleLink"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<h1>Article</h1>\n<div class=\"inner-wrap\">\n	<div class=\"another-wrapper\">\n		<h2 class=\"subheading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n		<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructions)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n		<a class=\"moreButton\" href=\"";
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
  buffer += "\n		 </ul>\n	    <textarea placeholder=\"\"></textarea>\n    </div>\n</div>";
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
  buffer += "</h2>\n		<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructions)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n\n		<ol class=\"objectives\">\n	      ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.instructionList), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	    </ol>\n\n	    <textarea placeholder=\"\"></textarea>\n    </div>\n	\n</div>";
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
  buffer += "\n	    </ol>\n	    \n		<textarea name=\"\" id=\"\" cols=\"20\" rows=\"13\"></textarea>\n		    <button type=\"submit\" class=\"btn btn-large btn-primary\">Submit</button>\n		    <span class=\"space\">OR</span>\n		    <a href=\"\" class=\"upload\">Upload a text file</a>\n	</div>\n</div>";
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
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

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

function program5(depth0,data) {
  
  var buffer = "";
  buffer += "\n          <li class=\""
    + escapeExpression((typeof depth0 === functionType ? depth0.apply(depth0) : depth0))
    + "\"><a class=\"badge\"></a></li>\n        ";
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
  buffer += "\n      </ol>\n\n    <h3>Badges Available:</h3>\n    <div class=\"badges\">\n      <ul>\n        ";
  stack1 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.badges), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      </ul>\n    </div>\n  </div>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/quiz"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<h1>Quiz</h1>\n<div class=\"inner-wrap\">\n\n<div class=\"quizItem\" data-id=\"0\">\n	<h2 class=\"subHeading\">Quiz 1</h2>\n	<form>\n		<label for=\"male\">Question 1</label><br/>\n		<input type=\"radio\" name=\"q1\" data-correct=\"true\" value=\"a1\">A1<br>\n		<input type=\"radio\" name=\"q1\" value=\"a2\">A2<br>\n		\n		<label for=\"male\">Question 2</label><br/>\n		<input type=\"radio\" name=\"q1\" data-correct=\"true\" value=\"a1\">A1<br>\n		<input type=\"radio\" name=\"q1\" value=\"a2\">A2<br>\n		<input type=\"submit\" value=\"Submit\">\n	</form>\n</div>\n\n<div class=\"quizItem\" data-id=\"1\">\n	<h2 class=\"subHeading\">Quiz 2</h2>\n	<form>\n		<label for=\"male\">Question 1a</label><br/>\n		<input type=\"radio\" name=\"q1\" data-correct=\"true\" value=\"a1\">A1<br>\n		<input type=\"radio\" name=\"q1\" value=\"a2\">A2<br>\n		\n		<label for=\"male\">Question 2a</label><br/>\n		<input type=\"radio\" name=\"q1\" data-correct=\"true\" value=\"a1\">A1<br>\n		<input type=\"radio\" name=\"q1\" value=\"a2\">A2<br>\n		<input type=\"submit\" value=\"Submit\">\n	</form>\n</div>\n\n</div>";
  });

this["templates"]["weekExplorer/week/frames/video"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h1>Video</h1>\n<div class=\"inner-wrap\">\n    <h2 class=\"sub\">";
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
  buffer += "</h2>\n</div>\n";
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
  if (helper = helpers.active) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.active); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.template)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-weekItem=\"";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" data-type=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.template)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#weekItem";
  if (helper = helpers.index) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.index); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n<span class=\"item-icon icomoon icon-";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.template)),stack1 == null || stack1 === false ? stack1 : stack1.glyph)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"></span><span class=\"hoverover\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</span>\n</a>";
  return buffer;
  });

this["templates"]["weekExplorer/week/sidebarList"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container-fluid\">\n	<nav id=\"sidetop\">\n	  <a href=\"#\" class=\"arrow\" data-direction=\"left\"><span class=\"glyphicon glyphicon-circle-arrow-left\"></span></a>\n	  <h2>Week <span id=\"week_number\"></span></h2>\n	  <a href=\"#\" class=\"arrow\" data-direction=\"right\"><span class=\"glyphicon glyphicon-circle-arrow-right\"></span></a>\n	</nav>\n\n	<ul id=\"section_nav\" class=\"hidden-phone\">\n	</ul>\n</div>";
  });

this["templates"]["weekExplorer/week/weekTop"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"";
  stack1 = ((stack1 = (depth0 && depth0.active)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " week-link-listitem\" data-weekId=\"";
  stack1 = ((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n          <a class=\"week-link\" data-week=\"";
  stack1 = ((stack1 = (depth0 && depth0.weekId)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\">";
  stack1 = ((stack1 = (depth0 && depth0.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</a>\n        </li>\n      ";
  return buffer;
  }

  buffer += "<div class=\"topnav full\">\n    <ul class=\"horiz-nav\" role=\"navigation\" aria-label=\"week links\">\n      ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.weeks), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    <a class=\"expand-horiz\" aria-expanded=\"false\"></a>\n</div>";
  return buffer;
  });