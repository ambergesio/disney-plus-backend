const validateCharacter = require('../validations/character.validator');
const {
    getAllCharactersRepo,
    getCharacterByIdRepo,
    createNewCharacterRepo,
    updateCharacterRepo,
    deleteCharacterRepo
} = require('../repositories/characters.repository');


const getAllCharactersService = async (query) => {
    try {
        const characterAttributes = query?.character?.split('-') || ['name'];
        const movieAttributes = query?.movie?.split('-') || ['title'];
        const genreAttributes = query?.genre?.split('-') || ['name'];
        return await getAllCharactersRepo(characterAttributes, movieAttributes, genreAttributes);
    }
    catch (error) {
        throw error;
    }
};


const getCharacterByIdService = async (param, query) => {
    try {
        const characterAttributes = query?.character?.split('-') || ['name'];
        const movieAttributes = query?.movie?.split('-') || ['title'];
        const genreAttributes = query?.genre?.split('-') || ['name'];
        return await getCharacterByIdRepo(param.id, characterAttributes, movieAttributes, genreAttributes);
    }
    catch (error) {
        throw error;
    }
};


const createNewCharacterService = async (char) => {
    try {
        const validatedChar = await validateCharacter(char)
        if (validatedChar.error) {
            return validatedChar;
        } else {
            return await createNewCharacterRepo(char);
        }
    }
    catch (error) {
        throw error;
    }
};


const updateCharacterService = async (character, id) => {
    try {
        const updated = await updateCharacterRepo(character, id);
        if (updated[0] === 0) return { error: true };
        const updatedChar =  await getCharacterByIdRepo(id);
        return { error: false, data: updatedChar };
    }
    catch (error) {
        throw error;
    }
};


const deleteCharacterService = async (id) => {
    try {
        return await deleteCharacterRepo(id);
    }
    catch (error) {
        throw error;
    }
};


module.exports = {
    getAllCharactersService,
    getCharacterByIdService,
    createNewCharacterService,
    updateCharacterService,
    deleteCharacterService };
