const { Movie } = require('./index');

const newMovies = async () => {
    await Movie.create({
        image: 'images/movies/steam-boat-willie',
        title:'Steamboat Willie',
        description: 'Este es el primer dibujo animado de Mickey, y el primero con sonido sincronizado. Mickey es un travieso marinero de cubierta en una barcaza que está bajo el comando del tirano capitán Pete.',
        details: 'Este es el primer dibujo animado de Mickey, y el primero con sonido sincronizado. Mickey es un travieso marinero de cubierta en una barcaza que toca una canción folclórica para deleitar a Minnie usando varios animales como instrumentos. Al tirano capitán Pete no le gusta, y Mickey termina pelando papas en la cocina. Este es el primer dibujo animado de Mickey, y el primero con sonido sincronizado. Mickey es un travieso marinero de cubierta en una barcaza que toca una canción folclórica para deleitar a Minnie usando varios animales como instrumentos. Al tirano capitán Pete no le gusta, y Mickey termina pelando papas en la cocina. Este es el primer dibujo animado de Mickey, y el primero con sonido sincronizado. Mickey es un travieso marinero de cubierta en una barcaza que toca una canción folclórica para deleitar a Minnie usando varios animales como instrumentos. Al tirano capitán Pete no le gusta, y Mickey termina pelando papas en la cocina.',
        date:'1928',
        rate: 5,
        genreId: 1,
        createdAt: Date.now(),
        updatedAT: Date.now()
    });
    await Movie.create({
        image: 'images/movies/tres-mosqueteros',
        title:'Los Tres Mosqueteros',
        description: 'La versión musical animada de la historia clásica presenta a los mejores amigos Mickey, Donald y Goofy como conserjes aficionados que sueñan con convertirse en mosqueteros… y salvar a la princesa Minnie.',
        details: 'Los mejores amigos Mickey, Donald y Goofy, son conserjes aficionados que sueñan con convertirse en mosqueteros. Sus vidas dan un vuelco cuando Pedro Pata de Palo, el capitán de los mosqueteros, y su siniestra teniente Clarabella, los usan en su complot para librar al reino de la princesa Minnie, la única ratona entre Pedro y el trono. Quizás Mickey, Donald y Goofy no parezcan héroes, pero tienen una sorpresa para Pete. Juntos, aprenderán que trabajando en equipo, todo es posible. Los mejores amigos Mickey, Donald y Goofy, son conserjes aficionados que sueñan con convertirse en mosqueteros. Sus vidas dan un vuelco cuando Pedro Pata de Palo, el capitán de los mosqueteros, y su siniestra teniente Clarabella, los usan en su complot para librar al reino de la princesa Minnie, la única ratona entre Pedro y el trono. Quizás Mickey, Donald y Goofy no parezcan héroes, pero tienen una sorpresa para Pete. Juntos, aprenderán que trabajando en equipo, todo es posible.',
        date:'2004',
        rate: 4,
        genreId: 2,
        createdAt: Date.now(),
        updatedAT: Date.now()
    });
    await Movie.create({
        image: 'images/movies/twice-upon',
        title:'Mickeys Twice Upon a Christmas',
        description: 'Papá Noel, Mickey, Minnie, y todos sus amigos descubren en esta película original la verdadera alegría navideña. Mira cómo el terco Donald intenta resistirse a la alegría de la temporada, y ríe junto a Mickey y Pluto cuando aprenden una gran lección sobre el poder de la amistad.',
        details: 'Averigua quién se ha portado bien y quién mal en esta espectacular celebración navideña. Papá Noel, Mickey, Minnie, y todos sus amigos descubren en esta película original la verdadera alegría navideña. Mira cómo el terco Donald intenta resistirse a la alegría de la temporada, y ríe junto a Mickey y Pluto cuando aprenden una gran lección sobre el poder de la amistad. Averigua quién se ha portado bien y quién mal en esta espectacular celebración navideña. Papá Noel, Mickey, Minnie, y todos sus amigos descubren en esta película original la verdadera alegría navideña. Mira cómo el terco Donald intenta resistirse a la alegría de la temporada, y ríe junto a Mickey y Pluto cuando aprenden una gran lección sobre el poder de la amistad.',
        date:'2004',
        rate: 5,
        genreId: 2,
        createdAt: Date.now(),
        updatedAT: Date.now()
    });
};

newMovies();