DukeApp.module("Entities", function(Entities, DukeApp, Backbone, Marionette, $, _){
	Entities.FrameTemplate = Backbone.Model.extend({});

	Entities.FrameTemplateCollection = Backbone.Collection.extend({
		model: Entities.FrameTemplate
	});

	Entities.FrameModel = Backbone.Model.extend({});
			
	Entities.FrameCollection = Backbone.Collection.extend({
		model: Entities.FrameModel
	});

	Entities.Week = Backbone.Model.extend({});

	Entities.WeekCollection = Backbone.Collection.extend({
		model:Entities.Week
	});
	
	Entities.Class = Backbone.Model.extend({});

	Entities.ClassCollection = Backbone.Collection.extend({
		model:Entities.Class
	});

	var frameTemplates, frames, weeks, classes;

	var makeTemplateObjectById = function(id) {
		var m = frameTemplates.at(id);
		return({name: m.get('name'), glyph: m.get('glyph')});
	};

	var makeTemplateObjectByName = function(name) {
		var m = frameTemplates.find(function(item){
			return item.get('name') == name;
		});

		return({name: m.get('name'), glyph: m.get('glyph')});
	};

	var initializeFrameTemplates = function(){
		frameTemplates = new Entities.FrameTemplateCollection([
			{name:"overview", 			glyph:"eye3"},
			{name:"article", 			glyph:"book2"},
			{name:"articleLink", 		glyph:"book2"},
			{name:"links", 				glyph:"direction"},
			{name:"game", 				glyph:"gamepad"},
			{name:"video", 				glyph:"camera2"},
			{name:"videoLink", 			glyph:"camera2"},
			{name:"image", 				glyph:"picture"},
			{name:"comic", 				glyph:"batman"},
			{name:"activity", 			glyph:"lightning"},
			{name:"assignment", 		glyph:"file"},
			{name:"assignmentUpload", 	glyph:"file"},
			{name:"discussion", 		glyph:"comments"},
			{name:"lectureText", 		glyph:"presentation"},
			{name:"lectureAudio", 		glyph:"presentation"},
			{name:"lectureVideo", 		glyph:"presentation"},
			{name:"discussion", 		glyph:"comments"},
			{name:"quiz", 				glyph:"pencil"},
			{name:"journal", 			glyph:"wallet"},
			{name:"wrapup",				glyph:"pencil"}
		]);
	};

	var initializeFrames = function(){
		frames = [
			//week 1
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 1 Overview:",
				subTitle:"The Differences Between the Chinese and American Education Systems. What is a “best-fit” school?",
				overview:"Learn more about differences in educational systems",
				objectives:[
					"Understand the semester one course goals, objectives, deliverables",
					"Understand the differences between the Chinese and U.S. education systems",
					"Understand the current college admission landscape for elite schools in the U.S.",
					"Understand the “best-fit” school concept"
				],
				badges:["code", "cool", "foxy"]
			}},

			{type:"journal", name:"journal",		content:{
				heading: "Introduction to Journals",
				instructions: "Throughout the semester you will:",
				objectives:[
					"Be asked to think and reflect about the topics covered in this course and to write about them.",
					"Journal entries will be written on the computer and will be time stamped.",
					"You will  examine your journals and assess how well you are doing by using the rubric. Make certain you score your work.",
					"If you do not understand some of the words, please define the words in your journals. *Carefully review the rubric and make sure you understand all of it."
				]
			}},
			
			{type:"video", name:"video",			content:{
				heading: 	"2 Million Minutes", 
				subheading: "Factors to Consider when narrowing down your college choices.",
				video: 		"Duke_ConEd_Class1"
			}},



			{type:"image", name:"image",		content:{
				heading: "Journal Grading Rubric",
				source: "../images/image_panels/rubricwrite2.gif"
			}},

			{type:"activity", name:"activity",		content:{
				heading: "Instructor Overview of Class and Syllabus", 
				instuctionsHeader: "Instructor introduces self and gives a broad overview of the two semester course:",
				instructionList:[
					"Provide you with a better understanding of the differences between the U.S. and Chinese educational systems so that you can tailor your applications to the schools to which you are applying",
					"Provide you with a better understanding of who and what you are so that you can develop a list of of potential colleges and universities that are consistent with your educational goals and interests",
					"Improve your interview and essay writing skills and provide tips for better college applications"
				],
			}},

			{type:"video", name:"video",			content:{
				heading: 	"Difference between the Chinese and American School systems", 
				video: 		"test"
			}},

			{type:"discussion", 	name:"discussion", 	content:{
				heading: "The Similarities and differences between the U.S. and Chinese educational systems:",
				instructionTitle: "You will read and discuss the following questions with a partner:",
				instructionList:[
					"Name three similarities and three differences between the Chinese and American education systems.",
					"Compare and contrast the ways in which Chinese and Americans  are assessed in school. For example how are  tests, homework,  and projects evaluated in both countries.",
					"Are “extra-curricular” activities the same in China as in the U.S.? How are they different?",
					"Compare and contrast how Chinese and Americans students  spend  time outside of school.",
					"Generally, what is the average class size in an American high school? How might this impact the way in which American you learn as compared to the way in which Chinese you learn?",
					"List three strengths of the Chinese educational system and three strengths of the American educational system."
				]
			}},
			
			{type:"article", name:"article",		content:{
				id:0
			}},

			{type:"journal", 		name:"journal",	content:{
				instructions: "In your journal make notes answering the above questions fron the previous discussion", 
			}},


			{type:"articleLink",  	name:"article", 	content:{
				heading: 'Using the “My College Guide: Things to Consider When Choosing a College”',
				instructions: "You will journal about what you think a best-fit college would be. You should not name schools but consider qualities like size, location, campus life, etc. You will reflect back on this entry at the end of the first semester.",
				link: "http://mycollegeguide.org/guru/19/picking-the-right-school"
			}},

			{type:"articleLink",  	name:"article", 	content:{
				heading: 'Learning about your Personality Type',
				instructions: "Read an article about the Myers-Briggs Personality",
				link: "http://www.teamtechnology.co.uk/tt/t-articl/mb-simpl.htm"
			}},

			{type:"game", name:"game",			content:{
				name: "Choosing The Right College",
				description: "Match the student's perfered climate, major, cost and other factors to find the perfect school.",
				id: 0
			}},

			{type:"comic", name:"comic",		content:{
				synopsis: 	"You will be given a rubric from which your instructor will assess your journal. Your journal will be assessed for accuracy and quality of content. Carefully review the rubric and make sure you understand all of it.", 
				instructions: 	"instruction text", 
				id: 0
			}}

		]),
			//week 2
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 2 Overview:",
				subheading:"Knowing Yourself: WHO are you and WHAT are you? Identifying personal strengths and interests and developing a plan.",
				overview:"Knowing yourself: Who are you and what are you equals knowing yourself. This lesson will help you to identifying your personal strengths and interests. WHO ARE YOU? What are your interests? What are your “likes?” WHAT ARE YOU? Helps you identify your academic and extra-curricular strengths.Knowing who and what you are will help you develop your high school plan for academics and extracurricular activities. After you develop your character profile, you will develop a plan for what you might want to study in high school and college.",
				objectives:[
					"Take the MBTI to determine your individual personality profiles",
					"Make a list of your academic accomplishments and strengths and your extracurricular interests",
					"Use your MBTI results and academic and extracurricular interests to populate your profiles",
					"Use the career Cluster Survey (CFNC) to identify objectives for future study"
				]
			}},

			{type:"video", name:"video",			content:{
				heading: 	"Myers-Briggs", 
				video: 		"Duke_ConEd_Class2"
			}},

			{type:"activity", name:"activity",		content:{
				heading: "A Review of Myers-Briggs", 
				instuctionsHeader: "Instructor will review the reading assignment about the MBTI. How the test will be administered and why the you are taking the test will be reviewed."
			}},

			{type:"articleLink",  name:"article", 	content:{
				heading: 'Take the Myers-Briggs Test',
				instructions: "You will take the MBTI and review your test results and ask your instructor if you have any questions about the results.",
				link: "http://www.16personalities.com/free-personality-test"
			}},

			{type:"activity", name:"activity",		content:{
				heading: "Reflecting on Personality Types",
				instuctionsHeader: "You will read about your personality types. Reflect on what your personality traits mean in your real life, for example, if you are an introvert, how can you chat more with people when you prefer to remain silent. Or, if you are an extrovert, how can you learn to listen more? Think of one or two activities that will challenge you to try new things.",
				instructionList:[
				],
			}},

			{type:"journal", 		name:"journal",	content:{
				instructions: "What are three of your academic accomplishments? Have you taken any AP courses?  Have you won any mathematics, science or English awards? Do you play a sport? Do you play an instrument? Make a list of your academic accomplishments and your extracurricular activities.", 
			}},

			{type:"activity", name:"activity",		content:{
				heading: "Populate Myers-Briggs Rating in Profile", 
				instuctionsHeader: "You will populate your profiles using your MBTI results and the list of the academic accomplishments and extra-curricular interests."
			}},

			{type:"articleLink",  name:"article", 	content:{
				heading: 'Register with CFNC',
				instructions: "You will register with CFNC and locate the Cluster Survey.",
				link: "https://www1.cfnc.org/Plan/For_A_Career/Learn_About_Yourself/Career_Cluster_Survey/Career_Cluster_Survey.aspx"
			}},

			{type:"assignment", name:"assignment",		content:{
				subHeading: "Mapping out your Career Path",
				instructionList:[
					"Complete the CFNC Career Cluster Survey.",
					"You will use your journals to list your personal strengths and interests, preferred courses, activities, free time activities, community service activities, extracurricular activities",
					"You should also list the majors and careers paths in which you are most interested."
				],
			}},

			{type:"comic", name:"comic",		content:{
				synopsis: 	"You will be given a rubric from which your instructor will assess your journal. Your journal will be assessed for accuracy and quality of content. Carefully review the rubric and make sure you understand all of it.", 
				instructions: 	"instruction text", 
				comic_id: 1
			}}
		]),
			//week 3
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 3 Overview:",
				subTitle:"Getting to Know the U.S. and Colleges and Universities in the U.S.",
				objectives:[
					"Explore the different geographic regions in the U.S. (Northeast, Southeast, Midwest, Southwest, West Coast) and locate major cities and urban centers",
					"Learn about the different cultures of the various in the U.S., e.g. weather, food, language, customs, activities",
					"Locate major research universities and top liberal arts colleges around the country; ideally, you will be able to identify and locate at least one college in each of the 50 states.",
					"Define the terms: lib arts, college, university, public and private, religious influences, BA and BS, selectivity"
				]
			}},

			{type:"video", name:"video",			content:{
				heading: 	"Colleges and Universities in the United States", 
				video: 		"Duke_ConEd_Class3"
			}},

			{type:"discussion", 	name:"discussion", 	content:{
				heading: "Learning More About US Colleges and Universities",
				instructionTitle: "Instructor introduces the following Questions/Discussion starters",
				instructionList:[
					"You have just spent the first two lessons discovering what makes U.S. colleges and universities vary.",
					"Now it is time to learn about how U.S. colleges and universities also have personalities of your own.",
					"Here is a map of the U.S. It shows that, like China, the U.S. is made up of many different states (50) and several regions (Northeast, Southeast, Midwest, Southwest, West Coast). Although these regions do not have your own dialects (like China) they do have distinct cultures and climates. In this lesson you will explore the various regions in the U.S. and learn about the different colleges and universities in those regions. you will also learn about some differences in the types of schools they will be exploring.",
				]
			}},

			{type:"articleLink",  name:"article", 	content:{
				heading: 'Geography of the United States',
				instructions: "Play a geography game to learn the names of the various states and where they are located. After you learn the names and location of the states, click on the U. S. Regions link at the lower left hand side of the page to learn culture and history of each region. There are eight regions and the geography, politics and history of each region are quite different.",
				link: "http://www.sheppardsoftware.com/web_games.htm"
			}},

			{type:"discussion", 	name:"discussion", 	content:{
				instructionTitle: " Now that you have an idea of the geography and various regions of the U.S. let’s review what you’ve learned.",
				instructionList:[
					"Which U.S. region did you find most interesting?",
					"In which region would you prefer not to live? Why?",
					"What kind of climate do you want?",
					"How was each region settled?",
					"How easy is it to get to and from China from each region?",
					"What is the climate of each region?"
				]
			}},

			{type:"quiz", 	name:"quiz", 	content:{
			}},

			{type:"activity", name:"activity",		content:{
				heading: "Instructor Overview of Class and Syllabus", 
				instuctionsHeader: "Now that you have a general idea about  U.S. geography and regional cultures, you will begin to explore colleges and universities around the U.S. First, you need to acquaint  yourself with certain terms. In this part of the lesson, you will go on an internet scavenger hunt to define the following terms.",
				instructionList:[
					"college",
					"university",
					"liberal arts",
					"public university",
					"private university",
					"religiously affiliated schools",
					"Bachelor of Arts",
					"Bachelor of Science",
					"selectivity"
				],
			}},

			{type:"journal", 		name:"journal",	content:{
				instructions: "Write the defintions of the words in the previous activity here. This can be used as a resource: https://bigfuture.collegeboard.org/find-colleges/college-101/types-of-colleges-the-basics"
			}},

			{type:"activity", name:"activity",		content:{
				heading: "Instructor Overview of Class and Syllabus", 
				instuctionsHeader: "Now that you have a general idea about  U.S. geography and regional cultures, you will begin to explore colleges and universities around the U.S. First, you need to acquaint  yourself with certain terms. In this part of the lesson, you will go on an internet scavenger hunt to define the following terms.",
				instructionList:[
					"Do an online scavenger hunt to find examples of the following types of colleges and universities in two of the eight geographic regions of the U.S. (New England, Mid-Atlantic, Southern, Great Lakes, Midwest, Southwest, Mountain and Pacific Coast).",
					"Find an example of the following types of schools in the Northeast/Mid-Atlantic:",
					"	a liberal arts college in a small college town",
					"	a large research university in or near a cit",
					"	a religiously affiliated college or university",
					"	a public college or university",
					"	a private college or university",
					"	a technical college or university",
					"	a design college (focusing on art and design)"
				],
			}},

			{type:"journal", 		name:"journal",	content:{
				instructions: "Wrap up. In your journals,  list one school in each geographic region that you were unaware of and that you find interesting."
			}},

			{type:"comic", name:"comic",		content:{
				synopsis: 	"You will be given a rubric from which your instructor will assess your journal. Your journal will be assessed for accuracy and quality of content. Carefully review the rubric and make sure you understand all of it.", 
				instructions: 	"instruction text", 
				comic_id: 2
			}}
		]),
			//week 4
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 4 Overview:",
				subTitle:"The College Search: Looking for the Right School for You, Including Great Schools You’ve Never Heard Of…",
				overview:"Learn how to adjust easily and effectively to the first semester of college at an American college or university. You will also learn about the importance of scheduling your time wisely.",
				objectives:[
					"You will revisit your career cluster results and choose possible majors.",
					"You will explore College Board’s Big Future and run it two or three different times.",
					"You will develop a college list based on the results of College Board Big Future.",
					"You will locate and mark your colleges on a map of the U.S."
				]
			}},

			{type:"video", name:"video",			content:{
				heading: 	"Choosing the Right School for you", 
				video: 		"Duke_ConEd_Class3"
			}},

			{type:"discussion", 	name:"discussion", 	content:{
				instructionTitle: "Review of “best-fit” school concept.",
				instructionList:[
					"Open your your journal to revisit your earlier definition of “best-fit” school.",
					"Has your understanding of best-fit changed?",
					"If so, you should revise your definition in your journal."
				]
			}},

			{type:"discussion", 	name:"discussion", 	content:{
				instructionTitle: "Choosing the “best-fit school",
				instructionList:[
					"The instructor leads a discussion about what types of things you are worried about as you begin your college planning.",
					"For example, is there pressure to get into a “top” school?",
					"Who is the pressure coming from?",
					"Do you have concerns about finding the right major, fitting in, etc.?"
				]
			}},

			{type:"discussion", 	name:"discussion", 	content:{
				instructionTitle: "Priorities for your college search",
				instructionList:[
					"What are you excited about when you think about college?",
					"Examples might be making new friends, exploring new areas of interest.",
					"Discuss how these ideas can be used to guide the college search."
				]
			}},

			{type:"videoLink", name:"video",			content:{
				heading: 	"Best Fit School", 
				synopsis: 	"You watch one or two videos about things to consider when looking for a best-fit school.",
				link: 		"https://bigfuture.collegeboard.org/get-started/video-gallery"
			}},

			{type:"articleLink",  name:"article", 	content:{
				heading: 'College Board Big Future',
				instructions: "You will explore an amazing amount of material about colleges and universities in the U.S.",
				link: "https://bigfuture.collegeboard.org/?navid=bf-cp"
			}},

			{type:"assignment", name:"assignment",		content:{
				subHeading: "Creating your list of Colleges",
				instuctionsHeader:"Go to College Board’s College Search page: <a href='https://bigfuture.collegeboard.org/college-search'>here</a>.",
				instructionList:[
					"Go to College Board’s College Search page:",
					"This search should be done at least three times, refining your list of schools.",
					"At the end of the exercise, you should have a list of no fewer than 10 and no more than 15 schools."
				]
			}},

			{type:"journal", 		name:"journal",	content:{
				instructions: "In your journals, you will record your list of schools and write at least two sentences about why you think each school is a “best fit” for you."
			}},

			{type:"assignment", name:"assignment",		content:{
				subHeading: "Creating your list of Colleges",
				instuctionsHeader:"you locate your schools on a map of the U.S. This can be done virtually or on paper.",
			}},

			{type:"discussion", 	name:"discussion", 	content:{
				instructionTitle: "Wrap up: What have you learned about yourself and your college search? Instructor leads a discussion using the following questions:",
				instructionList:[
					"What have you learned about developing a college list?",
					"Are you surprised by some of the schools on your college list?",
					"Are there schools on your list with which you are unfamiliar?",
					"What would you like to know more about as you learn more about the schools on your list?"
				]
			}},

			{type:"journal", 		name:"journal",	content:{
				instructions: "Answer the above discussion questions."
			}},

			{type:"assignment", name:"assignment",		content:{
				subHeading: "The College Admission Landscape",
				instuctionsHeader:"You will read an article about the current landscape of college admissions and summarize it in your journals.",
			}},

			{type:"journal", 		name:"journal",	content:{
				instructions: "In your journal, begin to think about which colleges to which you would like to apply. List at least three colleges that you are seriously considering.  Next to each school on your list, write at  least three reasons why you feel you would want to attend the school."
			}},

			{type:"comic", name:"comic",		content:{
				synopsis: 	"You will be given a rubric from which your instructor will assess your journal. Your journal will be assessed for accuracy and quality of content. Carefully review the rubric and make sure you understand all of it.", 
				instructions: 	"instruction text", 
				comic_id: 3
			}}
		]),
			//week 5
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 5 Overview:",
				subTitle:"Learning about the Colleges on Your List",
				overview:"Learn how to adjust easily and effectively to the first semester of college at an American college or university. You will also learn about the importance of scheduling your time wisely.",
				objectives:[
					"Do an online scavenger hunt of the college web sites of schools on your list.",
					"Identify where and how to access information on college websites. e.g. admission information: deadlines, testing requirements, application process, admission statistics, and the application process for international students.",
					"Complete the scavenger hunt questionnaire."
				]
			}},

			{type:"video", name:"video",			content:{
				heading: 	"Keeping Track of Your College Applications", 
				video: 		"Duke_ConEd_Class3"
			}},

			{type:"discussion", 	name:"discussion", 	content:{
				instructionTitle: "Learn about colleges and how to access information on websites",
				instructionList:[
					"Become more familiar with the schools on your college list.",
					"Learn how to access critical information on school websites."
				]
			}},

			{type:"activity", name:"activity",		content:{
				heading: "Searching for School Websites", 
				instuctionsHeader: "You will be directed to find and bookmark the website for each school on your list."
			}},

			{type:"activity", name:"activity",		content:{
				heading: "Scavenger hunt Questionaire", 
				instuctionsHeader: "You will explore the websites of the colleges on your list by completing a scavenger hunt questionnaire."
			}},

			{type:"videoLink", name:"video",			content:{
				heading: 	"Best Fit School", 
				synopsis: 	"This video describes how to choose a college which will suit your needs.",
				link: 		"https://bigfuture.collegeboard.org/find-colleges/how-find-your-college-fit"
			}},

			{type:"videoLink", name:"video",			content:{
				heading: 	"Best Fit School", 
				synopsis: 	"Yang Lan, a journalist and entrepreneur who's been called \"the Oprah of China,\" offers insight into the next generation of young Chinese citizens — urban, connected (via microblogs) and alert to injustice.",
				link: 		"https://www.ted.com/talks/yang_lan"
			}},

			{type:"journal", 		name:"journal",	content:{
				instructions: "In your journals, you will record your list of schools and write at least two sentences about why you think each school is a “best fit” for you."
			}}
		]),
			//week 6
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 6 Overview:",
				subTitle:"Reality of College Admissions in the US",
				objectives:[
					"Understand the concepts of “fit” vs. name.",
					"Understand what selective and highly selective means.",
					"Assess your own chances of admission at a variety of colleges.",
					"Learn the concepts of “foundation schools, “mid-range schools,” and “long shot schools,” and learn how to “shape” a college list",
					"Use the college list you created in past lessons, and you will research application numbers and acceptance rates for international students as well as other important admissions application data"
				]
			}},

			{type:"video", name:"video",			content:{
				heading: 	"The Reality of College Admission in the United States",
				video: 		"Duke_ConEd_Class3"
			}},

			{type:"discussion", 	name:"discussion", 	content:{
				heading: "“Fit” vs Name Brand",
				instructionTitle: "The instructor introduces this week’s class by reviewing the concept of “fit” vs name brand. This is important because colleges want to admit students that they feel are a good match for their school. In this class, you will be introduced to the realities of college admission and learn about some great schools with which you may not be familiar. You will share your summaries of the article you read for homework with your classmates."
			}},

			{type:"videoLink", name:"video",			content:{
				heading: 	"Best Fit School", 
				synopsis: 	"You will view a PPT about admission statistics and admission rates at the top schools. Focus will be on numbers from the Washington Post.",
				link: 		"http://www.washingtonpost.com/local/education/college-admission-rates-for-class-of-2018-an-imperfect-but-closely-watched-metric/2014/04/03/820ff578-b6af-11e3-8cc3-d4bf596577eb_story.html"
			}},

			{type:"assignment", name:"assignment",		content:{
				subHeading: "The College Admission Landscape",
				instuctionsHeader:"You will do some online research to find admission rates for international students at various colleges. A questionnaire will be provided that guides you in your search (see questions below).",
			}},

			{type:"discussion", 	name:"discussion", 	content:{
				heading: "Discuss findings from online research for admission rates for international students",
				instructionTitle: "You will compare what you have found during the class discussion. The instructor leads a discussion and asks the following questions:",
				instructionList:[
					"Is the admission rate the same for international students and American students at American universities?",
					"From what countries are international students applying to U.S. colleges and universities?",
					"How have admission rates for international students changed over the past ten years?",
					"What are the top three majors for undergraduate international students?",
					"Generally, are the admission requirements for international students different from the admission requirements for American students?"
				]
			}},

			{type:"videoLink", name:"video",			content:{
				heading: 	"Choosing colleges that will Fit You", 
				synopsis: 	"You will watch  a video from Big Future by the College Board: “How Should You Choose Colleges to Apply to?",
				link: 		"https://bigfuture.collegeboard.org/find-colleges/how-find-your-college-fit "
			}},

			{type:"quiz", 	name:"quiz", 	content:{
			}},

			{type:"activity", name:"activity",		content:{
				heading: "Research international student admission rates.", 
				instuctionsHeader: " You will research international student admission rates and international student profiles at the schools on your lists. You are provided with a form to complete for this section."
			}},

			{type:"assignment", name:"assignment",		content:{
				subHeading: "Listing Your Preferences",
				instuctionsHeader:"Put the schools on your list into the selective (“foundation”), very selective (“mid-range”) and highly selective (“reach or stretch”) categories. This list should be recorded in your journals.",
			}},

			{type:"comic", name:"comic",		content:{
				synopsis: 	"You will be given a rubric from which your instructor will assess your journal. Your journal will be assessed for accuracy and quality of content. Carefully review the rubric and make sure you understand all of it.", 
				instructions: 	"instruction text", 
				comic_id: 4
			}}
		]),
			//week 7
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 7 Overview:",
				subTitle:"The College Admission Process",
				objective:"How to simplify the College Admission Process and keep track of which colleges you select.",
				objectives:[
					"Learn how selective and highly selective colleges make admissions decisions.",
					"Review the components of a college application on both common app vs school-specific applications: biographical information, academic transcript, personal statement.",
					"Understand the difference between agents, educational consultants and college counselors and their roles.",
					"Understand how colleges identify “agent-prepared” applications."
				]
			}},

			{type:"video", name:"video",			content:{
				heading: 	"The Reality of College Admission in the United States",
				video: 		"Duke_ConEd_Class3"
			}},

			{type:"image", name:"image",			content:{
				image: 		"",
				caption: 	"Instructor tells the class that this week’s lesson will help them learn more about how decisions are made in U.S."
			}},
			
			{type:"activity", name:"activity",		content:{
				heading: "College Application Types", 
				instuctionsHeader: "Instructor introduces students to the different types of college applications: Common Application, Universal Application, School Specific Applications, Application supplements. Examples of each are given."
			}},
			
			{type:"activity", name:"activity",		content:{
				heading: "What's Important on a College Application", 
				instuctionsHeader: "Students view a PPT on how the different parts of an application are accumulated and weighed (e.g. how interviews are scored at the schools that use them). Examples of each part of the application are given."
			}},

			{type:"videoLink", name:"video",			content:{
				heading: 	"Behind the Scenes", 
				synopsis: 	"The backroom of admission: the process in the admission office and how admission committees work. Now get a peek at what goes on in an admission committee meeting at a selective university in the Northeast. Are you surprised at how the admission process works?",
				link: 		"http://www.bing.com/videos/search?q=Brandies+You+tube+admission+committee&FOR"
			}},

			{type:"videoLink", name:"video",			content:{
				heading: 	"Admissions Commitees", 
				synopsis: 	"This is what admission committee looks like at a highly selective private college where admission is less than 30%.",
				link: 		"http://www.bing.com/videos/search?q=Brandies+You+tube+admission+committee&FORM=VIRE1#view=detail&mid=B2E34CE8BDA769A7946CB2E34CE8BDA769A7946C"
			}},

			{type:"assignment", name:"assignment",		content:{
				subHeading: "Listing Your Preferences",
				instuctionsHeader:"Put the schools on your list into the selective (“foundation”), very selective (“mid-range”) and highly selective (“reach or stretch”) categories. This list should be recorded in your journals.",
			}},

			{type:"videoLink", name:"video",			content:{
				heading: 	"What is a “hook?", 
				link: 		"https://www.youtube.com/watch?v=9QfzmVmuGqQ."
			}},

			{type:"assignment", name:"assignment",		content:{
				subHeading: "Defining a hook",
				instuctionsHeader:"Students answer the following questions in their journal",
				instructionList:[
					"Define the term “hook.”",
					"Give three examples of a “hook.”",
					"Write about what their “hooks” may be.",
					"If they do not have a hook, they should review their profile from week two to brainstorm how they might develop a hook."
				],
			}},

			{type:"articleLink",  name:"article", 	content:{
				heading: 'Agents, Consultants and Counselors',
				instructions: "The differences between agents, educational consultants and college counselors.",
				link: "http://world.time.com/2012/07/26/forged-transcripts-and-fake-essays-how-unscrupulous-agents-get-chinese-students-into-u-s-schools/"
			}}
			

		]),
			//week 8
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 8 Overview:",
				subTitle:"Using Your High School Years Wisely: How to Build Your Personal Resume",
				overview:"In this lesson you will explore the variety of extra-curricular activities available to American high school students (athletics, student government, academic clubs, visual and performing arts, after-school jobs, community service) and learn the importance of leadership and persistence in these activities",
				objectives:[
					"Explore the variety of extra-curricular activities available to American high school students (athletics, student government, academic clubs, visual and performing arts, after-school jobs, community service) and the importance of leadership and persistence in these activities.",
					"Understand the importance of extracurricular activities in the college admissions process",
					"Understand the concept of well-rounded vs targeted interests.",
					"Build a personal activities resume based on your interests."
				]
			}},

			{type:"discussion", 	name:"discussion", 	content:{
				heading: "The Importance of Extra-Curricular Activities",
				instructions: "Instructor begins by telling students that this lesson is about the importance of building a strong extra-curriculars resume for the college application process. Students will explore the differences and similarities between extra-curricular activities offered to high school students in China and in the U.S. They will also gain an understanding of how and why some extra-curricular activities translate well to American college applications and some do not."
			}},

			{type:"videoLink", name:"video",			content:{
				synopsis: 	"Students will watch clips from 5 MM (clip of Chinese students doing extra-curriculars, Indian girl talking about her tuitions on the weekend and the two American teens talking about their extracurriculars).",
				link: 		"#"
			}},

			{type:"journal", 		name:"journal",	content:{
				instructions: "In your journal, list at least four differences of how students in China, India and the U.S. use their time outside of school. Answer the following questions:",
				instructionList:[
					"How do you spend your time outside of school? * Do you participate in  extra-curricular activities?",
					"Do you think American students define extra-curricular activities the same way you do?"
				]
			}},

			{type:"videoLink", name:"video",			content:{
				heading: "Words from the Deel of Yale",
				synopsis: 	"Watch the Dean of Undergraduate Admission at Yale University talk about the role of high school activities in a college application.",
				link: 		"https://bigfuture.collegeboard.org/get-started/outside-the-classroom/extracurriculars-matter-to-you-and-to-colleges"
			}},

			{type:"journal", 		name:"journal",	content:{
				instructions: "Answer the following questions in your journal:",
				instructionList:[
					"List all of your extra-curricular activities. Think broadly and include activities that take place both in and outside of school, during the summer, include service oriented travel. Beside each activity, include the weeks per year that you are involved in the activity. Begin listing your activities at grade 9.",
					"Are there extra-curricular activity in which you excel?"
				]
			}},

			{type:"assignment", name:"assignment",		content:{
				instuctionsHeader:"Complete the following form to build your own extra-curricular resume.",
			}},

			{type:"comic", name:"comic",		content:{
				synopsis: 	"You will be given a rubric from which your instructor will assess your journal. Your journal will be assessed for accuracy and quality of content. Carefully review the rubric and make sure you understand all of it.", 
				instructions: 	"instruction text", 
				comic_id: 5
			}}

		]),
			//week 9
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 9 Overview:",
				subTitle:"How to Write the Perfect College Essays",
				overview:"You will write several essays and learn about what makes a good essay or poorly written essay.",
				objectives:[
					"In this module, you will learn about the general types of college essays and how to distinguish yourself.",
				]
			}},

			{type:"articleLink",  name:"article", 	content:{
				heading: 'You will read several college essays to determine what types of essays grab an admission officer’s attention.',
				instructions: "What makes a college essay stand out? Read the following four essays and decide which ones are good and which are not. Make notes in your journal about why you liked an essay or what you think makes an essay uneffective.",
				link: "#"
			}},

			{type:"journal", 		name:"journal",	content:{
				instructions: "Based on the essays you just read, make a list of the attributes you think make a good essay."
			}},

			{type:"articleLink",  name:"article", 	content:{
				heading: 'There are several mistakes you can  make on your college essay. Learn about the most common mistakes here.',
				instructions: "Read the following article and make a list in your journal of the most common mistakes you should avoid in a college essay.",
				link: "http://theivycoach.com/the-ivy-coach-blog/tag/college-essay-mistakes/"
			}},

			{type:"articleLink",  name:"article", 	content:{
				heading: 'The following article are five examples of high level college admission essays with admission officers comments on the essays.',
				instructions: "Choose three out of the five following essays and carefully examine the admission committee comments to determine what makes the essays good.",
				link: "http://www.internationalstudent.com/essay_writing/college_essay/"
			}},
		]),
			//week 10
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 10 Overview:",
				subTitle:"College Application Essays: Pt. 2",
				overview:"You will write sample college application essays and get feedback from a peer.",
				objectives:[
					"Explore essay topics on the Common Application, write a college application essay. A peer will review your essay."
				]
			}},

			{type:"articleLink",  name:"article", 	content:{
				heading: 'Essay Questions on the Common Application',
				instructions: "Go to the Common Application and choose two of the essay prompts.",
				link: "https://appsupport.commonapp.org/link/portal/33011/33013/Article/1694/2014-15-Common-Application-Essay-Prompts"
			}},

			{type:"assignment", name:"assignment",		content:{
				instuctionsHeader:"Before you begin to write your essay, brainstorm some ideas for your essays. Think of topics that will not be covered in other parts of the application; for example, repeating something about an award or sport you have already mentioned. the topic should compelling and unique to you. If it is amusing, that always an added plus.",
			}},

			{type:"assignment", name:"assignment",		content:{
				instuctionsHeader:"Write two well-developed essays on the topics you chose from the Common Application. Limit each essay to 650 words.",
			}},

			{type:"discussion", 	name:"discussion", 	content:{
				heading: "Peer review of essays",
				instructions: "Instructor collects all of the essays and randomly distributes them. No student should be reviewing their own essays. Students will make written comments on the essays and after twenty minutes will pair up to give feedback. Students will do two pairings, one with the reviewer of their essays and one providing feedback for their peer."
			}},
			
			{type:"activity", name:"activity",		content:{
				instuctionsHeader: "Two students volunteer to read their essays to the class, which they feel are good examples of a well-written college essay."
			}}

		]),
			//week 11
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 11 Overview:",
				subTitle:"Visiting College Campuses: How, When and Why to Plan Your School Tour",
				overview:"Choose four out five of the following virtual college tours and look at different types of schools in different parts of the country.",
				objectives:[
					"Understand how to prepare for a visit by completing the “College Tour Checklist.",
					"Take assigned virtual college tours",
					"Learn the best times to visit colleges and universities",
					"Take assigned virtual college tours",
					"Learn the best times to visit colleges and universities"
				]
			}},

			{type:"articleLink",  name:"article", 	content:{
				heading: 'The College Tour Checklist',
				instructions: "Review the following college tour checklist before we begin our virtual college tours. We understand that you cannot answer all of the questions on a virtual tour, but this will get you thinking about what you need to look for as you begin your college tours.",
				link: "https://bigfuture.collegeboard.org/find-colleges/campus-visit-guide/campus-visit-checklist"
			}},

			{type:"videoLink", name:"video",			content:{
				heading: "The University of Michigan is a very large, liberal arts school located in the Midwest.",
				synopsis: 	"Take your time looking through the virtual tour of the University of Michigan. While you explore make sure to look at the following : housing options, financial aid for international students, admission policies for international students, students organizations, “Greek Life,” student services, different majors, dining services, career center, events calendar and athletics. Feel free to explore your specific areas of interest. ",
				link: 		"http://umich.edu/search.phpq/virtual%2520tour/"
			}},

			{type:"videoLink", name:"video",			content:{
				heading: "Wesleyan is a small, liberal arts university located in the Northeast.",
				synopsis: 	"Take your time looking through the virtual tour of Wesleyan University. While you explore make sure to look at the following : housing options, financial aid for international students, admission policies for international students, students organizations, “Greek Life,” student services, different majors, dining services, career center, events calendar and athletics. Feel free to explore your specific areas of interest.",
				link: 		"http://www.wesleyan.edu/admission/videotour/"
			}},

			{type:"videoLink", name:"video",			content:{
				heading: "North Carolina State University is a large University located in the Southeastern U.S. It specializes in engineering, design and textiles.",
				synopsis: 	"Take your time looking through the virtual tour of the NCSU. While you explore make sure to look at the following : housing options, financial aid for international students, admission policies for international students, students organizations, “Greek Life,” student services, different majors, dining services, career center, events calendar and athletics. Feel free to explore your specific areas of interest.",
				link: 		"http://www.ncsu.edu/about-nc-state/campus-tour/"
			}},

			{type:"videoLink", name:"video",			content:{
				heading: "Santa Clara University is a private institution in an urban setting located on the West Coast. The most popular major is business management and marketing. This school is considered selective.",
				synopsis: 	"Take your time looking through the virtual tour of Santa Clara University. While you explore make sure to look at the following : housing options, financial aid for international students, admission policies for international students, students organizations, “Greek Life,” student services, different majors, dining services, career center, events calendar and athletics. Feel free to explore your specific areas of interest.",
				link: 		"http://www.scu.edu/ugrad/virtualtour/index.cfm"
			}},


			{type:"videoLink", name:"video",			content:{
				heading: "Mt. Holyoke College is a private, all-women’s institution locate in New England. It is the first of the “seven sister schools and is a member of Five College Consortium that includes Amherst College, Smith College, Hampshire College and the University of Massachusetts. ",
				synopsis: 	"Make your time looking through the virtual tour of Mount Holyoke College. While you explore make sure to look at the following : housing options, financial aid for international students, admission policies for international students, students organizations, “Greek Life,” student services, different majors, dining services, career center, events calendar and athletics. Feel free to explore your specific areas of interest.",
				link: 		"https://www.mtholyoke.edu/cic/tour/"
			}},

			{type:"journal", 		name:"journal",	content:{
				instructions: "Answer the following questions in your journal:",
				instructionList:[
					"What size college or university are you looking for?",
					"Which location in the U.S. do you prefer?",
					"Are you looking for a liberal arts and sciences college?",
					"Is financial aid a consideration in your selection of colleges?",
					"Are athletics or arts programs important to you?",
					"Is convenient travel to your native country important to you?"
				]
			}}
		]),
			//week 12
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 12 Overview:",
				subTitle:"The College Interview: How to Prepare and Practice",
				overview:"Learn about college interviews and practice doing one with a peer.",
				objectives:[
					"Complete the College Board Interview guide",
					"Review how interviews are used in the college admission process",
					"The do’s and don’ts of college interviewing",
					"Re-visit the Web sites of colleges on your list",
					"Do mock interviews with your designated partners",
					"Learn about college interviews and practice doing one with a peer."
				]
			}},

			{type:"video", name:"video",			content:{
				heading: 	"Prepare and Practice for you College Interview",
				video: 		"Duke_ConEd_Class3"
			}},

			{type:"articleLink",  name:"article", 	content:{
				heading: 'College Interviews: Practice and Strategies',
				instructions: "Learn the basics about a college interviews. Answer the questions in your journal.",
				link: "https://bigfuture.collegeboard.org/get-in/interviews/college-interviews-practice-questions-and-strategies"
			}},

			{type:"journal", 		name:"journal",	content:{
				instructions: "Answer the questions on the link from College Board in your journal:",
				instructionList:[
					"What size college or university are you looking for?",
					"Which location in the U.S. do you prefer?",
					"Are you looking for a liberal arts and sciences college?",
					"Is financial aid a consideration in your selection of colleges?",
					"Are athletics or arts programs important to you?",
					"Is convenient travel to your native country important to you?"
				]
			}},

			{type:"journal", 		name:"journal",	content:{
				instructions: "In your journal, prepare a list of questions that you will use to interview your classmates. You will be provided with a rubric to score your interviews of your classmates."
			}},
			
			{type:"activity", name:"activity",		content:{
				heading: "Practicing the Interview",
				instuctionsHeader: "Watch a mock interview given by admission professionals."
			}},
			
			{type:"activity", name:"activity",		content:{
				heading: "Paired Practice",
				instuctionsHeader: "The instructor will pair you with three different classmates. you will do a mock interview each of your partners and they will interview you."
			}},

			{type:"wrapup", name:"wrapup",		content:{
				synopsis: "Students will review their interview feedback forms. Four students volunteer to perform two mock interviews.",
				takeaways: "Students reflect in their journals about what worked well for them in their interviews and what did not. They develop a personal list of interview do’s and don’ts."
			}}
		]),
			//week 13
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 13 Overview:",
				subTitle:"The Role of Standardized testing in the College Admissions Process / Introduction to Case Studies",
				overview:"In this module you will learn about the various tests that college and universities use to screen students for admission. You will develop a calendar for your test preparation that will help you to plan and prepare for your tests. At the end of this module, you will watch some real admission committees at work and make some admission decisions of your own.",
				objectives:[
					"Learn the role of standardized test scores in the college admission process.",
					"Learn that “test-optional” colleges in the U.S. are not test optional for international students. We will discuss what tests you must take in order to apply to American colleges and universities.",
					"Learn the differences between the SAT and ACT, as well as SAT II: Subject Tests.",
					"Understand the prevalence of test prep courses and tutors in the US.",
					"Do mock interviews with your designated partners",
					"Develop a testing calendar to address the best times to take standardized college admissions tests."
				]
			}},

			{type:"video", name:"video",			content:{
				heading: 	"The Role of Standardized Testing in the College Admission Process",
				video: 		"Duke_ConEd_Class3"
			}},

			{type:"articleLink",  name:"article", 	content:{
				heading: 'College Interviews: Practice and Strategies',
				synopsis: "Most four-year colleges consider applicants’ scores on college admission tests when deciding whom to accept. Test scores are just one part of your college application. College admission officers give the most weight and importance to your high school grades and whether you’re challenging yourself.",
				instructions: "Read the following article about the role of tests scores in the college admission process.",
				link: "https://bigfuture.collegeboard.org/get-in/testing/the-real-role-of-tests-in-your-college-application#"
			}},

			{type:"links",  name:"links", 	content:{
				heading: 'College Interviews: Practice and Strategies',
				synopsis: "There are now many “test optional” colleges and universities in the U.S. However, the option not to submit tests scores does not apply to international students. The following links are some examples of colleges that are test-optional for American students but have different requirements for international students. As you can see, the test requirements are significantly different from school to school.",
				instructions: "Look through the following admission sites and make some notes in your journal about what tests they require from international students.",
				linkList:[
					{name:"link 1", link:"http://admissions.wfu.edu/apply/international.php#application"},
					{name:"link 2", link:"http://www.brandeis.edu/admissions/apply/international.html"},
					{name:"link 3", link:"http://admissions.pages.tcnj.edu/resources-for/international-applicants"},
					{name:"link 4", link:"http://admissions.tamu.edu/international/freshman/"},
				]
			}},
			
			{type:"activity", name:"activity",		content:{
				heading: "International Student Admission",
				instuctionsHeader: "Look at the international student admission pages for the school on your list. Record the test requirements for the schools to which you will be applying and record those requirements in your journal."
			}},

			{type:"videoLink", name:"video",			content:{
				heading: 	"Video to Learn about the SAT",
				synopsis: 	"The SAT is a globally recognized college admission test that lets you show colleges what you know and how well you can apply that knowledge. It tests your knowledge of reading, writing and math — subjects that are taught every day in high school classrooms. Most students take the SAT during their junior or senior year of high school, and almost all colleges and universities use the SAT to make admission decisions.",
				link: 		"http://sat.collegeboard.org/about-tests/sat"
			}},

			{type:"articleLink",  name:"article", 	content:{
				heading: 'Which Test is right for you? ACT or SAT.',
				synopsis: "Most international students take the SAT when preparing to apply to U.S. colleges. But the SAT is not the only test most colleges accept. Another test, the ACT, is also accepted. For international students, taking the ACT is not always easy, however.",
				instructions: "Read the following articles and decide whether or not you think you would be a better candidate for the ACT or SAT. Make notes in your journal about test dates, locations and special support services available for international students. There are special rules for taking the ACT in each country. Make certain you investigate the rules for taking the ACT in your particular country and record the rules in your journal.",
				link: "http://www.usnews.com/education/best-colleges/articles/2012/11/20/should-international-students-take-the-act"
			}},

			{type:"videoLink", name:"video",			content:{
				heading: 	"Subject Tests",
				synopsis: 	"Subject Tests are hour-long, content-based tests that allow you to showcase achievement in specific subject areas where you excel. These are the only national admission tests where you choose the tests that best showcase your achievements and interests.",
				instructions: "View the following video to learn about the SAT II, which are also known as the subject test. Look at the schools on your list to determine if you want to or need to take the SAT II.",
				link: 		"http://sat.collegeboard.org/about-tests/sat-subject-tests"
			}}
		]),
			//week 14
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 14 Overview:",
				subTitle:"Case Studies - The College Admission Committee",
				overview:"How do colleges make their decisions about whom the admit? In this module you will learn about how college admission committees work. You will also form your own admission committee and make some difficult admission decision.",
				objectives:[
					"Gain a better understanding of how admission committee decisions are made.",
					"View a video of how admission committees work.",
					"Form admissions committees.",
					"Make admission decisions as a committee"
				]
			}}
		]),
			//week 15
			new Entities.FrameCollection([
			{type:"overview", name:"overview",	content:{
				title:"Week 15 Overview:",
				subTitle:"Common Myths and Wrap Up",
				overview:"In this lesson you will learn about the top ten myths about applying to college in the U.S. and hone the list of colleges to which you will apply.",
				objectives:[
					"Report the results of your admission committee meeting to the class.",
					"Review the Top Ten Common Myths about the college application process in the US.",
					"Complete a list of your top ten take-aways.",
					"Hone your college list"
				]
			}},

			{type:"video", name:"video",			content:{
				heading: 	"Wrap-Up Multimedia College Prep",
				video: 		"Duke_ConEd_Class3"
			}}
		])];

		frames.map(function(week, id){
			week.map(function(item, id){
				item.set({index:id, template:makeTemplateObjectByName(item.get("type")), active:(id===0)?"active":""});
			});
		});
	};

	var initializeWeeks = function() {
		weeks = new Entities.WeekCollection([
			{
				id: 1, 
				name:"Week 1",
				frameId: 0
			},
			{
				id: 2, 
				name:"Week 2",
				frameId: 1
			},
			{
				id: 3, 
				name:"Week 3",
				frameId: 2
			},
			{
				id: 4, 
				name:"Week 4",
				frameId: 3
			},
			{
				id: 5,
				name:"Week 5",
				frameId: 4
			},
			{
				id: 6,
				name:"Week 6",
				frameId: 5
			},
			{
				id: 7,
				name:"Week 7",
				frameId: 6
			},
			{
				id: 8,
				name:"Week 8",
				frameId: 7
			},
			{
				id: 9,
				name:"Week 9",
				frameId: 8
			},
			{
				id: 10,
				name:"Week 10",
				frameId: 9
			},
			{
				id: 11,
				name:"Week 11",
				frameId: 10
			},
			{
				id: 12,
				name:"Week 12",
				frameId: 11
			},
			{
				id: 13,
				name:"Week 13",
				frameId: 12
			},
			{
				id: 14,
				name:"Week 14",
				frameId: 13
			},
			{
				id: 15,
				name:"Week 15",
				frameId: 14
			}
		]);
	};

	var initializeClasses = function() {
		classes = new Entities.ClassCollection([
			{
				id: 0,
				name: "Module 1",
				weeks: [{id:1, weekId:0, active:"active"},
						{id:2, weekId:1},
						{id:3, weekId:2},
						{id:4, weekId:3},
						{id:5, weekId:4},
						{id:6, weekId:5},
						{id:7, weekId:6},
						{id:8, weekId:7},
						{id:9, weekId:8},
						{id:10, weekId:9},
						{id:11, weekId:10},
						{id:12, weekId:11},
						{id:13, weekId:12},
						{id:14, weekId:13},
						{id:15, weekId:14}]
			},
			{
				id: 1,
				name: "Module 2",
				weeks: [{id:1, weekId:1, active:"active"}]
			}
		]);
	};

	var API = {
		getFrameEntities: function(id){
			if (frames === undefined){
				initializeFrameTemplates();
				initializeFrames();
			}
			return frames[id];
		},

		getWeekEntities: function(){
			if (weeks === undefined){
				initializeWeeks();
			}
			return weeks;
		},

		getClassEntities: function(id){
			if (classes === undefined){
				initializeClasses();
			}
			return classes.at(id);
		}
	};

	DukeApp.reqres.setHandler("frame:entities", function(id){
		return API.getFrameEntities(id);
	});

	DukeApp.reqres.setHandler("week:entities", function(){
		return API.getWeekEntities();
	});

	DukeApp.reqres.setHandler("class:entities", function(id){
		return API.getClassEntities(id);
	});
});