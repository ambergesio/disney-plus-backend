const { Movie, Character, Genre } = require('../models');


const getAllMoviesRepo = async ( moviesAttributes, charactersAttributes, genreAttributes ) => {
    return await Movie.findAll({
        attributes: moviesAttributes,
        include: [
            {
                model: Genre,
                attributes: genreAttributes
            },
            {
                model: Character,
                attributes:  charactersAttributes,
                through: {
                    attributes: []
                }
            }
        ]
    });
};


const getMovieByQueryRepo = async (queryParam, moviesAttributes, charactersAttributes, genreAttributes ) => {
    return await Movie.findAll({
        where: queryParam,
        include: [
            {
                model: Genre,
                attributes: genreAttributes
            },
            {
                model: Character,
                attributes:  charactersAttributes,
                through: {
                    attributes: []
                }
            }
        ],
        attributes: moviesAttributes,
        through: {
            attributes: []
        }
    });
};


const getMovieByIdRepo = async ( id, movieAttributes, charactersAttributes, genreAttributes ) => {
    return await Movie.findByPk( id, {
        attributes: movieAttributes,
        include: [
            {
                model: Genre,
                attributes: genreAttributes
            },
            {
                model: Character,
                attributes: charactersAttributes,
                through: {
                    attributes: []
                }
            }
        ]
    });
};


const createNewMovieRepo = async (movie) => {
    return await Movie.create(movie,
    {
        include: Character
    });
};


const updateMovieRepo = async (movie, id) => {
    return await Movie.update(movie, {
        where: {
            id
        },
        returning: true,
        plain: true
    });
};


const deleteMovieRepo = async (id) => {
    return await Movie.destroy({
        where: {
            id
        }
    });
};


module.exports = {
    getAllMoviesRepo,
    getMovieByQueryRepo,
    getMovieByIdRepo,
    createNewMovieRepo,
    updateMovieRepo,
    deleteMovieRepo
};
