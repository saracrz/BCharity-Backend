
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
  date: Date,
  startTime: String,
  endTime: String,
  confirmation: Boolean, 
  done: Boolean,
  startService: String, 
  endService: String, 
  totalTime: Number

})


const serviceModel = mongoose.model('service', serviceSchema)

module.exports = serviceModel