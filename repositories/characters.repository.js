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

const getCharacterByQueryRepo = async ( queryparam, characterAttributes, movieAttributes, genreAttributes) => {
    return await Character.findAll({
        where: queryparam,
        include: [
            {
                model: Movie,
                include: [
                    {
                        model: Genre,
                        attributes: genreAttributes,
                    }
                ],
                attributes: movieAttributes,
                through: {
                    attributes: []
                }
            }
        ],
        attributes: characterAttributes,
        through: {
            attributes: []
        }
    })
}


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


const createNewCharacterRepo = async (character) => {
    try {
        return await Character.create(character, {
            include: Movie
        });
    }
    catch (error) {
        throw error;
    }
};


const updateCharacterRepo = async (character, id) => {
    return await Character.update(character, {
        where: {
            id
        },
        returning: true,
        plain: true
    });
};


const deleteCharacterRepo = async (id) => {
    return await Character.destroy({
        where: {
            id
        }
    });
};


module.exports = {
    getAllCharactersRepo,
    getCharacterByQueryRepo,
    getCharacterByIdRepo,
    createNewCharacterRepo,
    updateCharacterRepo,
    deleteCharacterRepo
};
