const jwt = require('jsonwebtoken');
const UserService = require('../services/user');
const loginService = require('../services/login');

const createUser = async (req, res) => {
    try {
        const { displayName, email, password, image } = req.body;
        await UserService.createUser(displayName, email, password, image);
        const token = await loginService.validateLogin({ displayName, email, password, image });
        return res.status(201).json({ token });
        } catch (e) {
            console.log(e.message);
            res.status(500).json({ message: 'algo deu errado' });
        }
};

const getUsers = async (req, res) => {
    const users = await UserService.getUsers();
    return res.status(200).json(users);
};

const getUserById = async (req, res) => {
try {
        const { id } = req.params;
        const user = await UserService.getUserById(id);
        if (!user) {
            return res.status(404).json({ message: 'User does not exist' });
        }
        return res.status(200).json(user);
} catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: 'deu ruim!' });
    }
};

const deleteMe = async (req, res) => {
    const token = req.headers.authorization;
    const { data } = await jwt.verify(token, process.env.JWT_SECRET);
    await UserService.deleteMe(data.id);
    res.status(204).send();
};

module.exports = { createUser, getUsers, getUserById, deleteMe };