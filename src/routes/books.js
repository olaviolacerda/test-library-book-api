const validator = require('express-joi-validation').createValidator({});
const bookController = require('../controllers/BookController');
const { createBookSchema } = require('../schemas/book');
const authorizationMiddleware = require('../middleware/authorization');

module.exports = (routes) => {
  routes.get('/books', bookController.list);
  // Admin routes
  routes.use(authorizationMiddleware);
  routes.post('/books', validator.body(createBookSchema), bookController.create);
};
