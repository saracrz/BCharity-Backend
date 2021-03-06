const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  apellido:{
    type: String,
  },
  email: {
    type: String,
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'este email ya está registrado']
  },
  password: {
    type: String
  },
  photoDNI: {
  },
  role: {
    type: String,
    enum: ['Paciente', 'Voluntario', 'Asociación']
  },
  birthdate: {
    type: String
  },
  lugar: {
    type: String,

    enum: ['Gran Canaria', 'Tenerife', 'Lanzarote', 'Fuerteventura', 'La Gomera', 'El Hierro', 'La Palma',
      'Madrid', 'Valencia', 'Barcelona', 'Bilbao', 'Sevilla', 'Otro']
  },
  phone: String,
  horas_acumuludas: Number
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
