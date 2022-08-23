const { Movie } = require('./index');

const newMovies = async () => {
    await Movie.create({
        image:'https://movie.com/steamboat-willie.jpg',
        title:'Steamboat Willie',
        date:'1928',
        rate: 5,
        genreId: 1,
        createdAt: Date.now(),
        updatedAT: Date.now()
    });
    await Movie.create({
        image:'https://movie.com/plane-crazy.jpg',
        title:'Plane Crazy',
        date:'1928',
        rate: 4,
        genreId: 1,
        createdAt: Date.now(),
        updatedAT: Date.now()
    });
    await Movie.create({
        image:'https://movie.com/christmas.jpg',
        title:'Mickeys Twice Upon a Christmas',
        date:'2004',
        rate: 5,
        genreId: 2,
        createdAt: Date.now(),
        updatedAT: Date.now()
    });
};

newMovies();