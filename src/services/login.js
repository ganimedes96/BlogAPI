const Joi = require('joi');

const jwtUtil = require('../utils/jwt.util');

const { User } = require('../models');

const validateBody = (params) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });

    const { error, value } = schema.validate(params);
  
    return { error, value }; 
}; 

const validateLogin = async ({ email, password }) => {
    const user = await User.findOne({ where: { email } });

    if (!user || user.password !== password) {
        const err = new Error('Invalid fields');
        err.name = 'invalid';
        return { error: err.name }; 
    }
    const { password: _, ...userWithoutPassword } = user.dataValues;
    const token = jwtUtil.createToken(userWithoutPassword);
    return token;
};
module.exports = { validateBody, validateLogin };