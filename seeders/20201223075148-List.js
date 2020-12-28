'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Lists', [{
        Name: 'Description',
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Lists', null, {}); 
  }
};
