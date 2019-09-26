'use strict';
module.exports = (sequelize, DataTypes) => {
  const Famille = sequelize.define('Famille', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING
  }, {});
  Famille.associate = function(models) {
    Famille.hasMany(models.Article);
  };
  return Famille;
};