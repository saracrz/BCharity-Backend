const router = require("express").Router();
const { authenticated, me } = require("../services/auth.service");

const {
  getAllServices,
  getServiceById,
  createService,
  deleteServiceById,
  updateService
} = require("../controlers/services.controller");

router.get("/", authenticated, getAllServices); //* ?volunteer_Id="idadasdadad"
router.get("/:id", getServiceById);//*
router.post('/', authenticated,    createService); //*
router.delete("/:id", authenticated, me, deleteServiceById);//*
router.put("/:id", updateService);//*

module.exports = router;
