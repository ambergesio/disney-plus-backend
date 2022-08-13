const router = require('express').Router();
const { getAllGenres, getGenreById, createNewGenre, updateGenre, deleteGenre } = require('../controllers/genres.controller');
const { isAdmin } = require('../middlewares/isadmin');


router.get('/', getAllGenres);
router.get('/:id', getGenreById);
router.post('/', isAdmin, createNewGenre);
router.put('/:id', isAdmin, updateGenre)
router.delete('/:id', isAdmin, deleteGenre);


module.exports = router;
