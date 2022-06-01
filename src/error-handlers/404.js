'use strict';

const notFound = (req, res, next) => {
    res.status(404).send({
        code: 404,
        path: req.path,
        message: 'Page not found',
    });
};

module.exports = notFound;