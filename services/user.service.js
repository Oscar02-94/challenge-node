const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize')


class UserService {
  constructor(){}

  async find() {
    const rsp = await models.Contact.findAll()
    return rsp
  }
}


module.exports = UserService
