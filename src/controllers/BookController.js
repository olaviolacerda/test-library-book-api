/* eslint-disable class-methods-use-this */
const bookService = require('../services/BookService');
const CustomError = require('../helpers/error');

class BookController {
  async create(req, res, next) {
    try {
      const book = await bookService.create(req.body);

      return res.status(201).json(book);
    } catch (error) {
      return next(new CustomError(400, 'ERROR_CREATE_BOOK', error.message));
    }
  }

  async list(req, res, next) {
    try {
      const books = await bookService.list();
      return res.json(books);
    } catch (error) {
      return next(new CustomError(400, 'ERROR_LIST_BOOK', error.message));
    }
  }

  async update(req, res, next) {
    try {
      const { bookId } = req.params;

      await bookService.findById(bookId);

      const [, [book]] = await bookService.update(bookId, req.body);

      return res.json(book);
    } catch (error) {
      return next(new CustomError(400, 'ERROR_EDIT_BOOK', error.message));
    }
  }

  async show(req, res, next) {
    try {
      const { bookId } = req.params;
      const book = await bookService.findById(bookId);

      return res.json(book);
    } catch (error) {
      return next(new CustomError(400, 'ERROR_SHOW_BOOK', error.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { bookId } = req.params;

      await bookService.findById(bookId);

      const response = await bookService.delete(bookId);

      if (response === 0) {
        throw new Error(response);
      }

      return res.json({ message: 'Book was successfully deleted.' });
    } catch (error) {
      return next(new CustomError(400, 'ERROR_DELETE_BOOK', error.message));
    }
  }
}

module.exports = new BookController();
