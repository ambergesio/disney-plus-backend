const { Character } = require('./index');

const newCharacters = async () => {
    await Character.create({
        image: 'images/characters/mickey.jpg',
        name: 'Mickey Mouse',
        age: 94,
        weight: 10,
        history: 'Mickey Mouse is an animated cartoon character co-created in 1928 by Walt Disney, who originally voiced the character, and Ub Iwerks. The longtime mascot of The Walt Disney Company, Mickey is an anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves.'
    });
    await Character.create({
        image: 'images/characters/donald.jpg',
        name: 'Donald Duck',
        age: 86,
        weight: 2000,
        history: 'Donald Fauntleroy Duck is a cartoon character created by The Walt Disney Company. Donald is an anthropomorphic white duck with a yellow-orange bill, legs, and feet. He typically wears a sailor shirt and cap with a bow tie.'
    });
    await Character.create({
        image: 'images/characters/goofy.jpg',
        name: 'Goofy',
        age: 90,
        weight: 5000,
        history: 'Goofy is a cartoon character created by The Walt Disney Company. He is a tall, anthropomorphic dog who typically wears a turtle neck and vest, with pants, shoes, white gloves, and a tall hat originally designed as a rumpled fedora. Goofy is a close friend of Mickey Mouse and Donald Duck.'
    });
    await Character.create({
        image: 'images/characters/minnie.jpg',
        name: 'Minnie Mouse',
        age: 93,
        weight: 10,
        history: 'Minnie Mouse is a cartoon character created by The Walt Disney Company. As the longtime sweetheart of Mickey Mouse, she is an anthropomorphic mouse with white gloves, a bow, polka-dotted dress, white bloomers, and low-heeled shoes occasionally with ribbons on them.'
    });
    await Character.create({
        image: 'images/characters/pluto.jpg',
        name: 'Pluto',
        age: 85,
        weight: 12000,
        history: 'Pluto is a cartoon character created by The Walt Disney Company. He is a yellow-orange color, medium-sized, short-haired dog with black ears. Unlike most Disney characters, Pluto is not anthropomorphic beyond some characteristics such as facial expression. He is Mickeys pet.'
    });
};

newCharacters();