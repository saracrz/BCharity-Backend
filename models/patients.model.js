const mongoose = require ('mongoose');

const patientSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  photoURL: String,
  dias: {
    type: [String],
    enum: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']
  },
  horario: {
    type: [String],
    enum: ['Mañana', 'Tarde']
  },
  lugar: {
    type: String,
    enum: ['Gran Canaria', 'Tenerife', 'Lanzarote', 'Fuerteventura', 'La Gomera', 'El Hierro', 'La Palma',
      'Madrid', 'Valencia', 'Barcelona', 'Bilbao', 'Sevilla', 'Otro']
  },
})

const patientModel = mongoose.model('patient', patientSchema)

module.exports = patientModel