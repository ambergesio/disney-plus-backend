const config = require('./config/config');
const { connectToDatabase } = require('./sequelize_test_connection');
const cors = require('cors');
const express = require('express');
const app = express();
const routes = require('./routes');
const port = config.server_port;


app.use('/', routes);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


app.listen(port, () => {
    console.log(`Servewr running on http://localhost:${port}`);
});

connectToDatabase();
