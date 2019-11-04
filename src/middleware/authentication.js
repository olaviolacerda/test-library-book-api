const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { secretKey } = require('../env');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Missing authentication token' });
  }

  const [, accessToken] = authHeader.split(' ');

  try {
    const decodedUser = await promisify(jwt.verify)(accessToken, secretKey);

    req.userId = decodedUser.id;
    req.isUserAdmin = decodedUser.admin;

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid authentication token' });
  }
};
