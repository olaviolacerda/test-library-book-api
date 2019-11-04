const validator = require('express-joi-validation').createValidator({});
const booksController = require('../controllers/BookController');
const {
  createBookSchema, updateBookSchema, deleteBookSchema, showBookSchema,
} = require('../schemas/book');
const authorizationMiddleware = require('../middleware/authorization');

module.exports = (routes) => {
  routes.get('/books', booksController.list);
  routes.get('/books/:bookId', validator.params(showBookSchema), booksController.show);
  // Admin routes
  routes.use(authorizationMiddleware);
  routes.post('/books', validator.body(createBookSchema), booksController.create);
  routes.put('/books/:bookId', [validator.body(updateBookSchema.body), validator.params(updateBookSchema.params)], booksController.update);
  routes.delete('/books/:bookId', validator.params(deleteBookSchema), booksController.delete);
};
