const Joi = require('joi');

const loginUserSchema = Joi.object({
  password: Joi.string().required().min(8),
  email: Joi.string().email().required(),
});

module.exports = { loginUserSchema };
