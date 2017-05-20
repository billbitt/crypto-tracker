var db = require("../models");

module.exports = {
    createSeeds: function(){
        // create rows for all the cryptos
        db.CryptoValue.create({
            name: "btc",
            value: 0
        });
        db.CryptoValue.create({
            name: "eth",
            value: 0
        });
    }
}
