const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
    const newUser = await User.create({ displayName, email, password, image });    
    return { newUser };
};

const getUsers = async () => {
    const users = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
    return users; 
};

const getEmailByUser = async (email) => {
    const userEmail = User.findOne({ email: { email } });
    return userEmail;
};

const getUserById = async (id) => {
  const userId = await User
  .findByPk(id, { attributes: ['id', 'displayName', 'email', 'image'] });     
   return userId; 
};

const deleteMe = async (id) => {
    const userId = await User.destroy({ where: { id } });
    return userId;
};
module.exports = { createUser, getEmailByUser, getUsers, getUserById, deleteMe };