const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
      postId: { type: DataTypes.INTEGER, foreignKey: true },
      categoryId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'posts_categories',
    }
  );

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, { 
      foreignKey: 'postId',
      through: PostCategory,
      otherKey: 'categoryId',
      as: 'categories', 
    });
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      through: PostCategory,
      otherKey: 'postId',
      as: 'blogPosts',
    })
  };
  
  return PostCategory;
};

module.exports = PostCategory;