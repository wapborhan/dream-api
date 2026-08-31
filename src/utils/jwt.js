const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  return jwt.sign(
    {
      id: user._id.toString(),
      username: user.username,
      email: user.email,
    },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: process.env.JWT_ACCESS_EXPIRES || "15m",
    },
  );
};

const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      id: user._id.toString(),
    },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: process.env.JWT_REFRESH_EXPIRES || "7d",
    },
  );
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
