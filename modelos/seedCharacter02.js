const { Character, Movie, Genre, Character_Movie } = require('./index');

const newCharacter = async () => {
    await Character.create({
        image: 'https://images.com/donald_duck.jpg',
        name: 'Donald Duck',
        age: 101,
        weight: 67,
        history: 'This is the second character o Disney world',
        movies: [{
            image: 'https://movies.com/fantasy.jpg',
            title: 'Fantasy',
            date: 1899,
            rate: 5,
            genreId: 1,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }]
    },
    {
        include: Movie
    }
    )
};

newCharacter();