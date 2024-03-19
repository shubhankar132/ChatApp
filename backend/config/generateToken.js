//we will install jwt or json web token

const jwt = require('jsonwebtoken');

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d', // You can set the expiration time as per your requirements
    });
};

module.exports = generateToken;
