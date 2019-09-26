module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    "article",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      code: DataTypes.STRING,
      designation: DataTypes.STRING,
      prix_vente: DataTypes.DECIMAL,
      prix_achat: DataTypes.DECIMAL,
      qte: DataTypes.INTEGER
    },
    {
      freezeTableName: true
    }
  );

  Article.associate = models => {
    Article.belongsTo(models.famille);
    Article.belongsToMany(models.achat, {
      through: 'article_achat',
      as: 'achats',
      foreignKey: 'articleId',
      otherKey: 'achatId'
    });
    Article.belongsToMany(models.vente, {
      through: 'article_vente',
      as: 'ventes',
      foreignKey: 'articleId',
      otherKey: 'venteId'
    });
  };
  return Article;
};
