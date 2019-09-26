module.exports = (sequelize, DataTypes) => {
  const Article_Vente = sequelize.define("article_vente", {
    articleId: DataTypes.UUID,
    venteId: DataTypes.UUID,
    prix_vente: DataTypes.DECIMAL,
    qte: DataTypes.INTEGER
  });
  return Article_Vente;
};
