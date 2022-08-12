const {
    getAllCharactersService,
    getCharacterByIdService,
    createNewCharacterService,
    updateCharacterService,
    deleteCharacterService } = require('../services/characters.service');


const getAllCharacters = async (req, res) => {
    try{
        const allCharacters = await getAllCharactersService(req.query);
        if (!allCharacters) {
            return res
            .status(400)
            .setHeader('Content-Type', 'application/json')
            .json({
                error: true,
                message: 'An error occurred, please try again.'
            });
        }
        return res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ 
            error: false,
            message: 'All characters successfully obtained',
            data: allCharacters
        });
    }
    catch (error) {
        return res
        .status(500)
        .json({ 
            error: true,
            message: `${error}`
        });
    }
};


const getCharacterById = async (req, res) => {
    try {
        const character = await getCharacterByIdService(req.params, req.query);
        if (!character) {
            return res
            .status(404)
            .setHeader('Content-Type', 'application/json')
            .json({ 
                error: true,
                message: `Character with id ${req.params.id} not found.`
            })
        };
        return res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ 
            error: false,
            message: 'Character found',
            data: character
        });
    }
    catch (error) {
        return res
        .status(500)
        .setHeader('Content-Type', 'application/json')
        .json({ 
            error: true,
            message: `${error}`
        });
    }
};


const createNewCharacter = async (req, res) => {
    try {
        const newChar = await createNewCharacterService(req.body);
        if (newChar.error) {
            return res
            .status(400)
            .json({
                error: newChar.error,
                message: newChar.message
            })
        }
        return res
        .status(200)
        .json({
            error: false,
            message: 'New character created',
            data: newChar
        });
    }
    catch (error) {
        return res
        .status(500)
        .json({
            error: true,
            message: `${error}`
        });
    }
};


const updateCharacter = async (req, res) => {
    try {
        const updateChar = await updateCharacterService(req.body, req.params.id);
        if (updateChar.error) {
            return res
            .status(404)
            .json({
                error: true,
                message: `Character with id ${req.params.id} could not be updated becaus it may not exist.`
            });
        }
        console.log(updateChar)
        return res
        .status(200)
        .json({
            error: updateChar.error,
            message: `Character with id ${req.params.id} updated successfully`,
            data: updateChar.data
        });
    }
    catch (error) {
        return res
        .status(500)
        .json({
            error: true,
            message: `${error}`
        });
    }
};


const deleteCharacter = async (req, res) => {
    try {
        const deletedCharacter = await deleteCharacterService(req.params.id);
        if (!deletedCharacter) {
            return res
            .status(404)
            .json({
                error: true,
                message: `Movie with id ${req.params.id} not found or already deleted.`
            });
        }
        return res
        .status(200)
        .json({
            error: false,
            message: `Character with id ${req.params.id} deleted successfully.`
        });
    }
    catch (error) {
        return res
        .status(500)
        .json({
            error: true,
            message: `${error}`
        });
    }
};


module.exports = {
    getAllCharacters,
    getCharacterById,
    createNewCharacter,
    updateCharacter,
    deleteCharacter };
