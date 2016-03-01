var work = {
	"jobs": [
		{
			"employer": "Arc SystemWorks",
			"title": "Programmer",
			"location": "Shin-Yokohama, Japan",
			"dates": "June 2010 - December 2010",
			"description": "Responsible for developing completely new, full 2D puzzle game for Nintendo DSi using C++. Utilized Nintendo’s graphics and sound APIs. Offered direction for various aspects of game design."
		},
		{
			"employer": "MyVest Corporation",
			"title": "Software Engineer",
			"location": "San Francisco, CA",
			"dates": "November 2012 - Present",
			"description": "Full-stack engineer working with Angular and Flex front-end, with a Java back-end. Leveraging Both SQL (Oracle) and NoSQL (Cassandra) databases."
		}
	]
};
work.display = function() {
	if(work.jobs.length > 0) {
		for(job in work.jobs) {
			var jobObject = work.jobs[job];
			var employerTitleConcat = HTMLworkEmployer.replace('%data%', jobObject.employer) + HTMLworkTitle.replace('%data%', jobObject.title);
			$('#workExperience').append(HTMLworkStart);
			$('.work-entry:last').append(employerTitleConcat);
			$('.work-entry:last').append(HTMLworkDates.replace('%data%', jobObject.dates));
			$('.work-entry:last').append(HTMLworkLocation.replace('%data%', jobObject.location));
			$('.work-entry:last').append(HTMLworkDescription.replace('%data%', jobObject.description));
		}	
	}
}

var projects = {
	"projects": [{
		"title": "Magic Deck-Builder",
		"dates": "2015 - Present",
		"description": "Angular application for a user to design and build their own magic deck, complete with ability to print proxies for all the cards.",
		"images": ["images/magic-logo.png"]
	}]
};
projects.display = function() {
	projects.projects.forEach(function(project) {
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(HTMLprojectTitle.replace('%data%', project.title));
		$('.project-entry:last').append(HTMLprojectDates.replace('%data%', project.dates));
		$('.project-entry:last').append(HTMLprojectDescription.replace('%data%', project.description));

		project.images.forEach(function(image) {
			$('.project-entry:last').append(HTMLprojectImage.replace('%data%', image));
		});

	});
};

var bio = {
	"name": "Avneet Chadha",
	"role": "Software Engineer",
	"welcomeMessage": "Hello!",
	"contacts": {
		"mobile": "(415) 859-0324",
		"email": "avneet.chadha@gmail.com",
		"github": "achadha",
		"location": "San Francisco, CA"
	},
	"skills": [
		"Java",
		"C/C++",
		"JavaScript",
		"ActionScript",
		"Angular",
		"Flex",
		"Spring",
		"Hibernate"
	]
};
bio.display = function() {
	var formattedNameHeader = HTMLheaderName.replace("%data%", "Avneet Chadha");
	var formattedRole = HTMLheaderRole.replace("%data%", "Software Engineer");	
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedNameHeader);
	$('#header').append(HTMLbioPic.replace('%data%', 'images/fry.jpg'));

	$('#header').append(HTMLskillsStart);
	if(bio.skills && bio.skills.length > 0) {
		for(skill in bio.skills) {
			$('#skills').append(HTMLskills.replace("%data%", bio.skills[skill]));
		}
	}
}

var education = {
	"schools": [{
		"name": "University of the Pacific",
		"location": "Stockton, CA",
		"degree": "B.S.",
		"major": "Computer Science",
		"dates": "Fall 2007 - Spring 2012",
		"url": "www.pacific.edu"
	}],
	"onlineCourses": [{
		"title": "Front-End Developer Nanodegree",
		"school": "Udacity",
		"dates": "2016",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}]
};
education.display = function() {
	$('#education').append(HTMLschoolStart);
	education.schools.forEach(function(school) {
		$('.education-entry').append(HTMLschoolName.replace('%data%', school.name));
		$('.education-entry').append(HTMLschoolDegree.replace('%data%', school.degree));
		$('.education-entry').append(HTMLschoolDates.replace('%data%', school.dates));
		$('.education-entry').append(HTMLschoolLocation.replace('%data%', school.location));
		$('.education-entry').append(HTMLschoolMajor.replace('%data%', school.major));
	});

	$('#education').append(HTMLonlineClasses);
	education.onlineCourses.forEach(function(course) {
		$('.course-entry').append(HTMLonlineTitle.replace('%data%', course.title));
		$('.course-entry').append(HTMLonlineSchool.replace('%data%', course.school));
		$('.course-entry').append(HTMLonlineDates.replace('%data%', course.dates));
		$('.course-entry').append(HTMLonlineURL.replace('%data%', course.url));
	});

};

function inName() {
	var res = bio.name.trim().split(' ');
	var firstName = res[0];
	var secondName = res[1];

	firstName = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
	secondName = secondName.toUpperCase();

	bio.name = firstName + ' ' + secondName;	
}

function displayInternationalizeButton() {
	$('#main').append(internationalizeButton);
}

function displayMap() {
	$('#mapDiv').append(googleMap);
}


bio.display();
work.display();
projects.display();
education.display();
displayMap();







