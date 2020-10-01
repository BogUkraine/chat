const { DataTypes } = require('sequelize');
const Base          = require('./Base');

class Message extends Base {
    static schema = {
        name      : { type : DataTypes.STRING, allowNull : false, unique : 'compositeIndex', required: true },
        createdBy : { type : DataTypes.UUIDV4, allowNull : false, required: true},
        chatId    : { type : DataTypes.UUIDV4, allowNull : false, required: true},
    }
    
    static options = {
        timestamps : true,
        tableName  : 'messages'
    }
}

module.exports = Message;