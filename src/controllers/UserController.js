/* eslint-disable class-methods-use-this */
const userService = require('../services/UserService');

class UserController {
  async create(req, res) {
    try {
      const user = await userService.create(req.body);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_CREATE_USER', message: error.message, timestamp: new Date().getTime() });
    }
  }

  async show(req, res) {
    try {
      const { userId } = req.params;
      const user = await userService.findById(userId, { attributes: ['name', 'age', 'phone', 'email'], include: [{ all: true }] });

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_SHOW_USER', message: error.message, timestamp: new Date().getTime() });
    }
  }

  async list(req, res) {
    try {
      const users = await userService.list();

      return res.json(users);
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_LIST_USERS', message: error.message, timestamp: new Date().getTime() });
    }
  }

  async update(req, res) {
    try {
      const { userId } = req.params;

      await userService.findById(userId);

      const [, [user]] = await userService.update(userId, req.body);

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_EDIT_USER', message: error.message, timestamp: new Date().getTime() });
    }
  }

  async delete(req, res) {
    try {
      const { userId } = req.params;

      await userService.findById(userId);

      const response = await userService.delete(userId);

      if (response === 0) {
        throw new Error(response);
      }

      return res.json({ message: 'User was successfully deleted.' });
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_DELETE_USER', message: error.message, timestamp: new Date().getTime() });
    }
  }

  async updateFavoriteBooks(req, res) {
    try {
      const { userId } = req.params;
      const { bookIds } = req.body;

      const user = await userService.findById(userId);

      await userService.updateFavoriteBooks(user, bookIds);

      return res.json({ message: 'Favorite Books List updated.' });
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_UPDATE_USER_FAVORITE_BOOKS', message: error.message, timestamp: new Date().getTime() });
    }
  }
}

module.exports = new UserController();
