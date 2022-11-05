const express = require('express');
const postController = require('../controllers/post');
const tokenMiddleware = require('../middlewares/token');
const postMiddleware = require('../middlewares/postValidation');

const router = express.Router();

router.use(tokenMiddleware.validateToken);

router.post('/', postMiddleware.validatePost, postController.createNewPost);
router.get('/', postController.getAllPosts);
router.get('/search', postController.getPostByQuery);
router.get('/:id', postController.getPostById);
router.put('/:id', postMiddleware.editPostValidation, postController.editPost);
router.delete('/:id', postController.deletePost);
module.exports = router;