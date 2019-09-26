module.exports = (sequelize, DataTypes) => {
  const Article_Achat = sequelize.define("article_achat", {
    articleId: DataTypes.UUID,
    achatId: DataTypes.UUID,
    prix_achat: DataTypes.FLOAT,
    qte: DataTypes.INTEGER
  });
  return Article_Achat;
};
