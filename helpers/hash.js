const bcrypt = require('bcrypt');


const hashPassword = async (pass) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(pass, salt);
};


const comparePassword = async (userPassword, savedPass) => {
    return await bcrypt.compare(userPassword, savedPass);
};


module.exports = { hashPassword, comparePassword };
