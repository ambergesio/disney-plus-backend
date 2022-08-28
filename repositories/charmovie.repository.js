const { Character_Movie, Movie, Character } = require('../models');
const { Op } = require("sequelize");


const getAllCharsMoviesRepo = async () => {
    return await Character_Movie.findAll({
        attributes: ['characterId', 'movieId'],
        include: [
            {
                model: Movie,
                attributes: ['title', 'id']
            },
            {
                model: Character,
                attributes: ['name', 'id']
            }
        ]
    });
};


const findCharMovieRepo = async (characterId, movieId) => {
    return await Character_Movie.findOne({
        where: {
            [Op.and]: [
                { characterId },
                { movieId }
            ]
        }
    })
};


const createCharMovieRepo = async (charmovie) => {
    return await Character_Movie.create(charmovie);
};


const deleteCharMovieRepo = async (characterId, movieId) => {
    return await Character_Movie.destroy({
        where: {
            [Op.and]: [
                { characterId },
                { movieId }
            ]
        }
    })
};


module.exports = { getAllCharsMoviesRepo, findCharMovieRepo, createCharMovieRepo, deleteCharMovieRepo };
