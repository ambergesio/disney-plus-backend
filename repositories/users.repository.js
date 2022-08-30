const { User, Role } = require('../models');


const createNewUserRepo = async (user) => {
    return await User.create(user);
};


const getAllUsersRepo = async () => {
    return await User.findAll({
        include: {
            model: Role
        }
    });
};


const getUserByEmailRepo = async (email) => {
    return await User.findOne({
        where: {
            email: email
        },
        include: [
            {
                model: Role
            }
        ]
    },
    );
};


const getUserByIdRepo = async (id) => {
    return await User.findByPk(id, {
        include: [
            {
                model: Role
            }
        ]
    });
};


const updateUserRepo = async (user, id) => {
    return await User.update(user, {
        where: {
            id
        }
    });
};


const deleteUserRepo = async (id) => {
 return await User.destroy({
    where: {
        id
    }
 })
};


module.exports = { createNewUserRepo, getAllUsersRepo, getUserByEmailRepo, getUserByIdRepo, updateUserRepo, deleteUserRepo };
