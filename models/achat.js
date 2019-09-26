'use strict';
module.exports = (sequelize, DataTypes) => {
  const Achat = sequelize.define('Achat', {
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
    fournisseurId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Fournisseurs',
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
  Achat.associate = function(models) {
    Achat.belongsTo(models.Fournisseur);
    Achat.belongsTo(models.User);
    Achat.belongsToMany(models.Article, {
      through: 'ArticleAchat',
      as: 'articles',
      foreignKey: 'achatId',
      otherKey: 'articleId'
    });
  };
  return Achat;
};