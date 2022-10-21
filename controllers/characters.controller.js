const {
    getAllCharactersService,
    getCharacterByQueryService,
    getCharacterByIdService,
    createNewCharacterService,
    updateCharacterService,
    deleteCharacterService
} = require('../services/characters.service');

const { Op } = require("sequelize");


const getAllCharacters = async (req, res) => {
    if (req.query.name) {
        try {
            const nameQuery = { name: {[Op.like]: `%${req.query.name}%`} };
            const characterByName = await getCharacterByQueryService(nameQuery, req.query);
            if (!characterByName.length) {
                return res
                .status(404)
                .setHeader('Content-Type', 'application/json')
                .json({ 
                    error: true,
                    message: `Character with name '${req.query.name}' not found.`
                })
            };
            return res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json({
                error: false,
                message: `Search by name: '${req.query.name}'`,
                data: characterByName
            })
        }
        catch (error) {
            return res
            .status(500)
            .json({ 
                error: true,
                message: `${error}`
            });
        }
    }
    if (req.query.age) {
        try {
            const nameQuery = { age: req.query.age };
            const characterByAge = await getCharacterByQueryService(nameQuery, req.query);
            if (!characterByAge.length) {
                return res
                .status(404)
                .setHeader('Content-Type', 'application/json')
                .json({ 
                    error: true,
                    message: `Character with age '${req.query.age}' not found.`
                })
            };
            return res
            .status(200)
            .setHeader('Content-Type', 'application/json')
            .json({
                error: false,
                message: `Search by age: '${req.query.age}'`,
                data: characterByAge
            })
        }
        catch (error) {
            return res
            .status(500)
            .json({ 
                error: true,
                message: `${error}`
            });
        }
    }
    try {
        const allCharacters = await getAllCharactersService(req.query);
        if (!allCharacters) {
            return res
            .status(400)
            .setHeader('Content-Type', 'application/json')
            .json({
                error: true,
                message: 'Could not retrieve data, please try again.'
            });
        }
        return res
        .status(200)
        .setHeader('Content-Type', 'application/json')
        .json({ 
            error: false,
            message: 'All characters successfully retrieved',
            characters: allCharacters
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
                message: `Character with id ${req.params.id} could not be updated because it does not exist or wrong value.`
            });
        }
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
