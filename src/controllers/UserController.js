/* eslint-disable class-methods-use-this */
const userService = require('../services/UserService');
const CustomError = require('../helpers/error');

class UserController {
  async create(req, res, next) {
    try {
      const user = await userService.create(req.body);

      return res.status(201).json(user);
    } catch (error) {
      return next(new CustomError(400, 'ERROR_CREATE_USER', error.message));
    }
  }

  async show(req, res, next) {
    try {
      const { userId } = req.params;
      const user = await userService.findById(userId, {
        attributes: ['name', 'age', 'phone', 'email'],
      });

      return res.json(user);
    } catch (error) {
      return next(new CustomError(400, 'ERROR_SHOW_USER', error.message));
    }
  }

  async list(req, res, next) {
    try {
      const users = await userService.list();

      return res.json(users);
    } catch (error) {
      return next(new CustomError(400, 'ERROR_LIST_USERS', error.message));
    }
  }

  async update(req, res, next) {
    try {
      const { userId } = req.params;

      await userService.findById(userId);

      const [, [user]] = await userService.update(userId, req.body);

      return res.json(user);
    } catch (error) {
      return next(new CustomError(400, 'ERROR_EDIT_USER', error.message));
    }
  }

  async delete(req, res, next) {
    try {
      const { userId } = req.params;

      await userService.findById(userId);

      const response = await userService.delete(userId);

      if (response === 0) {
        throw new Error(response);
      }

      return res.json({ message: 'User was successfully deleted.' });
    } catch (error) {
      return next(new CustomError(400, 'ERROR_DELETE_USER', error.message));
    }
  }

  async updateFavoriteBooks(req, res, next) {
    try {
      const { userId } = req.params;
      const { bookIds } = req.body;

      const user = await userService.findById(userId);

      await userService.updateFavoriteBooks(user, bookIds);

      return res.json({ message: 'Favorite Books List updated.' });
    } catch (error) {
      return next(new CustomError(400, 'ERROR_UPDATE_USER_FAVORITE_BOOKS', error.message));
    }
  }
}

module.exports = new UserController();
