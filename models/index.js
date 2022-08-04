const Sequelize = require('sequelize');
const config = require('../config/config');


const sequelize = new Sequelize(config.database, config.username, config.password, config);


const Character_Movie = sequelize.define('Character_Movie',
    {}, { timestamps: false }
);


const Genre = sequelize.define('genre',
    {
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        image: Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE
    },
    { timestamps: true }
);


const Character = sequelize.define('character',
    {
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },    
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        age: Sequelize.INTEGER,
        weight: Sequelize.INTEGER,
        history: Sequelize.STRING(1024)
    },
    { timestamps: true }
);


const Movie = sequelize.define('movie',
    {
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        date: Sequelize.STRING,
        rate: Sequelize.INTEGER,
        genreId: {
            type: Sequelize.INTEGER,
            references: {
                model: Genre,
                key: 'id'
            }
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE
    },
    { timestamps: true }
);



Character.belongsToMany(Movie, { through: Character_Movie });
Movie.belongsToMany(Character, { through: Character_Movie });
Character.hasMany(Character_Movie);
Movie.hasMany(Character_Movie);
Character_Movie.belongsTo(Character);
Character_Movie.belongsTo(Movie);
Genre.hasMany(Movie);
Movie.belongsTo(Genre, { foreignKey: 'genreId' });


Character.sync();
Movie.sync();
Genre.sync();
Character_Movie.sync();


module.exports = { Character, Movie, Genre, Character_Movie };