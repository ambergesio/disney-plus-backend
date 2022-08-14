const config = require('./config/config');
const { connectToDatabase } = require('./sequelize_test_connection');
const cors = require('cors');
const express = require('express');
const app = express();
const routes = require('./routes');
const port = config.server_port;
const path = require('path');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1', routes);


app.listen(port, () => {
    console.log('\x1b[42m%s\x1b[0m',`Servewr running on http://localhost:${port}`);
});

connectToDatabase();
