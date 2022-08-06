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
}


module.exports = { getAllMoviesRepo, getMovieByIdRepo };
