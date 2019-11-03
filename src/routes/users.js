const validator = require('express-joi-validation').createValidator({});
const usersController = require('../controllers/UserController');
const { createUserSchema } = require('../schemas/user');
const authorizationMiddleware = require('../middleware/authorization');

module.exports = (routes) => {
  routes.use(authorizationMiddleware);
  routes.post('/users', validator.body(createUserSchema), usersController.create);
};
