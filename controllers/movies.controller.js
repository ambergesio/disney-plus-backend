const {
    getAllMoviesService,
    getMovieByQueryService,
    getMovieByIdService,
    createNewMovieService,
    deleteMovieService,
    updateMovieService
} = require('../services/movies.service');

const { Op } = require("sequelize");


const getAllMovies = async (req, res) => {
    if (req.query.title) {
        try {
            const titleQuery = { title: {[Op.like]: `%${req.query.title}%`} };
            const getMovieByTitle = await getMovieByQueryService(titleQuery, req.query);
            if (!getMovieByTitle.length) {
                return res
                .status(404)
                .setHeader('Content-Type', 'application/json')
                .json({
                    error: true,
                    message: `Movie with title '${req.query.title}' not found.`
                })
            }
            return res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json({
                error: false,
                message: `Movie with title '${req.query.title}' retrieved successfully.`,
                data: getMovieByTitle
            })
        }
        catch (error) {
            return res
            .status(500)
            .setHeader('Content-Type', 'application/json')
            .json({
                error: true,
                message: `${error}`,
            })
        }
    }

    if (req.query.genreId) {
        console.log(req.query.genreId);
        try {
            const genreIdQuery = { genreId: req.query.genreId };
            const getMovieByGenreId = await getMovieByQueryService(genreIdQuery, req.query);
            if (!getMovieByGenreId.length) {
                return res
                .status(404)
                .setHeader('Content-Type', 'application/json')
                .json({
                    error: true,
                    message: `No movies found with genre id '${req.query.genreId}'.`
                })
            }
            return res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json({
                error: false,
                message: `All movies with genre id '${req.query.genreId}' retrieved successfully.`,
                data: getMovieByGenreId
            })
        }
        catch (error) {
            return res
            .status(500)
            .setHeader('Content-Type', 'application/json')
            .json({
                error: true,
                message: `${error}`,
            })
        }
    }


    try {
        const allMovies = await getAllMoviesService(req.query);
        if (!allMovies) {
            return res
            .status(404)
            .setHeader('Content-Type', 'application/json')
            .json({ 
                error: true,
                message: "An error occurred when trying to get all movies."
            })
        }
        return res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({
            error: false,
            message: 'All movies retrieved successfully',
            data: allMovies
        });
    }
    catch (error) {
        return res
        .status(500)
        .setHeader('Content-Type', 'application/json')
        .json({
            error: true,
            message: `${error}`
        })
    }
};


const getMovieById = async (req, res) => {
    try {
        const movieById = await getMovieByIdService(req.params, req.query);
        if (!movieById) {
            return res
            .status(404)
            .setHeader('Content-Type', 'application/json')
            .json({ 
                error: true,
                message: `Movie with id '${req.params.id}' not found`
            });
        }
        return res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ 
            error: false,
            message: `Movie with id '${req.params.id}' retrieved successfully.`,
            data: movieById
        });
    }
    catch (error) {
        return res
        .status(500)
        .setHeader('Content-Type', 'application/json')
        .json({
            error: true,
            message: `${error}`
        });
    };
};


const createNewMovie = async (req, res) => {
    try {
        const newMovie = await createNewMovieService(req.body);
        if (!newMovie) {
            return res
            .status(400)
            .json({
                error: true,
                message: 'Movie could not be created'
            });
        }
        return res
        .status(200)
        .json({
            error: false,
            message: "new movie created",
            data: newMovie
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


const updateMovie = async (req, res) => {
    try {
        const updateMovie = await updateMovieService(req.body, req.params.id);
        if (updateMovie.error) {
            return res
            .status(404)
            .json({
                error: true,
                message: `Movie with id '${req.params.id}' could not be updated because it may not exist.`
            })
        }
        return res
        .status(200)
        .json({
            error: false,
            message: `Movie with id '${req.params.id}' updated successfuly.`,
            data: updateMovie.data
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


const deleteMovie = async (req, res) => {
    try {
        const deletedMovie = await deleteMovieService(req.params.id);
        if (!deletedMovie){
            return res
            .status(404)
            .json({
                error: true,
                message: `Movie with id '${req.params.id}' not found. It may not exist or may be deleted already.`
            })
        }
        return res
        .status(200)
        .json({
            error: false,
            data: `Movie with id '${req.params.id}' successfully deleted.`
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


module.exports = {
    getAllMovies,
    getMovieById,
    createNewMovie,
    updateMovie,
    deleteMovie };
