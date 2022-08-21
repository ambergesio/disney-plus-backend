const jwt = require('jsonwebtoken');
const config = require('../config/config');


const signToken = async (data) => {
    return await jwt.sign(data, config.secret, { expiresIn: '2h'});
};


const verifyToken = async (token) => {
    return await jwt.verify(token, config.secret)
};


module.exports = { signToken, verifyToken };
