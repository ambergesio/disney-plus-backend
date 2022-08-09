## How to create the Database
To create the database from the console, run:
```
node models/createDB.js
```
using sequelize-cli, run the following command:
```
npx sequelize-cli db:create
```

or run the following command in MySqlWorkBench or similar:

```
CREATE DATABASE disney;
```

## Create tables
In order to create tables in the database, run:
```
node models/index
```
All tables will be created in the database

## Populate tables in the database
Run the following commands:

To populate Genres table:
```
node models/seedGenres.js
```

To populate Roles table:
```
node models/seedRoles.js
```

To populate Movies table:
```
node models/seedMovies.js
```

To populate Characters table:
```
node models/seedCharacters.js
```

To relate characters and movies, run:
```
node models/seedCharsMovies.js