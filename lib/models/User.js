const Base          = require('./Base');
const sequelize     = require('../../db');
const { DataTypes } = require('sequelize');

class User extends Base {

}

User.init({
    id   : { type : DataTypes.UUIDV4, allowNull : false, unique : 'compositeIndex', required: true },
    name : { type : DataTypes.STRING, allowNull : false, unique : 'compositeIndex', required: true }
}, {
    sequelize,
    timestamps : false
});

module.exports = User;