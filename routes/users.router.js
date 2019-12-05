const router = require("express").Router();
const { authenticated} = require("../services/auth.service");

const {
  getAllUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUser
} = require("../controlers/users.controller");

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.post('/', createUser);
router.delete("/:id", authenticated, deleteUserById);
router.put("/:id", authenticated, updateUser);

module.exports = router;
