const ServiceModel = require('../models/Services.model')

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  deleteServiceById,
  updateService
}

function getAllServices (req, res) {
  ServiceModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}

function getServiceById (req, res) {
  ServiceModel
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}
function createService(req, res) {
  ServiceModel
    .create(req.body)
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}

function deleteServiceById (req, res) {
  ServiceModel
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handdleError(err, res))
}

function updateService (req, res) {
  ServiceModel
    .findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}

function handdleError (err, res) {
  return res.status(400).json(err)
}
