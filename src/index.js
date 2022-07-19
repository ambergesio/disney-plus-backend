const config = require('./config');
const { connectToDatabase } = require('./sequelize');
const cors = require('cors');
const express = require('express');
const app = express();
const router = require('./routes');


app.use('/', router);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.listen(config.port, () => {
    console.log(`Servewr running on http://localhost:${config.port}`);
});

connectToDatabase();