const router = require("express").Router();
const { authenticated, me } = require("../services/auth.service");


const {
  getAllPatients,
  getPatientById,
  createPatient,
  deletePatientById,
  updatePatient
} = require("../controlers/patients.controller"); 


router.get("/", authenticated, getAllPatients);//* Te va a sobbrar
router.get("/:id", getPatientById);//*  
router.post('/', authenticated, createPatient);//*
router.delete("/:id", authenticated, me, deletePatientById);//*
router.put("/:id", authenticated, me, updatePatient);//*

module.exports = router;
