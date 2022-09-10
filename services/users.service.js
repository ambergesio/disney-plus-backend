const { validateUser, validateUserUpdate, validateUserUpdatePassword, validateUserLogin, validateEmail } = require('../validations/user.validator');
const { hashPassword, comparePassword } = require('../helpers/hash');
const {
    createNewUserRepo,
    getAllUsersRepo,
    getUserByEmailRepo,
    getUserByIdRepo,
    updateUserRepo,
    deleteUserRepo
} = require('../repositories/users.repository');


const createNewUserService = async (data) => {
    try {
        const user = {
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
            roleId: data.roleId || 3,
            image: data.image || 'images/user.jpg'
        };
        const validatedUser = await validateUser(user);
        if ( validatedUser.error === true  ) {
            return { error: true, message: validatedUser.message}
        }
        if ( validatedUser.error === false  ) {
            user.password = await hashPassword(user.password);
            return await createNewUserRepo(user);
        }
    }
    catch (error) {
        throw error;
    }
};


const getAllUsersService = async () => {
    try {
        return await getAllUsersRepo();
    }
    catch (error) {
        throw error;
    }
};

const getUserByEmailService = async (email) => {
    try {
        const validEmail = validateEmail(email);
        if (!validEmail) {
            return { error: true, message: 'Invalid email address.'};
        }
        return await getUserByEmailRepo(email);
    }
    catch (error) {
        throw error;
    }
}


const updateUserService = async (dataToUpdate, user) => {
    console.log(dataToUpdate, user);
    try {
        const userData = await validateUserUpdate(dataToUpdate);
        if (userData.error === false) {
            if (dataToUpdate.password) {
                delete dataToUpdate.password;
            }
            const updatedUser = await updateUserRepo(dataToUpdate, user.id);
            if (updatedUser) {
                return await getUserByEmailRepo(user.email);
            } else {
                return {error: true, message: "user could not be updated"};
            }
        }
        return userData;
    }
    catch (error) {
        throw error;
    }
};

const updateUserPasswordService = async (user, savedUser) => {
    try {
        const userPassToUpdate = await validateUserUpdatePassword(user);
        if (userPassToUpdate.error === false) {

            const isUser = await getUserByIdRepo(savedUser.id);
            if (!isUser) return { error: true, message: "Could not update password. An error occurred, user does not exist or wrong credentials." };
            
            const isValidOldPass = await comparePassword(user.oldPassword, isUser.dataValues.password);
            if (!isValidOldPass ) return { error: true, message: "Invalid credentials, You'll go to jail."};
            
            const hashedPassword = await hashPassword(user.newPassword);
            user.password = hashedPassword;
            return await updateUserRepo(user, savedUser.id);
        }
        return userPassToUpdate;
    }
    catch (error) {
        throw error;
    }
};
 

const userLoginService = async (user) => {
    try {
        const validation = validateUserLogin(user);
        if (validation.error) return validation;
        const isUser = await getUserByEmailRepo(user.email);
        if (!isUser) return { error: true, message: "User does not exist" };

        const isPassword = await comparePassword(user.password, isUser.password);
        if (!isPassword) return { error: true, message: "Wrong password"};

        return {
            id: isUser.id,
            email: isUser.email,
            firstName: isUser.firstName,
            lastName: isUser.lastName,
            status: isUser.role.role 
        };
    }
    catch (error) {
        throw error;
    }
};


const deleteUserService = async (id) => {
    try {
        return await deleteUserRepo(id);
    }
    catch (error) {
        throw error;
    }
};


module.exports = {
    createNewUserService,
    getAllUsersService,
    getUserByEmailService,
    updateUserService,
    updateUserPasswordService,
    userLoginService,
    deleteUserService };
