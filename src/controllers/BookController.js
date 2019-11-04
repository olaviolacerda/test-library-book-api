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
}

module.exports = new BookController();
