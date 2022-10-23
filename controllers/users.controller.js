const { signToken, verifyToken } = require('../middlewares/token');
const { welcomeRegistrationEmail } = require('../helpers/sendemail');
const {
    createNewUserService,
    getAllUsersService,
    getUserByEmailService,
    updateUserService,
    updateUserPasswordService,
    userLoginService,
    deleteUserService
} = require('../services/users.service');


const userRegister = async (req, res) => {
    try {
        if (!req.body.email) return res.status(400).json({ error: true, message: "You must provide a valid email in order to continue."});
        if (!req.body.firstName) return res.status(400).json({ error: true, message: "You must provide a valid name in order to continue."});
        const { firstName, email } = req.body;

        const isAlreadyUser = await getUserByEmailService(email);
        if (isAlreadyUser) {
            return res
            .status(409)
            .json({
                error: true,
                message: "User already registered. Sign up with another email address."
            })
        }

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
        };
        const subject = 'Registro exitoso en Disney Plus';
        await welcomeRegistrationEmail(firstName, email, subject);
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
        .json({
            error: false,
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


const userCheck = async (req, res) => {
    try {
        if (!req.header('Authorization')) return res.status(400).json({ error: true, message: "Invalid Token. Must log in."});
        
        const token = req.header('Authorization').split(' ')[1];
        const isUser = await verifyToken(token);
        // console.log(isUser);
        if (!isUser) return res.status(400).json({ error: true, message: "Invalid Token. Must log in."});

        return res.status(200).json({ error: false, message: "Valid user, access granted."});

    }
    catch(error) {
        return res.status(400).json({ error: true, message: error});
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
};


const deleteUser = async (req, res) => {
    try {
        const deleteUser = await deleteUserService(req.params.id);
        if (!deleteUser) {
            return res
            .status(404)
            .json({
                error: true,
                message: `User with id ${req.params.id} could not be deleted.`
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
};


module.exports = {
    userRegister,
    userLogin,
    userCheck,
    getAllUsers,
    updateUser,
    updateUserPassword,
    deleteUser };
