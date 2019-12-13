const router = require("express").Router();
const { authenticated } = require("../services/auth.service");


const {
  getAllVolunteers,
  getVolunteers,
  getVolunteerById,
  createVolunteer,
  deleteVolunteerById,
  updateVolunteer
} = require("../controlers/volunteers.controller");


router.get("/", getAllVolunteers);//*
router.get("/search",  getVolunteers);//*  ?horario=["Mañana"]
router.get("/:id", getVolunteerById);//
router.post('/',  createVolunteer);//*
router.delete("/:id", authenticated,  deleteVolunteerById);//*
router.put("/:id", authenticated, updateVolunteer);//*

module.exports = router;
