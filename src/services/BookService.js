const { Book, Category } = require('../models');

class BookService {
  constructor() {
    this.bookModel = Book;
  }

  async create(data) {
    const book = await this.bookModel.create(data);

    return book;
  }


  async delete(bookId) {
    const response = await this.bookModel.destroy({
      where: { id: bookId },
    });

    return response;
  }


  async update(bookId, body) {
    const response = await this.bookModel.update(body, {
      where: { id: bookId },
      returning: true,
    });

    return response;
  }

  async list() {
    const books = await this.bookModel.findAll({
      attributes: ['title', 'isbn', 'year'],
      include: { model: Category, as: 'category', attributes: ['title', 'id'] },
    });
    return books;
  }

  async findById(id, options) {
    const findOptions = options || {
      attributes: ['title', 'isbn', 'year'],
      include: {
        model: Category,
        as: 'category',
        attributes: ['title', 'id'],
      },
    };

    const book = await this.bookModel.findByPk(Number(id), findOptions);

    if (!book) {
      throw new Error('Book not found');
    }
    return book;
  }
}

module.exports = new BookService();
