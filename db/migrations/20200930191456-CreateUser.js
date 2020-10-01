'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id   : { type : Sequelize.UUID, defaultValue: Sequelize.fn('uuid_generate_v4'), primaryKey : true},
      name : { type : Sequelize.STRING, allowNull : false},
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
