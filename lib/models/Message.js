const Base          = require('./Base');
const sequelize     = require('../../db');
const { DataTypes } = require('sequelize');

class Message extends Base {
    
}

Message.init({
    id        : { type : DataTypes.UUIDV4, allowNull : false, unique : 'compositeIndex', required: true },
    name      : { type : DataTypes.STRING, allowNull : false, unique : 'compositeIndex', required: true },
    createdBy : { type : DataTypes.UUIDV4, allowNull : false, required: true},
    chatId    : { type : DataTypes.UUIDV4, allowNull : false, required: true},
}, {
    sequelize,
    timestamps : true
});

module.exports = Message;