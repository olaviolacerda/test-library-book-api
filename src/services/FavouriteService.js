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

    const ct = await user.addBook(book);

    return true;
  }
}

module.exports = new FavouriteService();
