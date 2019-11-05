module.exports = (err, res) => {
  const { statusCode, message, code } = err;
  res.status(statusCode).json({
    timestamp: new Date().getTime(),
    code,
    message,
  });
};
