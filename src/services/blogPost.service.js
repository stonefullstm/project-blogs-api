const { BlogPost, PostCategory, sequelize } = require('../models');

const createBlogPost = async (
  post,
  userId,
) => {
  const { title, content, categoryIds } = post;
  const result = await sequelize.transaction(async (t) => {
    const newBlogPost = await BlogPost.create(
      { title, content, userId }, { transaction: t },
    );
    const postId = newBlogPost.dataValues.id;
    const postCategories = categoryIds.map(async (categoryId) => PostCategory
      .create({ postId, categoryId }, { transaction: t }));
    await Promise.all(postCategories);
    return newBlogPost; 
  });
  return result;
};

module.exports = {
  createBlogPost,
};