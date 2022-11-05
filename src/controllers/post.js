const jwt = require('jsonwebtoken');
require('dotenv/config');
const postService = require('../services/post');

const createNewPost = async (req, res) => {
    const post = req.body;
    const token = req.headers.authorization;
    const { data: { id } } = await jwt.verify(token, process.env.JWT_SECRET);
    const newPost = await postService.createNewPost({ ...post, userId: id });
    return res.status(201).json(newPost);
};

const getAllPosts = async (req, res) => {
    const posts = await postService.getPosts();
     
    res.status(200).json(posts);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    
    const { post, type } = await postService.getPostById(id);
    
    if (!post) {
        return res.status(404).json({ message: type }); 
    }
    return res.status(200).json(post);
};

const editPost = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
    const oldPost = await postService.getPostById(id);
    const { dataValues } = oldPost.post;
    const token = req.headers.authorization;
    const { data } = await jwt.verify(token, process.env.JWT_SECRET); 
    if (data.id !== dataValues.userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
    
    await postService.editPost(id, title, content);
    const newPost = await postService.getPostById(id);
    return res.status(200).json(newPost);
};

const deletePost = async (req, res) => {
    const { id } = req.params;    
    const postUser = await postService.getPostById(id);
    if (!postUser.post) return res.status(400).json({ message: 'Post does not exist' });
    const { dataValues } = postUser.post;
    const token = req.headers.authorization;
    const { data } = await jwt.verify(token, process.env.JWT_SECRET);
    console.log('user ', data.id);
    console.log('userId ', dataValues.userId);
    if (data.id !== dataValues.userId) {
        return res.status(401).json({ message: 'Unauthorized user' });
    }
    const result = await postService.deletePost(id, dataValues.userId);

    return res.status(204).json({ deleted: result.message });
};

const getPostByQuery = async (req, res) => {
    const { q } = req.query;
    const { post } = await postService.getPostByQuery(q);
    return res.status(200).json(post); 
 };

module.exports = { createNewPost, getAllPosts, getPostById, editPost, deletePost, getPostByQuery };