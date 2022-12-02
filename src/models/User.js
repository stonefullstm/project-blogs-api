const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: { type: DataTypes.STRING, defaultValue: null },
    },
    {
      timestamps: false,
      underscored: true,
    }
  );

  User.associate = (models) => {
    User.hasMany(models.BlogPost, { foreignKey: 'id', as: 'blogPosts' });
  };

  return User;
};

module.exports = User;