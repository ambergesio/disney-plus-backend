const config = require('./config/config');
const { connectToDatabase } = require('./sequelize_test_connection');
const cors = require('cors');
const express = require('express');
const app = express();
const routes = require('./routes');
const port = config.server_port;
const path = require('path');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./documentation/swagger.json');


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({origin: `${config.fepath}`, credentials: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/v1', routes);


app.listen(port, () => {
    console.log('\x1b[42m%s\x1b[0m',`Servewr running on http://localhost:${port}`);
});

connectToDatabase();

module.exports = app;
