/* eslint-disable class-methods-use-this */
const bookService = require('../services/BookService');

class BookController {
  async create(req, res) {
    try {
      const user = await bookService.create(req.body);

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_CREATE_BOOK', message: error.message, timestamp: new Date().getTime() });
    }
  }
}

module.exports = new BookController();
