const { DataTypes } = require('sequelize');
const Base          = require('./Base');

class Message extends Base {
    static schema = {
        value      : { type : DataTypes.STRING, allowNull : false, required: true },
        created_by : { type : DataTypes.UUIDV4, allowNull : false, required: true},
        chat_id    : { type : DataTypes.UUIDV4, allowNull : false, required: true},
        created_at : { type : DataTypes.DATE },
        updated_at : { type : DataTypes.DATE },
    }
    
    static options = {
        timestamps : false,
        tableName  : 'messages'
    }

    static initHooks() {
        this.beforeCreate((message, options) => {
            message.created_at = new Date();
            message.updated_at = new Date();
        });

        this.beforeUpdate((message, options) => {
            message.updated_at = new Date();
        });
    }
        
}

module.exports = Message;