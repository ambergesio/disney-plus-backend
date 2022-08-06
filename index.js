const config = require('./config/config');
const { connectToDatabase } = require('./sequelize_test_connection');
const cors = require('cors');
const express = require('express');
const app = express();
const routes = require('./routes');
const port = config.server_port;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/api/v1', routes);


app.listen(port, () => {
    console.log(`Servewr running on http://localhost:${port}`);
});

connectToDatabase();
