const router = require("express").Router();
const { authenticated, me } = require("../services/auth.service");


const {
  getAllVolunteers,
  getVolunteers,
  getVolunteerById,
  createVolunteer,
  deleteVolunteerById,
  updateVolunteer
} = require("../controlers/volunteers.controller");


router.get("/", authenticated, getAllVolunteers);//*
router.get("/search", authenticated, getVolunteers);//*  ?horario=["Mañana"]
router.get("/:id", getVolunteerById);//
router.post('/', authenticated, createVolunteer);//*
router.delete("/:id", authenticated, me, deleteVolunteerById);//*
router.put("/:id", authenticated, me, updateVolunteer);//*

module.exports = router;
