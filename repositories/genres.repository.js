const { Genre, Movie, Character } = require('../models');


const getAllGenresRepo = async ( genreAttributes, movieAttributes, characterAttributes ) => {
    return await Genre.findAll({
        attributes: genreAttributes,
        include: [
            {
                model: Movie,
                include: [
                    {
                        model: Character,
                        attributes: characterAttributes,
                        through: {
                            attributes: []
                        }
                    }
                ],
                attributes: movieAttributes,
            }
        ]
    });
};


const getGenreByIdRepo = async ( id, genreAttributes, movieAttributes, characterAttributes ) => {
    return await Genre.findByPk( id, {
        attributes: genreAttributes,
        include: [
            {
                model: Movie,
                include: [
                    {
                        model: Character,
                        attributes: characterAttributes,
                        through: {
                            attributes: []
                        }
                    }
                ],
                attributes: movieAttributes,
            }
        ]
    });
};


const createNewGenreRepo = async (data) => {
    return await Genre.create(data);
};


const deleteGenreRepo = async (id) => {
    return await Genre.destroy({
        where: { id: id }
    });
}

module.exports = { getAllGenresRepo, getGenreByIdRepo, createNewGenreRepo, deleteGenreRepo };
