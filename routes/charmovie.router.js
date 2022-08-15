const router = require('express').Router();
const { getAllCharsMovies, createCharMovie, deleteCharMovie } = require('../controllers/charmovie.controller');
const { isAdmin } = require('../middlewares/isAdmin');


router.get('/', isAdmin, getAllCharsMovies);
router.post('/', isAdmin, createCharMovie);
router.delete('/', isAdmin, deleteCharMovie);


module.exports = router;
