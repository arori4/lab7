var projects = require('../projects.json');
var data = {
	viewAlt : false
}


/*
 * GET home page.
 */


exports.view = function(request, response){
	data['viewAlt'] = false;
  	response.render('index', {
		  "projects" : projects.projects,
		  "viewAlt" : data
	  });
};

exports.viewAlt = function(request, response) {
	data['viewAlt'] = true;
  	response.render('index', {
		  "projects" : projects.projects,
		  "viewAlt" : data
	  });
}