const {
    firstNameRE,
    lastNameRE,
    emailRE,
    passwordRE,
    imageRE } = require('../validations/validations');


const validateUser = (user) => {
    if (!user.firstName) return {error: true, message: 'You must provide a first name.'} 
    if (!firstNameRE.test(user.firstName)) return {error: true, message: 'You must provide a valid name. It must be at least two character long and can only contain letters.'} 
    if (!user.lastName) return {error: true, message: 'You must provide a last name.'} 
    if (!lastNameRE.test(user.lastName)) return {error: true, message: 'You must provide a valid last name. It must be at least two character long and can only contain letters.'} 
    if (!user.email) return {error: true, message: 'You must provide an email.'} 
    if (!emailRE.test(user.email)) return {error: true, message: 'You must provide a valid email address.'} 
    if (!user.password) return {error: true, message: 'You must provide a password.'} 
    if (!passwordRE.test(user.password)) return {error: true, message: 'You must provide a valid password. It must have between 8 and 20 characters and must contain at least one Capital letter, one number and one special character ($@$!%*?&#).'} 
    if (!user.image) return {error: true, message: 'You must provide an image path.'} 
    if (!imageRE.test(user.image)) return {error: true, message: 'You must provide an image path.'} 
    return {error: false};
};


const validateUserUpdate = (user) => {
    if (user.firstName) {
        if (!firstNameRE.test(user.firstName)) return {error: true, message: 'You must provide a valid name. It must be at least two character long and can only contain letters.'} 
    }
    if (user.lastName) {
        if (!lastNameRE.test(user.lastName)) return {error: true, message: 'You must provide a valid last name. It must be at least two character long and can only contain letters.'} 
    }
    if (user.password) {
        if (!passwordRE.test(user.password)) return {error: true, message: 'You must provide a valid password. It must have between 8 and 20 characters and must contain at least one Capital letter, one number and one special character ($@$!%*?&#).'} 
    }
    if (user.image) {
        if (!imageRE.test(user.image)) return {error: true, message: 'Image path not valid.'} 
    }
    if (user.firstName || user.lastName || user.password || user.image) {
        return {error: false};
    }
    return {error: true, message: 'updatable fields missing.'};
};

const validateUserUpdatePassword = (user) => {
    if (user.oldPassword && user.newPassword) {
        if (!passwordRE.test(user.oldPassword)) return {error: true, message: 'User not allowed. You must provide valid credentials.'} 
        if (!passwordRE.test(user.newPassword)) return {error: true, message: 'You must provide a valid new password. It must have between 8 and 20 characters and must contain at least one Capital letter, one number and one special character ($@$!%*?&#).'} 
        return { error: false };
    }
    return { error: true, message: 'updatable fields missing.'};
};


const validateUserLogin = (user) => {
    if (!user.email) return {error: true, message: 'You must provide an email.'} 
    if (!emailRE.test(user.email)) return {error: true, message: 'You must provide a valid email address.'} 
    if (!user.password) return {error: true, message: 'You must provide a password.'} 
    if (!passwordRE.test(user.password)) return {error: true, message: 'You must provide a valid password. It must have between 8 and 20 characters and must contain at least one Capital letter, one number and one special character ($@$!%*?&#).'} 
    return {error: false};
};

const validateEmail = (email) => {
    if (!emailRE.test(email)) return { error: true, message: 'You must provide a valid email address.' };
    return {error: false};
}


module.exports = { validateUser, validateUserUpdate, validateUserUpdatePassword, validateUserLogin, validateEmail };
