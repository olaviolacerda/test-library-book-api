/* eslint-disable class-methods-use-this */
const userService = require('../services/UserService');

class SessionController {
  async login(req, res) {
    try {
      const response = await userService.login(req.body);

      if (response instanceof Error) {
        return res.status(400).json({ code: 'ERROR_LOGIN_USER', message: response.message, timestamp: new Date().getTime() });
      }

      return res.json(response);
    } catch (error) {
      return res.status(400).json({ code: 'ERROR_LOGIN_USER', message: error.message, timestamp: new Date().getTime() });
    }
  }
}

module.exports = new SessionController();
