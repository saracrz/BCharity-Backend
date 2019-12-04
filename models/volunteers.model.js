const mongoose = require('mongoose');


const volunteerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  dias: {
   type: [String], 
   enum: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
   required: [true, 'El campo es obligatorio']
  },
  horario: {
   type: [String],
   enum: ['Mañana', 'Tarde'],
   required: [true, 'El campo es obligatorio']
  },
  lugar: {
    type: String,
    enum: ['Gran Canaria', 'Tenerife', 'Lanzarote', 'Fuerteventura','La Gomera','El Hierro', 'La Palma',
     'Madrid', 'Valencia', 'Barcelona', 'Bilbao', 'Sevilla', 'Otro'],
    required: [true, 'El campo es obligatorio']
  },
  experience: {
    type: String
  },
  description: {
    type: String,
    required: [true, 'La descripción es obligatoria']
  }

})


const volunteerModel = mongoose.model('volunteer', volunteerSchema)

module.exports = volunteerModel