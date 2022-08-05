'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('products', [
      {
        name: 'TSHIRT',
        qty: 500,
        picture: 'pic-tshirt',
        expiredAt: '2022-08-04',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'DRESS',
        qty: 500,
        picture: 'pic-dress',
        expiredAt: '2022-08-04',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'JEANS',
        qty: 500,
        picture: 'pic-jeans',
        expiredAt: '2022-08-04',
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'SHIRT',
        qty: 500,
        picture: 'pic-shirt',
        expiredAt: '2022-08-04',
        isActive: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'PANTS',
        qty: 500,
        picture: 'pic-pants',
        expiredAt: '2022-08-04',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('products', null, {});
  }
};
