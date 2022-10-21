const { verifyToken } = require('./token');
const { getUserByEmailRepo } = require('../repositories/users.repository');


const isAdmin = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) return res.status(403).json({ error: true, message: 'You must login in order to perform the action.'});

        const user = await verifyToken(token.split(' ')[1]);
        if (!user) return res.status(403).json({ error: true, message: 'Invalid token'});

        const isValidUser = await getUserByEmailRepo(user.email);
        if (!isValidUser) return res.status(403).json({ error: true, message: 'User not found'});

        return isValidUser.role.role === 'admin' ? next() : res.status(403).json({ error: true, message: 'You do not have permission to perform the required action.'});

    } catch (error) {
        return res.status(403).json({ error: true, message: `${error}`});
    }
};


module.exports = { isAdmin };
