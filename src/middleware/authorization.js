module.exports = async (req, res, next) => {
  const { isUserAdmin } = req;

  if (!isUserAdmin) {
    return res.status(403).json({ code: 'ERROR_AUTHORIZATION', message: 'User not allowed.', timestamp: new Date().getTime() });
  }

  return next();
};
