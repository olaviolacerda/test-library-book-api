const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { secretKey } = require('../env');
const CustomError = require('../helpers/error');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    const [, accessToken] = authHeader.split(' ');

    const decodedUser = await promisify(jwt.verify)(accessToken, secretKey);

    req.userId = decodedUser.id;
    req.isUserAdmin = decodedUser.admin;

    next();
  } catch (err) {
    next(new CustomError(401, 'ERROR_AUTHENTICATION', 'Invalid authentication token'));
  }
};
