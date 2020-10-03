const { sequelize } = require('.');
const Base          = require('./Base');
const { DataTypes } = require('sequelize');

class Channel extends Base {
    static schema = {
        name : { type : DataTypes.STRING, allowNull : false, required: true }
    }

    static options = {
        timestamps : false,
        tableName  : 'channels'
    }
}

module.exports = Channel;