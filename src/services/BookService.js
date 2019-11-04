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

  async findById(id) {
    const book = await this.bookModel.findByPk(Number(id));

    if (!book) {
      throw new Error('Book not found');
    }
    return book;
  }
}

module.exports = new BookService();
