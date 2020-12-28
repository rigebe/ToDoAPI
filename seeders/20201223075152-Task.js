'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', [{
      text: '1',
      status: false,
      number: 1,
      list_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
    await queryInterface.bulkInsert('Tasks', [{
      text: '2',
      status: false,
      number: 2,
      list_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {}); 
  }
};
