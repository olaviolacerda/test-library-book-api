/* eslint-disable class-methods-use-this */
const favouriteService = require('../services/FavouriteService');

class FavouriteController {
  async add(req, res) {
    try {
      const { userId } = req.params;
      const { bookId } = req.body;

      await favouriteService.add(userId, bookId);

      return res.status(201).json({ message: 'Book was successfully added to users favourites.' });
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_ADD_FAVOURITE_BOOK', message: error.message, timestamp: new Date().getTime() });
    }
  }
}
module.exports = new FavouriteController();
