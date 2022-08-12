const router = require('express').Router();
const { getAllMovies, getMovieById, createNewMovie, updateMovie, deleteMovie } = require('../controllers/movies.controller');
const { isAdmin } = require('../middlewares/isadmin');


router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', isAdmin, createNewMovie);
router.put('/:id', isAdmin, updateMovie);
router.delete('/:id', isAdmin, deleteMovie);


module.exports = router;
