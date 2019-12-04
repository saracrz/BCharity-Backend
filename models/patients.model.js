const mongoose = require ('mongoose');

const patientSchema = new mongoose.Schema({
  name: {
    type: String, 
    // require: [true, 'El nombre es obligatorio']
  },
  description: {
    type: String, 
    // require: [true, 'La descripción es obligatoria']
  },
  photoURL: String,
  date: Date,
  timetable: String
  
})

const patientModel = mongoose.model('patient', patientSchema)

module.exports = patientModel