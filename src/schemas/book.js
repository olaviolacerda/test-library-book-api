const Joi = require('joi');

const createBookSchema = Joi.object({
  title: Joi.string().required(),
  isbn: Joi.string().required(),
  year: Joi.number().required(),
  category_id: Joi.number().required(),
});

const updateBookSchema = {
  body: Joi.object({
    title: Joi.string(),
    isbn: Joi.string(),
    year: Joi.number(),
    category_id: Joi.number(),
  }).min(1),
  params: Joi.object({
    bookId: Joi.number().required(),
  }),
};

const showBookSchema = Joi.object({
  bookId: Joi.number().required(),
});

const deleteBookSchema = Joi.object({
  bookId: Joi.number().required(),
});

module.exports = {
  createBookSchema, showBookSchema, updateBookSchema, deleteBookSchema,
};
