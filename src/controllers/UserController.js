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
}

module.exports = new UserController();
