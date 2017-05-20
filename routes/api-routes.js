// load dependencies
var path = require('path');

//import the models 
var db = require("../models");

// routes to export
module.exports = function(app){
	// route for the home page
	app.get("/api/cryptoValues", function(req, res){
		db.CryptoValue.findAll({}).then(function(data){
			res.status(200).send(JSON.stringify(data));
		});
	});
}