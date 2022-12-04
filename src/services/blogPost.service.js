const { BlogPost, 
  PostCategory,
  User,
  Category, 
  sequelize } = require('../models');

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

const updateBlogPost = async (id, { title, content }) => {
  const [qtdUpdated] = await BlogPost.update(
    { title, content },
    { where: { id } },
  );

  return qtdUpdated > 0;
};

const getAll = async () => BlogPost.findAll({
  include: [
    { model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ],
});

const findByPk = (id) => BlogPost.findByPk(id, {
  include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
});

module.exports = {
  createBlogPost,
  updateBlogPost,
  getAll,
  findByPk,
};