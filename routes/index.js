const router = require('express').Router();
const charactersRouter = require('./characters.router');
const moviesRouter = require('./movies.router');
const genresRouter = require('./genres.router');
const authRouter = require('./auth.router');


router.use('/characters', charactersRouter);
router.use('/movies', moviesRouter);
router.use('/genres', genresRouter);
router.use('/auth', authRouter);

router.use('*', (req, res) => {
    return res.status(404).send('Not found');
});


module.exports = router;
