const express = require('express');

const  UserService = require('../services/user.service');
const validatorHandler = require('../middlewares/validator.handler');
const { getContacSchema, createContacSchema, updateContacSchema } = require('../schemas/contact.schema');

const router = express.Router();
const service = new UserService();


router.get('/', async (req, res, next) => {
  try {
    const contactos = await service.find();
    res.json(contactos);
  } catch (error) {
    next(error);
  }
});



module.exports = router
