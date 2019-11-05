module.exports = (err, res) => {
  if (res.headersSent) {
    const { statusCode, message, code } = err;
    res.status(statusCode).json({
      timestamp: new Date().getTime(),
      code,
      message,
    });
  }

  res.status(500).json({ code: 'INTERNAL_SERVER_ERROR' });
};
