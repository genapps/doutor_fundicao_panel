'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('timesheets', {
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
      fim: {
        allowNull: true,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('timesheet');
  }
};