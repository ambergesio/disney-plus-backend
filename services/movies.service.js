const {
    getAllMoviesRepo,
    getMovieByIdRepo,
    createNewMovieRepo,
    updateMovieRepo,
    deleteMovieRepo
} = require('../repositories/movies.repository');


const getAllMoviesService = async (query) => {
    try {
        const moviesAttributes = query?.movie?.split('-') || ['title', 'date'];
        const charactersAttributes = query?.character?.split('-') || ['name'];
        const genreAttributes = query?.genre?.split('-') || ['name'];
        return await getAllMoviesRepo(moviesAttributes, charactersAttributes, genreAttributes);
    }
    catch (error) {
        throw error;
    }
};


const getMovieByIdService = async (param, query) => {
    try {
        const movieAttributes = query?.movie?.split('-') || ['title', 'date'];
        const charactersAttributes = query?.character?.split('-') || ['name'];
        const genreAttributes = query?.genre?.split('-') || ['name'];
        return await getMovieByIdRepo( param.id, movieAttributes, charactersAttributes, genreAttributes);
    }
    catch (error) {
        throw error;
    }
};


const createNewMovieService = async (movie) => {
    try {
        return await createNewMovieRepo(movie);
    }
    catch (error) {
        throw error;
    }
};


const updateMovieService = async (movie, id) => {
    try {
        const updated =  await updateMovieRepo(movie, id);
        if (updated[0] === 0) return { error: true };
        const updatedMovie =  await getMovieByIdService({ id: id });
        return { error: false, data: updatedMovie};
    }
    catch (error) {
        throw error;
    }
};


const deleteMovieService = async (id) => {
    try {
        return await deleteMovieRepo(id);
    }
    catch (error) {
        throw error;
    }
};


module.exports = {
    getAllMoviesService,
    getMovieByIdService,
    createNewMovieService,
    updateMovieService,
    deleteMovieService };
