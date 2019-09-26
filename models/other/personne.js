module.exports = (sequelize, DataTypes) => {
  const Personne = sequelize.define('personne', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: DataTypes.INTEGER, // 0 == client , 1 == fornisseur, 2 == cleint en mem temp fornisseur
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    tel: DataTypes.STRING,
    solde: DataTypes.FLOAT,
    raison_social: DataTypes.STRING
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