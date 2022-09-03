const router = require('express').Router();
const { isAdmin } = require('../middlewares/isAdmin');
const { isOwnerOrAdmin } = require('../middlewares/isOwnerOrAdmin');
const {
    getAllUsers,
    userLogin,
    userRegister,
    userCheck,
    updateUser,
    updateUserPassword,
    deleteUser
} = require('../controllers/users.controller');


router.get('/all', isAdmin, getAllUsers);
router.post('/login', userLogin);
router.post('/register', userRegister);
router.post('/check', userCheck);
router.put('/userupdate', isOwnerOrAdmin, updateUser);
router.put('/updatepassword', isOwnerOrAdmin, updateUserPassword);
router.delete('/:id', isOwnerOrAdmin, deleteUser);


module.exports = router;
