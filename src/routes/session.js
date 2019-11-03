const validator = require('express-joi-validation').createValidator({});
const sessionController = require('../controllers/SessionController');
const { loginUserSchema } = require('../schemas/session');

module.exports = (routes) => {
  routes.post('/login', validator.body(loginUserSchema), sessionController.login);
};
