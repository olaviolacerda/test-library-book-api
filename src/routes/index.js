const routes = require('express').Router();

require('./users')(routes);
require('./session')(routes);

module.exports = routes;
