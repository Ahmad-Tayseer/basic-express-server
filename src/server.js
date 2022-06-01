"use strict";

const express = require('express');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const notFound = require('./error-handlers/404');
const error = require('./error-handlers/500');
const app = express();

app.use(logger);

app.get('/', (req, res) => {
    res.status(200).send('Hello');
});

app.get('/person', validator, (req,res) => {

    res.status(200).json({
        name: req.name,
    });
});


app.use('*', notFound);
app.use(error);


function start(port) {
    app.listen(port, () => {
        console.log(`I'm listening on port ${port}`);
    });
}

module.exports = {
    app: app,
    start: start,
}