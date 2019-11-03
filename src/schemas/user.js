const Joi = require('joi');

const createUserSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  password: Joi.string().required().min(8),
  age: Joi.number().required(),
});

const updateUserSchema = {
  body: Joi.object({
    name: Joi.string(),
    email: Joi.string().email(),
    phone: Joi.string(),
    password: Joi.string().min(8),
    age: Joi.number(),
  }),
  params: Joi.object({
    userId: Joi.number().required(),
  }),
};

const deleteUserSchema = Joi.object({
  userId: Joi.number().required(),
});

module.exports = { createUserSchema, updateUserSchema, deleteUserSchema };
