const { Book } = require('../models');

class BookService {
  constructor() {
    this.bookModel = Book;
  }

  async create(data) {
    const book = await this.bookModel.create(data);

    return book;
  }

  async list() {
    const books = await this.bookModel.findAll({ raw: true });
    return books;
  }
}

module.exports = new BookService();
