const { verifyToken } = require('./token');
const { getUserByEmailRepo } = require('../repositories/users.repository');


const isOwnerOrAdmin = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        const ownedUser = req.body.email;
        if (!token) {
            return res
            .status(404)
            .json({
                error: true,
                message: 'You must login in order to perform the action.'
            });
        }
        const user = await verifyToken(token.split(' ')[1]);
        if (!user) {
            return res
            .status(400)
            .json({
                error: true,
                message: 'Invalid token'
            });
        }
        if (user.status === 'admin') {
            const userToUpdate = await getUserByEmailRepo(ownedUser);
            if (!userToUpdate) {
                return res
                .status(404)
                .json({
                    error: true,
                    message: 'User not found'
                })
            }
            req.user = {
                id: userToUpdate.id,
                firstName: userToUpdate.firstName,
                lastName: userToUpdate.lastName,
                email: userToUpdate.email,
                image: userToUpdate.image
            };
            next();
        } else {
            if (user.email !== ownedUser) {
                return res
                .status(400)
                .json({
                    error: true,
                    message: 'You do not have permission to perform the required action.'
                });
            }
            const isValidUser = await getUserByEmailRepo(user.email);
            if (!isValidUser) {
                return res
                .status(400)
                .json({
                    error: true,
                    message: 'User not found'
                });
            }
            if (isValidUser.email === user.email && user.email === ownedUser) {
                req.user = {
                    id: isValidUser.id,
                    firstName: isValidUser.firstName,
                    lastName: isValidUser.lastName,
                    email: isValidUser.email,
                    image: isValidUser.image
                };
                next();
            } else {
                return res
                .status(403)
                .json({
                    error: true,
                    message: 'You do not have permission to perform the required action.'
                });
            }
        }
    }
    catch (error) {
        return res
        .status(400)
        .json({
            error: true,
            message: `${error}`
        });
    }
};


module.exports = { isOwnerOrAdmin };
