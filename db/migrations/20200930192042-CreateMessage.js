'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('messages', {
      id         : { type : Sequelize.UUID, defaultValue: Sequelize.fn('uuid_generate_v4'), primaryKey : true},
      value      : { type : Sequelize.STRING, allowNull : false},
      created_by : { type : Sequelize.UUID, allowNull : false},
      chat_id    : { type : Sequelize.UUID, allowNull : false},
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('messages');
  }
};
