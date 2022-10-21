const {
    getAllGenresRepo,
    getGenreByIdRepo,
    createNewGenreRepo,
    updateGenreRepo,
    deleteGenreRepo
} = require("../repositories/genres.repository");


const getAllGenresService = async (query) => {
    try {
        const genreAttributes = query?.genre?.split('-') || ['name', 'id'];
        const movieAttributes = query?.movie?.split('-') || ['title'];
        const characterAttributes = query?.character?.split('-') || ['name'];
        return await getAllGenresRepo(genreAttributes, movieAttributes, characterAttributes);
    }
    catch (error) {
        throw error;
    }
};


const getGenreByIdService = async (params, query) => {
    try {
        const genreAttributes = query?.genre?.split('-') || ['name', 'id'];
        const movieAttributes = query?.movie?.split('-') || ['title'];
        const characterAttributes = query?.character?.split('-') || ['name'];
        return await getGenreByIdRepo( params.id, genreAttributes, movieAttributes, characterAttributes);
    }
    catch (error) {
        throw error;
    }
};

//@todo validate genre data
const createNewGenreService = async (data) => {
    try {
        const newGenre = {
            name: data.name,
            image: data.image
        }
        return await createNewGenreRepo(newGenre);
    }
    catch (error) {
        throw error;
    }
};


const updateGenreService = async (id, genre) => {
    try {
        const updated =  await updateGenreRepo(id, genre);
        if (updated[1] === 0 || !updated[1]) return { error: true };
        const updatedGenre =  await getGenreByIdService({ id: id });
        return { error: false, data: updatedGenre };
    }
    catch (error) {
        throw error;
    }
};


const deleteGenreService = async (param) => {
    try {
        return await deleteGenreRepo(param.id);
    }
    catch (error) {
        throw error;
    }
};


module.exports = {
    getAllGenresService,
    getGenreByIdService,
    createNewGenreService,
    updateGenreService,
    deleteGenreService };
