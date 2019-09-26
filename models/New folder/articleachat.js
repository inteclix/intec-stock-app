'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArticleAchat = sequelize.define('ArticleAchat', {
    id: DataTypes.UUID,
    articleId: DataTypes.UUID,
    achatId: DataTypes.UUID,
    qte: DataTypes.DECIMAL,
    prix_achat: DataTypes.DECIMAL
  }, {});
  ArticleAchat.associate = function(models) {
    // associations can be defined here
  };
  return ArticleAchat;
};