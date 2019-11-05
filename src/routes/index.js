const routes = require('express').Router();
const authMiddleware = require('../middleware/authentication');
const handleError = require('../middleware/errorHandler');

require('./session')(routes);
// Ensure authentication for routes bellow
routes.use(authMiddleware);

require('./users')(routes);
require('./books')(routes);

routes.use((err, req, res, next) => handleError(err, res));

module.exports = routes;
