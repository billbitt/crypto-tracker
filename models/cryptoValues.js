module.exports = function(sequelize, DataTypes) {
    var CryptoValue = sequelize.define("CryptoValue", {
        valueFrom: {
            type: DataTypes.STRING,
        },
        value: {
            type: DataTypes.FLOAT,
        },
        valueTo: {
            type: DataTypes.STRING,
        },
    });
    return CryptoValue;
};