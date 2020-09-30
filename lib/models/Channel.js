const Base          = require('./Base');
const sequelize     = require('../../db');
const { DataTypes } = require('sequelize');

class Channel extends Base {
    
}

Channel.init({
    name : { type : DataTypes.STRING, allowNull : false, unique : 'compositeIndex', required: true }
}, {
    sequelize,
    timestamps : false
});

module.exports = Channel;