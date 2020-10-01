'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id   : { type : Sequelize.UUID, allowNull : false, primaryKey : true},
      name : { type : Sequelize.STRING, allowNull : false},
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
