module.exports = (sequelize, DataTypes) => {
  const Achat = sequelize.define('achat', {
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

  Achat.associate = (models) => {
    Achat.belongsTo(models.personne);
    Achat.belongsTo(models.user);
    Achat.belongsToMany(models.article, {
      through: 'article_achat',
      as: 'articles',
      foreignKey: 'achatId',
      otherKey: 'articleId'
    });
  };

  return Achat;
}