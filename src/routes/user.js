const router = require("express").Router();
const {
  getAllUsers,
  createUsers,
  getSingleUser,
  editSingleUser,
} = require("../controllers/users");

router
  .get("/users", getAllUsers)
  .post("/users", createUsers)
  .get("/user/:username", getSingleUser)
  .put("/user/:username", editSingleUser);

module.exports = router;
