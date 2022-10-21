const {
    getAllGenresService,
    getGenreByIdService,
    createNewGenreService,
    deleteGenreService,
    updateGenreService } = require("../services/genres.service")


const getAllGenres = async (req, res) => {
    try {
        const allGenres = await getAllGenresService(req.query);
        if (!allGenres) {
            return res
            .status(404)
            .json({ 
                error: true,
                message: 'An error occurred, please try again.'
            })
        };
        return res
        .status(200)
        .json({
            error: false,
            message: 'All genres found',
            data: allGenres
        })
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


const getGenreById = async (req, res) => {
    try {
        const genreById = await getGenreByIdService(req.params, req.query);
        if (!genreById) {
            return res
            .status(404)
            .json({
                error: true,
                message: `Genre with id ${req.params.id} not found.`
            })
        };
        return res
        .status(200)
        .json({
            error: false,
            message: 'Genre found',
            data: genreById
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


const createNewGenre = async (req, res) => {
    try {
        const newGenre = await createNewGenreService(req.body);
        if (!newGenre) {
            return res
            .status(422)
            .json({
                error: true,
                message: 'Request could not be created'
            });
        }
        return res
        .status(200)
        .json({
            error: false,
            message: 'Genre created successfully',
            data: newGenre
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


const updateGenre = async (req, res) => {
    try {
        const genreUpdated = await updateGenreService(req.params.id, req.body);
        if (genreUpdated.error) {
            return res
            .status(404)
            .json({
                error: true,
                message: `Genre with id '${req.params.id}' could not be updated.`
            });
        }
        return res
        .status(200)
        .json({
            error: genreUpdated.error,
            message: `Genre with id '${req.params.id}' updated successfully.`,
            data: genreUpdated.data
        });
    }
    catch (error) {
        return res
        .status(500)
        .json({
            error: true,
            message: `${error}`
        });
    };
};


const deleteGenre = async (req, res) => {
    try {
        const deleteGenre = await deleteGenreService(req.params);
        if (!deleteGenre) {
            return res
            .status(404)
            .json({
                error: true,
                message: `Genre with id '${req.params.id}' could not be deleted because it may not exist or has been already deleted.`
            })
        }
        return res
        .status(200)
        .json({
            error: false,
            message: `Genre with id '${req.params.id}' deleted successfully.`
        })
    }
    catch (error) {
        return res.status(500)
        .json({
            error: true,
            message: `${error}`,
        })
    }
};


module.exports = {
    getAllGenres,
    getGenreById,
    createNewGenre,
    deleteGenre,
    updateGenre };
