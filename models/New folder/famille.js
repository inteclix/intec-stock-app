'use strict';
module.exports = (sequelize, DataTypes) => {
  const Famille = sequelize.define('Famille', {
    id: DataTypes.UUID,
    name: DataTypes.STRING
  }, {});
  Famille.associate = function(models) {
    Famille.hasMany(models.article);
  };
  return Famille;
};