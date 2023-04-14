// usando la conexion con el orm, configuracion de los modelos


const { Contact, ContactSchema} = require('./contac.model')


function setupModels(sequelize) {

  Contact.init(ContactSchema, Contact.config(sequelize));


  // corriendo el metodo de la asociacion


}



module.exports = setupModels
