const express = require('express');
const userController = require('../controllers/user');
const validateUser = require('../middlewares/userValidation');
const tokenMiddleware = require('../middlewares/token');

const router = express.Router();

router.post('/', 
    validateUser.validateName,
    validateUser.validateEmail,
    validateUser.validatePassword,
    validateUser.validateIfUserAlreadyExists,
    userController.createUser);

router.use(tokenMiddleware.validateToken);

router.get('/:id', userController.getUserById);
router.get('/', userController.getUsers);
router.delete('/me', userController.deleteMe);

module.exports = router;