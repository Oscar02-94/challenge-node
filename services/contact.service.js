const boom = require('@hapi/boom');


const { models } = require('./../libs/sequelize')

class ContactService {
  constructor() {}

  async create(data) {
    const newContact = await models.Contact.create(data)
    return newContact;
  }

  async find() {
    const contactos = await models.Contact.findAll()
    return contactos
  }

  async findOne(id) {
    const contact = await models.Contact.findByPk(id)
    if(!contact){
     throw boom.notFound('contact not found')
    }
    return contact
  }

  async update(id, changes) {
    const contact = await this.findOne(id)
    const respuesta = await user.update(changes)
    return respuesta
  }

  async delete(id) {
    const contact = await this.findOne(id)
    await contact.destroy()
    return { id };
  }
}

module.exports = ContactService;
