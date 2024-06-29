const jwt = require('jsonwebtoken');
require('dotenv').config();

const authenticateUser = (req, res, next) => {
    // Check if token exists in headers
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ msg: 'Authorization denied. No token provided.' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Add user from payload to request object
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: 'Token is not valid.' });
    }
};

module.exports = authenticateUser;
