'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('messages', {
      id         : { type : Sequelize.UUID, defaultValue: Sequelize.fn('uuid_generate_v4'), primaryKey : true},
      value      : { type : Sequelize.STRING, allowNull : false},
      created_by : { type : Sequelize.UUID, allowNull : false},
      chat_id    : { type : Sequelize.UUID, allowNull : false},
      created_at : { type : Sequelize.DATE, allowNull : false},
      updated_at : { type : Sequelize.DATE, allowNull : false},
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('messages');
  }
};
