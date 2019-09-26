'use strict';
module.exports = (sequelize, DataTypes) => {
  const Personne = sequelize.define('Personne', {
    id: DataTypes.UUID,
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    tel: DataTypes.STRING,
    solde: DataTypes.DECIMAL,
    type: DataTypes.INTEGER,
    raison_social: DataTypes.STRING
  }, {});
  Personne.associate = function(models) {
    Personne.hasMany(models.achat);
    Personne.hasMany(models.vente);
  };
  return Personne;
};