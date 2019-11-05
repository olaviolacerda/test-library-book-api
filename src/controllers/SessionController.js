/* eslint-disable class-methods-use-this */
const userService = require('../services/UserService');
const CustomError = require('../helpers/error');

class SessionController {
  async login(req, res, next) {
    try {
      const response = await userService.login(req.body);

      if (response instanceof Error) {
        return res.status(400).json({ code: 'ERROR_LOGIN_USER', message: response.message, timestamp: new Date().getTime() });
      }

      return res.json(response);
    } catch (error) {
      return next(new CustomError(400, 'ERROR_LOGIN_USER', error.message));
    }
  }
}

module.exports = new SessionController();
