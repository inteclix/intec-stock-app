'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArticleAchat = sequelize.define('ArticleAchat', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    qte: DataTypes.DECIMAL,
    prix_achat: DataTypes.DECIMAL,
    achatId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Achats',
        key: 'id'
      },
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Articles',
        key: 'id'
      },
    },
  }, {});
  ArticleAchat.associate = function(models) {
    // associations can be defined here
  };
  return ArticleAchat;
};