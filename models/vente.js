'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vente = sequelize.define('Vente', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    state: {
      type: DataTypes.ENUM,
      values: ['confirmer', 'paye non expede', 'en attente', 'annulee']
    },
    versement: {
      type: DataTypes.DECIMAL
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Clients',
        key: 'id'
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      },
    },
  }, {});
  Vente.associate = function(models) {
    Vente.belongsTo(models.Client);
    Vente.belongsTo(models.User);
    Vente.belongsToMany(models.Article, {
      through: 'ArticleVente',
      as: 'articles',
      foreignKey: 'venteId',
      otherKey: 'articleId'
    });
  };
  return Vente;
};