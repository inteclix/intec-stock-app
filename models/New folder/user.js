'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: DataTypes.UUID,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.hasMany(models.achat);
    User.hasMany(models.vente);
  };
  return User;
};