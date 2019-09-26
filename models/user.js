'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Achat);
    User.hasMany(models.Vente);
  };
  return User;
};