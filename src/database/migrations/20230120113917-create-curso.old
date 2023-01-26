'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cursos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inicio: {
        allowNull: true,
        type: Sequelize.DATE
      },
      observacao: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      descricao: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      data: {
        allowNull: true,
        type: Sequelize.DATE
      },
      nome: {
        allowNull: true,
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('cursos');
  }
};