const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: [true, 'Name is required']
  },
  email: {
    type: String,
    // required: [true, 'Email is requerido'],
    validate: {
      validator(value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'este email ya está registrado']
  },
  password: {
    type: String,
    required: true
  },
  apellido: {
    type: String,
    // required: [true, 'Surname is required'],
    validate: {
      validator (value) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
      }
    },
    unique: [true, 'This email is registered']
  },
  photoDNI: {
    type: String,
    // required: true
  },
  role: {
    type: String,
    enum: ['Paciente', 'Voluntario', 'Asociación'],
    // required: true
  },
  birthdate: {
    type: Date,
    required: false
  },
  phone: String,
  horas_acumuludas: Number,
  address: String,
  
  // createdAt: {
  //   type: Number,
  //   default: Date.now() // Get a timestamp :)
  // },
 
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel
