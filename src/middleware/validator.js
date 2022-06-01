'use strict';

const validator = (req, res, next) => {

    const queryNAme = req.query.name;
    req.name = queryNAme;
    if (/^[a-zA-Z]+$/.test(queryNAme)) {
        next();
    } else if (queryNAme === '') {
        next('Enter a name');
    } else {
        next('Name should be a string');
    }
};

module.exports = validator;