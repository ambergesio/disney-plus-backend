const { signToken } = require('../middlewares/token');
const {
    createNewUserService,
    getAllUsersService,
    updateUserService,
    updateUserPasswordService,
    userLoginService,
    deleteUserService} = require('../services/users.service');


const userRegister = async (req, res) => {
    try {
        const registerUser = await createNewUserService(req.body);
        if (registerUser.error === true) {
            return res
            .status(400)
            .setHeader('Content-Type', 'application/json')
            .json({
                error: true,
                message: registerUser.message
            });
        }
        if (!registerUser) {
            return res
            .status(400)
            .setHeader('Content-Type', 'application/json')
            .json({
                error: true,
                message: 'User could not be registered'
            });
        }
        return res
        .status(201)
        .setHeader('Content-Type', 'application/json')
        .json({
            error: false,
            message: 'User registered successfully. You must login in order to continue.'
        });
    }
    catch (error) {
        return res
        .status(500)
        .setHeader('Content-Type', 'application/json')
        .json({
            error: true,
            message: `${error}`
        });
    }
};


const userLogin = async (req, res) => {
    try {
        if (!req.body.email) return res.status(400).json({ error: true, message: 'You must provide your email address'});
        if (!req.body.password) return res.status(400).json({ error: true, message: 'You must provide a password'});
        
        const userLogged = await userLoginService(req.body);
        
        if (userLogged.error === true) {
            return res
            .status(400)
            .setHeader('Content-Type', 'application/json')
            .json({
                error: true,
                message: userLogged.message
            });
        }
        const token = await signToken(userLogged);
        return res.status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ error: false,
            message: 'User logged successfully',
            user: userLogged,
            token
        });
    }
    catch (error) {
        return res
        .status(500)
        .setHeader('Content-Type', 'application/json')
        .json({
            error: true,
            message: `${error}`
        });
    }
};


const getAllUsers = async (req, res) => {
    try {
        const allUsers = await getAllUsersService();
        if (!allUsers) {
            return res
            .status(404)
            .json({
                error: true,
                message: 'An error occurred when trying to get all users from database'
            });
        }
        return res
        .status(200)
        .json({
            error: false,
            message: 'All users',
            data: allUsers
        });
    }
    catch (error) {
        return res
        .status(500)
        .json({
            error: true,
            message: `${error}`
        });
    }
};


const updateUser = async (req, res) => {
    try {
        const updatedUser = await updateUserService(req.body, req.user);
        if (updatedUser.error) {
            return res
            .status(404)
            .json({
                error: true,
                message: `User could not be updated. ${updatedUser.message}`
            });
        }
        delete updatedUser.dataValues.password;
        return res
        .status(200)
        .json({
            error: false,
            message: 'User updated successfully',
            data: updatedUser
        });
    }
    catch (error) {
        return res
        .status(500)
        .json({
            error: true,
            message: `${error}`
        })
    }
};


const updateUserPassword = async (req, res) => {
    try {
        const updatedUser = await updateUserPasswordService(req.body, req.user);
        if (updatedUser.error) {
            return res
            .status(404)
            .json({
                error: true,
                message: `User password could not be updated. ${updatedUser.message}`
            });
        }
        return res
        .status(200)
        .json({
            error: false,
            message: 'User password updated successfully',
            data: updatedUser
        });
    }
    catch (error) {
        return res
        .status(500)
        .json({
            error: true,
            message: `${error}`
        })
    }
}


const deleteUser = async (req, res) => {
    console.log(req.params)
    try {
        const deleteUser = await deleteUserService(req.params.id);
        if (!deleteUser) {
            return res
            .status(404)
            .json({
                error: true,
                message: `User with id ${req.params} could not be deleted.`
            });
        }
        return res
        .status(200)
        .json({
            error: false,
            message: `User with id ${req.params.id} deleted successfully`
        });
    }
    catch (error) {
        return res
        .status(500)
        .json({
            error: true,
            message: `${error}`
        })
    }
}


module.exports = {
    userRegister,
    userLogin,
    getAllUsers,
    updateUser,
    updateUserPassword,
    deleteUser };
