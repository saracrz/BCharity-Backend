const PatientModel = require('../models/patients.model')

module.exports = {
  getAllPatients,
  getPatientById,
  createPatient,
  deletePatientById,
  updatePatient
}

function getAllPatients(req, res) {
  PatientModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}

function getPatientById(req, res) {
  PatientModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}
function createPatient(req, res) {
  PatientModel
    .create(req.body)
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}

function deletePatientById(req, res) {
  PatientModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handdleError(err, res))
}

function updatePatient(req, res) {
  PatientModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}

function handdleError(err, res) {
  return res.status(400).json(err)
}
