const Sequelize = require("sequelize");
const config    = require('../../config');
const User      = require("./User");
const Message   = require("./Message");

const sequelize = new Sequelize(config.database, config.dbUsername, config.dbPassword, {
    dialect : config.dbDialect,
    dialectOptions : {
        connectTimeout : 10000
    },
    pool : {
        min     : 0,
        max     : 10,
        idle    : 10000, // The maximum time, in milliseconds, that a connection can be idle before being released.
        acquire : 30000 // ..., that pool will try to get connection before throwing error
    }
});

const models = {
    User,
    Message
};


Object.values(models).forEach(model => model.init(sequelize));
Object.values(models).forEach(model => model.initRelationsAndHooks(sequelize));

const db = {
  ...models,
  sequelize
};

module.exports = db;