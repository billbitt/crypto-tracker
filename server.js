// load dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// options
var updateSpeed = 10;

// set port
var PORT = process.env.PORT || 3000;

// initialize express
var app = express();
// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));
// configure epress
app.use(bodyParser.json());  // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Requiring our models for syncing
var db = require("./models");

// require in routes
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// update prices every 1 seconds 
require('./workers/updatePrices.js')(updateSpeed);

// start server
db.sequelize.sync({ force: true}).then(function(){
	app.listen(PORT, function() {
		//create seeds
    	require("./seeders/getInitialValues.js")();
		// log that the port is open
		console.log("Listening on PORT " + PORT);
	});
})

