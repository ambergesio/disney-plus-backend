const { Character_Movie } = require('./index');

const moviechar = async () => {
    await Character_Movie.create({
        characterId: 1,
        movieId: 1
    });
    await Character_Movie.create({
        characterId: 1,
        movieId: 2
    });
    await Character_Movie.create({
        characterId: 1,
        movieId: 3
    });
    await Character_Movie.create({
        characterId: 2,
        movieId: 2
    });
    await Character_Movie.create({
        characterId: 2,
        movieId: 3
    });
    await Character_Movie.create({
        characterId: 3,
        movieId: 3
    });
    await Character_Movie.create({
        characterId: 4,
        movieId: 3
    });
    await Character_Movie.create({
        characterId: 5,
        movieId: 1
    });
    await Character_Movie.create({
        characterId: 5,
        movieId: 3
    });
}

moviechar();
