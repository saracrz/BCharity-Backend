const router = require("express").Router();
const { authenticated, validUser, me } = require("../services/auth.service");

const {
  getAllServices,
  getServiceById,
  createService,
  deleteServiceById,
  updateService
} = require("../controlers/services.controller");

router.get("/", authenticated, getAllServices); //* ?volunteer_Id="idadasdadad"
router.get("/:id", getServiceById);//*
router.post('/', authenticated, validUser,  createService); //*
router.delete("/:id", authenticated, me, deleteServiceById);//*
router.put("/:id", updateService);//*

module.exports = router;
