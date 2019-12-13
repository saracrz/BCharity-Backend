
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  patient_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'patient',
    required: true
  }, 
  volunteer_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'volunteer',
    required : true
  },
  dias: {
    type: [String],
    enum: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
    required: true
  },
  horario: {
    type: [String],
    enum: ['Mañana', 'Tarde'],
    required: true
  },
  message: {
    type: String,
    required: true
  },
  startTime: String,
  endTime: String,
  confirmation: Boolean, 
  done: Boolean,
  startService: String, 
  endService: String, 
  totalTime: String

})


const serviceModel = mongoose.model('service', serviceSchema)

module.exports = serviceModel