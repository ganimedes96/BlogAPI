const jwt = require('../utils/jwt.util');

const validateToken = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({ message: 'Token not found' });
    }

     const { type } = jwt.validateToken(authorization);
    
     if (type) {
        return res.status(401).json({ message: 'Expired or invalid token' });
     }

    next();
};

module.exports = { validateToken };
