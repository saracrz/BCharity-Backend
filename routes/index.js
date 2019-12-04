const router = require("express").Router();

const authRouter = require("./auth.router");
const usersRouter = require("./users.router");
const patientsRouter = require("./patients.router");
const volunteersRouter = require("./volunteers.router");
const servicesRouter = require("./services.router");

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use("/patients", patientsRouter);
router.use("/volunteers", volunteersRouter);
router.use("/services", servicesRouter);

module.exports = router;
