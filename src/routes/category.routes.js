const express = require('express');
const categoryController = require('../controllers/category');
const categoryMiddleware = require('../middlewares/categoryValidation');
const tokenMiddleware = require('../middlewares/token');

const router = express.Router();
router.use(tokenMiddleware.validateToken);
router.post('/', 
    categoryMiddleware.categoryValidation,
    categoryController.createCategory);
router.get('/', categoryController.getCategories);
module.exports = router;