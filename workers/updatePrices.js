var request = require('request');
var db = require("../models");

// export functionality
module.exports = function(updateSpeed){

	// every 1 seconds, get the new values and update the current Values object
	function updateBtcPrice(){

		var options = {
			url: 'https://api.coinbase.com/v2/prices/BTC-USD/spot',
			headers: {
				'CB-VERSION': '2017-05-20'
			}
		};

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

		request.get(options, callback);
	}

	setInterval(updateBtcPrice, updateSpeed * 1000);

	// every 1 seconds, get the new values and update the current Values object
	function updateEthPrice(){

		var options = {
			url: 'https://api.coinbase.com/v2/prices/ETH-USD/spot',
			headers: {
				'CB-VERSION': '2017-05-20'
			}
		};

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

		request.get(options, callback);
	}

	setInterval(updateEthPrice, updateSpeed * 1000);

}
