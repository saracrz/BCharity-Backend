const router = require("express").Router();
const { authenticated } = require("../services/auth.service");


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
router.delete("/:id", authenticated, deletePatientById);//*
router.put("/:id", authenticated, updatePatient);//*

module.exports = router;
