const R = require('ramda');

const userService = require('../services/UserService');
const bookService = require('../services/BookService');

class FavouriteService {
  constructor() {
    this.userService = userService;
    this.bookService = bookService;
  }

  async add(userId, bookId) {
    const user = await this.userService.findById(userId);

    const book = await this.bookService.findById(bookId, {});

    const favouriteBooks = await user.addFavouriteBook(book);

    return favouriteBooks;
  }

  async list(userId) {
    const user = await this.userService.findById(userId);

    const favouriteBooks = await user.getFavouriteBooks();

    const attributes = ['id', 'title', 'year', 'category_id'];

    return favouriteBooks.map((book) => R.pick(attributes, book));
  }
}

module.exports = new FavouriteService();
