const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../models/Users");
const asyncWrapper = require("../middlewares/async");

const { generateAccessToken, generateRefreshToken } = require("../utils/jwt");

// Cookie options
const refreshCookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

// ============================
// REGISTER
// ============================

const register = asyncWrapper(async (req, res) => {
  const { username, email, password, name, photoUrl, address, bio, links } =
    req.body;

  // Required fields
  if (!username || !email || !password || !name || !photoUrl) {
    return res.status(400).json({
      success: false,
      message: "username, email, password, name and photoUrl are required",
    });
  }

  // Password length
  if (password.length < 6) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 6 characters",
    });
  }

  // Check username
  const usernameExists = await Users.findOne({ username });

  if (usernameExists) {
    return res.status(409).json({
      success: false,
      message: "Username already exists",
    });
  }

  // Check email
  const emailExists = await Users.findOne({ email });

  if (emailExists) {
    return res.status(409).json({
      success: false,
      message: "Email already exists",
    });
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create user
  const user = await Users.create({
    username,
    email,
    password: hashedPassword,
    name,
    photoUrl,
    address,
    bio,
    links,
  });

  // Generate tokens
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  // Store refresh token in HTTP-only cookie
  res.cookie("refreshToken", refreshToken, refreshCookieOptions);

  // Don't return password
  const userResponse = {
    id: user._id,
    username: user.username,
    email: user.email,
    name: user.name,
    photoUrl: user.photoUrl,
    address: user.address,
    bio: user.bio,
    links: user.links,
  };

  res.status(201).json({
    success: true,
    message: "Registration successful",
    data: {
      user: userResponse,
      accessToken,
    },
  });
});

// ============================
// LOGIN
// ============================

const login = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  // Explicitly include password
  const user = await Users.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  // Compare password
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  // Generate tokens
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  // Set refresh cookie
  res.cookie("refreshToken", refreshToken, refreshCookieOptions);

  res.status(200).json({
    success: true,
    message: "Login successful",
    data: {
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        name: user.name,
        photoUrl: user.photoUrl,
        address: user.address,
        bio: user.bio,
        links: user.links,
      },
      accessToken,
    },
  });
});

// ============================
// REFRESH ACCESS TOKEN
// ============================

const refreshAccessToken = asyncWrapper(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      success: false,
      message: "Refresh token not found",
    });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    const user = await Users.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User no longer exists",
      });
    }

    const accessToken = generateAccessToken(user);

    res.status(200).json({
      success: true,
      data: {
        accessToken,
      },
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired refresh token",
    });
  }
});

// ============================
// LOGOUT
// ============================

const logout = asyncWrapper(async (req, res) => {
  res.clearCookie("refreshToken", refreshCookieOptions);

  res.status(200).json({
    success: true,
    message: "Logout successful",
  });
});

// ============================
// CURRENT USER
// ============================

const getMe = asyncWrapper(async (req, res) => {
  const user = await Users.findById(req.user.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  res.status(200).json({
    success: true,
    data: user,
  });
});

module.exports = {
  register,
  login,
  refreshAccessToken,
  logout,
  getMe,
};
