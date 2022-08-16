const router = require('express').Router();
const { getAllCharacters, getCharacterById, createNewCharacter, updateCharacter, deleteCharacter } = require('../controllers/characters.controller');
const { isAdmin } = require('../middlewares/isAdmin');


router.get('/', getAllCharacters);
router.get('/:id', getCharacterById);
router.post('/', isAdmin, createNewCharacter);
router.put('/:id', isAdmin, updateCharacter);
router.delete('/:id', isAdmin, deleteCharacter);


module.exports = router;
