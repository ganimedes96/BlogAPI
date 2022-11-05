const { Op } = require('sequelize');
const { BlogPost, User } = require('../models');
const { Category, PostCategory } = require('../models');

const createNewPost = async ({ title, content, userId, categoryIds }) => {
    const newPost = await BlogPost.create(
        {
            title,
            content,
            published: new Date(), 
            updated: new Date(), 
            userId,

        },
    );
    
  const { dataValues: { id } } = newPost;

  await categoryIds.map(async (categoryId) => {
    await PostCategory.create({ postId: id, categoryId });
  });
  
  return newPost;
};

const getPosts = async () => {
  const posts = await BlogPost.findAll({ 
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { 
        model: Category,
        as: 'categories',
        attributes: ['id', 'name'],
      },
    ], 
  });
  return posts;
};

const getPostById = async (id) => {
  // const postId = await BlogPost.findByPk(id);
  // if (!postId) {
  //   return { type: 'Post does not exist' }; 
  // }
  const post = await BlogPost.findByPk(id, { 
    include: [
      { model: User, as: 'user', attributes: { id: { id }, exclude: ['password'] } },
      { model: Category,
        as: 'categories', 
        attributes: ['id', 'name'],  
      },
    ],
   });
  return { post };
};

const editPost = async (id, title, content) => {
 const [updatedPost] = await BlogPost.update({ title, content }, { where: { id } });
  return updatedPost;
};

const deletePost = async (id, userId) => {
  await BlogPost.destroy({ where: { id, userId } });

  return { message: 'Post deleted successfully' };
};

const getPostByQuery = async (query) => {
  const post = await BlogPost.findAll({
    where: {
      [Op.or]: [
        { title: { [Op.like]: `%${query}` } },
        { content: { [Op.like]: `%${query}` } },
      ],
    },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return { post };
};

module.exports = { createNewPost, getPosts, getPostById, editPost, deletePost, getPostByQuery };  