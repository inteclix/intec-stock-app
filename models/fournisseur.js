'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fournisseur = sequelize.define('Fournisseur', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    tel: DataTypes.STRING,
    solde: DataTypes.DECIMAL,
    raison_social: DataTypes.STRING
  }, {});
  Fournisseur.associate = function(models) {
    // associations can be defined here
  };
  return Fournisseur;
};