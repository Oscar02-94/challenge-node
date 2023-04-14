const { Model, DataTypes, Sequelize } = require('sequelize')

const CONTACT_TABLE = 'contacts';

const ContactSchema = {

  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  firstName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    field: 'first_name'
  },

  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },

  phone: {
    allowNull: true,
    type: DataTypes.STRING,
  },

  email: {
    allowNull: true,
    type: DataTypes.STRING,
  },

  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
}


class Contact extends Model {

  static associate() {
    // creando asociaciones
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CONTACT_TABLE,
      modelName: 'Contac',
      timestamps: false
    }
  }
}

module.exports = { Contact, ContactSchema, CONTACT_TABLE };
