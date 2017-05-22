var request = require('request');
var db = require("../models");

// export functionality
module.exports = function(updateSpeed){
	/* BTC */
	// define a function to get the btc price update 
	function updateBtcPrice(){
		// define the options for the http request 
		var options = {
			url: 'https://api.coinbase.com/v2/prices/BTC-USD/spot',
			headers: {
				'CB-VERSION': '2017-05-20'
			}
		};
		// define the callback for the request
		function callback(error, response, body){
			if (error){
				console.log({ result: 'error', error: error });
				return;
			};
			//console.log({result: 'response received', statusCode: response.statusCode, body: body});
			//console.log(JSON.parse(body).data.amount)
			// store the value in the database
			db.CryptoValue.update({
				value: JSON.parse(body).data.amount,
			}, {
				where: {
					name: "btc"
				}
			}).then(function(data){
				console.log("btc update complete");
				return;
			});
		}
		// make the request 
		request.get(options, callback);
	}
	// set a 'worker' to make the request every 'updateSpeed' seconds
	setInterval(updateBtcPrice, updateSpeed * 1000);
	
	/* ETH */
	// define a function to get the eth price update 
	function updateEthPrice(){
		// define the http request options 
		var options = {
			url: 'https://api.coinbase.com/v2/prices/ETH-USD/spot',
			headers: {
				'CB-VERSION': '2017-05-20'
			}
		};
		// define the callback function for the request 
		function callback(error, response, body){
			if (error){
				console.log({ result: 'error', error: error });
				return;
			};
			//console.log({result: 'response received', statusCode: response.statusCode, body: body});
			//console.log(JSON.parse(body).data.amount)
			db.CryptoValue.update({
				value: JSON.parse(body).data.amount,
			}, {
				where: {
					name: "eth"
				}
			}).then(function(data){
				console.log("eth update complete");
				return;
			});
		}
		// make the request
		request.get(options, callback);
	}
	// set a 'worker' to make the call every so many seconds 
	setInterval(updateEthPrice, updateSpeed * 1000);
	
	/* ETH */
	// define a function to get the eth price update 
	function updateEthPrice(){
		// define the http request options 
		var options = {
			url: 'https://api.coinbase.com/v2/prices/ETH-USD/spot',
			headers: {
				'CB-VERSION': '2017-05-20'
			}
		};
		// define the callback function for the request 
		function callback(error, response, body){
			if (error){
				console.log({ result: 'error', error: error });
				return;
			};
			//console.log({result: 'response received', statusCode: response.statusCode, body: body});
			//console.log(JSON.parse(body).data.amount)
			db.CryptoValue.update({
				value: JSON.parse(body).data.amount,
			}, {
				where: {
					name: "eth"
				}
			}).then(function(data){
				console.log("eth update complete");
				return;
			});
		}
		// make the request
		request.get(options, callback);
	}
	// set a 'worker' to make the call every so many seconds 
	setInterval(updateEthPrice, updateSpeed * 1000);

}
