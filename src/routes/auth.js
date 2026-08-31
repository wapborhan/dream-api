const router = require("express").Router();

const {
  register,
  login,
  refreshAccessToken,
  logout,
  getMe,
} = require("../controllers/auth");

const verifyToken = require("../middlewares/auth");

// Public routes
router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshAccessToken);

// Protected route
router.get("/me", verifyToken, getMe);

// Logout
router.post("/logout", logout);

module.exports = router;
