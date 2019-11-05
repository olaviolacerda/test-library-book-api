/* eslint-disable class-methods-use-this */
const favouriteService = require('../services/FavouriteService');
const CustomError = require('../helpers/error');

class FavouriteController {
  async add(req, res, next) {
    try {
      const { userId } = req.params;
      const { bookId } = req.body;

      await favouriteService.add(userId, bookId);

      return res.status(201).json({ message: 'Book was successfully added to users favourites.' });
    } catch (error) {
      return next(new CustomError(400, 'ERROR_ADD_FAVOURITE_BOOK', error.message));
    }
  }

  async list(req, res, next) {
    try {
      const { userId } = req.params;

      const favouriteBooks = await favouriteService.list(userId);

      return res.json(favouriteBooks);
    } catch (error) {
      return next(new CustomError(400, 'ERROR_LIST_FAVOURITE_BOOKS', error.message));
    }
  }
}
module.exports = new FavouriteController();
