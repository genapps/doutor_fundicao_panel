'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('notas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      cnpj: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      empresa: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      bairro: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      quantidade: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      total: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      valortotal: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      endereco: {
        type: Sequelize.TEXT,
        allowNull: false,
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
    await queryInterface.dropTable('notas');
  }
};