const {
    getAllCharsMoviesRepo,
    findCharMovieRepo,
    createCharMovieRepo,
    deleteCharMovieRepo
} = require('../repositories/charmovie.repository');


const getAllCharsMoviesService = async () => {
    try {
        return await getAllCharsMoviesRepo();
    }
    catch (error) {
        throw error;
    }
};


const findCharMovieService = async (data) => {
    try {
        const {characterId, movieId} = data;
        return await findCharMovieRepo(characterId, movieId);
    }
    catch (error) {
        throw error;
    }
};


const createCharMovieService = async (charmovie) => {
    try {
        return await createCharMovieRepo(charmovie);
    }
    catch (error) {
        throw error;
    }
};


const deleteCharMovieService = async (data) => {
    try {
        const { characterId, movieId } = data;
        return await deleteCharMovieRepo(characterId, movieId);
    }
    catch (error) {
        throw error;
    }
};


module.exports = {
    getAllCharsMoviesService,
    findCharMovieService,
    createCharMovieService,
    deleteCharMovieService };