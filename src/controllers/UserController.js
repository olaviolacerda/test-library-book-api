/* eslint-disable class-methods-use-this */
const userService = require('../services/UserService');

class UserController {
  async create(req, res) {
    try {
      const user = await userService.create(req.body);

      return res.json(user);
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_CREATE_USER', message: error.message, timestamp: new Date().getTime() });
    }
  }

  async show(req, res) {
    try {
      const { userId } = req.params;
      const {
        name, age, phone, email,
      } = await userService.findById(userId);

      return res.json({
        name, age, phone, email,
      });
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
}

module.exports = new UserController();
