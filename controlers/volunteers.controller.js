const VolunteerModel = require('../models/volunteers.model')

module.exports = {
  getAllVolunteers,
  getVolunteers,
  getVolunteerById,
  createVolunteer,
  deleteVolunteerById,
  updateVolunteer
}

//  ?dias=["Lunes"]
function getVolunteers(req, res) {
  const dias = JSON.parse(req.query.dias);
  const horario = JSON.parse(req.query.horario);
  return VolunteerModel
    .find({ $and: [{ dias: { $in: dias } }, { horario: { $in: horario } }] })
    // .find()
    // .and([{ dias: { $in: dias } }, { horario: { $in: horario } }])
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))

}


function getAllVolunteers(req, res) {
  return VolunteerModel
    .find()
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}

function getVolunteerById(req, res) {
  return VolunteerModel 
    .findById(req.params.id)
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}
function createVolunteer(req, res) {
  return VolunteerModel 
    .create(req.body)
    .then(response => res.json(response))
    .catch((err) => handdleError(err, res))
}

function deleteVolunteerById(req, res) {
  return VolunteerModel 
    .remove({ _id: req.params.id })
    .then(response => res.json(response))
    .catch(err => handdleError(err, res))
}
function updateVolunteer(req, res) {
  return VolunteerModel 
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
