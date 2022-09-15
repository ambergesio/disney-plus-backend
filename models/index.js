const Sequelize = require('sequelize');
const config = require('../config/config');


const sequelize = new Sequelize(config.database, config.username, config.password, config);


const Character_Movie = sequelize.define('character_movie',
    {}
);


const Genre = sequelize.define('genre',
    {
        name: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        image:  Sequelize.STRING,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE
    },
    {
        timestamps: true
    }
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
        history: Sequelize.TEXT('long'),
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE
    },
    {
        timestamps: true
    }
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
        description: Sequelize.TEXT('long'),
        details: Sequelize.TEXT('long'),
        date: Sequelize.STRING,
        rate: {
            type: Sequelize.INTEGER,
            validate: {
                min: 1,
                max: 5
            }
        },
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
    {
        timestamps: true
    }
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
        timestamps: true
    }
);


Character.belongsToMany(Movie, { through: Character_Movie });
Movie.belongsToMany(Character, { through: Character_Movie });
Character.hasMany(Character_Movie, { onDelete: 'cascade' });
Movie.hasMany(Character_Movie, { onDelete: 'cascade' });
Character_Movie.belongsTo(Character);
Character_Movie.belongsTo(Movie);
Genre.hasMany(Movie, { onDelete: 'cascade' });
Movie.belongsTo(Genre, { foreignKey: 'genreId' });
Role.hasMany(User);
User.belongsTo(Role, { foreignKey: 'roleId' });


Genre.sync();
Movie.sync();
Character.sync();
Character_Movie.sync();
Role.sync();
User.sync();


module.exports = { Character, Movie, Genre, Character_Movie, User, Role };
