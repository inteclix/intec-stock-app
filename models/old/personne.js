module.exports = (sequelize, DataTypes) => {
  const Personne = sequelize.define('personne', {
    id: DataTypes.UUID,
    type: DataTypes.INTEGER, // 0 == cleint , 1 == fornisseur, 2 == cleint en mem temp fornisseur
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    tel: DataTypes.STRING,
    solde: DataTypes.FLOAT
  },
    {
      freezeTableName: true,
    }
  );

  Personne.associate = (models) => {
    Personne.hasMany(models.achat);
    Personne.hasMany(models.vente);
  };

  return Personne;
}