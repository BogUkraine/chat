//const Base          = require('../../Base');
//const sequelize     = require('../../db');
const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Channel extends Model {
    
    }
    
    Channel.init({
        name : { type : DataTypes.STRING, allowNull : false, unique : 'compositeIndex', required: true }
    }, {
        sequelize,
        timestamps : false,
        tableName  : 'channels'
    });
    return Channel;
};