// load dependencies
var path = require('path');

// routes to export
module.exports = function(app){
	// route for the home page
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, '../public', 'index.html'));
	});
}