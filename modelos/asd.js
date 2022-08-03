const { Character, Movie, Genre, Character_Movie } = require('./index');

const moviechar = async () => {
    await Character_Movie.create({
        characterId: 2,
        movieId: 1
    });
}

moviechar();