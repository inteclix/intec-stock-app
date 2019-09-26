'use strict';
module.exports = (sequelize, DataTypes) => {
  const Achat = sequelize.define('Achat', {
    id: DataTypes.UUID
  }, {});
  Achat.associate = function(models) {
    Achat.belongsTo(models.personne);
    Achat.belongsTo(models.user);
    Achat.belongsToMany(models.article, {
      through: 'ArticleAchat',
      as: 'articles',
      foreignKey: 'achatId',
      otherKey: 'articleId'
    });
  };
  return Achat;
};