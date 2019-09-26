'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      code: {
        type: Sequelize.STRING,
        unique: true
      },
      designation: {
        type: Sequelize.TEXT
      },
      prix_vente: {
        type: Sequelize.DECIMAL
      },
      prix_achat: {
        type: Sequelize.DECIMAL
      },
      qte: {
        type: Sequelize.DECIMAL
      },
      familleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Familles',
          key: 'id'
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Articles');
  }
};