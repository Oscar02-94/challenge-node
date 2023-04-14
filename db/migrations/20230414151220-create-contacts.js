'use strict';

const { ContactSchema, CONTACT_TABLE} = require('./../models/contac.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable(CONTACT_TABLE, ContactSchema)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(CONTACT_TABLE)
  }
};
