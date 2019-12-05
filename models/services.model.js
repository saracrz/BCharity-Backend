
const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  patient_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'patient'
  }, 
  volunteer_Id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'volunteer'
  }, 
  days: String,
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