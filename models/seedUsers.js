const { User } = require('./index');
const { hashPassword } = require('../helpers/hash');


const createADmin = async () => {
    const pass = await hashPassword("Admin@1234");
    
    await User.create({
        email: 'admin@mail.com',
        password: pass,
        firstName: "Admin",
        lastName: "Administrator",
        roleId: 1
    });
};

createADmin();
