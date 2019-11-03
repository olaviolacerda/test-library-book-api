const Joi = require('joi');

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  password: Joi.string().required().min(8),
  age: Joi.number().required(),
});

module.exports = { createUserSchema };
