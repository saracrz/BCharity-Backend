const router = require("express").Router();
const { authenticated, validUser} = require("../services/auth.service");

const {
  getAllServices,
  getServiceById,
  createService,
  deleteServiceById,
  updateService
} = require("../controlers/services.controller");

router.get("/", getAllServices); //* ?volunteer_Id="idadasdadad"
router.get("/:id", getServiceById);//*
router.post('/', createService); //*
router.delete("/:id", authenticated, deleteServiceById);//*
router.put("/:id", updateService);//*

module.exports = router;
 