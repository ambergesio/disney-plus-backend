const { Character, Movie, Genre } = require('../models');


const getAllCharactersRepo = async ( characterAttributes, movieAttributes, genreAttributes ) => {
    return await Character.findAll({
        attributes: characterAttributes,
        include: [
            { 
                model: Movie,
                include: [
                    {
                        model: Genre,
                        attributes: genreAttributes
                    }
                ],
                attributes: movieAttributes,
                through: {
                    attributes: []
                }
            }
        ]
    });
};


const getCharacterByIdRepo = async ( id, characterAttributes, movieAttributes, genreAttributes) => {
    return await Character.findByPk( id, {
        attributes: characterAttributes,
        include: [
            {
                model: Movie,
                include: [
                    {
                        model: Genre,
                        attributes: genreAttributes
                    }
                ],
                attributes: movieAttributes,
                through: {
                    attributes: []
                }
            }
        ]
    });
};


module.exports = { getAllCharactersRepo, getCharacterByIdRepo };
