const Sequelize = require('sequelize');
const config = require('../config/config');


const sequelize = new Sequelize(config.database, config.username, config.password, config);


const Character_Movie = sequelize.define('character_movie',
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


const Role = sequelize.define('role',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        role: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        }
    },
    { timestamps: false }
);


const User = sequelize.define('user',
    {
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            defaultValue: 'images/user.jpg'
        },
        roleId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: Role,
                key: 'id'
            }
        },
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE
    },
    {
        timestamps: true,
        paranoid: true
    }
)



Character.belongsToMany(Movie, { through: Character_Movie });
Movie.belongsToMany(Character, { through: Character_Movie });
Character.hasMany(Character_Movie);
Movie.hasMany(Character_Movie);
Character_Movie.belongsTo(Character);
Character_Movie.belongsTo(Movie);
Genre.hasMany(Movie);
Movie.belongsTo(Genre, { foreignKey: 'genreId' });
// Role.hasMany(User);
User.belongsTo(Role, { foreignKey: 'roleId' });


Genre.sync();
Movie.sync();
Character.sync();
Character_Movie.sync();
Role.sync();
User.sync();


module.exports = { Character, Movie, Genre, Character_Movie, User, Role };
