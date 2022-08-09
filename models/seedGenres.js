const { Genre } = require('./index');

const createNewGenres = async () => {
    await Genre.create({
        name: 'Cartoon short',
        image:'https://unicheck.com/ua/blog/wp-content/uploads/2015/09/21632-disney-characters.jpeg',
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    await Genre.create({
        name: 'Animation',
        image:'https://i.pinimg.com/originals/17/98/f0/1798f0e79d761c7d2b3b169e8f36d4cc.jpg',
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    await Genre.create({
        name: 'Comedy',
        image: 'https://hips.hearstapps.com/hmg-prod/images/disneychannel-1614633985.jpg',
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    await Genre.create({
        name: 'Drama',
        image: 'https://hips.hearstapps.com/hmg-prod/images/disneychannel-1614633985.jpg',
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
    await Genre.create({
        name: 'Documental',
        image: 'https://sidisney.com/wp-content/uploads/2020/11/t-documentales.jpg',
        createdAt: Date.now(),
        updatedAt: Date.now()
    });
}

createNewGenres();
