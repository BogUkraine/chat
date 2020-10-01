const { DataTypes } = require('sequelize');
const Base          = require('./Base');
const { v4: uuidv4 } = require('uuid');

class User extends Base {
    static schema = {
        name : { type : DataTypes.STRING, allowNull : false, unique : 'compositeIndex', required: true }
    }
    
    static options = {
        timestamps : false,
        tableName  : 'users'
    }
}

module.exports = User;