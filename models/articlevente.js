'use strict';
module.exports = (sequelize, DataTypes) => {
  const ArticleVente = sequelize.define('ArticleVente', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    qte: DataTypes.DECIMAL,
    prix_vente: DataTypes.DECIMAL,
    venteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Ventes',
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
  ArticleVente.associate = function(models) {
    // associations can be defined here
  };
  return ArticleVente;
};