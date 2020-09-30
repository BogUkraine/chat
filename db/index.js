const Sequelize = require("sequelize");
const config    = require('../config');

const sequelize = new Sequelize(
    config.database,
    config.dbUsername,
    config.dbPassword, {
    dialect: "postgres"
});

sequelize.sync();

module.exports = sequelize;