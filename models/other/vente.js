module.exports = (sequelize, DataTypes) => {
  const Vente = sequelize.define('vente', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    versement: DataTypes.DECIMAL,
  },
    {
      freezeTableName: true,
    }
  );

  Vente.associate = (models) => {
    Vente.belongsTo(models.personne);
    Vente.belongsTo(models.user);
    Vente.belongsToMany(models.article, {
      through: 'article_vente',
      as: 'articles',
      foreignKey: 'venteId',
      otherKey: 'articleId'
    });
  };


  return Vente;
}