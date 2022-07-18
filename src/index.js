const config = require('./config');

const express = require('express');
const app = express();
const router = require('./routes');


app.use(router);

app.use(express.json());
app.use(express.urlencoded({ extended: false}));


app.listen(config.port, () => {
    console.log(`Servewr running on port ${config.port}`);
});
