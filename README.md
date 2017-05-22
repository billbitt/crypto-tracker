# crypto-tracker
a node application that you can use to track the status of your crypto portfolio

## how to use
* clone this repo
* run npm install from inside the project's root folder
* update the `portfolio.js` file in the root directory to reflect your portfolio details
* start your mysql server
* run `node server`
* visit http://localhost:3000
* enjoy


## future dev
* set up a server on AWS to gather price info and put in a sql database
	* set up a smart contract that people can pay into and then it will pay out to aws to support the server for everyone who wants to run this app client side
	* or just refactor so all the http calls are made client side and responses are stored in an object client-side in local storage on the browser, cutting out the need for a back end alltogether.
* create an option for users to store their portfolio data so they don't have to re-enter their data each time 
	* in short term could store this in local storage in the browser, but would like to store this more permanently like in a db on the server
* additional module: you put in your public addresses, and the program crawls those wallets via blockchain explorers to get your current holdings for you.  i.e. you put in your wallet addresses and it does the rest.
* additional module: historical data on your portfolio. e.g. show a graph of your portfolio over time.

