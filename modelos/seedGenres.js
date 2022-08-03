const { Genre } = require('./index');

const createNewGenres = async () => {
    await Genre.create({
        name: "Drama",
        image:"https://genres.com/drama.jpg",
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    await Genre.create({
        name: "Animation",
        image:"https://genres.com/animation.jpg",
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
}

createNewGenres();
