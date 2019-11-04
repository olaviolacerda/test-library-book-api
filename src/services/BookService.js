const { Book } = require('../models');

class BookService {
  constructor() {
    this.bookModel = Book;
  }

  async create(data) {
    const book = await this.bookModel.create(data);

    return book;
  }
}

module.exports = new BookService();
