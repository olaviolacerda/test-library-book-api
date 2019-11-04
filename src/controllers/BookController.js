/* eslint-disable class-methods-use-this */
const bookService = require('../services/BookService');

class BookController {
  async create(req, res) {
    try {
      const book = await bookService.create(req.body);

      return res.json(book);
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_CREATE_BOOK', message: error.message, timestamp: new Date().getTime() });
    }
  }

  async list(req, res) {
    try {
      const books = await bookService.list();

      return res.json(books);
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_LIST_BOOK', message: error.message, timestamp: new Date().getTime() });
    }
  }

  async update(req, res) {
    try {
      const { bookId } = req.params;

      await bookService.findById(bookId);

      const [, [book]] = await bookService.update(bookId, req.body);

      return res.json(book);
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_EDIT_BOOK', message: error.message, timestamp: new Date().getTime() });
    }
  }

  async show(req, res) {
    try {
      const { bookId } = req.params;
      const {
        title, isbn, year,
      } = await bookService.findById(bookId);

      return res.json({
        title, isbn, year,
      });
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_SHOW_BOOK', message: error.message, timestamp: new Date().getTime() });
    }
  }

  async delete(req, res) {
    try {
      const { bookId } = req.params;

      await bookService.findById(bookId);

      const response = await bookService.delete(bookId);

      if (response === 0) {
        throw new Error(response);
      }

      return res.json({ message: 'Book was successfully deleted.' });
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_DELETE_BOOK', message: error.message, timestamp: new Date().getTime() });
    }
  }
}

module.exports = new BookController();
