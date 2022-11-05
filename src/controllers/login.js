const loginService = require('../services/login');

const login = async (req, res) => {
    const { value, error } = loginService.validateBody(req.body);
    if (error) {
       return res.status(400).json({ message: 'Some required fields are missing' });
    }
    const { email, password } = value;
    const token = await loginService.validateLogin({ email, password });
    if (token.error === 'invalid') {
       return res.status(400).json({ message: 'Invalid fields' });
    }   
    res.status(200).json({ token });
};

module.exports = { login };