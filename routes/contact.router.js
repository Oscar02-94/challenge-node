const express = require('express');

const  ContactService = require('./../services/contact.service');
const validatorHandler = require('./../middlewares/validator.handler');
const { getContacSchema, createContacSchema, updateContacSchema } = require('./../schemas/contact.schema');

const router = express.Router();
const service = new ContactService();

router.get('/', async (req, res, next) => {
  try {
    const contactos = await service.find();
    res.json(contactos);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getContacSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const contacto = await service.findOne(id);
      res.json(contacto);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createContacSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newContact = await service.create(body);
      res.status(201).json(newContact);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getContacSchema, 'params'),
  validatorHandler(updateContacSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const contacto = await service.update(id, body);
      res.json(contactos);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getContacSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

