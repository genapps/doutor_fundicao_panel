'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cartaocreditos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      datainicial: {
        type: Sequelize.DATE
        
      },
      datavencimento: {
        type: Sequelize.DATE
      },
      agencia: {
        type: Sequelize.TEXT
      },

      numeroconta: {
        type: Sequelize.NUMBER
      },
  

      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cartaocreditos');
  }
};