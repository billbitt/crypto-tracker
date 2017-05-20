// import dependencies
var request = require('request');

/* 
	CREATE TWO OBJECTS TO STORE PORTFOLIO AND PRICE DATA IN
*/

// define variables
var portfolio = require('./portfolio.js');

// every 10 seconds print the portfolio 
function printPortfolioValue(){
	//console.log("portfolio", portfolio);
	//console.log("current values", currentValues)
	// define variables
	var totalPortfolioValue = 0;
	var portfolioValues = {};
	// loop through portfolio and multiply by values
	for (var key in portfolio) {
		// skip loop if the property is from prototype
		if (portfolio.hasOwnProperty(key)) {
			// add the total value for the currency to the portfolio values object
			portfolioValues[key] = portfolio[key] * currentValues[key];
			// increase the total value
			totalPortfolioValue += portfolio[key] * currentValues[key];
		};
	}
	console.log("Total value:", totalPortfolioValue)
	console.log("Portfolio Values:", portfolioValues);
}

setInterval(printPortfolioValue, 10 * 1000);


