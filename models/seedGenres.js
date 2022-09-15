const { Genre } = require('./index');

const createNewGenres = async () => {
    await Genre.create({
        name: 'Cartoon short',
        image:'images/genres/cartoon-short.jpeg',
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    await Genre.create({
        name: 'Animation',
        image:'images/genres/animation.jpg',
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    await Genre.create({
        name: 'Comedy',
        image:'images/genres/comedy-drama.jpg',
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    await Genre.create({
        name: 'Drama',
        image:'images/genres/comedy-drama.jpg',
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    await Genre.create({
        name: 'Documental',
        image:'images/genres/documental.jpg',
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
}

createNewGenres();
