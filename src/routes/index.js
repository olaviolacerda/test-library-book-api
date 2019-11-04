const routes = require('express').Router();
const authMiddleware = require('../middleware/authentication');

require('./session')(routes);
// Ensure authentication for routes bellow
routes.use(authMiddleware);

require('./users')(routes);
require('./books')(routes);

module.exports = routes;
