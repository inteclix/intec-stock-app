'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING,
      unique: true
    },
    designation: DataTypes.TEXT,
    prix_vente: DataTypes.DECIMAL,
    prix_achat: DataTypes.DECIMAL,
    qte: DataTypes.DECIMAL,
    familleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Familles',
        key: 'id'
      },
    },
  }, {});
  Article.associate = function(models) {
    Article.belongsTo(models.Famille);
    Article.belongsToMany(models.Achat, {
      through: 'ArticleAchat',
      as: 'achats',
      foreignKey: 'articleId',
      otherKey: 'achatId'
    });
    Article.belongsToMany(models.Vente, {
      through: 'ArticleVente',
      as: 'ventes',
      foreignKey: 'articleId',
      otherKey: 'venteId'
    });
  };
  return Article;
};