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
  


  return "<div class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container-fluid inner-wrap\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle pull-right\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" aria-haspopup=\"true\" aria-hidden=\"true\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n\n      <a class=\"navbar-brand logo replace hidden-phone\" href=\"#\">Duke University</a>\n      \n    </div>\n\n    <!-- <p class=\"tagline\">A Student's Journey</p> -->\n    <div class=\"navbar-collapse collapse\" role=\"navigation\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#profile/student\">Dashboard</a></li>\n        <li><a href=\"#week\">Coursework</a></li>\n        <li><a href=\"#admin/teacher\">Admin</a></li>\n        <li><a href=\"#\" class=\"logout_button\">Logout</a></li>\n      </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</div>";
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
  


  return "<div class=\"content\">\n    \n	<div class=\"container-fluid\">\n\n		<div class=\"login-logo\">\n	        <a href=\"\" class=\"logo replace\">Duke University</a>\n	        <p class=\"tagline\">A Student's Journey</p>\n\n\n    	    <div id=\"login_alert\">Not a correct username/password combination</div>\n      	</div>\n\n	    <div class=\"username\">\n	        <input type=\"text\" id=\"username_input\" placeholder=\"username\" aria-label=\"user name\" aria-required=\"true\" required autofocus>\n	    </div>\n	    <div class=\"password\">\n	        <input type=\"password\" id=\"password_input\" placeholder=\"password\" aria-label=\"password\" aria-required=\"true\" required>\n	    </div>\n\n	    <button class =\"btn btn-primary btn-login\" type=\"submit\">Log In</button>\n		\n	</div>\n</div>";
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
  


  return "<h1 class=\"clearfix\">Attributes</h1>\n<div class=\"inner-wrap\">\n  <div class=\"profile-categories attributes\">\n      <div class=\"progress-wrap\">\n        <div class=\"one\">\n          <div class=\"attr-item \">\n            <div class=\"box\"  data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Process of learning something: the fact or process of finding out about something for the first time\">\n            <h4>Exploration</h4> \n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"4\"><span class=\"attr-value\">4</span></span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"two clear\">\n          <div class=\"attr-item \">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the ability to be precise and avoid errors\">\n              <h4>Accuracy</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"1\"><span class=\"attr-value\">1</span></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"attr-item\">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"careful thought, especially the process of reconsidering previous actions, events, or decisions\">\n              <h4>Reflection</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n              </div>\n            </div>\n          </div>\n          <div class=\"attr-item \">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-  item\" title=\"the examination of something in detail in order to understand it better or draw conclusions from it\">\n              <h4>Analysis</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"2\"><span class=\"attr-value\">2</span></span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"attr-item \">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"The ability to understand a concept and apply it to a real world example.\">\n            <h4>Application</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"5\"><span class=\"attr-value\">5</span></span>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"three\">\n          <div class=\"attr-item \">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"general awareness or possession of information, facts, and ideas\">\n              <h4>Knowledge</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"4\"><span class=\"attr-value\">4</span></span>\n              </div>\n            </div>\n          </div>\n\n\n          <div class=\"attr-item \">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"extremely attentive to accuracy and detail\">\n              <h4>Thoroughness</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"1\"><span class=\"attr-value\">1</span></span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"attr-item \">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the capacity for understanding information fully.\">\n              <h4>Comprehension</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"attr-item\">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the ability to communicate effectively and appropriately with people of other cultures.\">\n              <h4 class=\"intercultural\">Intercultural Competence</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie intercultural\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"attr-item \">\n            <div class=\"box\" data-toggle=\"tooltip\" class=\"attribute-item\" title=\"the detailed mental examination of your own feelings, thoughts, and motives.\">\n              <h4>Introspection</h4>\n              <div class=\"col-md-12\">\n                <span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
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
  


  return "<h1 class=\"clearfix\">Welcome</h1> \n<div class=\"inner-wrap\">\n  <div class=\"another-wrapper\">\n    <div class=\"profile-welcome\">\n      \n      <p class=\"intro\">Every week, you'll be given a mixture of articles, multimedia, and interactive games which will help guide you through understanding college life in America.  Throughout, you will develop attributes and achieve badges which will factor into your total grade.  In addition, you'll be given grades on assignments, class participation, and your achievements.</p>\n    </div>\n\n    <div class=\"content col-md-3 box\">\n      <h3>Content-types</h3>\n        <ul id=\"section_nav\" class=\"hidden-phone\">\n          <li>\n            <a class=\"weekItemLink assignment\" data-weekitem=\"0\" data-type=\"overview\" href=\"#weekItem0\">\n              <span class=\"item-icon icomoon icon-file activity\"></span><span class=\"hoverover\">assignment</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"weekItemLink article\" data-weekitem=\"1\" data-type=\"article\" href=\"#weekItem1\">\n              <span class=\"item-icon icomoon icon-book2 article\"></span><span class=\"hoverover\">article</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"weekItemLink game\" href=\"#weekItem2\">\n              <span class=\"item-icon icomoon icon-gamepad game\"></span><span class=\"hoverover\">game</span>\n            </a>\n          </li>\n          <li></li>\n      </ul>\n      <a class=\"welcome-link clear\">view all content types</a>\n    </div>\n\n    <div class=\"attributes col-md-3 col-md-offset-1 box\">\n      <h3>Attributes</h3>\n      <ul>\n        <li><span class=\"pie col-md-4\" data-value=\"4\"><span class=\"attr-value\">4</span></span><span class=\"pie-mask\"></span>Self-Awareness</li>\n        <li><span class=\"pie col-md-4\" data-value=\"1\"><span class=\"attr-value\">1</span></span><span class=\"pie-mask col-md-4\"></span>Adaptation</li>\n        <li><span class=\"pie\" data-value=\"3\"><span class=\"attr-value\">3</span></span><span class=\"pie-mask\"></span>Attention to Detail</li>\n        \n      </ul>\n      <a class=\"welcome-link clear\">view all available attributes</a>\n    </div>\n\n    <div class=\"badges col-md-3 col-md-offset-1 box\">\n      <h3>Badges</h3>\n      <ul>\n        <li class=\"code\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"cool\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"foxy\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"hive clear\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"thread\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"fest\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"karaoke\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"network\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"olympics\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n        <li class=\"thimble\"><a href=\"\" class=\"badge\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Lorem Ipsum Dolor Sit Amet.\"></a><a href=\"\" class=\"shadow\"></a></li>\n      </ul>\n      <p class=\"clear welcome-link\"><a>view all available badges</a></p>\n    </div>\n    \n    <div class=\"set-up-profile clear\">\n      <p>Next: <a>Set-up your Profile</a></p>\n    </div>\n\n    <div class=\"full-width center profile-link\">\n      <a href=\"#\" id=\"dock_button\"><span class=\"clear glyphicon glyphicon-arrow-down\"></span></a>\n    </div>\n  </div>\n</div>";
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
  


  return "<div class=\"container-fluid\">\n  <div id=\"main-content\" data-spy=\"scroll\" data-target=\"#section_nav\">\n  	<nav id=\"content-cycle\">\n        <ul>\n          <li><a href=\"\" class=\"cycle-up\"></a></li>\n          <li><a href=\"\" class=\"cycle-down\"></a></li>\n        </ul>\n      </nav>\n  </div>\n</div>";
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
  var buffer = "", stack1, functionType="function";


  buffer += "<h1>Article</h1>\n<div class=\"inner-wrap\">\n	<h2 class=\"sub\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n    <p class=\"synopsis\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.synopsis)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n    <div id=\"article_text\">\n    	";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.text)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n</div>";
  return buffer;
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
  buffer += "\n	    </ol>\n    </div>\n	<script type=\"text/javascript\" src=\"http://9td6qf194y.embed.talkiforum.com/embed/1.js\"></script><div style=\"font-size:80%; text-align:center;\" id=\"9td6qf194yt4lk1prm0\">get your own <a href=\"http://talkiforum.com?utm_source=install&utm_medium=link&utm_campaign=get_your_own\">embeddable forum</a> with Talki</div>\n</div>";
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


  buffer += "<h1>Game</h1>\n<div class=\"inner-wrap\">\n	<div class=\"game-wrap\">\n		<h2 class=\"subheading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n		<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n		<a class=\"show-game\" data-id=\"";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\" href=\"#\">Play</a>\n	</div>\n</div>";
  return buffer;
  });

