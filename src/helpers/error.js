class CustomError extends Error {
  constructor(statusCode, code, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.code = code;
  }
}

module.exports = CustomError;
