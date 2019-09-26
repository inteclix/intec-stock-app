'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vente = sequelize.define('Vente', {
    id: DataTypes.UUID
  }, {});
  Vente.associate = function(models) {
    Vente.belongsTo(models.personne);
    Vente.belongsTo(models.user);
    Vente.belongsToMany(models.article, {
      through: 'ArticleVente',
      as: 'articles',
      foreignKey: 'venteId',
      otherKey: 'articleId'
    });
  };
  return Vente;
};