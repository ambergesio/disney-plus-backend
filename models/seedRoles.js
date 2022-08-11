const { Role } = require('./index');

const createRoles = async () => {
    await Role.create({
        role: 'admin'
    });
    await Role.create({
        role: 'moderator'
    });
    await Role.create({
        role: 'user'
    });
};

createRoles();
