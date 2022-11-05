const categoryService = require('../services/category');

const validatePost = async (req, res, next) => {
    const { title, content, categoryIds } = req.body;

    if (!title || !content || categoryIds.length < 1) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
  
    const categories = await categoryService.getCategory();
    
    const idCategories = categories
        .every((categoryId) => categoryIds.find((item) => item === categoryId.id));    
    if (!idCategories) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    next();
};
 
const idPostValidation = (req, res, next) => {
    const { post } = req.body;
    console.log(post);
    if (post) {
        return res.status(404).json({ massage: 'Post does not exist' }); 
    }
    next();
}; 

const editPostValidation = async (req, res, next) => {
    const { title, content } = req.body;
   
    if (!title || !content) {
        return res.status(400).json({ message: 'Some required fields are missing' });
    }
    next();
};

module.exports = { validatePost, idPostValidation, editPostValidation };
