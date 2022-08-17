const {
    getAllCharsMoviesService,
    findCharMovieService,
    createCharMovieService,
    deleteCharMovieService } = require('../services/charmovie.service');


const getAllCharsMovies = async (req, res) => {
    try {
        const allCharsMoviesList = await getAllCharsMoviesService();
        if (!allCharsMoviesList) {
            return res
            .status(404)
            .json({
                error: true,
                message: 'Could not get characters-movies list. Please try again.'
            });
        }
        return res
        .status(200)
        .json({
            error: false,
            message: 'All character-movie list obtained successfully',
            data: allCharsMoviesList
        });
    }
    catch (error) {
        return res
        .status(500)
        .json({
            error: true,
            message: `${error}`
        });
    }
};


const createCharMovie = async (req, res) => {
    try {
        const alreadyExists = await findCharMovieService(req.body);
        if (alreadyExists) {
            return res
            .status(409)
            .json({
                error: true,
                message: 'Entry already exists.'
            });
        }
        const newCharMovie = await createCharMovieService(req.body);
        if (!newCharMovie) {
            return res
            .status(409)
            .json({
                error: true,
                message: 'New character-movie entry could not be created.'
            });
        }
        return res
        .status(201)
        .json({
            error: false,
            message: 'New character-movie created successfully.',
            data: newCharMovie
        });
    }
    catch (error) {
        return res
        .status(500)
        .json({
            error: true,
            message: `${error}`,
        });
    }
};


const deleteCharMovie = async (req, res) => {
    try {
        const deleteCharMovie = await deleteCharMovieService(req.body);
        if (!deleteCharMovie) {
            return res
            .status(409)
            .json({
                error: true,
                message: 'Character-movie entry could not be deleted because either it doesn`t exist or it has been already deleted.'
            });
        }
        return res
        .status(200)
        .json({
            error: false,
            message: 'Character-movie deleted successfully.',
            data: deleteCharMovie
        });
    }
    catch (error) {
        return res
        .status(500)
        .json({
            error: true,
            message: `${error}`,
        });
    }
};


module.exports = {
    getAllCharsMovies,
    createCharMovie,
    deleteCharMovie };