this["templates"]["weekExplorer/week/frames/image"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function";


  buffer += "<h1>Big Image:</h1>\n<div class=\"inner-wrap\">\n	<img src=\"http://dummyimage.com/640x4:3\">\n	<p>";
  if (helper = helpers.caption) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.caption); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
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
  


  return "<h1>Links</h1>\n<div class=\"inner-wrap\">\n  <h2 class=\"subheading\">Why and how you should develop a list of schools that fit you.</h2>\n  <ol>\n    <li><a href=\"http://admissions.duke.edu/application/overview\">Who We are Looking For</a></li>\n    <li><a href=\"http://studentaffairs.duke.edu/career-planning\">International Application</a></li>\n    <li><a href=\"http://studentaffairs.duke.edu/campuslife\">Career Planning</a></li>\n    <li><a href=\"http://admissions.duke.edu/application/checklist\">Campus Life</a></li>\n    <li><a href=\"http://studentaffairs.duke.edu/ihouse\">International House</a></li>\n    <li><a href=\"http://admissions.duke.edu/application/checklist\">Campus Life</a></li>\n    <li><a href=\"http://studentaffairs.duke.edu/\">Student Affair</a></li>\n    <li><a href=\"http://admissions.duke.edu/ \">Admissions</a></li>\n  </ol>\n</div>";
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
    + "\"></li>\n        ";
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
  


  return "<h1>Quiz</h1>\n<div class=\"inner-wrap\">\n<form id=\"form_859947\" class=\"appnitro\" enctype=\"multipart/form-data\" method=\"post\" action=\"\">\n	<div class=\"form_description\">						\n	<ul>\n		<li id=\"li_3\" >\n			<label class=\"description\" for=\"element_3\">Checkboxes </label>\n			<span>\n			<input id=\"element_3_1\" name=\"element_3_1\" class=\"element checkbox\" type=\"checkbox\" value=\"1\" />\n			<label class=\"choice\" for=\"element_3_1\">First option</label>\n			<input id=\"element_3_2\" name=\"element_3_2\" class=\"element checkbox\" type=\"checkbox\" value=\"1\" />\n			<label class=\"choice\" for=\"element_3_2\">Second option</label>\n			<input id=\"element_3_3\" name=\"element_3_3\" class=\"element checkbox\" type=\"checkbox\" value=\"1\" />\n			<label class=\"choice\" for=\"element_3_3\">Third option</label>\n\n			</span> \n		</li>\n\n		<li id=\"li_1\" >\n			<label class=\"description\" for=\"element_1\">Text </label>\n			<div>\n			<input id=\"element_1\" name=\"element_1\" class=\"element text medium\" type=\"text\" maxlength=\"255\" value=\"\"/> \n			</div> \n		</li>\n\n		<li id=\"li_2\" >\n			<label class=\"description\" for=\"element_2\">Upload a File </label>\n			<div>\n				<input id=\"element_2\" name=\"element_2\" class=\"element file\" type=\"file\"/> \n			</div>  \n		</li>\n\n		<li id=\"li_4\" >\n			<label class=\"description\" for=\"element_4\">Drop Down </label>\n			<div>\n				<select class=\"element select medium\" id=\"element_4\" name=\"element_4\"> \n					<option value=\"\" selected=\"selected\"></option>\n					<option value=\"1\" >First option</option>\n					<option value=\"2\" >Second option</option>\n					<option value=\"3\" >Third option</option>\n				</select>\n			</div> \n		</li>\n\n		<li class=\"buttons\">\n			<input type=\"hidden\" name=\"form_id\" value=\"859947\" />\n\n			<input id=\"saveForm\" class=\"button_text\" type=\"submit\" name=\"submit\" value=\"Submit\" />\n		</li>\n	</ul>\n</form>\n</div>";
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
  var buffer = "", stack1, functionType="function";


  buffer += "<h1>Video</h1>\n<div class=\"inner-wrap\">\n	<div class=\"another-wrapper\">\n	  	<h2 class=\"subheading\">";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.heading)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</h2>\n	  	<p>";
  stack1 = ((stack1 = ((stack1 = (depth0 && depth0.content)),stack1 == null || stack1 === false ? stack1 : stack1.synopsis)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</p>\n	  	<a class=\"moreButton\" href=\"";
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