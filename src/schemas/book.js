const Joi = require('joi');

const createBookSchema = Joi.object({
  title: Joi.string().required(),
  isbn: Joi.string().required(),
  year: Joi.number().required(),
});

module.exports = { createBookSchema };
