'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    id: DataTypes.UUID,
    code: DataTypes.STRING,
    designation: DataTypes.TEXT,
    prix_vente: DataTypes.DECIMAL,
    prix_achat: DataTypes.DECIMAL,
    qte: DataTypes.DECIMAL
  }, {});
  Article.associate = function(models) {
    Article.belongsTo(models.famille);
    Article.belongsToMany(models.achat, {
      through: 'ArticleAchat',
      as: 'achats',
      foreignKey: 'articleId',
      otherKey: 'achatId'
    });
    Article.belongsToMany(models.vente, {
      through: 'ArticleVente',
      as: 'ventes',
      foreignKey: 'articleId',
      otherKey: 'venteId'
    });
  };
  return Article;
};