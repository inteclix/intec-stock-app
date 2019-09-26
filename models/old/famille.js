module.exports = (sequelize, DataTypes) => {
  const Famille = sequelize.define(
    "famille",
    {
      id: DataTypes.UUID,
      name: {
        type: DataTypes.STRING,
        unique: true
      }
    },
    {
      freezeTableName: true
    }
  );

  Famille.associate = models => {
    Famille.hasMany(models.article);
  };
  return Famille;
};
