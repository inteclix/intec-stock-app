'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArticleVente = sequelize.define('ArticleVente', {
    id: DataTypes.UUID,
    articleId: DataTypes.UUID,
    venteId: DataTypes.UUID,
    qte: DataTypes.DECIMAL,
    prix_vente: DataTypes.DECIMAL
  }, {});
  ArticleVente.associate = function(models) {
    // associations can be defined here
  };
  return ArticleVente;
};