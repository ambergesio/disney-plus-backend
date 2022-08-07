const { User } = require('../models');


const createNewUserRepo = async (user) => {
    return await User.create(user);
};


module.exports = { createNewUserRepo };
