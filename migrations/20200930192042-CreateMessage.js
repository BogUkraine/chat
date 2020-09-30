'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      id         : { type : Sequelize.UUID, allowNull : false, primaryKey : true},
      value      : { type : Sequelize.STRING, allowNull : false},
      created_by : { type : Sequelize.UUID, allowNull : false},
      chat_id    : { type : Sequelize.UUID, allowNull : false},
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Messages');
  }
};
