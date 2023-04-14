const Joi = require('joi');

const id = Joi.number().integer();
const firstName = Joi.string().min(3).max(15);
const lastName = Joi.string();
const phone =  Joi.string().min(10);
const email = Joi.string().email();

const createContacSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  phone: phone,
  email: email
});

const updateContacSchema = Joi.object({
  firstName: firstName,
  lastName: lastName,
  phone: phone,
  email: email
});

const getContacSchema = Joi.object({
  id: id.required(),
});

module.exports = { createContacSchema, updateContacSchema, getContacSchema }
