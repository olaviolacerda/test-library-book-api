const validator = require('express-joi-validation').createValidator({});
const bookController = require('../controllers/BookController');
const { createBookSchema } = require('../schemas/book');

module.exports = (routes) => {
  routes.post('/books', validator.body(createBookSchema), bookController.create);
};
