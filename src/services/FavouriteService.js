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
}

module.exports = new FavouriteService();
