const {
    characterNameRE,
    characterAgeRE,
    characterWeightRE,
    characterImageRE,
    characterHistRE } = require('./validations');


const validateCharacter = async (char) => {
    if (!char.name) return {error: true, message: "Character must have a name"};
    if (!characterNameRE.test(char.name)) return {error: true, message: "Character must have a valid name"};
    if (!char.age) return {error: true, message: "Character must have an age"};
    if (!characterAgeRE.test(char.age)) return {error: true, message: "Character must have a valid age"};
    if (!char.image) return {error: true, message: "Character must have an image"};
    if (!characterImageRE.test(char.image)) return {error: true, message: "Character must have a valid image"};
    if (!char.weight) return {error: true, message: "Character must have a weight number"};
    if (!characterWeightRE.test(char.weight)) return {error: true, message: "Character must have a valid weight"};
    if (!char.history) return {error: true, message: "Character must have a history text"};
    if (!characterHistRE.test(char.history)) return {error: true, message: "Character must have a valid history"};
    return {error: false};
};

module.exports = validateCharacter;
