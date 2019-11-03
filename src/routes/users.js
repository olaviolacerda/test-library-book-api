const validator = require('express-joi-validation').createValidator({});
const usersController = require('../controllers/UserController');
const { createUserSchema } = require('../schemas/user');

module.exports = (routes) => {
  routes.post('/users', validator.body(createUserSchema), usersController.create);
};
