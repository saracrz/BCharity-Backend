const mongoose = require('mongoose');


const volunteerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
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
    enum: ['Gran Canaria', 'Tenerife', 'Lanzarote', 'Fuerteventura','La Gomera','El Hierro', 'La Palma',
     'Madrid', 'Valencia', 'Barcelona', 'Bilbao', 'Sevilla', 'Otro']
  },
  experience: {
    type: String
  },
  description: {
    type: String
  }

})


const volunteerModel = mongoose.model('volunteer', volunteerSchema)

module.exports = volunteerModel