const router = require('express').Router();
const { userRegister, userLogin, getAllUsers, updateUser, updateUserPassword, deleteUser } = require('../controllers/users.controller');
const { isAdmin } = require('../middlewares/isAdmin');
const { isOwnerOrAdmin } = require('../middlewares/isOwnerOrAdmin');


router.get('/all', isAdmin, getAllUsers);
router.post('/login', userLogin);
router.post('/register', userRegister);
router.put('/userupdate', isOwnerOrAdmin, updateUser);
router.put('/updatepassword', isOwnerOrAdmin, updateUserPassword);
router.delete('/:id', isOwnerOrAdmin, deleteUser);


module.exports = router;
