module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    isAdmin: DataTypes.INTEGER
  },
    {
      freezeTableName: true,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.achat);
    User.hasMany(models.vente);
  };

  return User;
}