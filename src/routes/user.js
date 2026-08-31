const router = require("express").Router();

const {
  getAllUsers,
  createUsers,
  getSingleUser,
  editSingleUser,
} = require("../controllers/users");

const verifyToken = require("../middlewares/auth");
// Protect everything inside this router

// router.use(verifyToken);

router
  .get("/", getAllUsers)
  .post("/", createUsers)
  .get("/:username", getSingleUser)
  .put("/:username", editSingleUser);

module.exports = router;
