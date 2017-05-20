module.exports = function(sequelize, DataTypes) {
    var CryptoValue = sequelize.define("CryptoValue", {
        name: {
            type: DataTypes.STRING,
        },
        value: {
            type: DataTypes.FLOAT,
        }
    });
    return CryptoValue;
};